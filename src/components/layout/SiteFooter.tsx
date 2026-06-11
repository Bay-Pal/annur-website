import Link from "next/link";
import { site } from "@/lib/site-data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand brand--footer" href="/">
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
            <span className="brand-text">
              <strong>AN NUR</strong>
              <span>Charity Foundation</span>
            </span>
          </Link>
          <p className="footer-copy">
            {site.description} The platform is designed to be premium, transparent, and
            ready for long-term growth.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link href="/#about">About</Link>
          <Link href="/#our-work">Our Work</Link>
          <Link href="/#impact">Impact</Link>
          <Link href="/#stories">News & Stories</Link>
        </div>

        <div>
          <h3>Get involved</h3>
          <Link href="/#join">Get Involved</Link>
          <Link href="/#join">Contact</Link>
          <Link href="/#join">Donate</Link>
          <Link href="/our-work/education">Our Work</Link>
        </div>

        <div>
          <h3>Trust</h3>
          <p>Registered non-profit</p>
          <p>Government recognized in Malawi</p>
          <p>0% management fees</p>
        </div>
      </div>
    </footer>
  );
}
