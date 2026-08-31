"use client";

import { useEffect, useState } from "react";

const stages = [
  {
    id: "immediate",
    step: "01",
    title: "Immediate Impact",
    sub: "Relief & Agriculture",
    detail: "Practical agriculture & urgent seasonal relief as a bridge to resilience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    color: "#16a34a",
  },
  {
    id: "scholarships",
    step: "02",
    title: "Strategic Scholarships",
    sub: "Education & Faith",
    detail: "Long-term investment in Madrassah education & higher secular schooling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    color: "#0284c7",
  },
  {
    id: "training",
    step: "03",
    title: "Community Training",
    sub: "Skills & Enterprise",
    detail: "Vocational skills, farm field schools & self-sustaining livelihood creation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "#d97706",
  },
  {
    id: "leadership",
    step: "04",
    title: "Local Leadership",
    sub: "Masjid Governance",
    detail: "Masjid-centered governance & local community accountability led by Imams.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10l-6-6-6 6v10h12Z" />
        <path d="M12 4v2" />
        <path d="M9 20v-5a3 3 0 0 1 6 0v5" />
      </svg>
    ),
    color: "#7c3aed",
  },
];

export default function TransformationCycleVisual() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % stages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <div
      className="tf-cycle-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="The Transformation Cycle Diagram"
    >
      {/* 4 Quadrant Grid Layout with Balanced Center Nucleus */}
      <div className="tf-cycle-stage">
        {/* Animated Rotating Flow Ring in Center */}
        <div className="tf-center-wheel">
          {/* Animated SVG Dual Rotating Arrows */}
          <svg className="tf-rotating-svg" viewBox="0 0 240 240" aria-hidden="true">
            <defs>
              <linearGradient id="tfArrowGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0d4f9e" />
                <stop offset="100%" stopColor="#d7a84a" />
              </linearGradient>
              <linearGradient id="tfArrowGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#0d4f9e" />
              </linearGradient>
            </defs>

            {/* Guide Circle Track */}
            <circle
              cx="120"
              cy="120"
              r="104"
              fill="none"
              stroke="rgba(13, 79, 158, 0.12)"
              strokeWidth="2"
              strokeDasharray="5 5"
            />

            {/* Rotating Arrow Arc 1 */}
            <g className="tf-spin-clockwise">
              <path
                d="M 120 16 A 104 104 0 0 1 224 120"
                fill="none"
                stroke="url(#tfArrowGrad1)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path d="M 220 116 L 228 126 L 230 112 Z" fill="#d7a84a" />
            </g>

            {/* Rotating Arrow Arc 2 */}
            <g className="tf-spin-clockwise-alt">
              <path
                d="M 120 224 A 104 104 0 0 1 16 120"
                fill="none"
                stroke="url(#tfArrowGrad2)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path d="M 20 124 L 12 114 L 10 128 Z" fill="#16a34a" />
            </g>
          </svg>

          {/* Central Nucleus Badge */}
          <div className="tf-nucleus-badge">
            <span className="tf-nucleus-tag">Core Outcome</span>
            <strong className="tf-nucleus-title">Dignity &amp; Independence</strong>
            <span className="tf-nucleus-sub">Self-Reliance</span>
          </div>
        </div>

        {/* 4 Quadrants Surrounding the Wheel */}
        <div className="tf-quadrants-grid">
          {stages.map((st, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={st.id}
                type="button"
                className={`tf-quadrant-card tf-quadrant--${st.id} ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveIdx(i)}
                style={{
                  "--accent-color": st.color,
                } as React.CSSProperties}
              >
                <div className="tf-card-icon-strip">
                  <div className="tf-card-icon" style={{ color: st.color, background: `${st.color}14` }}>
                    {st.icon}
                  </div>
                  <span className="tf-card-step-badge">{st.step}</span>
                </div>
                <div className="tf-card-text">
                  <span className="tf-card-sub">{st.sub}</span>
                  <h4 className="tf-card-title">{st.title}</h4>
                  <p className="tf-card-desc">{st.detail}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
