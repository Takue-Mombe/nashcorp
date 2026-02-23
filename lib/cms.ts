import { createClient } from "@sanity/client";
import { cache } from "react";
import { portfolioItems } from "@/data/content";
import { blogPosts } from "@/data/blog-posts";
import { defaultSiteSettings } from "@/data/site-settings";
import type { BlogPost } from "@/data/blog-posts";
import type { PortfolioItem } from "@/data/content";
import type { SiteSettings } from "@/data/site-settings";

type SanityPortfolioItem = {
  slug?: { current?: string };
  title?: string;
  category?: string;
  summary?: string;
  image?: string;
  alt?: string;
};

type SanityBlogPost = {
  slug?: { current?: string };
  title?: string;
  tag?: string;
  excerpt?: string;
  date?: string;
  readTime?: string;
  featured?: boolean;
  image?: string;
  contentHtml?: string;
};

type SanitySiteSettings = {
  businessName?: string;
  siteUrl?: string;
  email?: string;
  phone?: string;
  streetAddress?: string;
  city?: string;
  countryCode?: string;
  hours?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  whatsappUrl?: string;
};

type SanityClientOptions = {
  token?: string;
};

function getBaseConfig() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";

  if (!projectId || !dataset) {
    return null;
  }

  return { projectId, dataset, apiVersion };
}

function getClient(options: SanityClientOptions = {}) {
  const base = getBaseConfig();

  if (!base) {
    return null;
  }

  const token = options.token ?? process.env.SANITY_API_READ_TOKEN;

  return createClient({
    ...base,
    token,
    useCdn: !token,
  });
}

export function getWriteClient() {
  const writeToken = process.env.SANITY_API_WRITE_TOKEN;

  if (!writeToken) {
    return null;
  }

  return getClient({ token: writeToken });
}

const portfolioQuery = `*[_type == "portfolioProject"] | order(_updatedAt desc){
  title,
  category,
  summary,
  "slug": slug,
  "image": mainImage.asset->url,
  "alt": coalesce(mainImage.alt, title)
}`;

const blogQuery = `*[_type == "blogPost"] | order(publishedAt desc){
  title,
  tag,
  excerpt,
  "date": publishedAt,
  readTime,
  featured,
  "slug": slug,
  "image": mainImage.asset->url,
  contentHtml
}`;

const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  businessName,
  siteUrl,
  email,
  phone,
  streetAddress,
  city,
  countryCode,
  hours,
  instagramUrl,
  facebookUrl,
  whatsappUrl
}`;

function mapSanityPortfolioItem(item: SanityPortfolioItem): PortfolioItem | null {
  if (!item.slug?.current || !item.title || !item.category || !item.summary || !item.image) {
    return null;
  }

  return {
    slug: item.slug.current,
    title: item.title,
    category: item.category,
    summary: item.summary,
    image: item.image,
    alt: item.alt ?? item.title,
  };
}

function mapSanityBlogPost(item: SanityBlogPost): BlogPost | null {
  if (!item.slug?.current || !item.title || !item.tag || !item.excerpt || !item.date) {
    return null;
  }

  return {
    slug: item.slug.current,
    title: item.title,
    tag: item.tag,
    excerpt: item.excerpt,
    date: item.date,
    readTime: item.readTime ?? "5 min read",
    featured: item.featured ?? false,
    image: item.image ?? "/portfolio/pexels-cottonbro-6568684.jpg",
    contentHtml:
      item.contentHtml ?? `<p>${item.excerpt}</p><p>Article content coming soon.</p>`,
  };
}

function mapSiteSettings(item: SanitySiteSettings | null): SiteSettings {
  if (!item) {
    return defaultSiteSettings;
  }

  return {
    businessName: item.businessName ?? defaultSiteSettings.businessName,
    siteUrl: item.siteUrl ?? defaultSiteSettings.siteUrl,
    email: item.email ?? defaultSiteSettings.email,
    phone: item.phone ?? defaultSiteSettings.phone,
    streetAddress: item.streetAddress ?? defaultSiteSettings.streetAddress,
    city: item.city ?? defaultSiteSettings.city,
    countryCode: item.countryCode ?? defaultSiteSettings.countryCode,
    hours: item.hours ?? defaultSiteSettings.hours,
    instagramUrl: item.instagramUrl ?? defaultSiteSettings.instagramUrl,
    facebookUrl: item.facebookUrl ?? defaultSiteSettings.facebookUrl,
    whatsappUrl: item.whatsappUrl ?? defaultSiteSettings.whatsappUrl,
  };
}

export const getPortfolioItems = cache(async (): Promise<PortfolioItem[]> => {
  const client = getClient();

  if (!client) {
    return portfolioItems;
  }

  try {
    const items = await client.fetch<SanityPortfolioItem[]>(portfolioQuery);
    const mapped = items.map(mapSanityPortfolioItem).filter((item) => item !== null);
    return mapped.length > 0 ? mapped : portfolioItems;
  } catch {
    return portfolioItems;
  }
});

export async function getPortfolioItemBySlug(
  slug: string,
): Promise<PortfolioItem | undefined> {
  const items = await getPortfolioItems();
  return items.find((item) => item.slug === slug);
}

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const client = getClient();

  if (!client) {
    return blogPosts;
  }

  try {
    const items = await client.fetch<SanityBlogPost[]>(blogQuery);
    const mapped = items.map(mapSanityBlogPost).filter((item) => item !== null);
    return mapped.length > 0 ? mapped : blogPosts;
  } catch {
    return blogPosts;
  }
});

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  const client = getClient();

  if (!client) {
    return defaultSiteSettings;
  }

  try {
    const settings = await client.fetch<SanitySiteSettings | null>(siteSettingsQuery);
    return mapSiteSettings(settings);
  } catch {
    return defaultSiteSettings;
  }
});
