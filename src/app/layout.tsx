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
  title: 'V Labs',
  description: 'V Labs Landing Website',
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
