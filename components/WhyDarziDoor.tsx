const reasons = [
  {
    icon: "💳",
    title: "Rs. 200 Visit — That's All",
    titleUrdu: "صرف ۲۰۰ روپے وزٹ فیس",
    desc: "We charge only Rs. 200 for the home measurement and delivery. No hidden costs, no surprises.",
  },
  {
    icon: "✂️",
    title: "One Free Alteration, Guaranteed",
    titleUrdu: "ایک مفت ترمیم کی ضمانت",
    desc: "If the fit isn't perfect, we fix it at no charge. Your satisfaction is non-negotiable.",
  },
  {
    icon: "👩",
    title: "Female Tailor Available",
    titleUrdu: "خاتون درزی دستیاب",
    desc: "Ladies can request a female tailor for home measurements. Just mention it when booking.",
  },
  {
    icon: "💰",
    title: "Pay Only on Delivery",
    titleUrdu: "ڈیلیوری پر ادائیگی",
    desc: "No advance payment on your first order. Cash on delivery when your outfit arrives.",
  },
  {
    icon: "📐",
    title: "Precision in 15 Minutes",
    titleUrdu: "۱۵ منٹ میں درست پیمائش",
    desc: "Our tailors use a professional measurement form — quick, comfortable, and accurate.",
  },
  {
    icon: "🏡",
    title: "We Come to You",
    titleUrdu: "ہم آپ کے پاس آتے ہیں",
    desc: "No trips to the bazaar, no waiting rooms. We visit your home at a time that suits you.",
  },
];

export default function WhyDarziDoor() {
  return (
    <section id="why-us" className="bg-bg py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-playfair text-green text-3xl md:text-4xl font-semibold">
            Why DarziDoor?
          </h2>
          <p className="font-urdu text-gold text-2xl md:text-3xl leading-loose mt-1" dir="rtl" lang="ur">
            ڈارزی ڈور کیوں؟
          </p>
          <p className="font-inter text-text-muted text-base mt-4 max-w-xl mx-auto">
            We built DarziDoor to remove every excuse not to get perfectly fitted clothes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-surface rounded-xl p-7 flex flex-col gap-3 border border-green/5 hover:border-gold/30 transition-colors"
            >
              <span className="text-3xl" aria-hidden="true">{r.icon}</span>
              <div>
                <h3 className="font-playfair text-green text-lg font-semibold leading-snug">
                  {r.title}
                </h3>
                <p className="font-urdu text-gold text-base leading-loose" dir="rtl" lang="ur">
                  {r.titleUrdu}
                </p>
              </div>
              <p className="font-inter text-text-muted text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
