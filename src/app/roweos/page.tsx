import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTAStrip } from "@/components/cta";
import { FadeUp } from "@/components/fade-up";
import Image from "next/image";

export const metadata: Metadata = {
  title: "RoweOS - The Engine Behind Brilliance",
  description: "RoweOS is the proprietary operating intelligence that powers Brilliance. One platform, two intelligences, and an adaptive engine that learns who you are.",
};

const themes = [
  {
    eyebrow: "Depth, not decoration",
    title: "An operating system, not a chatbot",
    body: "RoweOS is a self-contained intelligence platform. Twelve integrated views, hundreds of native operations, and an autonomous automation engine. No tab-switching, no copy-pasting, no add-on stack.",
  },
  {
    eyebrow: "One person. One platform. Every brand.",
    title: "Multi-brand by design",
    body: "Every brand in your portfolio gets its own identity, its own agents, its own automations, and its own data. Switch contexts in a click. Zero bleed between brands.",
  },
  {
    eyebrow: "Your data. Your keys.",
    title: "Sovereignty by default",
    body: "Calls go from your browser directly to Anthropic, OpenAI, and Google. No telemetry, no analytics, no usage routing. You own the keys, the data, and the infrastructure.",
  },
  {
    eyebrow: "The vision of the future",
    title: "Software you operate, intelligence that operates for you",
    body: "The next generation of software is not a feed and a prompt box. It is a private intelligence that knows your brand, runs your operations, and learns the person behind both. RoweOS is that intelligence.",
  },
];

export default function RoweOSPage() {
  return (
    <>
      {/* Intro Video — top of page */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-trc-border">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full"
              >
                <source src="/videos/backed-by-google.mov" type="video/mp4" />
              </video>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Logo */}
      <section className="pb-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-center">
          <FadeUp>
            <Image
              src="/images/roweos/logo.png"
              alt="RoweOS"
              width={560}
              height={160}
              className="h-32 md:h-40 w-auto"
              priority
            />
          </FadeUp>
        </div>
      </section>

      {/* Hero — The engine behind Brilliance */}
      <Hero
        label="The Engine Behind Brilliance"
        title="The platform that powers brilliant work"
        subtitle="RoweOS is the proprietary operating intelligence beneath Brilliance. A private platform that thinks in your voice, runs your operations, and learns who you are. One engine. Two intelligences. Yours."
        primaryCta={{ text: "Discover Brilliance", href: "/brilliance" }}
        secondaryCta={{ text: "Visit roweos.com", href: "https://roweos.com/info" }}
      />

      {/* Brilliance lockup */}
      <section className="px-6 -mt-8 mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="text-[10px] md:text-xs tracking-luxury uppercase text-trc-cream/50">
              <strong className="text-trc-gold font-medium">Brilliance</strong>{" "}
              &nbsp;·&nbsp; Intelligence OS &nbsp;·&nbsp; built on RoweOS
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Brand & Life Intelligence — single full-width image, explains both */}
      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">What is RoweOS</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-8">One platform, two intelligences</h2>
            <p className="text-trc-cream/60 text-center max-w-3xl mx-auto leading-relaxed mb-16">
              RoweOS operates in two modes, unified by <strong className="text-trc-cream">B.L.A.K.E.</strong>, the Brand Life AI Knowledge Engine. <strong className="text-trc-cream">BrandAI</strong> deploys five specialized agents per brand for strategy, marketing, operations, documents, and intelligence. <strong className="text-trc-cream">LifeAI</strong> turns the same engine inward for health, finances, goals, and daily planning. One adaptive intelligence that learns, adapts, and embodies who you are.
            </p>
          </FadeUp>

          <FadeUp>
            <div className="rounded-2xl overflow-hidden border border-trc-border">
              <Image
                src="/images/roweos/brandai-helix.png"
                alt="RoweOS Brand & Life Intelligence Platform"
                width={1600}
                height={1000}
                className="w-full"
                priority
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Backed by Google */}
      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <div className="inline-block px-6 py-3 rounded-full bg-white/90 mb-6">
              <Image
                src="/images/google-for-startups.png"
                alt="Google for Startups"
                width={200}
                height={30}
                className="h-6 w-auto"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream mb-6">Backed by Google</h2>
            <p className="text-trc-cream/60 leading-relaxed max-w-3xl mx-auto">
              RoweOS has been selected for the <strong className="text-trc-cream">Google for Startups Cloud Program</strong>, a highly selective initiative for companies demonstrating meaningful technical innovation and the potential to scale. Acceptance is by invitation, not application.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Philosophy themes */}
      <section className="relative py-24 px-6 border-t border-trc-border overflow-hidden">
        <Image
          src="/images/roweos/promo/helix-corner.png"
          alt=""
          fill
          className="object-cover opacity-15 pointer-events-none"
        />
        <div className="relative max-w-6xl mx-auto z-10">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">The Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-16">Why RoweOS is the vision of the future</h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            {themes.map((t, i) => (
              <FadeUp key={t.title} delay={i * 100}>
                <div className="p-10 border border-trc-border rounded-2xl bg-white/[0.02] h-full">
                  <p className="text-xs tracking-luxury uppercase text-trc-gold/70 mb-3">{t.eyebrow}</p>
                  <h3 className="font-serif text-xl md:text-2xl text-trc-cream mb-4">{t.title}</h3>
                  <p className="text-sm text-trc-cream/60 leading-relaxed">{t.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        heading="The intelligence layer is Brilliance"
        ctas={[
          { text: "Discover Brilliance", href: "/brilliance" },
          { text: "Explore roweos.com", href: "https://roweos.com/info", variant: "outline", external: true },
          { text: "Get in Touch", href: "/contact", variant: "outline" },
        ]}
      />
    </>
  );
}
