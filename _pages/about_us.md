---
layout: page
title: Home
title_th: เกี่ยวกับเรา
subtitle: "Comprehensive business solutions from strategy to execution"
#img: assets/img/page_logo/amata_logo.png
permalink: /
class: about-page

# ================ TITLE & Description ================ #
hide_title: true
hide_description: true
amata_footer: false
contact_info: true
contact_order:
  - email
  - call
#  - digitalcard

# ================ NAVBAR ================ #
#navbar_logo_one: /assets/img/page_logo/amata_main_logo.webp

# ================ Language Switch ================ #
language_switch: false
#lang: "en"
#alternate_lang_url: "/th/AMATA-About-Us-en/"

# ================ Background & Effects ================ #
need_aos: false

# ================ META ================ #
# JSON Business Meta
schema_type: business

# Google META
description: Discover BLUROCA’s business solutions for growth, execution, and entrepreneurship—from strategic planning and market expansion to operational support and business development.
keywords: BLUROCA, business consulting, strategic planning, market expansion, international expansion, digital transformation, ERP solutions, business execution, logistics, sales, production, entrepreneur consulting, business development

# OG META
og_title: BLUROCA — Strategic Business Solutions from Vision to Execution
og_description: BLUROCA helps businesses and entrepreneurs grow through strategic planning, operational execution, digital transformation, and business development tailored to measurable results.
#og_image: /assets/img/page_logo/bluroca_logo.png
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+Pro:wght@300;400;600&display=swap');

.biz-ops-container {
  display: grid;
  grid-template-columns: 380px 1fr;
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
    padding: 2rem 1.5rem;
  }
}

.biz-ops-header {
  margin-bottom: 2rem;
}

.biz-ops-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--global-theme-color);
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.biz-ops-subtitle {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.95rem;
  color: var(--global-text-secondary-color);
  font-weight: 300;
  letter-spacing: 0.02em;
  margin: 0;
}

.biz-ops-menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.biz-ops-menu-item {
  cursor: pointer;
  padding: 1rem 1rem;
  border-left: 3px solid transparent;
  background: transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.biz-ops-menu-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--global-hover-nav-color);
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.biz-ops-menu-item:hover {
  border-left-color: var(--global-hover-color);
}

.biz-ops-menu-item:hover::before {
  opacity: 0.05;
}

.biz-ops-menu-item:hover .biz-ops-item-title h3 {
  color: var(--global-hover-color);
}

.biz-ops-menu-item.active {
  border-left-color: var(--global-theme-color);
  background: rgba(0, 86, 179, 0.03);
}

.biz-ops-menu-item.active .biz-ops-item-title h3 {
  color: var(--global-theme-color);
}

.biz-ops-menu-item.active .biz-ops-submenu {
  max-height: 500px;
  opacity: 1;
  margin-top: 1rem;
}

.biz-ops-item-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.biz-ops-number {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--global-text-secondary-color);
  opacity: 0.5;
  min-width: 3rem;
}

.biz-ops-item-title h3 {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--global-text-color);
  margin: 0;
  transition: color 0.3s ease;
  letter-spacing: -0.01em;
}

.biz-ops-desc {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.875rem;
  color: var(--global-text-secondary-color);
  margin: 0 0 0 4rem;
  font-weight: 300;
  line-height: 1.5;
}

.biz-ops-submenu {
  list-style: none;
  padding-left: 4rem;
  margin: 0;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.biz-ops-submenu li {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.9rem;
  color: var(--global-text-color);
  padding: 0.6rem 0;
  cursor: pointer;
  position: relative;
  padding-left: 1.25rem;
  transition: all 0.3s ease;
}

.biz-ops-submenu li::before {
  content: '→';
  position: absolute;
  left: 0;
  opacity: 0;
  transition: all 0.3s ease;
  color: var(--global-link-color);
}

.biz-ops-submenu li:hover {
  color: var(--global-link-color);
  padding-left: 1.5rem;
}

.biz-ops-submenu li:hover::before {
  opacity: 1;
}

.biz-ops-main {
  background: var(--global-bg-color);
  padding: 2.5rem 4%;
  overflow-y: auto;
}

@media (max-width: 1024px) {
  .biz-ops-main {
    padding: 2rem 4%;
  }
}

@media (max-width: 768px) {
  .biz-ops-main {
    padding: 2rem 1.5rem;
  }
}

.biz-ops-content {
  max-width: 900px;
  margin: 0 auto;
}

.biz-ops-section {
  display: none;
  opacity: 0;
  animation: bizOpsFadeIn 0.6s ease forwards;
}

.biz-ops-section.active {
  display: block;
}

@keyframes bizOpsFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.biz-ops-section-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--global-theme-color);
}

