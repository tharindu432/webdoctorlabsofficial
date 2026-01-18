import Head from 'next/head';
import Script from 'next/script';
import React from "react";
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

export const metadata = {
  title: "Web Doctor Labs – Custom Software & AI Solutions",
  description:
    "Building future-ready web, mobile, and AI solutions for startups and enterprises. Trusted innovation partner worldwide.",
    icons: {
    icon: '/favicon.png', // Use .png instead of .ico
  },

  keywords: [
    "Web Doctor Labs",
    "custom software development",
    "AI solutions",
    "mobile app development",
    "web development",
    "enterprise software",
  ],
  authors: [{ name: "Web Doctor Labs", url: "https://webdoctorlabs.com" }],
  openGraph: {
    title: "Web Doctor Labs – Custom Software & AI Solutions",
    description:
      "Building future-ready web, mobile, and AI solutions for startups and enterprises.",
    url: "https://webdoctorlabs.com",
    siteName: "Web Doctor Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://webdoctorlabs.com/favicon.png", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Web Doctor Labs",
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Doctor Labs – Custom Software & AI Solutions",
    description:
      "Custom software, AI, and web/mobile app development services.",
    creator: "@webdoctorlabs", // optional
    images: ["https://webdoctorlabs.com/favicon.png"],
  },
  metadataBase: new URL("https://webdoctorlabs.com"),
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <Head>
      <link rel="icon" href="/favicon.png" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Web Doctor Labs",
            "alternateName": "WebDoctorLabs",
            "url": "https://webdoctorlabs.com"
          }),
        }}
      />
    </Head>
    
    {/* Google AdSense Script */}
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4426581172266577"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
    
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
    </body>
  </html>
);

export default RootLayout;