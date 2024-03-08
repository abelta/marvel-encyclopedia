import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Inter } from 'next/font/google'
// import { FavsCount } from 'components'
import { Logo } from 'icons'
import './globals.css'

const FavsCount = dynamic(() => import('components/FavsCount'), { ssr: false })
const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-between h-20 px-4 bg-black border-b border-gray-200 md:px-8">
          <Link href="/">
            <Logo />
          </Link>
          <FavsCount />
        </header>
        <main className="bg-white ">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
