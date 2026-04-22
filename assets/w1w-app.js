// World 1 World — shared app logic (Shopify AJAX Cart API)
(function () {
  var PRICE = window.W1W_PRICE || 5;
  var FREE_SHIP = window.W1W_FREE_SHIP_THRESHOLD || 35;

  // ── Cart state (Shopify AJAX Cart API) ──
  var cachedCart = null;

  function fetchCart(cb) {
    fetch('/cart.js', { credentials: 'same-origin' })
      .then(function (r) { return r.json(); })
      .then(function (cart) { cachedCart = cart; if (cb) cb(cart); })
      .catch(function () { if (cb) cb(null); });
  }

  function addToCart(item) {
    // item: { id (variant ID), quantity, properties (optional) }
    // OR legacy format: { slug, name, size, qty, price }
    var payload;

    if (item.id) {
      // Direct variant ID format
      payload = { items: [{ id: item.id, quantity: item.quantity || item.qty || 1 }] };
    } else if (item.slug) {
      // Legacy slug format — cannot add without variant ID, redirect to product
      window.location.href = '/products/' + item.slug;
      return;
    } else {
      return;
    }

    fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(payload)
    })
    .then(function (r) { return r.json(); })
    .then(function () {
      showToast('Added to bag');
      fetchCart(function () {
        renderCartDrawer();
        renderBadge();
        openDrawer();
      });
    })
    .catch(function (err) {
      console.error('W1W addToCart error:', err);
      showToast('Could not add to bag');
    });
  }

  function updateQty(key, qty) {
    fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({ id: key, quantity: Math.max(0, qty) })
    })
    .then(function (r) { return r.json(); })
    .then(function (cart) {
      cachedCart = cart;
      renderCartDrawer();
      renderBadge();
    });
  }

  function changeQty(key, delta) {
    if (!cachedCart) return;
    var item = cachedCart.items.find(function (it) { return it.key === key; });
    if (!item) return;
    updateQty(key, item.quantity + delta);
  }

  function removeItem(key) {
    updateQty(key, 0);
  }

  // ── Badge ──
  function renderBadge() {
    var n = cachedCart ? cachedCart.item_count : 0;
    // Update our custom nav badge
    var badge = document.getElementById('w1wCartBadge');
    if (badge) {
      badge.textContent = n;
      badge.style.display = n > 0 ? 'inline-flex' : 'none';
    }
    // Also update any legacy selectors
    document.querySelectorAll('[data-w1w-cart-count]').forEach(function (el) {
      el.textContent = n;
      el.style.display = n > 0 ? 'inline-flex' : 'none';
    });
    document.querySelectorAll('[data-cart-count]').forEach(function (el) {
      el.textContent = n;
      el.style.display = n > 0 ? 'inline-flex' : 'none';
    });
  }

  // ── Drawer ──
  function openDrawer() {
    var d = document.getElementById('w1w-cart-drawer');
    var s = document.getElementById('w1w-scrim');
    if (!d) return;
    d.classList.add('open');
    if (s) s.classList.add('open');
  }

  function closeDrawer() {
    var d = document.getElementById('w1w-cart-drawer');
    var s = document.getElementById('w1w-scrim');
    if (!d) return;
    d.classList.remove('open');
    if (s) s.classList.remove('open');
  }

  function renderCartDrawer() {
    var body = document.getElementById('w1w-drawer-body');
    var foot = document.getElementById('w1w-drawer-foot');
    var free = document.getElementById('w1w-drawer-free');
    if (!body) return;

    if (!cachedCart || !cachedCart.items.length) {
      body.innerHTML = '<div class="w1w-drawer-empty"><div class="big">Your bag is empty</div><p>Pick a nation. Wear it proud.</p><div style="margin-top:24px"><a href="/collections/all" class="btn btn-outline btn-sm" onclick="W1W.closeDrawer()">Shop all nations</a></div></div>';
      if (foot) foot.style.display = 'none';
      if (free) free.style.display = 'none';
      return;
    }

    if (foot) foot.style.display = 'grid';
    if (free) free.style.display = 'block';

    var totalCents = cachedCart.total_price;
    var total = totalCents / 100;
    var remaining = Math.max(0, FREE_SHIP - total);
    var pct = Math.min(100, (total / FREE_SHIP) * 100);

    if (free) {
      free.innerHTML = remaining > 0
        ? 'Add <strong style="color:var(--lime)">$' + remaining.toFixed(2) + '</strong> for free shipping.<div class="w1w-free-bar"><div class="w1w-free-bar-fill" style="width:' + pct + '%"></div></div>'
        : '<strong style="color:var(--lime)">★ Free shipping unlocked</strong><div class="w1w-free-bar"><div class="w1w-free-bar-fill" style="width:100%"></div></div>';
    }

    body.innerHTML = cachedCart.items.map(function (it) {
      var imgSrc = it.featured_image ? it.featured_image.url : '';
      var imgHtml = imgSrc
        ? '<img src="' + imgSrc + '" alt="' + it.product_title + '" style="width:100%;height:100%;object-fit:cover;display:block">'
        : '<div style="width:100%;height:100%;background:var(--bg-2);display:flex;align-items:center;justify-content:center;color:var(--ink-3);font-size:10px;letter-spacing:0.1em;text-transform:uppercase">W1W</div>';

      // Use properties.country if available, else product_title
      var displayName = it.product_title;
      if (it.properties && it.properties.country) displayName = it.properties.country;

      var variantLabel = '';
      if (it.variant_title && it.variant_title !== 'Default Title') {
        variantLabel = 'Size ' + it.variant_title;
      }

      var linePrice = (it.final_line_price / 100).toFixed(2);

      return '<div class="w1w-cart-item">' +
        '<div class="w1w-cart-item-img">' + imgHtml + '</div>' +
        '<div class="w1w-cart-item-body">' +
          '<div class="w1w-cart-item-name">' + displayName.toUpperCase() + '</div>' +
          '<div class="w1w-cart-item-sub">' + variantLabel + '</div>' +
          '<div class="w1w-cart-item-qty">' +
            '<button onclick="W1W.changeQty(\'' + it.key + '\', -1)">−</button>' +
            '<span style="min-width:20px;text-align:center">' + it.quantity + '</span>' +
            '<button onclick="W1W.changeQty(\'' + it.key + '\', 1)">+</button>' +
          '</div>' +
          '<button class="w1w-cart-item-remove" onclick="W1W.removeItem(\'' + it.key + '\')">Remove</button>' +
        '</div>' +
        '<div class="w1w-cart-item-price">$' + linePrice + '</div>' +
      '</div>';
    }).join('');

    var totalEl = document.getElementById('w1w-drawer-total');
    if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
  }

  // ── Toast ──
  var toastTimer;
  function showToast(msg) {
    var t = document.getElementById('w1w-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'w1w-toast';
      t.className = 'w1w-toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    requestAnimationFrame(function () { t.classList.add('show'); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2000);
  }

  // ── Reveal on scroll ──
  function wireReveal() {
    if (!window.IntersectionObserver) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  }

  // ── Public API ──
  window.W1W = {
    addToCart: addToCart,
    changeQty: changeQty,
    removeItem: removeItem,
    openDrawer: openDrawer,
    closeDrawer: closeDrawer,
    showToast: showToast,
    fetchCart: fetchCart,
    renderDrawer: renderCartDrawer,
    renderBadge: renderBadge,
  };

  // ── Init ──
  document.addEventListener('DOMContentLoaded', function () {
    // Fetch current Shopify cart state
    fetchCart(function () {
      renderBadge();
      renderCartDrawer();
    });

    wireReveal();

    var closeBtn = document.getElementById('w1w-drawer-close');
    var scrim = document.getElementById('w1w-scrim');
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (scrim) scrim.addEventListener('click', closeDrawer);

    document.querySelectorAll('[data-open-cart]').forEach(function (b) {
      b.addEventListener('click', function (e) { e.preventDefault(); openDrawer(); });
    });

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });

    // Listen for Shopify theme's native cart events to keep drawer in sync
    document.addEventListener('cart:update', function () {
      fetchCart(function () {
        renderCartDrawer();
        renderBadge();
      });
    });
  });
})();
