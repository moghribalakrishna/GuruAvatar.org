'use client';

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 mr-2">GuruAvatar</span>
            <span className="text-sm bg-orange-500 text-white px-2 py-1 rounded-full">Non-Profit</span>
          </Link>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</Link>
            <Link href="/our-approach" className="text-gray-700 hover:text-blue-600 transition duration-300">Our Approach</Link>
            <Link href="/programs-and-courses" className="text-gray-700 hover:text-blue-600 transition duration-300">Programs & Courses</Link>
            <Link href="/success-stories" className="text-gray-700 hover:text-blue-600 transition duration-300">Success Stories</Link>
            <Link href="/get-involved" className="text-gray-700 hover:text-blue-600 transition duration-300">Get Involved</Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition duration-300">FAQ</Link>
            <Link href="/get-started" className="text-gray-700 hover:text-blue-600 transition duration-300">Get Started</Link>
            <Link href="/donate" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">Donate</Link>
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
            <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">About</Link>
            <Link href="/our-approach" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">Our Approach</Link>
            <Link href="/programs-and-courses" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">Programs & Courses</Link>
            <Link href="/success-stories" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">Success Stories</Link>
            <Link href="/get-involved" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">Get Involved</Link>
            <Link href="/faq" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">FAQ</Link>
            <Link href="/get-started" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">Get Started</Link>
            <Link href="/donate" className="block py-2 bg-orange-500 text-white px-4 rounded-full hover:bg-orange-600 transition duration-300">Donate</Link>
          </div>
        )}
      </div>
    </header>
  )
}