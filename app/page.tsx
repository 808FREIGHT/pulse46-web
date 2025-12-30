import Link from "next/link";

export default function Home() {
  return (
    <main className="gradient-bg min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[var(--bg-deep)]/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <HeartIcon className="w-8 h-8 text-[var(--cyan-glow)]" />
            <span className="text-xl font-semibold">Pulse 46</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[var(--text-secondary)] hover:text-[var(--cyan-glow)] transition-colors hidden sm:block">
              Privacy
            </Link>
            <Link href="/terms" className="text-[var(--text-secondary)] hover:text-[var(--cyan-glow)] transition-colors hidden sm:block">
              Terms
            </Link>
            <a 
              href="https://apps.apple.com/app/pulse-46" 
              target="_blank" 
              rel="noopener noreferrer"
              className="app-store-btn !py-2 !px-4"
            >
              <AppleIcon className="w-5 h-5" />
              <div className="text-left">
                <div className="text-[10px] text-[var(--text-secondary)] leading-tight">Download on the</div>
                <div className="text-sm font-semibold leading-tight">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Glowing Heart */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-[var(--cyan-glow)] opacity-20 rounded-full"></div>
              <HeartIcon className="w-32 h-32 text-[var(--cyan-glow)] heart-glow relative z-10" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.3]">
            Helping you to<br />
            <span className="text-[var(--cyan-glow)]">BREATHE</span><br />
            through panic
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Pulse 46 uses synchronized heartbeat haptics and guided breathing to help you through panic attacks and anxiety.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Designed for <span className="text-[var(--cyan-glow)]">Panic Relief</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-xl mx-auto">
            Every feature is crafted to help you regain control during moments of panic.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<HeartPulseIcon />}
              title="60 BPM Heartbeat"
              description="A steady, calming heartbeat locked at 60 BPM with synchronized haptic feedback to ground you."
            />
            <FeatureCard
              icon={<WindIcon />}
              title="Guided Breathing"
              description="4-second inhale, 6-second exhale. A proven technique to activate your parasympathetic nervous system."
            />
            <FeatureCard
              icon={<VolumeIcon />}
              title="Ambient Sounds"
              description="Pink noise, brown noise, 432 Hz drone, ocean waves, and calming music to soothe your mind."
            />
            <FeatureCard
              icon={<VibrateIcon />}
              title="Haptic Feedback"
              description="Feel the heartbeat through gentle vibrations. Three modes: Classic, Womb, and Deep."
            />
            <FeatureCard
              icon={<MoonIcon />}
              title="Sleep Timers"
              description="Fall asleep peacefully with customizable session timers that fade out naturally."
            />
            <FeatureCard
              icon={<PhoneIcon />}
              title="SOS Contacts"
              description="Quick access to emergency contacts when you need to reach out for support."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It <span className="text-[var(--cyan-glow)]">Works</span>
          </h2>

          <div className="space-y-8">
            <Step 
              number="1" 
              title="Open When You Need It"
              description="Launch Pulse 46 the moment you feel panic rising. The calming interface is ready instantly."
            />
            <Step 
              number="2" 
              title="Feel the Heartbeat"
              description="Place your hand on your chest or hold your phone. Let the 60 BPM rhythm guide your heart rate down."
            />
            <Step 
              number="3" 
              title="Breathe with the Guide"
              description="Follow the visual breathing guide. 4 seconds in, 6 seconds out. Your body will follow."
            />
            <Step 
              number="4" 
              title="Return to Calm"
              description="Feel your nervous system begin to settle. Breathe by breathe, you're back in control."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <HeartIcon className="w-28 h-28 md:w-36 md:h-36 text-[var(--cyan-glow)] mx-auto mb-4 heart-glow" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            When Panic Hits
          </h2>
          <p className="text-6xl md:text-8xl font-bold mb-12 text-center text-[var(--cyan-glow)]">
            Pulse 46
          </p>
          <a 
            href="https://apps.apple.com/app/pulse-46" 
            target="_blank" 
            rel="noopener noreferrer"
            className="app-store-btn inline-flex !py-4 !px-8"
          >
            <AppleIcon className="w-10 h-10" />
            <div className="text-left">
              <div className="text-sm text-[var(--cyan-glow)] leading-tight">Download on the</div>
              <div className="text-xl font-semibold leading-tight">App Store</div>
            </div>
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Real Stories, <span className="text-[var(--cyan-glow)]">Real Relief</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-xl mx-auto">
            Hear from people who found their way back.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="This helped me during my worst panic attack in years. The heartbeat brought me back."
              author="Sarah M."
            />
            <TestimonialCard
              quote="I keep it on my home screen. Just knowing it's there gives me peace of mind."
              author="James K."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Common <span className="text-[var(--cyan-glow)]">Questions</span>
          </h2>

          <div className="space-y-4">
            <FAQItem
              question="Does Pulse 46 replace therapy?"
              answer="No. Pulse 46 is a tool to use alongside professional help, not a replacement for therapy or medical treatment. If you're struggling with anxiety or panic disorder, please consult a healthcare provider."
            />
            <FAQItem
              question="Is my data private?"
              answer="Absolutely. Pulse 46 works entirely on your device. We don't collect, store, or share any personal data. Your sessions stay with you."
            />
            <FAQItem
              question="Why 60 BPM?"
              answer="60 beats per minute is a naturally calming rhythm that helps slow your heart rate through a process called entrainment. Your body syncs to the steady pulse."
            />
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-12 px-6 bg-[rgba(0,0,0,0.3)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            <strong className="text-[var(--text-primary)]">Medical Disclaimer:</strong> Pulse 46 is not a medical device and is not intended to diagnose, treat, cure, or prevent any medical condition. 
            It is designed for relaxation and wellness purposes only. If you are experiencing a medical emergency, please call emergency services immediately. 
            Always consult with a qualified healthcare provider for medical advice. See our{" "}
            <Link href="/terms" className="text-[var(--cyan-glow)] hover:underline">Terms of Service</Link> for full details.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[rgba(255,255,255,0.05)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <HeartIcon className="w-6 h-6 text-[var(--cyan-glow)]" />
              <span className="font-semibold">Pulse 46</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
              <Link href="/privacy" className="hover:text-[var(--cyan-glow)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[var(--cyan-glow)] transition-colors">
                Terms of Service
              </Link>
              <a href="mailto:admin@pulse46.app" className="hover:text-[var(--cyan-glow)] transition-colors">
                admin@pulse46.app
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Pulse 46. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

// Components
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="feature-card">
      <div className="w-12 h-12 rounded-xl bg-[rgba(0,240,255,0.1)] flex items-center justify-center mb-4 text-[var(--cyan-glow)]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 rounded-full bg-[var(--cyan-glow)] text-[var(--bg-deep)] flex items-center justify-center font-bold text-xl shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="feature-card">
      <QuoteIcon className="w-8 h-8 text-[var(--cyan-glow)] mb-4 opacity-50" />
      <p className="text-lg leading-relaxed mb-4">{quote}</p>
      <p className="text-[var(--cyan-glow)] font-semibold">— {author}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group feature-card cursor-pointer">
      <summary className="flex justify-between items-center font-semibold text-lg list-none">
        {question}
        <ChevronIcon className="w-5 h-5 text-[var(--cyan-glow)] transition-transform group-open:rotate-180" />
      </summary>
      <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">{answer}</p>
    </details>
  );
}

// Icons
function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
}

function HeartPulseIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      <path d="M3 12h4l2 -3l2 6l2 -4l2 2h5" />
    </svg>
  );
}

function WindIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
      <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
      <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function VibrateIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
      <path d="M2 8v8" />
      <path d="M22 8v8" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6"/>
    </svg>
  );
}
