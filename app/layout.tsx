import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://reelspandigial.ltd'),
  title: 'Reel Span Digital Limited - Under Construction',
  description: 'ReelSpan is building something amazing. Sign up to get notified when we launch.',
  keywords: ['ReelSpan', 'coming soon', 'under construction', 'launch notification','Reel Span Digital Limited'],
  openGraph: {
    title: 'ReelSpan - Under Construction',
    description: 'We\'re building something amazing. Check back soon.',
    url: 'https://reelspandigial.ltd',
    siteName: 'ReelSpan',
    images: [
      {
        url: '/RSDL Logo - Transparent BG.png',
        width: 500,
        height: 500,
        alt: 'ReelSpan Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReelSpan - Under Construction',
    description: 'We\'re building something amazing. Check back soon.',
    images: ['/RSDL Logo - Transparent BG.png'],
  },
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
      },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
      {
        rel: 'msapplication-TileImage',
        url: '/mstile-150x150.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
