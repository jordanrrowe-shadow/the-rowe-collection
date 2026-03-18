import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { SectionCard } from "@/components/section-card";
import { CTA, CTAStrip } from "@/components/cta";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Rowe & Co.",
  description: "Custom-made goods and personalized pet apparel by The Rowe Collection.",
};

export default function RoweAndCoPage() {
  return (
    <>
      <Hero
        label="Rowe & Co."
        title="Custom-Made, Personally Crafted"
        subtitle="Personalized goods and pet apparel designed with care. Every piece is made to order."
        primaryCta={{ text: "Shop on Etsy", href: "https://www.etsy.com/shop/TheRoweCollectionLLC" }}
        secondaryCta={{ text: "Custom Inquiry", href: "/contact?subject=rowe-and-co" }}
      />

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <SectionCard
            title="Personalized Pet Apparel"
            description="Custom hoodies, bandanas, and accessories for your pet. Each piece is designed to match your style and made to fit your companion perfectly."
            image="/images/rowe-and-co/collab.png"
            imageAlt="Rowe & Co. Collaboration"
          />
          <SectionCard
            title="Custom Goods"
            description="Beyond pet apparel, Rowe & Co. offers custom-made goods designed with the same attention to detail and personal touch. Every order is a collaboration."
            image="/images/rowe-and-co/shop-header.jpeg"
            imageAlt="Rowe & Co. Shop"
            reverse
          />
        </div>
      </section>

      <CTAStrip
        heading="Find Your Piece"
        ctas={[
          { text: "Shop on Etsy", href: "https://www.etsy.com/shop/TheRoweCollectionLLC", external: true },
          { text: "Custom Order Inquiry", href: "/contact?subject=rowe-and-co", variant: "outline" },
        ]}
      />
    </>
  );
}
