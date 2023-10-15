import { fraunces, open_sans } from './fonts'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ordinacija za ultrazvučnu dijagnostiku Dr Rahović',
  description: 'Ordinacija za ultrazvučnu dijagnostiku Dr Rahović',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="sr-ME"
      className={`min-h-screen w-full ${open_sans.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen w-full">{children}</body>
    </html>
  )
}
