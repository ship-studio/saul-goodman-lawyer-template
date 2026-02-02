"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you. I'll review your case and call you within 24 hours.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-gold py-16 text-background lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-wider text-background/70 sm:text-sm">
              Get in Touch
            </span>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Your First Call is Free
            </h2>
            <p className="mb-6 text-sm text-background/80 sm:text-base lg:mb-8 lg:text-lg">
              Don&apos;t wait until it&apos;s too late. The sooner you call, the more
              options we have. I&apos;ll personally review your case—no obligation.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-background/30 bg-background/10">
                  <svg
                    className="h-5 w-5 text-background"
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
                </div>
                <div>
                  <p className="text-sm font-semibold">Call 24/7</p>
                  <a
                    href="tel:5051234567"
                    className="text-lg font-bold text-background transition-colors hover:text-background/80 sm:text-xl"
                  >
                    (505) 123-SAUL
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-background/30 bg-background/10">
                  <svg
                    className="h-5 w-5 text-background"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">Office</p>
                  <p className="text-sm text-background/80">
                    9800 Montgomery Blvd NE<br />
                    Albuquerque, NM 87111
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 sm:col-span-2 lg:col-span-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-background/30 bg-background/10">
                  <svg
                    className="h-5 w-5 text-background"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">Always Available</p>
                  <p className="text-sm text-background/80">
                    24/7 — I answer my own phone
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-6 flex items-center gap-3 border border-background/20 bg-background/10 p-3 sm:p-4">
              <div className="flex h-8 w-8 items-center justify-center border border-background/30 sm:h-10 sm:w-10">
                <svg className="h-4 w-4 text-background sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium sm:text-sm">100% Confidential</p>
                <p className="text-xs text-background/70">
                  Protected by attorney-client privilege
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="border border-gold/20 bg-background p-5 text-foreground sm:p-6 lg:p-8"
            >
              <h3 className="mb-4 font-[family-name:var(--font-display)] text-lg font-semibold sm:mb-6 sm:text-xl">
                Request Your Free Case Review
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-xs font-medium sm:mb-1.5 sm:text-sm"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gold/20 bg-secondary px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-gold focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                    placeholder="John Smith"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-xs font-medium sm:mb-1.5 sm:text-sm"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gold/20 bg-secondary px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-gold focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1 block text-xs font-medium sm:mb-1.5 sm:text-sm"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full border border-gold/20 bg-secondary px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-gold focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                      placeholder="(505) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="caseType"
                    className="mb-1 block text-xs font-medium sm:mb-1.5 sm:text-sm"
                  >
                    Type of Case *
                  </label>
                  <div className="relative">
                    <select
                      id="caseType"
                      name="caseType"
                      value={formData.caseType}
                      onChange={handleChange}
                      required
                      className="w-full appearance-none border border-gold/20 bg-secondary px-3 py-2.5 pr-10 text-sm text-foreground focus:border-gold focus:outline-none sm:px-4 sm:py-3 sm:pr-12 sm:text-base [&>option]:bg-secondary [&>option]:text-foreground"
                    >
                      <option value="">Select your situation...</option>
                      <option value="criminal-defense">Criminal Defense</option>
                      <option value="dui">DUI / Traffic</option>
                      <option value="drug-charges">Drug Charges</option>
                      <option value="white-collar">White Collar Crime</option>
                      <option value="federal">Federal Case</option>
                      <option value="appeal">Appeal</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4">
                      <svg
                        className="h-4 w-4 text-muted"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-xs font-medium sm:mb-1.5 sm:text-sm"
                  >
                    What Happened?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full resize-none border border-gold/20 bg-secondary px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-gold focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                    placeholder="Tell me briefly about your situation..."
                  />
                </div>

                <Button className="w-full" size="lg">
                  Get My Free Case Review
                </Button>

                <p className="text-center text-xs text-muted">
                  By submitting, you agree to our{" "}
                  <a href="#" className="underline hover:text-foreground">
                    Privacy Policy
                  </a>
                  . All consultations are confidential.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
