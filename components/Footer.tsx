"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Top Section with Logo and Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Logo Section */}
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
            <p className="font-urdu text-gold/80 text-base leading-loose" dir="rtl" lang="ur">
              آپ کی پرفیکٹ فٹنگ، آپ کے دروازے تک
            </p>
          </div>

          {/* Service Areas */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <h3 className="font-inter text-white font-semibold text-sm mb-1">Service Areas</h3>
            <Link href="/bahria-town-tailor" className="font-inter text-white/70 text-xs hover:text-gold transition-colors">
              Bahria Town Islamabad
            </Link>
            <Link href="/rawalpindi-tailor" className="font-inter text-white/70 text-xs hover:text-gold transition-colors">
              Rawalpindi Areas
            </Link>
            <Link href="/saddar-tailor" className="font-inter text-white/70 text-xs hover:text-gold transition-colors">
              Saddar Rawalpindi
            </Link>
            <Link href="/blue-area-tailor" className="font-inter text-white/70 text-xs hover:text-gold transition-colors">
              Blue Area Islamabad
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <h3 className="font-inter text-white font-semibold text-sm mb-1">Quick Links</h3>
            <Link href="/blog" className="font-inter text-white/70 text-xs hover:text-gold transition-colors">
              Tailoring Blog & Tips
            </Link>
            <Link href="/#services" className="font-inter text-white/70 text-xs hover:text-gold transition-colors">
              Our Services
            </Link>
            <Link href="/#pricing" className="font-inter text-white/70 text-xs hover:text-gold transition-colors">
              Pricing
            </Link>
            <Link href="/privacy" className="font-inter text-white/70 text-xs hover:text-gold transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="font-inter text-white/40 text-xs">
            © {new Date().getFullYear()} DarziDoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
