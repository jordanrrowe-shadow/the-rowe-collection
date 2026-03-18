import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { SectionCard } from "@/components/section-card";
import { CTA, CTAStrip } from "@/components/cta";
import { FadeUp } from "@/components/fade-up";
import Image from "next/image";

export const metadata: Metadata = {
  title: "RoweOS",
  description: "Operating intelligence for brand and life. The AI platform built for businesses that demand more.",
};

const benefits = [
  {
    title: "Unified Brand Management",
    description: "Stop juggling tools. RoweOS gives your brand a single source of truth for identity, content, and strategy. Every asset, every guideline, every decision -- all in one intelligent system.",
    image: "/images/roweos/full-screen.png",
  },
  {
    title: "AI That Knows Your Brand",
    description: "RoweOS doesn't just generate content. It learns your brand's voice, values, and visual identity. Every output is on-brand, every time -- no more correcting generic AI.",
    image: "/images/roweos/chat.png",
  },
  {
    title: "Intelligence Beyond Business",
    description: "Life Intelligence brings the same AI-powered approach to your personal world. Finances, health, goals, and daily life -- managed with the same precision as your brand.",
    image: "/images/roweos/studio.png",
  },
];

const audiences = [
  { label: "Solo Entrepreneurs", description: "One person running multiple brands and managing life at the same time" },
  { label: "Creative Agencies", description: "Teams that need consistent brand output across clients and projects" },
  { label: "Small Businesses", description: "Companies ready to operate with intelligence, not just tools" },
  { label: "Personal Brands", description: "Individuals building a brand around their expertise and vision" },
];

export default function RoweOSPage() {
  return (
    <>
      <Hero
        label="Flagship Product"
        title="Intelligence, Not Just Software"
        subtitle="RoweOS is the AI platform built for businesses and individuals who refuse to settle for generic tools. It's not another SaaS. It's an operating system for how you work and live."
        primaryCta={{ text: "See the Full Platform", href: "https://roweos.com/info" }}
        secondaryCta={{ text: "Contact Us", href: "/contact" }}
      />

      {/* Who it's for */}
      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">Who It's For</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-16">Built for People Who Build</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-6">
            {audiences.map((a, i) => (
              <FadeUp key={a.label} delay={i * 100}>
                <div className="p-8 border border-trc-border rounded-2xl bg-white/[0.02]">
                  <h3 className="font-serif text-lg text-trc-gold mb-2">{a.label}</h3>
                  <p className="text-sm text-trc-cream/60">{a.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">Why RoweOS</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-16">The Business Case</h2>
          </FadeUp>
          {benefits.map((b, i) => (
            <SectionCard
              key={b.title}
              title={b.title}
              description={b.description}
              image={b.image}
              imageAlt={b.title}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto text-center">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">What People Say</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream mb-16">Trusted by Builders</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="p-8 border border-trc-border rounded-2xl bg-white/[0.02]">
                  <p className="text-trc-cream/40 italic mb-4">"Testimonial coming soon."</p>
                  <p className="text-xs text-trc-cream/30">-- Placeholder</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <CTAStrip
        heading="See It in Action"
        ctas={[
          { text: "Explore the Platform", href: "https://roweos.com/info", external: true },
          { text: "Get in Touch", href: "/contact", variant: "outline" },
        ]}
      />
    </>
  );
}
