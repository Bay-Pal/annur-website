"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "The Model", href: "/#model" },
  { label: "Stories", href: "/#stories" },
  { label: "Impact", href: "/#impact" },
  { label: "Our Work", href: "/#our-work" },
  { label: "Get Involved", href: "/#join" },
  { label: "Contact", href: "/#join" },
];

function LogoMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none">
        <path
          d="M32 8C24.4 14.4 20 23.1 20 32.4c0 12.1 7.4 19.9 12 23.6 4.7-3.7 12-11.5 12-23.6C44 23.1 39.6 14.4 32 8Z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M32 19c-4.5 3.6-7 8.9-7 14.3 0 6.7 3.3 11.2 7 14.3 3.7-3.1 7-7.6 7-14.3 0-5.4-2.5-10.7-7-14.3Z"
          fill="currentColor"
        />
        <path
          d="M14 50h36"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = donateOpen || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [donateOpen, menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setDonateOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="AN NUR Charity Foundation home">
            <LogoMark />
            <span className="brand-text">
              <strong>AN NUR</strong>
              <span>Charity Foundation</span>
            </span>
          </Link>

          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>

          <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button className="search-pill" type="button" aria-label="Search">
              <Icon name="search" />
            </button>
            <button className="btn btn-primary" type="button" onClick={() => setDonateOpen(true)}>
              <span aria-hidden="true" className="btn-icon">
                <Icon name="heart" />
              </span>
              Donate Now
            </button>
          </div>
        </div>
      </header>

      <div
        className={`modal ${donateOpen ? "is-open" : ""}`}
        aria-hidden={!donateOpen}
        role="presentation"
      >
        <button className="modal-backdrop" type="button" aria-label="Close donation modal" onClick={() => setDonateOpen(false)} />
        <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="donate-title">
          <button className="modal-close" type="button" aria-label="Close dialog" onClick={() => setDonateOpen(false)}>
            X
          </button>
          <p className="eyebrow">Donation gateway</p>
          <h3 id="donate-title">Online donations coming soon.</h3>
          <p>
            The experience is already structured for Stripe, PayPal, Flutterwave, bank
            transfer, or a custom gateway later.
          </p>
          <ul className="donate-list">
            <li>Stripe-ready UI</li>
            <li>PayPal-ready UI</li>
            <li>Flutterwave-ready UI</li>
            <li>Bank transfer support</li>
          </ul>
          <button className="btn btn-primary btn-lg" type="button" onClick={() => setDonateOpen(false)}>
            Understood
          </button>
        </div>
      </div>
    </>
  );
}
