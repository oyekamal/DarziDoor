# DarziDoor Website — Design Spec
**Date:** 2026-03-24
**Status:** Approved

---

## 1. Overview

A minimalistic, SEO-optimized, mobile-first website for DarziDoor — a custom shalwar kameez tailoring service with home pickup and delivery in Islamabad & Rawalpindi. The primary conversion goal is driving WhatsApp contacts. There is no backend, no database, no authentication.

**Tagline:** "Your Perfect Fit, Delivered to Your Door."
**WhatsApp:** +923360506129
**WhatsApp deep link:** `https://wa.me/923360506129?text=Hi%2C%20I%27d%20like%20to%20book%20a%20measurement`

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR/SSG for SEO, built-in image optimization, Vercel-native |
| Styling | Tailwind CSS | Utility-first, no runtime cost, mobile-first by default |
| Fonts | next/font/google (Playfair Display + Inter) | Zero layout shift, no external request |
| Deployment | Vercel free tier | Zero config with Next.js, auto-deploy from GitHub |
| Forms | None — WhatsApp deep links only | No backend needed, higher conversion |
| Analytics | Google Analytics 4 via next/script | Free, no backend |

**Privacy Policy:** GA4 loads a third-party script and sets cookies. A minimal `/privacy` page is included in scope. Cookie consent banner is out of scope for Phase 1.

---

## 3. Project Structure

```
darzi-door/
├── app/
│   ├── layout.tsx              ← root layout, fonts, global metadata, JSON-LD schema
│   ├── page.tsx                ← single-page homepage (all sections composed here)
│   ├── privacy/
│   │   └── page.tsx            ← minimal privacy policy page
│   └── blog/
│       ├── page.tsx            ← blog index page
│       └── [slug]/
│           └── page.tsx        ← individual blog post (static)
├── components/
│   ├── Navbar.tsx              ← sticky top nav, logo + WhatsApp CTA
│   ├── Hero.tsx                ← full-viewport hero section
│   ├── TrustBar.tsx            ← 3 trust stats
│   ├── HowItWorks.tsx          ← 3-step process
│   ├── Services.tsx            ← 4 service cards
│   ├── Pricing.tsx             ← pricing table
│   ├── Testimonials.tsx        ← 3 review cards
│   ├── FAQ.tsx                 ← accordion
│   ├── Contact.tsx             ← WhatsApp CTA + phone
│   ├── Footer.tsx              ← logo + tagline + copyright
│   └── WhatsAppButton.tsx      ← sticky floating button (fixed bottom-right)
├── lib/
│   ├── schema.ts               ← LocalBusiness JSON-LD
│   └── posts.ts                ← blog post data (static, no CMS)
└── public/
    ├── darzi-door.png                      ← logo with green background (footer/favicon)
    └── darzi-door-removebg-preview.png     ← logo white text (navbar on green bg)
```

---

## 4. Design System

### Colors
```css
--green:    #1B4D35   /* nav, buttons, footer, section backgrounds */
--gold:     #C9A84C   /* CTAs, accents, icons, borders */
--bg:       #FAFAF8   /* page background */
--surface:  #E8F5EE   /* card backgrounds, alternating sections */
--text:     #1A1A1A   /* body text */
--muted:    #6B7280   /* captions, subtitles */
```

### Typography
| Element | Font | Size | Weight |
|---|---|---|---|
| H1 | Playfair Display | 36–44px | Bold |
| H2 | Playfair Display | 28px | Semibold |
| Body | Inter | 16px | Regular |
| Buttons/Labels | Inter | 14–15px | Medium |
| Captions | Inter | 13px | Regular |

### Minimalism Rules
- Generous whitespace — sections breathe, no cramped layouts
- No gradients, no heavy shadows — flat cards with subtle borders only
- Gold used sparingly — CTAs and key accents only, not decoration
- One primary action per section — no competing buttons
- Mobile-first — all components designed at 390px viewport first

---

## 5. Page Architecture

