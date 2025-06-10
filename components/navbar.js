// components/Navbar.js

'use client';

import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    // The main navigation bar container with styling
    <nav className="bg-background/80 backdrop-blur-sm shadow-md fixed top-0 w-full z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              We-Chat
            </Link>
          </div>

          {/* Desktop Menu & User Section */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors duration-200">
              Home
            </Link>
            <Link href="/forums" className="text-foreground hover:text-primary transition-colors duration-200">
              Forums
            </Link>
            <Link href="/chat" className="text-foreground hover:text-primary transition-colors duration-200">
              UserChat
            </Link>
            
            {/* Clerk User Button for authentication */}
            <UserButton afterSignOutUrl="/" />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
