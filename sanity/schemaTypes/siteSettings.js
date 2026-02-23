import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "businessName",
      title: "Business Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "streetAddress",
      title: "Street Address",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "countryCode",
      title: "Country Code",
      type: "string",
      initialValue: "ZW",
      validation: (rule) => rule.required().max(2),
    }),
    defineField({
      name: "hours",
      title: "Business Hours",
      type: "string",
      initialValue: "Mon-Fri, 8am - 5pm",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
    }),
    defineField({
      name: "whatsappUrl",
      title: "WhatsApp URL",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "businessName",
      subtitle: "email",
    },
  },
});
