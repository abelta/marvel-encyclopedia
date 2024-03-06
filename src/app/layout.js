import { Inter } from 'next/font/google'
import { FavsCount } from 'components'
import { Logo } from 'icons'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-between h-20 px-4 bg-black border-b border-gray-200 md:px-8">
          <Logo />
          <FavsCount />
        </header>
        <main className="px-4 my-8 bg-white md:px-8">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