.biz-ops-section-number {
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  font-weight: 600;
  color: var(--global-theme-color);
  opacity: 0.2;
  line-height: 1;
}

.biz-ops-section-header h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--global-text-color);
  margin: 0;
  letter-spacing: -0.02em;
}

@media (max-width: 768px) {
  .biz-ops-section-header h1 {
    font-size: 2rem;
  }
}

.biz-ops-intro {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  color: var(--global-text-color);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 1000px;
}

.biz-ops-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .biz-ops-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.biz-ops-card {
  background: var(--global-card-bg-color);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--global-divider-color);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.biz-ops-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--global-theme-color);
  transform: scaleY(0);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.biz-ops-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px var(--global-shadow-color);
  border-color: var(--global-theme-color);
}

.biz-ops-card:hover::before {
  transform: scaleY(1);
}

.biz-ops-card.highlight {
  animation: bizOpsHighlight 2s ease;
  border-color: var(--global-hover-color);
}

.biz-ops-card.full-width {
  grid-column: 1 / -1;
}

.biz-ops-card h3 {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--global-theme-color);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.biz-ops-card p {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: var(--global-text-color);
  line-height: 1.6;
  margin: 0;
}

@keyframes bizOpsHighlight {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(242, 169, 0, 0);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(242, 169, 0, 0.3);
  }
}

.biz-ops-image-box {
  margin: 1.5rem 0;
  border-radius: 6px;
  overflow: hidden;
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
}

.biz-ops-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.biz-ops-image:hover {
  transform: scale(1.05);
}

.biz-ops-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0 0;
}

.biz-ops-list li {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: var(--global-text-color);
  padding: 0.75rem 0 0.75rem 2rem;
  position: relative;
  line-height: 1.6;
  border-bottom: 1px solid var(--global-divider-color);
}

.biz-ops-list li:last-child {
  border-bottom: none;
}

.biz-ops-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--global-theme-color);
  font-weight: 600;
  font-size: 1.1rem;
}

@media (max-width: 1024px) {
  .biz-ops-menu-item {
    padding: 1rem;
  }
  
  .biz-ops-desc {
    margin-left: 0;
    padding-left: 4rem;
  }
  
  .biz-ops-submenu {
    padding-left: 4rem;
  }
}

@media (max-width: 768px) {
  .biz-ops-section-header .biz-ops-section-number {
    font-size: 3rem;
  }
  
  .biz-ops-intro {
    font-size: 1.1rem;
  }
  
  .biz-ops-item-title h3 {
    font-size: 1rem;
  }
  
  .biz-ops-number {
    font-size: 1.25rem;
    min-width: 2.5rem;
  }
  
  .biz-ops-desc {
    font-size: 0.8rem;
    padding-left: 3.5rem;
  }
  
  .biz-ops-submenu {
    padding-left: 3.5rem;
  }
  
  .biz-ops-submenu li {
    font-size: 0.85rem;
  }
}

.biz-ops-sidebar::-webkit-scrollbar {
  width: 6px;
}

.biz-ops-sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.biz-ops-sidebar::-webkit-scrollbar-thumb {
  background: var(--global-text-secondary-color);
  border-radius: 3px;
  opacity: 0.3;
}

.biz-ops-sidebar::-webkit-scrollbar-thumb:hover {
  background: var(--global-theme-color);
}

html[data-theme="dark"] .biz-ops-card::before {
  background: var(--global-hover-color);
}

html[data-theme="dark"] .biz-ops-menu-item.active {
  background: rgba(32, 128, 208, 0.08);
}

.biz-ops-major-section {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--global-divider-color);
}

.biz-ops-major-section:last-child {
  border-bottom: none;
}

.biz-ops-major-header {
  padding: 1.5rem 1.5rem 1.5rem 0;
  margin-bottom: 1.5rem;
}

.biz-ops-major-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--global-theme-color);
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.biz-ops-major-header p {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.1rem;
  color: var(--global-text-secondary-color);
  font-weight: 300;
  line-height: 1.6;
  margin: 0;
  max-width: 1000px;
}

