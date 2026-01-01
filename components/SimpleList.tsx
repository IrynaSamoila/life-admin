import React from 'react';

interface SimpleListProps {
  children: React.ReactNode;
  title?: string;
}

export default function SimpleList({ children, title }: SimpleListProps) {
  return (
    <div className="not-prose my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm">
      {title && (
        <h4 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wide text-gray-700">
          {title}
        </h4>
      )}
      <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-800">
        {children}
      </div>
    </div>
  );
}
