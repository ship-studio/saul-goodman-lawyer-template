"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";

const featuredResult = {
  outcome: "NOT GUILTY",
  type: "Federal Drug Trafficking",
  description:
    "Client faced 20 years to life. After 18 months of investigation and expert testimony, the jury returned a full acquittal in under 2 hours.",
};

const caseResults = [
  {
    outcome: "Dismissed",
    type: "DUI - Third Offense",
    description: "Breathalyzer thrown out",
  },
  {
    outcome: "Not Guilty",
    type: "Assault & Battery",
    description: "Self-defense proven",
  },
  {
    outcome: "Reduced",
    type: "Felony → Misdemeanor",
    description: "No jail time",
  },
  {
    outcome: "Dismissed",
    type: "White Collar Fraud",
    description: "Insufficient evidence",
  },
  {
    outcome: "Acquitted",
    type: "Weapons Charge",
    description: "Illegal search",
  },
  {
    outcome: "Probation",
    type: "Drug Possession",
    description: "First offender program",
  },
];

export function CaseResults() {
  return (
    <section id="results" className="bg-background py-16 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center lg:mb-16"
        >
          <span className="mb-4 inline-block border-l-2 border-gold pl-4 text-sm font-medium uppercase tracking-wider text-gold">
            Track Record
          </span>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Recent Victories
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted lg:text-lg">
            Results matter. Here are just a few outcomes I&apos;ve achieved
            for clients facing serious charges.
          </p>
        </motion.div>

        {/* Featured Result - Full Width on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 overflow-hidden border border-gold/30 bg-gold p-6 text-background sm:mb-6 sm:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="mb-1 inline-block text-xs font-medium uppercase tracking-wider text-background/70 sm:text-sm">
                Featured Case
              </span>
              <p className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl lg:text-5xl">
                {featuredResult.outcome}
              </p>
              <p className="mt-1 text-lg font-semibold text-background/90 sm:text-xl">
                {featuredResult.type}
              </p>
            </div>
            <div className="max-w-md">
              <p className="text-sm text-background/80 sm:text-base">{featuredResult.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Other Results - Simple Grid */}
        <div className="grid gap-3 grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {caseResults.map((result, index) => (
            <motion.div
              key={result.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="border border-gold/10 bg-secondary p-4 transition-all hover:border-gold/30 sm:p-5"
            >
              <p className="font-[family-name:var(--font-display)] text-lg font-bold text-gold sm:text-xl lg:text-2xl">
                {result.outcome}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {result.type}
              </p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{result.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-center text-xs text-muted sm:mt-8"
        >
          *Prior results do not guarantee a similar outcome. Each case is unique.
        </motion.p>
      </Container>
    </section>
  );
}