### Single-Page Homepage (`/`)
Scroll order:
1. **Navbar** — sticky, logo left, WhatsApp button right
2. **Hero** — full viewport, headline + 2 CTAs, green bg with CSS fabric texture
3. **TrustBar** — 500+ clients | Islamabad & Rawalpindi | 5–7 Day Delivery
4. **HowItWorks** — 3 steps: Contact → Home Visit → Delivered
5. **Services** — 4 cards: Men / Women / Wedding / Alterations
6. **Pricing** — table with starting prices + urgency note
7. **Testimonials** — 3 review cards (placeholder text, real ones swapped later)
8. **FAQ** — accordion, 8 questions
9. **Contact** — WhatsApp button + tap-to-call phone + hours
10. **Footer** — logo + tagline + copyright

### Blog (`/blog`, `/blog/[slug]`)
- Blog index lists all 10 pre-written post stubs
- Each post is a static page with full meta title + description
- Content stored in `lib/posts.ts` as structured data (no CMS needed initially)
- Each post ends with a WhatsApp CTA

### Privacy Policy (`/privacy`)
- Minimal single-column page
- Discloses GA4 analytics usage
- Linked from Footer

---

## 6. Component Specifications

### Navbar
- Background: `#1B4D35`
- Logo: `darzi-door-removebg-preview.png` — white text version on green bg
- CTA: "Book on WhatsApp" — gold background, white text, rounded
- Sticky top: `position: sticky; top: 0; z-index: 60`
- No hamburger menu — single page, no sub-navigation needed

### Hero
- Height: `min-height: 100svh` (use `svh` not `vh` — avoids iOS Safari browser chrome overflow bug)
- Background: `#1B4D35` with subtle CSS geometric/fabric pattern overlay
- H1: "Custom Shalwar Kameez — Stitched at Home, Delivered to Your Door"
- Subheadline: "Serving Islamabad & Rawalpindi | Men & Women | Free Home Measurement"
- Primary CTA: "Book on WhatsApp" (gold button) → WhatsApp deep link
- Secondary CTA: "See How It Works" (outline button, white border/text) → smooth scroll to HowItWorks section

### TrustBar
- 3 items in a row (stacked on mobile): `500+ Happy Clients` | `Islamabad & Rawalpindi` | `5–7 Day Delivery`
- Background: `#E8F5EE`
- Gold icons, green text

### HowItWorks
- 3 numbered steps with gold number circles
- Step 1: Contact Us via WhatsApp
- Step 2: We Visit Your Home for Measurements (10–15 minutes)
- Step 3: Stitched & Delivered to Your Door in 5–7 Days
- Background: white (`#FAFAF8`)

### Services
- 4 cards in a 2×2 grid (mobile: 1 column)
- Card background: `#E8F5EE`, gold top border accent
- Each card: icon + name + description + "from Rs. X" + "Book This" WhatsApp link

| Service | Icon | Description | Starting Price |
|---|---|---|---|
| Men's Shalwar Kameez | scissors | Formal and casual cuts for men — perfectly tailored to your measurements | from Rs. 1,200 |
| Women's Shalwar Kameez | needle | Lawn, khaddar, silk & party wear for women — stitched exactly as you like | from Rs. 1,500 |
| Wedding Wear | star | Sherwani, bridal wear, mehndi outfits & matching family suits — book early | from Rs. 3,500 |
| Alterations | ruler | Quick fixes, size adjustments & repairs — in & out in 2–3 days | from Rs. 300 |

### Pricing
- Clean two-column table: Service | Starting Price
- Background: `#1B4D35` (dark green for visual contrast)
- Table text: white; gold for price values

| Service | Starting Price |
|---|---|
| Gents Shalwar Kameez | Rs. 1,200 |
| Ladies Shalwar Kameez | Rs. 1,500 |
| Kurta (simple) | Rs. 800 |
| Silk / Party Suit | Rs. 2,000 |
| Embroidered Suit | Rs. 2,500+ |
| Sherwani | Rs. 3,500+ |
| Alteration (simple) | Rs. 300 |
| Gharara / Sharara | Rs. 2,000+ |

- Note below table: *"Prices vary based on fabric type, design complexity, and embellishments. Message us for a free quote."*
- Urgency note: *"Eid & wedding season slots fill up fast — book at least 2 weeks in advance."*

