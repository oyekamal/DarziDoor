# DarziDoor Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a minimalistic, SEO-optimized, mobile-first Next.js 14 website for DarziDoor — a custom tailoring service in Islamabad & Rawalpindi — with a single-page homepage, blog, and privacy page, deployed on Vercel with no backend.

**Architecture:** Single-page homepage composed of 10 focused React components, each responsible for one section. Blog posts are static data in `lib/posts.ts`. No CMS, no backend, no forms — all conversion flows through WhatsApp deep links.

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS, TypeScript, Google Fonts (Playfair Display + Inter), Vercel deployment.

---

## File Map

| File | Responsibility |
|---|---|
| `app/layout.tsx` | Root layout: fonts, global metadata, JSON-LD schema, GA4 |
| `app/page.tsx` | Homepage: compose all section components in scroll order |
| `app/privacy/page.tsx` | Minimal privacy policy page |
| `app/blog/page.tsx` | Blog index: list all posts from lib/posts.ts |
| `app/blog/[slug]/page.tsx` | Individual blog post: static params from lib/posts.ts |
| `components/Navbar.tsx` | Sticky nav: logo + WhatsApp CTA button |
| `components/Hero.tsx` | Full-viewport hero: H1, subheadline, two CTAs |
| `components/TrustBar.tsx` | 3 trust stat items in a row |
| `components/HowItWorks.tsx` | 3-step numbered process |
| `components/Services.tsx` | 4 service cards in 2×2 grid |
| `components/Pricing.tsx` | Pricing table on dark green background |
| `components/Testimonials.tsx` | 3 review cards with scroll-snap on mobile |
| `components/FAQ.tsx` | Accordion with 8 Q&A pairs |
| `components/Contact.tsx` | WhatsApp CTA + tap-to-call phone + hours |
| `components/WhatsAppButton.tsx` | Fixed floating WhatsApp button with IntersectionObserver |
| `components/Footer.tsx` | Logo, tagline, privacy link, dynamic copyright |
| `lib/schema.ts` | LocalBusiness JSON-LD object |
| `lib/posts.ts` | Post interface + 10 blog post stubs |
| `tailwind.config.ts` | Design tokens: colors, fonts |
| `app/globals.css` | Base Tailwind imports + CSS variables |

---

## Constants (referenced throughout)

```
WHATSAPP_LINK = "https://wa.me/923360506129?text=Hi%2C%20I%27d%20like%20to%20book%20a%20measurement"
GREEN = "#1B4D35"
GOLD  = "#C9A84C"
BG    = "#FAFAF8"
SURFACE = "#E8F5EE"
```

---

## Task 1: Scaffold Next.js project

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `app/globals.css`

- [ ] **Step 1: Scaffold project**

```bash
cd /home/oye/Documents/free_work/darzi-door
npx create-next-app@14 . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
```

When prompted, accept all defaults.

- [ ] **Step 2: Remove boilerplate**

Delete the default content — keep the file structure but clear it:
- Clear `app/page.tsx` to just return `<main></main>`
- Clear `app/globals.css` to just the three Tailwind directives
- Delete `public/next.svg`, `public/vercel.svg`

