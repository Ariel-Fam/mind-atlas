import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteShell from "@/components/site-shell";

const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const serif = Source_Serif_4({ variable: "--font-serif", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Mind Atlas — Psychology for everyday life", template: "%s | Mind Atlas" },
  description: "An evidence-led library of psychology, psychological effects, and the science of everyday behavior.",
  openGraph: { title:"Mind Atlas — Psychology for everyday life", description:"Understand the mind behind everyday life.", images:[{url:"/og.png",width:1200,height:630,alt:"Mind Atlas — Understand the mind behind everyday life"}] },
  twitter: { card:"summary_large_image", title:"Mind Atlas — Psychology for everyday life", description:"Understand the mind behind everyday life.", images:["/og.png"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <body>
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
