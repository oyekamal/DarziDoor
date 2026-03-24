const WA_LINK =
  "https://wa.me/923360506129?text=Hi%2C%20I%27d%20like%20to%20book%20a%20measurement";

const prices = [
  { service: "Gents Shalwar Kameez", price: "Rs. 1,200" },
  { service: "Ladies Shalwar Kameez", price: "Rs. 1,500" },
  { service: "Kurta (simple)", price: "Rs. 800" },
  { service: "Silk / Party Suit", price: "Rs. 2,000" },
  { service: "Embroidered Suit", price: "Rs. 2,500+" },
  { service: "Sherwani", price: "Rs. 3,500+" },
  { service: "Alteration (simple)", price: "Rs. 300" },
  { service: "Gharara / Sharara", price: "Rs. 2,000+" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-green py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-playfair text-white text-3xl md:text-4xl font-semibold text-center mb-14">
          Pricing
        </h2>

        <div className="rounded-xl overflow-hidden border border-white/20">
          <table className="w-full font-inter">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left text-white/60 text-sm font-medium px-6 py-4">
                  Service
                </th>
                <th className="text-right text-white/60 text-sm font-medium px-6 py-4">
                  Starting Price
                </th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row, i) => (
                <tr
                  key={row.service}
                  className={`border-b border-white/10 last:border-0 ${
                    i % 2 === 0 ? "bg-white/5" : ""
                  }`}
                >
                  <td className="text-white text-sm px-6 py-4">{row.service}</td>
                  <td className="text-gold text-sm font-medium text-right px-6 py-4">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-white/60 text-sm text-center mt-6 font-inter">
          Prices vary based on fabric type, design complexity, and embellishments.{" "}
          <a href={WA_LINK} className="text-gold underline">
            Message us for a free quote.
          </a>
        </p>

        <p className="text-gold text-sm text-center mt-3 font-inter font-medium">
          ⚡ Eid & wedding season slots fill up fast — book at least 2 weeks in advance.
        </p>
      </div>
    </section>
  );
}
