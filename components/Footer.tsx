import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Life Admin. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="/blog/rss.xml"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              RSS Feed
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
