# World1World — Copy Review & Questionnaire

Instructions: For each item below, I've flagged copy that may need correction. Fill in your answer after **YOUR ANSWER:** and I'll update the site accordingly. If the current copy is fine, just write "OK".

---

## RED FLAGS — Likely Incorrect / Needs Fact-Check

### 1. "Signature 5-star embroidery celebrating the legacy of world football icons."
- **Where:** Product page feature 2 (`templates/product.json:89`, `sections/w1w-pdp-features.liquid:86`)
- **Issue:** Says there's "5-star embroidery" — is there any embroidery on a rubber wristband? This sounds like it was written for a different product.
- **YOUR ANSWER:**
replace

### 2. "RIO ENERGY SOUL" (Feature 2 title)
- **Where:** Product page (`templates/product.json:88`)
- **Issue:** What does "Rio Energy Soul" mean? It reads like a random placeholder or AI-generated name. Is this an actual feature/design element?
- **YOUR ANSWER:**
replace

### 3. "Woven into one thread" / "one continuous thread"
- **Where:** `assets/w1w-data.js:69` and `templates/index.json:164`
- **Issue:** Legacy collection blurb says "Woven into one thread" — the wristbands are rubber, not woven/threaded. Misleading material description.
- **YOUR ANSWER:**
replace

### 4. "Every winning nation. Every final. Woven into one thread."
- **Where:** `assets/w1w-data.js:69`
- **Issue:** Same "woven" issue. Also — does the Legacy series actually cover every World Cup winning nation and every final? Is that accurate?
- **YOUR ANSWER:**
replace

### 5. "73 Countries" — is this still accurate?
- **Where:** Appears in multiple places: hero stats (`index.json:29`), product page features (`product.json:71,91`), announcement bar, bento section
- **Issue:** Is 73 the actual number of countries you ship to? This number is hardcoded everywhere — if it changes, it needs updating in ~6 places.
- **YOUR ANSWER:**
usa  wide like nationwide in the usa

### 6. "50+ Nations" — actual count?
- **Where:** Hero (`index.json:19,25`), marquee (`product.json:79`), featured products, etc.
- **Issue:** The data file (`w1w-data.js`) lists exactly 48 nations. Is "50+" accurate or aspirational? Should it say "48 nations" or is Drop 04 adding more before launch?
- **YOUR ANSWER:**
yeap
### 7. "6 Confederations" stat
- **Where:** Hero section (`index.json:27`)
- **Issue:** The data file shows 5 confederations with actual teams (CONCACAF, CONMEBOL, UEFA, CAF, AFC) and OFC has only New Zealand. Is "6 Confederations" the claim you want to make?
- **YOUR ANSWER:**
idk replace

### 8. HQ Address — "250 Spadina Ave, Suite 500, Toronto"
- **Where:** Contact page (`page.contact.json:69`)
- **Issue:** Is this your real address? Just confirming since it's publicly displayed.
- **YOUR ANSWER:**
no headquarters
### 9. "Est. 2024" in the manifesto
- **Where:** Story page (`page.story.json:81`)
- **Issue:** Is 2024 the correct founding year?
- **YOUR ANSWER:**
nope

### 10. "Lightweight. Breathable. Pro-grade." (Player Edition tagline)
- **Where:** `assets/w1w-data.js:72`, bento section defaults
- **Issue:** "Breathable" — is a rubber wristband actually breathable? This sounds like athletic apparel copy, not rubber accessories.
- **YOUR ANSWER:**
replace

### 11. "The match-wear build. Designed for 90+ minutes."
- **Where:** `assets/w1w-data.js:72`
- **Issue:** What makes the Player Edition different from regular bands? Is "designed for 90+ minutes" a real differentiator or just marketing fluff with no actual difference?
- **YOUR ANSWER:**
i like 90 minutes thing but not because of produtct material

---

## QUESTIONABLE WORDING — May Sound Cringe or Over-the-Top

### 12. "Technical collectibles for the most beautiful game. Engineered for the floodlit stage."
- **Where:** Footer tagline (`sections/w1w-footer.liquid:334`)
- **Issue:** "Technical collectibles" and "engineered for the floodlit stage" is very heavy language for a $5 rubber wristband. Too pretentious?
- **YOUR ANSWER:**
yea tone down

### 13. "We don't make jewelry. We make fuel."
- **Where:** Story values — Match Day Energy (`page.story.json:60`)
- **Issue:** Calling a wristband "fuel" is a stretch. Too try-hard?
- **YOUR ANSWER:**
yea tone down

