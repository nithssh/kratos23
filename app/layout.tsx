import './globals.css'
import Navbar from './Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './Footer'
import { AuthContextProvider } from './context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kratos 23 | EEC',
  description: 'TODO description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  )
}
