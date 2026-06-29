import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://synapseai-olive.vercel.app"),
  title: {
    default: "Synapse AI — Next-Gen Data Automation Platform",
    template: "%s | Synapse AI",
  },
  description:
    "Synapse AI is an enterprise-grade data automation platform powered by neural orchestration. Automate complex pipelines, connect 50+ data sources, and scale to millions of events per second.",
  keywords: [
    "AI automation",
    "data pipeline",
    "neural orchestration",
    "ETL automation",
    "enterprise AI",
    "data integration",
    "workflow automation",
    "machine learning ops",
  ],
  authors: [{ name: "Mohammed Abdul Razzaq" }],
  creator: "Mohammed Abdul Razzaq",
  publisher: "Synapse AI",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://synapse-ai.vercel.app",
    title: "Synapse AI — Next-Gen Data Automation Platform",
    description:
      "Enterprise-grade AI data automation. Self-healing pipelines, 50+ connectors, sub-10ms execution. Scale from startup to enterprise without re-architecting.",
    siteName: "Synapse AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Synapse AI Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synapse AI — Next-Gen Data Automation Platform",
    description:
      "Enterprise-grade AI data automation. Self-healing pipelines, 50+ connectors, sub-10ms execution.",
    images: ["/og-image.png"],
    creator: "@synapseai",
  },
  alternates: {
    canonical: "https://synapse-ai.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#050510" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Synapse AI",
              applicationCategory: "BusinessApplication",
              description:
                "Next-generation AI-driven data automation platform with neural orchestration, universal connectors, and enterprise-grade security.",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                lowPrice: "29",
                highPrice: "199",
              },
              operatingSystem: "Web",
              url: "https://synapse-ai.vercel.app",
            }),
          }}
        />
      </head>
      <body className="bg-void text-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
