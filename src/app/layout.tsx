import '../styles/globals.css'
import { Inter, Lexend } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})
const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-lexend',
  display: 'swap',
})

export const metadata = {
  title: 'Peppercorn',
  metadataBase: new URL('https://mypeppercorn.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lexend.variable}`}>
        {children}
      </body>
    </html>
  )
}
