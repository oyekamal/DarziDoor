import type { Metadata } from "next";
import { WA_LINK } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Best Shalwar Kameez Tailor in Saddar Rawalpindi | DarziDoor",
  description:
    "Top-rated shalwar kameez tailor in Saddar Rawalpindi with home service. Fast stitching, free measurement & delivery. Serving all Saddar areas. WhatsApp now!",
  keywords: [
    "shalwar kameez tailor Saddar Rawalpindi",
    "best tailor Saddar",
    "darzi Saddar Rawalpindi",
    "1 day shalwar kameez stitching Saddar",
    "fast shalwar kameez stitching Rawalpindi",
    "ladies tailor Saddar",
    "gents tailor Saddar Rawalpindi",
  ],
  alternates: {
    canonical: "https://darzi-door.vercel.app/saddar-tailor",
  },
  openGraph: {
    title: "Best Tailor in Saddar Rawalpindi - DarziDoor",
    description: "Expert shalwar kameez tailoring in Saddar. Home service, fast delivery, all Saddar areas covered.",
    url: "https://darzi-door.vercel.app/saddar-tailor",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Shalwar Kameez Tailoring Service",
  provider: {
    "@type": "LocalBusiness",
    name: "DarziDoor",
    telephone: "+923360506129",
  },
  areaServed: {
    "@type": "Place",
    name: "Saddar Rawalpindi",
  },
  description: "Professional shalwar kameez tailoring with home measurement and delivery in Saddar Rawalpindi",
};

