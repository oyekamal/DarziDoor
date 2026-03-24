const stats = [
  { icon: "★", label: "500+ Happy Clients", isUnicode: true },
  { icon: "📍", label: "Islamabad & Rawalpindi", isUnicode: false },
  { icon: "🚚", label: "5–7 Day Delivery", isUnicode: false },
];

export default function TrustBar() {
  return (
    <section className="bg-surface py-6 px-6" aria-label="Trust indicators">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3">
            <span
              className={`text-xl ${stat.isUnicode ? "text-gold" : ""}`}
              aria-hidden="true"
            >
              {stat.icon}
            </span>
            <span className="text-green font-medium font-inter text-base">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
