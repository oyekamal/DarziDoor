import type { Metadata } from "next";
import Link from "next/link";
import { WA_LINK } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Best Tailor in Rawalpindi | DarziDoor Home Stitching Service",
  description:
    "Top-rated tailor in Rawalpindi with free home measurement. Custom shalwar kameez stitching in Saddar, Bahria Town, DHA, Commercial Market. WhatsApp now!",
  keywords: [
    "tailor rawalpindi",
    "darzi rawalpindi",
    "stitching service rawalpindi",
    "shalwar kameez rawalpindi",
    "home tailoring rawalpindi",
    "saddar tailor",
    "bahria  town rawalpindi tailor",
  ],
  alternates: {
    canonical: "https://darzi-door.vercel.app/rawalpindi-tailor",
  },
  openGraph: {
    title: "Best Tailor in Rawalpindi - DarziDoor Home Service",
    description: "Expert home tailoring service in Rawalpindi. Free measurement & delivery across all areas.",
    url: "https://darzi-door.vercel.app/rawalpindi-tailor",
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
    "@type": "City",
    name: "Rawalpindi",
    "@id": "https://en.wikipedia.org/wiki/Rawalpindi",
  },
  description: "Custom tailoring service with home measurement and delivery in Rawalpindi",
};

export default function RawalpindiTailorPage() {
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
              Best Tailor in Rawalpindi
            </h1>
            <p className="font-urdu text-gold text-3xl leading-loose mb-4" dir="rtl" lang="ur">
              راولپنڈی کا بہترین درزی
            </p>
            <p className="font-inter text-xl text-white/90 mb-8">
              Home measurement & delivery • Saddar • Bahria Town • DHA • Commercial Market
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
                Professional Home Tailoring Service in Rawalpindi
              </h2>
              
              <p className="font-inter text-text-primary text-base leading-relaxed mb-6">
                Finding a reliable tailor in Rawalpindi used to mean navigating Saddar&apos;s crowded markets or waiting hours at Raja Bazaar. Not anymore. DarziDoor brings expert tailoring to your doorstep anywhere in Rawalpindi — we visit your home, take precise measurements, stitch your outfit, and deliver it in 5–7 days.
              </p>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                Areas We Serve in Rawalpindi
              </h3>
              <div className="grid md:grid-cols-3 gap-3 mb-6">
                <ul className="font-inter text-text-primary list-disc list-inside space-y-1">
                  <li>Saddar Rawalpindi</li>
                  <li>Commercial Market</li>
                  <li>Raja Bazaar Area</li>
                  <li>Committee Chowk</li>
                  <li>Satellite Town</li>
                </ul>
                <ul className="font-inter text-text-primary list-disc list-inside space-y-1">
                  <li>Bahria Town Rawalpindi</li>
                  <li>DHA Rawalpindi</li>
                  <li>Askari Housing</li>
                  <li>Westridge</li>
                  <li>PWD Housing</li>
                </ul>
                <ul className="font-inter text-text-primary list-disc list-inside space-y-1">
                  <li>Gulraiz Housing</li>
                  <li>Chaklala Scheme</li>
                  <li>Murree Road</li>
                  <li>Chandni Chowk</li>
                  <li>6th Road, 7th Avenue</li>
                </ul>
              </div>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                Custom Tailoring Services in Rawalpindi
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center bg-surface p-4 rounded-lg">
                  <div>
                    <h4 className="font-playfair text-green font-semibold">Gents Shalwar Kameez</h4>
                    <p className="font-inter text-text-muted text-sm">Formal & casual stitching</p>
                  </div>
                  <p className="font-inter text-gold font-medium">from Rs. 2,200</p>
                </div>
                <div className="flex justify-between items-center bg-surface p-4 rounded-lg">
                  <div>
                    <h4 className="font-playfair text-green font-semibold">Ladies Shalwar Kameez</h4>
                    <p className="font-inter text-text-muted text-sm">Lawn, silk, party wear</p>
                  </div>
                  <p className="font-inter text-gold font-medium">from Rs. 2,500</p>
                </div>
                <div className="flex justify-between items-center bg-surface p-4 rounded-lg">
                  <div>
                    <h4 className="font-playfair text-green font-semibold">Wedding & Formal Wear</h4>
                    <p className="font-inter text-text-muted text-sm">Sherwani, bridal, mehndi</p>
                  </div>
                  <p className="font-inter text-gold font-medium">from Rs. 4,500</p>
                </div>
                <div className="flex justify-between items-center bg-surface p-4 rounded-lg">
                  <div>
                    <h4 className="font-playfair text-green font-semibold">Alterations</h4>
                    <p className="font-inter text-text-muted text-sm">Repairs and adjustments</p>
                  </div>
                  <p className="font-inter text-gold font-medium">from Rs. 1,300</p>
                </div>
              </div>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                Why Rawalpindi Customers Choose DarziDoor
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-inter font-semibold text-green mb-2 flex items-center">
                    ✓ No More Bazaar Traffic
                  </h4>
                  <p className="font-inter text-text-muted text-sm">
                    Skip the Saddar traffic and crowded Raja Bazaar. We come directly to your home.
                  </p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-green mb-2 flex items-center">
                    ✓ Rs. 200 Total Visit Fee
                  </h4>
                  <p className="font-inter text-text-muted text-sm">
                    One low fee covers home measurement AND delivery anywhere in Rawalpindi.
                  </p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-green mb-2 flex items-center">
                    ✓ Female Tailor Available
                  </h4>
                  <p className="font-inter text-text-muted text-sm">
                    Ladies can request a female tailor for home measurements. Just mention it when booking.
                  </p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-green mb-2 flex items-center">
                    ✓ Free Alteration Guarantee
                  </h4>
                  <p className="font-inter text-text-muted text-sm">
                    If the fit isn&apos;t perfect, we fix it at no extra cost. Your satisfaction guaranteed.
                  </p>
                </div>
              </div>

              <div className="bg-gold/10 border-l-4 border-gold p-6 rounded my-8">
                <h3 className="font-playfair text-green text-xl font-semibold mb-3">
                  How DarziDoor Works in Rawalpindi
                </h3>
                <ol className="font-inter text-text-primary space-y-3">
                  <li className="flex gap-3">
                    <span className="font-bold text-gold">1.</span>
                    <span><strong>WhatsApp us</strong> with your area in Rawalpindi and what you need stitched</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold">2.</span>
                    <span><strong>We confirm</strong> your appointment within 1 hour</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold">3.</span>
                    <span><strong>Our tailor visits</strong> your home at the scheduled time (10–15 min measurement)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold">4.</span>
                    <span><strong>We stitch & deliver</strong> your outfit in 5–7 working days</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold">5.</span>
                    <span><strong>Pay on delivery</strong> — no advance required for first orders</span>
                  </li>
                </ol>
              </div>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                Testimonials from Rawalpindi Customers
              </h3>
              <div className="space-y-4 mb-8">
                <div className="bg-surface p-6 rounded-lg">
                  <p className="font-inter text-text-primary italic mb-3">
                    &ldquo;Finally, a tailor that comes to Bahria Town Rawalpindi! The stitching quality is excellent and the home service is so convenient.&rdquo;
                  </p>
                  <p className="font-inter text-text-muted text-sm">— Ayesha R., Bahria Town Rawalpindi</p>
                </div>
                <div className="bg-surface p-6 rounded-lg">
                  <p className="font-inter text-text-primary italic mb-3">
                    &ldquo;I live in Saddar and always struggled finding time to visit tailors. DarziDoor made it so easy — they came to me!&rdquo;
                  </p>
                  <p className="font-inter text-text-muted text-sm">— Ahmed M., Saddar Rawalpindi</p>
                </div>
              </div>

              <div className="text-center bg-green text-white p-10 rounded-lg mt-12">
                <h3 className="font-playfair text-2xl font-bold mb-2">
                  Book Your Home Visit in Rawalpindi
                </h3>
                <p className="font-urdu text-gold text-2xl leading-loose mb-4" dir="rtl" lang="ur">
                  راولپنڈی میں گھر پر وزٹ بک کریں
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
