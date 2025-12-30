import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Simplify Your Life Admin
        </h1>
        <p className="max-w-2xl text-lg text-gray-600">
          Practical systems and processes for managing the administrative tasks of modern life.
          From personal finance to household management, discover workflows that work.
        </p>
      </section>

      {/* Recent Posts */}
      <section className="mb-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            View all posts →
          </Link>
        </div>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8 last:border-0">
              <Link href={`/blog/${post.slug}`}>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 hover:text-blue-600">
                  {post.frontmatter.title}
                </h3>
              </Link>
              <p className="mb-2 text-sm text-gray-500">
                {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="mb-3 text-gray-700">{post.frontmatter.description}</p>
              <div className="flex flex-wrap gap-2">
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
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg bg-gray-50 px-8 py-12 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Stay Updated
        </h2>
        <p className="mb-6 text-gray-600">
          Get notified when new guides and systems are published.
        </p>
        <Link
          href="/blog/rss.xml"
          className="inline-block rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
        >
          Subscribe via RSS
        </Link>
      </section>
    </div>
  );
}
