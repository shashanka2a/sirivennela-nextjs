import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sirivennela - Where Words Glow & Tunes Breathe",
  description: "From Swagatham Krishna to Samajavaragamana — Telugu melodies in moonlight. Celebrating the poetry and purity of Telugu music.",
  keywords: ["Telugu music", "Sirivennela", "Telugu songs", "Indian music", "classical music", "modern Telugu"],
  authors: [{ name: "Sirivennela" }],
  creator: "Sirivennela",
  publisher: "Sirivennela",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sirivennela.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sirivennela - Where Words Glow & Tunes Breathe",
    description: "From Swagatham Krishna to Samajavaragamana — Telugu melodies in moonlight.",
    url: 'https://sirivennela.com',
    siteName: 'Sirivennela',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sirivennela - Telugu Music in Moonlight',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sirivennela - Where Words Glow & Tunes Breathe",
    description: "From Swagatham Krishna to Samajavaragamana — Telugu melodies in moonlight.",
    images: ['/og-image.jpg'],
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
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
