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
      <main className="story-documentary">
        <section className="story-doc-hero">
          <Image
            src={story.featuredImage}
            alt={story.imageAlt}
            fill
            priority
            className="story-doc-hero__image"
            sizes="100vw"
          />
          <div className="story-doc-hero__shade" />
          <div className="doc-container story-doc-hero__content">
            <p className="doc-chapter-label">{story.category}</p>
            <h1>{story.title}</h1>
            <p>{story.excerpt}</p>
            <div className="story-doc-meta" aria-label="Story details">
              <span>{story.location}</span>
              <span>{relatedProgram?.title ?? story.relatedProgram}</span>
              <span>
                {new Intl.DateTimeFormat("en", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(story.publishedDate))}
              </span>
            </div>
          </div>
        </section>

        <article className="story-doc-body">
          <div className="doc-container story-doc-body__grid">
            <aside className="story-doc-aside">
              <span>Beneficiary</span>
              <strong>{story.beneficiaryName}</strong>
              <span>Program</span>
              <strong>{relatedProgram?.title ?? story.relatedProgram}</strong>
            </aside>

            <div className="story-doc-prose">
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
          </div>
        </article>

        <section className="story-before-after">
          <div className="doc-container story-before-after__grid">
            <div>
              <span>Before</span>
              <p>{story.beforeSummary}</p>
            </div>
            <div>
              <span>After</span>
              <p>{story.afterSummary}</p>
            </div>
          </div>
        </section>

        <section className="story-impact-proof">
          <div className="doc-container">
            <p className="doc-chapter-label">Impact Metrics</p>
            <div className="story-impact-proof__grid">
              {story.impactMetrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {story.galleryImages.length > 0 ? (
          <section className="story-gallery">
            <div className="doc-container">
              <div className="doc-section-heading">
                <p className="doc-chapter-label">In the field</p>
                <h2>Images from the story.</h2>
              </div>
              <div className="story-gallery__grid">
                {story.galleryImages.map((image) => (
                  <div className="story-gallery__image" key={image.src}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="story-gallery__photo"
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="story-related">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">Continue reading</p>
              <h2>More lives in motion.</h2>
            </div>
            <div className="story-related__grid">
              {relatedStories.map((item) => (
                <Link href={`/impact-stories/${item.slug}`} key={item.slug}>
                  <span>{item.category}</span>
                  <strong>{item.title}</strong>
                  <p>{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="story-cta">
          <div className="doc-container story-cta__grid">
            <div>
              <p className="doc-chapter-label">Support work like this</p>
              <h2>Help more families move from relief to self-reliance.</h2>
            </div>
            <div>
              <Link href="/#join">Support this work</Link>
              <Link href="/#join">Partner with An Nur</Link>
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