### Testimonials
- 3 cards
- **Mobile layout:** horizontal scroll container with `scroll-snap-type: x mandatory` on the container and `scroll-snap-align: start` on each card. Add `10%` right padding on the last card to visually hint at the next item. Hide scrollbar: `overflow-x: scroll; scrollbar-width: none` (and `-webkit-scrollbar: none` for Safari).
- **Desktop layout:** 3-column grid
- Each card: 5 gold stars + customer name + area + review text

| Name | Area | Review |
|---|---|---|
| Sara A. | F-10, Islamabad | "The fit was perfect on first try. The tailor was professional and the delivery was on time. Highly recommend!" |
| Ahmed K. | Bahria Town, Islamabad | "Ordered a formal shalwar kameez for Eid. Beautiful stitching and the home visit was so convenient." |
| Fatima R. | G-11, Islamabad | "Finally a darzi that comes to you! No more trips to the market. My whole family orders from DarziDoor now." |

### FAQ
- Accordion component — one question open at a time
- Gold chevron icon, rotates on open
- 8 questions:

| Question | Answer |
|---|---|
| Do you serve my area? | We serve all sectors of Islamabad (F, G, I, E, H) and Rawalpindi (Saddar, Bahria Town, DHA, Gulraiz, Chaklala, Murree Road). Not sure? Just message us! |
| How long does stitching take? | Standard delivery is 5–7 working days. Rush orders (2–3 days) available for an extra charge. |
| Do I need to provide my own fabric? | You can bring your own fabric or ask us — we can arrange fabric for you at market rates. |
| How do you take measurements at home? | Our tailor visits with a measuring tape and measurement form. The process takes 10–15 minutes and is fully comfortable. Female tailor available for ladies on request. |
| What if the fit isn't perfect? | We offer one free alteration if the stitching doesn't fit correctly. Your satisfaction is our priority. |
| How do I pay? | Cash on delivery when we deliver your outfit. No advance payment required for your first order. |
| Can I order for multiple family members in one visit? | Yes! One visit, multiple measurements — saves everyone time. |
| Do you stitch wedding/event wear? | Yes, including sherwani, bridal wear, mehndi outfits, and matching family suits. Book early for wedding orders. |

### Contact
- Centered layout
- Large gold "Chat on WhatsApp" button (min 48px height) → WhatsApp deep link
- Phone: `0336-0506129` displayed as `<a href="tel:+923360506129">` link
- Hours: "Available 9am – 8pm, 7 days a week"
- Background: `#FAFAF8`

### WhatsAppButton (Floating)
- Fixed `bottom-6 right-6`, `z-index: 40` (below navbar at z-60)
- Gold circle, WhatsApp SVG icon in green
- Pre-filled WhatsApp deep link
- **Visibility:** Hidden when Hero section is in the viewport. Implementation: use `IntersectionObserver` on the Hero element — show the button only when Hero is no longer intersecting the viewport.

### Footer
- Single row (stacked on mobile)
- Logo: `darzi-door.png`
- Tagline: "Your Perfect Fit, Delivered to Your Door."
- Links: Privacy Policy
- Copyright: © {`new Date().getFullYear()`} DarziDoor. All rights reserved.
- Background: `#1B4D35`, text white/gold

---

## 7. SEO Implementation

### Metadata (layout.tsx)
```typescript
export const metadata: Metadata = {
  title: "Custom Shalwar Kameez Stitching Islamabad & Rawalpindi | DarziDoor",
  description: "Get your shalwar kameez custom stitched at home. We visit, measure, stitch & deliver. Serving Islamabad & Rawalpindi. WhatsApp: 03360506129",
  openGraph: {
    title: "DarziDoor — Custom Tailoring at Your Doorstep",
    description: "Home measurement, custom stitching, doorstep delivery. Islamabad & Rawalpindi.",
    url: "https://darzidoor.com",
    siteName: "DarziDoor",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://darzidoor.com/darzi-door.png",
        width: 800,
        height: 600,
        alt: "DarziDoor — Custom Shalwar Kameez Tailoring",
      }
    ],
  }
}
```