- [ ] **Step 3: Copy logo assets into public/**

```bash
cp /home/oye/Documents/free_work/darzi-door/darzi-door.png public/darzi-door.png
cp "/home/oye/Documents/free_work/darzi-door/darzi-door-removebg-preview.png" "public/darzi-door-removebg-preview.png"
```

- [ ] **Step 4: Verify dev server starts**

```bash
npm run dev
```

Expected: Server starts at http://localhost:3000 with a blank page and no errors.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js 14 project with Tailwind CSS"
```

---

## Task 2: Design tokens — Tailwind config + global CSS

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Extend Tailwind with brand colors and fonts**

Replace the contents of `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#1B4D35",
        },
        gold: {
          DEFAULT: "#C9A84C",
        },
        surface: "#E8F5EE",
        bg: "#FAFAF8",
        "text-primary": "#1A1A1A",
        "text-muted": "#6B7280",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      minHeight: {
        svh: "100svh",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 2: Update globals.css**

Replace `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-bg text-text-primary font-inter;
  }

  h1, h2, h3 {
    @apply font-playfair;
  }
}
```

- [ ] **Step 3: Verify build compiles cleanly**

```bash
npm run build
```

Expected: Build succeeds with no TypeScript or Tailwind errors.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "chore: add brand design tokens to Tailwind config"
```

---

## Task 3: lib/schema.ts — LocalBusiness JSON-LD

**Files:**
- Create: `lib/schema.ts`

- [ ] **Step 1: Create the schema file**

Create `lib/schema.ts`:

```typescript
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DarziDoor",
  description:
    "Custom shalwar kameez stitching with home pickup and delivery in Islamabad and Rawalpindi",
  telephone: "+923360506129",
  url: "https://darzidoor.com",
  image: "https://darzidoor.com/darzi-door.png",
  areaServed: ["Islamabad", "Rawalpindi"],
  openingHours: "Mo-Su 09:00-20:00",
  priceRange: "₨",
  serviceType: "Tailor",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressRegion: "Islamabad Capital Territory",
    addressCountry: "PK",
  },
};
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add lib/schema.ts
git commit -m "feat: add LocalBusiness JSON-LD schema"
```

---

## Task 4: lib/posts.ts — Blog data

**Files:**
- Create: `lib/posts.ts`

- [ ] **Step 1: Create the posts data file**

Create `lib/posts.ts`:

```typescript
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  keyword: string;
  content: string;
}

const WA_CTA = `<p style="margin-top:2rem"><strong>Ready to order?</strong> <a href="https://wa.me/923360506129?text=Hi%2C%20I%27d%20like%20to%20book%20a%20measurement" style="color:#C9A84C">Chat with us on WhatsApp — Book Now</a></p>`;

export const posts: Post[] = [
  {
    slug: "best-tailor-home-pickup-islamabad",
    title: "Best Tailor with Home Pickup in Islamabad 2026",
    excerpt:
      "Finding a reliable tailor in Islamabad just got easier. DarziDoor brings expert stitching to your doorstep — no travel, no waiting.",
    date: "2026-03-24",
    keyword: "darzi home service Islamabad",
    content: `<p>Getting your clothes stitched in Islamabad used to mean long trips to Raja Bazaar or Aabpara. Not anymore. DarziDoor is Islamabad's first tailor service with home pickup and delivery — we come to you, take measurements at your convenience, stitch your outfit, and deliver it to your door.</p>
<p>Whether you're in F-6, F-10, G-11, or Bahria Town, our tailor visits you at a time that suits you. No queues, no travel, no hassle.</p>
<p>We specialise in custom shalwar kameez for men and women, wedding wear, and alterations. Every order is stitched to your exact measurements — because your fit should be perfect, not approximate.</p>
${WA_CTA}`,
  },
  {
    slug: "shalwar-kameez-stitching-at-home",
    title: "How to Get Shalwar Kameez Stitched Without Leaving Home",
    excerpt:
      "Step-by-step guide to ordering custom shalwar kameez from the comfort of your home in Islamabad.",
    date: "2026-03-31",
    keyword: "stitching service at home Islamabad",
    content: `<p>Ordering custom stitching at home is simpler than you think. Here's exactly how it works with DarziDoor:</p>
<ol>
<li><strong>Message us on WhatsApp</strong> with your name, sector, and what you'd like stitched.</li>
<li><strong>We confirm your appointment</strong> within 1 hour and schedule a home visit.</li>
<li><strong>Our tailor visits</strong> — takes precise measurements in 10–15 minutes.</li>
<li><strong>Choose your style</strong> — neckline, sleeve length, cut. Bring your own fabric or ask us to arrange it.</li>
<li><strong>We stitch and deliver</strong> in 5–7 working days. Try it on — if anything needs adjusting, we fix it free.</li>
</ol>
<p>Serving all sectors of Islamabad and Rawalpindi including Bahria Town, DHA, Saddar, and more.</p>
${WA_CTA}`,
  },
  {
    slug: "shalwar-kameez-price-islamabad",
    title: "Shalwar Kameez Stitching Price Guide in Islamabad",
    excerpt:
      "Transparent pricing for custom shalwar kameez stitching in Islamabad — no hidden charges, free home measurement.",
    date: "2026-04-07",
    keyword: "shalwar kameez price Islamabad",
    content: `<p>One of the most common questions we get: how much does shalwar kameez stitching cost in Islamabad? Here's our complete price guide — no hidden charges, no surprises.</p>
<table><thead><tr><th>Service</th><th>Starting Price</th></tr></thead><tbody>
<tr><td>Gents Shalwar Kameez</td><td>Rs. 1,200</td></tr>
<tr><td>Ladies Shalwar Kameez</td><td>Rs. 1,500</td></tr>
<tr><td>Kurta (simple)</td><td>Rs. 800</td></tr>
<tr><td>Silk / Party Suit</td><td>Rs. 2,000</td></tr>
<tr><td>Embroidered Suit</td><td>Rs. 2,500+</td></tr>
<tr><td>Sherwani</td><td>Rs. 3,500+</td></tr>
<tr><td>Alteration (simple)</td><td>Rs. 300</td></tr>
<tr><td>Gharara / Sharara</td><td>Rs. 2,000+</td></tr>
</tbody></table>
<p>Final prices depend on fabric type, design complexity, and embellishments. Message us for a free, no-obligation quote.</p>
${WA_CTA}`,
  },
  {
    slug: "best-fabric-ladies-summer",
    title: "Best Fabric for Ladies Shalwar Kameez in Summer",
    excerpt:
      "Lawn, cotton, or chiffon? A practical guide to choosing the right fabric for your summer shalwar kameez.",
    date: "2026-04-14",
    keyword: "lawn suit fabric guide",
    content: `<p>Pakistani summers demand fabrics that breathe. Here's a quick guide to help you choose:</p>
<ul>
<li><strong>Lawn</strong> — the king of summer. Lightweight, soft, prints beautifully. Ideal for daily wear.</li>
<li><strong>Cotton</strong> — durable and breathable. Great for a clean, casual look.</li>
<li><strong>Khaddar</strong> — better for transitional weather. Slightly heavier but very comfortable.</li>
<li><strong>Chiffon</strong> — elegant for formal occasions. Requires a lining for modesty.</li>
</ul>
<p>At DarziDoor, we can stitch any fabric you bring or help you source quality lawn and cotton at market rates. Home measurement available across Islamabad and Rawalpindi.</p>
${WA_CTA}`,
  },
  {
    slug: "measurement-guide-at-home",
    title: "How to Take Measurements for Shalwar Kameez at Home",
    excerpt:
      "A simple guide to shalwar kameez measurements — or let our tailor visit and do it for you for free.",
    date: "2026-04-21",
    keyword: "shalwar kameez measurement guide",
    content: `<p>Getting the right measurements is everything in custom stitching. Here are the key measurements for a shalwar kameez:</p>
<ul>
<li><strong>Chest / Bust</strong> — measure around the fullest part</li>
<li><strong>Waist</strong> — natural waistline</li>
<li><strong>Hips</strong> — fullest part of hips</li>
<li><strong>Shirt length</strong> — shoulder to desired hem length</li>
<li><strong>Sleeve length</strong> — shoulder to wrist</li>
<li><strong>Trouser length</strong> — waist to ankle</li>
</ul>
<p>Of course, the easiest option is to let our tailor visit your home. We bring our own measuring tape and form — the whole process takes 10–15 minutes and is completely comfortable. Female tailor available for ladies on request.</p>
${WA_CTA}`,
  },
  {
    slug: "eid-stitching-rawalpindi",
    title: "Eid Dressing Made Easy — Custom Stitching in Rawalpindi",
    excerpt:
      "Don't leave your Eid outfit to the last minute. Book your custom shalwar kameez stitching in Rawalpindi at least 2 weeks early.",
    date: "2026-04-28",
    keyword: "Eid shalwar kameez Rawalpindi",
    content: `<p>Eid is the most important dressing occasion of the year — and Rawalpindi's tailors fill up fast. Here's how to ensure your outfit is ready in time:</p>
<ul>
<li>Book at least 2 weeks before Eid</li>
<li>Have your fabric ready or sourced before the measurement visit</li>
<li>Choose a simple design if you're booking late — embroidery adds time</li>
</ul>
<p>DarziDoor serves all of Rawalpindi including Saddar, Bahria Town, DHA, Gulraiz, Chaklala, and Murree Road areas. We visit your home, take measurements, and deliver your finished outfit before Eid.</p>
${WA_CTA}`,
  },
  {
    slug: "custom-vs-readymade",
    title: "Why Custom Stitching is Better Than Readymade",
    excerpt:
      "Readymade clothes rarely fit perfectly. Here's why custom stitching from DarziDoor is the smarter choice.",
    date: "2026-05-05",
    keyword: "custom vs readymade shalwar kameez",
    content: `<p>Readymade shalwar kameez are convenient — but how often do they actually fit well? Here's the honest comparison:</p>
<table><thead><tr><th></th><th>Custom</th><th>Readymade</th></tr></thead><tbody>
<tr><td>Fit</td><td>Perfect — your measurements</td><td>Standard sizing, often off</td></tr>
<tr><td>Fabric choice</td><td>You choose</td><td>Fixed</td></tr>
<tr><td>Design</td><td>Your style exactly</td><td>Generic</td></tr>
<tr><td>Price</td><td>From Rs. 1,200</td><td>Rs. 1,500–5,000+</td></tr>
<tr><td>Convenience</td><td>Home measurement + delivery</td><td>You go to the shop</td></tr>
</tbody></table>
<p>With DarziDoor's home pickup service, custom stitching in Islamabad is now more convenient than going to a shop.</p>
${WA_CTA}`,
  },
  {
    slug: "best-tailor-bahria-town",
    title: "Best Tailor in Bahria Town Islamabad",
    excerpt:
      "Looking for a reliable tailor in Bahria Town Islamabad? DarziDoor visits your home — no need to step outside.",
    date: "2026-05-12",
    keyword: "tailor Bahria Town Islamabad",
    content: `<p>Bahria Town Islamabad residents no longer need to travel to find a quality tailor. DarziDoor serves all phases of Bahria Town — we visit your home, take measurements, and deliver your custom shalwar kameez within 5–7 days.</p>
<p>Our tailors are experienced in both men's and women's formal and casual wear, wedding outfits, and alterations. Every order is quality-checked before delivery.</p>
<p>We also serve nearby areas including DHA Islamabad, Bani Gala, and PWD Colony.</p>
${WA_CTA}`,
  },
  {
    slug: "wedding-dress-stitching-islamabad",
    title: "Wedding Dress Stitching in Islamabad — Complete Guide",
    excerpt:
      "Planning your wedding outfit in Islamabad? A complete guide to booking custom wedding dress stitching with home measurement.",
    date: "2026-05-19",
    keyword: "wedding dress stitching Islamabad",
    content: `<p>Wedding outfits deserve special attention — and in Islamabad, DarziDoor makes the process stress-free.</p>
<p><strong>What we stitch for weddings:</strong></p>
<ul>
<li>Sherwani (groom & family)</li>
<li>Bridal wear</li>
<li>Mehndi & barat outfits</li>
<li>Matching family suits</li>
<li>Bridesmaid / shaadi guest outfits</li>
</ul>
<p><strong>Timeline:</strong> Book at least 3–4 weeks before your event for wedding wear. Embroidered or heavily embellished outfits need extra time.</p>
<p>We visit your home for measurements — especially helpful for bridal parties where multiple people need outfits stitched.</p>
${WA_CTA}`,
  },
  {
    slug: "office-shalwar-kameez-style",
    title: "How to Style Your Shalwar Kameez for Office in 2026",
    excerpt:
      "Shalwar kameez is Pakistan's professional uniform. Here's how to get the right cut and fit for the office.",
    date: "2026-05-26",
    keyword: "office shalwar kameez style",
    content: `<p>The shalwar kameez is Pakistan's most versatile outfit — worn equally in board meetings and family gatherings. For the office, the details matter:</p>
<ul>
<li><strong>Fabric:</strong> Khaddar or cotton for winter, lawn or light cotton for summer</li>
<li><strong>Cut:</strong> Straight-cut kameez, medium-length (knee to mid-calf) looks most professional</li>
<li><strong>Collar:</strong> Band collar or subtle mandarin collar reads formal</li>
<li><strong>Colour:</strong> Solid colours or subtle prints — avoid loud patterns for formal settings</li>
<li><strong>Fit:</strong> Not too baggy, not too fitted — custom stitching eliminates this guesswork</li>
</ul>
<p>DarziDoor stitches office-ready shalwar kameez for men and women across Islamabad and Rawalpindi, starting from Rs. 1,200.</p>
${WA_CTA}`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add lib/posts.ts
git commit -m "feat: add blog post data and Post interface"
```

---

## Task 5: Root layout — fonts, metadata, schema, GA4

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Write the root layout**

Replace `app/layout.tsx`:

```typescript
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Custom Shalwar Kameez Stitching Islamabad & Rawalpindi | DarziDoor",
  description:
    "Get your shalwar kameez custom stitched at home. We visit, measure, stitch & deliver. Serving Islamabad & Rawalpindi. WhatsApp: 03360506129",
  openGraph: {
    title: "DarziDoor — Custom Tailoring at Your Doorstep",
    description:
      "Home measurement, custom stitching, doorstep delivery. Islamabad & Rawalpindi.",
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
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>
        {children}
        {/* Google Analytics 4 — replace G-XXXXXXXXXX with your real Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify build succeeds**

```bash
npm run build
```

Expected: Build succeeds. You will see the JSON-LD in the page source.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add root layout with fonts, metadata, JSON-LD schema, and GA4"
```

---

## Task 6: Navbar component

**Files:**
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Create Navbar**

Create `components/Navbar.tsx`:

```typescript
import Image from "next/image";
import Link from "next/link";

const WA_LINK =
  "https://wa.me/923360506129?text=Hi%2C%20I%27d%20like%20to%20book%20a%20measurement";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-[60] bg-green px-6 py-4 flex items-center justify-between"
      aria-label="Main navigation"
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/darzi-door-removebg-preview.png"
          alt="DarziDoor — Custom Tailoring"
          width={140}
          height={50}
          priority
          className="h-10 w-auto"
        />
      </Link>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gold text-white text-sm font-medium px-5 py-3 rounded-full min-h-[48px] flex items-center hover:opacity-90 transition-opacity"
      >
        Book on WhatsApp
      </a>
    </nav>
  );
}
```

- [ ] **Step 2: Add to homepage temporarily and verify in browser**

In `app/page.tsx`:

```typescript
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
    </main>
  );
}
```

Run `npm run dev` and verify the navbar renders correctly at http://localhost:3000.

- [ ] **Step 3: Commit**

```bash
git add components/Navbar.tsx app/page.tsx
git commit -m "feat: add Navbar component"
```

---

## Task 7: Hero component

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Create Hero**

Create `components/Hero.tsx`:

```typescript
const WA_LINK =
  "https://wa.me/923360506129?text=Hi%2C%20I%27d%20like%20to%20book%20a%20measurement";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-green flex items-center justify-center min-h-[100svh] px-6 py-20 overflow-hidden"
    >
      {/* Subtle fabric texture pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #C9A84C 0px,
            #C9A84C 1px,
            transparent 1px,
            transparent 12px
          ), repeating-linear-gradient(
            -45deg,
            #C9A84C 0px,
            #C9A84C 1px,
            transparent 1px,
            transparent 12px
          )`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Custom Shalwar Kameez —<br className="hidden md:block" />
          Stitched at Home, Delivered to Your Door
        </h1>

        <p className="text-white/80 text-lg md:text-xl mb-10 font-inter">
          Serving Islamabad &amp; Rawalpindi &nbsp;|&nbsp; Men &amp; Women
          &nbsp;|&nbsp; Free Home Measurement
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white font-medium px-8 py-4 rounded-full text-base min-h-[52px] flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            Book on WhatsApp
          </a>

          <a
            href="#how-it-works"
            className="border-2 border-white text-white font-medium px-8 py-4 rounded-full text-base min-h-[52px] flex items-center justify-center hover:bg-white/10 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx and verify**

```typescript
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
```

Verify: full-viewport green section with headline and two buttons, smooth scroll on "See How It Works".

- [ ] **Step 3: Commit**

```bash
git add components/Hero.tsx app/page.tsx
git commit -m "feat: add Hero section"
```

---

## Task 8: TrustBar component

**Files:**
- Create: `components/TrustBar.tsx`

- [ ] **Step 1: Create TrustBar**

Create `components/TrustBar.tsx`:

```typescript
const stats = [
  { icon: "★", label: "500+ Happy Clients" },
  { icon: "📍", label: "Islamabad & Rawalpindi" },
  { icon: "🚚", label: "5–7 Day Delivery" },
];

export default function TrustBar() {
  return (
    <section className="bg-surface py-6 px-6" aria-label="Trust indicators">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3">
            <span className="text-gold text-xl" aria-hidden="true">
              {stat.icon}
            </span>
            <span className="text-green font-medium font-inter text-base">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx and verify**

Add `<TrustBar />` after `<Hero />` in `app/page.tsx`.

- [ ] **Step 3: Commit**

```bash
git add components/TrustBar.tsx app/page.tsx
git commit -m "feat: add TrustBar section"
```

---

## Task 9: HowItWorks component

**Files:**
- Create: `components/HowItWorks.tsx`

- [ ] **Step 1: Create HowItWorks**

Create `components/HowItWorks.tsx`:

```typescript
const steps = [
  {
    number: "1",
    title: "Contact Us via WhatsApp",
    description:
      "Message us with your name, area, and what you need. We confirm your appointment within 1 hour.",
  },
  {
    number: "2",
    title: "We Visit Your Home",
    description:
      "Our tailor visits at your scheduled time. Precise measurements taken in 10–15 minutes — comfortable and professional.",
  },
  {
    number: "3",
    title: "Stitched & Delivered in 5–7 Days",
    description:
      "Your outfit is carefully stitched and quality-checked, then delivered to your door. One free alteration if needed.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-playfair text-green text-3xl md:text-4xl font-semibold text-center mb-14">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center text-white font-playfair text-xl font-bold mb-5 flex-shrink-0">
                {step.number}
              </div>
              <h3 className="font-playfair text-green text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="font-inter text-text-muted text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx and verify**

Add `<HowItWorks />` after `<TrustBar />`. Confirm smooth scroll from the Hero "See How It Works" button reaches this section.

- [ ] **Step 3: Commit**

```bash
git add components/HowItWorks.tsx app/page.tsx
git commit -m "feat: add HowItWorks section"
```

---

## Task 10: Services component

**Files:**
- Create: `components/Services.tsx`

- [ ] **Step 1: Create Services**

Create `components/Services.tsx`:

```typescript
const WA_LINK =
  "https://wa.me/923360506129?text=Hi%2C%20I%27d%20like%20to%20book%20a%20measurement";

const services = [
  {
    icon: "✂️",
    name: "Men's Shalwar Kameez",
    description:
      "Formal and casual cuts for men — perfectly tailored to your measurements.",
    price: "from Rs. 1,200",
  },
  {
    icon: "🪡",
    name: "Women's Shalwar Kameez",
    description:
      "Lawn, khaddar, silk & party wear for women — stitched exactly as you like.",
    price: "from Rs. 1,500",
  },
  {
    icon: "⭐",
    name: "Wedding Wear",
    description:
      "Sherwani, bridal wear, mehndi outfits & matching family suits — book early.",
    price: "from Rs. 3,500",
  },
  {
    icon: "📐",
    name: "Alterations",
    description:
      "Quick fixes, size adjustments & repairs — in & out in 2–3 days.",
    price: "from Rs. 300",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-playfair text-green text-3xl md:text-4xl font-semibold text-center mb-14">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-bg border-t-4 border-gold rounded-xl p-7 flex flex-col gap-4"
            >
              <span className="text-3xl" aria-hidden="true">
                {service.icon}
              </span>
              <div>
                <h3 className="font-playfair text-green text-xl font-semibold mb-2">
                  {service.name}
                </h3>
                <p className="font-inter text-text-muted text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <p className="font-inter text-gold font-medium text-sm">
                  {service.price}
                </p>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center bg-green text-white font-inter font-medium text-sm px-5 py-3 rounded-full min-h-[44px] hover:opacity-90 transition-opacity w-fit"
              >
                Book This
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx and verify**

Add `<Services />` after `<HowItWorks />`.

- [ ] **Step 3: Commit**

```bash
git add components/Services.tsx app/page.tsx
git commit -m "feat: add Services section"
```

---

## Task 11: Pricing component

**Files:**
- Create: `components/Pricing.tsx`

- [ ] **Step 1: Create Pricing**

Create `components/Pricing.tsx`:

```typescript
const WA_LINK =
  "https://wa.me/923360506129?text=Hi%2C%20I%27d%20like%20to%20book%20a%20measurement";

const prices = [
  { service: "Gents Shalwar Kameez", price: "Rs. 2,000" },
  { service: "Ladies Shalwar Kameez", price: "Rs. 2,500" },
  { service: "Kurta (simple)", price: "Rs. 1000" },
  { service: "Silk / Party Suit", price: "Rs. 2,500" },
  { service: "Embroidered Suit", price: "Rs. 3,000+" },
  { service: "Sherwani", price: "Rs. 3,500+" },
  { service: "Alteration (simple)", price: "Rs. 500" },
  { service: "Gharara / Sharara", price: "Rs. 2,000+" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-green py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-playfair text-white text-3xl md:text-4xl font-semibold text-center mb-14">
          Pricing
        </h2>

        <div className="rounded-xl overflow-hidden border border-white/20">
          <table className="w-full font-inter">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left text-white/60 text-sm font-medium px-6 py-4">
                  Service
                </th>
                <th className="text-right text-white/60 text-sm font-medium px-6 py-4">
                  Starting Price
                </th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row, i) => (
                <tr
                  key={row.service}
                  className={`border-b border-white/10 last:border-0 ${
                    i % 2 === 0 ? "bg-white/5" : ""
                  }`}
                >
                  <td className="text-white text-sm px-6 py-4">{row.service}</td>
                  <td className="text-gold text-sm font-medium text-right px-6 py-4">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-white/60 text-sm text-center mt-6 font-inter">
          Prices vary based on fabric type, design complexity, and embellishments.{" "}
          <a href={WA_LINK} className="text-gold underline">
            Message us for a free quote.
          </a>
        </p>

        <p className="text-gold text-sm text-center mt-3 font-inter font-medium">
          ⚡ Eid & wedding season slots fill up fast — book at least 2 weeks in advance.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx and verify**

Add `<Pricing />` after `<Services />`.

- [ ] **Step 3: Commit**

```bash
git add components/Pricing.tsx app/page.tsx
git commit -m "feat: add Pricing section"
```

---

## Task 12: Testimonials component

**Files:**
- Create: `components/Testimonials.tsx`

- [ ] **Step 1: Create Testimonials**

Create `components/Testimonials.tsx`:

```typescript
const testimonials = [
  {
    name: "Sara A.",
    area: "F-10, Islamabad",
    review:
      "The fit was perfect on first try. The tailor was professional and the delivery was on time. Highly recommend!",
  },
  {
    name: "Ahmed K.",
    area: "Bahria Town, Islamabad",
    review:
      "Ordered a formal shalwar kameez for Eid. Beautiful stitching and the home visit was so convenient.",
  },
  {
    name: "Fatima R.",
    area: "G-11, Islamabad",
    review:
      "Finally a darzi that comes to you! No more trips to the market. My whole family orders from DarziDoor now.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-playfair text-green text-3xl md:text-4xl font-semibold text-center mb-14">
          What Our Clients Say
        </h2>

        {/* Mobile: horizontal scroll with snap. Desktop: 3-column grid */}
        <div
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-scroll md:overflow-x-visible scroll-snap-x-mandatory md:scroll-snap-none pb-4 md:pb-0"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-surface rounded-xl p-7 flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* 5 gold stars */}
              <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className="text-gold text-lg" aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              <p className="font-inter text-text-primary text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.review}&rdquo;
              </p>

              <div>
                <p className="font-inter font-medium text-green text-sm">{t.name}</p>
                <p className="font-inter text-text-muted text-xs">{t.area}</p>
              </div>
            </div>
          ))}

          {/* Spacer on mobile to hint at scroll end */}
          <div className="flex-shrink-0 w-4 md:hidden" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx and verify**

