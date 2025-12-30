import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { Post, PostFrontmatter } from './types';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      return getPostBySlug(slug);
    })
    .filter((post): post is Post => post !== null);

  return allPosts.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const altPath = path.join(postsDirectory, `${slug}.md`);

    let fileContents: string;

    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8');
    } else if (fs.existsSync(altPath)) {
      fileContents = fs.readFileSync(altPath, 'utf8');
    } else {
      return null;
    }

    const { data, content } = matter(fileContents);
    const readingTimeResult = readingTime(content);

    return {
      slug,
      frontmatter: data as PostFrontmatter,
      content,
      readingTime: readingTimeResult.text,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): Post[] {
  const allPosts = getAllPosts();

  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const commonTags = post.frontmatter.tags.filter((tag) =>
        tags.includes(tag)
      );
      return {
        post,
        relevance: commonTags.length,
      };
    })
    .filter((item) => item.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit)
    .map((item) => item.post);

  return relatedPosts;
}
