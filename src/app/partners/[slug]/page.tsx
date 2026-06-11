import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { getPartnerBySlug, partners } from "@/lib/site-data";

export function generateStaticParams() {
  return partners.map((partner) => ({ slug: partner.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);
  if (!partner) return {};
  return {
    title: partner.name,
    description: partner.summary,
  };
}

export default async function PartnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);
  if (!partner) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section section-dark">
          <div className="container">
            <div className="section-heading section-heading--dark">
              <p className="eyebrow">Partnership</p>
              <div>
                <h2>{partner.name}</h2>
                <p>{partner.summary}</p>
              </div>
            </div>

            <div className="feature-quote">
              <p>{partner.details}</p>
            </div>

            <div style={{ marginTop: 28 }}>
              <Link className="btn btn-primary" href="/#join">
                Start a partnership conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
