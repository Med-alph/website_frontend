import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG, getCanonicalUrl } from '@/config/seo';

/**
 * Reusable SEO component for consistent meta tags across all pages.
 * Implements senior-level SEO: title, description, canonical, OG, Twitter, JSON-LD.
 *
 * @param {string} title - Page title (50-60 chars optimal)
 * @param {string} description - Meta description (150-160 chars optimal)
 * @param {string} [canonicalPath] - Path for canonical URL (e.g. '/about')
 * @param {string} [image] - OG/Twitter image URL
 * @param {object|object[]} [jsonLd] - Structured data (SoftwareApplication, Organization, etc.)
 * @param {boolean} [noindex] - Set noindex,nofollow for non-indexable pages
 * @param {string} [articleType] - og:type override (default: website)
 */
export default function SEO({
  title,
  description,
  canonicalPath = '/',
  image = SEO_CONFIG.ogImage,
  jsonLd,
  noindex = false,
  articleType = 'website',
}) {
  const canonicalUrl = getCanonicalUrl(canonicalPath);
  const fullTitle = title.includes('Medalph') || title.includes('MedAlph') ? title : `${title} | ${SEO_CONFIG.siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={articleType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={String(SEO_CONFIG.ogImageWidth)} />
      <meta property="og:image:height" content={String(SEO_CONFIG.ogImageHeight)} />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      <meta property="og:locale" content={SEO_CONFIG.locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {SEO_CONFIG.twitterHandle && (
        <meta name="twitter:site" content={SEO_CONFIG.twitterHandle} />
      )}

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
