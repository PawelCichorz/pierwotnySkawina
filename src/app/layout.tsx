// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rynek Pierwotny Skawina",
  description:
    "Oferty nieruchomości z rynku pierwotnego Skawina i okolice. Nowe domy i mieszkania. Stan deweloperski. Deweloperzy Skawina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        {/* Główny tag Google (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-1026468598"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-1026468598');
          `}
        </Script>

        {/* Snippet do śledzenia konwersji – kliknięcia wychodzące */}
        <Script id="conversion-click-outgoing" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {'send_to': 'AW-1026468598/QwgzCM6En5oYEPbVuukD'});
          `}
        </Script>

        {/* Snippet do śledzenia konwersji – inne zdarzenie */}
        <Script id="conversion-click-outgoing-1" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {'send_to': 'AW-1026468598/-bA-CLDDqZoYEPbVuukD'});
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
