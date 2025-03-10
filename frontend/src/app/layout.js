// app/layout.jsx
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

// Initialize the Inter font with Latin subset
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'E-tutor - Online Learning Platform',
  description: 'E-tutor provides high-quality online courses and tutorials',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gray-50 m-0 p-0">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}