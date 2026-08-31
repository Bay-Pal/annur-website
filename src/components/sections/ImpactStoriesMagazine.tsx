"use client";

import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import type { ImpactStory } from "@/lib/content";

type Props = {
  stories: ImpactStory[];
};

export default function ImpactStoriesMagazine({ stories }: Props) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const featured = stories.find((story) => story.featured) ?? stories[0];
  const categories = ["All", ...Array.from(new Set(stories.map((story) => story.category)))];

  const visibleStories = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    return stories.filter((story) => {
      const matchesCategory = category === "All" || story.category === category;
      const matchesQuery =
        !normalizedQuery ||
        [story.title, story.excerpt, story.location, story.category, story.relatedProgram]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, deferredQuery, stories]);

  if (!featured) {
    return (
      <section className="impact-empty">
        <p>No published stories yet.</p>
      </section>
    );
  }

  return (
    <>
      <section className="stories-index-hero">
        <div className="stories-index-hero__media">
          <Image
            src={featured.featuredImage}
            alt={featured.imageAlt}
            fill
            priority
            className="stories-index-hero__image"
            sizes="100vw"
          />
          <div className="stories-index-hero__shade" />
        </div>

        <div className="doc-container stories-index-hero__content">
          <p className="doc-chapter-label">Impact Stories</p>
          <h1>Real people. Real communities. Real transformation.</h1>
          <p>
            Stories from An Nur’s work across education, agriculture, livelihood,
            Islamic boarding facilities, and community-led self-reliance in Malawi.
          </p>
          <Link href={`/impact-stories/${featured.slug}`} className="doc-arrow-link">
            Read the featured story
          </Link>
        </div>
      </section>

      <section className="stories-control-panel">
        <div className="doc-container stories-control-panel__inner">
          <div>
            <span>{stories.length} published stories</span>
            <strong>Browse by human outcome, not by archive date.</strong>
          </div>
          <label>
            <span>Search stories</span>
            <input
              type="search"
              value={query}
              placeholder="Search by place, program, or story..."
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>
      </section>

      <section className="stories-filter-strip">
        <div className="doc-container stories-filter-strip__inner">
          {categories.map((item) => (
            <button
              type="button"
              className={item === category ? "is-active" : ""}
              key={item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="stories-editorial-list">
        <div className="doc-container">
          {visibleStories.length === 0 ? (
            <div className="impact-empty">
              <p>No stories match that search yet.</p>
              <button type="button" onClick={() => { setCategory("All"); setQuery(""); }}>
                Clear filters
              </button>
            </div>
          ) : (
            <div className="stories-editorial-list__stack">
              {visibleStories.map((story, index) => (
                <Link
                  href={`/impact-stories/${story.slug}`}
                  className="impact-story-row"
                  key={story.slug}
                >
                  <span className="impact-story-row__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="impact-story-row__media">
                    <Image
                      src={story.featuredImage}
                      alt={story.imageAlt}
                      fill
                      className="impact-story-row__image"
                      sizes="(max-width: 900px) 100vw, 44vw"
                    />
                  </span>
                  <span className="impact-story-row__copy">
                    <span>{story.category} · {story.location}</span>
                    <strong>{story.title}</strong>
                    <p>{story.excerpt}</p>
                    <span className="impact-story-row__metrics">
                      {story.impactMetrics.slice(0, 2).map((metric) => (
                        <em key={`${story.slug}-${metric.label}`}>
                          {metric.value} {metric.label}
                        </em>
                      ))}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
