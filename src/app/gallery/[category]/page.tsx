import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import GalleryBrowser from "@/components/ui/GalleryBrowser";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getGalleryCategoryBySlug,
  galleryItems,
  galleryCategories,
} from "@/lib/site-data";

export function generateStaticParams() {
  return galleryCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getGalleryCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.title} Gallery · Field Photography`,
    description: `Explore authentic visual moments of ${category.title.toLowerCase()} from An Nur Charity Foundation in Malawi.`,
  };
}

export default async function GalleryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getGalleryCategoryBySlug(slug);
  if (!category) notFound();
  const initialCategory = category?.slug ?? "all";

  return (
    <>
      <SiteHeader />
      <main className="gallery-page">
        {/* Hero Banner */}
        <section className="about-hero" aria-label="Field Gallery">
          <div className="doc-container">
            <div className="about-hero__content">
              <p className="doc-chapter-label">Visual Archive &bull; Field Photography</p>
              <h1>Community Gallery</h1>
              <p className="about-hero__lead">
                Explore authentic moments of learning, sustainable farming, orphan care, and community empowerment across Malawi.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Browser Section */}
        <section className="doc-chapter gallery-browser-section" id="gallery-grid">
          <div className="doc-container">
            <GalleryBrowser items={galleryItems} initialCategory={initialCategory} />
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
              <Link href="/impact-stories">Read Impact Stories</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
