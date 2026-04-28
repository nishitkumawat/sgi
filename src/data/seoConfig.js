const SITE_URL = 'https://www.shreegayatri-industries.com'
const BRAND_NAME = 'Shree Gayatri Industries'
const OG_IMAGE = `${SITE_URL}/og-image.jpg`
const PHONE_CEO = '+91 98254 35437'
const PHONE_SALES = '+91 81549 35437'
const PHONE_SUPPORT = '+91 97129 05437'
const EMAIL = 'contact@shreegayatri-industries.com'

export const SEO_CONFIG = {
  siteUrl: SITE_URL,
  brandName: BRAND_NAME,
  ogImage: OG_IMAGE,
  phone: PHONE_SALES,
  email: EMAIL,

  // ─── PER-PAGE SEO ──────────────────────────────────────────
  pages: {
    home: {
      title: `Roll Forming Machine & Solar Structure Manufacturer in India | ${BRAND_NAME}`,
      description: 'Shree Gayatri Industries – Leading manufacturer of roll forming machines, solar mounting structures, C purlin machines, rolling shutter motors & special purpose machines in Ahmedabad, Gujarat, India. Trusted by 500+ clients pan-India.',
      keywords: 'roll forming machine manufacturer india, solar structure manufacturer india, solar mounting structure supplier, C purlin machine, rolling shutter motor, roll forming machine ahmedabad, solar structure manufacturer gujarat, solar epc structure supplier, hat section machine',
      canonical: SITE_URL,
    },
    about: {
      title: `About Shree Gayatri Industries | Roll Forming & Solar Structure Manufacturer Since 2007`,
      description: 'Learn about Shree Gayatri Industries – a trusted manufacturer of roll forming machines and solar structures since 2007. Based in Ahmedabad, Gujarat with 1000+ installations across 20+ Indian states.',
      keywords: 'shree gayatri industries, roll forming manufacturer ahmedabad, solar structure company india, industrial machine manufacturer gujarat',
      canonical: `${SITE_URL}/about`,
    },
    contact: {
      title: `Contact Us – ${BRAND_NAME} | Get Quote for Roll Forming Machines & Solar Structures`,
      description: 'Contact Shree Gayatri Industries for roll forming machines, solar mounting structures, and rolling shutter motors. Located in Ahmedabad, Gujarat. Call +91 81549 35437 for instant quotes.',
      keywords: 'contact shree gayatri industries, roll forming machine ahmedabad, solar structure quote india, industrial machine inquiry',
      canonical: `${SITE_URL}/contact`,
    },
    products: {
      title: `Our Products – Roll Forming Machines & Rolling Shutter Motors | ${BRAND_NAME}`,
      description: 'Browse our complete catalog of roll forming machines, C purlin machines, hat section machines, rolling shutter motors, and industrial automation equipment. Made in Ahmedabad, Gujarat.',
      keywords: 'roll forming machine catalog, C purlin machine price, hat section machine, rolling shutter motor manufacturer, industrial machines india',
      canonical: `${SITE_URL}/products`,
    },
    solarStructure: {
      title: `Solar Structure Manufacturer in India | Solar Mounting Structure Supplier – ${BRAND_NAME}`,
      description: 'Premium solar mounting structures – C Channels, Z Purlins, Hat Sections & Solar Rails manufactured in Gujarat, India. Serving 500+ solar projects. Get competitive quotes from Shree Gayatri Industries.',
      keywords: 'solar structure manufacturer india, solar mounting structure supplier, solar structure manufacturer gujarat, solar epc structure supplier, C channel for solar, Z purlin solar structure, hat section solar, solar mounting rail manufacturer, solar panel structure price',
      canonical: `${SITE_URL}/solar-structure`,
    },
    machines: {
      title: `Roll Forming Machines – C Purlin, Hat Section & Custom Machines | ${BRAND_NAME}`,
      description: 'High-precision roll forming machines including C Purlin, Hat Section, corrugated sheet, and custom profile machines. Manufactured in Ahmedabad with PLC automation and servo drives.',
      keywords: 'roll forming machine manufacturer, C purlin machine price india, hat section roll forming machine, corrugated sheet machine, custom roll forming machine',
      canonical: `${SITE_URL}/machines`,
    },
    motors: {
      title: `Rolling Shutter Motors – Single & Three Phase Gear Motors | ${BRAND_NAME}`,
      description: 'High-quality rolling shutter gear motors for industrial and commercial use. Single phase and three phase motors with remote control and IoT options. Manufactured by Shree Gayatri Industries.',
      keywords: 'rolling shutter motor manufacturer, shutter gear motor, single phase shutter motor, three phase rolling shutter motor, shutter motor india',
      canonical: `${SITE_URL}/motors`,
    },
    blog: {
      title: `Industry Insights & Blog – Roll Forming & Manufacturing Knowledge | ${BRAND_NAME}`,
      description: 'Expert articles on roll forming technology, shutter motor maintenance, PLC automation, and industrial manufacturing best practices from Shree Gayatri Industries.',
      keywords: 'roll forming blog, industrial manufacturing articles, shutter motor maintenance tips, PLC automation insights',
      canonical: `${SITE_URL}/blog`,
    },
  },

  // ─── STRUCTURED DATA ───────────────────────────────────────
  organizationSchema: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND_NAME,
    alternateName: 'SGI',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: 'Leading manufacturer of roll forming machines, solar mounting structures, and rolling shutter motors in Ahmedabad, Gujarat, India.',
    foundingDate: '2007',
    foundingLocation: 'Ahmedabad, Gujarat, India',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: PHONE_SALES,
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
      {
        '@type': 'ContactPoint',
        telephone: PHONE_CEO,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
      {
        '@type': 'ContactPoint',
        telephone: PHONE_SUPPORT,
        contactType: 'technical support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No. 43, Satvabhumi Industrial Estate, Near Kathvada G.I.D.C., Bakrol',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '382430',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.indiamart.com/shree-gayatri-automation-anand/',
      'https://www.tradeindia.com/shree-gayatri-industries-10097291/',
    ],
  },

  localBusinessSchema: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BRAND_NAME,
    image: `${SITE_URL}/favicon.svg`,
    url: SITE_URL,
    telephone: PHONE_SALES,
    email: EMAIL,
    priceRange: '₹₹₹',
    description: 'Manufacturer and supplier of roll forming machines, solar mounting structures, and rolling shutter motors. Serving industrial clients across India since 2007.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No. 43, Satvabhumi Industrial Estate, Near Kathvada G.I.D.C., Bakrol',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '382430',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.9836299,
      longitude: 72.7384789,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    founder: {
      '@type': 'Person',
      name: 'Mr. Ketan Dodiya',
      jobTitle: 'CEO & Proprietor',
    },
  },
}

// Helper to generate product schema
export function getProductSchema(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: BRAND_NAME,
    },
    manufacturer: {
      '@type': 'Organization',
      name: BRAND_NAME,
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/product/${product.slug}`,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: BRAND_NAME,
      },
    },
  }
}

// Helper for blog article schema
export function getArticleSchema(blog) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.excerpt,
    image: blog.image,
    datePublished: blog.date,
    author: {
      '@type': 'Organization',
      name: BRAND_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: BRAND_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${blog.slug}`,
    },
  }
}

// BreadcrumbList schema helper
export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  }
}

// FAQ schema helper
export function getFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question || faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer || faq.a,
      },
    })),
  }
}
