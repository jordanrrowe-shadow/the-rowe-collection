import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { SectionCard } from "@/components/section-card";
import { CTAStrip } from "@/components/cta";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Foundation | Rowe Solo Training",
  description:
    "The Foundation Training Program: a comprehensive guide that teaches the essentials of communication, confidence, and obedience for every dog.",
};

const foundationRules = [
  { rule: "Train in short sessions", detail: "Two to five minutes at a time. Short, frequent wins beat long, frustrating marathons." },
  { rule: "Raise difficulty one step at a time", detail: "Start easy and add challenge gradually so your dog always knows how to succeed." },
  { rule: "Reward what you like", detail: "Behavior that gets rewarded gets repeated. Catch your dog doing it right." },
  { rule: "If your dog struggles twice, make it easier", detail: "Struggle is information, not defiance. Step back so the next rep is a win." },
  { rule: "End on a win", detail: "Every session closes with success, so training stays something your dog loves." },
];

const coreCommands = [
  { name: "Sit", detail: "The universal default behavior. Calm starts here." },
  { name: "Down", detail: "Settle on cue, anywhere. The gateway to relaxation in public." },
  { name: "Stay & Wait", detail: "Impulse control that keeps your dog safe at doors, curbs, and cars." },
  { name: "Come", detail: "A reliable recall. The single most important safety skill a dog can have." },
  { name: "Drop It", detail: "Release anything on cue. Prevents emergencies before they happen." },
  { name: "Paw", detail: "A confidence builder that makes handling, nail care, and connection easy." },
];

const skillFormat = [
  { title: "Verbal Cue + Hand Signal", detail: "Every skill is taught with a spoken cue and a matching hand signal, so your dog understands you in loud rooms and quiet ones." },
  { title: "Step-by-Step Teaching Plan", detail: "Exact, numbered steps from first rep to finished behavior. No guesswork, no filler." },
  { title: "Proofing for Real Life", detail: "Each skill is practiced against distance, duration, and distraction so it holds up outside the living room." },
  { title: "Progress Trackers", detail: "Built-in trackers for every command let you see the progress happening week over week." },
];

export default function FoundationPage() {
  return (
    <>
      <Hero
        label="Rowe Solo Training"
        title="Foundation"
        subtitle="A comprehensive training guide that teaches the essentials: communication, confidence, and obedience. The starting point for every great dog."
        primaryCta={{ text: "Begin Foundation", href: "/contact?subject=foundation-training" }}
        secondaryCta={{ text: "All Programs", href: "/solo-training" }}
      />

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <SectionCard
            title="Where Every Great Dog Begins"
            description="Most dogs are not surrendered because they are bad dogs. They are surrendered because they were never taught basic life skills. Foundation exists to change that. It is a complete, owner-led guide to building a common language with your dog, one short session at a time, so good behavior becomes who they are instead of something they perform."
            image="/images/solo-training/dog_onabook.png"
            imageAlt="Watercolor illustration of a dog resting on a book"
          />
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">Why It Matters</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-16">Training Is Freedom</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeUp delay={100}>
              <div className="p-8 border border-trc-border rounded-2xl bg-white/[0.02] h-full">
                <h3 className="font-serif text-xl text-trc-gold mb-4">For Your Dog</h3>
                <ul className="space-y-3 text-sm text-trc-cream/60">
                  <li>Clear communication reduces stress and confusion</li>
                  <li>Impulse control prevents dangerous situations</li>
                  <li>Confidence grows through predictable success</li>
                  <li>Life skills create freedom: more places, more adventures, more time together</li>
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="p-8 border border-trc-border rounded-2xl bg-white/[0.02] h-full">
                <h3 className="font-serif text-xl text-trc-gold mb-4">For You</h3>
                <ul className="space-y-3 text-sm text-trc-cream/60">
                  <li>Safety: a reliable recall can save your dog&rsquo;s life</li>
                  <li>Convenience: trained dogs are welcome in more places</li>
                  <li>Connection: training builds a shared language and a deeper bond</li>
                  <li>Peace of mind: you know how your dog will respond, anywhere</li>
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">The Method</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-16">The Foundation Rules</h2>
          </FadeUp>
          <div className="space-y-4">
            {foundationRules.map((item, i) => (
              <FadeUp key={item.rule} delay={i * 100}>
                <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02] flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className="font-serif text-3xl text-trc-gold/60 w-12 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-lg text-trc-cream mb-1">{item.rule}</h3>
                    <p className="text-sm text-trc-cream/60">{item.detail}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">Chapter One</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-6">Puppy Foundations</h2>
            <p className="text-center text-trc-cream/60 max-w-2xl mx-auto mb-16">
              The first months shape the rest of your dog&rsquo;s life. Chapter One walks you through every critical development window, from the primary socialization period at 8 to 12 weeks through adolescence, and gives you a plan for each one.
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Potty Training", detail: "A complete housetraining system with a daily tracker, so accidents become data instead of frustration." },
              { title: "Sleep & Rest Routines", detail: "Puppies need 16 to 20 hours of sleep a day. Learn to build routines that get your puppy, and you, through the night." },
              { title: "Name Game & Focus", detail: "Teach your dog that their name is the best word in the world, and that checking in with you always pays." },
              { title: "Bite Inhibition", detail: "Gentle-mouth training during the window when it matters most." },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 100}>
                <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02] h-full">
                  <h3 className="font-serif text-lg text-trc-gold mb-2">{item.title}</h3>
                  <p className="text-sm text-trc-cream/60">{item.detail}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">Chapter Two</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-6">Core Obedience</h2>
            <p className="text-center text-trc-cream/60 max-w-2xl mx-auto mb-16">
              Built on marker training and the Lure, Cue, Fade progression, Chapter Two teaches the six commands every dog needs, then proofs them against the Three D&rsquo;s: distance, duration, and distraction, changing only one at a time.
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCommands.map((cmd, i) => (
              <FadeUp key={cmd.name} delay={i * 100}>
                <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02] h-full text-center">
                  <h3 className="font-serif text-xl text-trc-gold mb-2">{cmd.name}</h3>
                  <p className="text-sm text-trc-cream/60">{cmd.detail}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">Inside the Guide</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-16">Every Skill, Fully Mapped</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillFormat.map((item, i) => (
              <FadeUp key={item.title} delay={i * 100}>
                <div className="p-8 border border-trc-border rounded-2xl bg-white/[0.02] h-full">
                  <h3 className="font-serif text-lg text-trc-gold mb-3">{item.title}</h3>
                  <p className="text-sm text-trc-cream/60">{item.detail}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">What Comes Next</span>
            <h2 className="text-3xl md:text-4xl font-serif text-trc-cream mb-6">Ready to Go Further?</h2>
            <p className="text-trc-cream/60 leading-relaxed mb-8">
              Foundation is the beginning, not the ceiling. When the essentials are solid, Elevate adds advanced commands, socialization work, grooming comfort, and independence training to refine your partnership.
            </p>
            <Link
              href="/solo-training/elevate"
              className="inline-block px-8 py-3 border border-trc-cream/20 text-trc-cream rounded-full hover:border-trc-gold/50 hover:text-trc-gold transition-colors"
            >
              Explore Elevate
            </Link>
          </FadeUp>
        </div>
      </section>

      <CTAStrip
        heading="Start Building the Foundation"
        ctas={[
          { text: "Inquire Now", href: "/contact?subject=foundation-training" },
          { text: "All Programs", href: "/solo-training", variant: "outline" },
        ]}
      />
    </>
  );
}
