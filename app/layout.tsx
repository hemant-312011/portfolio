import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "@/data/personal";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { CursorGlow } from "@/components/CursorGlow";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

const title = `${personal.name} — Frontend & Generative AI Developer`;
const description =
  "Frontend Engineer specializing in AI-native web applications — building RAG pipelines, multi-agent AI systems, and production-grade UIs with Next.js, TypeScript, and LangChain.js.";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title,
  description,
  keywords: [
    "Frontend Developer",
    "Generative AI Developer",
    "Next.js",
    "React",
    "TypeScript",
    "LangChain.js",
    "RAG",
    "Multi-Agent Systems",
    "LangGraph.js",
  ],
  authors: [{ name: personal.name, url: personal.github }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://example.com",
    siteName: `${personal.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <GradientBackdrop />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
