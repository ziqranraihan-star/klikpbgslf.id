import './globals.css';

import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Manrope, Space_Grotesk } from 'next/font/google';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import { contact, siteMeta } from '../data/site';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.title,
    template: `%s | ${siteMeta.name}`,
  },
  description: siteMeta.description,
  applicationName: siteMeta.name,
  keywords: ['Makassar Techno', 'Web Development', 'Aplikasi Mobile', 'IoT', 'Agency Teknologi'],
  icons: {
    icon: siteMeta.favicon,
  },
  openGraph: {
    type: 'website',
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: siteMeta.name,
    locale: siteMeta.locale,
    images: [
      {
        url: siteMeta.ogImage,
        width: 1200,
        height: 630,
        alt: siteMeta.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMeta.title,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: siteMeta.themeColor,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteMeta.name,
  url: siteMeta.url,
  logo: `${siteMeta.url}/logo-makassartechno.png`,
  sameAs: contact.socials.map((item) => item.href),
  description: siteMeta.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen font-body text-ink antialiased">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <BackToTop />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
