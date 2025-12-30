import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
      <h2 className="mb-4 text-2xl font-semibold text-gray-700">Page Not Found</h2>
      <p className="mb-8 text-gray-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
