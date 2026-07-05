import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { SectionCard } from "@/components/section-card";
import { CTAStrip } from "@/components/cta";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Elevate | Rowe Solo Training",
  description:
    "The Elevate Training Program: building on Foundation skills with advanced commands, socialization, grooming comfort, and independence training.",
};

const advancedCommands = [
  { name: "Fetch", cue: "“Get It”", detail: "Structured retrieve that turns play into cooperation." },
  { name: "Spin", cue: "“Spin”", detail: "Body awareness and focus, taught with a light touch." },
  { name: "Roll Over", cue: "“Roll”", detail: "Trust and flexibility, one shoulder at a time." },
  { name: "Play Dead", cue: "“Bang”", detail: "A crowd favorite built on calm, sustained stillness." },
  { name: "Up", cue: "“Up”", detail: "Controlled hind-leg standing on cue." },
  { name: "Bow", cue: "“Take a Bow”", detail: "The finishing move, because every performance deserves one." },
];

const elevateChapters = [
  {
    label: "Chapter Three",
    title: "Socialization & Environment Work",
    detail:
      "Real socialization is not forcing greetings or pushing dogs through fear. It is neutral exposure at safe distances, confidence built through positive experiences, and calm around novelty. The goal: a dog that is neutral and confident, not frantic to greet everyone. Includes a weekly exposure checklist of five new surfaces, five new sounds, five new people, and three new places, plus a location progress tracker across dog parks, pet stores, cafes, and more.",
  },
  {
    label: "Chapter Four",
    title: "Handling & Grooming Comfort",
    detail:
      "A consent-based handling philosophy that prevents grooming fear before it starts. Touch predicts treats, sessions stay short, and your dog’s body language is respected. The result is a dog that is confident at the groomer, cooperative at the vet, and safe around unexpected touch, with a full grooming comfort tracker covering ears, mouth, paws, nails, brushing, and more.",
  },
  {
    label: "Chapter Five",
    title: "Building Independence",
    detail:
      "Calm alone time is a superpower in modern life. This chapter teaches your dog to settle independently, starting with seconds and building to a full hour, preventing separation anxiety and building emotional resilience. Dogs who master independence become more secure, not less, because they learn alone time is temporary and safe.",
  },
];

const assessmentSkills = [
  "Name response",
  "Paw",
  "Sit (verbal + hand signal)",
  "Down (verbal + hand signal)",
  "Stay & Wait (10 seconds)",
  "Come (reliable recall)",
  "Drop It",
  "Leave It",
  "Place (goes to mat)",
  "Loose leash basics",
  "Settle (relaxes on mat)",
  "Grooming comfort",
];

export default function ElevatePage() {
  return (
    <>
      <Hero
        label="Rowe Solo Training"
        title="Elevate"
        subtitle={"Building on Foundation skills with advanced commands and refinement. This is not just more tricks. It is refining your partnership and unlocking your dog’s full potential."}
        primaryCta={{ text: "Begin Elevate", href: "/contact?subject=elevate-training" }}
        secondaryCta={{ text: "All Programs", href: "/solo-training" }}
      />

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <SectionCard
            title="The Elevate Difference"
            description="Elevate contains the complete Foundation curriculum, then keeps going. It adds complexity, duration, and versatility to every skill your dog knows, layers in six advanced commands, and opens three entirely new chapters: socialization, handling comfort, and independence. Where Foundation builds a common language, Elevate turns it into fluency."
            image="/images/solo-training/eli_lottie_watercolor1.jpeg"
            imageAlt="Watercolor illustration of two dogs together"
            reverse
          />
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">Beyond the Essentials</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-6">Six Advanced Commands</h2>
            <p className="text-center text-trc-cream/60 max-w-2xl mx-auto mb-16">
              Each advanced command follows the same complete format as Foundation: verbal cue and hand signal, step-by-step teaching plan, real-life proofing, and a progress tracker, capped with an Elevate Commands Reference Guide.
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedCommands.map((cmd, i) => (
              <FadeUp key={cmd.name} delay={i * 100}>
                <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02] h-full text-center">
                  <h3 className="font-serif text-xl text-trc-gold mb-1">{cmd.name}</h3>
                  <p className="text-xs tracking-luxury uppercase text-trc-cream/40 mb-3">{cmd.cue}</p>
                  <p className="text-sm text-trc-cream/60">{cmd.detail}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">Three New Chapters</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-16">Refinement, Chapter by Chapter</h2>
          </FadeUp>
          <div className="space-y-6">
            {elevateChapters.map((ch, i) => (
              <FadeUp key={ch.title} delay={i * 100}>
                <div className="p-8 border border-trc-border rounded-2xl bg-white/[0.02]">
                  <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-2 block">{ch.label}</span>
                  <h3 className="font-serif text-2xl text-trc-cream mb-4">{ch.title}</h3>
                  <p className="text-sm text-trc-cream/60 leading-relaxed">{ch.detail}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">Proof of Progress</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-6">The Elevate Assessment</h2>
            <p className="text-center text-trc-cream/60 max-w-2xl mx-auto mb-16">
              Elevate closes with a formal assessment checklist. The pass standard is 8 out of 10 successful reps per skill, in two different environments, because a skill your dog only knows in the living room is not finished yet.
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="p-8 border border-trc-border rounded-2xl bg-white/[0.02]">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                {assessmentSkills.map((skill) => (
                  <p key={skill} className="text-sm text-trc-cream/60">
                    <span className="text-trc-gold mr-2">&#10003;</span>
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">What Comes Next</span>
            <h2 className="text-3xl md:text-4xl font-serif text-trc-cream mb-6">The Complete Journey</h2>
            <p className="text-trc-cream/60 leading-relaxed mb-8">
              Passing the Elevate assessment is the gateway to service dog work. Accredited takes everything you have built and extends it into task training, public access preparation, and real-world readiness.
            </p>
            <Link
              href="/solo-training/accredited"
              className="inline-block px-8 py-3 border border-trc-cream/20 text-trc-cream rounded-full hover:border-trc-gold/50 hover:text-trc-gold transition-colors"
            >
              Explore Accredited
            </Link>
          </FadeUp>
        </div>
      </section>

      <CTAStrip
        heading="Ready to Elevate?"
        ctas={[
          { text: "Inquire Now", href: "/contact?subject=elevate-training" },
          { text: "All Programs", href: "/solo-training", variant: "outline" },
        ]}
      />
    </>
  );
}
