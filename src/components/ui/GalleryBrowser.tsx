"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { GalleryItem } from "@/lib/site-data";
import { galleryCategories } from "@/lib/site-data";

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
            placeholder="Search gallery"
          />
        </label>
      </div>

      <div className="gallery-grid">
        {filtered.map((item, index) => {
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
              style={{
                backgroundImage:
                  index % 3 === 0
                    ? "linear-gradient(180deg, rgba(7,17,29,0.08), rgba(7,17,29,0.68)), linear-gradient(135deg, rgba(46,127,220,0.4), rgba(62,156,100,0.25))"
                    : index % 3 === 1
                      ? "linear-gradient(180deg, rgba(7,17,29,0.08), rgba(7,17,29,0.68)), linear-gradient(135deg, rgba(215,168,74,0.4), rgba(46,127,220,0.25))"
                      : "linear-gradient(180deg, rgba(7,17,29,0.08), rgba(7,17,29,0.68)), linear-gradient(135deg, rgba(31,111,73,0.42), rgba(13,79,158,0.24))",
              }}
            >
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
            X
          </button>
          {lightbox ? (
            <div>
              <Image
                src="/hero.jpg"
                alt={lightbox.imageAlt}
                width={1400}
                height={900}
                className="lightbox-media"
                style={{ objectPosition: lightbox.imagePosition ?? "center" }}
              />
              <div style={{ padding: "18px 8px 4px" }}>
                <p className="eyebrow" style={{ color: "#d7a84a" }}>
                  {categoryLabel(lightbox.category)}
                </p>
                <h3 style={{ margin: "0 0 8px" }}>{lightbox.title}</h3>
                <p style={{ margin: 0, color: "rgba(247,244,239,.76)" }}>{lightbox.summary}</p>
                <Link href={`/gallery/${lightbox.category}`} className="text-button" style={{ display: "inline-block", marginTop: 16 }}>
                  Explore this category
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
