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
        subtitle="An AI-native company building the future of brand and life management. Home of Brilliance, our flagship Intelligence OS, powered by RoweOS."
        primaryCta={{ text: "Discover Brilliance", href: "/brilliance" }}
        secondaryCta={{ text: "Our Story", href: "/about" }}
      />

      {/* Brilliance Spotlight */}
      <section className="relative py-24 px-6 border-t border-trc-border overflow-hidden isolate">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(201,169,97,0.10) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        <div className="max-w-5xl mx-auto text-center">
          <FadeUp>
            <Image
              src="/images/brilliance/monogram-circle.png"
              alt="Brilliance by RoweOS"
              width={180}
              height={180}
              className="mx-auto mb-8 w-24 h-24 md:w-32 md:h-32 drop-shadow-[0_0_60px_rgba(201,169,97,0.3)]"
              priority
            />
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">
              Flagship Product
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-trc-cream mb-6">
              Brilliance
            </h2>
            <p className="text-xs md:text-sm tracking-luxury uppercase text-trc-cream/60 mb-8">
              <strong className="text-trc-gold font-medium">Intelligence OS</strong> &nbsp;·&nbsp; by RoweOS
            </p>
            <p className="text-center text-trc-cream/70 max-w-2xl mx-auto leading-relaxed mb-12 text-lg">
              The operating system for brilliant work. The intelligence layer that knows your brand, your voice, your standards. Brand and life, one system. Sovereign by design.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTA text="Discover Brilliance" href="/brilliance" />
              <CTA text="Visit Brilliance" href="https://roweos.com/brilliance" variant="outline" external />
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
            <p className="text-trc-cream/60 leading-relaxed mb-8">
              Brilliance, powered by RoweOS, has been selected for the{" "}
              <strong className="text-trc-cream">Google for Startups Cloud Program</strong>, a highly selective initiative recognizing meaningful technical innovation. Google identified the platform for its unique approach to consolidating brand operations, content strategy, and life management into a single AI-native operating system.
            </p>
            <CTA text="Learn More" href="/brilliance" variant="outline" />
          </FadeUp>
        </div>
      </section>

      {/* The Engine */}
      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">
              The Engine
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-6">
              RoweOS
            </h2>
            <p className="text-center text-trc-cream/60 max-w-2xl mx-auto mb-12">
              Brilliance is the experience. RoweOS is the engine beneath it - the proprietary platform Jordan built from the ground up to power every brand and intelligence in The Rowe Collection.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FadeUp delay={100}>
              <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02] h-full">
                <h3 className="font-serif text-lg text-trc-gold mb-2">Brand Intelligence</h3>
                <p className="text-sm text-trc-cream/60">Eight specialized agents per brand. Identity injected at the infrastructure level.</p>
              </div>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02] h-full">
                <h3 className="font-serif text-lg text-trc-gold mb-2">Life Intelligence</h3>
                <p className="text-sm text-trc-cream/60">Five coaches for health, finances, goals, and rhythm. Aware across every brand.</p>
              </div>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02] h-full">
                <h3 className="font-serif text-lg text-trc-gold mb-2">Sovereign Architecture</h3>
                <p className="text-sm text-trc-cream/60">Browser-direct calls to every model. Your keys. Your data. Your infrastructure.</p>
              </div>
            </FadeUp>
          </div>

          <div className="text-center flex flex-wrap gap-4 justify-center">
            <CTA text="Inside the Engine" href="/roweos" variant="outline" />
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
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">Founded by Jordan Rowe, CEO</span>
            <h2 className="text-3xl md:text-4xl font-serif text-trc-cream mb-6">Built on Intelligence</h2>
            <p className="text-trc-cream/60 leading-relaxed mb-8">
              The Rowe Collection, LLC was founded by Jordan Rowe, a technology entrepreneur with a background in software engineering and luxury brand operations. Every brand, service, and product is powered by Brilliance, the Intelligence OS built on RoweOS, the proprietary platform Jordan built from the ground up. From service dog training to luxury retreats, intelligence is the thread that connects everything we do.
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
          { text: "Discover Brilliance", href: "/brilliance", variant: "outline" },
        ]}
      />
    </>
  );
}
