"use client";

import { useActionState } from "react";
import { submitEmailSignup, type ContactFormState } from "@/app/contact/actions";

export function EmailSignup() {
  const [state, action, pending] = useActionState<ContactFormState, FormData>(
    submitEmailSignup,
    { success: false }
  );

  if (state.success) {
    return (
      <p className="text-trc-gold text-sm text-center">Thanks for subscribing!</p>
    );
  }

  return (
    <form action={action} className="flex gap-2 max-w-md mx-auto">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className="flex-1 px-4 py-2 bg-white/5 border border-trc-border rounded-full text-trc-cream placeholder:text-trc-cream/30 focus:outline-none focus:border-trc-gold/50"
      />
      <button
        type="submit"
        disabled={pending}
        className="px-6 py-2 bg-gradient-to-r from-trc-gold to-trc-bronze text-trc-black font-semibold rounded-full text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {pending ? "..." : "Subscribe"}
      </button>
      {state.error && <p className="text-red-400 text-xs mt-1">{state.error}</p>}
    </form>
  );
}
