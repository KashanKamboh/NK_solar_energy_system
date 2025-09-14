export default function Footer() {
  return (
    <footer className="bg-white text-slate-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo same as header (inline SVG) */}
        <div className="flex flex-col items-start gap-3">
          <svg
            className="h-35 w-auto"
            viewBox="0 0 360 90"
            role="img"
            aria-label="NK Solar & Energy"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sunGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#84cc16" />
              </linearGradient>
            </defs>
            <g transform="translate(0,6)">
              <circle cx="36" cy="36" r="18" fill="url(#sunGradFooter)" />
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
            <g transform="translate(100,20)">
              <text x="0" y="24" fontFamily="Inter, ui-sans-serif, system-ui" fontWeight="800" fontSize="22" fill="#0f172a">
                N
                <tspan fill="#f59e0b">K</tspan>
                <tspan> Solar</tspan>
              </text>
              <text x="0" y="44" fontFamily="Inter, ui-sans-serif, system-ui" fontWeight="600" fontSize="14" fill="#334155">& Energy Systems</text>
            </g>
          </svg>
          <p className="text-sm text-slate-600 max-w-sm">
            We design and install high‑efficiency solar systems with honest advice,
            neat workmanship, and dependable after‑sales support for homes and
            businesses across Pakistan.
          </p>
        </div>

        <div>
          <h4 className="text-slate-900 font-semibold">Connect</h4>
          <div className="mt-3 flex gap-3">
            <a aria-label="Facebook" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12"/></svg>
            </a>
            <a aria-label="Instagram" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded bg-pink-500/10 hover:bg-pink-500/20 text-pink-500">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z"/></svg>
            </a>
            <a aria-label="LinkedIn" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.9-2.2 3.9-2.2 4.2 0 5 2.8 5 6.3V24h-4v-6.9c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V24h-4V8z"/></svg>
            </a>
            <a aria-label="TikTok" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded bg-teal-500/10 hover:bg-teal-500/20 text-teal-500">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M21 8.2c-2.1 0-3.9-1.1-5-2.7v8.6c0 3.6-2.9 6.5-6.5 6.5S3 17.7 3 14.1c0-3.1 2.2-5.7 5.1-6.3v3.5c-1 .5-1.7 1.5-1.7 2.8 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1V2h3.1c.5 1.9 2.2 3.3 4.2 3.5v2.7z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-slate-900 font-semibold">Connect via Email</h4>
          <form className="mt-3 flex gap-2">
            <input type="email" required placeholder="you@example.com" className="flex-1 rounded bg-white border border-gray-300 px-3 py-2 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            <button className="rounded bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 text-sm font-semibold">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-sm text-slate-500">© {new Date().getFullYear()} NK Solar & Energy Systems. All rights reserved.</div>
      </div>
    </footer>
  );
}


