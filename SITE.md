# Saul Goodman, Attorney at Law

> Criminal defense attorney with a dark, elegant website. "Better Call Saul."

## Brand Identity

### Personality
- **Confident & Charismatic** — Bold presence with undeniable swagger
- **Dark & Elegant** — Sophisticated, dramatic aesthetic
- **Results-Driven** — 95% acquittal rate speaks for itself
- **Available 24/7** — Always answers the phone

### Colors
| Role | Color | Usage |
|------|-------|-------|
| Background | `#0a0a0a` | Deep black page backgrounds |
| Secondary | `#141414` | Dark charcoal section backgrounds |
| Foreground | `#f5f2eb` | Warm cream text |
| Muted | `#7a756d` | Body text, captions |
| Accent/Gold | `#c9a962` | Buttons, links, highlights |

### Typography
- **Display Font**: Playfair Display — Elegant serif for headlines, gives a prestigious lawyer feel
- **Body Font**: Libre Franklin — Clean, modern sans-serif for readability

---

## Pages

### Homepage (`/`)
The main landing page with all sections:

1. **Navbar** — Fixed navigation with "SG" logo, gold accents on scroll
2. **Hero** — "Better Call Saul" headline with 95% acquittal rate stats
3. **Social Proof Bar** — Credentials: Bar license, Super Lawyers, Avvo rating
4. **Practice Areas** — 6 criminal defense specialties in elegant grid
5. **Why Choose Me** — The Saul Goodman difference: 24/7 availability, results
6. **Case Results** — Featured NOT GUILTY verdict plus recent victories
7. **About** — Saul's story, credentials, and signature quote
8. **Testimonials** — Client stories with 5-star ratings
9. **Contact CTA** — Gold section with consultation form
10. **Footer** — Dark footer with practice areas and contact info

### Case Results (`/case-results`)
Comprehensive showcase of case victories organized by practice area:

1. **Hero** — "Results That Speak for Themselves" headline
2. **Stats Bar** — Key metrics: 95% acquittal rate, 3,000+ cases won, $50M+ in fines avoided, 20+ years experience
3. **Featured Victory** — Large gold card highlighting the federal drug trafficking acquittal with full details
4. **Results by Category** — 6 sections matching practice areas:
   - Criminal Defense (murder, assault, robbery, felony reductions)
   - DUI & Traffic (third offense dismissals, DUI with injury, reductions)
   - Drug Charges (trafficking dismissals, possession diversions)
   - White Collar (wire fraud, embezzlement, tax evasion)
   - Federal Cases (conspiracy, RICO, bank fraud)
   - Appeals (conviction reversals, expungements, sentence modifications)
5. **CTA Section** — "Your Case Could Be Next" with consultation prompt

### About (`/about`)
Comprehensive about page featuring Saul's full story:

1. **Hero** — "I Didn't Take the Easy Road" headline with photo
2. **Stats Bar** — Key metrics: 95% acquittal rate, 3,000+ cases, 24/7 availability, 20+ years
3. **Story Section** — Full narrative of Saul's journey from mailroom to courtroom
4. **Career Timeline** — 6 milestones from 1998 to 2024 with alternating layout
5. **Values Section** — 4 differentiators: answers phone, knows the system, fights hard, never gives up
6. **Credentials Section** — Bar admissions, certifications, and professional associations
7. **CTA Section** — Gold background with consultation prompt

### Testimonials (`/testimonials`)
Full testimonials page showcasing client stories by case type:

1. **Hero** — "Real Stories From Real Clients" headline
2. **Stats Bar** — Review metrics: 500+ reviews, 4.9 rating, 98% recommend, 3,000+ clients
3. **Featured Testimonial** — Large gold-bordered card with Jesse P.'s federal drug case acquittal
4. **Testimonials by Category** — 6 sections with 3 testimonials each:
   - Criminal Defense (assault, felony theft, robbery)
   - DUI & Traffic (third offense DUI, hit and run)
   - Drug Charges (trafficking, possession, manufacturing)
   - White Collar (embezzlement, wire fraud, tax evasion)
   - Federal Cases (RICO, bank fraud, conspiracy)
   - Appeals & Expungements (conviction appeals, expungements, sentence modifications)
5. **Trust Indicators** — Ratings from Google (4.9), Avvo (10.0), Yelp (4.8), Facebook (4.9)
6. **CTA Section** — "Your Story Could Be Next" with consultation prompt

### Practice Areas (`/practice-areas`)
Detailed breakdown of all criminal defense services:

1. **Hero** — "Criminal Defense That Gets Results" headline
2. **Practice Areas Grid** — 6 detailed service cards:
   - Criminal Defense (assault, theft, weapons, domestic violence, etc.)
   - DUI & Traffic (DUI/DWI, license suspension, hit and run, etc.)
   - Drug Charges (possession, trafficking, manufacturing, etc.)
   - White Collar Crime (fraud, embezzlement, money laundering, etc.)
   - Federal Cases (federal drug charges, bank fraud, conspiracy, etc.)
   - Appeals (direct appeals, habeas corpus, expungement, etc.)
