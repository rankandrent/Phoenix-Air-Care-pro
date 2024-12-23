import { seoConfig } from '../../utils/seoConfig';

export const generateSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://phoenixaircare.com",
  name: seoConfig.company.name,
  image: "https://phoenixaircare.com/logo.png",
  telephone: seoConfig.company.phone,
  email: seoConfig.company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: seoConfig.company.address.street,
    addressLocality: seoConfig.company.address.city,
    addressRegion: seoConfig.company.address.state,
    postalCode: seoConfig.company.address.postalCode,
    addressCountry: seoConfig.company.address.country
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: seoConfig.company.geo.latitude,
    longitude: seoConfig.company.geo.longitude
  },
  areaServed: seoConfig.company.servicedZipCodes.map(zip => ({
    "@type": "PostalCodeRangeSpecification",
    postalCode: zip
  })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    opens: "00:00",
    closes: "23:59"
  },
  sameAs: seoConfig.company.socialLinks,
  priceRange: "$$"
});