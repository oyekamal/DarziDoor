import type { Metadata } from "next";
import { WA_LINK } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Best Tailor in Blue Area Islamabad | DarziDoor Shalwar Kameez Stitching",
  description:
    "Top-rated shalwar kameez tailor in Blue Area Islamabad. Custom stitching with home/office service. Fast delivery, free measurement. Perfect for professionals!",
  keywords: [
    "best tailor Blue Area Islamabad",
    "shalwar kameez tailor Blue Area",
    "office tailor Blue Area",
    "custom tailoring Blue Area Islamabad",
    "ladies tailor Blue Area",
    "gents tailor Blue Area",
    "professional shalwar kameez stitching Islamabad",
  ],
  alternates: {
    canonical: "https://darzi-door.vercel.app/blue-area-tailor",
  },
  openGraph: {
    title: "Best Tailor in Blue Area Islamabad - DarziDoor",
    description: "Professional shalwar kameez tailoring for Blue Area. Office/home service, fast stitching, expert quality.",
    url: "https://darzi-door.vercel.app/blue-area-tailor",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Professional Shalwar Kameez Tailoring",
  provider: {
    "@type": "LocalBusiness",
    name: "DarziDoor",
    telephone: "+923360506129",
  },
  areaServed: {
    "@type": "Place",
    name: "Blue Area Islamabad",
  },
  description: "Professional shalwar kameez tailoring with home and office service in Blue Area Islamabad",
};

