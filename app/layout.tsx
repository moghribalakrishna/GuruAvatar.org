// File: app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GuruAvatar - Revolutionizing Education',
  description: 'GuruAvatar is transforming education through AI, mentorship, mindfulness, and innovative learning techniques.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
