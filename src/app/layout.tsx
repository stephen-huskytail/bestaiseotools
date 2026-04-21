import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Header, Footer, PostHogProvider } from "@/components";

const inter = Inter({
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://smartseotools.ai'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Smart SEO Tools - Discover the Top AI-Powered SEO Tools",
  description:
    "Your trusted source for discovering and comparing the best AI-powered SEO tools to boost your search rankings and grow your business.",
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart SEO Tools - Discover the Top AI-Powered SEO Tools',
    description: 'Your trusted source for discovering and comparing the best AI-powered SEO tools to boost your search rankings and grow your business.',
  },
  openGraph: {
    type: 'website',
    siteName: 'Smart SEO Tools',
    title: 'Smart SEO Tools - Discover the Top AI-Powered SEO Tools',
    description: 'Your trusted source for discovering and comparing the best AI-powered SEO tools to boost your search rankings and grow your business.',
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
        <Suspense fallback={null}>
          <PostHogProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </PostHogProvider>
        </Suspense>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
