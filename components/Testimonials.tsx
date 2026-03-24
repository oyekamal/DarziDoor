const testimonials = [
  {
    name: "Sara A.",
    area: "F-10, Islamabad",
    review:
      "The fit was perfect on first try. The tailor was professional and the delivery was on time. Highly recommend!",
  },
  {
    name: "Ahmed K.",
    area: "Bahria Town, Islamabad",
    review:
      "Ordered a formal shalwar kameez for Eid. Beautiful stitching and the home visit was so convenient.",
  },
  {
    name: "Fatima R.",
    area: "G-11, Islamabad",
    review:
      "Finally a darzi that comes to you! No more trips to the market. My whole family orders from DarziDoor now.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-playfair text-green text-3xl md:text-4xl font-semibold text-center mb-14">
          What Our Clients Say
        </h2>

        {/* Mobile: horizontal scroll with snap. Desktop: 3-column grid */}
        <div
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-scroll md:overflow-x-visible pb-4 md:pb-0 hide-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface rounded-xl p-7 flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* 5 gold stars */}
              <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className="text-gold text-lg" aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              <p className="font-inter text-text-primary text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.review}&rdquo;
              </p>

              <div>
                <p className="font-inter font-medium text-green text-sm">{t.name}</p>
                <p className="font-inter text-text-muted text-xs">{t.area}</p>
              </div>
            </div>
          ))}

          {/* Spacer on mobile to hint at scroll end */}
          <div className="flex-shrink-0 w-4 md:hidden" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
