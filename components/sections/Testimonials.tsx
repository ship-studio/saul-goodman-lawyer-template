"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";

const featuredTestimonial = {
  quote:
    "I was facing 10 years. My family was devastated. Saul took my case when three other lawyers said it was hopeless. Six months later, I walked out a free man. He didn't just save my life—he saved my family.",
  author: "Jesse P.",
  case: "Federal Drug Charges",
  result: "Full Acquittal",
};

const testimonials = [
  {
    quote:
      "Saul answered his phone at 2 AM when I got arrested. By morning, he had a plan. By the end, all charges were dropped.",
    author: "Mike E.",
    case: "DUI Arrest",
  },
  {
    quote:
      "Other lawyers wanted to plead out. Saul said we could win. He was right. Not guilty on all counts.",
    author: "Walter W.",
    case: "Assault Charges",
  },
  {
    quote:
      "I thought my career was over. Saul got the charges reduced and expunged. I still have my license because of him.",
    author: "Skyler W.",
    case: "White Collar",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-16 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center lg:mb-16"
        >
          <span className="mb-4 inline-block border-l-2 border-gold pl-4 text-sm font-medium uppercase tracking-wider text-gold">
            Client Stories
          </span>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            What My Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted lg:text-lg">
            Real stories from real people whose lives were on the line.
          </p>
        </motion.div>

        {/* Featured Testimonial - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-4 overflow-hidden border-l-2 border-gold bg-secondary p-5 sm:mb-6 sm:p-8"
        >
          {/* Quote mark */}
          <svg
            className="absolute right-4 top-4 h-16 w-16 text-gold/10 sm:h-24 sm:w-24"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>

          <div className="relative">
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-gold sm:h-5 sm:w-5"
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

            <blockquote className="mb-6 font-[family-name:var(--font-display)] text-base font-medium leading-relaxed text-foreground sm:text-xl lg:text-2xl">
              &ldquo;{featuredTestimonial.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col gap-3 border-t border-gold/10 pt-4 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
              <div>
                <p className="font-[family-name:var(--font-display)] font-semibold text-foreground">
                  {featuredTestimonial.author}
                </p>
                <p className="text-sm text-muted">{featuredTestimonial.case}</p>
              </div>
              <div className="border border-gold/30 bg-gold/10 px-3 py-1.5 sm:px-4 sm:py-2">
                <p className="font-[family-name:var(--font-display)] text-xs font-semibold text-gold sm:text-sm">
                  {featuredTestimonial.result}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Testimonials - Grid */}
        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gold/10 bg-secondary p-4 sm:p-5"
            >
              <div className="mb-3 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-3 w-3 text-gold sm:h-4 sm:w-4"
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
              <p className="mb-3 text-sm text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted">{testimonial.case}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-2 sm:mt-12 sm:flex-row sm:justify-center sm:gap-4"
        >
          <p className="text-sm text-muted">Trusted by 3,000+ clients</p>
          <div className="flex items-center gap-2 border border-gold/20 bg-secondary px-3 py-1.5">
            <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-[family-name:var(--font-display)] font-semibold text-foreground">4.9</span>
            <span className="text-xs text-muted">/ 5.0 (500+ reviews)</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
