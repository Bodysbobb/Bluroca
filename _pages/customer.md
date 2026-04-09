---
layout: page
title: Our Customers
subtitle: "Brands we've helped build, grow, and scale"
permalink: /our-customers/
nav: true
nav_order: 3
class: bluroca-customers-page

# ================ TITLE & Description ================ #
hide_title: true
hide_description: true
contact_info: false

# ================ NAVBAR ================ #
navbar_logo_one: /assets/img/custom_logo/bluroca/Bluroca_logo.png

# ================ Language Switch ================ #
language_switch: false
lang: "en"

# ================ Background & Effects ================ #
need_aos: false

# ================ META ================ #
schema_type: business
description: Meet the brands BLUROCA has helped build, launch, and scale — from OEM manufacturers to consumer brands and growth-stage ventures.
keywords: BLUROCA clients, COCOBARN, brand partners, business growth, OEM branding, Thailand brands
og_title: BLUROCA — Our Customers
og_description: Brands we have helped build, grow, and scale — end-to-end business partners from strategy to market.
og_image: /assets/img/custom_logo/bluroca/Bluroca.png
---

<style>
/* ==============================================
   BLUROCA — Our Customers Page
   Font: Inter (head.liquid, lang=en)
   ============================================== */

.bluroca-customers-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* ── Page header ── */
.cust-page-header {
  padding: 3rem 0 3rem;
  border-bottom: 1px solid var(--global-divider-color);
  margin-bottom: 4rem;
}

.cust-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #0088BB;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 10px;
}
.cust-eyebrow::before {
  content: '';
  width: 24px; height: 2px;
  background: currentColor;
  border-radius: 2px;
  flex-shrink: 0;
}

.cust-page-header h1 {
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.08;
  color: var(--global-text-color);
  margin-bottom: 1rem;
}

.cust-page-header h1 em {
  font-style: normal;
  color: #0057B8;
}

html[data-theme="dark"] .cust-page-header h1 em { color: #00C4E8; }

.cust-page-header p {
  font-size: 1.05rem;
  font-weight: 300;
  color: #4A6F96;
  line-height: 1.78;
  max-width: 560px;
  margin: 0;
}

html[data-theme="dark"] .cust-page-header p { color: #8AAFC8; }

/* ── Customer grid ── */
.cust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
}

@media (max-width: 700px) {
  .cust-grid { grid-template-columns: 1fr; gap: 1.5rem; }
}

/* ── Customer card ── */
.cust-card {
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
}

.cust-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 44px rgba(0, 30, 60, 0.11);
  border-color: rgba(0, 136, 187, 0.22);
}

/* Image panel */
.cust-card-img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #0d1f35;
}

.cust-card-img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.cust-card:hover .cust-card-img {
  transform: scale(1.04);
}

/* Category badge on image */
.cust-card-cat {
  position: absolute;
  top: 12px; left: 14px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 4px 10px;
  background: rgba(0, 20, 50, 0.72);
  color: #00C4E8;
  border-radius: 999px;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(0, 196, 232, 0.2);
}

/* Body */
.cust-card-body {
  padding: 1.5rem 1.75rem 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.cust-card-since {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #0088BB;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.cust-card-brand {
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--global-text-color);
  margin-bottom: 0.3rem;
  line-height: 1.2;
}

