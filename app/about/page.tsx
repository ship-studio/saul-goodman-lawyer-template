"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const credentials = [
  "J.D., University of American Samoa",
  "New Mexico State Bar, 2004",
  "Federal Court Certified",
  "Former Prosecutor",
  "Super Lawyers 2019-2024",
  "Top 100 Trial Lawyers",
];

const timeline = [
  {
    year: "1998",
    title: "The Mailroom Days",
    description:
      "Started in the mailroom at HHM law firm. While other lawyers were networking at country clubs, I was studying case law between deliveries.",
  },
  {
    year: "2002",
    title: "Law Degree Earned",
    description:
      "Graduated from the University of American Samoa—not Ivy League, but I learned the same law. And I learned to outwork everyone.",
  },
  {
    year: "2004",
    title: "Passed the Bar",
    description:
      "Admitted to the New Mexico State Bar on my first attempt. Started as a public defender, handling the cases nobody else wanted.",
  },
  {
    year: "2010",
    title: "Private Practice",
    description:
      "Opened my own practice. Strip mall office, inflatable Statue of Liberty. Clients laughed—until I started winning.",
  },
  {
    year: "2015",
    title: "Federal Certification",
    description:
      "Certified to practice in federal courts. Now I fight the feds on their own turf.",
  },
  {
    year: "2024",
    title: "3,000+ Cases Won",
    description:
      "Two decades of fighting. 95% acquittal rate. The results speak for themselves.",
  },
];

