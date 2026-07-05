import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { SectionCard } from "@/components/section-card";
import { CTAStrip } from "@/components/cta";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Accredited | Rowe Solo Training",
  description:
    "The Accredited Training Program: the complete edition. The full Foundation and Elevate curriculum plus service dog task training, public access preparation, and real-world readiness.",
};

const curriculum = [
  { chapter: "Chapter One", title: "Puppy Foundations", detail: "Critical development windows, housetraining, sleep routines, name recognition, and bite inhibition." },
  { chapter: "Chapter Two", title: "Core Obedience", detail: "Marker training and the six essential commands, proofed against distance, duration, and distraction." },
  { chapter: "Chapter Three", title: "Socialization & Environment Work", detail: "Neutral, confident exposure to the world with weekly checklists and location trackers." },
  { chapter: "Chapter Four", title: "Handling & Grooming Comfort", detail: "Consent-based handling that makes vet visits and grooming safe and cooperative." },
  { chapter: "Chapter Five", title: "Building Independence", detail: "Calm alone time, from thirty seconds to a full hour, that prevents separation anxiety." },
];

const taskFramework = [
  { step: "Need", detail: "What disability symptom needs mitigation? Every task starts with a real, specific need." },
  { step: "Task", detail: "What can the dog actually do to help? Alert, brace, retrieve, interrupt, ground." },
  { step: "Criteria", detail: "What does success look like? Measurable standards, not feelings." },
  { step: "Proof", detail: "How do you know it is working? Logs, accuracy tracking, and testing in public settings." },
];

const taskLibrary = [
  { category: "Mobility", examples: "Item retrieval, door opening, light switches, balance counterweight, forward momentum pull, medication retrieval." },
  { category: "Psychiatric & PTSD", examples: "Deep pressure therapy, panic attack interruption, nightmare interruption, dissociation grounding, space buffering." },
  { category: "Hearing", examples: "Doorbell alerts, smoke alarm alerts, name call alerts, baby cry alerts, phone ring alerts." },
  { category: "Medical Alert", examples: "Blood sugar alerts, cardiac event alerts, medication retrieval, episode grounding, alerting another person." },
  { category: "Seizure Response", examples: "Fetch phone, activate emergency alert, cushion head, stay and guard, alert a family member." },
];

const sixSteps = [
  { step: "Foundation Behavior", detail: "Teach the raw mechanical behavior in a low-distraction environment, with a high rate of reinforcement." },
  { step: "Add the Cue", detail: "Introduce the verbal cue, hand signal, or situational trigger until the dog performs reliably on cue." },
  { step: "The Three D's", detail: "Build duration, distance, and distraction until the behavior is robust anywhere." },
  { step: "Contextualize to Disability", detail: "Connect the behavior to the actual symptom or situation, so the dog performs when it is truly needed." },
  { step: "Generalization", detail: "Practice across homes, public spaces, work, and travel. Different times, different conditions." },
  { step: "Reliability Testing & Maintenance", detail: "Track success rates with a target of 80 percent or better in all environments, with ongoing reinforcement for life." },
];

const publicAccessStandards = [
  "Neutral to food on the ground and offered food",
  "Neutral to other dogs, with no pulling, barking, or fixating",
  "Settles quietly under a table or beside the handler",
  "Loose leash walking without pulling or lagging",
  "No vocalizing except for trained alerts",
  "Recovers from distraction within three seconds",
  "Tolerates handling by strangers",
  "Relieves on cue, in appropriate locations only",
];

