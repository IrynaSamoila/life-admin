import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Privacy Policy - Life Admin',
  description: 'Privacy policy for Life Admin',
  canonical: '/privacy-policy',
});

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900">
        Privacy Policy
      </h1>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <p className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Overview</h2>
        <p className="leading-relaxed">
          Life Admin is a static website that does not collect, store, or process any personal
          data. This privacy policy outlines our commitment to your privacy.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Cookies</h2>
        <p className="leading-relaxed font-semibold">
          This website does not use tracking or advertising cookies.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Information We Collect</h2>
        <p className="leading-relaxed">
          We do not collect any personal information. This website:
        </p>
        <ul className="ml-6 list-disc space-y-2">
          <li>Does not use cookies</li>
          <li>Does not use analytics or tracking scripts</li>
          <li>Does not collect email addresses or contact information</li>
          <li>Does not store any user data</li>
        </ul>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Hosting</h2>
        <p className="leading-relaxed">
          This website is hosted on Vercel. Vercel may collect basic server logs (IP addresses,
          browser types, referring pages) for infrastructure and security purposes. Please refer
          to Vercel&apos;s privacy policy for more information about their data practices.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">External Links</h2>
        <p className="leading-relaxed">
          This website may contain links to external sites. We are not responsible for the
          privacy practices of other websites. We encourage you to read the privacy policies
          of any external sites you visit.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Changes to This Policy</h2>
        <p className="leading-relaxed">
          We may update this privacy policy from time to time. Any changes will be posted on
          this page with an updated revision date.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Contact</h2>
        <p className="leading-relaxed">
          If you have questions about this privacy policy, please contact us at{' '}
          <a href="mailto:hello@life-admin.uk" className="text-blue-600 hover:text-blue-800 underline">
            hello@life-admin.uk
          </a>
          .
        </p>
      </div>
    </div>
  );
}
