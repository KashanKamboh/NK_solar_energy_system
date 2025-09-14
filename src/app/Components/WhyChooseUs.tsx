"use client";
import Image from "next/image";

import AnimateIn from "./AnimateIn";

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative w-full py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: image */}
        <AnimateIn>
          <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200">
            <Image src="/images/hero2.png" alt="Solar installation" height="400" width="400" className="h-full w-full object-cover" />
            {/* solar icon overlay */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-3 py-1 text-yellow-600 text-xs font-semibold ring-1 ring-yellow-400/40">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>
              Clean Energy
            </div>
          </div>
        </AnimateIn>

        {/* Right: text */}
        <div>
          <AnimateIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-black-900 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>
              </span>
              Why Choose Us
            </h2>
          </AnimateIn>
          <AnimateIn delay={120}>
            <p className="mt-3 text-slate-600">
              Trusted solar experts delivering efficient, reliable, and cost‑effective energy solutions for homes and businesses.
            </p>
          </AnimateIn>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <AnimateIn delay={180}>
              <div className="rounded-xl border border-gray-200 p-4">
                <div className="text-yellow-500 mb-2">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z"/></svg>
                </div>
                <h3 className="font-semibold">Quality Components</h3>
                <p className="text-sm text-slate-600 mt-1">Tier‑1 panels and inverters for long‑term performance.</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={240}>
              <div className="rounded-xl border border-gray-200 p-4">
                <div className="text-yellow-500 mb-2">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v7l3 3-3 3v7"/></svg>
                </div>
                <h3 className="font-semibold">Expert Installation</h3>
                <p className="text-sm text-slate-600 mt-1">Certified team with neat, safe, and timely delivery.</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={300}>
              <div className="rounded-xl border border-gray-200 p-4">
                <div className="text-yellow-500 mb-2">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M12 3v18"/></svg>
                </div>
                <h3 className="font-semibold">After‑Sales Support</h3>
                <p className="text-sm text-slate-600 mt-1">Responsive maintenance and performance monitoring.</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-yellow-500 mt-10" />
    </section>
  );
}


