"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // ✅ Lightweight icon library

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            alt="logo"
            src="/logo.jpg"
            width={40}
            height={40}
            className="object-contain rounded-full"
          />
          <span className="text-lg font-semibold">MyWebsite</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          <Link href="/blog" className="hover:text-gray-300 transition-colors">Blogs</Link>
          {/* <Link href="/meals" className="hover:text-gray-300 transition-colors">Meals</Link> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 px-4 pb-4 space-y-2"
          >
            <Link
              href="/"
              className="block py-2 border-b border-gray-700 hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 border-b border-gray-700 hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 border-b border-gray-700 hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="block py-2 hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            {/* <Link 
            href="/meals" 
            className="block py-2 hover:text-gray-300"
            onClick={() => setIsOpen(false)}
            >
              Meals
              </Link> */}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
