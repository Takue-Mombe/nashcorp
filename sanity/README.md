# Sanity schema files

These schema files are ready to paste into your Sanity Studio project.

## Files

- `sanity/schemaTypes/siteSettings.js`
- `sanity/schemaTypes/portfolioProject.js`
- `sanity/schemaTypes/blogPost.js`
- `sanity/schemaTypes/enquiry.js`
- `sanity/schemaTypes/index.js`

## Connect in Sanity Studio

In your Sanity Studio `sanity.config.ts`:

```ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Tinashe Gore Studio",
  projectId: "yourProjectId",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
```

Then run your Studio and create:

- one `siteSettings` document
- `portfolioProject` documents
- `blogPost` documents

`enquiry` documents are created automatically by the Next.js contact API.

## Security notes

- Keep `SANITY_API_WRITE_TOKEN` server-only
- Use Sanity user roles (Admin/Editor) for content management
- Rotate tokens periodically
