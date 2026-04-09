---
layout: page
title: Our Services
subtitle: "End-to-End Business Solutions — From Strategy to Execution"
permalink: /our-services/
nav: true
nav_order: 2
class: bluroca-services-page

# ================ TITLE & Description ================ #
hide_title: true
hide_description: true
contact_info: true
contact_order:
  - email
  - call

# ================ NAVBAR ================ #
navbar_logo_one: /assets/img/custom_logo/bluroca/Bluroca_logo.png

# ================ Language Switch ================ #
language_switch: false
lang: "en"

# ================ Background & Effects ================ #
need_aos: false

# ================ META ================ #
schema_type: business

# Google META
description: Explore BLUROCA's full range of business solutions — strategic planning, brand development, market expansion, logistics, sales execution, and entrepreneur advisory services.
keywords: BLUROCA services, strategic planning, brand development, market expansion, logistics, sales execution, ERP, digital transformation, entrepreneur consulting, OEM business growth

# OG META
og_title: BLUROCA Services — Strategic Planning, Execution & Business Growth
og_description: BLUROCA provides data-driven business services for manufacturers, B2B companies, and entrepreneurs — covering everything from brand strategy to last-mile logistics.
og_image: /assets/img/custom_logo/bluroca/Bluroca.png
---

<style>
/* =============================================
   BLUROCA SERVICES PAGE
   Font: Inter — loaded globally via head.liquid
   (lang: "en" preloads Inter woff2)
   ============================================= */

.bluroca-services-page,
.biz-ops-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* ── Page Header ── */
.svc-page-header {
  padding: 3.5rem 0 2.5rem;
  border-bottom: 1px solid var(--global-divider-color);
  margin-bottom: 0;
}

.svc-page-header h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--global-text-color);
  margin-bottom: 0.75rem;
  line-height: 1.1;
}

.svc-page-header h1 em {
  font-style: normal;
  color: #0099cc;
}

html[data-theme="dark"] .svc-page-header h1 em { color: #33ccee; }

.svc-page-header p {
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--global-text-secondary-color);
  line-height: 1.7;
  max-width: 680px;
  margin: 0;
}

/* ── Sidebar/Main Layout ── */
.biz-ops-container {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 0;
  margin: 0 -12px;
  width: calc(100% + 24px);
  align-items: start;
}

@media (max-width: 1024px) {
  .biz-ops-container {
    grid-template-columns: 1fr;
    margin: 0;
    width: 100%;
  }
}

.biz-ops-sidebar {
  background: var(--global-card-bg-color);
  border-right: 1px solid var(--global-divider-color);
  padding: 2rem 1.5rem;
  position: sticky;
  top: 0;
  align-self: start;
  overflow-y: auto;
}

@media (max-width: 1024px) {
  .biz-ops-sidebar {
    position: relative;
    height: auto;
    top: 0;
    border-right: none;
    border-bottom: 1px solid var(--global-divider-color);
    padding: 1.5rem;
  }
}

.biz-ops-header {
  margin-bottom: 1.75rem;
}

.biz-ops-header h2 {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--global-theme-color);
  margin-bottom: 0.4rem;
  letter-spacing: -0.03em;
}

.biz-ops-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: var(--global-text-secondary-color);
  font-weight: 400;
  letter-spacing: 0.01em;
  margin: 0;
}

.biz-ops-menu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.biz-ops-menu-item {
  cursor: pointer;
  padding: 0.9rem 1rem;
  border-left: 3px solid transparent;
  background: transparent;
  transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
  position: relative;
  border-radius: 0 6px 6px 0;
}

.biz-ops-menu-item:hover {
  border-left-color: #0099cc;
  background: rgba(0,153,204,0.04);
}

.biz-ops-menu-item:hover .biz-ops-item-title h3 {
  color: #0099cc;
}

.biz-ops-menu-item.active {
  border-left-color: var(--global-theme-color);
  background: rgba(0,86,179,0.05);
}

