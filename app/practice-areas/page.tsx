"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const practiceAreas = [
  {
    title: "Criminal Defense",
    description:
      "Facing criminal charges can upend your entire life. I defend clients against all criminal accusations—from misdemeanors to serious felonies. Every case gets my full attention because your freedom is on the line.",
    services: [
      "Assault & Battery",
      "Theft & Burglary",
      "Weapons Charges",
      "Domestic Violence",
      "Probation Violations",
      "Juvenile Offenses",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "DUI & Traffic",
    description:
      "A DUI conviction follows you for years—affecting your job, your license, and your reputation. I've gotten hundreds of DUI cases reduced or dismissed entirely. Don't plead guilty before calling me.",
    services: [
      "DUI / DWI Defense",
      "Breathalyzer Challenges",
      "License Suspension Hearings",
      "Reckless Driving",
      "Hit and Run",
      "Traffic Violations",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Drug Charges",
    description:
      "Drug charges range from simple possession to trafficking—and prosecutors push for maximum sentences. I challenge illegal searches, question lab results, and fight for alternatives to prison.",
    services: [
      "Possession",
      "Possession with Intent",
      "Drug Trafficking",
      "Manufacturing",
      "Prescription Fraud",
      "Drug Court Representation",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "White Collar Crime",
    description:
      "Federal prosecutors have unlimited resources—you need someone who knows how they think. I've defended executives, business owners, and professionals against complex financial allegations.",
    services: [
      "Fraud & Embezzlement",
      "Money Laundering",
      "Tax Evasion",
      "Securities Fraud",
      "Identity Theft",
      "RICO Charges",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Federal Cases",
    description:
      "Federal court is a different game with higher stakes and harsher sentences. I've tried cases in federal courts across the country and know how to navigate the federal system.",
    services: [
      "Federal Drug Charges",
      "Bank Fraud",
      "Wire Fraud",
      "Conspiracy",
      "Immigration Crimes",
      "Federal Appeals",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Appeals",
    description:
      "Lost at trial? The fight isn't over. I review trial records for errors, constitutional violations, and ineffective counsel claims. Sometimes the best defense happens after conviction.",
    services: [
      "Direct Appeals",
      "Post-Conviction Relief",
      "Habeas Corpus",
      "Sentence Modifications",
      "Record Expungement",
      "Parole Hearings",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function PracticeAreasPage() {
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
                Practice Areas
              </span>
              <h1 className="mb-6 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Criminal Defense That{" "}
                <span className="text-gold">Gets Results</span>
              </h1>
              <p className="text-base text-muted sm:text-lg lg:text-xl">
                When you're facing criminal charges, you need more than a lawyer—you
                need a fighter. I've spent 20 years in courtrooms across New Mexico,
                and I know every trick prosecutors use. Here's how I can help.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Practice Areas Grid */}
        <section className="bg-secondary py-16 lg:py-24">
          <Container>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {practiceAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group border border-gold/10 bg-background p-6 transition-all hover:border-gold/30 sm:p-8"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center border border-gold/20 bg-gold/5 text-gold">
                      {area.icon}
                    </div>
                    <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-foreground sm:text-2xl">
                      {area.title}
                    </h2>
                  </div>
                  <p className="mb-6 text-sm text-muted sm:text-base">
                    {area.description}
                  </p>
                  <div className="mb-6 grid grid-cols-2 gap-2">
                    {area.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-2 text-xs text-muted sm:text-sm"
                      >
                        <span className="h-1 w-1 bg-gold" />
                        {service}
                      </div>
                    ))}
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold/80"
                  >
                    Discuss Your Case
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>
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
                Not Sure What You're Facing?
              </h2>
              <p className="mb-8 text-muted sm:text-lg">
                Criminal law is complicated. If you've been charged, arrested, or
                think you're under investigation, call me. I'll explain exactly what
                you're up against—no charge, no obligation.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg">
                  Free Case Evaluation
                </Button>
                <a
                  href="tel:5051234567"
                  className="flex items-center gap-2 text-lg font-semibold text-gold transition-colors hover:text-gold/80"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
