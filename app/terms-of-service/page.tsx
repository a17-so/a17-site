// app/terms-of-service/page.tsx

export default function TermsOfServicePage() {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: June 20, 2025</p>
  
        <Section title="1. License">
          <p>
            We grant you a non-exclusive, non-transferable, revocable license to use our Apps solely for personal, non-commercial purposes, subject to these Terms. You may not:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Copy, modify, or distribute any part of our Apps.</li>
            <li>Reverse-engineer or attempt to extract source code, unless permitted by law.</li>
            <li>Rent, lease, or sublicense the Apps.</li>
          </ul>
        </Section>
  
        <Section title="2. User Data & Consent">
          <p>
            Some Apps may request access to third-party services (e.g., Google, Apple Health, etc.) to enhance your experience. These connections occur <strong>only with your explicit consent</strong>. You are solely responsible for authorizing access to any third-party service.
          </p>
          <p>
            We may collect anonymized or aggregated data to improve our Apps. We do not sell your personal data.
          </p>
        </Section>
  
        <Section title="3. Third-Party Services">
          <p>
            Our Apps may link to or integrate with third-party services. We don’t control or endorse those services. Your use of third-party services is at your own risk and governed by their own terms.
          </p>
        </Section>
  
        <Section title="4. Termination">
          <p>
            We may suspend or terminate your access to any App at any time if you violate these Terms or use the Apps in a harmful or unlawful manner.
          </p>
        </Section>
  
        <Section title="5. Disclaimer">
          <p>
            Our Apps are provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind. We disclaim all warranties, express or implied, including:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement</li>
            <li>Availability or accuracy of any information provided</li>
          </ul>
          <p>Use of our Apps is at your own risk.</p>
        </Section>
  
        <Section title="6. Limitation of Liability">
          <p>To the maximum extent allowed by law, we are not liable for:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Indirect, incidental, or consequential damages</li>
            <li>Loss of data, revenue, or profits</li>
            <li>Any damages exceeding <strong>$50</strong>, regardless of the cause or legal theory</li>
          </ul>
          <p>Some jurisdictions do not allow certain limitations, so some may not apply to you.</p>
        </Section>
  
        <Section title="7. Export Restrictions">
          <p>
            You may not use or export our Apps in violation of U.S. export laws or the laws of your jurisdiction. You represent that you are not located in a country embargoed by the U.S. or listed on any U.S. sanctions list.
          </p>
        </Section>
  
        <Section title="8. Governing Law">
          <p>
            These Terms are governed by the laws of the State of [Insert State or Country], without regard to conflict of law principles. Any disputes will be handled in the courts of [Insert Jurisdiction].
          </p>
        </Section>
  
        <Section title="9. Changes to Terms">
          <p>
            We may update these Terms at any time. Continued use of our Apps after changes means you accept the updated Terms.
          </p>
        </Section>
  
        <Section title="10. Contact">
          <p>
            For questions or support, contact us at <a href="mailto:[Insert Email]" className="text-blue-600 underline">abhay@a17.so</a>.
          </p>
        </Section>
      </main>
    );
  }
  
  function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="space-y-2">{children}</div>
      </section>
    );
  }
  