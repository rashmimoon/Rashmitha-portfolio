import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rashmitha-genai-portfolio.vercel.app"),
  title: "Rashmitha C | Generative AI & AI/ML Developer Portfolio",
  description:
    "Official portfolio of Rashmitha C, MCA Student specializing in Generative AI, Machine Learning, RAG architectures, and Explainable AI (SHAP). Featuring StudentSense AI case study, verified credentials, and technical implementations.",
  keywords: [
    "Rashmitha C",
    "Generative AI",
    "Machine Learning Developer",
    "RAG",
    "StudentSense AI",
    "Explainable AI",
    "SHAP",
    "MCA Student",
    "AI/ML Portfolio",
    "ChromaDB",
    "LLM Architecture"
  ],
  authors: [{ name: "Rashmitha C" }],
  creator: "Rashmitha C",
  openGraph: {
    title: "Rashmitha C — Generative AI & AI/ML Developer",
    description:
      "Building practical intelligent applications with Generative AI, Machine Learning, and RAG. Explore StudentSense AI case study and verified credentials.",
    type: "website",
    locale: "en_US",
    siteName: "Rashmitha C Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashmitha C — Generative AI & AI/ML Developer",
    description:
      "Building practical intelligent applications with Generative AI, Machine Learning, and RAG.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 selection:bg-indigo-500/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
