import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dr. Rahovic - Development',
  description: 'Ultrazuk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="min-h-screen w-full">
      <body className="min-h-screen w-full">{children}</body>
    </html>
  )
}
