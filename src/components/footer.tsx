import Link from "next/link";
import { EmailSignup } from "./email-signup";

const footerLinks = [
  { href: "/brilliance", label: "Brilliance" },
  { href: "/roweos", label: "RoweOS" },
  { href: "/solo-training", label: "Solo Training" },
  { href: "/retreats", label: "Retreats" },
  { href: "/reserve", label: "Reserve" },
  { href: "/rowe-and-co", label: "Rowe & Co." },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-trc-border bg-trc-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl text-trc-cream mb-4">The Rowe Collection</h3>
            <p className="text-sm text-trc-cream/50 leading-relaxed">
              An AI-native business built on intelligence. Home of Brilliance, the Intelligence OS by RoweOS. Austin, TX.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-trc-cream/50 hover:text-trc-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-luxury uppercase text-trc-gold/80 mb-4">Stay Updated</h4>
            <EmailSignup />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-trc-border text-center text-xs text-trc-cream/30">
          <p>&copy; {new Date().getFullYear()} The Rowe Collection, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
