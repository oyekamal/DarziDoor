import Image from "next/image";

const services = [
  {
    image: "/service-mens.png",
    name: "Men's Shalwar Kameez",
    nameUrdu: "مردانہ شلوار قمیض",
    description:
      "Formal and casual cuts for men — perfectly tailored to your measurements.",
    price: "from Rs. 2,200",
    waMessage: "Hi%2C%20I%27d%20like%20to%20book%20Men%27s%20Shalwar%20Kameez%20stitching",
  },
  {
    image: "/service-womens.png",
    name: "Women's Shalwar Kameez",
    nameUrdu: "خواتین کی شلوار قمیض",
    description:
      "Lawn, khaddar, silk & party wear for women — stitched exactly as you like.",
    price: "from Rs. 2,500",
    waMessage: "Hi%2C%20I%27d%20like%20to%20book%20Women%27s%20Shalwar%20Kameez%20stitching",
  },
  {
    image: "/service-wedding.png",
    name: "Wedding Wear",
    nameUrdu: "شادی کا لباس",
    description:
      "Sherwani, bridal wear, mehndi outfits & matching family suits — book early.",
    price: "from Rs. 4,500",
    waMessage: "Hi%2C%20I%27d%20like%20to%20enquire%20about%20Wedding%20Wear%20stitching",
  },
  {
    image: "/service-alterations.png",
    name: "Alterations",
    nameUrdu: "ترمیم و مرمت",
    description:
      "Quick fixes, size adjustments & repairs — in & out in 2–3 days.",
    price: "from Rs. 1,300",
    waMessage: "Hi%2C%20I%27d%20like%20to%20book%20an%20Alteration",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-playfair text-green text-3xl md:text-4xl font-semibold">
            Our Services
          </h2>
          <p className="font-urdu text-gold text-2xl md:text-3xl leading-loose mt-1" dir="rtl" lang="ur">
            ہماری خدمات
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-bg border-t-4 border-gold rounded-xl overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-7 flex flex-col gap-4 flex-1">
              <div>
                <h3 className="font-playfair text-green text-xl font-semibold mb-1">
                  {service.name}
                </h3>
                <p className="font-urdu text-gold text-lg leading-loose mb-1" dir="rtl" lang="ur">
                  {service.nameUrdu}
                </p>
                <p className="font-inter text-text-muted text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <p className="font-inter text-gold font-medium text-sm">
                  {service.price}
                </p>
              </div>
              <a
                href={`https://wa.me/923360506129?text=${service.waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center bg-green text-white font-inter font-medium text-sm px-5 py-3 rounded-full min-h-[48px] hover:opacity-90 transition-opacity w-fit"
              >
                Book This
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
