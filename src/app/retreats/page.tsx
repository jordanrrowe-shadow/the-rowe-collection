import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { SectionCard } from "@/components/section-card";
import { CTA, CTAStrip } from "@/components/cta";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Rowe Retreats",
  description:
    "Century Oaks Terrace at The Domain: a designer luxury stay in the heart of Austin's premier shopping and dining district. Book on Airbnb.",
};

const AIRBNB_URL = "https://www.airbnb.com/rooms/1549390857858798271";

const gallery = [
  { src: "/images/retreats/century-oaks/living-room.jpg", alt: "Designer living room with balcony views" },
  { src: "/images/retreats/century-oaks/kitchen.jpg", alt: "Full kitchen with curated essentials" },
  { src: "/images/retreats/century-oaks/office.jpg", alt: "Dedicated office space" },
  { src: "/images/retreats/century-oaks/balcony-day.jpg", alt: "Private balcony in daylight" },
  { src: "/images/retreats/century-oaks/living-room-2.jpg", alt: "Living room seating and dining area" },
  { src: "/images/retreats/century-oaks/kitchen-2.jpg", alt: "Kitchen detail" },
  { src: "/images/retreats/century-oaks/office-window.jpg", alt: "Office with natural light" },
  { src: "/images/retreats/century-oaks/balcony-view.jpg", alt: "Balcony overlooking The Domain" },
  { src: "/images/retreats/century-oaks/living-room-3.jpg", alt: "Living room detail" },
  { src: "/images/retreats/century-oaks/bathroom.jpg", alt: "Bathroom" },
  { src: "/images/retreats/century-oaks/living-room-night.jpg", alt: "Living room in the evening" },
  { src: "/images/retreats/century-oaks/exterior.jpg", alt: "Century Oaks Terrace exterior above The Domain" },
];

const amenities = [
  "Designer interiors and premium furnishings",
  "Full kitchen with curated essentials",
  "Dedicated office, built for remote work",
  "Private balcony with sunset views over The Domain",
  "Smart home technology throughout",
  "Steps from The Domain's shopping and dining",
];

export default function RetreatsPage() {
  return (
    <>
      <Hero
        label="Rowe Retreats"
        title="Century Oaks Terrace"
        subtitle="A designer stay at The Domain, Austin's premier shopping and dining district. Boutique-hotel polish, the comfort of home, and the city's best block right below your balcony."
        primaryCta={{ text: "Book on Airbnb", href: AIRBNB_URL }}
        secondaryCta={{ text: "Ask About a Sublet", href: "/contact?subject=retreats" }}
      />

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <SectionCard
            title="Above the Heart of The Domain"
            description="Century Oaks Terrace sits directly above The Domain's flagship block, with Tiffany & Co. at street level and Austin's best restaurants, shopping, and nightlife within a short walk. Step out the door and you are in the middle of everything. Step back inside and it is quiet, curated, and yours."
            image="/images/retreats/century-oaks/exterior.jpg"
            imageAlt="Century Oaks Terrace corner residence above The Domain"
          />
          <SectionCard
            title="Designed, Not Decorated"
            description="Original art, sculptural furniture, and a palette you will not find in a template rental. The living space opens onto a private balcony strung with lights, the kitchen is fully equipped, and every detail is chosen to make a short stay feel like a residence."
            image="/images/retreats/century-oaks/living-room.jpg"
            imageAlt="Designer living room with balcony views"
            reverse
          />
          <SectionCard
            title="Work From the Terrace"
            description="A dedicated office with natural light makes Century Oaks Terrace a genuine remote-work base, not just a weekend stay. Business travelers, relocations, and long stays are exactly what this residence was set up for."
            image="/images/retreats/century-oaks/office.jpg"
            imageAlt="Dedicated office space with natural light"
          />
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">Limited Window</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-6">Special Pricing: July 31 to October 1</h2>
            <p className="text-center text-trc-cream/60 max-w-2xl mx-auto mb-16">
              For a limited two-month window, Century Oaks Terrace is available two ways: nightly on Airbnb at special rates, or reserved outright for the full two months.
            </p>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeUp delay={100}>
              <div className="p-8 border border-trc-border rounded-2xl bg-white/[0.02] h-full flex flex-col">
                <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-2 block">Stay by the Night</span>
                <h3 className="font-serif text-2xl text-trc-cream mb-4">Book on Airbnb</h3>
                <p className="text-sm text-trc-cream/60 leading-relaxed mb-8 flex-1">
                  Special pricing applies to stays between July 31 and October 1. Instant booking, verified reviews, and every detail handled through Airbnb.
                </p>
                <div>
                  <CTA text="Book on Airbnb" href={AIRBNB_URL} external />
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="p-8 border border-trc-border rounded-2xl bg-white/[0.02] h-full flex flex-col">
                <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-2 block">Stay for the Season</span>
                <h3 className="font-serif text-2xl text-trc-cream mb-4">Two-Month Sublet</h3>
                <p className="text-sm text-trc-cream/60 leading-relaxed mb-2 flex-1">
                  Take the residence for the full window, July 31 to October 1, at <strong className="text-trc-cream">$2,500 per month with utilities included</strong>. Ideal for relocations, extended projects, or a full Austin season at The Domain.
                </p>
                <div className="mt-6">
                  <CTA text="Inquire About the Sublet" href="/contact?subject=retreats-sublet" variant="outline" />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">The Residence</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-16">Take a Look Around</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((photo, i) => (
              <FadeUp key={photo.src} delay={(i % 3) * 100}>
                <div className="relative aspect-[4/3] rounded-xl border border-trc-border overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </FadeUp>
            ))}
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

      <CTAStrip
        heading="Your Domain Season Starts Here"
        ctas={[
          { text: "Book on Airbnb", href: AIRBNB_URL, external: true },
          { text: "Inquire Directly", href: "/contact?subject=retreats", variant: "outline" },
        ]}
      />
    </>
  );
}
