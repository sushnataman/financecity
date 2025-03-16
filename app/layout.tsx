import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://financecity.me'),
  title: {
    default: 'FinanceCity - Expert Financial Analysis & Market Insights',
    template: '%s | FinanceCity'
  },
  description: 'Access expert financial analysis, real-time market data, and comprehensive investment insights. Stay ahead with FinanceCity\'s professional market analysis and trading strategies.',
  keywords: ['financial analysis', 'market insights', 'trading strategies', 'investment analysis', 'stock market', 'cryptocurrency', 'forex trading', 'economic trends'],
  authors: [{ name: 'Aman Bhagat' }],
  creator: 'Aman Bhagat',
  publisher: 'FinanceCity',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://financecity.me',
    siteName: 'FinanceCity',
    title: 'FinanceCity - Expert Financial Analysis & Market Insights',
    description: 'Access expert financial analysis, real-time market data, and comprehensive investment insights.',
    images: [
      {
        url: 'https://financecity.me/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FinanceCity - Financial Analysis & Market Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FinanceCity - Expert Financial Analysis & Market Insights',
    description: 'Access expert financial analysis, real-time market data, and comprehensive investment insights.',
    images: ['https://financecity.me/twitter-image.jpg'],
    creator: '@financecity',
    site: '@financecity',
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
}: {
  children: React.ReactNode;
}) {
  // Create the JSON-LD schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FinanceCity",
    "url": "https://financecity.me",
    "description": "Expert financial analysis and market insights platform",
    "publisher": {
      "@type": "Organization",
      "name": "FinanceCity",
      "logo": {
        "@type": "ImageObject",
        "url": "https://financecity.me/logo.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://financecity.me/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FinanceCity",
    "url": "https://financecity.me",
    "logo": "https://financecity.me/logo.png",
    "sameAs": [
      "https://twitter.com/financecity",
      "https://linkedin.com/company/financecity",
      "https://facebook.com/financecity"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-888-123-4567",
      "contactType": "customer service",
      "email": "contact@financecity.me",
      "availableLanguage": ["English"]
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://financecity.me" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msvalidate.01" content="981933A800466E0FA9230AE68A799714" />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="google-adsense"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground">
              Skip to main content
            </a>
            <SiteHeader />
            <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}