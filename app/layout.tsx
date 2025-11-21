import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Neuhives - Pipeline-as-a-Service for AI SaaS",
  description: "We build AI-driven outbound systems that deliver 20–40 qualified demos/month — without SDRs, ad spend, or unpredictable pipelines.",
  keywords: ["AI SaaS", "outbound", "pipeline", "lead generation", "sales automation"],
  authors: [{ name: "Neuhives" }],
  openGraph: {
    title: "Neuhives - Pipeline-as-a-Service for AI SaaS",
    description: "We build AI-driven outbound systems that deliver 20–40 qualified demos/month — without SDRs, ad spend, or unpredictable pipelines.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuhives - Pipeline-as-a-Service for AI SaaS",
    description: "We build AI-driven outbound systems that deliver 20–40 qualified demos/month — without SDRs, ad spend, or unpredictable pipelines.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