### 14. "This isn't jewelry — it's identity on your wrist."
- **Where:** Story chapter 2 (`page.story.json:71`)
- **Issue:** Similar energy to above. Nobody called it jewelry — why deny it twice?
- **YOUR ANSWER:**
yea tone down

### 15. "Every great movement starts with a single moment of clarity."
- **Where:** Story origin chapter (`page.story.json:27`)
- **Issue:** Calling a wristband brand "a great movement" is pretty grandiose. Tone it down?
- **YOUR ANSWER:**
yea tone down

### 16. "Raw speed. Rising force. Nothing fears nothing."
- **Where:** Africa region blurb (`assets/w1w-data.js:63`)
- **Issue:** "Nothing fears nothing" is grammatically confusing and "Raw speed" feels like a generic stereotype about African football. Could be seen as reductive.
- **YOUR ANSWER:**
remove all or rewrite all region blurbs 

### 17. "Discipline meets dream. The fastest-climbing continent."
- **Where:** Asia region blurb (`assets/w1w-data.js:64`)
- **Issue:** "Discipline meets dream" — again, potentially stereotypical. "Fastest-climbing" — is that factually true?
- **YOUR ANSWER:**
remove all or rewrite all region blurbs 

### 18. "The long journey. Every tournament earned twice over."
- **Where:** Oceania region blurb (`assets/w1w-data.js:65`)
- **Issue:** What does "earned twice over" mean exactly? Vague.
- **YOUR ANSWER:**
remove all or rewrite all region blurbs 

### 19. "Where the game was perfected. Pure rhythm."
- **Where:** South America region blurb (`assets/w1w-data.js:61`)
- **Issue:** "Perfected" is subjective. "Pure rhythm" leans into stereotypes. OK or rewrite?
- **YOUR ANSWER:**
remove all or rewrite all region blurbs 

### 20. "Tactical, technical, relentless. The modern machine."
- **Where:** Europe region blurb (`assets/w1w-data.js:62`)
- **Issue:** Acceptable tone or too aggressive?
- **YOUR ANSWER:**
remove all or rewrite all region blurbs 

### 21. "Home soil. The continent that lifts the curtain."
- **Where:** CONCACAF region blurb (`assets/w1w-data.js:60`)
- **Issue:** Fine as is? "Lifts the curtain" makes sense since they're hosting 2026.
- **YOUR ANSWER:**
remove all or rewrite all region blurbs 

### 22. "Put it on before kick-off. Never take it off. That's the deal."
- **Where:** Player Edition desc (`index.json:168`)
- **Issue:** Trying too hard to sound edgy? Or does this fit the brand voice?
- **YOUR ANSWER:**
not too bad

### 23. "dress the group chat"
- **Where:** Upsell hint (`product.json:109`)
- **Issue:** "Dress the group chat" is quirky — does it land or is it cringe?
- **YOUR ANSWER:**
not too bad, maybe more straightforward wording would be nicer

---

## ACCURACY & CONSISTENCY CHECKS

### 24. Shipping claims — are these accurate?
- **Where:** FAQ page (`page.faq.json`)
- **Current copy:**
  - US/Canada: 3-5 business days, $6, free over $35
  - UK/EU: 5-8 days, $9, free over $50
  - Rest of world: 7-14 days, $12, free over $60
- **Issue:** Are all these prices and timeframes still correct?
- **YOUR ANSWER:**
nope standart 8 and express 15 buchs

### 25. "Ships in 24 hours" — is this real?
- **Where:** Product page, FAQ, lifestyle section, announcement bar
- **Issue:** Do you actually ship within 24 hours of every order? Or is it 24h on business days only?
- **YOUR ANSWER:**
yeap

### 26. "Free shipping on 3+" vs "Free over $35"
- **Where:** Product page says "Free shipping on 3+" (`product.json:41`), but FAQ and announcement say "Free over $35"
- **Issue:** 3 bands = $15 which is under $35. These two claims contradict each other. Which is correct?
- **YOUR ANSWER:**
over 35

### 27. Stack discount tiers — "STARTING XI" is 8, not 11
- **Where:** Product page tier pricing (`product.json:54-56`)
- **Issue:** Tier is called "STARTING XI" (which means 11 players) but the qty is 8. Intentional wordplay or confusing?
- **YOUR ANSWER:**
yea 8 is accurate

### 28. Returns policy — "unworn bands in original packaging"
- **Where:** FAQ returns section (`sections/w1w-faq-body.liquid:404`)
- **Issue:** Is "unworn" enforceable for a rubber wristband? How do you tell worn vs unworn? Is this your actual policy?
- **YOUR ANSWER:**
correct come up with reaslistic return policy

