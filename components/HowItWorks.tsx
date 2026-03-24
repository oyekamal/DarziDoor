const steps = [
  {
    number: "1",
    title: "Contact Us via WhatsApp",
    titleUrdu: "واٹس ایپ پر رابطہ کریں",
    description:
      "Message us with your name, area, and what you need. We confirm your appointment within 1 hour.",
  },
  {
    number: "2",
    title: "We Visit Your Home",
    titleUrdu: "ہم آپ کے گھر آتے ہیں",
    description:
      "Our tailor visits at your scheduled time. Precise measurements taken in 10–15 minutes — comfortable and professional.",
  },
  {
    number: "3",
    title: "Stitched & Delivered in 5–7 Days",
    titleUrdu: "۵ سے ۷ دنوں میں سلائی و ڈیلیوری",
    description:
      "Your outfit is carefully stitched and quality-checked, then delivered to your door. One free alteration if needed.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-playfair text-green text-3xl md:text-4xl font-semibold">
            How It Works
          </h2>
          <p className="font-urdu text-gold text-2xl md:text-3xl leading-loose mt-1" dir="rtl" lang="ur">
            یہ کیسے کام کرتا ہے
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center text-white font-playfair text-xl font-bold mb-5 flex-shrink-0">
                {step.number}
              </div>
              <h3 className="font-playfair text-green text-xl font-semibold mb-1">
                {step.title}
              </h3>
              <p className="font-urdu text-gold text-lg leading-loose mb-2" dir="rtl" lang="ur">
                {step.titleUrdu}
              </p>
              <p className="font-inter text-text-muted text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
