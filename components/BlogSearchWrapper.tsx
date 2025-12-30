'use client';

import { Suspense } from 'react';
import BlogSearch from './BlogSearch';
import type { Post } from '@/lib/types';

interface BlogSearchWrapperProps {
  posts: Post[];
}

export default function BlogSearchWrapper({ posts }: BlogSearchWrapperProps) {
  return (
    <Suspense fallback={<BlogSearchFallback />}>
      <BlogSearch posts={posts} />
    </Suspense>
  );
}

function BlogSearchFallback() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          Blog
        </h1>
        <p className="text-lg text-gray-600">
          Loading...
        </p>
      </div>
    </div>
  );
}
