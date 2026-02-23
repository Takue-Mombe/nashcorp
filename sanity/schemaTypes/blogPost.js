import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(8).max(160),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 120 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      validation: (rule) => rule.required().min(3).max(40),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(40).max(240),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      initialValue: "5 min read",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "contentHtml",
      title: "Content (HTML)",
      type: "text",
      rows: 20,
      validation: (rule) => rule.required().min(80),
      description:
        "Stored as HTML because the frontend currently renders `contentHtml` directly.",
    }),
  ],
  orderings: [
    {
      title: "Publish Date (new)",
      name: "publishedDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tag",
      media: "mainImage",
    },
  },
});
