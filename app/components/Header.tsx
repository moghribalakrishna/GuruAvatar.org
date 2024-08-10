'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { logout } from '../lib/auth';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { state, dispatch } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    dispatch({ type: 'LOGOUT' });
    router.push('/');
  };

  const menuItems = [
    { href: '/about', label: 'About' },
    { href: '/our-approach', label: 'Our Approach' },
    { href: '/ai-masterclass', label: 'AI Masterclasses' },
    { href: '/programs-and-courses', label: 'Programs & Courses' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/get-started', label: 'Get Started' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">GuruAvatar</span>
            <span className="ml-2 text-xs bg-orange-500 text-white px-2 py-1 rounded-full">Non-Profit</span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-600 hover:text-blue-600">
                {item.label}
              </Link>
            ))}
            <Link href="/donate" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
              Donate
            </Link>
            {!state.loading && (
              state.user ? (
                <>
                  <Link href="/profile" className="text-gray-600 hover:text-blue-600">Profile</Link>
                  <button onClick={handleLogout} className="text-gray-600 hover:text-blue-600">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
                  <Link href="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                    Sign Up
                  </Link>
                </>
              )
            )}
          </nav>
          <button
            className="lg:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200 mt-2">
          <div className="container mx-auto px-4 py-2 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-600 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="block bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
            {!state.loading && (
              state.user ? (
                <>
                  <Link
                    href="/profile"
                    className="block text-gray-600 hover:text-blue-600 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left text-gray-600 hover:text-blue-600 py-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block text-gray-600 hover:text-blue-600 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  )
}