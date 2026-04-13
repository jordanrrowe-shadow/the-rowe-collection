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
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">Founder &amp; CEO</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream mb-4">Jordan Rowe</h2>
            <p className="text-trc-gold/60 text-sm tracking-wide uppercase mb-10">Founder &amp; Chief Executive Officer, The Rowe Collection, LLC</p>
            <div className="space-y-6 text-trc-cream/60 leading-relaxed">
              <p>Jordan Rowe is the founder and CEO of The Rowe Collection, LLC, an AI-native holding company based in Austin, Texas. With a background in technology and a passion for delivering luxury experiences, Jordan started The Rowe Collection with a singular conviction: that intelligence and luxury are not separate pursuits, but complementary forces that elevate everything they touch.</p>
              <p>Before founding TRC, Jordan developed deep expertise across software development, product design, and business operations. That technical foundation became the catalyst for RoweOS, a proprietary AI platform that Jordan designed, engineered, and built from the ground up. RoweOS serves as the operating intelligence behind every brand in The Rowe Collection, managing strategy, marketing, operations, content, and client relationships through specialized AI agents.</p>
              <p>Under Jordan&apos;s leadership, The Rowe Collection has grown into a portfolio of five distinct brands, each combining premium quality with intelligent operations. From Rowe Solo Training&apos;s owner-led service dog certification programs, to Rowe Retreats&apos; luxury accommodations in Austin&apos;s Domain, to Rowe Reserve&apos;s personalized concierge services, every offering reflects the same philosophy: deliver exceptional experiences, powered by intelligence.</p>
              <p>Jordan&apos;s approach to entrepreneurship is rooted in building systems that scale. Rather than treating AI as an add-on, Jordan architected The Rowe Collection so that intelligence is the foundation, not a feature. This model has made it possible for a single founder to operate multiple brands at a level of sophistication typically reserved for much larger organizations.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream mb-10">The Team Behind TRC</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-trc-cream/[0.03] border border-trc-border rounded-2xl p-8">
                <div className="text-trc-gold text-xs tracking-luxury uppercase mb-3">Founder &amp; CEO</div>
                <h3 className="text-xl font-serif text-trc-cream mb-2">Jordan Rowe</h3>
                <p className="text-trc-cream/50 text-sm leading-relaxed">Technology entrepreneur with expertise in software engineering, AI systems, and luxury brand operations. Designed and built RoweOS from the ground up. Leads all strategy, product development, and business operations across the TRC portfolio.</p>
              </div>
              <div className="bg-trc-cream/[0.03] border border-trc-border rounded-2xl p-8">
                <div className="text-trc-gold text-xs tracking-luxury uppercase mb-3">AI Platform</div>
                <h3 className="text-xl font-serif text-trc-cream mb-2">RoweOS</h3>
                <p className="text-trc-cream/50 text-sm leading-relaxed">The proprietary operating intelligence that powers every brand. Features 8 specialized business agents, 5 life coach archetypes, and cross-mode intelligence connecting brand and personal operations. Built by Jordan Rowe as the central nervous system of TRC.</p>
              </div>
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
