"use client";

import { useEffect, useState } from "react";

const APP_URL = "https://lurch-app.vercel.app";

const LINKS = [
  ["How it works", "#how-it-works"],
  ["Pricing", "#pricing"],
  ["Merch", "#merch"],
  ["FAQ", "#faq"],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  // Sticky mobile Try-now bar appears once the hero is scrolled past.
  useEffect(() => {
    const sentinel = document.getElementById("hero-end");
    if (!sentinel) return;
    const io = new IntersectionObserver(
      ([entry]) =>
        setShowSticky(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header className={`nav${open ? " nav-menu-open" : ""}`}>
        <div className="nav-inner">
          <a href="#top" className="wordmark" onClick={() => setOpen(false)}>
            LURCH
          </a>

          <div className="nav-right">
            <nav className="nav-links" aria-label="Primary">
              {LINKS.map(([label, href]) => (
                <a key={href} href={href} className="nav-link" onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
              <a className="btn btn-sm" href={APP_URL} target="_blank" rel="noopener noreferrer">
                Try now
              </a>
            </nav>

            {/* Mobile-only: always-visible CTA + menu toggle */}
            <a
              className="btn btn-sm nav-cta-mobile"
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try now
            </a>
            <button
              className="nav-burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`sticky-try${showSticky ? " show" : ""}`} role="region" aria-label="Try now">
        <span className="sticky-note">Try now. It&apos;s free. So is loneliness.</span>
        <a className="btn btn-sm" href={APP_URL} target="_blank" rel="noopener noreferrer">
          Try now
        </a>
      </div>
    </>
  );
}
