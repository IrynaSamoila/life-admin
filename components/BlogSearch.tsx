'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import type { Post } from '@/lib/types';
import { useSearch } from '@/lib/useSearch';

interface BlogSearchProps {
  posts: Post[];
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    query,
    setQuery,
    selectedTags,
    setSelectedTags,
    toggleTag,
    clearFilters,
    filteredPosts,
    allTags,
    hasActiveFilters,
  } = useSearch(posts);

  // Sync URL params with state on mount
  useEffect(() => {
    const urlQuery = searchParams.get('q') || '';
    const urlTags = searchParams.get('tags')?.split(',').filter(Boolean) || [];

    if (urlQuery) setQuery(urlQuery);
    if (urlTags.length > 0) {
      setSelectedTags(urlTags);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (selectedTags.length > 0) params.set('tags', selectedTags.join(','));

    const newUrl = params.toString() ? `/blog?${params.toString()}` : '/blog';
    router.replace(newUrl, { scroll: false });
  }, [query, selectedTags, router]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          Blog
        </h1>
        <p className="text-lg text-gray-600">
          Practical systems and processes for managing life admin tasks.
        </p>
      </div>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search topics..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Tag Filters */}
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
            Filter by topic
          </h2>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Clear filters
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  isSelected
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      {hasActiveFilters && (
        <div className="mb-4 text-sm text-gray-600">
          Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-12">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-200 pb-12 last:border-0"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="mb-3 text-2xl font-bold text-gray-900 hover:text-blue-600">
                  {post.frontmatter.title}
                </h2>
              </Link>
              <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
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
              <p className="mb-4 text-gray-700">{post.frontmatter.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={(e) => {
                      e.preventDefault();
                      if (!selectedTags.includes(tag)) {
                        toggleTag(tag);
                      }
                    }}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </article>
          ))
        ) : (
          <div className="py-12 text-center text-gray-500">
            No posts found. Try different search terms or filters.
          </div>
        )}
      </div>
    </div>
  );
}