export default function SaddarTailorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localSchema),
        }}
      />
      <Navbar />
      <main className="bg-bg min-h-screen">
        <section className="bg-green text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Best Shalwar Kameez Tailor in Saddar Rawalpindi
            </h1>
            <p className="font-urdu text-gold text-3xl leading-loose mb-4" dir="rtl" lang="ur">
              صدر راولپنڈی میں بہترین شلوار قمیض درزی
            </p>
            <p className="font-inter text-xl text-white/90 mb-8">
              Home Service • Fast Stitching • Free Measurement & Delivery
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-white font-medium px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
            >
              Book Your Home Visit in Saddar
            </a>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-playfair text-green text-3xl font-semibold mb-6">
                Professional Shalwar Kameez Tailoring in Saddar Rawalpindi
              </h2>
              
              <p className="font-inter text-text-primary text-base leading-relaxed mb-6">
                Shopping in Saddar's bustling markets is exciting — but finding time to visit a tailor and wait for fittings? Not so much. DarziDoor brings Saddar's quality tailoring directly to your home. Whether you're in Commercial Market, Committee Chowk, or anywhere in Saddar, we visit you, take measurements, and deliver your perfectly stitched shalwar kameez in 5–7 days (rush orders in 2–3 days).
              </p>

              <div className="bg-gold/10 border-l-4 border-gold p-6 rounded mb-8">
                <h3 className="font-playfair text-green text-xl font-semibold mb-3">
                  Skip the Saddar Traffic — We Come to You!
                </h3>
                <p className="font-inter text-text-primary text-sm">
                  No more navigating crowded bazaars or waiting in tailor shops. Book a home visit and get expert measurement service at your convenience.
                </p>
              </div>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                Areas We Serve in Saddar Rawalpindi
              </h3>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                <ul className="font-inter text-text-primary list-disc list-inside space-y-1">
                  <li>Commercial Market</li>
                  <li>Committee Chowk</li>
                  <li>Raja Bazaar vicinity</li>
                  <li>Bank Road</li>
                  <li>Adamjee Road</li>
                </ul>
                <ul className="font-inter text-text-primary list-disc list-inside space-y-1">
                  <li>Liaquat Road</li>
                  <li>Iqbal Road</li>
                  <li>Haider Road</li>
                  <li>Murree Road (Saddar)</li>
                  <li>All nearby residential areas</li>
                </ul>
              </div>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                Our Shalwar Kameez Tailoring Services in Saddar
              </h3>
              <div className="space-y-4 mb-8">
                <div className="bg-surface p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-playfair text-green font-semibold text-lg mb-1">Gents Shalwar Kameez</h4>
                      <p className="font-inter text-text-muted text-sm">Formal, casual, kurta — all styles</p>
                    </div>
                    <p className="font-inter text-gold font-medium">from Rs. 2,200</p>
                  </div>
                </div>
                <div className="bg-surface p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-playfair text-green font-semibold text-lg mb-1">Ladies Shalwar Kameez</h4>
                      <p className="font-inter text-text-muted text-sm">Lawn, silk, designer cuts</p>
                    </div>
                    <p className="font-inter text-gold font-medium">from Rs. 2,500</p>
                  </div>
                </div>
                <div className="bg-surface p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-playfair text-green font-semibold text-lg mb-1">Rush Stitching (2-3 Days)</h4>
                      <p className="font-inter text-text-muted text-sm">Need it fast? We deliver quickly</p>
                    </div>
                    <p className="font-inter text-gold font-medium">+Rs. 500 extra</p>
                  </div>
                </div>
                <div className="bg-surface p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-playfair text-green font-semibold text-lg mb-1">Alterations & Repairs</h4>
                      <p className="font-inter text-text-muted text-sm">Quick fixes, size adjustments</p>
                    </div>
                    <p className="font-inter text-gold font-medium">from Rs. 1,300</p>
                  </div>
                </div>
              </div>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                Why Saddar Customers Choose DarziDoor
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-surface p-6 rounded-lg">
                  <h4 className="font-inter font-semibold text-green mb-2 flex items-center">
                    ✓ Fast Turnaround
                  </h4>
                  <p className="font-inter text-text-muted text-sm">
                    Standard 5–7 days. Rush orders in 2–3 days for Eid or urgent events.
                  </p>
                </div>
                <div className="bg-surface p-6 rounded-lg">
                  <h4 className="font-inter font-semibold text-green mb-2 flex items-center">
                    ✓ Expert Tailors
                  </h4>
                  <p className="font-inter text-text-muted text-sm">
                    Experienced in traditional and modern shalwar kameez cuts for men and women.
                  </p>
                </div>
                <div className="bg-surface p-6 rounded-lg">
                  <h4 className="font-inter font-semibold text-green mb-2 flex items-center">
                    ✓ Ladies Specialist Available
                  </h4>
                  <p className="font-inter text-text-muted text-sm">
                    Female tailor available for home measurements. Just mention when booking.
                  </p>
                </div>
                <div className="bg-surface p-6 rounded-lg">
                  <h4 className="font-inter font-semibold text-green mb-2 flex items-center">
                    ✓ Rs. 200 Total Visit Fee
                  </h4>
                  <p className="font-inter text-text-muted text-sm">
                    One low fee covers home measurement AND delivery anywhere in Saddar.
                  </p>
                </div>
              </div>

              <div className="bg-green/5 border border-green/20 p-6 rounded-lg mb-8">
                <h3 className="font-playfair text-green text-xl font-semibold mb-3">
                  How It Works for Saddar Residents
                </h3>
                <ol className="font-inter text-text-primary space-y-3">
                  <li className="flex gap-3">
                    <span className="font-bold text-gold min-w-[24px]">1.</span>
                    <span><strong>WhatsApp us</strong> with your exact location in Saddar (street/landmark)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold min-w-[24px]">2.</span>
                    <span><strong>We confirm</strong> your appointment within 1 hour</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold min-w-[24px]">3.</span>
                    <span><strong>Our tailor visits</strong> — takes precise measurements (10–15 minutes)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold min-w-[24px]">4.</span>
                    <span><strong>Choose your style</strong> — neckline, sleeves, length, embellishments</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold min-w-[24px]">5.</span>
                    <span><strong>We stitch & deliver</strong> to your Saddar address in 5–7 days</span>
                  </li>
                </ol>
              </div>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                Frequently Asked Questions - Saddar Rawalpindi
              </h3>
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-inter font-semibold text-green mb-2">Can you do same-day measurement appointments in Saddar?</h4>
                  <p className="font-inter text-text-muted text-sm">Yes, subject to availability. We usually confirm within 1 hour and can often schedule same-day visits.</p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-green mb-2">Do you charge extra for rush orders?</h4>
                  <p className="font-inter text-text-muted text-sm">Rush orders (2–3 days) have an additional Rs. 500 charge. Perfect for urgent Eid or event orders.</p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-green mb-2">I work in Commercial Market — can you visit my office?</h4>
                  <p className="font-inter text-text-muted text-sm">Absolutely! We can visit your office, home, or shop in Saddar for measurements.</p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-green mb-2">Can I provide my own fabric?</h4>
                  <p className="font-inter text-text-muted text-sm">Yes! Bring your own fabric or we can source quality fabric for you at market rates.</p>
                </div>
              </div>

              <div className="text-center bg-green text-white p-10 rounded-lg mt-12">
                <h3 className="font-playfair text-2xl font-bold mb-2">
                  Ready to Book Your Saddar Home Visit?
                </h3>
                <p className="font-urdu text-gold text-2xl leading-loose mb-4" dir="rtl" lang="ur">
                  صدر میں گھر پر وزٹ بک کریں
                </p>
                <p className="font-inter text-lg mb-6 text-white/90">
                  Available 9 AM – 8 PM, 7 days a week
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold text-white font-medium px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
                >
                  WhatsApp: 0336-0506129
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
