import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Adviesneutraal | Onafhankelijk financieel advies",
    template: "%s | Adviesneutraal",
  },
  description:
    "Adviesneutraal biedt onafhankelijk financieel advies voor professionals, ondernemers en gezinnen die toekomstbestendige keuzes willen maken.",
  keywords: [
    "financieel advies",
    "onafhankelijk advies",
    "hypotheekadvies",
    "financiële planning",
    "adviesneutraal",
  ],
  openGraph: {
    title: "Adviesneutraal | Onafhankelijk financieel advies",
    description:
      "Persoonlijk financieel advies zonder provisies. Heldere strategie, deskundige begeleiding en blijvende betrokkenheid.",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adviesneutraal | Onafhankelijk financieel advies",
    description:
      "Maak financiële keuzes met vertrouwen dankzij onafhankelijk advies en heldere taal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
