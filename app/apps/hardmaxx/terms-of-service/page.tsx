// app/terms/page.tsx (or wherever your route lives)
import type { Metadata } from "next";
import Link from "next/link";
import Particles from "@/components/particles";

export const metadata: Metadata = {
  title: "Terms of Service | HardMaxx | A17 Labs LLC",
  description: "Terms of Service for HardMaxx by A17 Labs LLC",
};

export default function TermsOfServicePage() {
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

        <h1 className="text-4xl sm:text-5xl text-zinc-100">Terms of Service</h1>
        <p className="mt-3 text-sm text-zinc-500">Effective: August 25, 2025</p>

        <div className="mt-10 space-y-8 text-zinc-300">
          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Agreement to Terms</h2>
            <p className="mt-3">
              These Terms of Service ("Terms") govern your access to and use of HardMaxx and
              related services provided by A17 Labs LLC ("A17 Labs", "we", "us"). By accessing
              or using the Services, you agree to be bound by these Terms. If you do not agree,
              do not use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Important Disclaimers (Not Medical Advice)</h2>
            <p className="mt-3">
              HardMaxx provides <strong>informational and educational content</strong> related
              to aesthetics, appearance, supplements, peptides, and cosmetic procedures.
              HardMaxx is <strong>not</strong> a medical device and does <strong>not</strong>
              provide medical advice, diagnosis, or treatment.
            </p>
            <p className="mt-3">
              Always seek the advice of a qualified healthcare professional before starting
              any supplement or peptide regimen, or before making decisions related to medical
              procedures or surgery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">AI-Generated Content</h2>
            <p className="mt-3">
              Certain features may use machine learning or artificial intelligence to generate
              outputs. AI-generated outputs can be inaccurate or incomplete and are provided
              for informational purposes only. You are responsible for how you interpret and
              use information from the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Use of the Services</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>You must comply with all applicable laws and regulations.</li>
              <li>
                You may not misuse the Services, interfere with their operation, or access them
                using methods other than our provided interfaces.
              </li>
              <li>We may modify, suspend, or discontinue the Services at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Accounts</h2>
            <p className="mt-3">
              You are responsible for activity on your account and for maintaining the security
              of your login credentials. Notify us immediately of any unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Subscriptions & Billing (Apple In-App Purchase)</h2>
            <p className="mt-3">
              HardMaxx may offer auto-renewing subscriptions. Payments are processed by Apple
              through your Apple ID. We do not receive your payment card details.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Subscriptions renew automatically unless canceled at least 24 hours before the
                end of the current period.
              </li>
              <li>
                You can manage or cancel subscriptions in your Apple ID account settings.
              </li>
              <li>
                Refund requests are handled by Apple in accordance with Apple’s policies and
                applicable law.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Prohibited Conduct</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Reverse engineering, scraping, or bypassing access controls.</li>
              <li>Uploading malicious code or interfering with network operations.</li>
              <li>Using the Services to violate others’ rights or applicable laws.</li>
              <li>Using the Services to provide medical advice or professional services to others.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Content & Intellectual Property</h2>
            <p className="mt-3">
              The Services and their original content, features, and functionality are and will
              remain the exclusive property of A17 Labs LLC and its licensors. All trademarks,
              logos, and service marks are the property of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Disclaimers</h2>
            <p className="mt-3">
              The Services are provided "as is" and "as available" without warranties of any kind,
              either express or implied. To the maximum extent permitted by law, we disclaim all
              warranties, including implied warranties of merchantability, fitness for a particular
              purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Limitation of Liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by law, A17 Labs LLC and its affiliates will not be
              liable for any indirect, incidental, special, consequential, or punitive damages, or
              any loss of profits or revenues, arising out of or related to your use of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Termination</h2>
            <p className="mt-3">
              We may suspend or terminate your access to the Services at any time, with or without
              cause or notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Governing Law</h2>
            <p className="mt-3">
              These Terms shall be governed and construed in accordance with the laws of the
              State of Delaware, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Contact</h2>
            <p className="mt-3">
              Questions regarding these Terms? Email us at{" "}
              <a
                href="mailto:support@hardmaxx.app"
                className="underline underline-offset-4"
              >
                support@hardmaxx.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
