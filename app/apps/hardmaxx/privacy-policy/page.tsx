// app/privacy/page.tsx (or wherever your route lives)
import type { Metadata } from "next";
import Link from "next/link";
import Particles from "@/components/particles";

export const metadata: Metadata = {
  title: "Privacy Policy | HardMaxx | A17 Labs LLC",
  description: "Privacy Policy for HardMaxx by A17 Labs LLC",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles className="absolute inset-0 -z-10" quantity={80} />

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-zinc-400 hover:text-zinc-200 duration-200"
          >
            ← Back to home
          </Link>
        </div>

        <h1 className="text-4xl sm:text-5xl text-zinc-100">Privacy Policy</h1>
        <p className="mt-3 text-sm text-zinc-500">Effective: August 25, 2025</p>

        <div className="mt-10 space-y-8 text-zinc-300">
          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Overview</h2>
            <p className="mt-3">
              This Privacy Policy explains how A17 Labs LLC ("A17 Labs", "we", "us")
              collects, uses, and shares information when you use the HardMaxx mobile
              application and related websites or services (collectively, the "Services").
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Information We Collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Photos you upload:</strong> images (e.g., selfies) you choose to
                upload to use app features.
              </li>
              <li>
                <strong>Account & profile data:</strong> information you provide such as
                name, email, preferences, and settings (if you create an account).
              </li>
              <li>
                <strong>Usage & device data:</strong> interactions with the Services,
                device and browser information, approximate location (derived from IP),
                and diagnostics.
              </li>
              <li>
                <strong>Communications:</strong> messages you send to us (e.g., support requests).
              </li>
              <li>
                <strong>Purchase data:</strong> subscription status and transaction metadata
                related to in-app purchases (payments are processed by Apple; we do not receive
                your full payment card details).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Face Data & Biometrics</h2>
            <div className="mt-3 space-y-4">
              <p>
                HardMaxx provides features that allow you to upload photos (such
                as selfies) for AI analysis and visual insights. To protect your
                privacy, we adhere to the following practices regarding face
                data:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Purpose:</strong> We store face data to provide a
                  historical dashboard where users can track their visual
                  progress over time and re-access AI analysis results.
                </li>
                <li>
                  <strong>Retention:</strong> Face data is not stored
                  indefinitely. It is automatically purged upon account deletion
                  or after 24 months of account inactivity.
                </li>
                <li>
                  <strong>Third-Party Sharing & Storage:</strong> To provide AI
                  analysis, we share face data with our trusted AI partners,
                  specifically <strong>OpenAI</strong> and{" "}
                  <strong>Google (Gemini)</strong>.
                </li>
                <li>
                  <strong>Third-Party Privacy Practices:</strong>
                  <ul className="mt-2 list-[circle] pl-6 space-y-2 text-zinc-400">
                    <li>
                      <strong>Do third parties store your face data? No.</strong>{" "}
                      Our agreements with these providers mandate
                      zero-retention policies for API data. They do not store
                      face data on their servers and do not use it for model
                      training.
                    </li>
                    <li>
                      <strong>Retention Duration:</strong> Data sent to these
                      providers is processed <strong>ephemerally</strong>. It is
                      held in memory only for the duration of the analysis
                      request (typically 2-5 seconds) and is immediately
                      discarded thereafter.
                    </li>
                    <li>
                      <strong>Why they process data:</strong> These third
                      parties provide the computational power required for
                      advanced visual analysis (e.g., assessing facial symmetry
                      or feature proportions). Ephemeral storage is the minimum
                      required to compute the result and transmit it back to
                      you.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>No Biometrics for Identification:</strong> We do not
                  create or use biometric identifiers for the purpose of
                  uniquely identifying or verifying any individual. We do not
                  perform facial recognition.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">How We Use Information</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Provide, maintain, and improve the Services.</li>
              <li>Enable core features (including processing uploaded images).</li>
              <li>Personalize experiences and develop new features.</li>
              <li>Communicate with you about updates, security, and support.</li>
              <li>Detect, prevent, and respond to fraud, abuse, and security issues.</li>
              <li>Comply with legal obligations and enforce our terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Legal Bases (Where Applicable)</h2>
            <p className="mt-3">
              Where required by law, we process personal information based on: (a) your consent
              (for example, when you upload a photo), (b) performance of a contract (to provide
              the Services), (c) our legitimate interests (such as security and service
              improvement), and/or (d) compliance with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Sharing & Service Providers</h2>
            <p className="mt-3">
              We do not sell your personal information. We may share information with vendors
              and service providers who help us operate the Services (e.g., hosting, analytics,
              customer support, and AI processing), subject to contractual protections.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>AI processing:</strong> Photos and inputs may be processed using AI
                providers integrated into our infrastructure. We send only what is necessary
                to provide the feature. We do not authorize these providers to use your data
                for advertising.
              </li>
              <li>
                <strong>Legal & safety:</strong> We may disclose information if required to
                comply with law or to protect the rights, safety, and security of our users,
                A17 Labs, or others.
              </li>
              <li>
                <strong>Business transfers:</strong> If we are involved in a merger,
                acquisition, financing, or sale of assets, information may be transferred as
                part of that transaction.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Data Retention</h2>
            <p className="mt-3">
              We retain information only as long as necessary to provide the Services, comply
              with legal obligations, and resolve disputes.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Uploaded photos (Face Data):</strong> Face data is not stored
                indefinitely. It is automatically purged upon account deletion
                or after 24 months of account inactivity.
              </li>
              <li>
                <strong>Logs & diagnostics:</strong> retained for a limited period for security
                and debugging.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Your Choices & Rights</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Access / delete:</strong> You may request access to or deletion of your
                personal information.
              </li>
              <li>
                <strong>Photo permissions:</strong> You can revoke camera/photo permissions in
                your device settings.
              </li>
              <li>
                <strong>Marketing communications:</strong> You can opt out of promotional emails
                where provided.
              </li>
              <li>
                <strong>California:</strong> We do not sell or share personal information as
                defined by California law. You may have additional rights under applicable law.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Children’s Privacy</h2>
            <p className="mt-3">
              The Services are not directed to children under 13, and we do not knowingly
              collect personal information from children under 13. If you believe a child has
              provided us personal information, contact us and we will take appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">International Transfers</h2>
            <p className="mt-3">
              If you access the Services from outside the United States, your information may
              be processed in the United States or other jurisdictions where our service
              providers operate. We take steps to protect information in accordance with this
              Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. We will post the updated
              version on this page with a new effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Contact</h2>
            <p className="mt-3">
              Questions or requests (including deletion)? Email us at{" "}
              <a
                href="mailto:support@hardmaxx.app"
                className="underline underline-offset-4"
              >
                support@hardmaxx.app
              </a>{" "}
              or visit our{" "}
              <Link href="/support" className="underline underline-offset-4">
                Support
              </Link>{" "}
              page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
