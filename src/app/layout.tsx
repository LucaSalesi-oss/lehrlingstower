import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lehrlingstower — Lehrstellen direkt in Schweizer Schulen bewerben",
  description:
    "Lehrlingstower bringt Lehrstellen und Ausbildungsplätze direkt in Schweizer Schulen — auf digitalen Bildschirmen, täglich sichtbar für Schülerinnen und Schüler. Kostenlos für Schulen.",
  keywords: [
    "Lehrstellen bewerben Schule Schweiz",
    "Lehrlingstower",
    "digitale Lehrstellenwerbung",
    "Lehrstellen Schweiz finden",
    "Nachwuchs finden Lehrbetrieb",
    "Lehrstellenmarketing Schweiz",
    "Ausbildungsplatz Werbung Schule",
    "Lehrstellen Bildschirm Schule",
    "Lehrbetrieb Sichtbarkeit Schüler",
    "Schnupperlehre bewerben",
    "Lehrstellen Kanton",
    "Fachkräftemangel Schweiz Lehrlinge",
    "Berufswahl Schüler Schweiz",
    "Lehrstellen unbesetzt Schweiz",
    "digitale Werbung Schule Schweiz",
  ],
  authors: [{ name: "Lehrlingstower", url: "https://www.lehrlingstower.ch" }],
  creator: "Lehrlingstower",
  metadataBase: new URL("https://www.lehrlingstower.ch"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://www.lehrlingstower.ch",
    siteName: "Lehrlingstower",
    title: "Lehrlingstower — Lehrstellen direkt in die Schule bringen",
    description:
      "Digitale Bildschirme in Schweizer Schulen — präsentieren Sie Ihre Lehrstelle täglich hunderten Schülerinnen und Schülern. Kostenlos für Schulen. Regional und wirkungsvoll.",
    images: [
      {
        url: "/logo.png",
        width: 1013,
        height: 296,
        alt: "Lehrlingstower — Ausbildungen sichtbar machen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lehrlingstower — Lehrstellen direkt in die Schule bringen",
    description:
      "Lehrstellen direkt in Schweizer Schulen bewerben — auf digitalen Bildschirmen, täglich sichtbar. Kostenlos für Schulen.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lehrlingstower",
              url: "https://www.lehrlingstower.ch",
              logo: "https://www.lehrlingstower.ch/logo.png",
              description:
                "Lehrlingstower bringt Ausbildungsplätze direkt in Schweizer Schulen — auf digitalen Bildschirmen, täglich sichtbar für Schülerinnen und Schüler.",
              email: "info@lehrlingstower.ch",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kolpingweg 62",
                addressLocality: "Tuttlingen",
                postalCode: "78532",
                addressCountry: "DE",
              },
              areaServed: "CH",
              founder: {
                "@type": "Person",
                name: "Luca Salesi",
              },
            }),
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
