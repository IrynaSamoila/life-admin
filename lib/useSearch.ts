'use client';

import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import type { Post } from './types';

export function useSearch(posts: Post[]) {
  const [query, setQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Initialize Fuse.js with configuration
  const fuse = useMemo(() => {
    return new Fuse(posts, {
      keys: [
        { name: 'frontmatter.title', weight: 0.4 },
        { name: 'frontmatter.description', weight: 0.3 },
        { name: 'frontmatter.tags', weight: 0.2 },
      ],
      threshold: 0.3, // 0 = exact match, 1 = matches anything
      minMatchCharLength: 2,
      ignoreLocation: true,
    });
  }, [posts]);

  // Get all unique tags from posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => {
      post.frontmatter.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [posts]);

  // Perform search and filtering
  const filteredPosts = useMemo(() => {
    let results = posts;

    // Apply search query if exists
    if (query.trim()) {
      const searchResults = fuse.search(query);
      results = searchResults.map((result) => result.item);
    }

    // Apply tag filtering if tags selected
    if (selectedTags.length > 0) {
      results = results.filter((post) =>
        selectedTags.every((tag) => post.frontmatter.tags.includes(tag))
      );
    }

    return results;
  }, [query, selectedTags, fuse, posts]);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setQuery('');
    setSelectedTags([]);
  };

  return {
    query,
    setQuery,
    selectedTags,
    setSelectedTags,
    toggleTag,
    clearFilters,
    filteredPosts,
    allTags,
    hasActiveFilters: query.trim() !== '' || selectedTags.length > 0,
  };
}
