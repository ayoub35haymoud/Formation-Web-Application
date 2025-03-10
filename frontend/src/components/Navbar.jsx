"use client"; // For event handling in Next.js App Router
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Formations", path: "/formations" },
    { name: "Plans", path: "/plans" },
    { name: "À propos", path: "/about" },
  ];

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="E-Tutor Logo" width={40} height={40} />
        <span className="ml-2 text-xl font-bold text-blue-600">E-Tutor</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={`${
                pathname === link.path ? "text-blue-600 font-semibold" : "text-gray-700"
              } hover:text-blue-600 transition duration-300`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Icons & Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Cart Icon */}
        <button className="text-gray-700 hover:text-blue-600 transition">
          🛒
        </button>

        {/* Auth Buttons */}
        <Link href="/auth/login">
          <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded-md hover:bg-blue-50 transition">
            Login
          </button>
        </Link>
        <Link href="/auth/signup">
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition">
            Sign Up
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 bg-white w-full shadow-md md:hidden flex flex-col">
          {navLinks.map((link) => (
            <li key={link.name} className="p-4 border-b">
              <Link href={link.path} onClick={() => setMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <div className="flex flex-col space-y-3 p-4">
            <Link href="/auth/login">
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md">
                Login
              </button>
            </Link>
            <Link href="/auth/signup">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Sign Up
              </button>
            </Link>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