### LocalBusiness JSON-LD Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DarziDoor",
  "description": "Custom shalwar kameez stitching with home pickup and delivery in Islamabad and Rawalpindi",
  "telephone": "+923360506129",
  "url": "https://darzidoor.com",
  "image": "https://darzidoor.com/darzi-door.png",
  "areaServed": ["Islamabad", "Rawalpindi"],
  "openingHours": "Mo-Su 09:00-20:00",
  "priceRange": "₨",
  "serviceType": "Tailor",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Islamabad",
    "addressRegion": "Islamabad Capital Territory",
    "addressCountry": "PK"
  }
}
```

### Per-Component SEO
- `<h1>` used only once (Hero headline)
- All section headings use `<h2>`
- All images have descriptive `alt` text with location keywords
- Blog posts each get unique `title` + `description` metadata
- `sitemap.xml` + `robots.txt` auto-generated by Next.js

---

## 8. Blog Data Structure

### Post TypeScript Interface (`lib/posts.ts`)
```typescript
export interface Post {
  slug: string;           // URL slug, e.g. "best-tailor-home-pickup-islamabad"
  title: string;          // Page title and H1
  excerpt: string;        // 1–2 sentence summary shown on blog index cards
  date: string;           // ISO date string, e.g. "2026-03-24"
  keyword: string;        // Primary SEO target keyword
  content: string;        // Full post body in plain HTML string (no MDX dependency)
}
```

### Blog Post Stubs

| Slug | Title | Keyword | Date |
|---|---|---|---|
| `best-tailor-home-pickup-islamabad` | Best Tailor with Home Pickup in Islamabad 2026 | darzi home service Islamabad | 2026-03-24 |
| `shalwar-kameez-stitching-at-home` | How to Get Shalwar Kameez Stitched Without Leaving Home | stitching service at home Islamabad | 2026-03-31 |
| `shalwar-kameez-price-islamabad` | Shalwar Kameez Stitching Price Guide in Islamabad | shalwar kameez price Islamabad | 2026-04-07 |
| `best-fabric-ladies-summer` | Best Fabric for Ladies Shalwar Kameez in Summer | lawn suit fabric guide | 2026-04-14 |
| `measurement-guide-at-home` | How to Take Measurements for Shalwar Kameez at Home | shalwar kameez measurement guide | 2026-04-21 |
| `eid-stitching-rawalpindi` | Eid Dressing Made Easy — Custom Stitching in Rawalpindi | Eid shalwar kameez Rawalpindi | 2026-04-28 |
| `custom-vs-readymade` | Why Custom Stitching is Better Than Readymade | custom vs readymade shalwar kameez | 2026-05-05 |
| `best-tailor-bahria-town` | Best Tailor in Bahria Town Islamabad | tailor Bahria Town Islamabad | 2026-05-12 |
| `wedding-dress-stitching-islamabad` | Wedding Dress Stitching in Islamabad — Complete Guide | wedding dress stitching Islamabad | 2026-05-19 |
| `office-shalwar-kameez-style` | How to Style Your Shalwar Kameez for Office in 2026 | office shalwar kameez style | 2026-05-26 |

Each stub has placeholder content and ends with a WhatsApp CTA: *"Ready to order? Chat with us on WhatsApp — [Book Now](https://wa.me/923360506129)"*

---

## 9. Mobile-First Rules

- All touch targets minimum 48px height
- Font size minimum 16px body text
- No horizontal scrolling — single column on mobile (except Testimonials which uses intentional scroll snap)
- `next/image` with `lazy` loading for all images
- Phone number as `tel:` link
- WhatsApp as deep link with pre-filled message
- Hero height: `min-height: 100svh` (not `100vh` — avoids iOS Safari browser chrome overflow)
- Target: <3 second load on 4G, PageSpeed score 85+

---

## 10. Constraints & Out of Scope

- No backend, no database, no authentication
- No contact form (WhatsApp only)
- No gallery page (deferred until real photos available)
- No dark mode (Phase 1)
- No payment system
- No booking calendar (Phase 1 — WhatsApp only)
- No cookie consent banner (Phase 1 — noted in privacy policy)
- Roman Urdu SEO keywords (Phase 2 — blog posts Phase 1 target English keywords only)
- Logo placeholder used until real logo provided (`/public/darzi-door.png` and `/public/darzi-door-removebg-preview.png` now available)
