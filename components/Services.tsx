const WA_LINK =
  "https://wa.me/923360506129?text=Hi%2C%20I%27d%20like%20to%20book%20a%20measurement";

const services = [
  {
    icon: "✂️",
    name: "Men's Shalwar Kameez",
    description:
      "Formal and casual cuts for men — perfectly tailored to your measurements.",
    price: "from Rs. 1,200",
  },
  {
    icon: "🪡",
    name: "Women's Shalwar Kameez",
    description:
      "Lawn, khaddar, silk & party wear for women — stitched exactly as you like.",
    price: "from Rs. 1,500",
  },
  {
    icon: "⭐",
    name: "Wedding Wear",
    description:
      "Sherwani, bridal wear, mehndi outfits & matching family suits — book early.",
    price: "from Rs. 3,500",
  },
  {
    icon: "📐",
    name: "Alterations",
    description:
      "Quick fixes, size adjustments & repairs — in & out in 2–3 days.",
    price: "from Rs. 300",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-playfair text-green text-3xl md:text-4xl font-semibold text-center mb-14">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-bg border-t-4 border-gold rounded-xl p-7 flex flex-col gap-4"
            >
              <span className="text-3xl" aria-hidden="true">
                {service.icon}
              </span>
              <div>
                <h3 className="font-playfair text-green text-xl font-semibold mb-2">
                  {service.name}
                </h3>
                <p className="font-inter text-text-muted text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <p className="font-inter text-gold font-medium text-sm">
                  {service.price}
                </p>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center bg-green text-white font-inter font-medium text-sm px-5 py-3 rounded-full min-h-[44px] hover:opacity-90 transition-opacity w-fit"
              >
                Book This
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
