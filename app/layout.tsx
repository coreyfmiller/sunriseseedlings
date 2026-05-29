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
const ogImage = `${siteUrl}/images/SunriseSeedlings.png`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sunrise Seedlings – Closed for the Season | See You in 2027!',
    template: '%s | Sunrise Seedlings',
  },
  description:
    'Sunrise Seedlings is a kid-run backyard plant nursery in Quispamsis, NB. We are closed for the season — see you in spring 2027!',
  keywords: [
    'Sunrise Seedlings',
    'plant nursery Quispamsis',
    'kid-run nursery',
    'kid-grown plants',
    'backyard nursery New Brunswick',
  ],
  authors: [{ name: 'Sunrise Seedlings' }],
  creator: 'Sunrise Seedlings',
  publisher: 'Sunrise Seedlings',
  category: 'Local Business – Plant Nursery',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Sunrise Seedlings – Closed for the Season | See You in 2027!',
    description:
      'Sunrise Seedlings is a kid-run backyard nursery in Quispamsis, NB. We are closed for the season — see you in spring 2027!',
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
    title: 'Sunrise Seedlings – Closed for the Season | See You in 2027!',
    description:
      'A kid-run backyard plant nursery in Quispamsis, NB. Closed for the season — see you in spring 2027!',
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
