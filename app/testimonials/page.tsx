"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const featuredTestimonial = {
  quote:
    "I was facing 10 years. My family was devastated. Saul took my case when three other lawyers said it was hopeless. Six months later, I walked out a free man. He didn't just save my life—he saved my family.",
  author: "Jesse P.",
  location: "Albuquerque, NM",
  case: "Federal Drug Charges",
  result: "Full Acquittal",
  year: "2023",
};

const testimonialsByCategory = [
  {
    category: "Criminal Defense",
    testimonials: [
      {
        quote:
          "I was accused of assault after defending myself outside a bar. The prosecution had witnesses, video footage, everything. Saul found holes in their story I didn't even know existed. Not guilty.",
        author: "Marcus T.",
        case: "Assault & Battery",
        result: "Not Guilty",
      },
      {
        quote:
          "A felony charge would have ended my career. Saul negotiated it down to a misdemeanor, then got that expunged. My record is clean. My future is intact.",
        author: "David R.",
        case: "Felony Theft",
        result: "Reduced & Expunged",
      },
      {
        quote:
          "Three prior offenses. The DA wanted me locked up for years. Saul got probation and community service. I'm still home with my kids because of him.",
        author: "Angela M.",
        case: "Robbery",
        result: "Probation Only",
      },
    ],
  },
  {
    category: "DUI & Traffic",
    testimonials: [
      {
        quote:
          "Third DUI. Everyone said I was going to prison. Saul challenged the breathalyzer calibration and the traffic stop itself. Case dismissed. I still have my license.",
        author: "Kevin B.",
        case: "Third Offense DUI",
        result: "Case Dismissed",
      },
      {
        quote:
          "Hit and run charges—I panicked after a fender bender. Saul showed the court I was in shock, not fleeing. Reduced to a traffic violation with no jail time.",
        author: "Rachel S.",
        case: "Hit and Run",
        result: "Traffic Violation",
      },
      {
        quote:
          "Saul answered his phone at 2 AM when I got arrested. By morning, he had a plan. By the end, all charges were dropped.",
        author: "Mike E.",
        case: "DUI Arrest",
        result: "Charges Dropped",
      },
    ],
  },
  {
    category: "Drug Charges",
    testimonials: [
      {
        quote:
          "They found two pounds in my trunk. My life was over. Saul proved the search was illegal—fruit of the poisonous tree. Evidence thrown out. I walked free.",
        author: "Carlos G.",
        case: "Drug Trafficking",
        result: "Evidence Suppressed",
      },
      {
        quote:
          "Prescription pills that weren't mine. A felony that would have followed me forever. Saul got me into diversion. Clean record after completion.",
        author: "Jennifer K.",
        case: "Possession",
        result: "Diversion Program",
      },
      {
        quote:
          "Manufacturing charges. DEA involvement. Federal prosecutors. I was terrified. Saul negotiated a plea that kept me out of federal prison entirely.",
        author: "Tommy L.",
        case: "Manufacturing",
        result: "State Plea Deal",
      },
    ],
  },
  {
    category: "White Collar",
    testimonials: [
      {
        quote:
          "I thought my career was over. Saul got the charges reduced and expunged. I still have my license because of him.",
        author: "Skyler W.",
        case: "Embezzlement",
        result: "Reduced & Expunged",
      },
      {
        quote:
          "Wire fraud allegations from a business deal gone wrong. Looking at 20 years. Saul dismantled their case piece by piece. Acquitted on all counts.",
        author: "Robert M.",
        case: "Wire Fraud",
        result: "Full Acquittal",
      },
      {
        quote:
          "The IRS came after me for tax evasion. Saul negotiated with federal prosecutors and got civil penalties instead of criminal charges. No prison time.",
        author: "Patricia D.",
        case: "Tax Evasion",
        result: "Civil Resolution",
      },
    ],
  },
  {
    category: "Federal Cases",
    testimonials: [
      {
        quote:
          "RICO charges. The feds had been building a case for years. Saul found their confidential informant was unreliable. The whole case fell apart.",
        author: "Vincent N.",
        case: "RICO Conspiracy",
        result: "Case Collapsed",
      },
      {
        quote:
          "Bank fraud. FBI at my door. I thought I'd never see my family again. Saul fought for three years and won. I'm home.",
        author: "Daniel F.",
        case: "Bank Fraud",
        result: "Not Guilty",
      },
      {
        quote:
          "Other lawyers wanted to plead out. Saul said we could win. He was right. Not guilty on all counts.",
        author: "Walter W.",
        case: "Federal Conspiracy",
        result: "Full Acquittal",
      },
    ],
  },
  {
    category: "Appeals & Expungements",
    testimonials: [
      {
        quote:
          "Wrongly convicted five years ago. New lawyer after new lawyer said there was nothing to do. Saul found prosecutorial misconduct. My conviction was overturned.",
        author: "Anthony J.",
        case: "Conviction Appeal",
        result: "Conviction Overturned",
      },
      {
        quote:
          "A mistake from my twenties was following me everywhere—jobs, apartments, relationships. Saul got it expunged. I finally have a clean slate.",
        author: "Maria C.",
        case: "Expungement",
        result: "Record Cleared",
      },
      {
        quote:
          "Ten-year sentence reduced to time served after Saul's appeal. I got to see my daughter graduate. That's priceless.",
        author: "James H.",
        case: "Sentence Modification",
        result: "Early Release",
      },
    ],
  },
];

