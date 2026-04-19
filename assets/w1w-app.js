// World 1 World — shared app logic
(function () {
  var PRICE = window.W1W_PRICE || 5;
  var FREE_SHIP = window.W1W_FREE_SHIP_THRESHOLD || 35;
  var KEY = 'w1w_cart_v1';

  // ── Cart state (localStorage for prototype; wire to Shopify AJAX API in production) ──
  function readCart() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch(e) { return []; } }
  function writeCart(c) { localStorage.setItem(KEY, JSON.stringify(c)); renderCartDrawer(); renderBadge(); }

  function addToCart(item) {
    var c = readCart();
    var key = item.slug + '|' + (item.size || 'M');
    var ex = c.find(function(x) { return x.key === key; });
    if (ex) ex.qty += (item.qty || 1);
    else c.push(Object.assign({}, item, { key: key, qty: item.qty || 1 }));
    writeCart(c);
    showToast('Added to bag');
    openDrawer();
  }

  function updateQty(key, delta) {
    var c = readCart();
    var it = c.find(function(x) { return x.key === key; });
    if (!it) return;
    it.qty += delta;
    if (it.qty <= 0) return writeCart(c.filter(function(x) { return x.key !== key; }));
    writeCart(c);
  }

  function cartTotal() { return readCart().reduce(function(s, i) { return s + i.qty * (i.price || PRICE); }, 0); }
  function cartCount() { return readCart().reduce(function(s, i) { return s + i.qty; }, 0); }

  // ── Flag swatch ──
  window.flagSwatch = function(country) {
    var a = country.colors[0], b = country.colors[1], c2 = country.colors[2];
    return '<span class="mega-flag" style="background:linear-gradient(90deg, ' + a + ' 33%, ' + b + ' 33% 66%, ' + c2 + ' 66%)"></span>';
  };

  // ── CSS bracelet ──
  window.braceletHTML = function(country) {
    var c = country.colors;
    return '<div class="bracelet-scene"><div class="floor"></div><div class="bracelet-ph" style="--c1:' + c[0] + ';--c2:' + c[1] + ';--c3:' + c[2] + '"></div></div>';
  };

  // ── Badge ──
  function renderBadge() {
    var n = cartCount();
    document.querySelectorAll('[data-w1w-cart-count]').forEach(function(el) {
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
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    var d = document.getElementById('w1w-cart-drawer');
    var s = document.getElementById('w1w-scrim');
    if (!d) return;
    d.classList.remove('open');
    if (s) s.classList.remove('open');
    document.body.style.overflow = '';
  }

  function renderCartDrawer() {
    var body = document.getElementById('w1w-drawer-body');
    var foot = document.getElementById('w1w-drawer-foot');
    var free = document.getElementById('w1w-drawer-free');
    if (!body) return;

    var cart = readCart();
    if (!cart.length) {
      body.innerHTML = '<div class="w1w-drawer-empty"><div class="big">Your bag is empty</div><p>Pick a nation. Wear it proud.</p><div style="margin-top:24px"><a href="/collections/all" class="btn btn-outline btn-sm" onclick="W1W.closeDrawer()">Shop all nations</a></div></div>';
      if (foot) foot.style.display = 'none';
      if (free) free.style.display = 'none';
      return;
    }

    if (foot) foot.style.display = 'grid';
    if (free) free.style.display = 'block';

    var total = cartTotal();
    var remaining = Math.max(0, FREE_SHIP - total);
    var pct = Math.min(100, (total / FREE_SHIP) * 100);

    if (free) {
      free.innerHTML = remaining > 0
        ? 'Add <strong style="color:var(--lime)">$' + remaining.toFixed(2) + '</strong> for free worldwide shipping.<div class="w1w-free-bar"><div class="w1w-free-bar-fill" style="width:' + pct + '%"></div></div>'
        : '<strong style="color:var(--lime)">★ Free worldwide shipping unlocked</strong><div class="w1w-free-bar"><div class="w1w-free-bar-fill" style="width:100%"></div></div>';
    }

    body.innerHTML = cart.map(function(it) {
      var country = (window.W1W_COUNTRIES || []).find(function(x) { return x.slug === it.slug; });
      var colors = country ? country.colors : ['#F3FFCA', '#0E0E0E', '#F3FFCA'];
      return '<div class="w1w-cart-item">' +
        '<div class="w1w-cart-item-img"><div class="bracelet-scene" style="height:100%;aspect-ratio:1"><div class="floor"></div><div class="bracelet-ph" style="--c1:' + colors[0] + ';--c2:' + colors[1] + ';--c3:' + colors[2] + ';width:95%"></div></div></div>' +
        '<div>' +
          '<div class="w1w-cart-item-name">' + it.name + '</div>' +
          '<div class="w1w-cart-item-sub">Size ' + (it.size || 'M') + ' · ' + (country ? country.sub : '') + '</div>' +
          '<div class="w1w-cart-item-qty">' +
            '<button onclick="W1W.updateQty(\'' + it.key + '\', -1)">−</button>' +
            '<span style="min-width:20px;text-align:center">' + it.qty + '</span>' +
            '<button onclick="W1W.updateQty(\'' + it.key + '\', 1)">+</button>' +
            '<button style="margin-left:8px;border:0;color:var(--ink-3);background:transparent" onclick="W1W.updateQty(\'' + it.key + '\', -999)">Remove</button>' +
          '</div>' +
        '</div>' +
        '<div class="w1w-cart-item-price">$' + (it.qty * (it.price || PRICE)).toFixed(2) + '</div>' +
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
    requestAnimationFrame(function() { t.classList.add('show'); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function() { t.classList.remove('show'); }, 2000);
  }

  // ── Mega menu ──
  function wireMegaMenu() {
    var trigger = document.getElementById('w1w-mega-trigger');
    var menu = document.getElementById('w1w-megamenu');
    if (!trigger || !menu) return;
    var timer;
    var open = function() { clearTimeout(timer); menu.classList.add('open'); };
    var close = function() { timer = setTimeout(function() { menu.classList.remove('open'); }, 120); };
    [trigger, menu].forEach(function(el) {
      el.addEventListener('mouseenter', open);
      el.addEventListener('mouseleave', close);
    });
  }

  // ── Reveal on scroll ──
  function wireReveal() {
    if (!window.IntersectionObserver) return;
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function(el) { io.observe(el); });
  }

  // ── Public API ──
  window.W1W = {
    addToCart: addToCart,
    updateQty: updateQty,
    cartTotal: cartTotal,
    cartCount: cartCount,
    readCart: readCart,
    openDrawer: openDrawer,
    closeDrawer: closeDrawer,
    showToast: showToast,
    country: function(slug) { return (window.W1W_COUNTRIES || []).find(function(c) { return c.slug === slug; }); },
  };

  // ── Init ──
  document.addEventListener('DOMContentLoaded', function() {
    renderBadge();
    renderCartDrawer();
    wireMegaMenu();
    wireReveal();

    var closeBtn = document.getElementById('w1w-drawer-close');
    var scrim = document.getElementById('w1w-scrim');
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (scrim) scrim.addEventListener('click', closeDrawer);

    document.querySelectorAll('[data-open-cart]').forEach(function(b) {
      b.addEventListener('click', function(e) { e.preventDefault(); openDrawer(); });
    });

    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeDrawer(); });
  });
})();
