export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DarziDoor",
  description:
    "Custom shalwar kameez stitching with home pickup and delivery in Islamabad and Rawalpindi",
  telephone: "+923360506129",
  url: "https://darzidoor.com",
  image: "https://darzidoor.com/darzi-door.png",
  areaServed: ["Islamabad", "Rawalpindi"],
  openingHours: "Mo-Su 09:00-20:00",
  priceRange: "₨",
  serviceType: "Tailor",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressRegion: "Islamabad Capital Territory",
    addressCountry: "PK",
  },
};
