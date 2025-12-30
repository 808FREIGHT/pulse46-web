import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Pulse 46",
  description: "Terms of Service for Pulse 46 - Panic Attack Relief App",
};

export default function TermsPage() {
  return (
    <main className="gradient-bg min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[var(--bg-deep)]/80 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <HeartIcon className="w-8 h-8 text-[var(--cyan-glow)]" />
            <span className="text-xl font-semibold">Pulse 46</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[var(--text-secondary)] hover:text-[var(--cyan-glow)] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[var(--cyan-glow)]">
              Terms
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          <p className="text-[var(--text-secondary)] mb-12">Last updated: December 28, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <Section title="Agreement to Terms">
              <p>
                By downloading, installing, or using Pulse 46 (&quot;the App&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
              </p>
            </Section>

            <Section title="Description of Service">
              <p>
                Pulse 46 is a mobile application designed to help users manage moments of panic and anxiety through synchronized heartbeat haptics, guided breathing exercises, and ambient sounds. The App is intended for relaxation and wellness purposes only.
              </p>
            </Section>

            <Section title="Medical Disclaimer">
              <div className="bg-[rgba(0,240,255,0.1)] border border-[var(--cyan-glow)] rounded-lg p-6 my-4">
                <p className="font-semibold text-[var(--cyan-glow)] mb-2">Important Notice</p>
                <p>
                  Pulse 46 is NOT a medical device and is NOT intended to diagnose, treat, cure, or prevent any medical condition. The App is not a substitute for professional medical advice, diagnosis, or treatment.
                </p>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.</li>
                <li>Never disregard professional medical advice or delay seeking it because of something you have experienced while using this App.</li>
                <li>If you are experiencing a medical emergency, call your local emergency services immediately.</li>
                <li>If you have been diagnosed with a panic disorder, anxiety disorder, or any other mental health condition, please consult with your healthcare provider about appropriate treatments.</li>
              </ul>
            </Section>

            <Section title="Use of the App">
              <p>You agree to use Pulse 46 only for its intended purpose and in compliance with all applicable laws. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Use the App while operating vehicles or heavy machinery</li>
                <li>Use the App in any way that could endanger yourself or others</li>
                <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
                <li>Remove any copyright or proprietary notices from the App</li>
                <li>Use the App for any unlawful purpose</li>
              </ul>
            </Section>

            <Section title="Subscriptions and Payments">
              <p>
                Pulse 46 offers optional premium features through in-app subscriptions (&quot;Pulse 46 Plus&quot;). By subscribing:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Payment will be charged to your Apple ID account at confirmation of purchase</li>
                <li>Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period</li>
                <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
                <li>You can manage and cancel your subscriptions through your App Store account settings</li>
                <li>Any unused portion of a free trial period will be forfeited when you purchase a subscription</li>
              </ul>
            </Section>

            <Section title="Intellectual Property">
              <p>
                Pulse 46, including its design, features, content, and code, is owned by us and protected by copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes.
              </p>
            </Section>

            <Section title="Limitation of Liability">
              <p>
                To the maximum extent permitted by law, Pulse 46 and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Your use or inability to use the App</li>
                <li>Any reliance placed by you on the completeness, accuracy, or existence of any content in the App</li>
                <li>Any health or medical decisions made based on your use of the App</li>
              </ul>
            </Section>

            <Section title="Disclaimer of Warranties">
              <p>
                The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </Section>

            <Section title="Changes to Terms">
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the &quot;Last updated&quot; date. Your continued use of the App after such modifications constitutes acceptance of the updated Terms.
              </p>
            </Section>

            <Section title="Termination">
              <p>
                We may terminate or suspend your access to the App immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the App will cease immediately.
              </p>
            </Section>

            <Section title="Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-4">
                <a href="mailto:admin@pulse46.app" className="text-[var(--cyan-glow)] hover:underline">
                  admin@pulse46.app
                </a>
              </p>
            </Section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[rgba(255,255,255,0.05)]">
        <div className="max-w-4xl mx-auto text-center text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()} Pulse 46. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">{title}</h2>
      <div className="text-[var(--text-secondary)] leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
}



