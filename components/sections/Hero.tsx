"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

const stats = [
  { value: "95%", label: "Acquittal Rate" },
  { value: "3,000+", label: "Cases Won" },
  { value: "24/7", label: "Availability" },
  { value: "20+", label: "Years Experience" },
];

export function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-background pt-10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
      <div className="absolute right-0 top-1/4 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-gold/3 blur-3xl" />

      {/* Elegant line accent */}
      <div className="absolute left-1/2 top-24 hidden h-32 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:block" />

      <Container className="relative z-10">
        <div className="flex flex-col justify-center py-10 lg:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="mb-6 inline-flex items-center gap-2 border-l-2 border-gold pl-4 text-sm font-medium uppercase tracking-wider text-gold">
                  Criminal Defense Attorney
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 font-[family-name:var(--font-display)] text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                Better Call{" "}
                <span className="text-gold">Saul</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto mb-8 max-w-lg text-base text-muted sm:text-lg lg:mx-0 lg:text-xl"
              >
                When the system is stacked against you, you need someone who knows
                how to work it. I&apos;ve spent 20 years getting results others said
                were impossible.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
              >
                <Button size="lg" href="#contact">
                  Free Case Review
                </Button>
                <Button variant="outline" size="lg" href="tel:5051234567">
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (505) 123-SAUL
                </Button>
              </motion.div>
            </div>

            {/* Visual Element - Hidden on mobile/tablet, shown on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 hidden lg:order-2 lg:block"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="aspect-[4/5] overflow-hidden border border-gold/20 bg-secondary shadow-2xl">
                  <Image
                    src="/saul-headshot-2.webp"
                    alt="Saul Goodman, Attorney at Law"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Floating Badge - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute -left-6 bottom-16 border border-gold/20 bg-background p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center border border-gold/30 bg-gold/10">
                      <svg
                        className="h-6 w-6 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-display)] font-semibold text-foreground">
                        95% Success
                      </p>
                      <p className="text-sm text-muted">Acquittal Rate</p>
                    </div>
                  </div>
                </motion.div>

                {/* Second Badge - Top Right */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute -right-6 top-12 border border-gold bg-gold/10 backdrop-blur-sm px-5 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-gold"></span>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-display)] text-sm font-bold text-gold">
                        Available 24/7
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 gap-4 border-t border-gold/10 pt-8 sm:gap-6 md:grid-cols-4 lg:mt-20 lg:pt-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-gold sm:text-3xl lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
