import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FadeUp } from "@/components/fade-up";
import { CTAStrip } from "@/components/cta";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rowe Retreats",
  description: "Luxury stays in Austin's Domain. Curated experiences with premium amenities and personalized service.",
};

const amenities = [
  "Premium furnishings and designer interiors",
  "Full kitchen with curated essentials",
  "Smart home technology throughout",
  "Walking distance to The Domain shopping and dining",
  "Personalized concierge recommendations",
  "Pet-friendly accommodations available",
];

export default function RetreatsPage() {
  return (
    <>
      <Hero
        label="Rowe Retreats"
        title="Luxury Stays in Austin's Domain"
        subtitle="Curated short-term stays designed for comfort, style, and an elevated Austin experience."
        primaryCta={{ text: "Book a Stay", href: "/contact?subject=retreats" }}
      />

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">The Experience</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream mb-8">More Than a Stay</h2>
            <div className="space-y-6 text-trc-cream/60 leading-relaxed">
              <p>Rowe Retreats offers luxury short-term rentals in Austin's premier Domain district. Each property is designed to feel like home while delivering the polish and comfort of a boutique hotel.</p>
              <p>Whether you're visiting Austin for business, relocating, or simply looking for a premium getaway, our properties offer the perfect blend of location, design, and service.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">Our Properties</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-16">Where You'll Stay</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeUp delay={0}>
              <div className="rounded-xl border border-trc-border overflow-hidden">
                <Image src="/images/retreats/favourite.webp" alt="Featured Retreat Property" width={400} height={300} className="w-full h-64 object-cover" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">What's Included</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-16">Amenities</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((a, i) => (
              <FadeUp key={a} delay={i * 80}>
                <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02] flex items-start gap-3">
                  <span className="text-trc-gold mt-1">&#10003;</span>
                  <p className="text-sm text-trc-cream/70">{a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip heading="Plan Your Stay" ctas={[{ text: "Inquire About Availability", href: "/contact?subject=retreats" }]} />
    </>
  );
}
