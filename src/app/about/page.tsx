import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FadeUp } from "@/components/fade-up";
import { BrandCard } from "@/components/brand-card";
import { CTAStrip } from "@/components/cta";
import { brands } from "@/lib/brands";

export const metadata: Metadata = {
  title: "About",
  description: "The Rowe Collection, LLC -- an AI-native business founded by Jordan Rowe. Austin, TX.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        label="About Us"
        title="Built on Intelligence"
        subtitle="The Rowe Collection is not a traditional business. It's an AI-native company where every brand, service, and product is powered by intelligence from the ground up."
      />

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">Founder</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream mb-8">Jordan Rowe</h2>
            <div className="space-y-6 text-trc-cream/60 leading-relaxed">
              <p>Jordan Rowe is the founder of The Rowe Collection, LLC and the creator of RoweOS. Based in Austin, Texas, Jordan built The Rowe Collection as a proof of concept for what a truly AI-native business looks like.</p>
              <p>Every brand under The Rowe Collection operates with intelligence at its core. From service dog training programs to luxury hospitality, each offering is managed, marketed, and grown through RoweOS -- the same platform available to clients and businesses.</p>
              <p>The vision is simple: intelligence should be the foundation of how you work and live, not an afterthought bolted on to existing tools.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">The Model</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream mb-8">AI-Native from Day One</h2>
            <div className="space-y-6 text-trc-cream/60 leading-relaxed">
              <p>The Rowe Collection is a digital-native business model. Every brand identity, content strategy, customer interaction, and operational decision runs through RoweOS.</p>
              <p>This isn't about using AI as a tool. It's about building a company where intelligence is the operating system. The brands under TRC aren't just marketed with AI -- they're managed, measured, and evolved by it.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">The Collection</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-16">Our Brands</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, i) => (
              <BrandCard key={brand.name} {...brand} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">Milestones</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream mb-8">Our Journey</h2>
            <p className="text-trc-cream/40">Timeline coming soon.</p>
          </FadeUp>
        </div>
      </section>

      <CTAStrip
        heading="Let's Build Together"
        ctas={[
          { text: "Get in Touch", href: "/contact" },
          { text: "Explore RoweOS", href: "/roweos", variant: "outline" },
        ]}
      />
    </>
  );
}
