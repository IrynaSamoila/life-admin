import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://your-domain.vercel.app';

function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const stats = fs.statSync(fullPath);
      return {
        slug,
        lastModified: stats.mtime.toISOString().split('T')[0],
      };
    });
}

function generateSitemap() {
  const posts = getAllPosts();

  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
  ];

  const blogPosts = posts.map((post) => ({
    url: `/blog/${post.slug}`,
    lastmod: post.lastModified,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✓ Generated sitemap.xml');
}

generateSitemap();
