"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you serve my area?",
    a: "We serve all sectors of Islamabad (F, G, I, E, H) and Rawalpindi (Saddar, Bahria Town, DHA, Gulraiz, Chaklala, Murree Road). Not sure? Just message us!",
  },
  {
    q: "How long does stitching take?",
    a: "Standard delivery is 5–7 working days. Rush orders (2–3 days) available for an extra charge.",
  },
  {
    q: "Do I need to provide my own fabric?",
    a: "You can bring your own fabric or ask us — we can arrange fabric for you at market rates.",
  },
  {
    q: "How do you take measurements at home?",
    a: "Our tailor visits with a measuring tape and measurement form. The process takes 10–15 minutes and is fully comfortable. Female tailor available for ladies on request.",
  },
  {
    q: "What if the fit isn't perfect?",
    a: "We offer one free alteration if the stitching doesn't fit correctly. Your satisfaction is our priority.",
  },
  {
    q: "How do I pay?",
    a: "Cash on delivery when we deliver your outfit. No advance payment required for your first order.",
  },
  {
    q: "Can I order for multiple family members in one visit?",
    a: "Yes! One visit, multiple measurements — saves everyone time.",
  },
  {
    q: "Do you stitch wedding/event wear?",
    a: "Yes, including sherwani, bridal wear, mehndi outfits, and matching family suits. Book early for wedding orders.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-surface py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-playfair text-green text-3xl md:text-4xl font-semibold text-center mb-14">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-bg rounded-xl overflow-hidden border border-green/10">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-inter font-medium text-green text-base min-h-[56px]"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <span
                  className="text-gold flex-shrink-0 transition-transform duration-200"
                  style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="font-inter text-text-muted text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
