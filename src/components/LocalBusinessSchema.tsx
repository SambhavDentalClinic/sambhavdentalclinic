import { Helmet } from "react-helmet-async";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://sambhavdentalclinic.com/#dentist",
    name: "Sambhav Dental Clinic",
    alternateName: "Sambhav Dental Care Hinjewadi",
    description:
      "Sambhav Dental Clinic in Hinjewadi, Pune offers gentle, painless dental care including general dentistry, cosmetic procedures, root canal treatment, dental implants, and orthodontics by Dr. Priyanka Kaushal with 20+ years of experience.",
    url: "https://sambhavdentalclinic.com",
    telephone: "+91-8237100519",
    email: "sambhavdentalclinic@gmail.com",
    image: "https://sambhavdentalclinic.com/og-image.jpg",
    logo: "https://sambhavdentalclinic.com/logo.jpg",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Metrostation, Jambhulkar Complex, Shivaji Chowk",
      addressLocality: "Hinjewadi",
      addressRegion: "Pune",
      postalCode: "411057",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5912",
      longitude: "73.7389",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
    },
    founder: {
      "@type": "Person",
      name: "Dr. Priyanka Kaushal",
      jobTitle: "BDS, MDS - Dentist",
      description: "20+ years experienced dentist specializing in painless dental care",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Root Canal Treatment",
            description: "Painless root canal therapy to save infected teeth",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dental Implants",
            description: "Permanent tooth replacement solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Teeth Whitening",
            description: "Professional teeth whitening for a brighter smile",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Orthodontics",
            description: "Braces and Invisalign for teeth alignment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "General Dentistry",
            description: "Routine checkups, cleaning, and dental fillings",
          },
        },
      ],
    },
    sameAs: [
      "https://www.google.com/maps/place/Sambhav+Dental+Clinic",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Pune",
      },
      {
        "@type": "Place",
        name: "Hinjewadi",
      },
      {
        "@type": "Place",
        name: "Wakad",
      },
      {
        "@type": "Place",
        name: "Pimple Saudagar",
      },
    ],
    keywords: [
      "dentist hinjewadi",
      "dental clinic pune",
      "best dentist pune",
      "root canal hinjewadi",
      "dental implants pune",
      "teeth whitening pune",
      "painless dentist pune",
      "orthodontist hinjewadi",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
