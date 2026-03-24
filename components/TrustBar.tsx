const stats = [
  { icon: "✂️", label: "1,200+ Suits Stitched", labelUrdu: "۱۲۰۰+ سوٹ سلائی" },
  { icon: "★", label: "4.9★ Avg Rating", labelUrdu: "۴.۹ اوسط ریٹنگ" },
  { icon: "📍", label: "Islamabad & Rawalpindi", labelUrdu: "اسلام آباد و راولپنڈی" },
  { icon: "🚚", label: "5–7 Day Delivery", labelUrdu: "۵ سے ۷ دن ڈیلیوری" },
];

export default function TrustBar() {
  return (
    <section className="bg-surface py-6 px-6" aria-label="Trust indicators">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-3">
            {i > 0 && (
              <span className="hidden sm:block text-green/20 select-none">|</span>
            )}
            <span className="text-xl" aria-hidden="true">{stat.icon}</span>
            <div className="flex flex-col leading-tight">
              <span className="text-green font-semibold font-inter text-sm">
                {stat.label}
              </span>
              <span className="font-urdu text-gold text-xs leading-loose" dir="rtl" lang="ur">
                {stat.labelUrdu}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
