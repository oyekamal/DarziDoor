import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
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
        </div>

        <div className="flex flex-col items-center sm:items-end gap-2">
          <Link
            href="/privacy"
            className="font-inter text-white/60 text-xs hover:text-gold transition-colors"
          >
            Privacy Policy
          </Link>
          <p className="font-inter text-white/40 text-xs">
            © {new Date().getFullYear()} DarziDoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
