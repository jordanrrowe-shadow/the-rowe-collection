import Image from "next/image";
import { FadeUp } from "./fade-up";

interface SectionCardProps {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

export function SectionCard({ title, description, image, imageAlt, reverse, children }: SectionCardProps) {
  return (
    <FadeUp>
      <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center py-16`}>
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-trc-cream">{title}</h2>
          <p className="text-trc-cream/60 leading-relaxed">{description}</p>
          {children}
        </div>
        {image && (
          <div className="flex-1">
            <Image
              src={image}
              alt={imageAlt || title}
              width={600}
              height={400}
              className="rounded-xl border border-trc-border"
            />
          </div>
        )}
      </div>
    </FadeUp>
  );
}