html[data-theme="dark"] .biz-ops-menu-item.active {
  background: rgba(0,153,204,0.1);
}

.biz-ops-menu-item.active .biz-ops-item-title h3 {
  color: var(--global-theme-color);
}

.biz-ops-menu-item.active .biz-ops-submenu {
  max-height: 500px;
  opacity: 1;
  margin-top: 0.75rem;
}

.biz-ops-item-title {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 0.3rem;
}

.biz-ops-number {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--global-text-secondary-color);
  opacity: 0.45;
  min-width: 2.5rem;
  letter-spacing: -0.04em;
}

.biz-ops-item-title h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--global-text-color);
  margin: 0;
  transition: color 0.3s ease;
  letter-spacing: -0.02em;
}

.biz-ops-desc {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: var(--global-text-secondary-color);
  margin: 0 0 0 3.4rem;
  font-weight: 400;
  line-height: 1.5;
}

.biz-ops-submenu {
  list-style: none;
  padding-left: 3.4rem;
  margin: 0;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
}

.biz-ops-submenu li {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  color: var(--global-text-color);
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  padding-left: 1.1rem;
  transition: all 0.25s ease;
}

.biz-ops-submenu li::before {
  content: '→';
  position: absolute;
  left: 0;
  opacity: 0;
  transition: all 0.25s ease;
  color: #0099cc;
}

.biz-ops-submenu li:hover {
  color: #0099cc;
  padding-left: 1.4rem;
}

.biz-ops-submenu li:hover::before { opacity: 1; }

/* ── Main Content Area ── */
.biz-ops-main {
  background: var(--global-bg-color);
  padding: 2.5rem 4%;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .biz-ops-main { padding: 2rem 1.25rem; }
}

.biz-ops-content { max-width: 860px; margin: 0 auto; }

.biz-ops-section {
  display: none;
  opacity: 0;
  animation: bizOpsFadeIn 0.5s ease forwards;
}

.biz-ops-section.active { display: block; }

@keyframes bizOpsFadeIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.biz-ops-section-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 2px solid var(--global-theme-color);
}

.biz-ops-section-number {
  font-family: 'Inter', sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--global-theme-color);
  opacity: 0.18;
  line-height: 1;
  letter-spacing: -0.05em;
}

.biz-ops-section-header h1 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 800;
  color: var(--global-text-color);
  margin: 0;
  letter-spacing: -0.03em;
}

.biz-ops-intro {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--global-text-color);
  line-height: 1.75;
  margin-bottom: 2rem;
}

/* ── Cards ── */
.biz-ops-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}

@media (max-width: 768px) {
  .biz-ops-grid { grid-template-columns: 1fr; }
}

.biz-ops-card {
  background: var(--global-card-bg-color);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid var(--global-divider-color);
  transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
  position: relative;
  overflow: hidden;
}

.biz-ops-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 4px; height: 100%;
  background: linear-gradient(180deg, #003366, #0099cc);
  transform: scaleY(0);
  transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
}

.biz-ops-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 28px var(--global-shadow-color);
  border-color: rgba(0,153,204,0.25);
}

.biz-ops-card:hover::before { transform: scaleY(1); }

.biz-ops-card.full-width { grid-column: 1 / -1; }

.biz-ops-card h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--global-theme-color);
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.biz-ops-card p {
  font-family: 'Inter', sans-serif;
  font-size: 0.92rem;
  font-weight: 300;
  color: var(--global-text-color);
  line-height: 1.65;
  margin: 0;
}

.biz-ops-card.highlight {
  animation: bizOpsHighlight 2s ease;
}

@keyframes bizOpsHighlight {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0,153,204,0); }
  50%       { box-shadow: 0 0 0 8px rgba(0,153,204,0.25); }
}

/* ── List inside cards ── */
.biz-ops-list {
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0;
}

.biz-ops-list li {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--global-text-color);
  padding: 0.65rem 0 0.65rem 1.75rem;
  position: relative;
  line-height: 1.55;
  border-bottom: 1px solid var(--global-divider-color);
}

