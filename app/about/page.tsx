import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'About - Life Admin',
  description: 'Learn about Life Admin and our mission to simplify administrative tasks',
  canonical: '/about',
});

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900">
        About Life Admin
      </h1>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <p className="text-lg leading-relaxed">
          Life Admin is a collection of practical systems and processes designed to help you
          manage the administrative tasks of modern life with less stress and more efficiency.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Our Mission</h2>
        <p className="leading-relaxed">
          We believe that life admin tasks shouldn&apos;t consume your mental energy or steal your
          time. Our mission is to share simple, proven workflows that help you stay on top of
          household management, personal finance, and daily organization.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">What You&apos;ll Find Here</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li>Step-by-step guides for common life admin tasks</li>
          <li>Template systems you can adapt to your needs</li>
          <li>Process optimizations that save time and reduce decision fatigue</li>
          <li>Tools and automation recommendations</li>
          <li>Real-world examples and case studies</li>
        </ul>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Our Approach</h2>
        <p className="leading-relaxed">
          We focus on boring, simple, and reliable systems. No fancy apps or complicated
          methodologies. Just practical approaches that work consistently and require minimal
          maintenance.
        </p>

        <p className="leading-relaxed">
          Every system we share is tested in real-world conditions and designed to be adapted
          to your specific situation. We believe the best system is the one you&apos;ll actually use.
        </p>
      </div>
    </div>
  );
}
