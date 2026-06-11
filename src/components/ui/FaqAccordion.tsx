"use client";

import { useState } from "react";
import type { Faq } from "@/lib/site-data";

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((faq, index) => {
        const isOpen = index === openIndex;
        return (
          <article key={faq.question} className={`faq-item ${isOpen ? "is-open" : ""}`}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            >
              <span>{faq.question}</span>
              <span>{isOpen ? "-" : "+"}</span>
            </button>
            <div className="faq-item__content">
              <p>{faq.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
