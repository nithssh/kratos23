import './globals.css'
import Navbar from './_components/navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './_components/footer'
import { SessionProvider } from 'next-auth'
import { AuthContextProvider  } from "./context/AuthContext"

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

// export default function App({ Component, pageProps }) {
//   return (
//      <SessionProvider session = {pageProps.session ? pageProps.session : {}}>
//        <RootLayout>
//          <Component {...pageProps} />
//        </RootLayout>
//      </SessionProvider>
//   )
//  }

// import './globals.css'
// import Navbar from './_components/navbar'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import Footer from './_components/footer'
// import { SessionProvider } from 'next-auth/react'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Kratos 23 | EEC',
//   description: 'TODO description',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <SessionProvider>
//       <html lang="en">
//         <body className={inter.className}>
//           <Navbar />
//           {children}
//           <Footer />
//         </body>
//       </html>
//     </SessionProvider>
//   )
// }
