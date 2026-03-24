import Image from "next/image";
import { WA_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-green flex items-center justify-center min-h-[100svh] px-6 py-20 overflow-hidden"
    >
      {/* Hero background image */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover opacity-30"
        aria-hidden="true"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-green/60" aria-hidden="true" />

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
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
