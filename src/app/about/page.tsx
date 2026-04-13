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

      {/* ── The Rowe Collection, LLC ── */}
      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">The Company</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream mb-10">The Rowe Collection, LLC</h2>
            <div className="space-y-6 text-trc-cream/60 leading-relaxed">
              <p>The Rowe Collection, LLC is an AI-native holding company headquartered in Austin, Texas. Founded with the belief that intelligence and luxury belong together, TRC operates a portfolio of five brands across service dog training, luxury hospitality, personalized concierge, custom goods, and enterprise AI.</p>
              <p>What makes The Rowe Collection different is what sits underneath it. Every brand in the portfolio runs on RoweOS, a proprietary AI platform built in-house. RoweOS is not a third-party tool or integration. It is the operating system of the company. Strategy, marketing, operations, client relationships, content creation, scheduling, and business intelligence all flow through a single platform with specialized AI agents purpose-built for each domain.</p>
              <p>This architecture means The Rowe Collection operates with the capabilities of a much larger organization while maintaining the focus and agility of a founder-led company. Each brand benefits from shared intelligence, unified operations, and a consistent standard of quality that comes from having one system managing the entire portfolio.</p>
              <p>The Rowe Collection is not a company that adopted AI after the fact. It was conceived, structured, and built with intelligence as its foundation from the very first day.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── AI-Native Model ── */}
      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">The Model</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream mb-8">AI-Native from Day One</h2>
            <div className="space-y-6 text-trc-cream/60 leading-relaxed">
              <p>Every brand identity, content strategy, customer interaction, and operational decision runs through RoweOS. The brands under TRC are not just marketed with AI. They are managed, measured, and evolved by it.</p>
              <p>RoweOS features eight specialized business agents covering strategy, marketing, operations, documents, intelligence, research, social media, and image generation. On the personal side, five life coach archetypes provide guidance across wellness, finances, relationships, career, and daily planning. Cross-mode intelligence connects both sides, so business decisions are informed by personal context and vice versa.</p>
              <p>The result is an operating model where a single founder can build, run, and grow multiple premium brands at a level of sophistication that would traditionally require a full team for each one.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">Founder</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream mb-4">Jordan Rowe</h2>
            <p className="text-trc-gold/60 text-sm tracking-wide uppercase mb-10">Founder &amp; Chief Executive Officer</p>
            <div className="space-y-6 text-trc-cream/60 leading-relaxed">
              <p>Jordan Rowe is the founder and CEO of The Rowe Collection, LLC and the sole creator of RoweOS. Based in Austin, Texas, Jordan brings a background that spans technology, software engineering, product design, and luxury brand operations.</p>
              <p>Jordan founded The Rowe Collection with a clear vision: to build a company where intelligence and luxury are not at odds, but are the same thing. The idea was that the highest quality experiences, whether in hospitality, personal services, or everyday products, should be powered by the most sophisticated systems available. That conviction led Jordan to design and engineer RoweOS from the ground up, writing every line of code and shaping every interaction to reflect a standard of quiet competence and professional elegance.</p>
              <p>The decision to build a proprietary AI platform was deliberate. Jordan saw that existing tools forced businesses to bolt intelligence onto processes that were never designed for it. The alternative was to start from zero and build a company where intelligence is not a feature but the foundation. Every brand, every workflow, every decision under The Rowe Collection runs through the same system because it was designed that way from the start.</p>
              <p>Jordan&apos;s technical background made this possible. Years of experience in software development and product engineering provided the skills to architect a platform that handles everything from multi-provider AI orchestration and automated content pipelines to real-time client management and cross-brand analytics. But the technology was always in service of the vision, not the other way around.</p>
              <p>Today, Jordan leads all strategy, product development, and brand operations across the TRC portfolio. The Rowe Collection stands as a working proof of concept for a new kind of business: one where a single founder, equipped with the right intelligence infrastructure, can deliver premium experiences across multiple verticals at a level that matches or exceeds what larger organizations produce.</p>
            </div>
            <div className="mt-12 flex flex-wrap gap-6 items-center">
              <a href="mailto:jordan@therowecollection.com" className="flex items-center gap-2 text-trc-cream/50 hover:text-trc-gold transition-colors text-sm">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                jordan@therowecollection.com
              </a>
              <a href="https://instagram.com/roweos.AI" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-trc-cream/50 hover:text-trc-gold transition-colors text-sm">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                @roweos.AI
              </a>
              <a href="https://x.com/roweos_AI" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-trc-cream/50 hover:text-trc-gold transition-colors text-sm">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                @roweos.AI
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Leadership Card ── */}
      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream mb-10">Team</h2>
            <div className="bg-trc-cream/[0.03] border border-trc-border rounded-2xl p-10">
              <div className="text-trc-gold text-xs tracking-luxury uppercase mb-3">Founder &amp; CEO</div>
              <h3 className="text-2xl font-serif text-trc-cream mb-4">Jordan Rowe</h3>
              <div className="grid md:grid-cols-2 gap-6 text-trc-cream/50 text-sm leading-relaxed">
                <div>
                  <div className="text-trc-gold/60 text-xs uppercase tracking-wide mb-2">Role</div>
                  <p>Founder, CEO, and sole developer of RoweOS. Leads strategy, product, engineering, and brand operations across the entire TRC portfolio.</p>
                </div>
                <div>
                  <div className="text-trc-gold/60 text-xs uppercase tracking-wide mb-2">Background</div>
                  <p>Technology entrepreneur with deep expertise in software engineering, AI systems architecture, product design, and luxury brand management. Based in Austin, TX.</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Our Brands ── */}
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

      {/* ── Milestones ── */}
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
        heading="Let&apos;s Build Together"
        ctas={[
          { text: "Get in Touch", href: "/contact" },
          { text: "Explore RoweOS", href: "/roweos", variant: "outline" },
        ]}
      />
    </>
  );
}
