import { Analytics } from '@vercel/analytics/react';
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
  metadataBase: new URL('https://www.helloaura.agency'),
  title: 'Hello Aura | Digital strategists || Advertising & Marketing | Brand builders',
  description:
    'Digital Marketing | Collective of creative thinkers, digital strategists, and brand builders who understand that real connections matter more than just clicks and impressions',
  openGraph: {
    title: 'Hello Aura | | Advertising & Marketing | Digital strategists | Brand builders',
    description:
      'Digital Marketing | Collective of creative thinkers, digital strategists, and brand builders who understand that real connections matter more than just clicks and impressions',
    url: 'https://www.helloaura.agency',
    siteName: "Hello Aura",
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hello Aura",
              "url": "https://www.helloaura.agency",
              "description": 'Digital Marketing | Collective of creative thinkers, digital strategists, and brand builders who understand that real connections matter more than just clicks and impressions',
              "sameAs": [
                "https://www.linkedin.com/company/helloaura/"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
