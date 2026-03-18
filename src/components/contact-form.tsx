"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const subjects = [
  { value: "general", label: "General Inquiry" },
  { value: "roweos", label: "RoweOS" },
  { value: "solo-training", label: "Rowe Solo Training" },
  { value: "retreats", label: "Rowe Retreats" },
  { value: "reserve", label: "Rowe Reserve" },
  { value: "rowe-and-co", label: "Rowe & Co." },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselect = searchParams.get("subject") || "general";
  const [state, action, pending] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    { success: false }
  );

  if (state.success) {
    return (
      <div className="p-8 border border-trc-gold/30 rounded-2xl text-center">
        <h3 className="font-serif text-2xl text-trc-gold mb-4">Message Sent</h3>
        <p className="text-trc-cream/60">Thank you for reaching out. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-6">
      {state.error && (
        <div className="p-4 border border-red-500/30 rounded-xl text-red-400 text-sm">
          {state.error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-xs tracking-luxury uppercase text-trc-gold/80 mb-2">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 bg-white/5 border border-trc-border rounded-xl text-trc-cream placeholder:text-trc-cream/30 focus:outline-none focus:border-trc-gold/50"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs tracking-luxury uppercase text-trc-gold/80 mb-2">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 bg-white/5 border border-trc-border rounded-xl text-trc-cream placeholder:text-trc-cream/30 focus:outline-none focus:border-trc-gold/50"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs tracking-luxury uppercase text-trc-gold/80 mb-2">Subject</label>
        <select
          id="subject"
          name="subject"
          defaultValue={preselect}
          className="w-full px-4 py-3 bg-white/5 border border-trc-border rounded-xl text-trc-cream focus:outline-none focus:border-trc-gold/50"
        >
          {subjects.map((s) => (
            <option key={s.value} value={s.value} className="bg-trc-black">
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs tracking-luxury uppercase text-trc-gold/80 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 bg-white/5 border border-trc-border rounded-xl text-trc-cream placeholder:text-trc-cream/30 focus:outline-none focus:border-trc-gold/50 resize-none"
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full px-8 py-3 bg-gradient-to-r from-trc-gold to-trc-bronze text-trc-black font-semibold rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