export default function BlueAreaTailorPage() {
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
              Best Shalwar Kameez Tailor in Blue Area Islamabad
            </h1>
            <p className="font-urdu text-gold text-3xl leading-loose mb-4" dir="rtl" lang="ur">
              بلیو ایریا اسلام آباد میں بہترین شلوار قمیض درزی
            </p>
            <p className="font-inter text-xl text-white/90 mb-8">
              Office & Home Service • Professional Quality • Free Measurement
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-white font-medium px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
            >
              Book Your Visit in Blue Area
            </a>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-playfair text-green text-3xl font-semibold mb-6">
                Professional Tailoring Service for Blue Area Professionals
              </h2>
              
              <p className="font-inter text-text-primary text-base leading-relaxed mb-6">
                Working in Blue Area's corporate offices and government buildings? Finding time for tailor visits during work hours is nearly impossible. DarziDoor solves this — we visit your office or home in Blue Area, take professional measurements, and deliver your custom-stitched shalwar kameez directly to you. Perfect for busy professionals who value quality and convenience.
              </p>

              <div className="bg-gold/10 border-l-4 border-gold p-6 rounded mb-8">
                <h3 className="font-playfair text-green text-xl font-semibold mb-3">
                  <span className="text-2xl">💼</span> Office-Friendly Service
                </h3>
                <p className="font-inter text-text-primary text-sm">
                  We can visit your office during lunch break or after hours. Quick 10-minute measurement — no need to leave work!
                </p>
              </div>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                Areas We Serve in & Around Blue Area
              </h3>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                <ul className="font-inter text-text-primary list-disc list-inside space-y-1">
                  <li>Blue Area Main</li>
                  <li>Jinnah Avenue offices</li>
                  <li>Fazl-ul-Haq Road</li>
                  <li>Melody Market area</li>
                  <li>Centaurus vicinity</li>
                </ul>
                <ul className="font-inter text-text-primary list-disc list-inside space-y-1">
                  <li>F-6 residential</li>
                  <li>F-7 residential</li>
                  <li>Nearby government offices</li>
                  <li>Corporate buildings</li>
                  <li>All Blue Area locations</li>
                </ul>
              </div>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                Custom Shalwar Kameez Tailoring Services
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-surface p-6 rounded-lg">
                  <h4 className="font-playfair text-green font-semibold text-lg mb-2">Office-Wear Shalwar Kameez</h4>
                  <p className="font-inter text-text-muted text-sm mb-3">
                    Professional cuts for men and women. Khaddar, cotton, lawn — office-appropriate styles.
                  </p>
                  <p className="font-inter text-gold font-medium">from Rs. 2,200</p>
                </div>
                
                <div className="bg-surface p-6 rounded-lg">
                  <h4 className="font-playfair text-green font-semibold text-lg mb-2">Formal Event Wear</h4>
                  <p className="font-inter text-text-muted text-sm mb-3">
                    Wedding guest, embassy events, formal dinners — elegantly stitched.
                  </p>
                  <p className="font-inter text-gold font-medium">from Rs. 2,500</p>
                </div>

                <div className="bg-surface p-6 rounded-lg">
                  <h4 className="font-playfair text-green font-semibold text-lg mb-2">Designer Cuts</h4>
                  <p className="font-inter text-text-muted text-sm mb-3">
                    Modern, contemporary shalwar kameez with custom design elements.
                  </p>
                  <p className="font-inter text-gold font-medium">from Rs. 3,000</p>
                </div>

                <div className="bg-surface p-6 rounded-lg">
                  <h4 className="font-playfair text-green font-semibold text-lg mb-2">Fast Stitching (2-3 Days)</h4>
                  <p className="font-inter text-text-muted text-sm mb-3">
                    Rush orders for urgent events or last-minute needs.
                  </p>
                  <p className="font-inter text-gold font-medium">+Rs. 500 extra</p>
                </div>
              </div>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                Why Blue Area Professionals Choose DarziDoor
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4 items-start">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <h4 className="font-inter font-semibold text-green mb-1">Time-Saving Convenience</h4>
                    <p className="font-inter text-text-muted text-sm">
                      No need to take time off work. We visit your office during lunch or after hours.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-2xl">👔</span>
                  <div>
                    <h4 className="font-inter font-semibold text-green mb-1">Professional Quality</h4>
                    <p className="font-inter text-text-muted text-sm">
                      Expert tailoring suitable for corporate and government office environments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h4 className="font-inter font-semibold text-green mb-1">Delivery to Your Office</h4>
                    <p className="font-inter text-text-muted text-sm">
                      We deliver your finished outfit directly to your Blue Area office or home.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-inter font-semibold text-green mb-1">Perfect Fit Guarantee</h4>
                    <p className="font-inter text-text-muted text-sm">
                      One free alteration if the fit needs adjustment. We ensure you look sharp.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green/5 border border-green/20 p-6 rounded-lg mb-8">
                <h3 className="font-playfair text-green text-xl font-semibold mb-3">
                  How It Works for Blue Area Customers
                </h3>
                <ol className="font-inter text-text-primary space-y-3">
                  <li className="flex gap-3">
                    <span className="font-bold text-gold min-w-[24px]">1.</span>
                    <span><strong>WhatsApp us</strong> with your office/building name and floor</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold min-w-[24px]">2.</span>
                    <span><strong>Choose timing</strong> — we schedule during lunch, after hours, or at your home</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold min-w-[24px]">3.</span>
                    <span><strong>Quick measurement</strong> — our tailor visits, takes measurements (10 minutes)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold min-w-[24px]">4.</span>
                    <span><strong>We stitch professionally</strong> — quality-checked before delivery</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold min-w-[24px]">5.</span>
                    <span><strong>Delivered to you</strong> in 5–7 days at your office or home</span>
                  </li>
                </ol>
              </div>

              <h3 className="font-playfair text-green text-2xl font-semibold mb-4 mt-8">
                Common Questions - Blue Area Service
              </h3>
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-inter font-semibold text-green mb-2">Can you visit during office hours?</h4>
                  <p className="font-inter text-text-muted text-sm">Yes! We can visit during lunch break (quick 10-minute measurement) or schedule after your work hours.</p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-green mb-2">I need office-appropriate shalwar kameez. What do you recommend?</h4>
                  <p className="font-inter text-text-muted text-sm">We recommend straight-cut kameez in khaddar or cotton, mid-length, with subtle colors or patterns. Professional yet comfortable.</p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-green mb-2">What about fabric — can you source it?</h4>
                  <p className="font-inter text-text-muted text-sm">Yes! Bring your own fabric or we can arrange quality fabric at market rates. We'll guide you on what works best for office wear.</p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-green mb-2">Do you have a female tailor for ladies?</h4>
                  <p className="font-inter text-text-muted text-sm">Yes, female tailor available for ladies' measurements. Just mention your preference when booking.</p>
                </div>
              </div>

              <div className="text-center bg-green text-white p-10 rounded-lg mt-12">
                <h3 className="font-playfair text-2xl font-bold mb-2">
                  Book Your Blue Area Visit Today
                </h3>
                <p className="font-urdu text-gold text-2xl leading-loose mb-4" dir="rtl" lang="ur">
                  آج ہی بلیو ایریا میں وزٹ بک کریں
                </p>
                <p className="font-inter text-lg mb-6 text-white/90">
                  Professional tailoring for busy professionals
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
