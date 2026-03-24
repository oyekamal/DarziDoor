import { WA_LINK } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="bg-bg py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-playfair text-green text-3xl md:text-4xl font-semibold mb-4">
          Ready for Your Perfect Fit?
        </h2>
        <p className="font-inter text-text-muted text-base mb-10">
          Available 9am – 8pm, 7 days a week. We reply within 1 hour.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white font-inter font-medium text-base px-8 py-4 rounded-full min-h-[52px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span aria-hidden="true">💬</span>
            Chat on WhatsApp
          </a>

          <a
            href="tel:+923360506129"
            className="border-2 border-green text-green font-inter font-medium text-base px-8 py-4 rounded-full min-h-[52px] flex items-center justify-center gap-2 hover:bg-green hover:text-white transition-colors"
          >
            <span aria-hidden="true">📞</span>
            0336-0506129
          </a>
        </div>
      </div>
    </section>
  );
}
