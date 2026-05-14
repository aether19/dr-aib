import { useEffect } from 'react';

const SITE_NAME = 'Dr. Aib Amar — Chirurgie Esthétique Alger';
const SITE_URL = 'https://www.chirurgieesthetique-dz.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

interface Props {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: object;
  noIndex?: boolean;
}

function setMeta(attr: 'name' | 'property', key: string, val: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', val);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link') as HTMLLinkElement;
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export default function SEO({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  jsonLd,
  noIndex = false,
}: Props) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Basic
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noIndex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large');

    // OG
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'fr_DZ');

    // Twitter
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    // Canonical
    setLink('canonical', canonicalUrl);

    // JSON-LD
    if (jsonLd) {
      const id = 'seo-jsonld-page';
      let s = document.getElementById(id) as HTMLScriptElement | null;
      if (!s) {
        s = document.createElement('script');
        s.id = id;
        s.type = 'application/ld+json';
        document.head.appendChild(s);
      }
      s.text = JSON.stringify(jsonLd);
    }
  }, [fullTitle, description, canonicalUrl, image, type, noIndex, jsonLd]);

  return null;
}
