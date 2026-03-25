export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ClothingStore", "TailorShop"],
  name: "DarziDoor",
  alternateName: "Darzi Door",
  description:
    "Custom shalwar kameez stitching with home pickup and delivery in Islamabad and Rawalpindi. Expert tailoring for men's and women's clothing, wedding wear, and alterations.",
  telephone: "+923360506129",
  url: "https://darzi-door.vercel.app",
  image: "https://darzi-door.vercel.app/darzi-door.png",
  logo: {
    "@type": "ImageObject",
    url: "https://darzi-door.vercel.app/darzi-door.png",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Islamabad",
      "@id": "https://en.wikipedia.org/wiki/Islamabad",
    },
    {
      "@type": "City",
      name: "Rawalpindi",
      "@id": "https://en.wikipedia.org/wiki/Rawalpindi",
    },
  ],
  openingHours: "Mo-Su 09:00-20:00",
  priceRange: "₨₨",
  paymentAccepted: "Cash",
  currenciesAccepted: "PKR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressRegion: "Islamabad Capital Territory",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "33.6844",
    longitude: "73.0479",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
    bestRating: "5",
    worstRating: "1",
  },
  serviceType: ["Tailor", "Custom Clothing", "Alterations", "Wedding Dress"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tailoring Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Men's Shalwar Kameez Stitching",
          description: "Custom stitched men's shalwar kameez with home measurement and delivery",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Women's Shalwar Kameez Stitching",
          description: "Custom stitched women's shalwar kameez with home measurement and delivery",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding Wear Stitching",
          description: "Custom wedding dress, sherwani, and bridal wear stitching",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Clothing Alterations",
          description: "Professional clothing alterations and repairs",
        },
      },
    ],
  },
  sameAs: [
    "https://wa.me/923360506129",
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you serve my area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all sectors of Islamabad (F, G, I, E, H) and Rawalpindi (Saddar, Bahria Town, DHA, Gulraiz, Chaklala, Murree Road). Not sure? Just message us!",
      },
    },
    {
      "@type": "Question",
      name: "How long does stitching take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard delivery is 5–7 working days. Rush orders (2–3 days) available for an extra charge.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to provide my own fabric?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can bring your own fabric or ask us — we can arrange fabric for you at market rates.",
      },
    },
    {
      "@type": "Question",
      name: "How do you take measurements at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our tailor visits with a measuring tape and measurement form. The process takes 10–15 minutes and is fully comfortable. Female tailor available for ladies on request.",
      },
    },
    {
      "@type": "Question",
      name: "What if the fit isn't perfect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer one free alteration if the stitching doesn't fit correctly. Your satisfaction is our priority.",
      },
    },
    {
      "@type": "Question",
      name: "How do I pay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cash on delivery when we deliver your outfit. No advance payment required for your first order.",
      },
    },
    {
      "@type": "Question",
      name: "Can I order for multiple family members in one visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! One visit, multiple measurements — saves everyone time.",
      },
    },
    {
      "@type": "Question",
      name: "Do you stitch wedding/event wear?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, including sherwani, bridal wear, mehndi outfits, and matching family suits. Book early for wedding orders.",
      },
    },
  ],
};

export function getArticleSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  keyword: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: "https://darzi-door.vercel.app/darzi-door.png",
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "DarziDoor",
      url: "https://darzi-door.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "DarziDoor",
      logo: {
        "@type": "ImageObject",
        url: "https://darzi-door.vercel.app/darzi-door.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://darzi-door.vercel.app/blog/${post.slug}`,
    },
    keywords: [post.keyword, "shalwar kameez", "tailor Islamabad", "custom stitching"],
  };
}

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://darzi-door.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://darzi-door.vercel.app/blog",
    },
  ],
};
