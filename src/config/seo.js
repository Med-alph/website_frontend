/**
 * Centralized SEO configuration for Medalph
 * Single source of truth for URLs, images, and default metadata
 */
export const SEO_CONFIG = {
  baseUrl: 'https://www.medalph.com',
  siteName: 'Medalph',
  defaultTitle: 'Medalph - Medical Software for Clinics & Healthcare Providers',
  defaultDescription: 'Medalph is practice management software built for clinics and healthcare providers. Manage appointments, patient records, and billing — all in one place. Trusted by healthcare teams.',
  ogImage: 'https://www.medalph.com/og-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterHandle: '@medalph',
  locale: 'en_NZ',
  localeAlternate: 'en',
};

export const getCanonicalUrl = (path = '') => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SEO_CONFIG.baseUrl}${cleanPath === '/' ? '' : cleanPath}`;
};

/** Organization schema - use on key pages or in Layout */
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SEO_CONFIG.siteName,
  url: SEO_CONFIG.baseUrl,
  logo: `${SEO_CONFIG.baseUrl}/images/medalphlogo.jpg`,
  description: SEO_CONFIG.defaultDescription,
});

/** WebSite schema with SearchAction - enables sitelinks search box */
export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SEO_CONFIG.siteName,
  url: SEO_CONFIG.baseUrl,
  description: SEO_CONFIG.defaultDescription,
  publisher: { '@type': 'Organization', name: SEO_CONFIG.siteName, url: SEO_CONFIG.baseUrl },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', url: `${SEO_CONFIG.baseUrl}/contact?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
});

/** SoftwareApplication schema - for product pages */
export const getSoftwareSchema = (overrides = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SEO_CONFIG.siteName,
  url: SEO_CONFIG.baseUrl,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  description: SEO_CONFIG.defaultDescription,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: getOrganizationSchema(),
  ...overrides,
});

/** BreadcrumbList schema - for inner pages */
export const getBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});
