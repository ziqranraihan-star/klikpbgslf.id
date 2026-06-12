import './globals.css';

import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Manrope, Space_Grotesk } from 'next/font/google';

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
  keywords: [
    'konsultan PBG',
    'konsultan SLF',
    'jasa PBG',
    'jasa SLF',
    'Persetujuan Bangunan Gedung',
    'Sertifikat Laik Fungsi',
    'SIMBG',
    'pengurusan PBG',
    'pengurusan SLF',
    'klikpbgslf.id',
  ],
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
  '@type': 'ProfessionalService',
  name: siteMeta.name,
  url: siteMeta.url,
  description: siteMeta.description,
  serviceType: ['Persetujuan Bangunan Gedung', 'Sertifikat Laik Fungsi', 'Konsultan Bangunan'],
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia',
  },
  sameAs: contact.socials.map((item) => item.href),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen font-body text-ink antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
