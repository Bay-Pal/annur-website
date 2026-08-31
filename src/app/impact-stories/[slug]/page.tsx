import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import {
  getImpactStories,
  getImpactStoryBySlug,
  parseMarkdownBlocks,
} from "@/lib/content";
import { getProgramBySlug, site } from "@/lib/site-data";

type StoryParams = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getImpactStories().map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: StoryParams): Promise<Metadata> {
  const { slug } = await params;
  const story = getImpactStoryBySlug(slug);
  if (!story) return {};

  const canonical = `${site.url}/impact-stories/${story.slug}`;

  return {
    title: story.seoTitle,
    description: story.seoDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: story.seoTitle,
      description: story.seoDescription,
      url: canonical,
      siteName: site.name,
      type: "article",
      publishedTime: story.publishedDate,
      modifiedTime: story.updatedDate,
      images: [{ url: story.openGraphImage, alt: story.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: story.seoTitle,
      description: story.seoDescription,
      images: [story.openGraphImage],
    },
  };
}

export default async function StoryPage({ params }: StoryParams) {
  const { slug } = await params;
  const story = getImpactStoryBySlug(slug);
  if (!story) notFound();

  const relatedProgram = getProgramBySlug(story.relatedProgram);
  const allPublishedStories = getImpactStories();
  const closeRelatedStories = allPublishedStories.filter(
    (item) =>
      item.slug !== story.slug &&
      (item.category === story.category || item.relatedProgram === story.relatedProgram),
  );
  const fallbackRelatedStories = allPublishedStories.filter((item) => item.slug !== story.slug);
  const relatedStories = (closeRelatedStories.length > 0
    ? closeRelatedStories
    : fallbackRelatedStories
  ).slice(0, 2);
  const blocks = parseMarkdownBlocks(story.body);
  const canonical = `${site.url}/impact-stories/${story.slug}`;
  const absoluteOgImage = story.openGraphImage.startsWith("http")
    ? story.openGraphImage
    : `${site.url}${story.openGraphImage}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.seoDescription,
    image: absoluteOgImage,
    datePublished: story.publishedDate,
    dateModified: story.updatedDate,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/favicon.svg`,
      },
    },
    mainEntityOfPage: canonical,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Impact Stories",
        item: `${site.url}/impact-stories`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: story.title,
        item: canonical,
      },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main className="story-editorial-page">
        {/* Top Editorial Header */}
        <header className="story-header-section">
          <div className="doc-container">
            <Link href="/impact-stories" className="story-back-btn">
              <span aria-hidden="true">&larr;</span> Back to all impact stories
            </Link>

            <div className="story-header-content">
              <div className="story-header-eyebrow">
                <span>{story.category}</span>
                <span className="story-header-bullet">&bull;</span>
                <span>{story.location}</span>
              </div>
              <h1 className="story-header-title">{story.title}</h1>
              <p className="story-header-lead">{story.excerpt}</p>

              <div className="story-header-meta">
                <div className="story-meta-pill">
                  <span className="story-meta-pill__label">Program</span>
                  <strong>{relatedProgram?.title ?? story.relatedProgram}</strong>
                </div>
                <div className="story-meta-pill">
                  <span className="story-meta-pill__label">Beneficiary</span>
                  <strong>{story.beneficiaryName}</strong>
                </div>
                <div className="story-meta-pill">
                  <span className="story-meta-pill__label">Published</span>
                  <strong>
                    {new Intl.DateTimeFormat("en", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }).format(new Date(story.publishedDate))}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Editorial Photo Frame */}
        <section className="story-featured-frame-section">
          <div className="doc-container">
            <div className="story-featured-frame">
              <Image
                src={story.featuredImage}
                alt={story.imageAlt}
                fill
                priority
                className="story-featured-image"
                sizes="(max-width: 1200px) 100vw, 1180px"
              />
            </div>
            {story.imageAlt && (
              <p className="story-featured-caption">{story.imageAlt}</p>
            )}
          </div>
        </section>

        {/* Main Article Body with Sticky Sidebar */}
        <section className="story-content-section">
          <div className="doc-container story-content-layout">
            {/* Main Reading Column */}
            <article className="story-article-column">
              <div className="story-prose">
                {blocks.map((block, index) => {
                  if (block.type === "heading") {
                    return <h2 key={`${block.type}-${index}`}>{block.text}</h2>;
                  }

                  if (block.type === "quote") {
                    return <blockquote key={`${block.type}-${index}`}>{block.text}</blockquote>;
                  }

                  return <p key={`${block.type}-${index}`}>{block.text}</p>;
                })}
              </div>

              {/* Before & After Transformation Card */}
              {(story.beforeSummary || story.afterSummary) && (
                <div className="story-transformation-card">
                  <div className="story-transformation-col story-transformation--before">
                    <span className="story-trans-tag">The Challenge (Before)</span>
                    <p>{story.beforeSummary}</p>
                  </div>
                  <div className="story-transformation-col story-transformation--after">
                    <span className="story-trans-tag">The Outcome (After)</span>
                    <p>{story.afterSummary}</p>
                  </div>
                </div>
              )}
            </article>

            {/* Sticky Sidebar */}
            <aside className="story-sidebar-column">
              <div className="story-sidebar-card">
                <span className="story-sidebar-kicker">Impact Metrics</span>
                <h3 className="story-sidebar-title">Outcomes at a Glance</h3>

                <div className="story-sidebar-metrics">
                  {story.impactMetrics.map((metric) => (
                    <div className="story-metric-item" key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>

                <div className="story-sidebar-divider" />

                <span className="story-sidebar-kicker">Core Initiative</span>
                <h4 className="story-sidebar-program-title">
                  {relatedProgram?.title ?? story.relatedProgram}
                </h4>
                <p className="story-sidebar-program-summary">
                  {relatedProgram?.summary ??
                    "Part of An Nur's comprehensive self-reliance model across Malawi."}
                </p>

                <Link
                  href={`/our-work/${story.relatedProgram}`}
                  className="story-sidebar-cta"
                >
                  <span>Explore Initiative</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* Gallery Section if exists */}
        {story.galleryImages && story.galleryImages.length > 0 && (
          <section className="story-gallery-section">
            <div className="doc-container">
              <div className="story-section-heading">
                <span className="story-section-eyebrow">Field Photography</span>
                <h2>Moments from {story.location}</h2>
              </div>
              <div className="story-gallery-grid">
                {story.galleryImages.map((image) => (
                  <div className="story-gallery-card" key={image.src}>
                    <div className="story-gallery-media">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="story-gallery-photo"
                        sizes="(max-width: 900px) 100vw, 50vw"
                      />
                    </div>
                    {image.alt && <p className="story-gallery-caption">{image.alt}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Stories */}
        <section className="story-more-section">
          <div className="doc-container">
            <div className="story-section-heading">
              <span className="story-section-eyebrow">Related Stories</span>
              <h2>More Lives in Motion</h2>
            </div>
            <div className="story-more-grid">
              {relatedStories.map((item) => (
                <Link
                  href={`/impact-stories/${item.slug}`}
                  key={item.slug}
                  className="story-related-card"
                >
                  <div className="story-related-card__media">
                    <Image
                      src={item.featuredImage}
                      alt={item.imageAlt}
                      fill
                      className="story-related-card__image"
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </div>
                  <div className="story-related-card__copy">
                    <span className="story-related-card__tag">
                      {item.category} &bull; {item.location}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <span className="story-related-card__link">
                      Read full story &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Community Discovery Banner */}
        <section className="story-bottom-banner">
          <div className="doc-container">
            <div className="story-bottom-banner__content">
              <span className="story-bottom-banner__tag">Our Work in Malawi</span>
              <h2>Help more families move from relief to self-reliance.</h2>
              <p>
                From education and sustainable agriculture to Islamic boarding facilities and clean water,
                100% of your donation directly powers community transformation.
              </p>
              <div className="story-bottom-banner__actions">
                <Link href="/our-work" className="btn-gold">
                  Explore All Our Work &rarr;
                </Link>
                <Link href="/about" className="btn-outline-light">
                  About The Madinah Model
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteFooter />
    </>
  );
}
