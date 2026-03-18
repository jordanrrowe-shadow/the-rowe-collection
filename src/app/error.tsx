"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">Error</span>
      <h1 className="text-4xl md:text-6xl font-serif text-trc-cream mb-6">Something Went Wrong</h1>
      <p className="text-trc-cream/60 mb-10 max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-8 py-3 bg-gradient-to-r from-trc-gold to-trc-bronze text-trc-black font-semibold rounded-full hover:opacity-90 transition-opacity"
      >
        Try Again
      </button>
    </div>
  );
}
