import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700">
            Life Admin
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/blog" className="text-gray-700 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
