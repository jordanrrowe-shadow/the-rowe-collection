import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTAStrip } from "@/components/cta";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Brilliance - Intelligence OS by RoweOS",
  description:
    "Brilliance is the operating system for brilliant work. The intelligence layer that knows your brand, your voice, your standards. By RoweOS.",
  openGraph: {
    title: "Brilliance, Intelligence OS by RoweOS",
    description: "The operating system for brilliant work.",
    images: ["/images/brilliance/monogram-circle.png"],
  },
};

const modes = [
  {
    tag: "Mode I",
    name: "BrandAI",
    tagline: "Eight agents. One brand identity at the core.",
    items: [
      ["Identity Substrate", "Voice and standards injected into every output."],
      ["Studio", "150+ operations. Run one. Pipe many."],
      ["Bloom", "Twenty fresh brand angles on demand."],
      ["Library", "Your work, indexed across every brand."],
      ["Automations", "Multi-step pipelines and scheduled work."],
    ],
  },
  {
    tag: "Mode II",
    name: "LifeAI",
    tagline: "Five coaches. The operator behind the work.",
    items: [
      ["Pulse", "Goals, calendar, rhythm in one frame."],
      ["Identity Intelligence", "Finances, health, family understood deeply."],
      ["Tax Copilot", "Aware of every brand's revenue, year-round."],
      ["Wellness Guide", "Sleep, training, recovery, mind."],
      ["Reminders", "Goals tracked alongside the work they support."],
    ],
  },
];

const differences = [
  {
    num: "i.",
    title: "Sovereign by design",
    them: "Most platforms hold your data and mediate every prompt.",
    us: "Brilliance routes browser-direct to the model. We do not see, store, or relay your work.",
  },
  {
    num: "ii.",
    title: "Identity at the infrastructure level",
    them: "Most platforms make you paste your brand into every prompt.",
    us: "Brilliance injects your identity before the model sees the request. Your brand is the prompt.",
  },
  {
    num: "iii.",
    title: "Cross-mode intelligence",
    them: "Most platforms silo brand work from personal life.",
    us: "Brand and life share one memory. Your Tax Copilot sees every brand's revenue.",
  },
  {
    num: "iv.",
    title: "Multi-model routing",
    them: "Most platforms lock you to one model family.",
    us: "Claude, Gemini, GPT. Brilliance routes intelligently and falls back gracefully.",
  },
];

