"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/roweos", label: "RoweOS", highlight: true },
  { href: "/solo-training", label: "Solo Training" },
  { href: "/retreats", label: "Retreats" },
  { href: "/reserve", label: "Reserve" },
  { href: "/rowe-and-co", label: "Rowe & Co." },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-trc-black/90 backdrop-blur border-b border-trc-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl text-trc-cream hover:text-trc-gold transition-colors">
          The Rowe Collection
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.highlight
                  ? "text-trc-gold font-medium hover:text-trc-cream transition-colors"
                  : "text-trc-cream/70 hover:text-trc-cream transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 bg-gradient-to-r from-trc-gold to-trc-bronze text-trc-black font-semibold rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-trc-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-trc-border bg-trc-black/95 backdrop-blur">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.highlight
                    ? "text-trc-gold font-medium"
                    : "text-trc-cream/70"
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2 bg-gradient-to-r from-trc-gold to-trc-bronze text-trc-black font-semibold rounded-full text-sm text-center"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