### 29. "Avg. response: 6 hours" for support
- **Where:** Contact page (`page.contact.json:38`)
- **Issue:** Is 6-hour average response time accurate? Bold claim if not.
- **YOUR ANSWER:**
24 hours

### 30. "3-week lead time" for custom/team orders
- **Where:** Contact page and FAQ (`page.contact.json:48`, `page.faq.json:54`)
- **Issue:** Still accurate?
- **YOUR ANSWER:**
yeap accurate

### 31. Size guide — are these measurements correct?
- **Where:** FAQ page (`page.faq.json:88-123`)
- **Current:**
  - S: wrist 6.0-7.0", band 7.5" (Kids/small wrists)
  - M: wrist 7.0-8.0", band 8.5" (Most adults)
  - L: wrist 8.0-9.0", band 9.5" (Larger wrists)
  - XL: wrist 9.0-10.0", band 10.5" (XL wrists / ankle wear)
- **Issue:** Are these measurements accurate for your actual product?
- **YOUR ANSWER:**
no different sizes remove

### 32. Email addresses — are all of these live?
- **Where:** Contact page, FAQ
- **Emails:** hello@world1world.com, support@world1world.com, teams@world1world.com, press@world1world.com
- **YOUR ANSWER:**
only info is there

---

## MINOR WORDING ISSUES

### 33. "Stadium Midnight Edition · Drop 03" badge
- **Where:** Hero section (`index.json:16`)
- **Issue:** What is "Stadium Midnight Edition"? Is this an actual product line or just a cool-sounding name?
- **YOUR ANSWER:**
nothing , maybe rewrite

### 34. "N° 2026" corner label
- **Where:** Hero and product page (`index.json:24`, `product.json:30`)
- **Issue:** "N°" means "number" — "Number 2026" doesn't really mean anything. Intentional aesthetic choice?
- **YOUR ANSWER:**
rewrite 

### 35. "WORLD 1 WORLD EDITION" as default subtitle
- **Where:** Product page (`product.json:32`)
- **Issue:** Is this the subtitle you want under every product name?
- **YOUR ANSWER:**
world 1 wworld is name of the brand so come up with sum nice

### 36. "Drop 04 is already in production"
- **Where:** FAQ (`page.faq.json:47`)
- **Issue:** Is this still true? If Drop 04 already launched, this is outdated.
- **YOUR ANSWER:**
remove

### 37. "Kick-Off: June 11, 2026"
- **Where:** Hero stat (`index.json:31`)
- **Issue:** Is this the confirmed World Cup start date? Needs to be accurate.
- **YOUR ANSWER:**
idk check

### 38. Collections page intro: "Some are moments, eras, rivalries."
- **Where:** `list-collections.json:17`
- **Issue:** Are there actually rivalry-themed collections? The data only shows Legacy, Host Nations, Underdogs, and Player Edition.
- **YOUR ANSWER:**
more unity and shit

### 39. "The Underdogs — Nations punching up. The sides nobody expected — and the supporters who did."
- **Where:** `assets/w1w-data.js:71`
- **Issue:** Which 8 nations are in this collection? Could calling them "underdogs" be offensive to fans of those countries?
- **YOUR ANSWER:**
yea not good remove or rewrite

### 40. Country subtitles — any wrong ones?
- **Where:** `assets/w1w-data.js` — each country has a subtitle
- **Notable ones to verify:**
  - Brazil: "SELECT EDITION" (others have nicknames, this sounds like a product tier)
  - Germany: "DIE MANNSCHAFT" (Germany's FA officially dropped this nickname in 2019)
  - Czechia: "NÁRODÁK" (is this the right term?)
  - Norway: "DRILLOS" (this was a specific coach's nickname from the 90s, not a current team name)
- **YOUR ANSWER:**
remove 

---

## TONE & BRAND VOICE (General)

### 41. Overall, the copy is very "hype-heavy" with football terminology. Is the target audience:
- a) Hardcore football fans who get references like "terraces", "90 minutes", "the beautiful game"?
- b) General consumers / gift buyers who might find this alienating?
- c) Both — and you want to tone down some of the niche references?
- **YOUR ANSWER:**
a for sure

### 42. The word "football" is used everywhere. Your market includes the US/Canada where it's called "soccer." Intentional brand choice to use "football" only?
- **YOUR ANSWER:**
football is the one
---

Once you fill this out, I'll make all the changes across the theme files.
