import UrgencyBanner from "@/components/UrgencyBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import WhyDarziDoor from "@/components/WhyDarziDoor";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import ReferralOffer from "@/components/ReferralOffer";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <UrgencyBanner />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Services />
        <WhyDarziDoor />
        <Pricing />
        <Testimonials />
        <BlogPreview />
        <ReferralOffer />
        <FAQ />
        <Contact />
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  );
}