.biz-ops-list li:last-child { border-bottom: none; }

.biz-ops-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #0099cc;
  font-weight: 700;
  font-size: 1rem;
}

/* ── Major section wrappers ── */
.biz-ops-major-section {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--global-divider-color);
}

.biz-ops-major-section:last-child { border-bottom: none; }

.biz-ops-major-header {
  padding: 2rem 0 1.5rem;
  margin-bottom: 1.5rem;
}

.biz-ops-major-header h2 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 800;
  color: var(--global-theme-color);
  margin-bottom: 0.6rem;
  letter-spacing: -0.04em;
}

.biz-ops-major-header p {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: var(--global-text-secondary-color);
  font-weight: 300;
  line-height: 1.65;
  margin: 0;
  max-width: 760px;
}

/* ── Journey/Workflow ── */
.workflow-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.5rem, 1.5vw, 1.5rem);
  margin: 3rem auto;
  flex-wrap: nowrap;
  max-width: 100%;
  padding: 0 1rem;
}

@media (max-width: 992px) {
  .workflow-container { flex-direction: column; gap: 1.5rem; padding: 0; }
}

.workflow-step {
  flex: 1 1 0;
  min-width: 0;
  text-align: center;
  position: relative;
}

.workflow-step-number {
  width: clamp(48px, 5vw, 64px);
  height: clamp(48px, 5vw, 64px);
  border-radius: 50%;
  background: linear-gradient(135deg, #003366, #0099cc);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.1rem, 1.4vw, 1.5rem);
  font-weight: 800;
  margin: 0 auto 0.85rem;
  box-shadow: 0 4px 14px rgba(0,51,102,0.3);
  transition: all 0.3s ease;
}

.workflow-step:hover .workflow-step-number {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0,153,204,0.4);
}

.workflow-step-title {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.85rem, 0.95vw, 1rem);
  font-weight: 700;
  color: var(--global-text-color);
  margin-bottom: 0.4rem;
  letter-spacing: -0.01em;
}

.workflow-step-desc {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.72rem, 0.82vw, 0.85rem);
  color: var(--global-text-secondary-color);
  font-weight: 300;
  line-height: 1.45;
}

.workflow-arrow {
  font-size: clamp(1.1rem, 1.4vw, 1.75rem);
  color: #0099cc;
  opacity: 0.45;
  flex-shrink: 0;
}

@media (max-width: 992px) {
  .workflow-arrow { transform: rotate(90deg); }
}

