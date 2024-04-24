import type { Metadata } from 'next'
import { Katibeh, Roboto } from 'next/font/google'
import '@/app/globals.scss'

const katibeh_init = Katibeh({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-katibeh',
})
const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
})

const classNames = [katibeh_init.variable, roboto_init.variable]

export const metadata: Metadata = {
  title: 'V Labs | a digital media company',
  description:
    'Results driven, Creative led marketing for ambitious brands',
  keywords: 'digital media, social media, content media',
  robots: 'follow, index',
  openGraph: {
    title: 'V Labs | a digital media company',
    description:
      'Results driven, Creative led marketing for ambitious brands',
    images: [
      {
        url: 'https://res.cloudinary.com/dsknhgphh/image/upload/v1710609743/vlabs%20website%20assets/images/home-first-cover-image.svg',
      },
    ],
    url: 'https://www.vlabs.com.au',
    siteName: 'V Labs | a digital media company',
    locale: 'en',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={classNames.join(' ')}>{children}</body>
    </html>
  )
}
