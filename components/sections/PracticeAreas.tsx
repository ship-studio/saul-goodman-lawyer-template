"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";

const practiceAreas = [
  {
    title: "Criminal Defense",
    description:
      "Felonies, misdemeanors, violent crimes—I know the system inside and out. Whether you're facing assault charges or more serious allegations, I'll fight for your freedom.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "DUI & Traffic",
    description:
      "One mistake shouldn't define your future. I've gotten hundreds of DUI charges reduced or dismissed. Let me review your case.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Drug Charges",
    description:
      "Possession, distribution, trafficking—the consequences are severe. I understand the defenses that work.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "White Collar Crime",
    description:
      "Fraud, embezzlement, tax evasion—complex cases require sophisticated defense.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Federal Cases",
    description:
      "Federal charges are a different ballgame. Higher stakes, tougher prosecutors. I know how to navigate the system.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Appeals",
    description:
      "Wrong verdict? Unfair sentence? I specialize in post-conviction relief and appeals.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-background py-16 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl lg:mb-16"
        >
          <span className="mb-4 inline-block border-l-2 border-gold pl-4 text-sm font-medium uppercase tracking-wider text-gold">
            Legal Services
          </span>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            How I Can Help
          </h2>
          <p className="text-base text-muted lg:text-lg">
            I&apos;ve handled thousands of cases across every type of criminal charge.
            Whatever you&apos;re facing, I&apos;ve seen it before—and I know how to beat it.
          </p>
        </motion.div>

        {/* Simple Grid - No row-span tricks */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden border border-gold/10 bg-secondary p-5 transition-all hover:border-gold/30 sm:p-6"
            >
              {/* Icon */}
              <div className="mb-3 inline-flex items-center justify-center border border-gold/20 bg-gold/5 p-2.5 text-gold transition-colors group-hover:bg-gold group-hover:text-background">
                {area.icon}
              </div>

              {/* Content */}
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                {area.title}
              </h3>
              <p className="mb-4 text-sm text-muted">{area.description}</p>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold/80"
              >
                Discuss Your Case
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
