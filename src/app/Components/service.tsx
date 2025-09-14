export default function Services() {
    return (
      <section className="bg-gray-50 pt-12 pb-20">
        <div className="container mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-black-800 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            At NK Solar & Energy Systems, we provide complete solar solutions to make your energy journey smooth, reliable, and cost-efficient.
          </p>
  
          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="18" height="10" rx="2" />
                  <line x1="22" y1="11" x2="22" y2="13" />
                  <path d="M11 14l1-3 1 3 1-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Battery Backup & Hybrid Solutions
              </h3>
              <p className="text-gray-600">
                Reliable hybrid and backup power solutions to keep your home and business running during outages.
              </p>
            </div>
  
            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 10l-5 5" />
                  <path d="M13.5 6.5l4 4" />
                  <path d="M3 21h7" />
                  <path d="M14 3l7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Maintenance & Support
              </h3>
              <p className="text-gray-600">
                Regular check-ups, troubleshooting, and professional support to keep your solar system efficient.
              </p>
            </div>
  
            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="13 2 13 9 20 9" />
                  <path d="M20 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l9 9v7a2 2 0 0 1-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Installation & Commissioning
              </h3>
              <p className="text-gray-600">
                End-to-end installation and system setup by certified professionals for maximum performance.
              </p>
            </div>
  
            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Solar Panel Sales & Supply
              </h3>
              <p className="text-gray-600">
                High-quality solar panels and equipment from trusted brands at competitive prices.
              </p>
            </div>
  
            {/* Card 5 */}
            <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M7 13l3 3 7-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Energy Audits & Consultation
              </h3>
              <p className="text-gray-600">
                Expert analysis of your energy usage with tailored recommendations for solar adoption.
              </p>
            </div>
  
            {/* Card 6 */}
            <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="8" width="18" height="13" rx="2" />
                  <path d="M16 3H8v5h8V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Commercial & Industrial Solutions
              </h3>
              <p className="text-gray-600">
                Large-scale solar projects designed for factories, offices, and institutions.
              </p>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-yellow-500 mt-10" />
      </section>
    );
  }
  