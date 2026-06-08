import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lehrlingstower — Lehrstellen in Schweizer Schulen bewerben",
  description:
    "Lehrlingstower bringt Ausbildungsplätze direkt in Schweizer Schulen. Digitale Bildschirme in Schulgebäuden — regional, sichtbar, wirkungsvoll. Ab CHF 129.–/Monat.",
  keywords: [
    "Lehrstellen Werbung Schweiz",
    "Ausbildungsplatz bewerben Schule",
    "digitale Werbung Lehrling",
    "Lehrstellenwerbung digital",
    "Lehrlingstower",
    "Azubi Werbung Schweiz",
    "Bildschirm Werbung Schule",
    "Nachwuchs finden Schweiz",
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
      "Digitale Bildschirme in Schweizer Schulen — präsentieren Sie Ihren Ausbildungsplatz täglich hunderten Schülerinnen und Schülern. Kostenlos für Schulen. Ab CHF 129.–/Monat.",
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
      "Digitale Bildschirme in Schweizer Schulen für Ausbildungsplätze. Regional, sichtbar, wirkungsvoll.",
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
        {children}
      </body>
    </html>
  );
}
