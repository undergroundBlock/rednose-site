"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "text-gray-200" : "hover:text-gray-200";

  return (
    <header className="bg-[#70C7BA] text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/rednose-site/favicon.svg"
            alt="RedNose Logo"
            width={32}
            height={32}
            className="w-8 h-8"
            priority
          />
          <h1 className="text-4xl font-bold tracking-tight">
            Red<span className="text-red-500">N</span>ose
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className={`text-lg ${isActive("/")}`}>Home</Link>
          <Link href="/mint" className={`text-lg ${isActive("/mint")}`}>Mint</Link>
          <Link href="/domains" className={`text-lg ${isActive("/domains")}`}>Domains</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            className="p-2 rounded-md transition-transform duration-200"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#70C7BA] text-white p-4 space-y-3 transition-transform transform translate-y-0">
          <nav className="space-y-3">
            <Link href="/" className={`block text-lg ${isActive("/")}`}>Home</Link>
            <Link href="/mint" className={`block text-lg ${isActive("/mint")}`}>Mint</Link>
            <Link href="/domains" className={`block text-lg ${isActive("/domains")}`}>Domains</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