export default function AccreditedPage() {
  return (
    <>
      <Hero
        label="Rowe Solo Training"
        title="Accredited"
        subtitle="The complete edition. Everything in Foundation and Elevate, then the full service dog curriculum: task training, public access preparation, legal knowledge, and real-world readiness."
        primaryCta={{ text: "Begin Accredited", href: "/contact?subject=accredited-training" }}
        secondaryCta={{ text: "All Programs", href: "/solo-training" }}
      />

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-7xl mx-auto">
          <SectionCard
            title="The Complete Journey"
            description="Accredited is the most comprehensive program we offer: the entire Foundation and Elevate curriculum, a formal readiness assessment, and then the work that sets this program apart, a full owner-led service dog education. From understanding what the law actually says to teaching, proofing, and maintaining disability-mitigating tasks, this is the edition for handlers who need their dog to work."
            image="/images/solo-training/guy_aussie.jpeg"
            imageAlt="Watercolor illustration of a handler with an Australian Shepherd"
          />
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">The Full Curriculum</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-6">Five Chapters, One Standard</h2>
            <p className="text-center text-trc-cream/60 max-w-2xl mx-auto mb-16">
              Every Accredited team completes the full training arc and passes a formal assessment, 8 out of 10 reps per skill in two environments, before advancing to service dog work. A dog that cannot behave reliably is not ready for service work, regardless of task training.
            </p>
          </FadeUp>
          <div className="space-y-4">
            {curriculum.map((item, i) => (
              <FadeUp key={item.title} delay={i * 100}>
                <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02] flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className="text-xs tracking-luxury uppercase text-trc-gold/60 w-32 shrink-0">{item.chapter}</span>
                  <div>
                    <h3 className="font-serif text-lg text-trc-cream mb-1">{item.title}</h3>
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
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">What Makes It Accredited</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-6">Service Dog Training, Done Right</h2>
            <p className="text-center text-trc-cream/60 max-w-2xl mx-auto mb-16">
              Under the ADA, a service dog is individually trained to perform tasks that directly mitigate a person’s disability. No registry, vest, or ID card creates a service dog. Task training does. Accredited begins with the law: what a service dog is, what it is not, and how service dogs differ from emotional support animals and therapy dogs, so you train with clarity and confidence.
            </p>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Service Dog", detail: "Individually trained tasks that mitigate a disability. Protected under the ADA. No certification required, and the work speaks for itself." },
              { title: "Emotional Support Animal", detail: "Provides comfort by presence, typically without trained tasks. Limited housing protections, no public access rights." },
              { title: "Therapy Dog", detail: "Works with many people in schools and hospitals through a certifying organization. Comfort for others, not disability mitigation." },
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
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">The Task Selection Framework</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-6">Need. Task. Criteria. Proof.</h2>
            <p className="text-center text-trc-cream/60 max-w-2xl mx-auto mb-16">
              Most handlers fail because they never clearly define what their dog needs to do. This framework makes every task rooted in a real need, actionable, measurable, and provable in the real world. It also guides matching: honest assessment of your needs and your dog’s temperament, size, drive, and health.
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {taskFramework.map((item, i) => (
              <FadeUp key={item.step} delay={i * 100}>
                <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02] h-full text-center">
                  <span className="font-serif text-3xl text-trc-gold/60 block mb-3">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-lg text-trc-gold mb-2">{item.step}</h3>
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
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">The Expanded Task Library</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-6">Tasks Across Five Categories</h2>
            <p className="text-center text-trc-cream/60 max-w-2xl mx-auto mb-16">
              A complete library of service dog tasks by category, with guidance on which tasks suit which dogs, how to build custom tasks for disabilities that are not listed, and the honest distinction between trainable response tasks and natural alert abilities.
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {taskLibrary.map((item, i) => (
              <FadeUp key={item.category} delay={i * 100}>
                <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02] h-full">
                  <h3 className="font-serif text-lg text-trc-gold mb-2">{item.category}</h3>
                  <p className="text-sm text-trc-cream/60">{item.examples}</p>
                </div>
              </FadeUp>
            ))}
            <FadeUp delay={500}>
              <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02] h-full">
                <h3 className="font-serif text-lg text-trc-gold mb-2">Custom Tasks</h3>
                <p className="text-sm text-trc-cream/60">A five-question framework for shaping valid, trainable tasks around any disability, even ones that are rarely discussed.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">How Tasks Are Taught</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-6">The Six-Step Training Framework</h2>
            <p className="text-center text-trc-cream/60 max-w-2xl mx-auto mb-16">
              One framework applies to every service dog task, and Accredited walks through it with complete worked examples: medication retrieval, deep pressure therapy, panic attack interruption, doorbell and alarm alerts, seizure response, and bracing.
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-6">
            {sixSteps.map((item, i) => (
              <FadeUp key={item.step} delay={i * 100}>
                <div className="p-6 border border-trc-border rounded-xl bg-white/[0.02] h-full">
                  <span className="text-xs tracking-luxury uppercase text-trc-gold/60 block mb-2">Step {i + 1}</span>
                  <h3 className="font-serif text-lg text-trc-cream mb-2">{item.step}</h3>
                  <p className="text-sm text-trc-cream/60">{item.detail}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">Public Access Preparation</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-6">Non-Negotiable Standards</h2>
            <p className="text-center text-trc-cream/60 max-w-2xl mx-auto mb-16">
              Public access is earned through behavior. Accredited holds every team to the standards that protect your access and the reputation of all service dog handlers.
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="p-8 border border-trc-border rounded-2xl bg-white/[0.02]">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {publicAccessStandards.map((standard) => (
                  <p key={standard} className="text-sm text-trc-cream/60">
                    <span className="text-trc-gold mr-2">&#10003;</span>
                    {standard}
                  </p>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-trc-border">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block text-center">Real-World Ready</span>
            <h2 className="text-3xl md:text-5xl font-serif text-trc-cream text-center mb-16">Beyond the Training Field</h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Air Travel & the DOT Form", detail: "Complete preparation for flying with your service dog, including the U.S. Department of Transportation Service Animal Air Transportation Form, long-duration settle practice, and airport navigation." },
              { title: "Legal Rights & Identification", detail: "What federal and state law actually say about service dogs and dogs in training, plus honest guidance on gear, identification, and avoiding the fake-certification industry." },
              { title: "Car Travel & Hotel Etiquette", detail: "Vehicle safety, road trip planning, and how to be the guest that makes hotels glad to welcome service dog teams." },
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
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <FadeUp>
              <div className="p-8 border border-trc-border rounded-2xl bg-white/[0.02] h-full">
                <h3 className="font-serif text-xl text-trc-gold mb-4">A Lifelong Standard</h3>
                <p className="text-sm text-trc-cream/60 leading-relaxed">
                  Service dog training is never finished. Accredited includes a daily, weekly, and monthly maintenance plan, a final assessment with a pass standard of 9 out of 10 reps per skill, and reliability tracking across home, work, and public environments.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <div className="p-8 border border-trc-border rounded-2xl bg-white/[0.02] h-full">
                <h3 className="font-serif text-xl text-trc-gold mb-4">An Ethical Commitment</h3>
                <p className="text-sm text-trc-cream/60 leading-relaxed">
                  Humane, reward-based methods only. No shock collars, no prong collars, no punishment. A service dog is a partner, not equipment, and their welfare always comes before task performance.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Begin the Accredited Journey"
        ctas={[
          { text: "Inquire Now", href: "/contact?subject=accredited-training" },
          { text: "All Programs", href: "/solo-training", variant: "outline" },
        ]}
      />
    </>
  );
}
