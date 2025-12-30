'use client';

import { useEffect, useState } from 'react';
import type { TocItem } from '@/lib/toc';

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -80% 0%' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="sticky top-8">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900">
        On This Page
      </h3>
      <ul className="space-y-2 border-l-2 border-gray-200">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 0.75}rem` }}>
            <a
              href={`#${item.id}`}
              className={`block border-l-2 py-1 pl-4 text-sm transition-colors hover:text-blue-600 ${
                activeId === item.id
                  ? '-ml-[2px] border-blue-600 font-medium text-blue-600'
                  : 'border-transparent text-gray-600'
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
