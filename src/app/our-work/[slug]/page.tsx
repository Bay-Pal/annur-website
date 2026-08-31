import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import Icon from "@/components/ui/Icon";
import { getImpactStories } from "@/lib/content";
import { getProgramBySlug, programs } from "@/lib/site-data";

const programImages: Record<string, string> = {
  agriculture: "/editorial/farmer-hero.png",
  education: "/editorial/education-story.png",
  "economic-empowerment": "/editorial/skills-story.png",
  "social-welfare": "/hero.jpg",
};

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: `${program.title} · Our Work`,
    description: program.summary,
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const allStories = getImpactStories();
  const relatedStories = allStories.filter((story) => {
    if (story.relatedProgram === slug) return true;
    if (slug === "agriculture" && (story.category.toLowerCase().includes("agri") || story.tags.some(t => t.toLowerCase().includes("agri")))) return true;
    if (slug === "education" && (story.category.toLowerCase().includes("educ") || story.tags.some(t => t.toLowerCase().includes("school") || t.toLowerCase().includes("madrassa")))) return true;
    if (slug === "social-welfare" && (story.category.toLowerCase().includes("welfare") || story.category.toLowerCase().includes("boarding") || story.category.toLowerCase().includes("orphan") || story.tags.some(t => t.toLowerCase().includes("boarding") || t.toLowerCase().includes("orphan")))) return true;
    if (slug === "economic-empowerment" && (story.category.toLowerCase().includes("empower") || story.category.toLowerCase().includes("skills") || story.category.toLowerCase().includes("livestock") || story.tags.some(t => t.toLowerCase().includes("livelihood")))) return true;
    return false;
  });

  const heroImage = programImages[slug] || "/editorial/farmer-hero.png";
  const otherPrograms = programs.filter((p) => p.slug !== slug);

  return (
    <>
      <SiteHeader />
      <main className="program-detail-page">
        {/* Hero Header */}
        <section className="about-hero" aria-label={program.title}>
          <div className="doc-container">
            <div className="about-hero__content">
              <p className="doc-chapter-label">Our Work &bull; {program.category}</p>
              <h1>{program.title}</h1>
              <p className="about-hero__lead">{program.summary}</p>
            </div>
          </div>
        </section>

        {/* Detailed Program Overview Section */}
        <section className="doc-chapter doc-program-overview" id="overview">
          <div className="doc-container">
            <div className="doc-program-grid">
              {/* Left Column: Visual Showcase */}
              <div className="doc-program-visual-frame">
                <div className="doc-program-visual">
                  <Image
                    src={heroImage}
                    alt={program.imageAlt}
                    fill
                    priority
                    className="doc-program-image"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="doc-program-visual-overlay" />
                  <div className="doc-program-visual-badge">
                    <span>{program.category}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative Details & Highlights */}
              <div className="doc-program-info">
                <div className="doc-program-narrative">
                  <p className="doc-program-lead-p">{program.details}</p>

                  <div className="doc-program-highlights-box">
                    <h4>Core Initiatives &amp; Activities</h4>
                    <ul className="doc-program-highlights-list">
                      {program.highlights.map((item) => (
                        <li key={item}>
                          <span className="doc-highlight-icon">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Program Key Metrics */}
                  <div className="doc-program-metrics-grid">
                    {program.metrics.map((metric) => (
                      <div className="doc-program-metric-card" key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Outcomes Tags */}
                  <div className="doc-program-outcomes">
                    <span className="doc-outcomes-title">Target Outcomes:</span>
                    <div className="doc-outcomes-pills">
                      {program.outcomes.map((item) => (
                        <span className="doc-outcome-pill" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="doc-program-action">
                    <a className="btn btn-primary" href="mailto:info@annurmw.com?subject=Partner%20with%20Programme">
                      Partner with this Programme
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stories from this Programme Section */}
        {relatedStories.length > 0 && (
          <section className="doc-chapter doc-program-stories-section" id="stories">
            <div className="doc-container">
              <div className="doc-section-heading">
                <p className="doc-chapter-label">Real Transformation</p>
                <h2>Stories from this Programme</h2>
                <p className="about-section-lead">
                  Read how our {program.title.toLowerCase()} initiatives create lasting independence for real families across Malawi.
                </p>
              </div>

              <div className="doc-program-stories-grid">
                {relatedStories.map((story) => (
                  <article className="doc-program-story-card" key={story.slug}>
                    <div className="doc-program-story-card__media">
                      <Image
                        src={story.featuredImage || heroImage}
                        alt={story.imageAlt || story.title}
                        fill
                        className="doc-program-story-card__img"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <span className="doc-program-story-card__category">{story.category}</span>
                    </div>

                    <div className="doc-program-story-card__body">
                      <div className="doc-program-story-card__location">
                        <Icon name="map-pin" size={14} />
                        <span>{story.location}</span>
                      </div>

                      <h3>
                        <Link href={`/impact-stories/${story.slug}`}>
                          {story.title}
                        </Link>
                      </h3>

                      <p className="doc-program-story-card__excerpt">{story.excerpt}</p>

                      {story.afterSummary && (
                        <div className="doc-program-story-card__result">
                          <strong>Outcome:</strong>
                          <span>{story.afterSummary}</span>
                        </div>
                      )}

                      <div className="doc-program-story-card__footer">
                        <Link
                          href={`/impact-stories/${story.slug}`}
                          className="doc-arrow-link"
                        >
                          Read Full Story &rarr;
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Explore Other Programmes */}
        <section className="doc-chapter doc-other-programs" id="other-programs">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">Explore More</p>
              <h2>Other Programme Areas</h2>
            </div>

            <div className="doc-other-programs-grid">
              {otherPrograms.map((p) => (
                <Link className="doc-other-program-card" href={`/our-work/${p.slug}`} key={p.slug}>
                  <span className="doc-other-program-card__category">{p.category}</span>
                  <h4>{p.title}</h4>
                  <p>{p.summary}</p>
                  <span className="doc-arrow-link">Explore {p.title} &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="doc-final" id="join">
          <div className="doc-container doc-final__grid">
            <div>
              <p className="doc-chapter-label">Join the Story</p>
              <h2>Partner with us in building self-reliant communities.</h2>
            </div>
            <div className="doc-final__actions">
              <a href="mailto:info@annurmw.com">Start a Conversation</a>
              <Link href="/impact-stories">All Impact Stories</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
