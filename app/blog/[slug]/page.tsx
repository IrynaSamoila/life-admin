import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/mdx';
import { extractTableOfContents } from '@/lib/toc';
import { constructMetadata } from '@/lib/metadata';
import MDXContent from '@/components/MDXContent';
import TableOfContents from '@/components/TableOfContents';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return constructMetadata({
    title: `${post.frontmatter.title} - Life Admin`,
    description: post.frontmatter.description,
    canonical: `/blog/${slug}`,
  });
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const toc = extractTableOfContents(post.content);
  const relatedPosts = getRelatedPosts(slug, post.frontmatter.tags);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Back to Blog */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {post.frontmatter.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <time dateTime={post.frontmatter.date}>
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tags=${encodeURIComponent(tag)}`}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200"
              >
                {tag}
              </Link>
            ))}
          </div>
        </header>

        {/* Content with TOC */}
        <div className="lg:grid lg:grid-cols-[1fr_250px] lg:gap-12">
          {/* Main Content */}
          <article className="min-w-0">
            <div className="prose prose-gray max-w-none">
              <MDXContent source={post.content} />
            </div>
          </article>

          {/* Table of Contents - Desktop Only */}
          {toc.length > 0 && (
            <aside className="hidden lg:block">
              <TableOfContents items={toc} />
            </aside>
          )}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 border-t border-gray-200 pt-12">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">Related Posts</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="flex flex-col">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 hover:text-blue-600">
                      {relatedPost.frontmatter.title}
                    </h3>
                  </Link>
                  <p className="mb-2 text-sm text-gray-500">
                    {new Date(relatedPost.frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-sm text-gray-700">{relatedPost.frontmatter.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