@media (max-width: 768px) {
  .biz-ops-major-header h2 {
    font-size: 2rem;
  }
  
  .biz-ops-major-header p {
    font-size: 1rem;
  }
}

/* Workflow Journey Styles */
.workflow-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.5rem, 1.5vw, 1.5rem);
  margin: 3rem auto;
  flex-wrap: nowrap;
  max-width: 100%;
  padding: 0 2rem;
}

@media (max-width: 992px) {
  .workflow-container {
    flex-direction: column;
    gap: 2rem;
    padding: 0;
  }
}

.workflow-step {
  flex: 1 1 0;
  min-width: 0;
  text-align: center;
  position: relative;
}

.workflow-step-number {
  width: clamp(50px, 5vw, 70px);
  height: clamp(50px, 5vw, 70px);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--global-theme-color), #2080d0);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.25rem, 1.5vw, 1.75rem);
  font-weight: 700;
  margin: 0 auto 1rem;
  box-shadow: 0 4px 15px rgba(0, 86, 179, 0.3);
  transition: all 0.3s ease;
}

.workflow-step:hover .workflow-step-number {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 86, 179, 0.4);
}

.workflow-step-title {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: clamp(0.9rem, 1vw, 1.1rem);
  font-weight: 600;
  color: var(--global-text-color);
  margin-bottom: 0.5rem;
}

.workflow-step-desc {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: clamp(0.75rem, 0.85vw, 0.9rem);
  color: var(--global-text-secondary-color);
  font-weight: 300;
  line-height: 1.4;
}

.workflow-arrow {
  font-size: clamp(1.25rem, 1.5vw, 2rem);
  color: var(--global-theme-color);
  opacity: 0.5;
  flex-shrink: 0;
}

