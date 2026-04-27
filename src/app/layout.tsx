import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Header, Footer, PostHogProvider } from "@/components";

const inter = Inter({
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.smartseotools.ai'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Smart SEO Tools - Discover the Top AI-Powered SEO Tools",
  description:
    "Your trusted source for discovering and comparing the best AI-powered SEO tools to boost your search rankings and grow your business.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Smart SEO Tools - Discover the Top AI-Powered SEO Tools",
    description:
      "Your trusted source for discovering and comparing the best AI-powered SEO tools to boost your search rankings and grow your business.",
    url: SITE_URL,
    siteName: "Smart SEO Tools",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Smart SEO Tools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart SEO Tools - Discover the Top AI-Powered SEO Tools",
    description:
      "Your trusted source for discovering and comparing the best AI-powered SEO tools to boost your search rankings and grow your business.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <PostHogProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
