import type { Metadata } from "next";
import Link from "next/link";
import { WA_LINK } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Best Tailor in Bahria Town Islamabad | DarziDoor Home Service",
  description:
    "Top-rated tailor in Bahria Town Islamabad with free home measurement & delivery. Custom shalwar kameez stitching in all Bahria Town phases. Book now!",
  keywords: [
    "tailor bahria town islamabad",
    "darzi bahria town",
    "stitching service bahria town",
    "home tailoring bahria town",
    "shalwar kameez bahria town",
  ],
  alternates: {
    canonical: "https://darzi-door.vercel.app/bahria-town-tailor",
  },
  openGraph: {
    title: "Best Tailor in Bahria Town Islamabad - DarziDoor",
    description: "Expert home tailoring service in Bahria Town. Custom shalwar kameez with free home measurement & delivery.",
    url: "https://darzi-door.vercel.app/bahria-town-tailor",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Tailoring Service",
  provider: {
    "@type": "LocalBusiness",
    name: "DarziDoor",
    telephone: "+923360506129",
  },
  areaServed: {
    "@type": "Place",
    name: "Bahria Town Islamabad",
  },
  description: "Custom tailoring service with home measurement and delivery in Bahria Town Islamabad",
};

export default function BahriaTownTailorPage() {
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
              Best Tailor in Bahria Town Islamabad
            </h1>
            <p className="font-inter text-xl text-white/90 mb-8">
              Expert home tailoring service • Free measurement & delivery • All Bahria Town phases
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-white font-medium px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
            >
              Book Your Free Home Visit
            </a>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-playfair text-green text-3xl font-semibold mb-6">
                Professional Tailoring Service in Bahria Town
              </h2>
              
              <p className="font-inter text-text-primary text-base leading-relaxed mb-6">
                Looking for a reliable tailor in Bahria Town Islamabad? DarziDoor brings expert tailoring directly to your doorstep. No need to travel to the bazaar — we visit your home, take precise measurements, and deliver your perfectly stitched outfit in 5–7 days.
              </p>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                We Serve All Bahria Town Phases
              </h3>
              <ul className="font-inter text-text-primary list-disc list-inside space-y-2 mb-6">
                <li>Bahria Town Phase 1, 2, 3, 4</li>
                <li>Bahria Enclave Islamabad</li>
                <li>Bahria Heights</li>
                <li>Bahria Garden City</li>
                <li>Ali Block, Awami Villas, Overseas Enclave</li>
              </ul>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                Our Services in Bahria Town
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-surface p-6 rounded-lg">
                  <h4 className="font-playfair text-green font-semibold text-lg mb-2">Men's Shalwar Kameez</h4>
                  <p className="font-inter text-text-muted text-sm mb-2">Formal and casual cuts, perfectly tailored</p>
                  <p className="font-inter text-gold font-medium">from Rs. 2,200</p>
                </div>
                <div className="bg-surface p-6 rounded-lg">
                  <h4 className="font-playfair text-green font-semibold text-lg mb-2">Women's Shalwar Kameez</h4>
                  <p className="font-inter text-text-muted text-sm mb-2">Lawn, silk, party wear — your style</p>
                  <p className="font-inter text-gold font-medium">from Rs. 2,500</p>
                </div>
                <div className="bg-surface p-6 rounded-lg">
                  <h4 className="font-playfair text-green font-semibold text-lg mb-2">Wedding Wear</h4>
                  <p className="font-inter text-text-muted text-sm mb-2">Sherwani, bridal wear, mehndi outfits</p>
                  <p className="font-inter text-gold font-medium">from Rs. 4,500</p>
                </div>
                <div className="bg-surface p-6 rounded-lg">
                  <h4 className="font-playfair text-green font-semibold text-lg mb-2">Alterations & Repairs</h4>
                  <p className="font-inter text-text-muted text-sm mb-2">Quick fixes and adjustments</p>
                  <p className="font-inter text-gold font-medium">from Rs. 1,300</p>
                </div>
              </div>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                Why Choose DarziDoor in Bahria Town?
              </h3>
              <ul className="font-inter text-text-primary list-disc list-inside space-y-2 mb-8">
                <li><strong>Free Home Measurement:</strong> We come to you anywhere in Bahria Town — just Rs. 200 total visit fee</li>
                <li><strong>Expert Tailors:</strong> Years of experience in custom stitching</li>
                <li><strong>Fast Delivery:</strong> 5–7 working days standard, rush orders available</li>
                <li><strong>One Free Alteration:</strong> If the fit isn't perfect, we fix it at no charge</li>
                <li><strong>Female Tailor Available:</strong> For ladies who prefer female tailors</li>
                <li><strong>No Advance Payment:</strong> Pay cash on delivery for your first order</li>
              </ul>

              <div className="bg-gold/10 border-l-4 border-gold p-6 rounded my-8">
                <h3 className="font-playfair text-green text-xl font-semibold mb-3">
                  How It Works
                </h3>
                <ol className="font-inter text-text-primary space-y-2">
                  <li><strong>1. Message us on WhatsApp</strong> with your location in Bahria Town</li>
                  <li><strong>2. We schedule a home visit</strong> at your convenience</li>
                  <li><strong>3. Our tailor takes measurements</strong> in 10–15 minutes</li>
                  <li><strong>4. We stitch & deliver</strong> in 5–7 days to your doorstep</li>
                </ol>
              </div>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-inter font-semibold text-green mb-2">Do you charge extra for Bahria Town?</h4>
                  <p className="font-inter text-text-muted text-sm">No. Our Rs. 200 measurement & delivery fee covers all areas of Bahria Town Islamabad.</p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-green mb-2">Can you arrange fabric if I don't have any?</h4>
                  <p className="font-inter text-text-muted text-sm">Yes, we can source quality fabric for you at market rates. Just let us know your requirements.</p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-green mb-2">Do you offer same-day measurement appointments?</h4>
                  <p className="font-inter text-text-muted text-sm">Usually yes, subject to availability. We confirm appointments within 1 hour of your message.</p>
                </div>
              </div>

              <div className="text-center bg-green text-white p-10 rounded-lg mt-12">
                <h3 className="font-playfair text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="font-inter text-lg mb-6 text-white/90">
                  Book your free home measurement visit in Bahria Town today
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold text-white font-medium px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
                >
                  Chat on WhatsApp Now
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
