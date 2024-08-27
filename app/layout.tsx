import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { AuthProvider } from './contexts/AuthContext'
import Breadcrumb from './components/Breadcrumb'
import Analytics from './components/Analytics'

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
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-800`}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <AuthProvider>
          <Header />
          <Breadcrumb />
          <main className="flex-grow pt-16 md:pt-32">
            <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12 bg-gray-50 rounded-lg shadow-md">
              {children}
            </div>
          </main>
          <Footer />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}