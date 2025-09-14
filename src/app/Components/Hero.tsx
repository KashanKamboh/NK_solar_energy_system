"use client";

import AnimateIn from "./AnimateIn";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      <div
        className="relative w-full min-h-[75vh] flex items-center"
        style={{
          backgroundImage: "url(/images/hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <AnimateIn>
              <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight transition-all duration-300 hover:text-yellow-400 hover:tracking-wide">
                Powering a Cleaner Future with Solar Energy
              </h1>
            </AnimateIn>
            <AnimateIn delay={150}>
              <p className="mt-4 text-base sm:text-lg text-white/90 transition-all duration-300 hover:text-yellow-300 hover:translate-y-0.5">
                High-efficiency solar solutions for homes and businesses. Save energy costs and reduce your carbon footprint.
              </p>
            </AnimateIn>

            <AnimateIn delay={300}>
              <div className="mt-8 flex gap-4">
              <Link
             href="https://wa.me/923091129240"  // ✅ WhatsApp direct link
             target="_blank"
             className="h-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded md:rounded-none md:px-8"
                >
                 Get in Touch
                      </Link>
                 <a
                href="#home"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded border border-white/30 transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-yellow-500" />
    </section>
  );
}


