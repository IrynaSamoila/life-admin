# Life Admin Blog

A simple, fast, and production-ready static blog built with Next.js 15 (App Router), MDX, and Tailwind CSS. Optimized for static export and deployment to Vercel.

## Features

- **Next.js 15** with App Router
- **MDX** support for blog posts with frontmatter
- **Tailwind CSS** with typography plugin for clean, readable design
- **SEO optimized** with metadata, OpenGraph tags, sitemap, robots.txt, and RSS feed
- **Static export** ready - no server required
- **Blog features**:
  - Automatic reading time calculation
  - Table of contents with active section highlighting
  - Related posts by tags
  - Tag-based organization
  - Chronological sorting
- **Clean design** with max-width ~65ch for optimal readability
- **Type-safe** with TypeScript

## Project Structure

```
.
├── app/                      # Next.js App Router pages
│   ├── blog/
│   │   ├── [slug]/          # Dynamic blog post pages
│   │   ├── rss.xml/         # RSS feed route
│   │   └── page.tsx         # Blog index
│   ├── about/               # About page
│   ├── privacy-policy/      # Privacy policy page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Sitemap generation
│   └── robots.ts            # Robots.txt generation
├── components/              # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── TableOfContents.tsx
│   └── MDXContent.tsx
├── content/
│   └── posts/              # MDX blog posts
├── lib/                    # Utility functions
│   ├── mdx.ts             # MDX parsing and post management
│   ├── toc.ts             # Table of contents extraction
│   ├── metadata.ts        # SEO metadata helpers
│   └── types.ts           # TypeScript types
└── public/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone or download this repository**

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## Creating Blog Posts

### Adding a New Post

1. Create a new `.mdx` file in `content/posts/`
2. Add frontmatter at the top:

```mdx
---
title: Your Post Title
date: 2025-03-15
description: A brief description of your post
tags: [tag1, tag2, tag3]
---

Your post content here...

## Section Heading

Content with **bold** and *italic* text.

- List items
- More items

### Subsection

More content...
```

### Frontmatter Fields

- **title** (required): Post title
- **date** (required): Publication date in YYYY-MM-DD format
- **description** (required): Brief description for cards and SEO
- **tags** (required): Array of tags for categorization and related posts

### MDX Features

MDX files support:
- Standard Markdown syntax
- Custom React components (can be added to `components/MDXContent.tsx`)
- Automatic heading IDs for table of contents
- Syntax highlighting for code blocks

## Configuration

### Site Metadata

**IMPORTANT**: Before deploying, update site information in the following files:

1. **`lib/metadata.ts`**:

```typescript
export const siteConfig = {
  name: 'Life Admin',
  description: 'Practical systems and processes for managing life admin tasks',
  url: 'https://life-admin.uk',
  author: 'Life Admin',
  email: 'hello@life-admin.uk',
};
```

2. **`public/robots.txt`**: Sitemap URL (already configured for life-admin.uk)

3. **`scripts/generate-sitemap.mjs`**: SITE_URL constant (already configured for life-admin.uk)

### Styling

The design uses Tailwind CSS with sensible defaults:
- Max content width: ~65ch for optimal readability
- Clean typography using Inter font
- Responsive layout for all screen sizes

Customize styles by:
- Editing `tailwind.config.ts` for theme changes
- Modifying component styles directly
- Updating `app/globals.css` for global styles

## Building for Production

### Static Export

This site is configured for static export by default.

```bash
npm run build
```

This generates a static site in the `out/` directory.

### Test Production Build Locally

```bash
npm run build
npx serve@latest out
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Vercel will auto-detect Next.js settings

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes

4. **Configure custom domain**
   - Add life-admin.uk in Vercel's domain settings
   - DNS will auto-configure with Vercel nameservers

### Deploy to Other Static Hosts

The `out/` directory can be deployed to:
- **Netlify**: Drag and drop the `out/` folder or connect via Git
- **Cloudflare Pages**: Connect repository or upload `out/` folder
- **GitHub Pages**: Push `out/` directory to `gh-pages` branch
- **Any static host**: Upload contents of `out/` directory

## SEO Features

This site includes comprehensive SEO optimization:

- **Metadata**: Page titles, descriptions, and OpenGraph tags
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Auto-generated at `/robots.txt`
- **RSS Feed**: Available at `/blog/rss.xml`
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Performance**: Static generation for fast load times

## Customization

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Update navigation in `components/Header.tsx` if needed

Example:

```typescript
// app/contact/page.tsx
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Contact - Your Site',
  description: 'Get in touch',
  canonical: '/contact',
});

export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1>Contact</h1>
      {/* Your content */}
    </div>
  );
}
```

### Modifying Design

The site uses a clean, minimal design. To customize:

- **Colors**: Update Tailwind theme in `tailwind.config.ts`
- **Fonts**: Change font in `app/layout.tsx`
- **Layout**: Modify component structure in respective files
- **Spacing**: Adjust Tailwind spacing classes

## Development Tips

### MDX Hot Reload

MDX files hot-reload during development. Save your post to see changes instantly.

### Type Safety

All TypeScript types are defined in `lib/types.ts`. The project is fully type-safe.

### Adding Components

Add custom MDX components in `components/MDXContent.tsx`:

```typescript
const components = {
  // ... existing components
  MyCustomComponent: (props: any) => <div className="custom" {...props} />,
};
```

## Performance

This site is optimized for performance:

- Static generation (no server overhead)
- Minimal JavaScript bundle
- Optimized images (use Next.js Image component)
- No runtime dependencies for content
- Fast page loads with static HTML

## Troubleshooting

### Posts not showing

- Check frontmatter format (must have all required fields)
- Verify file is in `content/posts/` directory
- Ensure file extension is `.mdx` or `.md`
- Check for syntax errors in frontmatter

### Build errors

- Run `npm run build` to see detailed error messages
- Check for TypeScript errors: `npx tsc --noEmit`
- Verify all images and assets exist

### Styling issues

- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run dev`
- Check Tailwind classes are valid

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
- Check existing documentation
- Review Next.js 15 documentation
- Contact us at hello@life-admin.uk

---

Built with Next.js, MDX, and Tailwind CSS. Keep it simple, fast, and boring.
