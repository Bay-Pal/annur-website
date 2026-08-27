import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { aboutData, site, trustPoints } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us · Vision, Mission & Philosophy",
  description:
    "Learn about AN NUR Charity Foundation, our Vision, Mission, Core Values, and The Madinah Model for sustainable community transformation in Malawi.",
};

const proofStats = [
  { label: "Masjid-Madrassah complexes", value: 15, suffix: "+" },
  { label: "Students enrolled", value: 945, suffix: "+" },
  { label: "Farmers supported", value: 1228, suffix: "+" },
  { label: "Orphans supported", value: 58, suffix: "" },
  { label: "Management fees", value: 0, suffix: "%" },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero" aria-label="About AN NUR">
          <div className="container about-hero__content">
            <p className="eyebrow">About AN NUR Charity Foundation</p>
            <h1>From Dependency to Dignity</h1>
            <p className="about-hero__lead">
              A faith-based community development organization in Malawi helping
              families move from vulnerability to lasting self-reliance through
              education, sustainable agriculture, livelihood creation, and orphan care.
            </p>
          </div>
        </section>

        {/* Vision, Mission & Philosophy Slide Showcase */}
        <section className="section section-light" id="vision-mission">
          <div className="container">
            <div className="slide-deck-card">
              <div className="slide-deck-content">
                <div className="slide-deck-header">
                  <h2>Vision, Mission &amp; Philosophy</h2>
                  <div className="slide-deck-badge" aria-label="AN NUR">
                    <svg viewBox="0 0 64 64" fill="none" className="slide-deck-logo">
                      <path
                        d="M32 8C24.4 14.4 20 23.1 20 32.4c0 12.1 7.4 19.9 12 23.6 4.7-3.7 12-11.5 12-23.6C44 23.1 39.6 14.4 32 8Z"
                        stroke="#0d4f9e"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M32 19c-4.5 3.6-7 8.9-7 14.3 0 6.7 3.3 11.2 7 14.3 3.7-3.1 7-7.6 7-14.3 0-5.4-2.5-10.7-7-14.3Z"
                        fill="#2e7fdc"
                      />
                      <path
                        d="M14 50h36"
                        stroke="#0d4f9e"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="slide-deck-badge-text">AN NUR</span>
                  </div>
                </div>

                <div className="slide-deck-body">
                  <div className="slide-deck-block">
                    <h3>Vision</h3>
                    <p>{aboutData.vision}</p>
                  </div>

                  <div className="slide-deck-block">
                    <h3>Mission</h3>
                    <p>{aboutData.mission}</p>
                  </div>

                  <div className="slide-deck-block">
                    <h3>The Madinah Model</h3>
                    <p>{aboutData.philosophy.statement}</p>
                  </div>
                </div>

                <div className="slide-deck-footer">
                  <hr className="slide-deck-divider" />
                  <div className="slide-deck-values">
                    <span>Integrity</span>
                    <span className="sep" aria-hidden="true">|</span>
                    <span>Empathy</span>
                    <span className="sep" aria-hidden="true">|</span>
                    <span>Sustainability</span>
                    <span className="sep" aria-hidden="true">|</span>
                    <span>Faith</span>
                  </div>
                </div>
              </div>

              <div className="slide-deck-visual">
                <Image
                  src="/vision-mission-seedling.png"
                  alt="Hands gently holding fertile soil nurturing a young green seedling"
                  fill
                  priority
                  className="slide-deck-image"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The 8-Step Madinah Model */}
        <section className="section section-dark" id="madinah-model">
          <div className="container">
            <div className="section-heading section-heading--dark">
              <p className="eyebrow">The 8-Stage Lifecycle</p>
              <div>
                <h2>The Madinah Model in Action</h2>
                <p>
                  A community-first framework built around local trust, continuous support,
                  and reinvested strength.
                </p>
              </div>
            </div>

            <div className="model-statement-banner">
              <div className="model-statement-banner__badge">Beyond Relief</div>
              <h3>Masjid-Centered Transformation</h3>
              <p>
                The organization’s differentiator is a model that turns trusted
                community infrastructure into an active pathway for education,
                welfare, livelihood, and food security.
              </p>
            </div>

            <div className="model-steps-grid">
              {aboutData.modelChapters.map((chapter) => (
                <article className="model-step-card" key={chapter.label}>
                  <span className="model-step-card__num">{chapter.label}</span>
                  <h4>{chapter.title}</h4>
                  <p>{chapter.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Deep Dive */}
        <section className="section section-light" id="core-values">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Our Guiding Principles</p>
              <div>
                <h2>Core Values &amp; Institutional Trust</h2>
                <p>
                  Every intervention is guided by ethical stewardship, deep empathy,
                  and lasting community ownership.
                </p>
              </div>
            </div>

            <div className="values-grid">
              {aboutData.values.map((val) => (
                <article className="value-card" key={val.title}>
                  <span className="value-card__badge" aria-hidden="true" />
                  <h3>{val.title}</h3>
                  <p>{val.description}</p>
                </article>
              ))}
            </div>

            <div className="trust-strip">
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

        {/* Impact Evidence Stats */}
        <section className="section section-dark" id="impact-evidence">
          <div className="container">
            <div className="section-heading section-heading--dark">
              <p className="eyebrow">Evidence of Impact</p>
              <div>
                <h2>Transforming Communities Across Malawi</h2>
                <p>Measurable outcomes reflecting genuine household independence.</p>
              </div>
            </div>

            <div className="doc-proof-grid">
              {proofStats.map((stat) => (
                <article className="doc-proof-stat" key={stat.label}>
                  <strong>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="doc-final" id="contact">
          <div className="doc-container doc-final__grid">
            <div>
              <p className="doc-chapter-label">Join the Story</p>
              <h2>Partner with us in building self-reliant communities.</h2>
            </div>
            <div className="doc-final__actions">
              <a href="mailto:info@annurmw.com">Start a Conversation</a>
              <Link href="/impact-stories">Read Impact Stories</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
