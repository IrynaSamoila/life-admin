# Quick Start Guide

## What's Built

A complete static blog with:
- 3 example blog posts about life admin/process optimization
- Home page with recent posts
- Blog index with all posts
- Individual blog post pages with table of contents and related posts
- About and Privacy Policy pages
- RSS feed at `/blog/rss.xml`
- Sitemap and robots.txt for SEO
- Responsive, clean design optimized for readability

## First Steps

### 1. Start Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see your site.

### 2. Customize Site Information

Before deploying, update these files with your information:

**lib/metadata.ts** - Site configuration (already set for life-admin.uk)
```typescript
export const siteConfig = {
  name: 'Life Admin',
  description: 'Practical systems and processes for managing life admin tasks',
  url: 'https://life-admin.uk',
  author: 'Life Admin',
  email: 'hello@life-admin.uk',
};
```

**public/robots.txt** - Sitemap URL (already configured)
```
Sitemap: https://life-admin.uk/sitemap.xml
```

**scripts/generate-sitemap.mjs** - Site URL (already configured)
```javascript
const SITE_URL = 'https://life-admin.uk';
```

### 3. Add Your Blog Posts

Create new `.mdx` files in `content/posts/`:

```mdx
---
title: Your Post Title
date: 2025-03-15
description: Brief description
tags: [tag1, tag2, tag3]
---

Your content here...
```

Delete or modify the example posts in `content/posts/`.

### 4. Customize Content

Edit these pages to match your brand:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/privacy-policy/page.tsx` - Privacy policy

## Build and Deploy

### Build for Production

```bash
npm run build
```

This generates a static site in the `out/` directory.

### Deploy to Vercel

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Vercel auto-detects Next.js. No configuration needed.

After deployment:
1. Add custom domain life-admin.uk in Vercel settings
2. Update DNS nameservers as instructed by Vercel
3. Wait for SSL certificate to provision (automatic)

## Project Structure

```
├── app/                  # Pages (Next.js App Router)
├── components/          # React components
├── content/posts/       # Blog posts (MDX)
├── lib/                 # Utilities
├── public/             # Static files
└── scripts/            # Build scripts
```

## Writing Blog Posts

### MDX Features

- **Headings**: Create table of contents automatically
- **Lists, quotes, code**: Standard Markdown
- **React components**: Import and use in posts (optional)

### Example Post

```mdx
---
title: How to Build Good Systems
date: 2025-03-15
description: Simple approaches to building reliable systems
tags: [systems, process, organization]
---

This is the intro paragraph.

## First Section

Content here with **bold** and *italic*.

### Subsection

- List item 1
- List item 2

## Second Section

More content...
```

### Related Posts

Posts with matching tags automatically show as "Related Posts" at the bottom.

### Reading Time

Automatically calculated and displayed on each post.

## SEO Optimized

Every page includes:
- Custom title and description
- OpenGraph tags for social sharing
- Automatic sitemap generation
- robots.txt
- RSS feed
- Semantic HTML

## Performance

- Static HTML (no server needed)
- Minimal JavaScript
- Fast page loads
- Optimized for Vercel CDN

## Troubleshooting

### Posts not showing?
- Check frontmatter format (must have all required fields)
- Verify file is `.mdx` or `.md`
- Check for syntax errors

### Build errors?
```bash
npm run build
```
Shows detailed errors.

### Clear cache?
```bash
rm -rf .next
npm run dev
```

## Next Steps

1. Customize site metadata
2. Write your first post
3. Remove example posts
4. Update About page
5. Deploy to Vercel
6. Update URLs in config files
7. Redeploy

---

For full documentation, see [README.md](README.md)
