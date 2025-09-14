"use client";

import AnimateIn from "./AnimateIn";

export default function PromoBanner() {
  return (
    <section className="relative w-full bg-white">
      {/* Abstract background composed of gradients + solar icons */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft gradient blobs */}
        <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-yellow-200/40 blur-3xl" />
        <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl" />

        {/* repeating panel grid pattern */}
        <svg className="absolute inset-0 h-full w-full text-gray-100" viewBox="0 0 200 200" fill="none">
          <defs>
            <pattern id="panelGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="2" y="2" width="16" height="16" rx="2" className="stroke-gray-200" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#panelGrid)" />
        </svg>

        {/* scattered solar icons */}
        <svg className="absolute left-6 top-10 h-10 w-10 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="4" />
          <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
            <path d="M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M19.8 4.2l-2.1 2.1M6.3 17.7l-2.1 2.1" />
          </g>
        </svg>
        <svg className="absolute right-10 top-24 h-9 w-9 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="4" />
          <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
            <path d="M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M19.8 4.2l-2.1 2.1M6.3 17.7l-2.1 2.1" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Decorative dotted globe on right */}
        <svg aria-hidden className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] text-gray-200 opacity-70 hidden md:block" viewBox="0 0 200 200" fill="currentColor">
          {Array.from({ length: 20 }).map((_, r) => (
            <g key={r}>
              {Array.from({ length: 20 }).map((_, c) => (
                <circle key={c} cx={c * 10} cy={r * 10} r={0.9} />
              ))}
            </g>
          ))}
        </svg>

        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Vertical label */}
          <div className="col-span-1 hidden md:flex justify-center">
            <span className="text-xs tracking-widest text-gray-400" style={{ writingMode: "vertical-rl" }}>ENERGIUM 2025</span>
          </div>

          {/* Headline + quote */}
          <div className="col-span-12 md:col-span-8">
            <AnimateIn>
              <h2 className="text-4xl sm:text-6xl font-extrabold leading-[1.1] text-slate-900">
                Power <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">Tomorrow</span>
                <span className="text-amber-500"> with Clean</span>
                <span className="block text-amber-500">Solar</span>
              </h2>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="mt-8 rounded-lg bg-teal-500 text-white p-5 max-w-2xl shadow">
                <div className="flex items-start gap-3">
                  <span className="text-2xl leading-none">“</span>
                  <p className="text-base">
                    NK Solar & Energy Systems is one of the most trusted renewable energy partners—delivering efficient, reliable, and neat solar installations.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Side note badge */}
          <div className="col-span-12 md:col-span-3 md:col-start-10 mt-6 md:mt-2">
            <AnimateIn delay={250}>
              <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-4">
                <div className="text-sm font-semibold text-yellow-700">Solar Advantage</div>
                <p className="mt-1 text-sm text-yellow-800/90">Lower bills, higher property value, and a cleaner planet.</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-yellow-500" />
    </section>
  );
}


