import Link from "next/link"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
            <nav>
                <ul className="nav-list">
                    <Link className="nav-item" href="/">홈</Link>
                    <Link className="nav-item" href="/list">잡화상점</Link>
                    <Link className="nav-item" href="/cart">장바구니</Link>
                </ul>
            </nav>
            {children}
            </body>
    </html>
  )
}
