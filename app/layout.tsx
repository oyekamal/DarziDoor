import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Nastaliq_Urdu } from "next/font/google";
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

const urdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-urdu",
  display: "swap",
  weight: ["400", "700"],
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
  twitter: {
    card: "summary_large_image",
    title: "DarziDoor — Custom Tailoring at Your Doorstep",
    description: "Home measurement, custom stitching, doorstep delivery. Islamabad & Rawalpindi.",
    images: ["https://darzidoor.com/darzi-door.png"],
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
