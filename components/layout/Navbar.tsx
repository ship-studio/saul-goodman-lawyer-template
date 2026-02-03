"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Button } from "../ui/Button";

const navLinks = [
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Case Results", href: "/case-results" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md border-gold/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded border border-gold/30 bg-gold/10">
              <span className="font-[family-name:var(--font-display)] text-xl font-bold text-gold">
                SG
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground tracking-wide">
                Saul Goodman
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted">
                Attorney at Law
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm">Free Consultation</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-foreground"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-6 bg-foreground"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-foreground"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="overflow-hidden lg:hidden"
        >
          <div className="flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-muted transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-2 w-full">Free Consultation</Button>
          </div>
        </motion.div>
      </Container>
    </motion.nav>
  );
}
