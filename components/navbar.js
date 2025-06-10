'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-purple-600">MyPortfolio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-800 dark:text-white hover:text-purple-600">
              Home
            </Link>
            <Link href="/projects" className="text-gray-800 dark:text-white hover:text-purple-600">
              Projects
            </Link>
            <Link href="/about" className="text-gray-800 dark:text-white hover:text-purple-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-800 dark:text-white hover:text-purple-600">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
          <Link href="/" className="block text-gray-800 dark:text-white hover:text-purple-600">
            Home
          </Link>
          <Link href="/projects" className="block text-gray-800 dark:text-white hover:text-purple-600">
            Projects
          </Link>
          <Link href="/about" className="block text-gray-800 dark:text-white hover:text-purple-600">
            About
          </Link>
          <Link href="/contact" className="block text-gray-800 dark:text-white hover:text-purple-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
