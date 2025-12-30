import { getAllPosts } from '@/lib/mdx';
import { constructMetadata } from '@/lib/metadata';
import BlogSearchWrapper from '@/components/BlogSearchWrapper';

export const metadata = constructMetadata({
  title: 'Blog - Life Admin',
  description: 'Practical guides and systems for managing life admin tasks',
  canonical: '/blog',
});

export default function BlogIndex() {
  const posts = getAllPosts();

  return <BlogSearchWrapper posts={posts} />;
}
