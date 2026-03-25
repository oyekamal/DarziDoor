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
        <h1 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
          Best Shalwar Kameez Tailor in Islamabad & Rawalpindi —<br className="hidden md:block" />
          Custom Stitching at Home
        </h1>
        <p className="font-urdu text-gold text-2xl md:text-3xl leading-loose mb-6" dir="rtl" lang="ur">
          اسلام آباد و راولپنڈی میں بہترین شلوار قمیض درزی — گھر پر سلائی
        </p>

        <p className="text-white/80 text-lg md:text-xl mb-2 font-inter">
          Top-Rated Home Tailoring Service • Saddar • Blue Area • Bahria Town • All Areas
          <br />
          Ladies & Gents Specialist • Fast Stitching • Rs. 200 Visit Fee
        </p>
        <p className="font-urdu text-white/60 text-lg leading-loose mb-10" dir="rtl" lang="ur">
          گھر پر درزی سروس &nbsp;•&nbsp; تمام علاقے &nbsp;•&nbsp; خواتین و حضرات &nbsp;•&nbsp; تیز سلائی
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white font-medium px-8 py-4 rounded-full text-base min-h-[52px] flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <span>Book on WhatsApp</span>
            <span className="font-urdu mr-2 text-sm leading-none" dir="rtl" lang="ur"> — واٹس ایپ پر بک کریں</span>
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
