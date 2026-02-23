import { defineField, defineType } from "sanity";

export const enquiry = defineType({
  name: "enquiry",
  title: "Enquiry",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "service",
      title: "Service",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 5,
      readOnly: true,
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      initialValue: "website",
      readOnly: true,
    }),
    defineField({
      name: "sourceIp",
      title: "Source IP",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "userAgent",
      title: "User Agent",
      type: "text",
      rows: 2,
      readOnly: true,
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      readOnly: true,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "new",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "Qualified", value: "qualified" },
          { title: "Closed", value: "closed" },
          { title: "Spam", value: "spam" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "notes",
      title: "Internal Notes",
      type: "text",
      rows: 4,
    }),
  ],
  orderings: [
    {
      title: "Newest First",
      name: "submittedDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
      status: "status",
      submittedAt: "submittedAt",
    },
    prepare({ title, subtitle, status, submittedAt }) {
      const date = submittedAt ? new Date(submittedAt).toLocaleDateString() : "No date";
      return {
        title: title || "Enquiry",
        subtitle: `${subtitle || "No email"} • ${status || "new"} • ${date}`,
      };
    },
  },
});