const values = [
  {
    title: "I Answer My Phone",
    description:
      "When you're arrested at 3 AM, you don't get voicemail. You get me. Every client has my direct number.",
    icon: (
      <svg
        className="h-6 w-6"
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
    ),
  },
  {
    title: "I Know the System",
    description:
      "I started as a prosecutor. I know how they build cases, what they look for, and where their evidence falls apart.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
  },
  {
    title: "I Fight Dirty (Legally)",
    description:
      "The prosecution has unlimited resources. I level the playing field with relentless preparation and creative strategy.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "I Never Give Up",
    description:
      "Other lawyers take plea deals. I take cases to trial. When you hire me, you hire someone who will fight to the bitter end.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-background pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.03]" />
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold sm:text-sm">
                  <span className="h-px w-8 bg-gold" />
                  About Me
                </span>
                <h1 className="mb-6 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  I Didn&apos;t Take the{" "}
                  <span className="text-gold">Easy Road</span>
                </h1>
                <p className="text-base text-muted sm:text-lg lg:text-xl">
                  While other lawyers were born into privilege and pedigree, I
                  clawed my way up from nothing. That hunger—that refusal to
                  accept defeat—is what I bring to every single case.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="aspect-[4/5] overflow-hidden border border-gold/20 bg-secondary">
                  <Image
                    src="/saul-headshot-2.webp"
                    alt="Saul Goodman, Attorney at Law"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute -right-4 -bottom-4 h-full w-full border border-gold/20 -z-10" />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-gold/20 bg-secondary py-8 lg:py-12">
          <Container>
            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
              {[
                { value: "95%", label: "Acquittal Rate" },
                { value: "3,000+", label: "Cases Won" },
                { value: "24/7", label: "Availability" },
                { value: "20+", label: "Years Experience" },
              ].map((stat, index) => (
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

        {/* Story Section */}
        <section className="bg-background py-16 lg:py-24">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl"
            >
              <span className="mb-4 inline-block border-l-2 border-gold pl-4 text-sm font-medium uppercase tracking-wider text-gold">
                My Story
              </span>
              <h2 className="mb-8 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                From the Mailroom to the Courtroom
              </h2>

              <div className="space-y-6 text-muted sm:text-lg">
                <p>
                  I started in the mailroom at one of Albuquerque&apos;s most
                  prestigious law firms. While partners drove BMWs and dined at
                  country clubs, I was pushing a cart through the halls,
                  studying case files between deliveries.
                </p>
                <p>
                  They laughed when I said I wanted to be a lawyer. They stopped
                  laughing when I passed the bar.
                </p>
                <p>
                  I didn&apos;t go to Harvard or Yale. I got my law degree from
                  the University of American Samoa—online, working nights and
                  weekends. Some people think that makes me less qualified. I
                  think it makes me hungrier.
                </p>
                <p>
                  When I started as a public defender, I took the cases nobody
                  else wanted. The ones that were &ldquo;unwinnable.&rdquo; The
                  defendants that other lawyers had written off. And I started
                  winning.
                </p>
                <p>
                  I learned something in those early years that the fancy
                  lawyers never understood: justice isn&apos;t about who has the
                  best pedigree. It&apos;s about who&apos;s willing to fight the
                  hardest.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 border-l-2 border-gold pl-6"
              >
                <p className="font-[family-name:var(--font-display)] text-xl italic text-foreground sm:text-2xl">
                  &ldquo;I&apos;m not a criminal lawyer. I&apos;m a{" "}
                  <span className="text-gold">criminal</span> lawyer.&rdquo;
                </p>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Timeline Section */}
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
                Career Timeline
              </span>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                20 Years of Fighting for Justice
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gold/20 lg:left-1/2" />

              <div className="space-y-8 lg:space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col gap-4 pl-12 lg:pl-0 ${
                      index % 2 === 0
                        ? "lg:flex-row"
                        : "lg:flex-row-reverse"
                    } lg:gap-8`}
                  >
                    {/* Year marker */}
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center border border-gold bg-background lg:left-1/2 lg:-translate-x-1/2">
                      <span className="text-[10px] font-bold text-gold">
                        {item.year.slice(-2)}
                      </span>
                    </div>

                    {/* Content */}
                    <div
                      className={`lg:w-1/2 ${
                        index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                      }`}
                    >
                      <p className="mb-1 font-[family-name:var(--font-display)] text-lg font-bold text-gold sm:text-xl">
                        {item.year}
                      </p>
                      <h3 className="mb-2 font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted">{item.description}</p>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="bg-background py-16 lg:py-24">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <span className="mb-4 inline-block border-l-2 border-gold pl-4 text-sm font-medium uppercase tracking-wider text-gold">
                My Approach
              </span>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Why Clients Choose Me
              </h2>
              <p className="mx-auto max-w-2xl text-muted sm:text-lg">
                There are plenty of criminal defense lawyers in Albuquerque.
                Here&apos;s what makes me different.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="border border-gold/10 bg-secondary p-6 transition-all hover:border-gold/30 sm:p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center border border-gold/30 text-gold">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-semibold text-foreground sm:text-xl">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted sm:text-base">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Credentials Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="mb-4 inline-block border-l-2 border-gold pl-4 text-sm font-medium uppercase tracking-wider text-gold">
                  Credentials
                </span>
                <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                  Qualifications That Matter
                </h2>
                <p className="mb-6 text-muted sm:text-lg">
                  My law degree might not be from an Ivy League school, but my
                  credentials speak for themselves. These aren&apos;t purchased
                  awards—they&apos;re earned through results.
                </p>
                <div className="flex flex-wrap gap-2">
                  {credentials.map((credential) => (
                    <span
                      key={credential}
                      className="inline-block border border-gold/20 bg-background px-3 py-2 text-sm text-foreground"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border border-gold/20 bg-background p-6 sm:p-8"
              >
                <h3 className="mb-4 font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                  Bar Admissions & Certifications
                </h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-gold" />
                    <span>State Bar of New Mexico (2004)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-gold" />
                    <span>U.S. District Court, District of New Mexico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-gold" />
                    <span>U.S. Court of Appeals, Tenth Circuit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-gold" />
                    <span>Certified Criminal Law Specialist</span>
                  </li>
                </ul>

                <div className="mt-6 border-t border-gold/10 pt-6">
                  <h3 className="mb-4 font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                    Professional Associations
                  </h3>
                  <ul className="space-y-3 text-muted">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-gold" />
                      <span>National Association of Criminal Defense Lawyers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-gold" />
                      <span>New Mexico Criminal Defense Lawyers Association</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-gold" />
                      <span>American Bar Association, Criminal Justice Section</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="bg-gold py-16 lg:py-24">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-bold text-background sm:text-3xl lg:text-4xl">
                Ready to Fight Back?
              </h2>
              <p className="mb-8 text-background/80 sm:text-lg">
                When the system is stacked against you, you need someone who
                knows how to win. Let&apos;s talk about your case.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button variant="secondary" size="lg">
                  Free Case Evaluation
                </Button>
                <a
                  href="tel:5051234567"
                  className="flex items-center gap-2 text-lg font-semibold text-background transition-colors hover:text-background/80"
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
