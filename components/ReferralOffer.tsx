const shareText = encodeURIComponent(
  "Get your shalwar kameez stitched at home! DarziDoor visits, measures & delivers in Islamabad & Rawalpindi. Use my referral for Rs. 200 off: https://darzidoor.com"
);
const shareLink = `https://wa.me/?text=${shareText}`;

export default function ReferralOffer() {
  return (
    <section className="bg-green py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-4xl mb-5 block" aria-hidden="true">🎁</span>

        <h2 className="font-playfair text-white text-3xl md:text-4xl font-semibold mb-2">
          Refer a Friend — You Both Save
        </h2>
        <p className="font-urdu text-gold text-2xl leading-loose mb-6" dir="rtl" lang="ur">
          دوست کو بتائیں — دونوں بچائیں
        </p>

        <p className="font-inter text-white/80 text-base mb-3 max-w-lg mx-auto">
          Share DarziDoor with a friend. When they book their first order, you both get{" "}
          <strong className="text-gold">Rs. 200 off</strong> your next stitching.
        </p>
        <p className="font-urdu text-white/60 text-lg leading-loose mb-10" dir="rtl" lang="ur">
          اپنے دوست کو DarziDoor کے بارے میں بتائیں اور دونوں کو ۲۰۰ روپے کی چھوٹ ملے گی
        </p>

        <a
          href={shareLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gold text-white font-inter font-semibold px-8 py-4 rounded-full text-base min-h-[52px] hover:opacity-90 transition-opacity"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.849L.072 23.547a.5.5 0 00.609.61l5.84-1.507A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.504-5.24-1.385l-.374-.216-3.875.999 1.033-3.77-.237-.389A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Share on WhatsApp
        </a>

        <p className="font-inter text-white/40 text-xs mt-6">
          Discount applied automatically when your referral books their first order.
        </p>
      </div>
    </section>
  );
}
