'use client';
import './globals.css';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={
          inter.className +
          ' flex align-center justify-center w-screen h-screen content-center items-center'
        }
      >
        {children}
      </body>
    </html>
  );
}
