import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand brand--footer" href="/">
            <span className="brand-mark brand-mark--image" aria-hidden="true">
              <Image
                src="/annur-logo.jpg"
                alt="An Nur Charity Foundation Logo"
                width={44}
                height={44}
                className="brand-logo-img"
              />
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
          <Link href="/about">About Us</Link>
          <Link href="/about#vision-mission">Vision & Mission</Link>
          <Link href="/about#madinah-model">The Madinah Model</Link>
          <Link href="/impact-stories">Impact Stories</Link>
          <Link href="/gallery/all">Photo Gallery</Link>
        </div>

        <div>
          <h3>Our Work</h3>
          <Link href="/our-work/education">Education</Link>
          <Link href="/our-work/agriculture">Agriculture</Link>
          <Link href="/our-work/social-welfare">Social Welfare</Link>
          <Link href="/our-work/economic-empowerment">Economic Empowerment</Link>
          <Link href="/#join">Contact & Donate</Link>
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
