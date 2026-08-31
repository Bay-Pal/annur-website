"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { GalleryItem } from "@/lib/site-data";
import { galleryCategories } from "@/lib/site-data";

const itemImageMap: Record<string, string> = {
  "harvest-day": "/editorial/farmer-hero.png",
  "learning-circles": "/editorial/education-story.png",
  "women-in-training": "/editorial/skills-story.png",
  "masjid-complex": "/hero.jpg",
  "community-gathering": "/vision-mission-seedling.png",
  "livestock-rotation": "/editorial-field.png",
  "orphan-care-support": "/hero.jpg",
  "madrassah-development": "/editorial/education-story.png",
};

function categoryLabel(slug: string) {
  return galleryCategories.find((item) => item.slug === slug)?.title ?? slug;
}

export default function GalleryBrowser({
  items,
  initialCategory = "all",
}: {
  items: GalleryItem[];
  initialCategory?: string;
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesQuery =
        !term ||
        [item.title, categoryLabel(item.category), item.summary].join(" ").toLowerCase().includes(term);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, items, query]);

  return (
    <>
      <div className="gallery-toolbar">
        <div className="category-pills">
          {galleryCategories.map((category) => (
            <button
              key={category.slug}
              className={`pill ${activeCategory === category.slug ? "is-active" : ""}`}
              type="button"
              onClick={() => setActiveCategory(category.slug)}
            >
              {category.title}
            </button>
          ))}
        </div>
        <label className="search-field">
          <span aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Search gallery..."
          />
        </label>
      </div>

      <div className="gallery-grid">
        {filtered.map((item) => {
          const imgSrc = itemImageMap[item.slug] || "/editorial/farmer-hero.png";
          const className = [
            "gallery-card",
            item.wide ? "gallery-card--wide" : "",
            item.tall ? "gallery-card--tall" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <button
              key={item.slug}
              className={className}
              type="button"
              onClick={() => setLightbox(item)}
            >
              <Image
                src={imgSrc}
                alt={item.imageAlt}
                fill
                className="gallery-card__img"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="gallery-card__overlay" />
              <span className="gallery-card__content">
                <span className="gallery-card__badge">{categoryLabel(item.category)}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </span>
            </button>
          );
        })}
      </div>

      <div className={`modal ${lightbox ? "is-open" : ""}`} aria-hidden={!lightbox}>
        <button className="modal-backdrop" type="button" aria-label="Close gallery preview" onClick={() => setLightbox(null)} />
        <div className="modal-panel modal-panel--lightbox" role="dialog" aria-modal="true">
          <button className="modal-close" type="button" aria-label="Close lightbox" onClick={() => setLightbox(null)}>
            ✕
          </button>
          {lightbox ? (
            <div>
              <div className="lightbox-image-wrapper">
                <Image
                  src={itemImageMap[lightbox.slug] || "/editorial/farmer-hero.png"}
                  alt={lightbox.imageAlt}
                  fill
                  className="lightbox-media-img"
                  style={{ objectPosition: lightbox.imagePosition ?? "center" }}
                />
              </div>
              <div className="lightbox-details">
                <p className="doc-chapter-label">
                  {categoryLabel(lightbox.category)}
                </p>
                <h3>{lightbox.title}</h3>
                <p className="lightbox-desc">{lightbox.summary}</p>
                <div className="lightbox-actions">
                  <Link href={`/gallery/${lightbox.category}`} className="btn btn-primary" onClick={() => setLightbox(null)}>
                    Filter by {categoryLabel(lightbox.category)}
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