Add `<Testimonials />` after `<Pricing />`. On mobile, verify horizontal scroll with snap works.

- [ ] **Step 3: Commit**

```bash
git add components/Testimonials.tsx app/page.tsx
git commit -m "feat: add Testimonials section with mobile scroll snap"
```

---

## Task 13: FAQ component (accordion)

**Files:**
- Create: `components/FAQ.tsx`

- [ ] **Step 1: Create FAQ accordion**

Create `components/FAQ.tsx`:

```typescript
"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you serve my area?",
    a: "We serve all sectors of Islamabad (F, G, I, E, H) and Rawalpindi (Saddar, Bahria Town, DHA, Gulraiz, Chaklala, Murree Road). Not sure? Just message us!",
  },
  {
    q: "How long does stitching take?",
    a: "Standard delivery is 5–7 working days. Rush orders (2–3 days) available for an extra charge.",
  },
  {
    q: "Do I need to provide my own fabric?",
    a: "You can bring your own fabric or ask us — we can arrange fabric for you at market rates.",
  },
  {
    q: "How do you take measurements at home?",
    a: "Our tailor visits with a measuring tape and measurement form. The process takes 10–15 minutes and is fully comfortable. Female tailor available for ladies on request.",
  },
  {
    q: "What if the fit isn't perfect?",
    a: "We offer one free alteration if the stitching doesn't fit correctly. Your satisfaction is our priority.",
  },
  {
    q: "How do I pay?",
    a: "Cash on delivery when we deliver your outfit. No advance payment required for your first order.",
  },
  {
    q: "Can I order for multiple family members in one visit?",
    a: "Yes! One visit, multiple measurements — saves everyone time.",
  },
  {
    q: "Do you stitch wedding/event wear?",
    a: "Yes, including sherwani, bridal wear, mehndi outfits, and matching family suits. Book early for wedding orders.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-surface py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-playfair text-green text-3xl md:text-4xl font-semibold text-center mb-14">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-bg rounded-xl overflow-hidden border border-green/10">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-inter font-medium text-green text-base min-h-[56px]"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <span
                  className="text-gold flex-shrink-0 transition-transform duration-200"
                  style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="font-inter text-text-muted text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx and verify**

Add `<FAQ />` after `<Testimonials />`. Verify: clicking a question opens it, clicking again closes it, only one is open at a time.

- [ ] **Step 3: Commit**

```bash
git add components/FAQ.tsx app/page.tsx
git commit -m "feat: add FAQ accordion section"
```

---

## Task 14: Contact component

**Files:**
- Create: `components/Contact.tsx`

- [ ] **Step 1: Create Contact**

Create `components/Contact.tsx`:

```typescript
const WA_LINK =
  "https://wa.me/923360506129?text=Hi%2C%20I%27d%20like%20to%20book%20a%20measurement";

