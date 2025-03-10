// app/layout.jsx
import { Raleway } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

// Import Raleway with your desired weights
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'E-tutor - Online Learning Platform',
  description: 'E-tutor provides high-quality online courses and tutorials',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} min-h-screen bg-gray-50 m-0 p-0`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
