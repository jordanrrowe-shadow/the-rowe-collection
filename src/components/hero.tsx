import Link from "next/link";
import { FadeUp } from "./fade-up";

interface HeroProps {
  title: string;
  subtitle?: string;
  label?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  children?: React.ReactNode;
}

export function Hero({ title, subtitle, label, primaryCta, secondaryCta, children }: HeroProps) {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-24">
      {label && (
        <FadeUp>
          <span className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4 block">
            {label}
          </span>
        </FadeUp>
      )}
      <FadeUp delay={100}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-trc-cream max-w-4xl leading-tight">
          {title}
        </h1>
      </FadeUp>
      {subtitle && (
        <FadeUp delay={200}>
          <p className="mt-6 text-lg md:text-xl text-trc-cream/60 max-w-2xl">
            {subtitle}
          </p>
        </FadeUp>
      )}
      {(primaryCta || secondaryCta) && (
        <FadeUp delay={300}>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="px-8 py-3 bg-gradient-to-r from-trc-gold to-trc-bronze text-trc-black font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                {primaryCta.text}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="px-8 py-3 border border-trc-cream/20 text-trc-cream rounded-full hover:border-trc-gold/50 hover:text-trc-gold transition-colors"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </FadeUp>
      )}
      {children}
    </section>
  );
}
