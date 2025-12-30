import RSS from 'rss';
import { getAllPosts } from '@/lib/mdx';
import { siteConfig } from '@/lib/metadata';

export const dynamic = 'force-static';

export async function GET() {
  const feed = new RSS({
    title: siteConfig.name,
    description: siteConfig.description,
    site_url: siteConfig.url,
    feed_url: `${siteConfig.url}/blog/rss.xml`,
    language: 'en',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${siteConfig.name}`,
  });

  const posts = getAllPosts();

  posts.forEach((post) => {
    feed.item({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      date: new Date(post.frontmatter.date),
      categories: post.frontmatter.tags,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
