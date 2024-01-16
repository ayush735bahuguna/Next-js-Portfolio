import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Header/Navbar/Navbar';
import Cursor from '@/components/Cursor/Cursor';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ayush Bahuguna',
  description: 'Created by Ayush Bahuguna',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" id='Html'>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={inter.className}>
          <div id='Background-gradient'></div>
          <div id='Background-gradient-image'></div>
          <Cursor />
          <Navbar />
          {children}
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  )
}
