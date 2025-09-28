import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: siteContent.site.title,
  description: siteContent.site.description,
  keywords: [
    "Clankess",
    "CLESS",
    "crypto",
    "token",
    "Plasma",
    "DeFi",
    "blockchain",
    "cryptocurrency",
    "trading",
  ],
  authors: [{ name: "Clankess Team" }],
  creator: "Clankess",
  publisher: "Clankess",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteContent.site.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteContent.site.title,
    description: siteContent.site.description,
    url: siteContent.site.url,
    siteName: siteContent.site.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteContent.site.name} - ${siteContent.site.description}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.site.title,
    description: siteContent.site.description,
    images: ["/og-image.png"],
    creator: "@yourhandle", // Update this
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#121416" />
        <meta name="msapplication-TileColor" content="#121416" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteContent.site.url}#organization`,
                  name: siteContent.site.name,
                  url: siteContent.site.url,
                  logo: `${siteContent.site.url}/logo.png`,
                  sameAs: [
                    siteContent.social.twitter,
                    siteContent.social.telegram,
                  ],
                  additionalProperty: [
                    {
                      "@type": "PropertyValue",
                      name: "Ticker",
                      value: siteContent.site.ticker,
                    },
                    {
                      "@type": "PropertyValue",
                      name: "Blockchain",
                      value: siteContent.site.chain,
                    },
                    {
                      "@type": "PropertyValue",
                      name: "Contract Address",
                      value: siteContent.contract.address,
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteContent.site.url}#website`,
                  url: siteContent.site.url,
                  name: siteContent.site.title,
                  description: siteContent.site.description,
                  publisher: {
                    "@id": `${siteContent.site.url}#organization`,
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate: `${siteContent.site.url}?q={search_term_string}`,
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-graphite text-white`}
      >
        {children}
      </body>
    </html>
  );
}
