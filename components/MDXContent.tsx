import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';

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
    <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100" {...props} />
  ),
};

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-gray max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
