import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Rowe Collection",
    template: "%s | The Rowe Collection",
  },
  description:
    "The Rowe Collection, LLC — an AI-native business built on intelligence. Home of RoweOS.",
  metadataBase: new URL("https://therowecollection.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Rowe Collection",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