html[data-theme="dark"] .cust-card-brand { color: #D8E8F4; }

.cust-card-tagline {
  font-size: 0.82rem;
  font-weight: 600;
  color: #0088BB;
  margin-bottom: 0.85rem;
  letter-spacing: -0.01em;
  line-height: 1.4;
}

html[data-theme="dark"] .cust-card-tagline { color: #40B8E0; }

.cust-card-desc {
  font-size: 0.88rem;
  font-weight: 400;
  color: #4A6F96;
  line-height: 1.7;
  margin: 0 0 1.5rem;
  flex: 1;
}

html[data-theme="dark"] .cust-card-desc { color: #8AAFC8; }

.cust-card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0088BB;
  margin-top: auto;
  text-decoration: none;
  transition: gap 0.2s ease, color 0.2s ease;
}
.cust-card-link:hover {
  gap: 0.7rem;
  color: #00C4E8;
  text-decoration: none;
}
.cust-card-link svg { flex-shrink: 0; }

/* ── Coming soon placeholder ── */
.cust-coming-soon {
  border: 1.5px dashed var(--global-divider-color);
  border-radius: 14px;
  padding: 3rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  opacity: 0.5;
}
.cust-coming-soon p {
  font-size: 0.82rem;
  font-weight: 500;
  color: #4A6F96;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0;
}

/* ── CTA at bottom ── */
.cust-cta {
  text-align: center;
  padding: 4rem 0 2rem;
  border-top: 1px solid var(--global-divider-color);
}
.cust-cta h2 {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--global-text-color);
  margin-bottom: 0.75rem;
}
.cust-cta p {
  font-size: 0.98rem;
  font-weight: 300;
  color: #4A6F96;
  line-height: 1.75;
  max-width: 460px;
  margin: 0 auto 2rem;
}

html[data-theme="dark"] .cust-cta h2 { color: #D8E8F4; }
html[data-theme="dark"] .cust-cta p  { color: #8AAFC8; }

.cust-btn {
  display: inline-block;
  padding: 0.9rem 2.2rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 6px;
  background: #002855;
  color: #ffffff !important;
  box-shadow: 0 4px 18px rgba(0, 30, 60, 0.22);
  transition: background 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
  text-decoration: none;
}
.cust-btn:hover {
  background: #0057B8;
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(0, 87, 184, 0.32);
  color: #ffffff !important;
  text-decoration: none;
}

/* ── Reveal animations ── */
.custR {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.custR.on { opacity: 1; transform: translateY(0); }
.custD1 { transition-delay: 0.06s; }
.custD2 { transition-delay: 0.12s; }
.custD3 { transition-delay: 0.18s; }
</style>


<div class="bluroca-customers-page">

  <!-- Page header -->
  <div class="cust-page-header custR">
    <p class="cust-eyebrow">Our Portfolio</p>
    <h1>Brands We've <em>Built Together</em></h1>
    <p>From OEM manufacturers entering the market as a brand, to growth-stage ventures scaling into new territories — these are the partners BLUROCA works alongside.</p>
  </div>

  <!-- Customer grid -->
  <div class="cust-grid">

    <!-- ── COCOBARN ── -->
    <div class="custR custD1">
      {% include customer-card.liquid
        image="/assets/img/cocobarn/og/cocobarn_og.png"
        brand="COCOBARN"
        tagline="100% Organic Thai Namhom Coconut Water"
        description="Farm-to-bottle organic coconut water sourced directly from Ratchaburi growers. No added sugar, no middlemen. GMP & HACCP certified. Available in 210ml and 1L formats."
        since="2024"
        url="/cocobarn/"
        category="Food & Beverage"
      %}
    </div>

    <!-- ── Placeholder — more coming ── -->
    <div class="cust-coming-soon custR custD2">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4A6F96" stroke-width="1.5" stroke-linecap="round" style="margin-bottom:1rem;opacity:0.5;">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
      <p>Next brand<br>coming soon</p>
    </div>

    <div class="cust-coming-soon custR custD3">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4A6F96" stroke-width="1.5" stroke-linecap="round" style="margin-bottom:1rem;opacity:0.5;">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
      <p>Next brand<br>coming soon</p>
    </div>

  </div>

  <!-- CTA -->
  <div class="cust-cta custR">
    <h2>Want to be on this page?</h2>
    <p>We work with manufacturers and growth-stage businesses ready to build a real brand. Let's talk.</p>
    <a href="mailto:bluroca.info@gmail.com" class="cust-btn">bluroca.info@gmail.com</a>
  </div>

</div><!-- .bluroca-customers-page -->

<script>
(function () {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.custR').forEach(el => el.classList.add('on'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.custR').forEach(el => obs.observe(el));
})();
</script>
