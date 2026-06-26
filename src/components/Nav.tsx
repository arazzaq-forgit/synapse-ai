"use client";
import { useState, useEffect } from "react";
import { IconLogo, IconXMark } from "./Icons";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Blog", href: "#blog" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group" aria-label="Synapse AI Home">
          <IconLogo size={32} />
          <span className="font-display font-600 text-lg text-text group-hover:text-accent-bright transition-colors duration-200">
            Synapse<span className="text-accent">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-text-dim hover:text-text transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="btn-ghost text-sm px-4 py-2 rounded-lg font-medium"
          >
            Sign In
          </a>
          <a
            href="#pricing"
            className="btn-primary text-sm px-5 py-2 rounded-lg font-medium relative z-10"
          >
            <span className="relative z-10">Start Free</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-dim hover:text-text transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <IconXMark size={24} color="currentColor" />
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="3" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3" y1="17" x2="21" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="nav-blur border-t border-border/50 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-dim hover:text-text transition-colors py-2 text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="btn-primary text-sm px-5 py-2.5 rounded-lg font-medium text-center relative z-10 mt-2"
            onClick={() => setMobileOpen(false)}
          >
            <span className="relative z-10">Start Free</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
