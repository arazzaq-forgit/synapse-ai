"use client";

const COMPANIES = [
  "Vertex Labs",
  "Orbital",
  "Northwind Data",
  "Heliox",
  "Cascade Systems",
  "Ironclad Cloud",
  "Lumen Analytics",
  "Brightfield",
];

const TESTIMONIALS = [
  {
    quote:
      "Synapse cut our pipeline build time from weeks to hours. The self-healing orchestration alone paid for itself in the first month.",
    name: "Maya Reyes",
    role: "VP Engineering, Orbital",
  },
  {
    quote:
      "We moved 40 ETL jobs over in a single sprint. The connector library covered everything we needed out of the box.",
    name: "Daniel Okafor",
    role: "Head of Data Platform, Heliox",
  },
  {
    quote:
      "Sub-10ms execution isn't marketing fluff — our P99 latency dropped immediately after migration.",
    name: "Priya Chandrasekaran",
    role: "Staff SRE, Cascade Systems",
  },
];

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-heading"
      className="relative py-20 px-6 border-t border-border/60"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="social-proof-heading"
          className="text-center text-xs uppercase tracking-widest text-text-faint mb-10 reveal"
        >
          Trusted by data teams at high-growth companies
        </h2>

        {/* Logo marquee */}
        <div className="logo-marquee mb-20 reveal" aria-hidden="true">
          <div className="marquee-track">
            {[...COMPANIES, ...COMPANIES].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display font-600 text-xl text-text-faint px-10 whitespace-nowrap select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          aria-label="Customer testimonials"
        >
          {TESTIMONIALS.map((t) => (
            <li
              key={t.name}
              className="glass-card card-hover reveal rounded-2xl p-7 flex flex-col gap-5"
            >
              <p className="text-text-dim text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-auto">
                <p className="font-display font-600 text-sm text-text">
                  {t.name}
                </p>
                <p className="text-text-faint text-xs mt-0.5">{t.role}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