export default function Contact() {
  return (
    <section id="contact" className="bg-bg py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-playfair text-green text-3xl md:text-4xl font-semibold mb-4">
          Ready for Your Perfect Fit?
        </h2>
        <p className="font-inter text-text-muted text-base mb-10">
          Available 9am – 8pm, 7 days a week. We reply within 1 hour.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white font-inter font-medium text-base px-8 py-4 rounded-full min-h-[52px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span aria-hidden="true">💬</span>
            Chat on WhatsApp
          </a>

          <a
            href="tel:+923360506129"
            className="border-2 border-green text-green font-inter font-medium text-base px-8 py-4 rounded-full min-h-[52px] flex items-center justify-center gap-2 hover:bg-green hover:text-white transition-colors"
          >
            <span aria-hidden="true">📞</span>
            0336-0506129
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx and verify**

Add `<Contact />` after `<FAQ />`.

- [ ] **Step 3: Commit**

```bash
git add components/Contact.tsx app/page.tsx
git commit -m "feat: add Contact section"
```

---

## Task 15: WhatsAppButton — floating with IntersectionObserver

**Files:**
- Create: `components/WhatsAppButton.tsx`

- [ ] **Step 1: Create floating WhatsApp button**

Create `components/WhatsAppButton.tsx`:

```typescript
"use client";

import { useEffect, useState } from "react";

const WA_LINK =
  "https://wa.me/923360506129?text=Hi%2C%20I%27d%20like%20to%20book%20a%20measurement";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show button only when hero is NOT visible
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#1B4D35"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}
```

- [ ] **Step 2: Add to page.tsx (outside main, after footer)**

```typescript
// In app/page.tsx — add WhatsAppButton at the bottom, outside <main>
import WhatsAppButton from "@/components/WhatsAppButton";
// ...
return (
  <>
    <main>
      {/* all sections */}
    </main>
    <WhatsAppButton />
  </>
);
```

- [ ] **Step 3: Verify behaviour**

In browser: scroll down past hero — button appears. Scroll back to top — button disappears.

- [ ] **Step 4: Commit**

```bash
git add components/WhatsAppButton.tsx app/page.tsx
git commit -m "feat: add floating WhatsApp button with IntersectionObserver"
```

---

## Task 16: Footer component

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create Footer**

Create `components/Footer.tsx`:

```typescript
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <Image
            src="/darzi-door.png"
            alt="DarziDoor"
            width={100}
            height={40}
            className="h-10 w-auto"
          />
          <p className="font-inter text-white/70 text-sm italic">
            Your Perfect Fit, Delivered to Your Door.
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-2">
          <Link
            href="/privacy"
            className="font-inter text-white/60 text-xs hover:text-gold transition-colors"
          >
            Privacy Policy
          </Link>
          <p className="font-inter text-white/40 text-xs">
            © {new Date().getFullYear()} DarziDoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

Add `<Footer />` as the last element inside `<main>`.

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx app/page.tsx
git commit -m "feat: add Footer component"
```

---

## Task 17: Compose full homepage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Write final page.tsx**

Replace `app/page.tsx` with the complete composed homepage:

```typescript
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Services />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  );
}
```

- [ ] **Step 2: Run full build**

```bash
npm run build
```

Expected: Build succeeds, all pages generated, no TypeScript errors.

- [ ] **Step 3: Verify complete homepage in browser**

```bash
npm run dev
```

Check every section renders correctly. Scroll through the full page.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: compose full homepage with all sections"
```

---

## Task 18: Blog index page

**Files:**
- Create: `app/blog/page.tsx`

- [ ] **Step 1: Create blog index**

Create `app/blog/page.tsx`:

```typescript
import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tailoring Tips & Guides | DarziDoor Blog",
  description:
    "Expert advice on shalwar kameez stitching, fabric guides, and tailoring tips for Islamabad & Rawalpindi.",
};

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-green text-4xl font-bold mb-4">
            DarziDoor Blog
          </h1>
          <p className="font-inter text-text-muted text-base mb-12">
            Tailoring guides, fabric tips, and stitching advice for Islamabad & Rawalpindi.
          </p>

          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-green/10 pb-8 last:border-0">
                <Link href={`/blog/${post.slug}`} className="group">
                  <p className="font-inter text-text-muted text-xs mb-2">{post.date}</p>
                  <h2 className="font-playfair text-green text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-inter text-text-muted text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="font-inter text-gold text-sm font-medium mt-3 inline-block">
                    Read more →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify blog index at /blog**

```bash
npm run dev
```

Navigate to http://localhost:3000/blog — all 10 posts should be listed.

- [ ] **Step 3: Commit**

```bash
git add app/blog/page.tsx
git commit -m "feat: add blog index page"
```

---

## Task 19: Blog post page

**Files:**
- Create: `app/blog/[slug]/page.tsx`

- [ ] **Step 1: Create blog post page**

Create `app/blog/[slug]/page.tsx`:

```typescript
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | DarziDoor`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen py-16 px-6">
        <article className="max-w-2xl mx-auto">
          <p className="font-inter text-text-muted text-xs mb-4">{post.date}</p>
          <h1 className="font-playfair text-green text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="font-inter text-text-muted text-base italic mb-10 border-l-4 border-gold pl-4">
            {post.excerpt}
          </p>

          <div
            className="font-inter text-text-primary text-base leading-relaxed prose prose-headings:font-playfair prose-headings:text-green prose-a:text-gold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify a blog post renders**

Navigate to http://localhost:3000/blog/best-tailor-home-pickup-islamabad — verify the post renders with title, content, and WhatsApp CTA at the bottom.

- [ ] **Step 3: Commit**

```bash
git add "app/blog/[slug]/page.tsx"
git commit -m "feat: add blog post page with static generation"
```

---

## Task 20: Privacy policy page

**Files:**
- Create: `app/privacy/page.tsx`

- [ ] **Step 1: Create privacy page**

Create `app/privacy/page.tsx`:

```typescript
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | DarziDoor",
  description: "DarziDoor privacy policy — how we use analytics on our website.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-playfair text-green text-4xl font-bold mb-8">
            Privacy Policy
          </h1>

          <div className="font-inter text-text-primary text-base leading-relaxed space-y-6">
            <p>
              <strong>Last updated:</strong> {new Date().getFullYear()}
            </p>

            <p>
              DarziDoor (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the website darzidoor.com. This page
              explains how we collect and use information when you visit our site.
            </p>

            <h2 className="font-playfair text-green text-2xl font-semibold">Analytics</h2>
            <p>
              We use Google Analytics 4 to understand how visitors use our website. This
              service may set cookies on your device and collect anonymised data about your
              visit, including pages viewed and time on site. This data helps us improve our
              website and services.
            </p>
            <p>
              Google&apos;s privacy policy is available at{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-gold underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
              .
            </p>

            <h2 className="font-playfair text-green text-2xl font-semibold">WhatsApp</h2>
            <p>
              When you contact us via WhatsApp, your conversation is subject to WhatsApp&apos;s
              privacy policy. We only use information you provide to respond to your enquiry
              and fulfil your tailoring order.
            </p>

            <h2 className="font-playfair text-green text-2xl font-semibold">Contact</h2>
            <p>
              For any questions about this policy, message us on WhatsApp:{" "}
              <a href="tel:+923360506129" className="text-gold">
                0336-0506129
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify at /privacy**

Navigate to http://localhost:3000/privacy — page renders correctly.

- [ ] **Step 3: Commit**

```bash
git add app/privacy/page.tsx
git commit -m "feat: add privacy policy page"
```

---

## Task 21: Final build, SEO check, and Vercel deploy prep

**Files:**
- Create: `next.config.ts` (update if needed)

- [ ] **Step 1: Run full production build**

```bash
npm run build
```

Expected: All pages generate successfully. Note the build output — you should see routes for `/`, `/blog`, `/blog/[slug]` (10 pages), and `/privacy`.

- [ ] **Step 2: Test production build locally**

```bash
npm run start
```

Open http://localhost:3000 and do a full scroll test. Check:
- Navbar sticks at top while scrolling
- Floating WhatsApp button appears after scrolling past hero
- All section links work
- WhatsApp deep links open correctly (they will open WhatsApp app or web)
- Blog posts all render at /blog/[slug]
- Privacy page renders at /privacy

- [ ] **Step 3: Initialize git repository (if not already)**

```bash
git remote -v
```

If no remote, create a GitHub repo named `darzi-door` and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/darzi-door.git
git branch -M main
git push -u origin main
```

- [ ] **Step 4: Deploy to Vercel**

1. Go to vercel.com and sign in with GitHub
2. Click "Add New Project"
3. Import the `darzi-door` repository
4. Framework preset: Next.js (auto-detected)
5. No environment variables needed
6. Click "Deploy"

Expected: Deployment succeeds. Vercel provides a live URL.

- [ ] **Step 5: After deploy — update GA4 Measurement ID**

In `app/layout.tsx`, replace both instances of `G-XXXXXXXXXX` with your real Google Analytics 4 Measurement ID. Commit and push — Vercel auto-deploys.

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "chore: final build verification and deploy prep"
git push
```
