import type { Metadata } from "next";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import ImpactStoriesMagazine from "@/components/sections/ImpactStoriesMagazine";
import { getImpactStories } from "@/lib/content";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Impact Stories",
  description:
    "Read documentary-style impact stories from An Nur Charity Foundation’s work in Malawi across education, agriculture, orphan care, and livelihood programs.",
  alternates: {
    canonical: `${site.url}/impact-stories`,
  },
  openGraph: {
    title: "Impact Stories | An Nur Charity Foundation",
    description:
      "Real people, real communities, and real transformation through An Nur’s work in Malawi.",
    url: `${site.url}/impact-stories`,
    siteName: site.name,
    type: "website",
    images: [{ url: "/editorial/farmer-hero.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impact Stories | An Nur Charity Foundation",
    description:
      "Documentary-style stories from An Nur’s community development work in Malawi.",
    images: ["/editorial/farmer-hero.png"],
  },
};

export default function ImpactStoriesPage() {
  const stories = getImpactStories();

  return (
    <>
      <SiteHeader />
      <main className="documentary-home">
        <ImpactStoriesMagazine stories={stories} />
      </main>
      <SiteFooter />
    </>
  );
}
