import type { Metadata, Viewport } from 'next'
import { Nunito, Bubblegum_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

const bubblegum = Bubblegum_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bubblegum',
})

const siteUrl = 'https://sunriseseedlings.com'
const ogImage = `${siteUrl}/images/kids-garden.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sunrise Seedlings – Kid-Grown Plants in Quispamsis, NB',
    template: '%s | Sunrise Seedlings',
  },
  description:
    'Sunrise Seedlings is a kid-run backyard plant nursery in Quispamsis, NB. We grow heirloom tomatoes, fresh herbs, sweet peppers, jalapeños, mint, and giant sunflowers — available for pickup every weekend.',
  keywords: [
    'Sunrise Seedlings',
    'plant nursery Quispamsis',
    'kid-run nursery',
    'seedlings for sale New Brunswick',
    'heirloom tomatoes NB',
    'garden plants Quispamsis',
    'local plant nursery',
    'kid-grown plants',
    'herbs for sale NB',
    'sunflowers Quispamsis',
    'backyard nursery New Brunswick',
    'cherry tomatoes seedlings',
    'sweet peppers seedlings',
    'basil plants for sale',
    'mint plants NB',
  ],
  authors: [{ name: 'Sunrise Seedlings' }],
  creator: 'Sunrise Seedlings',
  publisher: 'Sunrise Seedlings',
  category: 'Local Business – Plant Nursery',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Sunrise Seedlings – Kid-Grown Plants in Quispamsis, NB',
    description:
      'A kid-run backyard nursery in Quispamsis, NB growing heirloom tomatoes, herbs, peppers, mint, and giant sunflowers. Pickup weekends only — come say hi!',
    url: siteUrl,
    siteName: 'Sunrise Seedlings',
    locale: 'en_CA',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Kids tending their garden at Sunrise Seedlings nursery in Quispamsis NB',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunrise Seedlings – Kid-Grown Plants in Quispamsis, NB',
    description:
      'A kid-run backyard plant nursery in Quispamsis, NB. Heirloom tomatoes, herbs, peppers & more. Weekend pickups!',
    images: [ogImage],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#FFD700',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${bubblegum.variable} font-sans antialiased`}
      >
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}