const stats = [
  { value: "500+", label: "5-Star Reviews" },
  { value: "4.9", label: "Average Rating" },
  { value: "98%", label: "Would Recommend" },
  { value: "3,000+", label: "Clients Served" },
];

export default function TestimonialsPage() {
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
              className="mx-auto max-w-3xl text-center"
            >
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold sm:text-sm">
                <span className="h-px w-8 bg-gold" />
                Client Testimonials
                <span className="h-px w-8 bg-gold" />
              </span>
              <h1 className="mb-6 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Real Stories From{" "}
                <span className="text-gold">Real Clients</span>
              </h1>
              <p className="text-base text-muted sm:text-lg lg:text-xl">
                When your life is on the line, you need a lawyer who fights like
                yours depends on it. These are the stories of people who trusted
                me with their futures.
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

        {/* Featured Testimonial */}
        <section className="bg-background py-16 lg:py-24">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden border-2 border-gold bg-secondary p-6 sm:p-10 lg:p-12"
            >
              {/* Large quote mark */}
              <svg
                className="absolute right-4 top-4 h-24 w-24 text-gold/10 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <div className="relative">
                <span className="mb-4 inline-block border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  Featured Story
                </span>

                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-gold sm:h-6 sm:w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>

                <blockquote className="mb-8 font-[family-name:var(--font-display)] text-lg font-medium leading-relaxed text-foreground sm:text-2xl lg:text-3xl">
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </blockquote>

                <div className="flex flex-col gap-4 border-t border-gold/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                      {featuredTestimonial.author}
                    </p>
                    <p className="text-sm text-muted">
                      {featuredTestimonial.location} • {featuredTestimonial.year}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-gold/20 bg-background px-3 py-1.5 text-xs font-medium text-muted">
                      {featuredTestimonial.case}
                    </span>
                    <span className="border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold">
                      {featuredTestimonial.result}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Testimonials by Category */}
        {testimonialsByCategory.map((category, categoryIndex) => (
          <section
            key={category.category}
            className={`py-16 lg:py-20 ${
              categoryIndex % 2 === 0 ? "bg-secondary" : "bg-background"
            }`}
          >
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <span className="mb-3 inline-block border-l-2 border-gold pl-4 text-sm font-medium uppercase tracking-wider text-gold">
                  {category.category}
                </span>
                <p className="max-w-2xl text-muted">
                  Client stories from {category.category.toLowerCase()} cases.
                </p>
              </motion.div>

              <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
                {category.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.author}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className={`relative border border-gold/10 p-5 transition-all hover:border-gold/30 sm:p-6 ${
                      categoryIndex % 2 === 0 ? "bg-background" : "bg-secondary"
                    }`}
                  >
                    {/* Stars */}
                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 text-gold"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>

                    <p className="mb-5 text-sm leading-relaxed text-foreground sm:text-base">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    <div className="mt-auto flex flex-col gap-3 border-t border-gold/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-muted">{testimonial.case}</p>
                      </div>
                      <span className="inline-block w-fit border border-gold/30 bg-gold/10 px-2 py-1 text-xs font-semibold text-gold">
                        {testimonial.result}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>
        ))}

        {/* Trust Indicators */}
        <section className="border-y border-gold/20 bg-secondary py-12 lg:py-16">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="mb-6 font-[family-name:var(--font-display)] text-xl font-bold text-foreground sm:text-2xl">
                Verified Reviews Across Multiple Platforms
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                {[
                  { platform: "Google", rating: "4.9", count: "200+" },
                  { platform: "Avvo", rating: "10.0", count: "150+" },
                  { platform: "Yelp", rating: "4.8", count: "100+" },
                  { platform: "Facebook", rating: "4.9", count: "50+" },
                ].map((platform) => (
                  <div
                    key={platform.platform}
                    className="flex items-center gap-3 border border-gold/20 bg-background px-4 py-3"
                  >
                    <div className="text-left">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted">
                        {platform.platform}
                      </p>
                      <div className="flex items-center gap-1">
                        <svg
                          className="h-4 w-4 text-gold"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-[family-name:var(--font-display)] font-semibold text-foreground">
                          {platform.rating}
                        </span>
                        <span className="text-xs text-muted">
                          ({platform.count})
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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
                Your Story Could Be Next
              </h2>
              <p className="mb-8 text-background/80 sm:text-lg">
                Every case starts with a conversation. Tell me what you&apos;re
                facing, and let&apos;s discuss how to fight back.
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
