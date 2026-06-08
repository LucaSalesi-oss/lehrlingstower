import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lehrlingstower — Lehrstellen direkt in die Schule bringen",
  description:
    "Digitale Stellenanzeigen in Schweizer Schulen. Erreichen Sie Schülerinnen und Schüler genau dort, wo sie sind.",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-256.png", sizes: "256x256", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Script id="scroll-top" strategy="beforeInteractive">{`
          if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
          if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname);
          }
          window.scrollTo(0, 0);
        `}</Script>
        {children}
      </body>
    </html>
  );
}
