import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Life Admin',
  description: 'Practical systems and processes for managing life admin tasks',
  url: 'https://life-admin.uk',
  author: 'Life Admin',
  email: 'hello@life-admin.uk',
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = '/og-image.png',
  canonical,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonical || siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: canonical || siteConfig.url,
    },
  };
}
