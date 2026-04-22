import { Helmet } from 'react-helmet-async'
import { SEO_CONFIG } from '../data/seoConfig'

/**
 * Reusable SEO component for dynamic meta tags and structured data.
 * 
 * @param {string} title - Page title
 * @param {string} description - Meta description
 * @param {string} keywords - Comma-separated keywords
 * @param {string} canonical - Canonical URL
 * @param {string} ogImage - Open Graph image URL
 * @param {string} ogType - Open Graph type (default: website)
 * @param {Array} schemas - Array of JSON-LD schema objects
 * @param {boolean} noindex - If true, adds noindex tag
 */
export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  schemas = [],
  noindex = false,
}) {
  const siteUrl = SEO_CONFIG.siteUrl
  const finalOgImage = ogImage || SEO_CONFIG.ogImage
  const finalCanonical = canonical || siteUrl

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={SEO_CONFIG.brandName} />
      <link rel="canonical" href={finalCanonical} />

      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SEO_CONFIG.brandName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalOgImage} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Ahmedabad" />
      <meta name="geo.position" content="22.9836299;72.7384789" />
      <meta name="ICBM" content="22.9836299, 72.7384789" />

      {/* JSON-LD Structured Data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
