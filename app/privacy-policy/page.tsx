import type { Metadata } from "next";
import Link from "next/link";
import Particles from "../../components/particles";

export const metadata: Metadata = {
  title: "Privacy Policy | A17 Labs LLC",
  description: "Privacy Policy for A17 Labs LLC",
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
              collects, uses, and shares information about you when you use our
              websites, apps, and services (collectively, the "Services").
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Information We Collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Usage data: interactions with our Services, device and browser
                information, approximate location, and diagnostics.
              </li>
              <li>
                Account data: profile details you provide when you create or
                update an account.
              </li>
              <li>
                Communications: messages you send to us (for example, support
                requests).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">How We Use Information</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Provide, maintain, and improve the Services.</li>
              <li>Personalize experiences and develop new features.</li>
              <li>Communicate with you about updates, security, and support.</li>
              <li>Detect, prevent, and respond to fraud, abuse, and security issues.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Sharing</h2>
            <p className="mt-3">
              We may share information with vendors and service providers who
              help us operate the Services; when required by law or to protect
              rights and safety; or with your consent. We do not sell your
              personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Data Retention</h2>
            <p className="mt-3">
              We retain information for as long as necessary to provide the
              Services, comply with legal obligations, resolve disputes, and
              enforce our agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Your Choices</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Access, update, or delete certain account information.</li>
              <li>Control communications by adjusting your settings or opting out.</li>
              <li>Manage cookie and device permissions at the system level.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Childrens Privacy</h2>
            <p className="mt-3">
              Our Services are not directed to children under 13, and we do not
              knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. We will post
              the updated version on this page with a new effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Contact</h2>
            <p className="mt-3">
              Questions or concerns? Visit our <Link href="/support" className="underline underline-offset-4">Support</Link> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}



