import Link from "next/link";
import { FadeUp } from "./fade-up";

interface CTAProps {
  text: string;
  href: string;
  variant?: "primary" | "outline";
  external?: boolean;
}

export function CTA({ text, href, variant = "primary", external }: CTAProps) {
  const styles =
    variant === "primary"
      ? "px-8 py-3 bg-gradient-to-r from-trc-gold to-trc-bronze text-trc-black font-semibold rounded-full hover:opacity-90 transition-opacity"
      : "px-8 py-3 border border-trc-cream/20 text-trc-cream rounded-full hover:border-trc-gold/50 hover:text-trc-gold transition-colors";

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>{text}</a>;
  }
  return <Link href={href} className={styles}>{text}</Link>;
}

export function CTAStrip({ heading, ctas }: { heading: string; ctas: CTAProps[] }) {
  return (
    <FadeUp>
      <section className="py-24 px-6 text-center border-t border-trc-border">
        <h2 className="text-3xl md:text-4xl font-serif text-trc-cream mb-8">{heading}</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {ctas.map((cta) => (
            <CTA key={cta.text} {...cta} />
          ))}
        </div>
      </section>
    </FadeUp>
  );
}
