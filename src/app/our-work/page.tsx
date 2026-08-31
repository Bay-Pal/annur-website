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
  scholarships: "graduation",
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
        <section className="about-hero" aria-label="Our Work Overview">
          <div className="doc-container">
            <div className="about-hero__content">
              <p className="doc-chapter-label">Our Work in Malawi</p>
              <h1>Building Self-Reliance Across Every Part of Community Life</h1>
              <p className="about-hero__lead">
                Our programmes connect education, social welfare, livelihoods, and agriculture
                to help families and communities move from vulnerability to lasting independence.
              </p>
            </div>
          </div>
        </section>

        {/* All Programmes */}
        <section className="doc-chapter section-light" id="all-initiatives">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">Four Core Pillars &bull; Comprehensive Action</p>
              <h2>Every Programme, Initiative &amp; Community Intervention</h2>
              <p className="about-section-lead">
                Every initiative is an integrated part of The Madinah Model — grounded in local
                masjids, guided by community leadership, and measured by genuine household outcomes.
              </p>
            </div>

            <div className="our-work-grid">
              {programs.map((program) => {
                const iconName = iconMap[program.slug] || "spark";

                return (
                  <article className="our-work-card" key={program.slug}>
                    <div className="our-work-card__header">
                      <div className="our-work-card__icon">
                        <Icon name={iconName} size={24} />
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
        <section className="about-model-section" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="doc-container">
            <div className="model-statement-banner">
              <span className="doc-madinah-nucleus-tag">The Guiding Philosophy</span>
              <h3>Built on The Madinah Model</h3>
              <p>
                We believe aid should build dignity, not dependence. Discover how our 8-stage
                lifecycle turns local infrastructure into an engine for self-sustaining growth.
              </p>
              <div style={{ marginTop: 24, display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href="/about#madinah-model" className="btn btn-primary">
                  Explore The 8-Stage Model &rarr;
                </Link>
                <Link href="/about" className="btn btn-secondary">
                  About Our Governance
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
