import type { Metadata } from "next";
import Link from "next/link";
import Particles from "../../components/particles";

export const metadata: Metadata = {
  title: "Terms of Service | A17 Labs LLC",
  description: "Terms of Service for A17 Labs LLC",
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
              These Terms of Service ("Terms") govern your access to and use of the
              websites, apps, and services provided by A17 Labs LLC ("A17 Labs", "we",
              "us"). By accessing or using our Services, you agree to be bound by these
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Use of the Services</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>You must comply with all applicable laws and regulations.</li>
              <li>You may not misuse the Services, interfere with their operation, or access them using methods other than our provided interfaces.</li>
              <li>We may modify, suspend, or discontinue the Services at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Accounts</h2>
            <p className="mt-3">
              You are responsible for the activity on your account and for maintaining the
              security of your login credentials. Notify us immediately of any unauthorized
              use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Content and IP</h2>
            <p className="mt-3">
              The Services and their original content, features, and functionality are and
              will remain the exclusive property of A17 Labs LLC and its licensors.
              All trademarks, logos, and service marks are the property of their
              respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Prohibited Conduct</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Reverse engineering, scraping, or bypassing access controls.</li>
              <li>Uploading malicious code or interfering with network operations.</li>
              <li>Violating others' rights or applicable laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Disclaimers</h2>
            <p className="mt-3">
              The Services are provided "as is" without warranties of any kind, either
              express or implied. To the maximum extent permitted by law, we disclaim all
              warranties, including implied warranties of merchantability, fitness for a
              particular purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Limitation of Liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by law, A17 Labs LLC and its affiliates will
              not be liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Termination</h2>
            <p className="mt-3">
              We may suspend or terminate your access to the Services at any time, with or
              without cause or notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Governing Law</h2>
            <p className="mt-3">
              These Terms are governed by the laws of the State of Delaware, without
              regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Changes</h2>
            <p className="mt-3">
              We may update these Terms from time to time. Continued use of the Services
              after changes become effective constitutes your acceptance of the revised
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Contact</h2>
            <p className="mt-3">
              Questions? Visit our <Link href="/support" className="underline underline-offset-4">Support</Link> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}



