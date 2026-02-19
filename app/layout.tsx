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

export const metadata: Metadata = {
  title: 'Sunrise Seedlings - From Our Garden to Yours!',
  description:
    'A kid-run plant nursery growing heirloom tomatoes, fresh herbs, colorful peppers, and sunshine-bright sunflowers. From our garden to yours!',
  openGraph: {
    title: 'Sunrise Seedlings - From Our Garden to Yours!',
    description: 'A kid-run plant nursery growing heirloom tomatoes, fresh herbs, colorful peppers, and more. From our garden to yours!',
    url: 'https://sunriseseedlings.com',
    siteName: 'Sunrise Seedlings',
    images: [
      {
        url: 'https://sunriseseedlings.com/images/kids-garden.jpg',
        width: 1200,
        height: 630,
        alt: 'Kids tending their garden at Sunrise Seedlings',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunrise Seedlings - From Our Garden to Yours!',
    description: 'A kid-run plant nursery growing heirloom tomatoes, fresh herbs, colorful peppers, and more.',
    images: ['https://sunriseseedlings.com/images/kids-garden.jpg'],
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
