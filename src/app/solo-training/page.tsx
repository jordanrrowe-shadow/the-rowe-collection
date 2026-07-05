import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { SectionCard } from "@/components/section-card";
import { CTAStrip } from "@/components/cta";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Rowe Solo Training",
  description:
    "Owner-led dog training in three complete programs: Foundation, Elevate, and Accredited. From first commands to full service dog readiness.",
};

const programs = [
  {
    name: "Foundation",
    tagline: "The Essentials",
    href: "/solo-training/foundation",
    image: "/images/solo-training/dog_onabook.png",
    imageAlt: "Watercolor illustration of a dog resting on a book",
    description:
      "Communication, confidence, and obedience. Puppy foundations, the six core commands, and the training rules that make everything else possible.",
    highlights: ["Puppy foundations & housetraining", "Six core commands with hand signals", "Proofing & progress trackers"],
  },
  {
    name: "Elevate",
    tagline: "The Refinement",
    href: "/solo-training/elevate",
    image: "/images/solo-training/eli_lottie_watercolor1.jpeg",
    imageAlt: "Watercolor illustration of two dogs together",
    description:
      "Everything in Foundation, then beyond. Six advanced commands plus full chapters on socialization, grooming comfort, and independence.",
    highlights: ["Six advanced commands", "Socialization & environment work", "Formal Elevate assessment"],
  },
  {
    name: "Accredited",
    tagline: "The Complete Edition",
    href: "/solo-training/accredited",
    image: "/images/solo-training/guy_aussie.jpeg",
    imageAlt: "Watercolor illustration of a handler with an Australian Shepherd",
    description:
      "The full curriculum plus owner-led service dog training: task selection, the six-step framework, public access standards, and travel readiness.",
    highlights: ["Service dog task training", "Public access preparation", "DOT air travel readiness"],
  },
];

export default function SoloTrainingPage() {
  return (
    <>
      <Hero
        label="Rowe Solo Training"
        title="Training Designed for Your World"
        subtitle="Owner-led dog training that puts you in control. Three complete programs, one method: Foundation, Elevate, and Accredited."
        primaryCta={{ text: "Start Your Journey", href: "/contact?subject=solo-training" }}
        secondaryCta={{ text: "Explore the Programs", href: "#programs" }}
      />

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <SectionCard
            title="Owner-Led by Design"
            description="Rowe Solo Training is built on a simple belief: the best trainer for your dog is you. Each program is a complete, step-by-step training packet that gives you the knowledge, structure, and trackers to train independently. Short sessions, positive reinforcement, and a shared language between you and your dog, built one win at a time."
            image="/images/solo-training/diana_kali_watercolor.png"
            imageAlt="Watercolor illustration of a woman training her dog"
          />
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">The Method</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-16">How Every Program Works</h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Short Sessions, Real Wins", detail: "Two to five minutes at a time, difficulty raised one step at a time, and every session ends on a win." },
              { title: "Cue + Hand Signal", detail: "Every skill is taught with a verbal cue and a matching hand signal, with exact numbered steps from first rep to finished behavior." },
              { title: "Proofed for Real Life", detail: "Skills are tested against distance, duration, and distraction, with built-in trackers so progress is visible, not guessed." },
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

      <section id="programs" className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">The Programs</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-6">Three Packets, One Path</h2>
            <p className="text-center text-trc-cream/60 max-w-2xl mx-auto mb-16">
              Each program contains everything that comes before it. Start where your dog is, and go as far as your world requires.
            </p>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, i) => (
              <FadeUp key={program.name} delay={i * 100}>
                <Link
                  href={program.href}
                  className="group block border border-trc-border rounded-2xl bg-white/[0.02] h-full overflow-hidden hover:border-trc-gold/40 transition-colors"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-2 block">{program.tagline}</span>
                    <h3 className="font-serif text-2xl text-trc-cream mb-3">{program.name}</h3>
                    <p className="text-sm text-trc-cream/60 mb-6">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      {program.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm text-trc-cream/60">
                          <span className="text-trc-gold mr-2">&#10003;</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <span className="text-sm text-trc-gold group-hover:text-trc-cream transition-colors">
                      Explore {program.name} &rarr;
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">The Path</span>
            <h2 className="text-3xl md:text-4xl font-serif text-trc-cream mb-6">From First Sit to Service Work</h2>
            <p className="text-trc-cream/60 leading-relaxed">
              Foundation builds the language. Elevate refines the partnership. Accredited turns it into a working team, with the legal knowledge, task training, and public access standards that real service dog work demands. Wherever you begin, the method stays the same: humane, reward-based training, short sessions, and progress you can measure.
            </p>
          </FadeUp>
        </div>
      </section>

      <CTAStrip
        heading="Ready to Start?"
        ctas={[
          { text: "Inquire Now", href: "/contact?subject=solo-training" },
          { text: "Explore Foundation", href: "/solo-training/foundation", variant: "outline" },
        ]}
      />
    </>
  );
}
