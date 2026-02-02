"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";

const credentials = [
  { name: "NM Bar", detail: "Since 2004" },
  { name: "Super Lawyers", detail: "2019-2024" },
  { name: "Top 100", detail: "Trial Lawyers" },
  { name: "NACDL", detail: "Member" },
  { name: "Avvo 10.0", detail: "Rating" },
];

export function SocialProofBar() {
  return (
    <section className="border-y border-gold/10 bg-secondary py-6 sm:py-8">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.15em] text-muted sm:mb-6 sm:tracking-[0.2em]">
            Credentials & Recognition
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10">
            {credentials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-2 sm:flex-col sm:gap-1 sm:text-center"
              >
                <div className="hidden h-8 w-8 items-center justify-center border border-gold/20 bg-gold/5 sm:flex">
                  <svg
                    className="h-4 w-4 text-gold"
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
                </div>
                <div className="sm:mt-1">
                  <p className="font-[family-name:var(--font-display)] text-xs font-semibold text-foreground sm:text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
