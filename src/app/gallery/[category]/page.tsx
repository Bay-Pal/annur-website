import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import GalleryBrowser from "@/components/ui/GalleryBrowser";
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
    title: `${category.title} Gallery`,
    description: `Gallery archive for ${category.title.toLowerCase()} moments.`,
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
      <main>
        <section className="section section-light">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Gallery</p>
              <div>
                <h2>{category ? category.title : "Gallery"}</h2>
                <p>
                  Explore the visual archive of An Nur Charity Foundation. Search,
                  filter, and open each scene in a premium lightbox.
                </p>
              </div>
            </div>

            <GalleryBrowser items={galleryItems} initialCategory={initialCategory} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
