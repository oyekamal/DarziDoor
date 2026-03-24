import Image from "next/image";
import Link from "next/link";
import { WA_LINK } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-[60] bg-green px-6 py-4 flex items-center justify-between"
      aria-label="Main navigation"
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/darzi-door-removebg-preview.png"
          alt="DarziDoor — Custom Tailoring"
          width={140}
          height={50}
          priority
          className="h-10 w-auto"
        />
      </Link>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gold text-white text-sm font-medium px-5 py-3 rounded-full min-h-[48px] flex items-center hover:opacity-90 transition-opacity"
      >
        Book on WhatsApp
      </a>
    </nav>
  );
}
