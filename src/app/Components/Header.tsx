"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-black/5">
      {/* Thin dark strip on very top */}
      <div className="h-2 w-full bg-gray-900" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-stretch justify-between">
          {/* Left: logo only */}
          <div className="flex items-center gap-3">
            <Link href="#home" className="flex items-center gap-3" onClick={closeMenu}>
              {/* Inline SVG logo (sun + wordmark) */}
              <svg
                className="h-16 w-auto"
                viewBox="0 0 360 90"
                role="img"
                aria-label="NK Solar & Energy"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#84cc16" />
                  </linearGradient>
                </defs>
                {/* Sun/energy mark (original) */}
                <g transform="translate(0,6)">
                  <circle cx="36" cy="36" r="18" fill="url(#sunGrad)" />
                  <g stroke="#f59e0b" strokeWidth="3" strokeLinecap="round">
                    <line x1="36" y1="5" x2="36" y2="0" />
                    <line x1="36" y1="72" x2="36" y2="77" />
                    <line x1="5" y1="36" x2="0" y2="36" />
                    <line x1="72" y1="36" x2="77" y2="36" />
                    <line x1="14" y1="14" x2="10" y2="10" />
                    <line x1="58" y1="58" x2="62" y2="62" />
                    <line x1="58" y1="14" x2="62" y2="10" />
                    <line x1="14" y1="58" x2="10" y2="62" />
                  </g>
                  <path d="M34 24l-6 12h6l-2 12 8-14h-6l2-10z" fill="#ffffff" fillOpacity="0.9" />
                </g>
                {/* Wordmark */}
                <g transform="translate(100,20)">
                  <text x="0" y="24" fontFamily="Inter, ui-sans-serif, system-ui" fontWeight="800" fontSize="28" fill="#0f172a">
                    N
                    <tspan fill="#f59e0b">K</tspan>
                    <tspan> Solar</tspan>
                  </text>
                  <text x="0" y="48" fontFamily="Inter, ui-sans-serif, system-ui" fontWeight="600" fontSize="18" fill="#334155">& Energy Systems</text>
                </g>
              </svg>
            </Link>
          </div>

          {/* Center: navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  item.label === "Home" ? "text-amber-500" : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: contact + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-amber-400 text-amber-500">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.62 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.19a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.6.62A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-xs text-gray-500">Have any Questions?</div>
                <a href="tel:+923308633145" className="text-sm font-medium text-slate-900 hover:text-emerald-600">+92 309 1129240</a>
              </div>
            </div>

            <Link
  href="https://wa.me/923091129240"  // ✅ WhatsApp direct link
  target="_blank"
  className="h-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded md:rounded-none md:px-8"
>
  Get in Touch
</Link>
          </div>

          {/* Mobile: hamburger + CTA */}
          <div className="md:hidden flex items-center gap-2">
            <Link href="#contact" className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-3 py-2 rounded">Contact</Link>
            <button
              aria-label="Toggle menu"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-black/5 bg-white/95">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`block rounded px-3 py-2 text-base font-medium transition-colors ${
                  item.label === "Home" ? "text-amber-500" : "text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}


