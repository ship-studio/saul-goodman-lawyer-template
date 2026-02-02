import { Container } from "./Container";

const practiceAreas = [
  "Criminal Defense",
  "DUI & Traffic",
  "Drug Charges",
  "White Collar Crime",
  "Federal Cases",
  "Appeals",
];

const quickLinks = [
  { label: "About Saul", href: "#team" },
  { label: "Case Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const contactInfo = {
  address: "9800 Montgomery Blvd NE\nAlbuquerque, NM 87111",
  phone: "(505) 123-SAUL",
  email: "saul@bettercallsaul.com",
  hours: "Available 24/7",
};

export function Footer() {
  return (
    <footer className="bg-secondary text-foreground">
      <Container>
        <div className="py-10 sm:py-12 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex items-center gap-3 sm:mb-6">
                <div className="flex h-10 w-10 items-center justify-center border border-gold/30 bg-gold/10">
                  <span className="font-[family-name:var(--font-display)] text-lg font-bold text-gold">
                    SG
                  </span>
                </div>
                <div>
                  <span className="font-[family-name:var(--font-display)] text-base font-semibold sm:text-lg">
                    Saul Goodman
                  </span>
                  <span className="block text-[9px] uppercase tracking-[0.15em] text-muted sm:text-[10px] sm:tracking-[0.2em]">
                    Attorney at Law
                  </span>
                </div>
              </div>
              <p className="mb-4 text-xs text-muted sm:mb-6 sm:text-sm">
                Criminal defense attorney serving Albuquerque and all of New Mexico.
                When the law fails you, I won&apos;t.
              </p>
              <div className="flex gap-3">
                {/* Social Icons */}
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center border border-gold/20 transition-colors hover:border-gold hover:bg-gold/10"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4 text-muted" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center border border-gold/20 transition-colors hover:border-gold hover:bg-gold/10"
                  aria-label="Facebook"
                >
                  <svg className="h-4 w-4 text-muted" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.126-5.864 10.126-11.854z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center border border-gold/20 transition-colors hover:border-gold hover:bg-gold/10"
                  aria-label="Twitter"
                >
                  <svg className="h-4 w-4 text-muted" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="mb-3 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-wider text-gold sm:mb-4 sm:text-sm">
                Practice Areas
              </h3>
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:gap-2.5">
                {practiceAreas.map((area) => (
                  <li key={area}>
                    <a
                      href="#practice-areas"
                      className="text-xs text-muted transition-colors hover:text-gold sm:text-sm"
                    >
                      {area}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-3 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-wider text-gold sm:mb-4 sm:text-sm">
                Quick Links
              </h3>
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:gap-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-muted transition-colors hover:text-gold sm:text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-3 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-wider text-gold sm:mb-4 sm:text-sm">
                Contact
              </h3>
              <div className="space-y-2 text-xs text-muted sm:space-y-3 sm:text-sm">
                <p className="whitespace-pre-line">{contactInfo.address}</p>
                <p>
                  <a
                    href="tel:5051234567"
                    className="font-medium text-gold transition-colors hover:text-gold/80"
                  >
                    {contactInfo.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="transition-colors hover:text-gold"
                  >
                    {contactInfo.email}
                  </a>
                </p>
                <p className="font-medium text-foreground">{contactInfo.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 py-4 sm:py-6">
          <div className="flex flex-col gap-3 text-center text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>&copy; {new Date().getFullYear()} Saul Goodman, Attorney at Law</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a href="#" className="transition-colors hover:text-gold">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-gold">
                Terms
              </a>
              <a href="#" className="transition-colors hover:text-gold">
                Disclaimer
              </a>
            </div>
          </div>
          <p className="mt-3 text-center text-[10px] text-muted/70 sm:mt-4 sm:text-left sm:text-xs">
            Attorney Advertising. Prior results do not guarantee a similar outcome.
            Licensed in New Mexico.
          </p>
        </div>
      </Container>
    </footer>
  );
}
