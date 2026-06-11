import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Icon from "@/components/ui/Icon";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { getFeaturedImpactStories } from "@/lib/content";
import { featuredPrograms } from "@/lib/site-data";

const modelChapters = [
  { label: "01", title: "Masjid", text: "A trusted community anchor." },
  { label: "02", title: "Imam", text: "Leadership that knows the families by name." },
  { label: "03", title: "Community Mapping", text: "Listening before intervention." },
  { label: "04", title: "Need Assessment", text: "The real barriers are identified with local context." },
  { label: "05", title: "Training", text: "Families gain practical knowledge and confidence." },
  { label: "06", title: "Assets", text: "Support becomes productive, not only consumable." },
  { label: "07", title: "Income", text: "Skills, land, and assets begin creating household stability." },
  { label: "08", title: "Self-Reliance", text: "Communities return strength back into the system." },
];

const proofStats = [
  { label: "Masjid-Madrassah complexes", value: 15, suffix: "+" },
  { label: "Students enrolled", value: 945, suffix: "+" },
  { label: "Farmers supported", value: 1228, suffix: "+" },
  { label: "Orphans supported", value: 58, suffix: "" },
  { label: "Management fees", value: 0, suffix: "%" },
];

export default function HomePage() {
  const featuredStories = getFeaturedImpactStories(3);

  return (
    <>
      <SiteHeader />
      <main className="documentary-home" id="home">
        <section className="doc-hero" aria-label="An Nur Charity Foundation">
          <Image
            src="/editorial/farmer-hero.png"
            alt="A farmer smiling in a green agricultural field"
            fill
            priority
            className="doc-hero__image"
            sizes="100vw"
          />
          <div className="doc-hero__veil" />
          <div className="doc-container doc-hero__content">
            <p className="doc-kicker">Chapter One</p>
            <h1>Beyond Charity. Building Self-Reliant Communities.</h1>
            <p>
              In Malawi, transformation begins when aid becomes a pathway to
              independence.
            </p>
            <Link className="doc-arrow-link" href="/#model">
              Discover the model
            </Link>
          </div>
        </section>

        <section className="doc-chapter doc-opening" id="about">
          <div className="doc-container doc-opening__grid">
            <p className="doc-chapter-label">What An Nur does</p>
            <div>
              <h2>A faith-based community development organization in Malawi.</h2>
              <p className="doc-opening__lead">
                An Nur is a faith-based community development organization in
                Malawi helping families move from dependency to self-reliance
                through education, agriculture, livelihood programs, and orphan care.
              </p>
              <p>
                Relief can answer an urgent moment. An Nur is designed for what comes
                after: a model that sees the family, the imam, the masjid, the farm,
                the classroom, and the path to earning as one connected story.
              </p>
            </div>
          </div>
        </section>

        <section className="doc-photo-break" aria-label="Field work in Malawi">
          <Image
            src="/editorial/farmer-hero.png"
            alt="Green agricultural field supported by An Nur Charity Foundation"
            fill
            className="doc-photo-break__image"
            sizes="100vw"
          />
          <div className="doc-photo-break__caption">
            <span>Field work</span>
            <strong>Food security becomes dignity when people can grow again.</strong>
          </div>
        </section>

        <section className="doc-chapter doc-model" id="model">
          <div className="doc-container">
            <div className="doc-model__intro">
              <p className="doc-chapter-label">The An Nur Model</p>
              <h2>A community framework built around trust, continuity, and return.</h2>
            </div>

            <div className="doc-model__stage">
              <div className="doc-model__statement">
                <span>Beyond charity</span>
                <strong>Masjid-centered transformation</strong>
                <p>
                  The organization’s differentiator is a model that turns trusted
                  community infrastructure into a pathway for education, welfare,
                  livelihood, and food security.
                </p>
              </div>

              <div className="doc-model__chapters">
                {modelChapters.map((chapter) => (
                  <article className="doc-model-step" key={chapter.label}>
                    <span>{chapter.label}</span>
                    <h3>{chapter.title}</h3>
                    <p>{chapter.text}</p>
                  </article>
                ))}
              </div>
              <div className="doc-model-ribbon" aria-hidden="true">
                {modelChapters.map((chapter) => (
                  <span key={chapter.label}>{chapter.title}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="doc-chapter doc-stories" id="stories">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">Stories First</p>
              <h2>Proof begins in ordinary lives.</h2>
            </div>

            <div className="doc-story-grid">
              {featuredStories.map((story, index) => (
                <Link
                  href={`/impact-stories/${story.slug}`}
                  className={`doc-story doc-story--${index + 1}`}
                  key={story.slug}
                >
                  <span
                    className="doc-story__media"
                    aria-hidden="true"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(9, 22, 38, 0.04) 30%, rgba(9, 22, 38, 0.82) 100%), url('${story.featuredImage}')`,
                    }}
                  />
                  <span className="doc-story__copy">
                    <span>{story.category}</span>
                    <strong>{story.title}</strong>
                    <p>{story.excerpt}</p>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="doc-chapter doc-proof" id="impact">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">Impact as Evidence</p>
              <h2>The numbers matter because the stories do.</h2>
            </div>

            <div className="doc-proof-grid">
              {proofStats.map((stat) => (
                <article className="doc-proof-stat" key={stat.label}>
                  <strong>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="doc-chapter doc-work" id="our-work">
          <div className="doc-container">
            <div className="doc-section-heading">
              <p className="doc-chapter-label">What the model carries</p>
              <h2>Four pillars, one journey.</h2>
            </div>

            <div className="doc-pillar-grid">
              {featuredPrograms.map((program) => (
                <Link
                  className="doc-pillar"
                  href={`/our-work/${program.slug}`}
                  key={program.slug}
                >
                  <Icon name={program.icon} />
                  <span>{program.title}</span>
                  <p>{program.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="doc-final" id="join">
          <div className="doc-container doc-final__grid">
            <div>
              <p className="doc-chapter-label">Join the story</p>
              <h2>Help build communities that can stand, grow, and give.</h2>
            </div>
            <div className="doc-final__actions">
              <a href="mailto:hello@annurcharityfoundation.org">Start a conversation</a>
              <a href="https://wa.me/265000000000" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
