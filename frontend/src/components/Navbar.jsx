// components/Navbar.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Close mobile menu when a navigation item is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  // Navigation links data
  const navLinks = [
    { href: '/accueil', label: 'Accueil', isActive: pathname === '/accueil' },
    { href: '/formations', label: 'Formations', isActive: pathname === '/formations' },
    { href: '/plans', label: 'Plans', isActive: pathname === '/plans' },
    { href: '/a-propos', label: 'À propos', isActive: pathname === '/a-propos' },
  ];
  
  return (
    <header 
      className="w-full bg-white py-4 px-6 transition-all duration-300 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
          <div className="relative h-8 w-8">
            <Image 
              src="/logo.svg" 
              alt="E-tutor Logo" 
              width={32} 
              height={32} 
              className="text-cyan-500"
              onError={(e) => {
                // Fallback if image fails to load
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzA2YjZkNCI+PHBhdGggZD0iTTEyIDJMMiA3bDEwIDUgMTAtNS0xMC01ek0yIDE3bDEwIDUgMTAtNS0xMC01LTEwIDV6Ii8+PC9zdmc+';
              }}
            />
          </div>
          <span className="text-xl font-bold">E-tutor</span>
        </Link>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium hover:text-cyan-600 transition-colors ${
                link.isActive ? 'text-cyan-500' : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Cart Icon */}
        <div className="flex items-center space-x-4">
          <Link 
            href="/cart" 
            className="text-gray-700 hover:text-cyan-600 transition-colors"
            aria-label="Shopping cart"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
          </Link>
          
          {/* Authentication buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/login"
              className="px-4 py-2 text-cyan-600 border border-cyan-600 rounded-md hover:bg-cyan-50 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors"
            >
              Sign In
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-gray-100 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-20 px-6 pb-6 overflow-y-auto">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium p-2 rounded-md ${
                  link.isActive ? 'text-cyan-600 bg-cyan-50' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-6 flex flex-col space-y-3">
              <Link
                href="/login"
                className="w-full py-2 px-4 text-center text-cyan-600 border border-cyan-600 rounded-md hover:bg-cyan-50 transition-colors"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="w-full py-2 px-4 text-center bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </div>
          </div>
          
          {/* Close button */}
          <button
            type="button"
            className="absolute top-4 right-4 p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;