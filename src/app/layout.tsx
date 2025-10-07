import type { Metadata } from "next";
import Script from "next/script";
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
    default: "Adviesneutraal Klantenservice Energie",
    template: "%s | Adviesneutraal Energie",
  },
  description:
    "Bel 085 087 0276 en sta binnen 20 seconden in contact met de onafhankelijke energie-klantenservice van Adviesneutraal.",
  keywords: [
    "energie klantenservice",
    "energie vragen",
    "energie contract wijzigen",
    "storing energie",
    "adviesneutraal klantenservice",
  ],
  openGraph: {
    title: "Adviesneutraal Klantenservice Energie",
    description:
      "Binnen 20 seconden verbonden met een energie-expert. Bel 085 087 0276 voor factuurvragen, contractwijzigingen of storingen.",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adviesneutraal Klantenservice Energie",
    description:
      "Direct hulp bij al je energiezaken via 085 087 0276 – zonder wachttijd.",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17614366178"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17614366178');
          `}
        </Script>
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof url !== 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  send_to: 'AW-17614366178/lPTfCIn72agbEOLLl89B',
                  value: 5.0,
                  currency: 'USD',
                  event_callback: callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
      </body>
    </html>
  );
}
