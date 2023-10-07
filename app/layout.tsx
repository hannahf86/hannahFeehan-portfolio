import './globals.css'
import type { Metadata } from 'next'
import { Maven_Pro } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Footer from './Components/Footer/page'

const mavenPro = Maven_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hannah Feehan | Full-stack Developer',
  description: 'Portfolio for Hannah Feehan, Full-stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mavenPro.className}>
        <Toaster
          position='top-right'
          toastOptions={{ duration: 3000 }}
        />
        {children}
        <Footer />
      </body>
    </html>
  )
}