/* ── Scrollbar ── */
.biz-ops-sidebar::-webkit-scrollbar { width: 4px; }
.biz-ops-sidebar::-webkit-scrollbar-track { background: transparent; }
.biz-ops-sidebar::-webkit-scrollbar-thumb {
  background: var(--global-text-secondary-color);
  border-radius: 3px;
  opacity: 0.3;
}
.biz-ops-sidebar::-webkit-scrollbar-thumb:hover { background: #0099cc; }

/* ── Lightbox ── */
.lightbox {
  display: none;
  position: fixed;
  z-index: 9999;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0,0,0,0.92);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.lightbox.active {
  display: flex;
  opacity: 1;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  animation: lightboxZoom 0.3s ease;
  border-radius: 6px;
}

@keyframes lightboxZoom {
  from { transform: scale(0.85); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}

.lightbox-close {
  position: absolute;
  top: 20px; right: 30px;
  color: #fff;
  font-size: 36px;
  font-weight: 300;
  cursor: pointer;
  transition: color 0.2s ease;
  z-index: 10000;
  line-height: 1;
}

.lightbox-close:hover { color: #0099cc; }
</style>


<div class="biz-ops-page">

  <!-- Page Header -->
  <div class="svc-page-header">
    <p style="font-size:0.72rem;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#0099cc;margin-bottom:0.5rem;">What We Do</p>
    <h1>Our <em>Services</em></h1>
    <p>BLUROCA delivers integrated business solutions across three practice areas — strategic planning, operational execution, and entrepreneur advisory. Every engagement is data-driven, outcome-focused, and built to scale.</p>
  </div>

  <!-- ═══════════════════════════════
       SECTION 1: B2B Services
  ═══════════════════════════════ -->
  <div class="biz-ops-major-section">
    <div class="biz-ops-major-header" id="business">
      <h2>Business Growth</h2>
      <p>Empowering established businesses and OEM manufacturers to scale, optimize, and dominate competitive markets through data-driven strategy and hands-on execution.</p>
    </div>

    <div class="biz-ops-container">
      <aside class="biz-ops-sidebar">
        <div class="biz-ops-menu">

          <div class="biz-ops-menu-item active" data-section="b2b" data-service="strategic-planning">
            <div class="biz-ops-item-title">
              <span class="biz-ops-number">01</span>
              <h3>Strategic Planning</h3>
            </div>
            <p class="biz-ops-desc">Data-driven growth strategies</p>
            <ul class="biz-ops-submenu">
              <li data-detail="brand-development">Brand Development</li>
              <li data-detail="domestic-expansion">Domestic Market Expansion</li>
              <li data-detail="international-expansion">International Market Expansion</li>
              <li data-detail="financial-planning">Financial & Monetary Planning</li>
              <li data-detail="risk-management">Risk Management</li>
              <li data-detail="digital-transformation">Digital Transformation</li>
              <li data-detail="erp-systems">Enterprise Resource Planning (ERP)</li>
            </ul>
          </div>

          <div class="biz-ops-menu-item" data-section="b2b" data-service="execution">
            <div class="biz-ops-item-title">
              <span class="biz-ops-number">02</span>
              <h3>Execution</h3>
            </div>
            <p class="biz-ops-desc">End-to-end operational support</p>
            <ul class="biz-ops-submenu">
              <li data-detail="logistics">Logistics</li>
              <li data-detail="sales">Sales</li>
              <li data-detail="production">Production</li>
            </ul>
          </div>

        </div>
      </aside>

      <main class="biz-ops-main">
        <div class="biz-ops-content">

          <section class="biz-ops-section active" id="b2b-strategic-planning">
            <div class="biz-ops-section-header">
              <span class="biz-ops-section-number">01</span>
              <h1>Strategic Planning</h1>
            </div>
            <p class="biz-ops-intro">We design clear, data-driven growth strategies for businesses ready to scale — delivering measurable results from day one.</p>

            <div class="biz-ops-grid">
              <article class="biz-ops-card" id="brand-development">
                <h3>Brand Development</h3>
                <p>Build and strengthen your brand identity to command premium positioning in target markets. We architect brand strategy that differentiates and compounds over time.</p>
                <ul class="biz-ops-list">
                  <li>Brand positioning and competitive differentiation</li>
                  <li>Visual identity and messaging framework</li>
                  <li>OEM-to-brand transition roadmap</li>
                  <li>Channel-specific brand guidelines</li>
                </ul>
              </article>

              <article class="biz-ops-card" id="domestic-expansion">
                <h3>Domestic Market Expansion</h3>
                <p>Strategic approaches to grow your presence in local markets with real channel data and distribution intelligence.</p>
                <ul class="biz-ops-list">
                  <li>Market segmentation and opportunity mapping</li>
                  <li>Distribution channel design</li>
                  <li>Retail and modern trade activation</li>
                  <li>Regional rollout planning and execution</li>
                </ul>
              </article>

              <article class="biz-ops-card" id="international-expansion">
                <h3>International Market Expansion</h3>
                <p>Navigate global markets with confidence. We provide market entry intelligence, partner sourcing, and compliance guidance for cross-border growth.</p>
                <ul class="biz-ops-list">
                  <li>Target market feasibility assessment</li>
                  <li>Import/export regulatory analysis</li>
                  <li>Local partner and distributor identification</li>
                  <li>International go-to-market execution</li>
                </ul>
              </article>

              <article class="biz-ops-card" id="financial-planning">
                <h3>Financial & Monetary Planning</h3>
                <p>Optimize financial resources and plan for sustainable, de-risked growth with sound fiscal modelling and cash flow architecture.</p>
                <ul class="biz-ops-list">
                  <li>Growth-stage financial modelling</li>
                  <li>Cash flow and working capital optimization</li>
                  <li>Investment prioritization frameworks</li>
                  <li>Scenario planning and stress testing</li>
                </ul>
              </article>

              <article class="biz-ops-card" id="risk-management">
                <h3>Risk Management</h3>
                <p>Identify, assess, and mitigate business risks across operations, finance, and market exposure to protect and enhance your growth trajectory.</p>
                <ul class="biz-ops-list">
                  <li>Operational risk audit and register</li>
                  <li>Supply chain vulnerability mapping</li>
                  <li>Contingency planning and business continuity</li>
                  <li>Regulatory and compliance risk assessment</li>
                </ul>
              </article>

              <article class="biz-ops-card" id="digital-transformation">
                <h3>Digital Transformation</h3>
                <p>Convert traditional paper-based and manual workflows into efficient digital systems — enabling better data, accessibility, and operational speed.</p>
                <ul class="biz-ops-list">
                  <li>Document digitization and archiving</li>
                  <li>Workflow automation and process optimization</li>
                  <li>Cloud-based storage and team accessibility</li>
                  <li>Data migration and system integration</li>
                  <li>Change management and staff training</li>
                </ul>
              </article>

              <article class="biz-ops-card" id="erp-systems">
                <h3>Enterprise Resource Planning (ERP)</h3>
                <p>Implement integrated business management systems that unify finance, HR, supply chain, and operations into one real-time intelligence layer.</p>
                <ul class="biz-ops-list">
                  <li>ERP vendor evaluation and system selection</li>
                  <li>Custom implementation and module configuration</li>
                  <li>Cross-department integration (finance, HR, supply chain)</li>
                  <li>Data consolidation and reporting dashboards</li>
                  <li>User training and ongoing system optimization</li>
                </ul>
              </article>
            </div>
          </section>

          <section class="biz-ops-section" id="b2b-execution">
            <div class="biz-ops-section-header">
              <span class="biz-ops-section-number">02</span>
              <h1>Execution</h1>
            </div>
            <p class="biz-ops-intro">We support end-to-end operational execution — turning strategic plans into measurable, ground-level results.</p>

            <div class="biz-ops-grid">
              <article class="biz-ops-card" id="logistics">
                <h3>Logistics</h3>
                <p>Design and optimize your supply chain and distribution networks for maximum efficiency, reliability, and cost reduction at scale.</p>
                <ul class="biz-ops-list">
                  <li>Supply chain network design and optimization</li>
                  <li>Freight and carrier management</li>
                  <li>Warehouse operations consulting</li>
                  <li>Last-mile delivery strategy</li>
                  <li>Logistics technology and tracking systems</li>
                </ul>
              </article>

              <article class="biz-ops-card" id="sales">
                <h3>Sales</h3>
                <p>Drive revenue growth through optimized sales strategy, channel activation, and performance management frameworks built for your market.</p>
                <ul class="biz-ops-list">
                  <li>Sales pipeline design and CRM setup</li>
                  <li>Distributor and retailer network activation</li>
                  <li>Sales team structure and incentive design</li>
                  <li>E-commerce and omnichannel sales integration</li>
                  <li>Sales performance tracking and KPI dashboards</li>
                </ul>
              </article>

              <article class="biz-ops-card" id="production">
                <h3>Production</h3>
                <p>Enhance manufacturing processes, quality control, and capacity planning to meet market demand while maintaining margin efficiency.</p>
                <ul class="biz-ops-list">
                  <li>Production capacity assessment and planning</li>
                  <li>Quality management system design</li>
                  <li>OEM-to-brand production workflow alignment</li>
                  <li>Supplier audit and qualification</li>
                  <li>Lean manufacturing and waste reduction</li>
                </ul>
              </article>
            </div>
          </section>

        </div>
      </main>
    </div>
  </div>


  <!-- ═══════════════════════════════
       SECTION 2: Entrepreneur & Startup
  ═══════════════════════════════ -->
  <div class="biz-ops-major-section">
    <div class="biz-ops-major-header" id="entrepreneur">
      <h2>Entrepreneur & Startup</h2>
      <p>Turning bold visions into profitable, scalable realities — from concept validation and business model design to investor readiness and market launch.</p>
    </div>

    <div class="biz-ops-container">
      <aside class="biz-ops-sidebar">
        <div class="biz-ops-menu">
          <div class="biz-ops-menu-item active" data-section="entrepreneur" data-service="consulting">
            <div class="biz-ops-item-title">
              <span class="biz-ops-number">01</span>
              <h3>Consulting</h3>
            </div>
            <p class="biz-ops-desc">Tailored, practical solutions</p>
            <ul class="biz-ops-submenu">
              <li data-detail="recommendations">Clear & Actionable Recommendations</li>
            </ul>
          </div>

          <div class="biz-ops-menu-item" data-section="entrepreneur" data-service="business-development">
            <div class="biz-ops-item-title">
              <span class="biz-ops-number">02</span>
              <h3>Business Development</h3>
            </div>
            <p class="biz-ops-desc">Transform concepts into reality</p>
            <ul class="biz-ops-submenu">
              <li data-detail="business-models">Viable Business Models</li>
            </ul>
          </div>
        </div>
      </aside>

      <main class="biz-ops-main">
        <div class="biz-ops-content">
          <section class="biz-ops-section active" id="entrepreneur-consulting">
            <div class="biz-ops-section-header">
              <span class="biz-ops-section-number">01</span>
              <h1>Consulting</h1>
            </div>
            <p class="biz-ops-intro">We provide tailored, practical solutions that address each client's specific challenges — concrete, implementable, and measurable.</p>

            <div class="biz-ops-grid">
              <article class="biz-ops-card full-width" id="recommendations">
                <h3>Clear & Actionable Recommendations</h3>
                <p>Our consulting process delivers concrete solutions based on deep analysis of your unique business context. We don't just identify problems — we provide clear, prioritized pathways to resolve them.</p>
                <ul class="biz-ops-list">
                  <li>Comprehensive situational analysis and diagnostic</li>
                  <li>Evidence-based strategic recommendations</li>
                  <li>Implementation roadmaps with clear milestones</li>
                  <li>Ongoing advisory support and adjustment guidance</li>
                  <li>Accountability tracking to ensure delivery</li>
                </ul>
              </article>
            </div>
          </section>

          <section class="biz-ops-section" id="entrepreneur-business-development">
            <div class="biz-ops-section-header">
              <span class="biz-ops-section-number">02</span>
              <h1>Business Development</h1>
            </div>
            <p class="biz-ops-intro">We work with entrepreneurs and investors to transform concepts into real, scalable ventures — from initial validation to market launch.</p>

            <div class="biz-ops-grid">
              <article class="biz-ops-card full-width" id="business-models">
                <h3>Viable Business Models</h3>
                <p>Transform innovative ideas into sustainable business ventures with structured development support from ideation through to investor-ready documentation.</p>
                <ul class="biz-ops-list">
                  <li>Business model validation and stress-testing</li>
                  <li>Market opportunity and TAM/SAM/SOM assessment</li>
                  <li>Financial modelling and unit economics</li>
                  <li>Go-to-market strategy development</li>
                  <li>Investor pitch and funding strategy support</li>
                  <li>Scalability architecture and growth planning</li>
                </ul>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  </div>


  <!-- ═══════════════════════════════
       SECTION 3: How We Work
  ═══════════════════════════════ -->
  <div class="biz-ops-major-section">
    <div class="biz-ops-major-header">
      <h2>How We Work</h2>
      <p>A structured six-phase engagement — from the first conversation to sustained, measurable growth. Every step is collaborative, data-informed, and accountable.</p>
    </div>

    <div style="padding: 1rem 5%;">
      <div class="workflow-container">
        <div class="workflow-step">
          <div class="workflow-step-number">1</div>
          <div class="workflow-step-title">Discovery</div>
          <p class="workflow-step-desc">Understand your vision, goals, constraints, and market position</p>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step">
          <div class="workflow-step-number">2</div>
          <div class="workflow-step-title">Analysis</div>
          <p class="workflow-step-desc">Data-driven market, competitor, and operational gap assessment</p>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step">
          <div class="workflow-step-number">3</div>
          <div class="workflow-step-title">Blueprint</div>
          <p class="workflow-step-desc">Tailored growth plan with milestones and measurable KPIs</p>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step">
          <div class="workflow-step-number">4</div>
          <div class="workflow-step-title">Execute</div>
          <p class="workflow-step-desc">End-to-end operational delivery with expert hands-on support</p>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step">
          <div class="workflow-step-number">5</div>
          <div class="workflow-step-title">Optimize</div>
          <p class="workflow-step-desc">Monitor dashboards, iterate in real time, double down on wins</p>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step">
          <div class="workflow-step-number">6</div>
          <div class="workflow-step-title">Scale</div>
          <p class="workflow-step-desc">Expand channels, enter new markets, and sustain growth momentum</p>
        </div>
      </div>

      <div class="biz-ops-grid" style="margin-top: 2.5rem; max-width: 860px; margin-left: auto; margin-right: auto;">
        <article class="biz-ops-card">
          <h3>True Partnership</h3>
          <p>We work alongside you — every decision aligns with your vision, values, and timelines. We're not consultants who disappear after the slide deck.</p>
        </article>
        <article class="biz-ops-card">
          <h3>Data-Driven Insights</h3>
          <p>Every recommendation is grounded in thorough analysis, market intelligence, and industry benchmarks — never assumptions.</p>
        </article>
        <article class="biz-ops-card">
          <h3>Measurable Results</h3>
          <p>Clear KPIs and milestones at every stage so you can track progress and ROI with full transparency from day one.</p>
        </article>
      </div>
    </div>
  </div>

</div><!-- .biz-ops-page -->

<!-- Lightbox -->
<div id="lightbox" class="lightbox" onclick="closeLightbox()">
  <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
  <img class="lightbox-content" id="lightbox-img" onclick="event.stopPropagation()" alt="">
</div>

<script>
function openLightbox(imgSrc) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = imgSrc;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = 'auto';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

document.addEventListener('DOMContentLoaded', function () {
  // Lightbox on images
  document.querySelectorAll('.biz-ops-card img, .biz-ops-content img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function () { openLightbox(this.src); });
  });

  // Tab navigation
  document.querySelectorAll('.biz-ops-menu-item').forEach(item => {
    item.addEventListener('click', function (e) {
      if (e.target.tagName === 'LI') return;
      const section = this.dataset.section;
      const serviceId = this.dataset.service;
      document.querySelectorAll(`[data-section="${section}"]`).forEach(m => m.classList.remove('active'));
      this.classList.add('active');
      const container = this.closest('.biz-ops-container');
      container.querySelectorAll('.biz-ops-section').forEach(s => s.classList.remove('active'));
      const target = document.getElementById(`${section}-${serviceId}`);
      if (target) {
        target.classList.add('active');
        setTimeout(() => {
          const top = target.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 50);
      }
    });
  });

  // Sub-item scroll
  document.querySelectorAll('.biz-ops-submenu li').forEach(li => {
    li.addEventListener('click', function (e) {
      e.stopPropagation();
      const target = document.getElementById(this.dataset.detail);
      if (target) {
        const top = target.getBoundingClientRect().top + window.pageYOffset - 120;
        window.scrollTo({ top, behavior: 'smooth' });
        target.classList.add('highlight');
        setTimeout(() => target.classList.remove('highlight'), 2000);
      }
    });
  });
});
</script>
