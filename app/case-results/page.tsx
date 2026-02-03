"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const stats = [
  { value: "95%", label: "Acquittal Rate" },
  { value: "3,000+", label: "Cases Won" },
  { value: "$50M+", label: "Exposed in Fines Avoided" },
  { value: "20+", label: "Years Experience" },
];

const featuredCase = {
  outcome: "NOT GUILTY",
  type: "Federal Drug Trafficking Conspiracy",
  client: "Business Owner, 47",
  charges: "Conspiracy to Distribute Controlled Substances (21 U.S.C. § 846)",
  exposure: "20 years to life in federal prison",
  result:
    "After 18 months of investigation, we uncovered prosecutorial overreach and challenged the government's key informant. The jury returned a full acquittal in under 2 hours.",
  highlight: "Client walked free after facing life in prison",
};

const caseCategories = [
  {
    category: "Criminal Defense",
    cases: [
      {
        outcome: "Not Guilty",
        type: "First-Degree Murder",
        description: "Self-defense proven at trial. Client acquitted after 3-week jury trial.",
      },
      {
        outcome: "Dismissed",
        type: "Assault & Battery",
        description: "Witness credibility destroyed on cross-examination. All charges dropped.",
      },
      {
        outcome: "Not Guilty",
        type: "Armed Robbery",
        description: "Misidentification proven through alibi witnesses. Full acquittal.",
      },
      {
        outcome: "Reduced",
        type: "Felony → Misdemeanor",
        description: "Aggravated assault reduced to simple battery. No jail time, probation only.",
      },
    ],
  },
  {
    category: "DUI & Traffic",
    cases: [
      {
        outcome: "Dismissed",
        type: "DUI - Third Offense",
        description: "Breathalyzer calibration records challenged. Case thrown out.",
      },
      {
        outcome: "Dismissed",
        type: "DUI with Injury",
        description: "Illegal traffic stop. All evidence suppressed.",
      },
      {
        outcome: "Reduced",
        type: "Felony DUI → Reckless",
        description: "Negotiated to reckless driving. License retained, no jail.",
      },
      {
        outcome: "Not Guilty",
        type: "DUI - 0.18 BAC",
        description: "Field sobriety test administration challenged. Jury acquitted.",
      },
    ],
  },
  {
    category: "Drug Charges",
    cases: [
      {
        outcome: "Dismissed",
        type: "Trafficking (5kg Cocaine)",
        description: "Illegal search and seizure. Evidence suppressed, case dismissed.",
      },
      {
        outcome: "Probation",
        type: "Possession with Intent",
        description: "First-time offender. Negotiated drug court diversion, no record.",
      },
      {
        outcome: "Not Guilty",
        type: "Manufacturing",
        description: "Insufficient evidence of manufacturing intent. Full acquittal.",
      },
      {
        outcome: "Dismissed",
        type: "Prescription Fraud",
        description: "Medical necessity defense. Prosecution declined to proceed.",
      },
    ],
  },
  {
    category: "White Collar",
    cases: [
      {
        outcome: "Dismissed",
        type: "Wire Fraud ($2.3M)",
        description: "Lack of intent proven. Federal prosecutors dropped all charges.",
      },
      {
        outcome: "Not Guilty",
        type: "Embezzlement",
        description: "Authorization defense accepted. Client acquitted after 2-week trial.",
      },
      {
        outcome: "Reduced",
        type: "Tax Evasion → Civil",
        description: "Criminal charges dropped. Resolved as civil tax matter with IRS.",
      },
      {
        outcome: "Dismissed",
        type: "Money Laundering",
        description: "Insufficient evidence of knowledge. Charges dismissed pre-trial.",
      },
    ],
  },
  {
    category: "Federal Cases",
    cases: [
      {
        outcome: "Not Guilty",
        type: "Federal Conspiracy",
        description: "RICO charges defeated. Client acquitted on all 12 counts.",
      },
      {
        outcome: "Reduced",
        type: "Bank Fraud",
        description: "Negotiated from 15 years to 18 months. Client served in minimum security.",
      },
      {
        outcome: "Dismissed",
        type: "Immigration Fraud",
        description: "Administrative error by government. All charges withdrawn.",
      },
      {
        outcome: "Probation",
        type: "Federal Drug Possession",
        description: "Substantial assistance to government. No prison time.",
      },
    ],
  },
  {
    category: "Appeals",
    cases: [
      {
        outcome: "Reversed",
        type: "Murder Conviction",
        description: "Ineffective counsel on appeal. New trial ordered, client later acquitted.",
      },
      {
        outcome: "Expunged",
        type: "Felony Record",
        description: "Old conviction expunged. Client's record cleared for employment.",
      },
      {
        outcome: "Reversed",
        type: "Drug Trafficking",
        description: "Constitutional violation identified. Conviction overturned.",
      },
      {
        outcome: "Modified",
        type: "25 Years → 8 Years",
        description: "Sentence modification granted. Client released 17 years early.",
      },
    ],
  },
];

