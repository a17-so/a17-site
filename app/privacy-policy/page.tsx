// app/privacy-policy/page.tsx

export default function PrivacyPolicyPage() {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: March 12, 2025</p>
  
        <Section title="Introduction">
          <p>
            This Privacy Policy outlines our policies and practices regarding the collection, use,
            and disclosure of your information when you use our service. It also informs you about
            your privacy rights and how legal protections apply to you. By using our service, you
            consent to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </Section>
  
        <Section title="Interpretation and Definitions">
          <SubSection title="Interpretation">
            <p>
              Words with capitalized initial letters have meanings defined under the following
              conditions. These definitions apply equally in singular and plural form.
            </p>
          </SubSection>
          <SubSection title="Definitions">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Account:</strong> A unique account created for you to access our Service.</li>
              <li><strong>Affiliate:</strong> An entity under common control with our Company.</li>
              <li><strong>Application:</strong> Software provided by the Company.</li>
              <li><strong>Company:</strong> SWIFT LABS LLC.</li>
              <li><strong>Country:</strong> Washington, United States.</li>
              <li><strong>Device:</strong> Any device used to access the Service.</li>
              <li><strong>Personal Data:</strong> Information identifying an individual.</li>
              <li><strong>Service:</strong> The website or application operated by us.</li>
              <li><strong>Service Provider:</strong> A third party that processes data for us.</li>
              <li><strong>Usage Data:</strong> Data collected automatically when using the Service.</li>
              <li><strong>You:</strong> The individual or entity using the Service.</li>
            </ul>
          </SubSection>
        </Section>
  
        <Section title="Collecting and Using Your Personal Data">
          <SubSection title="Types of Data Collected">
            <p>We may collect the following types of personal data:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Contact Details</li>
              <li>Payment Information</li>
              <li>Face Data (with explicit consent)</li>
            </ul>
          </SubSection>
          <SubSection title="Face Data Details">
            <p>
              We process face data for specific features with your explicit consent. It is deleted
              after use and not shared unless required for trusted third-party processing like OpenAI.
            </p>
          </SubSection>
        </Section>
  
        <Section title="Security Measures">
          <p>
            We use encryption, firewalls, and secure servers to protect your data. While we strive to
            protect your information, we cannot guarantee absolute security.
          </p>
        </Section>
  
        <Section title="User Generated Contributions">
          <p>
            By submitting content, you warrant that you have all rights and permissions. You retain
            ownership of your contributions, but grant us the right to use feedback freely.
          </p>
        </Section>
  
        <Section title="Usage Data">
          <p>
            We collect data like IP address, browser type, visited pages, and cookies to analyze and
            improve our services.
          </p>
        </Section>
  
        <Section title="Legal Basis for Processing Personal Data">
          <ul className="list-disc list-inside space-y-1">
            <li>User Consent</li>
            <li>Contractual Necessity</li>
            <li>Legal Obligation</li>
            <li>Legitimate Interests</li>
          </ul>
        </Section>
  
        <Section title="User Rights and Control Over Data">
          <ul className="list-disc list-inside space-y-1">
            <li>Right to Access</li>
            <li>Right to Rectification</li>
            <li>Right to Erasure</li>
            <li>Right to Object</li>
            <li>Right to Data Portability</li>
            <li>Right to Withdraw Consent</li>
            <li>Right to Non-Discrimination</li>
          </ul>
          <p>Contact us at <a href="mailto:team@a17.so" className="text-blue-600 underline">team@a17.so</a> to exercise these rights.</p>
        </Section>
  
        <Section title="Retention and Security of Personal Data">
          <p>
            We retain personal data only as long as necessary. Industry-standard security measures are
            in place to protect your data.
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
  
  function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <div className="mb-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="ml-4">{children}</div>
      </div>
    );
  }
  