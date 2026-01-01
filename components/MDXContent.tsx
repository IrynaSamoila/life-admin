import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';
import remarkGfm from 'remark-gfm';
import FileTree from './FileTree';
import DataTable from './DataTable';
import SimpleList from './SimpleList';

interface MDXContentProps {
  source: string;
}

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="mb-4 mt-8 text-3xl font-bold" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = (props.children as string)
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return <h2 id={id} className="mb-3 mt-8 scroll-mt-16 text-2xl font-bold" {...props} />;
  },
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = (props.children as string)
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return <h3 id={id} className="mb-2 mt-6 scroll-mt-16 text-xl font-bold" {...props} />;
  },
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="mb-4 leading-7" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="mb-4 ml-6 list-disc space-y-2" {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="mb-4 ml-6 list-decimal space-y-2" {...props} />,
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="leading-7" {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="font-medium text-blue-600 hover:text-blue-800 hover:underline" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mb-4 border-l-4 border-gray-300 pl-4 italic text-gray-700"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-800"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm text-gray-800 border border-gray-200" {...props} />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 bg-white" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-gray-50" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-gray-200 bg-white" {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="hover:bg-gray-50" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-sm text-gray-700" {...props} />
  ),
  // Custom components
  FileTree,
  DataTable,
  SimpleList,
};

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-gray max-w-none">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}