@media (max-width: 992px) {
  .workflow-arrow {
    transform: rotate(90deg);
  }
  
  .workflow-step-number {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
  
  .workflow-step-title {
    font-size: 1.1rem;
  }
  
  .workflow-step-desc {
    font-size: 0.9rem;
  }
}

/* Lightbox Styles */
.lightbox {
  display: none;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
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
}

@keyframes lightboxZoom {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 35px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 10000;
}

.lightbox-close:hover,
.lightbox-close:focus {
  color: #bbb;
}

/* Make images clickable for lightbox */
.biz-ops-card img,
.biz-ops-content img {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.biz-ops-card img:hover,
.biz-ops-content img:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>


<div class="biz-ops-page">

  <!-- SECTION 1: Business-to-Business (B2B) -->
  <div class="biz-ops-major-section">
    <div class="biz-ops-major-header" id="business">
      <h2>Bluroca Service</h2>
      <p>Empowering established businesses to scale, optimize, and thrive in competitive markets</p>
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
            <p class="biz-ops-intro">We help businesses design clear, data-driven growth strategies that deliver measurable results.</p>
            
            <div class="biz-ops-grid">
              <article class="biz-ops-card" id="brand-development">
                <h3>Brand Development</h3>
                <p>Build and strengthen your brand identity to stand out in competitive markets.</p>
              </article>
              
              <article class="biz-ops-card" id="domestic-expansion">
                <h3>Domestic Market Expansion</h3>
                <div class="biz-ops-image-box">
                  <img src="/assets/img/business/MES.jpg" alt="Market Expansion System" class="biz-ops-image biz-ops-image-clickable" onclick="openLightbox(this.src)">
                </div>
                <p>Strategic approaches to grow your presence in local markets with data-driven insights.</p>
              </article>
              
              <article class="biz-ops-card" id="international-expansion">
                <h3>International Market Expansion</h3>
                <p>Navigate global markets with confidence through comprehensive market analysis and entry strategies.</p>
              </article>
              
              <article class="biz-ops-card" id="financial-planning">
                <h3>Financial & Monetary Planning</h3>
                <p>Optimize financial resources and plan for sustainable growth with sound fiscal strategies.</p>
              </article>
              
              <article class="biz-ops-card" id="risk-management">
                <h3>Risk Management</h3>
                <p>Identify, assess, and mitigate business risks to protect and enhance your operations.</p>
              </article>
              
              <article class="biz-ops-card" id="digital-transformation">
                <h3>HOBBIT - Digital Transformation</h3>
                <p>Convert traditional paper-based workflows into efficient digital systems, enabling better data management, accessibility, and operational efficiency.</p>
                <ul class="biz-ops-list">
                  <li>Document digitization and archiving solutions</li>
                  <li>Workflow automation and process optimization</li>
                  <li>Cloud-based storage and accessibility systems</li>
                  <li>Data migration and integration strategies</li>
                  <li>Training and change management support</li>
                </ul>
              </article>

              
              <article class="biz-ops-card" id="erp-systems">
                <h3>HOBBIT - Enterprise Resource Planning (ERP) System</h3>
                <p>Implement integrated business management systems that unify core operations across your organization for enhanced efficiency and real-time insights.</p>
                <ul class="biz-ops-list">
                  <li>ERP system selection and vendor evaluation</li>
                  <li>Custom implementation and configuration</li>
                  <li>Module integration across departments (finance, HR, supply chain, manufacturing)</li>
                  <li>Data consolidation and reporting dashboards</li>
                  <li>User training and ongoing optimization</li>
                </ul>
              </article>
            </div>
          </section>

          <section class="biz-ops-section" id="b2b-execution">
            <div class="biz-ops-section-header">
              <span class="biz-ops-section-number">02</span>
              <h1>Execution</h1>
            </div>
            <p class="biz-ops-intro">We support end-to-end operational execution to turn plans into measurable results.</p>
            
            <div class="biz-ops-grid">
              <article class="biz-ops-card" id="logistics">
                <h3>Logistics</h3>
                <p>Streamline your supply chain and distribution networks for maximum efficiency.</p>
              </article>
              
              <article class="biz-ops-card" id="sales">
                <h3>Sales</h3>
                <p>Drive revenue growth through optimized sales strategies and performance management.</p>
              </article>
              
              <article class="biz-ops-card" id="production">
                <h3>Production</h3>
                <p>Enhance manufacturing processes and quality control to meet market demands.</p>
              </article>

            </div>
          </section>
        </div>
      </main>
    </div>
  </div>

  <!-- SECTION 2: Entrepreneur or Investor -->
  <div class="biz-ops-major-section">
    <div class="biz-ops-major-header" id="entrepreneur">
      <h2>Entrepreneur</h2>
      <p>Turning bold visions into profitable realities—from concept validation to market domination</p>
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
            <p class="biz-ops-intro">We provide tailored, practical solutions to address each client's specific challenges.</p>
            
            <div class="biz-ops-grid">
              <article class="biz-ops-card full-width" id="recommendations">
                <h3>Clear & Actionable Recommendations</h3>
                <p>Our consulting process delivers concrete, implementable solutions based on deep analysis of your unique business context. We don't just identify problems—we provide clear pathways to solutions.</p>
                <ul class="biz-ops-list">
                  <li>Comprehensive situational analysis</li>
                  <li>Evidence-based strategic recommendations</li>
                  <li>Implementation roadmaps with clear milestones</li>
                  <li>Ongoing support and adjustment guidance</li>
                </ul>
              </article>
            </div>
          </section>

          <section class="biz-ops-section" id="entrepreneur-business-development">
            <div class="biz-ops-section-header">
              <span class="biz-ops-section-number">02</span>
              <h1>Business Development</h1>
            </div>
            <p class="biz-ops-intro">We work with entrepreneurs and organizations to transform concepts into real, scalable businesses.</p>
            
            <div class="biz-ops-grid">
              <article class="biz-ops-card full-width" id="business-models">
                <h3>Viable Business Models</h3>
                <p>Transform innovative ideas into sustainable business ventures with comprehensive development support.</p>
                <ul class="biz-ops-list">
                  <li>Business model validation and refinement</li>
                  <li>Market opportunity assessment</li>
                  <li>Financial modeling and projections</li>
                  <li>Go-to-market strategy development</li>
                  <li>Scalability and growth planning</li>
                </ul>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  </div>

  <!-- SECTION 3: Your Path to Success (Journey Roadmap) -->
  <div class="biz-ops-major-section">
    <div class="biz-ops-major-header">
      <h2>Your Path to Success</h2>
      <p>Your journey from vision to success—a collaborative partnership every step of the way</p>
    </div>

    <div style="padding: 2rem 5%;">
      <div class="workflow-container">
        <div class="workflow-step">
          <div class="workflow-step-number">1</div>
          <div class="workflow-step-title">Discovery</div>
          <p class="workflow-step-desc">Understanding your vision, goals, and challenges</p>
        </div>
        
        <div class="workflow-arrow">→</div>
        
        <div class="workflow-step">
          <div class="workflow-step-number">2</div>
          <div class="workflow-step-title">Deep Dive</div>
          <p class="workflow-step-desc">Analyze opportunities and constraints</p>
        </div>
        
        <div class="workflow-arrow">→</div>
        
        <div class="workflow-step">
          <div class="workflow-step-number">3</div>
          <div class="workflow-step-title">Blueprint</div>
          <p class="workflow-step-desc">Develop actionable plans tailored to your needs</p>
        </div>
        
        <div class="workflow-arrow">→</div>
        
        <div class="workflow-step">
          <div class="workflow-step-number">4</div>
          <div class="workflow-step-title">Execute</div>
          <p class="workflow-step-desc">Turn strategy into reality with expert support</p>
        </div>
        
        <div class="workflow-arrow">→</div>
        
        <div class="workflow-step">
          <div class="workflow-step-number">5</div>
          <div class="workflow-step-title">Optimize</div>
          <p class="workflow-step-desc">Monitor, adjust, and continuously improve</p>
        </div>
        
        <div class="workflow-arrow">→</div>
        
        <div class="workflow-step">
          <div class="workflow-step-number">6</div>
          <div class="workflow-step-title">Thrive</div>
          <p class="workflow-step-desc">Achieve sustainable growth and success</p>
        </div>
      </div>

      <div class="biz-ops-grid" style="margin-top: 3rem; max-width: 900px; margin-left: auto; margin-right: auto;">
        <article class="biz-ops-card">
          <h3>True Partnership</h3>
          <p>We work alongside you as true partners, ensuring every decision aligns with your vision and values.</p>
        </article>
        
        <article class="biz-ops-card">
          <h3>Data-Driven Insights</h3>
          <p>Every recommendation is backed by thorough analysis and industry best practices.</p>
        </article>
        
        <article class="biz-ops-card">
          <h3>Measurable Results</h3>
          <p>Clear KPIs and milestones ensure you can track progress and ROI at every stage.</p>
        </article>
      </div>
    </div>
  </div>

</div>

<!-- Lightbox Modal -->
<div id="lightbox" class="lightbox" onclick="closeLightbox()">
  <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
  <img class="lightbox-content" id="lightbox-img" onclick="event.stopPropagation()">
</div>

<script>
// Lightbox functions
function openLightbox(imgSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.classList.add('active');
  lightboxImg.src = imgSrc;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close lightbox on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.biz-ops-menu-item');
  const subItems = document.querySelectorAll('.biz-ops-submenu li');
  
  // Add click handlers to all images for lightbox
  const images = document.querySelectorAll('.biz-ops-card img, .biz-ops-content img, article img');
  images.forEach(img => {
    img.addEventListener('click', function() {
      openLightbox(this.src);
    });
  });
  
  menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') return;
      
      const section = this.dataset.section;
      const serviceId = this.dataset.service;
      
      // Find all menu items in the same section
      const sectionMenuItems = document.querySelectorAll(`[data-section="${section}"]`);
      sectionMenuItems.forEach(m => m.classList.remove('active'));
      this.classList.add('active');
      
      // Show the corresponding content
      const allSectionContent = this.closest('.biz-ops-container').querySelectorAll('.biz-ops-section');
      allSectionContent.forEach(s => s.classList.remove('active'));
      
      const targetSection = document.getElementById(`${section}-${serviceId}`);
      if (targetSection) {
        targetSection.classList.add('active');
        
        // Scroll to show the full section header with offset
        setTimeout(() => {
          const sectionTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
          const offset = 100; // Offset to ensure header is visible
          window.scrollTo({ 
            top: sectionTop - offset, 
            behavior: 'smooth' 
          });
        }, 50);
      }
    });
  });
  
  subItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      const detailId = this.dataset.detail;
      const target = document.getElementById(detailId);
      
      if (target) {
        // Scroll with offset to show full card
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
        const offset = 120; // Offset to ensure card header is fully visible
        window.scrollTo({ 
          top: targetTop - offset, 
          behavior: 'smooth' 
        });
        target.classList.add('highlight');
        setTimeout(() => target.classList.remove('highlight'), 2000);
      }
    });
  });
});
</script>