export default function BrilliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden isolate">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(201,169,97,0.16) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <FadeUp>
          <Image
            src="/images/brilliance/monogram-circle.png"
            alt="Brilliance by RoweOS"
            width={520}
            height={520}
            priority
            className="w-[clamp(220px,38vw,440px)] h-auto mx-auto mb-12 drop-shadow-[0_0_60px_rgba(201,169,97,0.30)]"
          />
        </FadeUp>
        <FadeUp delay={150}>
          <h1 className="font-serif text-trc-cream text-[clamp(48px,9vw,108px)] leading-none tracking-tight mb-7">
            Be <em className="not-italic text-trc-gold italic">Brilliant</em>.
          </h1>
        </FadeUp>
        <FadeUp delay={250}>
          <p className="text-xs md:text-sm tracking-luxury uppercase text-trc-cream/60 max-w-xl mx-auto mb-12">
            Brilliance &nbsp;·&nbsp;{" "}
            <strong className="text-trc-gold font-medium">Intelligence OS</strong>{" "}
            &nbsp;·&nbsp; by RoweOS
          </p>
        </FadeUp>
        <FadeUp delay={350}>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://roweos.com/brilliance"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-trc-gold to-trc-bronze text-trc-black font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Begin
            </a>
            <a
              href="https://roweos.com/info"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-trc-cream/20 text-trc-cream rounded-full hover:border-trc-gold/50 hover:text-trc-gold transition-colors"
            >
              See the Platform
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={500}>
          <p className="mt-20 text-[10px] tracking-[0.32em] uppercase text-trc-cream/40">
            <strong className="text-trc-gold font-medium">Backed by</strong> &nbsp;·&nbsp; Google for Startups
          </p>
        </FadeUp>
      </section>

      {/* Chapter I — Thesis */}
      <section className="border-t border-b border-trc-border bg-black/40 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <FadeUp>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-trc-gold to-transparent mx-auto mb-9" />
            <p className="text-[10px] tracking-luxury uppercase text-trc-gold/80 mb-8">
              Chapter i &nbsp;·&nbsp; The Thesis
            </p>
            <h2 className="font-serif text-trc-cream text-3xl md:text-5xl leading-tight mb-8">
              The operating system<br />for{" "}
              <em className="not-italic italic text-trc-gold">brilliant work</em>.
            </h2>
            <p className="text-trc-cream/60 leading-relaxed max-w-2xl mx-auto mb-16">
              Brand and life are not separate problems. They share the same operator. Brilliance treats both as one system, with two modes that act on their own context and inform each other when it matters.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {modes.map((mode, i) => (
              <FadeUp key={mode.name} delay={i * 100}>
                <div className="p-10 border border-trc-border rounded-2xl bg-white/[0.02] h-full">
                  <p className="text-[10px] tracking-luxury uppercase text-trc-gold/70 mb-3">
                    {mode.tag}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-trc-cream mb-2">
                    <em className="not-italic italic text-trc-gold">
                      {mode.name === "BrandAI" ? "Brand" : "Life"}
                    </em>
                    {mode.name === "BrandAI" ? "AI" : "AI"}
                  </h3>
                  <p className="text-sm text-trc-cream/60 mb-6">{mode.tagline}</p>
                  <ul className="space-y-4">
                    {mode.items.map(([n, d]) => (
                      <li key={n} className="flex flex-col gap-1">
                        <span className="text-sm text-trc-cream font-medium">{n}</span>
                        <span className="text-sm text-trc-cream/55">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={200}>
            <p className="font-serif text-lg md:text-xl text-trc-cream/90 italic mt-12">
              Brand and life share a single memory.{" "}
              <em className="not-italic italic text-trc-gold">
                Cross-mode intelligence is the moat
              </em>.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Backed by Google */}
      <section className="py-24 px-6 border-b border-trc-border">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="text-[10px] tracking-luxury uppercase text-trc-gold/80 mb-6">
              Backed by
            </p>
            <div className="inline-block px-6 py-3 rounded-full bg-white/90 mb-6">
              <Image
                src="/images/google-for-startups.png"
                alt="Google for Startups"
                width={200}
                height={30}
                className="h-6 w-auto"
              />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-trc-cream mb-6">
              Selected for{" "}
              <em className="not-italic italic text-trc-gold">Google for Startups</em>.
            </h2>
            <p className="text-trc-cream/60 leading-relaxed">
              Brilliance is backed by{" "}
              <strong className="text-trc-cream">Google for Startups</strong>. Vetted infrastructure, technical mentorship, and direct access to Google&apos;s AI roadmap. Built independently. Backed by serious cloud.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Manifesto interlude */}
      <section className="border-b border-trc-border bg-black/40 py-32 px-6 text-center">
        <FadeUp>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-trc-gold to-transparent mx-auto mb-9" />
          <p className="text-[10px] tracking-luxury uppercase text-trc-gold/80 mb-8">
            Yours, end to end
          </p>
          <p className="font-serif text-trc-cream text-3xl md:text-5xl leading-tight">
            Your brand. Your voice.
            <br />
            Your{" "}
            <em className="not-italic italic text-trc-gold">brilliance</em>.
          </p>
        </FadeUp>
      </section>

      {/* Meet Brilli */}
      <section className="py-32 px-6 text-center border-b border-trc-border">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <div
              aria-hidden
              className="w-32 h-32 mx-auto mb-10 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(245,230,200,0.9) 0%, rgba(201,169,97,0.55) 35%, rgba(201,169,97,0) 70%)",
                filter: "blur(2px)",
                boxShadow: "0 0 80px rgba(201,169,97,0.45)",
              }}
            />
            <p className="text-[10px] tracking-luxury uppercase text-trc-gold/80 mb-4">
              Coming to Brilliance
            </p>
            <h3 className="font-serif text-trc-cream text-3xl md:text-5xl mb-6">
              Meet <em className="not-italic italic text-trc-gold">Brilli</em>.
            </h3>
            <p className="text-trc-cream/60 leading-relaxed mb-4">
              <strong className="text-trc-cream">
                Brilli is the brilliance behind the platform.
              </strong>{" "}
              The intelligence that knows your brand, your life, your day, your standards. One name. One presence. Yours.
            </p>
            <p className="text-[10px] tracking-luxury uppercase text-trc-cream/40">
              <strong className="text-trc-gold font-medium">In development</strong> &nbsp;·&nbsp; Founding Members first
            </p>
          </FadeUp>
        </div>
      </section>

      {/* What it is */}
      <section className="py-24 px-6 text-center border-b border-trc-border">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <Image
              src="/images/brilliance/wordmark-os-transparent.png"
              alt="Brilliance, Intelligence OS"
              width={520}
              height={120}
              className="h-20 md:h-24 w-auto mx-auto mb-10 opacity-90"
            />
            <p className="text-[10px] tracking-luxury uppercase text-trc-gold/80 mb-4">
              What it is
            </p>
            <p className="text-trc-cream/70 leading-relaxed text-lg mb-8">
              Brilliance is the intelligence layer that learns who you are, how you operate, and what your work demands. Brand and life, one operating system. Sovereign by design.{" "}
              <em className="not-italic italic text-trc-gold">Yours, completely</em>.
            </p>
            <a
              href="https://roweos.com/info"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm tracking-luxury uppercase text-trc-gold hover:text-trc-cream transition-colors"
            >
              See the full platform
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Chapter III — Difference */}
      <section className="py-24 px-6 border-b border-trc-border">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-trc-gold to-transparent mx-auto mb-9" />
              <p className="text-[10px] tracking-luxury uppercase text-trc-gold/80 mb-8">
                Chapter iii &nbsp;·&nbsp; The Difference
              </p>
              <h2 className="font-serif text-trc-cream text-3xl md:text-5xl leading-tight mb-8">
                Less noise.
                <br />
                <em className="not-italic italic text-trc-gold">Pure brilliance</em>.
              </h2>
              <p className="text-trc-cream/60 leading-relaxed max-w-2xl mx-auto">
                Most AI products are a thin wrapper on someone else&apos;s model. Brilliance is built on four decisions that compound into the difference operators feel.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            {differences.map((d, i) => (
              <FadeUp key={d.num} delay={i * 100}>
                <article className="p-10 border border-trc-border rounded-2xl bg-white/[0.02] h-full">
                  <p className="font-serif text-trc-gold/70 text-2xl mb-4">{d.num}</p>
                  <h3 className="font-serif text-xl md:text-2xl text-trc-cream mb-5">
                    {d.title}
                  </h3>
                  <p className="text-sm text-trc-cream/40 mb-3 leading-relaxed">
                    {d.them}
                  </p>
                  <p className="text-sm text-trc-cream/80 leading-relaxed">{d.us}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Invitation / Closer */}
      <section className="relative py-32 px-6 text-center overflow-hidden isolate border-b border-trc-border">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 60%, rgba(201,169,97,0.12) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        <FadeUp>
          <Image
            src="/images/brilliance/monogram-circle.png"
            alt="Brilliance"
            width={160}
            height={160}
            className="mx-auto mb-10 w-24 h-24 md:w-32 md:h-32"
          />
          <h2 className="font-serif text-trc-cream text-3xl md:text-6xl leading-tight max-w-3xl mx-auto">
            Finally, a platform
            <br />
            as <em className="not-italic italic text-trc-gold">brilliant as you</em>.
          </h2>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <a
              href="https://roweos.com/brilliance"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-trc-gold to-trc-bronze text-trc-black font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Begin
            </a>
            <Link
              href="/roweos"
              className="px-8 py-3 border border-trc-cream/20 text-trc-cream rounded-full hover:border-trc-gold/50 hover:text-trc-gold transition-colors"
            >
              Meet the Engine
            </Link>
          </div>
        </FadeUp>
      </section>

      <CTAStrip
        heading="Step inside"
        ctas={[
          { text: "Visit roweos.com/brilliance", href: "https://roweos.com/brilliance", external: true },
          { text: "RoweOS, the engine", href: "/roweos", variant: "outline" },
          { text: "Get in Touch", href: "/contact", variant: "outline" },
        ]}
      />
    </>
  );
}
