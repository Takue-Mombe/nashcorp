import type { MetadataRoute } from "next";
import { getBlogPosts, getPortfolioItems } from "@/lib/cms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://tinashegore.com";
  const portfolioItems = await getPortfolioItems();
  const blogPosts = await getBlogPosts();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...portfolioItems.map((item) => ({
      url: `${baseUrl}/portfolio/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
