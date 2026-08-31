"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import type { StoryImage } from "@/lib/content/types";

interface StoryImageCarouselProps {
  images: StoryImage[];
  title?: string;
}

export default function StoryImageCarousel({ images, title }: StoryImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const currentImage = images[activeIndex] || images[0];

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="story-carousel-wrap" aria-roledescription="carousel" aria-label={title || "Story photo carousel"}>
      {/* Main Large Stage */}
      <div className="story-carousel-stage">
        <div
          className="story-carousel-slide-active"
          onClick={() => setLightboxOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Click to view full-screen image"
          onKeyDown={(e) => e.key === "Enter" && setLightboxOpen(true)}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt || "Project field photography"}
            fill
            priority
            className="story-carousel-main-img"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
          <div className="story-carousel-overlay">
            <span className="story-carousel-expand-badge">
              <Icon name="search" size={14} />
              <span>Expand Photo</span>
            </span>
          </div>
        </div>

        {/* Prev / Next Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              className="story-carousel-arrow story-carousel-arrow--prev"
              onClick={goToPrev}
              aria-label="Previous photo"
            >
              &#8592;
            </button>
            <button
              type="button"
              className="story-carousel-arrow story-carousel-arrow--next"
              onClick={goToNext}
              aria-label="Next photo"
            >
              &#8594;
            </button>
          </>
        )}

        {/* Counter Badge */}
        <div className="story-carousel-counter">
          <span>{activeIndex + 1}</span> / <span>{images.length}</span>
        </div>
      </div>

      {/* Caption Bar */}
      {currentImage.alt && (
        <div className="story-carousel-caption-bar">
          <p className="story-carousel-caption-text">{currentImage.alt}</p>
        </div>
      )}

      {/* Thumbnails Filmstrip */}
      {images.length > 1 && (
        <div className="story-carousel-thumbnails" role="tablist" aria-label="Photo thumbnails">
          {images.map((img, idx) => (
            <button
              type="button"
              key={img.src + idx}
              role="tab"
              aria-selected={idx === activeIndex}
              className={`story-carousel-thumb-btn ${idx === activeIndex ? "is-active" : ""}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <Image
                src={img.src}
                alt={img.alt || `Thumbnail ${idx + 1}`}
                fill
                className="story-carousel-thumb-img"
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="modal is-open"
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen image view"
        >
          <button
            className="modal-backdrop"
            type="button"
            aria-label="Close lightbox"
            onClick={() => setLightboxOpen(false)}
          />
          <div className="modal-panel modal-panel--lightbox story-lightbox-panel">
            <button
              className="modal-close story-lightbox-close"
              type="button"
              aria-label="Close dialog"
              onClick={() => setLightboxOpen(false)}
            >
              ✕
            </button>
            <div className="story-lightbox-img-wrap">
              <Image
                src={currentImage.src}
                alt={currentImage.alt || "Project field photography full view"}
                fill
                className="story-lightbox-img"
                sizes="100vw"
              />
            </div>
            {currentImage.alt && (
              <p className="story-lightbox-caption">{currentImage.alt}</p>
            )}
            {images.length > 1 && (
              <div className="story-lightbox-nav">
                <button type="button" className="btn-lightbox-nav" onClick={goToPrev} aria-label="Previous">
                  &#8592; Previous
                </button>
                <span className="story-lightbox-counter">{activeIndex + 1} of {images.length}</span>
                <button type="button" className="btn-lightbox-nav" onClick={goToNext} aria-label="Next">
                  Next &#8594;
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
