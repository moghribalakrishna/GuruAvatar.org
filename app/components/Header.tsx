// File: app/components/Header.tsx

'use client';

import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { logout } from '../lib/auth';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { state, dispatch } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    dispatch({ type: 'LOGOUT' });
    router.push('/');
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">GuruAvatar</span>
            <span className="ml-2 text-xs bg-orange-500 text-white px-2 py-1 rounded-full">Non-Profit</span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-4">
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/our-approach" className="text-gray-600 hover:text-blue-600">Our Approach</Link>
            <Link href="/ai-masterclasses" className="text-gray-600 hover:text-blue-600">AI Masterclasses</Link>
            <Link href="/programs-and-courses" className="text-gray-600 hover:text-blue-600">Programs & Courses</Link>
            <Link href="/success-stories" className="text-gray-600 hover:text-blue-600">Success Stories</Link>
            <Link href="/get-involved" className="text-gray-600 hover:text-blue-600">Get Involved</Link>
            <Link href="/get-started" className="text-gray-600 hover:text-blue-600">Get Started</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <Link href="/donate" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">Donate</Link>
            {!state.loading && (
              state.user ? (
                <>
                  <Link href="/profile" className="text-gray-600 hover:text-blue-600">Profile</Link>
                  <button onClick={handleLogout} className="text-gray-600 hover:text-blue-600">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
                  <Link href="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Sign Up</Link>
                </>
              )
            )}
          </nav>
          <button
            className="lg:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200 mt-2">
          <div className="container mx-auto px-4 py-2 space-y-2">
            {/* Add mobile menu items here */}
            {!state.loading && (
              state.user ? (
                <>
                  <Link href="/profile" className="block text-gray-600 hover:text-blue-600">Profile</Link>
                  <button onClick={handleLogout} className="block text-gray-600 hover:text-blue-600">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="block text-gray-600 hover:text-blue-600">Login</Link>
                  <Link href="/signup" className="block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Sign Up</Link>
                </>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  )
}