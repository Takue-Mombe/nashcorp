# Free CMS Setup (Sanity)

This project already works without a CMS using local data in `data/content.ts`.

To switch to a free hosted CMS, use Sanity's free tier.

## 1) Create a free Sanity project

```bash
npm create sanity@latest
```

Pick:
- **Project type**: Clean project
- **Dataset**: `production`
- **Output path**: any folder (outside this app is fine)

## 2) Add schema files to Sanity Studio

Copy the files from this repo into your Studio project:

- `sanity/schemaTypes/siteSettings.js`
- `sanity/schemaTypes/portfolioProject.js`
- `sanity/schemaTypes/blogPost.js`
- `sanity/schemaTypes/enquiry.js`
- `sanity/schemaTypes/index.js`

These provide:
- `siteSettings` for business contact/social links
- `portfolioProject` for portfolio items
- `blogPost` for journal posts
- `enquiry` for incoming leads from the website form

## 3) Add environment values

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_READ_TOKEN=your_read_or_editor_token
SANITY_API_WRITE_TOKEN=your_editor_token
```

Use tokens only in `.env.local` or Vercel env vars.
Do not commit tokens.

## 4) Auth and permissions (for content team)

Use Sanity's built-in auth instead of custom app auth:

- Add users in Sanity project settings
- Assign **Administrator** to owner
- Assign **Editor** to staff who manage content
- Keep API write token server-only (`SANITY_API_WRITE_TOKEN`)
- Rotate tokens periodically and immediately if exposed

## 5) Run the site

```bash
npm run dev
```

When Sanity env vars are present, the app reads portfolio and blog posts from CMS.
If Sanity is not configured or unavailable, it falls back to local content in
`data/content.ts` and `data/blog-posts.ts`.

Contact form behavior:
- Saves enquiry docs to Sanity when `SANITY_API_WRITE_TOKEN` is configured
- Sends email when SMTP vars are configured
- Works if either storage path is available
