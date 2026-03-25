import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import Script from "next/script";
import { localBusinessSchema, faqSchema } from "@/lib/schema";
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

const urdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-urdu",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darzi-door.vercel.app"),
  title: "Best Shalwar Kameez Tailor in Islamabad & Rawalpindi | DarziDoor",
  description:
    "Top-rated shalwar kameez tailor in Islamabad & Rawalpindi. Custom stitching, home service, fast delivery. Serving Saddar, Blue Area, Asghar Mall & all areas. Book now!",
  keywords: [
    // Primary Keywords
    "best shalwar kameez tailor in Islamabad",
    "best shalwar kameez tailor in Rawalpindi",
    "top shalwar kameez tailor Islamabad Rawalpindi",
    "shalwar kameez stitching Rawalpindi",
    "shalwar kameez tailor near me Islamabad",
    // Location-Specific
    "shalwar kameez tailor Saddar Rawalpindi",
    "best tailor Blue Area Islamabad",
    "shalwar kameez tailor Asghar Mall Rawalpindi",
    "ladies shalwar kameez tailor Rawalpindi",
    "gents shalwar kameez tailor Islamabad",
    // Service-Focused
    "fast shalwar kameez stitching Rawalpindi",
    "custom shalwar kameez tailor Islamabad",
    "cheap shalwar kameez tailor near Rawalpindi",
    "designer shalwar kameez stitching Islamabad",
    "Eid shalwar kameez tailor Rawalpindi",
    // Long-Tail
    "best tailor for shalwar qameez in Pindi",
    "shalwar kameez kurta tailor Rawalpindi",
    "ladies specialist tailor shalwar kameez Islamabad",
    "men's bespoke shalwar kameez tailor Rawalpindi",
    "1 day shalwar kameez stitching Saddar",
    // Original Important Keywords
    "tailor islamabad",
    "best tailor rawalpindi",
    "home tailoring service",
    "darzi home service",
    "wedding dress stitching islamabad",
    "tailor bahria town",
    "tailor dha islamabad",
  ],
  authors: [{ name: "DarziDoor" }],
  creator: "DarziDoor",
  publisher: "DarziDoor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "DarziDoor — Best Tailor in Islamabad & Rawalpindi",
    description:
      "Expert home tailoring service. Custom shalwar kameez stitching with free home measurement and delivery. 4.9★ rated. Serving all Islamabad & Rawalpindi.",
    url: "https://darzi-door.vercel.app",
    siteName: "DarziDoor",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://darzi-door.vercel.app/darzi-door.png",
        width: 1200,
        height: 630,
        alt: "DarziDoor — Custom Shalwar Kameez Tailoring Service Islamabad Rawalpindi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DarziDoor — Best Tailor in Islamabad & Rawalpindi",
    description: "Expert home tailoring service. Custom shalwar kameez stitching with free home measurement and delivery. 4.9★ rated.",
    images: ["https://darzi-door.vercel.app/darzi-door.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://darzi-door.vercel.app",
  },
  verification: {
    google: "google-site-verification-code-here", // User should add their own verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-PK" className={`${playfair.variable} ${inter.variable} ${urdu.variable}`}>
      <head>
        {/* Structured Data - LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* Structured Data - FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
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