function getOutcomeColor(outcome: string): string {
  const lowerOutcome = outcome.toLowerCase();
  if (lowerOutcome.includes("guilty") || lowerOutcome === "acquitted" || lowerOutcome === "reversed" || lowerOutcome === "expunged") {
    return "text-gold";
  }
  if (lowerOutcome === "dismissed") {
    return "text-emerald-400";
  }
  if (lowerOutcome === "reduced" || lowerOutcome === "probation" || lowerOutcome === "modified") {
    return "text-sky-400";
  }
  return "text-gold";
}

export default function CaseResultsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-background pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.03]" />
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold sm:text-sm">
                <span className="h-px w-8 bg-gold" />
                Case Results
              </span>
              <h1 className="mb-6 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Results That{" "}
                <span className="text-gold">Speak for Themselves</span>
              </h1>
              <p className="text-base text-muted sm:text-lg lg:text-xl">
                When your freedom is on the line, results matter. I've spent 20
                years fighting for my clients in courtrooms across New Mexico
                and federal courts nationwide. Here's my track record.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-gold/20 bg-secondary py-8 lg:py-12">
          <Container>
            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-gold sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Featured Case */}
        <section className="bg-background py-16 lg:py-24">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 text-center"
            >
              <span className="mb-4 inline-block border-l-2 border-gold pl-4 text-sm font-medium uppercase tracking-wider text-gold">
                Featured Victory
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden border border-gold/30 bg-gold"
            >
              <div className="p-6 sm:p-8 lg:p-12">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                  <div>
                    <span className="mb-2 inline-block text-xs font-medium uppercase tracking-wider text-background/70">
                      Verdict
                    </span>
                    <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-background sm:text-5xl lg:text-6xl">
                      {featuredCase.outcome}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-background/90 sm:text-2xl">
                      {featuredCase.type}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-background/60">
                        Client
                      </span>
                      <p className="text-background/90">{featuredCase.client}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-background/60">
                        Charges
                      </span>
                      <p className="text-background/90">{featuredCase.charges}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-background/60">
                        Exposure
                      </span>
                      <p className="font-semibold text-background">{featuredCase.exposure}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-background/20 pt-8">
                  <p className="text-background/80 sm:text-lg">{featuredCase.result}</p>
                  <p className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-background sm:text-xl">
                    {featuredCase.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Case Results by Category */}
        <section className="bg-secondary py-16 lg:py-24">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <span className="mb-4 inline-block border-l-2 border-gold pl-4 text-sm font-medium uppercase tracking-wider text-gold">
                By Practice Area
              </span>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Recent Case Outcomes
              </h2>
              <p className="mx-auto max-w-2xl text-muted sm:text-lg">
                Every case is different, but my approach is always the same:
                fight for the best possible outcome.
              </p>
            </motion.div>

            <div className="space-y-12 lg:space-y-16">
              {caseCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
                >
                  <h3 className="mb-6 flex items-center gap-4 font-[family-name:var(--font-display)] text-xl font-semibold text-foreground sm:text-2xl">
                    <span className="h-px flex-1 bg-gold/20" />
                    {category.category}
                    <span className="h-px flex-1 bg-gold/20" />
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {category.cases.map((caseItem, caseIndex) => (
                      <motion.div
                        key={`${category.category}-${caseIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: caseIndex * 0.05 }}
                        whileHover={{ y: -4 }}
                        className="border border-gold/10 bg-background p-5 transition-all hover:border-gold/30"
                      >
                        <p className={`font-[family-name:var(--font-display)] text-xl font-bold ${getOutcomeColor(caseItem.outcome)} sm:text-2xl`}>
                          {caseItem.outcome}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-foreground">
                          {caseItem.type}
                        </p>
                        <p className="mt-2 text-xs text-muted sm:text-sm">
                          {caseItem.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center text-xs text-muted"
            >
              *Prior results do not guarantee a similar outcome. Each case is
              unique and depends on its own facts and circumstances.
            </motion.p>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="bg-background py-16 lg:py-24">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Your Case Could Be Next
              </h2>
              <p className="mb-8 text-muted sm:text-lg">
                These results didn't happen by accident. They happened because I
                fight harder, dig deeper, and never give up on my clients. If
                you're facing charges, let's talk about your defense.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg">Free Case Evaluation</Button>
                <a
                  href="tel:5051234567"
                  className="flex items-center gap-2 text-lg font-semibold text-gold transition-colors hover:text-gold/80"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (505) 123-SAUL
                </a>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
