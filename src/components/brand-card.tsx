import Link from "next/link";
import Image from "next/image";
import { FadeUp } from "./fade-up";

interface BrandCardProps {
  name: string;
  tagline: string;
  href: string;
  logo: string;
  delay?: number;
}

export function BrandCard({ name, tagline, href, logo, delay = 0 }: BrandCardProps) {
  return (
    <FadeUp delay={delay}>
      <Link
        href={href}
        className="group block p-8 border border-trc-border rounded-2xl hover:border-trc-gold/30 transition-all bg-white/[0.02] hover:bg-white/[0.04]"
      >
        <div className="h-16 mb-6 flex items-center">
          <Image src={logo} alt={name} width={160} height={64} className="object-contain h-12 w-auto opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>
        <h3 className="font-serif text-xl text-trc-cream mb-2">{name}</h3>
        <p className="text-sm text-trc-cream/50">{tagline}</p>
      </Link>
    </FadeUp>
  );
}
