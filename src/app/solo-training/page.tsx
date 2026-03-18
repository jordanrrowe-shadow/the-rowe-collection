import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { SectionCard } from "@/components/section-card";
import { CTAStrip } from "@/components/cta";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Rowe Solo Training",
  description: "Owner-led service dog certification. Independent training, DOT-approved, designed for your world.",
};

export default function SoloTrainingPage() {
  return (
    <>
      <Hero
        label="Rowe Solo Training"
        title="Training Designed for Your World"
        subtitle="Owner-led service dog certification that puts you in control. Independent, DOT-approved, and built around your life."
        primaryCta={{ text: "Start Your Journey", href: "/contact?subject=solo-training" }}
      />

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <SectionCard
            title="Owner-Led Certification"
            description="Rowe Solo Training is built on a simple belief: the best trainer for your service dog is you. Our program gives you the knowledge, structure, and support to train and certify your service dog independently."
            image="/images/solo-training/hero.png"
            imageAlt="Training Designed for Your World"
          />
          <SectionCard
            title="DOT Approval Ready"
            description="Our training program is designed to meet Department of Transportation requirements. We prepare you and your service dog for real-world scenarios, airline travel, and public access with confidence."
            image="/images/solo-training/dot-approval.png"
            imageAlt="DOT Approval Ready"
            reverse
          />
          <SectionCard
            title="It Begins With Calm"
            description="Every great service dog starts with a foundation of calm. Our methodology focuses on building a composed, confident partnership between you and your dog before advancing to specialized tasks."
            image="/images/solo-training/calm.png"
            imageAlt="It Begins With Calm"
          />
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">Programs</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-16">Training Tiers</h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Foundation", description: "Core obedience, public access basics, and calm conditioning. The starting point for every team." },
              { name: "Advanced", description: "Task-specific training, distraction proofing, and real-world scenario preparation." },
              { name: "Certification", description: "Full DOT-ready certification with documentation, testing, and ongoing support." },
            ].map((tier, i) => (
              <FadeUp key={tier.name} delay={i * 100}>
                <div className="p-8 border border-trc-border rounded-2xl bg-white/[0.02] h-full">
                  <h3 className="font-serif text-xl text-trc-gold mb-4">{tier.name}</h3>
                  <p className="text-sm text-trc-cream/60">{tier.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip heading="Ready to Start?" ctas={[{ text: "Inquire Now", href: "/contact?subject=solo-training" }]} />
    </>
  );
}
