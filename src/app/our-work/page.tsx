import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import Icon from "@/components/ui/Icon";
import { programs, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Work · Programmes & Community Development",
  description:
    "Explore An Nur Charity Foundation's programmes across Malawi: Education, Social Welfare, Economic Empowerment and Agricultural Development — all grounded in The Madinah Model.",
  alternates: {
    canonical: `${site.url}/our-work`,
  },
  openGraph: {
    title: "Our Work | An Nur Charity Foundation",
    description:
      "Empowering communities in Malawi from dependency to lasting self-reliance through structured, community-led programmes.",
    url: `${site.url}/our-work`,
    siteName: site.name,
    type: "website",
  },
};

const iconMap: Record<string, "graduation" | "leaf" | "heart" | "spark" | "mosque" | "shield" | "community"> = {
  education: "graduation",
  agriculture: "leaf",
  livestock: "leaf",
  "social-welfare": "heart",
  "boreholes-water": "spark",
  "economic-empowerment": "spark",
  "womens-empowerment": "spark",
  "scholarships": "graduation",
  "orphan-care": "heart",
  "community-welfare": "heart",
  "masjid-development": "mosque",
  "disaster-relief": "shield",
  "dawah-outreach": "community",
};

export default function OurWorkPage() {
  return (
    <>
      <SiteHeader />
      <main className="our-work-page">
        {/* Hero */}
        <section className="our-work-hero" aria-label="Our Work Overview">
          <div className="container our-work-hero__content">
            <p className="eyebrow">Our Work in Malawi</p>
            <h1>Building Self-Reliance Across Every Part of Community Life</h1>
            <p className="our-work-hero__lead">
              Our programmes connect education, social welfare, livelihoods and agriculture
              to help families and communities build lasting independence.
            </p>

            <div className="our-work-hero__stats">
              <div className="our-work-hero__stat">
                <strong>15+</strong>
                <span>Masjid-Madrassah Complexes</span>
              </div>
              <div className="our-work-hero__stat">
                <strong>945+</strong>
                <span>Students Enrolled</span>
              </div>
              <div className="our-work-hero__stat">
                <strong>1,228+</strong>
                <span>Farmers Supported</span>
              </div>
              <div className="our-work-hero__stat">
                <strong>0%</strong>
                <span>Management Fees</span>
              </div>
            </div>
          </div>
        </section>

        {/* All Programmes */}
        <section className="section section-light" id="all-initiatives">
          <div className="container">
            <div className="our-work-intro">
              <div className="our-work-intro__heading">
                <span className="our-work-intro__tag">Four Programme Areas</span>
                <h2>Every Programme, Initiative and Community Intervention</h2>
              </div>
              <p className="our-work-intro__text">
                Every initiative is an integrated part of The Madinah Model — grounded in local
                masjids, guided by community leadership, and measured by real household outcomes.
              </p>
            </div>

            <div className="our-work-grid">
              {programs.map((program) => {
                const iconName = iconMap[program.slug] || "spark";

                return (
                  <article className="our-work-card" key={program.slug}>
                    <div className="our-work-card__header">
                      <div className="our-work-card__icon">
                        <Icon name={iconName} size={26} />
                      </div>
                      <span className="our-work-card__category">{program.category}</span>
                    </div>

                    <h3>{program.title}</h3>
                    <p>{program.summary}</p>

                    <div className="our-work-card__metrics">
                      {program.metrics.slice(0, 2).map((metric) => (
                        <div className="our-work-chip" key={metric.label}>
                          <strong>{metric.value}</strong> {metric.label}
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/our-work/${program.slug}`}
                      className="our-work-card__link"
                      aria-label={`Learn more about ${program.title}`}
                    >
                      <span>{program.cta ?? `Explore ${program.title}`}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* The Madinah Model Connection Banner */}
        <section className="section our-work-model-section">
          <div className="container">
            <div className="our-work-model-banner">
              <div className="our-work-model-banner__content">
                <span className="eyebrow">The Guiding Philosophy</span>
                <h2>Built on The Madinah Model</h2>
                <p>
                  We believe aid should build dignity, not dependence. Discover how our 8-stage
                  lifecycle turns local infrastructure into an engine for self-sustaining growth.
                </p>
                <div className="our-work-model-banner__actions">
                  <Link href="/about#madinah-model" className="btn-gold">
                    Explore The 8-Stage Model &rarr;
                  </Link>
                  <Link href="/about" className="btn-outline-light">
                    About Our Governance
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}


