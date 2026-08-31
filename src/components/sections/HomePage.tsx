import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Icon from "@/components/ui/Icon";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { getFeaturedImpactStories } from "@/lib/content";
import { featuredPrograms } from "@/lib/site-data";

const proofStats = [
  { label: "Masjid-Madrassah complexes", value: 15, suffix: "+" },
  { label: "Students enrolled", value: 945, suffix: "+" },
  { label: "Farmers supported", value: 1228, suffix: "+" },
  { label: "Orphans supported", value: 58, suffix: "" },
  { label: "Management fees", value: 0, suffix: "%" },
];

export default function HomePage() {
  const featuredStories = getFeaturedImpactStories(3);

  return (
    <>
      <SiteHeader />
      <main className="documentary-home" id="home">
        {/* 01 — Hero Section */}
        <section className="doc-hero" aria-label="An Nur Charity Foundation">
          <Image
            src="/editorial/farmer-hero.png"
            alt="A farmer smiling in a green agricultural field"
            fill
            priority
            className="doc-hero__image"
            sizes="100vw"
          />
          <div className="doc-hero__veil" />
          <div className="doc-container doc-hero__content">
            <p className="doc-kicker">AN NUR CHARITY FOUNDATION</p>
            <h1>Building Self-Reliant Communities</h1>
            <p>
              Empowering families across Malawi through faith, education, and sustainable livelihoods.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "24px" }}>
              <Link className="btn btn-primary" href="/#our-work">
                Explore Our Work
              </Link>
              <Link className="btn btn-secondary" href="/about">
                About Us
              </Link>
            </div>
          </div>
        </section>

        {/* 02 — Concise Mission Overview */}
        <section className="doc-chapter doc-opening" id="about">
          <div className="doc-container doc-opening__content">
            <p className="doc-chapter-label">Our Approach</p>
            <h2>From Relief to Self-Reliance</h2>
            <p className="doc-opening__lead">
              We empower vulnerable families in Malawi through structured, faith-rooted support—turning temporary aid into enduring independence.
            </p>
            <div className="doc-opening__action">
              <Link className="doc-arrow-link" href="/about">
                Learn about our model &amp; philosophy &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* 03 — The Madinah Model: Implementation Framework */}
        <section className="doc-chapter doc-madinah-model" id="madinah-model">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">The Madinah Model</p>
              <h2>One ecosystem. The Masjid at its centre.</h2>
              <p className="doc-madinah-model__lead">
                An Nur brings spiritual development, economic stability and social cohesion together around the Masjid — creating a pathway from dependency to dignity and self-reliance.
              </p>
            </div>

            <div className="doc-madinah-framework-grid">
              {/* Left Column: Structural Core & Pillars */}
              <div className="doc-madinah-framework-copy">
                <div className="doc-madinah-nucleus-card">
                  <span className="doc-madinah-nucleus-tag">The Nucleus</span>
                  <h3>Masjid &amp; Governance</h3>
                  <p>
                    The Masjid is the community centre around which the three areas of development connect.
                  </p>
                </div>

                <div className="doc-madinah-pillars-list">
                  <div className="doc-madinah-pillar-item">
                    <div className="doc-madinah-pillar-item__header">
                      <span className="doc-madinah-pillar-item__num">01</span>
                      <h4>Spiritual Grounding</h4>
                    </div>
                    <p className="doc-madinah-pillar-item__sub">Madrassa &bull; Daily Prayers &bull; Dawah</p>
                    <span className="doc-madinah-pillar-item__outcome">
                      <strong>Outcome:</strong> Ethical behaviour &amp; resilience
                    </span>
                  </div>

                  <div className="doc-madinah-pillar-item">
                    <div className="doc-madinah-pillar-item__header">
                      <span className="doc-madinah-pillar-item__num">02</span>
                      <h4>Economic Stability</h4>
                    </div>
                    <p className="doc-madinah-pillar-item__sub">Agriculture &bull; Skills &bull; Productive assets</p>
                    <span className="doc-madinah-pillar-item__outcome">
                      <strong>Outcome:</strong> Building self-sufficiency
                    </span>
                  </div>

                  <div className="doc-madinah-pillar-item">
                    <div className="doc-madinah-pillar-item__header">
                      <span className="doc-madinah-pillar-item__num">03</span>
                      <h4>Social Cohesion</h4>
                    </div>
                    <p className="doc-madinah-pillar-item__sub">Community Mapping &bull; Unity &bull; Conflict Resolution</p>
                    <span className="doc-madinah-pillar-item__outcome">
                      <strong>Outcome:</strong> Strong, connected community support systems
                    </span>
                  </div>
                </div>

                <div className="doc-madinah-framework-action">
                  <Link className="doc-arrow-link" href="/about#madinah-model">
                    Explore the Madinah Model &rarr;
                  </Link>
                </div>
              </div>

              {/* Right Column: Implementation Framework Visual (IMAGE 1) */}
              <div className="doc-madinah-framework-visual">
                <div className="doc-madinah-framework-frame">
                  <Image
                    src="/madinah-model-framework.png"
                    alt="The Madinah Model Implementation Framework: Masjid & Governance as the nucleus connecting Spiritual Grounding, Economic Stability, and Social Cohesion"
                    width={960}
                    height={600}
                    className="doc-madinah-framework-img"
                    sizes="(max-width: 900px) 100vw, 560px"
                  />
                </div>
                <p className="doc-madinah-framework-caption">
                  The Madinah Model Implementation Framework &bull; Building the ecosystem around the Masjid
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — The Outcome: The Community We Are Building */}
        <section className="doc-chapter doc-madinah-outcomes" id="outcomes">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">The Outcome</p>
              <h2>The Community We Are Building</h2>
              <p className="doc-madinah-outcomes__lead">
                Cultivating communities that are self-sufficient, dignified, and capable of positive contribution.
              </p>
            </div>

            <div className="doc-madinah-outcomes-grid">
              <div className="doc-madinah-outcome-card">
                <div className="doc-madinah-outcome-card__icon">
                  <Icon name="mosque" size={24} />
                </div>
                <h4>Pious</h4>
                <p>Committed to worship and character.</p>
              </div>

              <div className="doc-madinah-outcome-card">
                <div className="doc-madinah-outcome-card__icon">
                  <Icon name="graduation" size={24} />
                </div>
                <h4>Confident</h4>
                <p>Strong in identity and knowledge.</p>
              </div>

              <div className="doc-madinah-outcome-card">
                <div className="doc-madinah-outcome-card__icon">
                  <Icon name="leaf" size={24} />
                </div>
                <h4>Self-Sufficient</h4>
                <p>Economically stable and not dependent on aid.</p>
              </div>

              <div className="doc-madinah-outcome-card">
                <div className="doc-madinah-outcome-card__icon">
                  <Icon name="heart" size={24} />
                </div>
                <h4>Selfless</h4>
                <p>Agents of positive change and justice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — Our Work: Four Programme Areas */}
        <section className="doc-chapter doc-work" id="our-work">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">Our Work</p>
              <h2>Building Self-Reliance Across Every Part of Community Life</h2>
            </div>

            <div className="doc-pillar-grid">
              {featuredPrograms.map((program) => (
                <Link
                  className="doc-pillar"
                  href={`/our-work/${program.slug}`}
                  key={program.slug}
                >
                  <div className="doc-pillar__icon">
                    <Icon name={program.icon} size={28} />
                  </div>
                  <h3>{program.title}</h3>
                  <p>{program.summary}</p>
                  <span className="doc-pillar__action">
                    {program.cta} <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="doc-pillars-footer">
              <div className="doc-pillars-footer__text">
                <p>
                  <strong>Explore the full scope of our work</strong> Discover every programme, initiative and community intervention across An Nur.
                </p>
              </div>
              <Link href="/our-work" className="doc-pillars-footer__btn">
                <span>Explore All Our Work</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 06 — Impact Stats */}
        <section className="doc-chapter doc-proof" id="impact">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">Impact Evidence</p>
              <h2>Measurable Community Outcomes</h2>
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

        {/* 07 — Stories from the Field */}
        <section className="doc-chapter doc-stories" id="stories">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">Real Lives</p>
              <h2>Stories of Transformation</h2>
            </div>

            <div className="doc-story-grid">
              {featuredStories.map((story, index) => (
                <Link
                  href={`/impact-stories/${story.slug}`}
                  className={`doc-story doc-story--${index + 1}`}
                  key={story.slug}
                >
                  <span
                    className="doc-story__media"
                    aria-hidden="true"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(9, 22, 38, 0.04) 30%, rgba(9, 22, 38, 0.82) 100%), url('${story.featuredImage}')`,
                    }}
                  />
                  <span className="doc-story__copy">
                    <span>{story.category}</span>
                    <strong>{story.title}</strong>
                    <p>{story.excerpt}</p>
                  </span>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link className="doc-arrow-link" href="/impact-stories">
                View all Impact Stories
              </Link>
            </div>
          </div>
        </section>

        {/* 08 — Amanah & Trust Section */}
        <section className="doc-chapter doc-amanah" id="amanah">
          <div className="doc-container">
            <div className="doc-amanah-box">
              <div className="doc-amanah-header">
                <p className="doc-chapter-label">Our Amanah</p>
                <h2>Your trust is an Amanah.</h2>
                <div className="doc-amanah-policy-pills">
                  <span className="doc-amanah-policy-tag">100% Zakaat</span>
                  <span className="doc-amanah-policy-dot">&bull;</span>
                  <span className="doc-amanah-policy-tag">0% Management Fees on Zakaat</span>
                </div>
                <p className="doc-amanah-lead">
                  An Nur treats Zakaat as a sacred trust, with operational costs covered separately so Zakaat can reach eligible beneficiaries.
                </p>
              </div>

              <div className="doc-amanah-badges-grid">
                <div className="doc-amanah-badge-item">
                  <div className="doc-amanah-badge-icon">
                    <Icon name="shield" size={22} />
                  </div>
                  <div className="doc-amanah-badge-info">
                    <strong>Incorporated in Malawi</strong>
                    <span>Companies Act (Cap 46:03)</span>
                  </div>
                </div>

                <div className="doc-amanah-badge-item">
                  <div className="doc-amanah-badge-icon">
                    <Icon name="shield" size={22} />
                  </div>
                  <div className="doc-amanah-badge-info">
                    <strong>NGORA Registered</strong>
                    <span>Reg. No. NGO/L/22/047</span>
                  </div>
                </div>

                <div className="doc-amanah-badge-item">
                  <div className="doc-amanah-badge-icon">
                    <Icon name="shield" size={22} />
                  </div>
                  <div className="doc-amanah-badge-info">
                    <strong>CONGOMA Member</strong>
                    <span>Reg. No. C1698/2022</span>
                  </div>
                </div>

                <div className="doc-amanah-badge-item">
                  <div className="doc-amanah-badge-icon">
                    <Icon name="shield" size={22} />
                  </div>
                  <div className="doc-amanah-badge-info">
                    <strong>MRA Tax Compliant</strong>
                    <span>TPIN: 70277051</span>
                  </div>
                </div>
              </div>

              <div className="doc-amanah-action">
                <Link href="/about" className="doc-arrow-link">
                  Our Commitment to Transparency &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 09 — Final CTA */}
        <section className="doc-final" id="join">
          <div className="doc-container doc-final__grid">
            <div>
              <p className="doc-chapter-label">Join the story</p>
              <h2>Help build communities that can stand, grow, and give.</h2>
            </div>
            <div className="doc-final__actions">
              <a href="mailto:info@annurmw.com">Start a conversation</a>
              <a href="https://wa.me/265000000000" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
