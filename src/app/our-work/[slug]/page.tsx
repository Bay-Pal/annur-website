import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { getProgramBySlug, programs } from "@/lib/site-data";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.summary,
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section section-light">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">{program.category}</p>
              <div>
                <h2>{program.title}</h2>
                <p>{program.summary}</p>
              </div>
            </div>

            <div className="detail-hero">
              <div className="detail-visual">
                <Image
                  src="/hero.jpg"
                  alt={program.imageAlt}
                  fill
                  className="detail-image"
                  style={{ objectPosition: program.imagePosition ?? "center" }}
                  sizes="(max-width: 1100px) 100vw, 50vw"
                />
              </div>
              <div className="detail-copy">
                <p>{program.details}</p>
                <ul>
                  {program.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="detail-metrics">
                  {program.metrics.map((metric) => (
                    <div className="detail-metric" key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginTop: 28 }}>
              <h3>Outcomes</h3>
              <div className="program-meta">
                {program.outcomes.map((item, index) => (
                  <span className={`tag ${index === 0 ? "tag--gold" : ""}`} key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 28 }}>
              <Link className="btn btn-primary" href="/#join">
                Partner with this program
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
