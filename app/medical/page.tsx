import Link from "next/link";

export default function MedicalDisclaimerPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white p-8">
      <div className="max-w-3xl w-full space-y-12">

        {/* Content */}
        <div className="flex flex-col items-start justify-center space-y-8 py-12 text-zinc-300">
          <section>
            <Link
              href="/"
              className="text-3xl text-zinc-100 font-bold mb-4 block hover:text-zinc-300 transition-colors tracking-tight"
            >
              ← MEDICAL DISCLAIMER
            </Link>
            <p className="text-sm text-zinc-500">Effective: December 22, 2025</p>
          </section>



          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Read This First</h2>
            <p className="mt-3">
              HardMax (the &quot;App&quot;) is provided by A17 Labs LLC (&quot;A17 Labs,&quot;
              &quot;we,&quot; &quot;us&quot;). The App and any content, features, outputs,
              suggestions, estimates, analyses, or other information provided through it
              (collectively, the &quot;Content&quot;) are offered strictly for{" "}
              <strong>informational and entertainment purposes only</strong>.
            </p>
            <p className="mt-3">
              By using the App, you acknowledge and agree that{" "}
              <strong>
                you are solely responsible for your decisions, actions, and results
              </strong>
              , and that your use of the App is <strong>at your own risk</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Not Medical Advice</h2>
            <p className="mt-3">
              The Content is <strong>not</strong> medical advice and is not a substitute for
              professional medical advice, diagnosis, or treatment. Do not use the App to make
              decisions about your health, medications, supplements, or treatment plans.
            </p>
            <p className="mt-3">
              Always seek the advice of a qualified physician or other licensed healthcare
              provider with any questions you may have regarding a medical condition, symptoms,
              or treatment. Never disregard professional medical advice or delay seeking it
              because of something you read or receive from the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">
              No Doctor–Patient Relationship
            </h2>
            <p className="mt-3">
              Your use of the App does not create a doctor–patient relationship, therapist–patient
              relationship, or any other professional relationship between you and A17 Labs (or
              any contributors). We are not a medical provider and do not provide medical services.
            </p>
            <p className="mt-3">
              If you think you may have a medical emergency, call <strong>911</strong> (or your
              local emergency number) immediately. The App is not designed for emergency use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">
              AI, Estimates, and Possible Errors
            </h2>
            <p className="mt-3">
              Some features may use automated systems (including AI) and may analyze information
              you provide (for example, photos, measurements, or answers). Outputs may be
              incomplete, inaccurate, misleading, offensive, or not applicable to your situation.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>No guarantees:</strong> We do not guarantee accuracy, completeness,
                timeliness, or usefulness of any output.
              </li>
              <li>
                <strong>Results vary:</strong> Any examples, outcomes, or &quot;before/after&quot;
                style references are not promises of results.
              </li>
              <li>
                <strong>You must verify:</strong> You are responsible for verifying any Content
                with qualified professionals before acting on it.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">
              Health, Fitness, and Supplements (If Applicable)
            </h2>
            <p className="mt-3">
              If the App includes training, fitness, nutrition, or supplement-related information,
              you acknowledge that physical activity and dietary changes carry risks. You should
              consult a qualified healthcare professional before starting any diet, exercise, or
              supplement program, especially if you have any medical condition or take any
              medications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Assumption of Risk</h2>
            <p className="mt-3">
              You assume all risks associated with using the App and any reliance on the Content,
              including risks to your health, safety, and wellbeing. To the maximum extent
              permitted by law, you agree that A17 Labs is not responsible for any decisions you
              make based on the App or for any outcomes resulting from those decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">
              No Warranties; Use “As Is”
            </h2>
            <p className="mt-3">
              The App and Content are provided on an <strong>&quot;AS IS&quot;</strong> and{" "}
              <strong>&quot;AS AVAILABLE&quot;</strong> basis, without warranties of any kind,
              whether express, implied, or statutory, including implied warranties of
              merchantability, fitness for a particular purpose, non-infringement, and any
              warranties arising out of course of dealing or usage of trade.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">
              Limitation of Liability
            </h2>
            <p className="mt-3">
              To the maximum extent permitted by law, A17 Labs and its owners, officers,
              employees, contractors, affiliates, licensors, and suppliers will not be liable for
              any indirect, incidental, special, consequential, exemplary, or punitive damages,
              or any loss of profits, revenues, data, goodwill, or other intangible losses,
              arising out of or related to your use of (or inability to use) the App or Content,
              even if we have been advised of the possibility of such damages.
            </p>
            <p className="mt-3">
              To the maximum extent permitted by law, in no event will A17 Labs&apos; total
              liability for any claim relating to the App exceed the amount you paid (if any) to
              use the App in the twelve (12) months prior to the event giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Indemnification</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                You agree to defend, indemnify, and hold harmless A17 Labs and its affiliates
                from and against any claims, liabilities, damages, losses, and expenses
                (including attorneys&apos; fees) arising out of or related to your use of the App,
                your reliance on the Content, or your violation of any law or rights of a third
                party.
              </li>
              <li>
                If you share or publish outputs from the App, you are solely responsible for that
                sharing and any consequences.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Third-Party Content</h2>
            <p className="mt-3">
              The App may reference or link to third-party content, products, or services. We do
              not endorse, control, or assume responsibility for third-party materials, and your
              interactions with third parties are between you and them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Changes to This Disclaimer</h2>
            <p className="mt-3">
              We may update this Medical Disclaimer from time to time. The updated version will be
              posted on this page with a new effective date. Your continued use of the App after
              changes become effective constitutes acceptance of the updated disclaimer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-100">Contact</h2>
            <p className="mt-3">
              Questions about this Medical Disclaimer? Email us at{" "}
              <a
                href="mailto:support@regen.app"
                className="underline underline-offset-4"
              >
                support@regen.app
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
