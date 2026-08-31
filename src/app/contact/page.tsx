import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import ContactForm from "@/components/ui/ContactForm";
import Icon from "@/components/ui/Icon";
import { trustPoints } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact & Partnership Opportunities · AN NUR Charity Foundation",
  description:
    "Get in touch with AN NUR Charity Foundation in Malawi. Explore corporate partnerships, Waqf investments, Zakat allocations, and institutional collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="contact-page">
        {/* Hero Header */}
        <section className="about-hero" aria-label="Contact AN NUR">
          <div className="doc-container">
            <div className="about-hero__content">
              <p className="doc-chapter-label">Get in Touch &bull; Direct Communication</p>
              <h1>Contact Our Team</h1>
              <p className="about-hero__lead">
                Have questions about our programs, institutional partnerships, or zakat allocations?
                Reach out directly to our leadership and field team in Malawi.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Opportunity Tracks */}
        <section className="doc-chapter contact-partnership-section" id="partnerships">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">Collaborative Impact</p>
              <h2>Partnership Opportunity</h2>
              <p className="about-section-lead">
                Invest in a replicable model for Islamic NGOs worldwide. Choose your partnership track.
              </p>
            </div>

            <div className="partnership-tracks-grid">
              <div className="partnership-track-card">
                <div className="partnership-track-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2-2" />
                    <path d="m14 14-4-4" />
                    <path d="M4 14.9V19a2 2 0 0 0 2 2h4.1" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3>Corporate Partnership</h3>
                <p>CSR initiatives, employee engagement, and strategic corporate alliances.</p>
                <span className="partnership-track-badge">Institutional Alignment</span>
              </div>

              <div className="partnership-track-card partnership-track-card--featured">
                <div className="partnership-track-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>
                <h3>Waqf Investment</h3>
                <p>Contributing directly to our 100-acre agricultural sustainable endowment model.</p>
                <span className="partnership-track-badge">Perpetual Sadaqah Jariyah</span>
              </div>

              <div className="partnership-track-card">
                <div className="partnership-track-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3>Zakaat Allocation</h3>
                <p>100% donation distribution policy with zero administrative fee deduction.</p>
                <span className="partnership-track-badge">100% Amanah &bull; 0% Fee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content Grid */}
        <section className="doc-chapter contact-main-section" id="contact-details">
          <div className="doc-container">
            <div className="contact-grid">
              {/* Left Column: Direct Channels & Information */}
              <div className="contact-info-col">
                <div className="contact-info-card">
                  <p className="doc-chapter-label">Direct Channels</p>
                  <h2>We are here to collaborate.</h2>
                  <p className="contact-info-p">
                    Whether you are an individual donor, an institutional partner, or a community
                    representative, we welcome open dialogue and transparency.
                  </p>

                  <div className="contact-methods">
                    <a className="contact-method-item" href="mailto:info@annurmw.com">
                      <div className="contact-method-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div>
                        <strong>Email Us Directly</strong>
                        <span>info@annurmw.com</span>
                      </div>
                    </a>

                    <a
                      className="contact-method-item"
                      href="https://wa.me/265999000000?text=Salam,%20I%20would%20like%20to%20inquire%20about%20AN%20NUR%20programs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="contact-method-icon contact-method-icon--whatsapp">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                      </div>
                      <div>
                        <strong>WhatsApp Direct</strong>
                        <span>Chat with field support</span>
                      </div>
                    </a>

                    <div className="contact-method-item">
                      <div className="contact-method-icon">
                        <Icon name="map-pin" size={20} />
                      </div>
                      <div>
                        <strong>Field Operations</strong>
                        <span>Central Region, Malawi</span>
                      </div>
                    </div>
                  </div>

                  <div className="contact-trust-box">
                    <h4>Institutional Amanah</h4>
                    <p>
                      An Nur operates under strict non-profit governance in Malawi with 100%
                      public accountability and zero deduction for administrative overhead on Zakat funds.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Contact Form */}
              <div className="contact-form-col">
                <div className="contact-form-card">
                  <h3>Send a Direct Message</h3>
                  <p className="contact-form-lead">
                    Fill in your details below and our team will get back to you within 24 hours.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Trust Strip */}
            <div className="trust-strip" style={{ marginTop: 48 }}>
              <div className="trust-strip__heading">Institutional Trust &amp; Integrity:</div>
              <div className="trust-strip__items">
                {trustPoints.map((point) => (
                  <span className="trust-chip" key={point}>
                    ✓ {point}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
