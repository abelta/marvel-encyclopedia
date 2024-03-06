import { Inter } from 'next/font/google'
import { FavsCount } from 'components'
import { Logo } from 'icons'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="container flex items-center justify-between h-20 px-4 mx-auto bg-black md:px-8">
          <Logo />
          <FavsCount />
        </header>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
