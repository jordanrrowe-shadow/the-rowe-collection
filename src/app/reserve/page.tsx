import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FadeUp } from "@/components/fade-up";
import { EmailSignup } from "@/components/email-signup";

export const metadata: Metadata = {
  title: "Rowe Reserve",
  description: "Personalized concierge service by The Rowe Collection. Coming soon.",
};

export default function ReservePage() {
  return (
    <>
      <Hero
        label="Rowe Reserve"
        title="Concierge, Elevated"
        subtitle="A personalized concierge service designed around your lifestyle. Curated recommendations, reservations, and experiences -- handled for you."
      />

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">Coming Soon</span>
            <h2 className="text-3xl md:text-4xl font-serif text-trc-cream mb-6">Be the First to Know</h2>
            <p className="text-trc-cream/60 mb-10">
              Rowe Reserve is currently in development. Sign up to be notified when we launch.
            </p>
            <EmailSignup />
          </FadeUp>
        </div>
      </section>
    </>
  );
}
