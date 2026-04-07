import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saatharla Kumar | Full Stack Developer",
  description:
    "Full Stack Developer & Innovation Ambassador with 10+ months of internship experience. Proficient in React.js, Node.js, and MongoDB. Open Source Contributor at GSSoC 2025. Building AI-powered systems and enterprise applications.",
  keywords: [
    "Saatharla Kumar",
    "Full Stack Developer",
    "React Developer",
    "Node.js",
    "Portfolio",
    "Innovation Ambassador",
    "GSSoC 2025",
  ],
  authors: [{ name: "Saatharla Kumar" }],
  openGraph: {
    title: "Saatharla Kumar | Full Stack Developer",
    description:
      "Full Stack Developer & Innovation Ambassador. React.js, Node.js, MongoDB. Open Source Contributor.",
    type: "website",
    locale: "en_IN",
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-surface text-gray-200 antialiased">
        {children}
        {/* Film grain overlay */}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
