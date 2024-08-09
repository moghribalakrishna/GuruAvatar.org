import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { AuthProvider } from './contexts/AuthContext'
import Breadcrumb from './components/Breadcrumb';

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
        <AuthProvider>
          <Header />
          <main className="flex-grow pt-2">
            <Breadcrumb />
            <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md bg-opacity-90">
              {children}
            </div>
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}