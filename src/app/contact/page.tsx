import type { Metadata } from "next";
import { Suspense } from "react";
import { Hero } from "@/components/hero";
import { FadeUp } from "@/components/fade-up";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Rowe Collection. Inquiries, bookings, and partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        label="Contact"
        title="Let's Talk"
        subtitle="Whether you have a question, want to book a service, or explore a partnership, we'd love to hear from you."
      />

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <Suspense fallback={<div className="text-trc-cream/40 text-center py-8">Loading...</div>}>
              <ContactForm />
            </Suspense>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-trc-border">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">Direct Contact</span>
            <p className="text-trc-cream/60 mb-2">
              Jordan Rowe &mdash; <a href="mailto:jordan@therowecollection.com" className="text-trc-gold hover:underline">jordan@therowecollection.com</a>
            </p>
            <p className="text-trc-cream/60">
              Elisa Rowe &mdash; <a href="mailto:elisa@therowecollection.com" className="text-trc-gold hover:underline">elisa@therowecollection.com</a>
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
