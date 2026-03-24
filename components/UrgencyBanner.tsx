"use client";

import { useState } from "react";
import { WA_LINK } from "@/lib/constants";

export default function UrgencyBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="bg-gold text-white text-sm font-inter py-2.5 px-6 flex items-center justify-center gap-2 relative">
      <span aria-hidden="true">⚡</span>
      <span>
        Eid slots filling fast —{" "}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold hover:text-white/80 transition-colors"
        >
          Book now on WhatsApp
        </a>
      </span>
      <span className="font-urdu text-white/80 text-base leading-none mr-6" dir="rtl" lang="ur">
        — عید کی سلاٹ تیزی سے بھر رہی ہیں
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-xl leading-none p-1"
        aria-label="Dismiss banner"
      >
        ×
      </button>
    </div>
  );
}
