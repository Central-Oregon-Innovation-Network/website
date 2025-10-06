import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://centraloregoninnovation.com'),
  title: 'Central Oregon Innovation Network',
  description: 'Empowering the innovation community in Central Oregon - one resource, connection, collaboration, and event at a time.',
  keywords: ['Central Oregon', 'innovation', 'tech startups', 'entrepreneurship', 'Bend Oregon', 'startup community'],
  authors: [{ name: 'Central Oregon Innovation Network' }],
  icons: {
    icon: '/icons/favicon.ico',
  },
  openGraph: {
    title: 'Central Oregon Innovation Network',
    description: 'Empowering the innovation community in Central Oregon - one resource, connection, collaboration, and event at a time.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Central Oregon Innovation Network',
    url: 'https://centraloregoninnovation.com',
    images: [
      {
        url: '/images/coin_hero.png',
        width: 1200,
        height: 630,
        alt: 'Central Oregon Innovation Network - Empowering the innovation community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Central Oregon Innovation Network',
    description: 'Empowering the innovation community in Central Oregon - one resource, connection, collaboration, and event at a time.',
    images: ['/images/coin_hero.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
