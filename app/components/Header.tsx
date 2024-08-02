'use client';
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">GuruAvatar</Link>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Gurus</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Mentors</Link>
            <Link href="/approach" className="text-gray-700 hover:text-blue-600 transition duration-300">Our Approach</Link>
            <Link href="/for-institutions" className="text-gray-700 hover:text-blue-600 transition duration-300">For Institutions</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">News</Link>
          </div>
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <span className="text-red-500 block">Debug: Mobile menu is open</span>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">About</Link>
            <Link href="/approach" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">Our Approach</Link>
            <Link href="/for-institutions" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">For Institutions</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}