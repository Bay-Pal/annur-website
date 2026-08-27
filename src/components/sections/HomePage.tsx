import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Icon from "@/components/ui/Icon";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { getFeaturedImpactStories } from "@/lib/content";
import { aboutData, featuredPrograms } from "@/lib/site-data";

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
        {/* Hero Section */}
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

        {/* Concise Mission Overview */}
        <section className="doc-chapter doc-opening" id="about">
          <div className="doc-container doc-opening__grid">
            <p className="doc-chapter-label">Our Approach</p>
            <div>
              <h2>From Relief to Self-Reliance</h2>
              <p className="doc-opening__lead">
                We empower vulnerable families in Malawi through structured, faith-rooted support—turning temporary aid into enduring independence.
              </p>
              <div style={{ marginTop: "20px" }}>
                <Link className="doc-arrow-link" href="/about">
                  Learn about our model &amp; philosophy
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Break */}
        <section className="doc-photo-break" aria-label="Field work in Malawi">
          <Image
            src="/editorial/farmer-hero.png"
            alt="Green agricultural field supported by An Nur Charity Foundation"
            fill
            className="doc-photo-break__image"
            sizes="100vw"
          />
          <div className="doc-photo-break__caption">
            <span>Field work in Malawi</span>
            <strong>Food security becomes dignity when people can grow again.</strong>
          </div>
        </section>

        {/* What the Model Carries (Our 4 Pillars) */}
        <section className="doc-chapter doc-work" id="our-work">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">Our Core Initiatives</p>
              <h2>Four Pillars for Self-Reliance</h2>
            </div>

            <div className="doc-pillar-grid">
              {featuredPrograms.map((program) => (
                <Link
                  className="doc-pillar"
                  href={`/our-work/${program.slug}`}
                  key={program.slug}
                >
                  <Icon name={program.icon} />
                  <span>{program.title}</span>
                  <p>{program.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
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

        {/* Stories from the Field */}
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

        {/* Final CTA */}
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
