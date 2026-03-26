import { useEffect } from "react";
import { siteConfig, toAbsoluteUrl } from "../lib/seo";

const MANAGED_SELECTORS = [
  'meta[name="description"]',
  'meta[name="keywords"]',
  'meta[name="robots"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[property="og:type"]',
  'meta[property="og:url"]',
  'meta[property="og:image"]',
  'meta[name="twitter:card"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
  'meta[name="twitter:image"]',
  'link[rel="canonical"]',
  'script[data-seo-jsonld="true"]',
];

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function upsertJsonLd(schema) {
  const existing = document.head.querySelector('script[data-seo-jsonld="true"]');

  if (existing) {
    existing.remove();
  }

  if (!schema) {
    return;
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.dataset.seoJsonld = "true";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export default function Seo({
  title,
  description = siteConfig.defaultDescription,
  path = "/",
  image = siteConfig.defaultImage,
  type = "website",
  keywords = siteConfig.keywords,
  schema,
}) {
  useEffect(() => {
    const canonicalUrl = toAbsoluteUrl(path);
    const imageUrl = toAbsoluteUrl(image);
    const fullTitle = title || siteConfig.defaultTitle;

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });

    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: keywords.join(", "),
    });

    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow",
    });

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: fullTitle,
    });

    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });

    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: type,
    });

    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });

    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: fullTitle,
    });

    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });

    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });

    upsertCanonical(canonicalUrl);
    upsertJsonLd(schema);

    return () => {
      for (const selector of MANAGED_SELECTORS) {
        document.head.querySelector(selector)?.remove();
      }
    };
  }, [description, image, keywords, path, schema, title, type]);

  return null;
}
