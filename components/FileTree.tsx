import React from 'react';

interface FileTreeProps {
  children: React.ReactNode;
}

export default function FileTree({ children }: FileTreeProps) {
  return (
    <div className="not-prose my-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="overflow-x-auto whitespace-pre font-mono text-sm leading-relaxed text-gray-800">
        {children}
      </div>
    </div>
  );
}
