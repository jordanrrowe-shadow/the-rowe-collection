import { Hero } from "@/components/hero";
import { BrandCard } from "@/components/brand-card";
import { CTAStrip, CTA } from "@/components/cta";
import { FadeUp } from "@/components/fade-up";
import { brands } from "@/lib/brands";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        label="The Rowe Collection, LLC"
        title="Intelligence-Driven Business"
        subtitle="An AI-native company building the future of brand and life management. Powered by RoweOS."
        primaryCta={{ text: "Explore RoweOS", href: "/roweos" }}
        secondaryCta={{ text: "Our Story", href: "/about" }}
      />

      {/* RoweOS Spotlight */}
      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">Flagship Product</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-6">RoweOS</h2>
            <p className="text-center text-trc-cream/60 max-w-2xl mx-auto mb-16">
              The premier AI platform for brand and life intelligence. One system to manage, create, and grow.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeUp delay={100}>
              <Image src="/images/roweos/full-screen.png" alt="RoweOS Brand AI" width={600} height={400} className="rounded-xl border border-trc-border" />
            </FadeUp>
            <FadeUp delay={200}>
              <div className="space-y-6 flex flex-col justify-center">
                <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02]">
                  <h3 className="font-serif text-lg text-trc-gold mb-2">Brand Intelligence</h3>
                  <p className="text-sm text-trc-cream/60">AI-powered brand management, content creation, and identity governance.</p>
                </div>
                <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02]">
                  <h3 className="font-serif text-lg text-trc-gold mb-2">Life Intelligence</h3>
                  <p className="text-sm text-trc-cream/60">Personal AI for finances, health, goals, and daily life management.</p>
                </div>
                <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02]">
                  <h3 className="font-serif text-lg text-trc-gold mb-2">One Platform</h3>
                  <p className="text-sm text-trc-cream/60">Everything unified under a single intelligent operating system.</p>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="text-center flex flex-wrap gap-4 justify-center">
            <CTA text="Why RoweOS" href="/roweos" />
            <CTA text="See the Platform" href="https://roweos.com/info" variant="outline" external />
          </div>
        </div>
      </section>

      {/* The Collection Grid */}
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

      {/* About Teaser */}
      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">Founded by Jordan Rowe</span>
            <h2 className="text-3xl md:text-4xl font-serif text-trc-cream mb-6">Built on Intelligence</h2>
            <p className="text-trc-cream/60 leading-relaxed mb-8">
              The Rowe Collection is a digital-native business model where every brand, service, and product is powered by AI-driven intelligence. From service dog training to luxury retreats, intelligence is the thread that connects everything we do.
            </p>
            <CTA text="Learn More" href="/about" variant="outline" />
          </FadeUp>
        </div>
      </section>

      {/* Contact CTA */}
      <CTAStrip
        heading="Ready to Connect?"
        ctas={[
          { text: "Get in Touch", href: "/contact" },
          { text: "Explore RoweOS", href: "https://roweos.com/info", variant: "outline", external: true },
        ]}
      />
    </>
  );
}
