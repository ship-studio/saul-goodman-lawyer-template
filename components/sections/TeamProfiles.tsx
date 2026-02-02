"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "../layout/Container";

const credentials = [
  "J.D., University of American Samoa",
  "New Mexico State Bar, 2004",
  "Federal Court Certified",
  "Former Prosecutor",
  "Super Lawyers 2019-2024",
  "Top 100 Trial Lawyers",
];

export function TeamProfiles() {
  return (
    <section id="team" className="bg-secondary py-16 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[3/4] overflow-hidden border border-gold/20 bg-background">
                <Image
                  src="/saul-headshot-2.webp"
                  alt="Saul Goodman, Attorney at Law"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 h-full w-full border border-gold/20 -z-10" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="mb-4 inline-block border-l-2 border-gold pl-4 text-sm font-medium uppercase tracking-wider text-gold">
              About Me
            </span>
            <h2 className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Saul Goodman
            </h2>
            <p className="mb-4 text-base text-gold sm:mb-6 sm:text-lg">Attorney at Law</p>

            <div className="space-y-3 text-sm text-muted sm:space-y-4 sm:text-base">
              <p>
                I didn&apos;t take the easy road to get here. While other lawyers
                were born into privilege, I worked my way up from nothing. That
                hunger? That&apos;s what I bring to every case.
              </p>
              <p>
                Twenty years ago, I started as a public defender, handling the
                cases nobody else wanted. I learned that justice isn&apos;t just
                about the law—it&apos;s about knowing the system and fighting harder
                than the other side expects.
              </p>
              <p>
                Today, I&apos;ve defended over 3,000 clients facing everything from
                misdemeanors to federal charges. My 95% acquittal rate isn&apos;t luck.
                It&apos;s preparation, strategy, and an absolute refusal to give up.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-6 border-t border-gold/10 pt-6 sm:mt-8 sm:pt-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted sm:mb-4">
                Credentials
              </p>
              <div className="flex flex-wrap gap-2">
                {credentials.map((credential) => (
                  <span
                    key={credential}
                    className="inline-block border border-gold/20 bg-background px-2 py-1 text-xs text-foreground sm:px-3 sm:py-1.5"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 border-l-2 border-gold pl-4 sm:mt-8 sm:pl-6"
            >
              <p className="font-[family-name:var(--font-display)] text-base italic text-foreground sm:text-xl">
                &ldquo;I&apos;m not a criminal lawyer. I&apos;m a criminal lawyer.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
