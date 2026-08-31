import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TransformationCycleVisual from "@/components/ui/TransformationCycleVisual";
import { aboutData, site, trustPoints } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us · Vision, Mission & Strategic Vision 2050",
  description:
    "Learn about AN NUR Charity Foundation, our Vision, Mission, Core Values, The Transformation Cycle, The Madinah Model, and Strategic Vision 2050 for sustainable community transformation in Malawi.",
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
          <div className="doc-container">
            <div className="about-hero__content">
              <p className="doc-chapter-label">About AN NUR Charity Foundation</p>
              <h1>From Dependency to Dignity</h1>
              <p className="about-hero__lead">
                A faith-based community development organization in Malawi helping
                families move from vulnerability to lasting self-reliance through
                education, sustainable agriculture, livelihood creation, and orphan care.
              </p>
            </div>
          </div>
        </section>

        {/* 01. Vision, Mission & Philosophy Slide Showcase */}
        <section className="about-vision-section" id="vision-mission">
          <div className="doc-container">
            <div className="slide-deck-card">
              <div className="slide-deck-content">
                <div className="slide-deck-header">
                  <div>
                    <p className="doc-chapter-label">Foundational Pillars</p>
                    <h2>Vision, Mission &amp; Philosophy</h2>
                  </div>
                  <div className="slide-deck-badge" aria-label="AN NUR Logo">
                    <div className="slide-deck-logo-wrap">
                      <Image
                        src="/annur-logo.jpg"
                        alt="An Nur Logo"
                        width={44}
                        height={44}
                        className="slide-deck-logo-img"
                      />
                    </div>
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
                    <span className="sep" aria-hidden="true">&bull;</span>
                    <span>Empathy</span>
                    <span className="sep" aria-hidden="true">&bull;</span>
                    <span>Sustainability</span>
                    <span className="sep" aria-hidden="true">&bull;</span>
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

        {/* 02. The Transformation Cycle Centered Showcase */}
        <section className="about-cycle-section" id="transformation-cycle">
          <div className="doc-container">
            <div className="cycle-centered-card">
              <div className="cycle-centered-header">
                <p className="doc-chapter-label">The Multiplier Effect</p>
                <h2>The Transformation Cycle</h2>
                <p className="cycle-centered-lead">
                  <strong>Shifting Mindsets: From Receiving to Giving</strong> &bull; Building hands that can feed themselves through a self-sustaining cycle centered on <strong>Dignity &amp; Independence</strong>.
                </p>
              </div>

              {/* Centered Interactive Visual Cycle Component */}
              <TransformationCycleVisual />
            </div>
          </div>
        </section>

        {/* 03. The 8-Step Madinah Model */}
        <section className="about-model-section" id="madinah-model">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">The 8-Stage Lifecycle</p>
              <h2>The Madinah Model in Action</h2>
              <p className="about-section-lead">
                A community-first framework built around local trust, continuous support,
                and reinvested strength.
              </p>
            </div>

            <div className="model-statement-banner">
              <span className="doc-madinah-nucleus-tag">Beyond Relief</span>
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

        {/* 04. Strategic Vision 2050 Roadmap */}
        <section className="about-vision2050-section" id="vision-2050">
          <div className="doc-container">
            <div className="slide-deck-card">
              <div className="slide-deck-content">
                <div className="slide-deck-header">
                  <div>
                    <p className="doc-chapter-label">Long-Term Horizon</p>
                    <h2>Strategic Vision 2050</h2>
                  </div>
                  <div className="slide-deck-badge" aria-label="AN NUR Logo">
                    <div className="slide-deck-logo-wrap">
                      <Image
                        src="/annur-logo.jpg"
                        alt="An Nur Logo"
                        width={44}
                        height={44}
                        className="slide-deck-logo-img"
                      />
                    </div>
                  </div>
                </div>

                <div className="slide-deck-body">
                  <div className="slide-deck-block">
                    <h3>A Roadmap for a Self-Sufficient Ummah</h3>
                    <p>
                      A structured multi-decade framework progressing from local consolidation in Malawi to national self-reliance and global replication.
                    </p>
                  </div>

                  <div className="slide-deck-timeline">
                    <div className="slide-timeline-phase">
                      <span className="timeline-phase-tag">Phase 01 &bull; Short Term</span>
                      <strong>Consolidation</strong>
                      <p>Scale demo plots (Farm Field Schools) to 15+ locations and complete sustainable irrigation installations.</p>
                    </div>

                    <div className="slide-timeline-phase">
                      <span className="timeline-phase-tag">Phase 02 &bull; Medium Term</span>
                      <strong>National Impact</strong>
                      <p>Establish communities across Malawi that are pious, confident, and economically stable.</p>
                    </div>

                    <div className="slide-timeline-phase slide-timeline-phase--highlight">
                      <span className="timeline-phase-tag">Phase 03 &bull; Long Term</span>
                      <strong>Global Replication</strong>
                      <p>Replicate the model across <strong>33 iERA operational countries</strong> as an enduring blueprint for Muslim empowerment.</p>
                    </div>
                  </div>
                </div>

                <div className="slide-deck-footer">
                  <hr className="slide-deck-divider" />
                  <div className="slide-deck-values">
                    <span>15+ Field Schools</span>
                    <span className="sep" aria-hidden="true">&bull;</span>
                    <span>National Self-Reliance</span>
                    <span className="sep" aria-hidden="true">&bull;</span>
                    <span>33 iERA Countries</span>
                  </div>
                </div>
              </div>

              <div className="slide-deck-visual">
                <Image
                  src="/editorial/education-story.png"
                  alt="Young students in Malawi studying in an empowered classroom"
                  fill
                  priority
                  className="slide-deck-image"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 05. Core Values Deep Dive */}
        <section className="about-values-section" id="core-values">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">Our Guiding Principles</p>
              <h2>Core Values &amp; Institutional Trust</h2>
              <p className="about-section-lead">
                Every intervention is guided by ethical stewardship, deep empathy,
                and lasting community ownership.
              </p>
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

        {/* 06. Impact Evidence Stats */}
        <section className="doc-proof" id="impact-evidence">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">Evidence of Impact</p>
              <h2>Transforming Communities Across Malawi</h2>
              <p className="about-section-lead--dark">Measurable outcomes reflecting genuine household independence.</p>
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

        {/* 07. Call to Action */}
        <section className="doc-final" id="contact">
          <div className="doc-container doc-final__grid">
            <div>
              <p className="doc-chapter-label">Join the Story</p>
              <h2>Partner with us in building self-reliant communities.</h2>
            </div>
            <div className="doc-final__actions">
              <Link href="/contact">Start a Conversation</Link>
              <Link href="/impact-stories">Read Impact Stories</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