3. **CTA Section** — Free case evaluation prompt

---

## Components

### Layout Components
Located in `components/layout/`:

- **Container.tsx** — Max-width wrapper for consistent spacing
- **Navbar.tsx** — Fixed navigation with "SG" logo box, transitions on scroll
- **Footer.tsx** — 4-column footer with gold accent headings

### UI Components
Located in `components/ui/`:

- **Button.tsx** — Gold primary buttons, outline variants with gold borders

### Section Components
Located in `components/sections/`:

- **Hero.tsx** — "Better Call Saul" with floating badges showing success rate
- **SocialProofBar.tsx** — Credentials and bar associations
- **PracticeAreas.tsx** — Criminal defense services grid
- **WhyChooseUs.tsx** — Differentiators and stats
- **CaseResults.tsx** — Featured acquittal + case outcomes
- **TeamProfiles.tsx** — Single attorney profile (Saul's story)
- **Testimonials.tsx** — Client testimonials with gold stars
- **ContactCTA.tsx** — Gold background contact section with form

---

## Firm Details

- **Name**: Saul Goodman, Attorney at Law
- **Tagline**: Better Call Saul
- **Phone**: (505) 123-SAUL
- **Email**: saul@bettercallsaul.com
- **Address**: 9800 Montgomery Blvd NE, Albuquerque, NM 87111
- **Hours**: Available 24/7

### Key Statistics
- 95% acquittal rate
- 3,000+ cases won
- 24/7 availability
- 20+ years experience

### Practice Areas
1. Criminal Defense
2. DUI & Traffic
3. Drug Charges
4. White Collar Crime
5. Federal Cases
6. Appeals

---

## How to Customize

### To change the colors:
Edit `app/globals.css` and update the CSS variables in `:root`:
- `--background` — Main page background (currently deep black)
- `--secondary` — Section backgrounds (currently charcoal)
- `--foreground` — Main text color (currently warm cream)
- `--muted` — Secondary text (currently warm gray)
- `--accent` and `--gold` — Highlight color (currently champagne gold)

### To change the fonts:
Edit `app/layout.tsx` and update the Google Font imports. Currently using:
- Playfair Display for headlines
- Libre Franklin for body text

### To add your photo:
Replace the placeholder in `TeamProfiles.tsx` and `Hero.tsx` with actual images. Put images in the `public/` folder and use `<Image>` from Next.js.

### To update contact info:
Edit these files:
- `components/layout/Navbar.tsx` — Brand name in logo
- `components/layout/Footer.tsx` — Contact details at bottom
- `components/sections/Hero.tsx` — Phone number in CTA button
- `components/sections/ContactCTA.tsx` — Address and phone

### To add a new page:
1. Create a new folder in `app/` (e.g., `app/about/`)
2. Add a `page.tsx` file with your content
3. Add a link to the navbar and footer

---

## Technical Details

### Dependencies
- Next.js 16
- React 19
- Tailwind CSS v4
- Framer Motion (animations)

### Design Features
- Dark mode only (elegant black/gold palette)
- Sharp, angular design elements (no rounded corners)
- Gold accent color throughout
- Subtle grain texture on hero
- Border-based design system (borders instead of shadows)
- Elegant serif typography for headlines

### Animations
- Fade-up on scroll with Framer Motion
- Subtle hover lifts on cards
- Scale feedback on buttons
- Navbar background transition on scroll
- Staggered reveals in grids

---

## Recent Changes

- Created Testimonials page (`/testimonials`) with 18 client stories organized by case type, featured testimonial, review stats, and platform ratings
- Created About page (`/about`) with Saul's full story, career timeline, values, credentials, and CTA
- Created Case Results page (`/case-results`) with 24 case outcomes organized by practice area, stats bar, and featured federal acquittal
- Updated navbar "Case Results" link to point to `/case-results`
- Created Practice Areas page (`/practice-areas`) with detailed service descriptions
- Updated navbar with proper page links (Practice Areas, Case Results, About, Testimonials, Blog, Contact)
- Fixed mobile menu: now shows solid background when open at top of page (was transparent before)
- Complete rebrand from "Smith & Associates" to "Saul Goodman"
- New dark/elegant color palette (black #0a0a0a with gold #c9a962)
- Changed fonts to Playfair Display (serif) + Libre Franklin (sans)
- Updated all copy for criminal defense focus
- Redesigned components with sharp, angular styling
- Removed rounded corners for more dramatic feel
- Updated practice areas to criminal defense specialties
- Changed stats to acquittal rates and cases won
- Updated contact info for Albuquerque, NM location
