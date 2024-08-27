'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { logout } from '../lib/auth';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const { state, dispatch } = useAuth();
  const router = useRouter();
  const moreDropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    await logout();
    dispatch({ type: 'LOGOUT' });
    router.push('/');
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: '/our-approach', label: 'Our Approach' },
    { href: '/ai-masterclass', label: 'AI Masterclasses' },
    { href: '/programs-and-courses', label: 'Programs & Courses' },
    { href: '/jobs-internships', label: 'Jobs & Internships' },
    { href: '/about', label: 'About' },
  ];

  const moreMenuItems = [
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/get-started', label: 'Get Started' },
    { href: '/blog', label: 'Blog' },
  ];

  const handleMoreItemClick = () => {
    setIsMoreOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blink {
          animation: blink 1s linear infinite;
        }
      `}</style>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
          <span className="text-2xl font-bold text-blue-600">GuruAvatar</span>
          <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">Non-Profit</span>
          <span className="text-xs text-gray-500">Birth. @2012</span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-4">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`text-gray-600 hover:text-blue-600 ${item.href === '/ai-masterclass' ? 'relative' : ''}`}
            >
              {item.label}
              {item.href === '/ai-masterclass' && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="blink absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                </span>
              )}
            </Link>
          ))}
          <Link href="/donate" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
            Donate
          </Link>
          <div className="relative" ref={moreDropdownRef}>
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="text-gray-600 hover:text-blue-600 flex items-center"
            >
              More <ChevronDown className="ml-1" size={16} />
            </button>
            {isMoreOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                {moreMenuItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
                    onClick={handleMoreItemClick}
                  >
                    {item.label}
                  </Link>
                ))}
                {!state.loading && !state.user && (
                  <>
                    {/* Login and Sign Up links can be added here if needed */}
                  </>
                )}
              </div>
            )}
          </div>
          {!state.loading && state.user && (
            <>
              <Link href="/profile" className="text-gray-600 hover:text-blue-600">Profile</Link>
              <button onClick={handleLogout} className="text-gray-600 hover:text-blue-600">Logout</button>
            </>
          )}
        </nav>
        <button
          className="lg:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-y-0 right-0 w-3/4 bg-white z-50 flex flex-col shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex justify-between items-center p-4 bg-blue-600">
              <span className="text-2xl font-bold text-white">Menu</span>
              <button
                className="text-white focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-grow overflow-y-auto">
              <div className="py-4">
                {[...menuItems, ...moreMenuItems].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between text-gray-600 hover:bg-blue-50 hover:text-blue-600 px-4 py-3 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center">
                      {item.label}
                      {item.href === '/ai-masterclass' && (
                        <span className="ml-2 inline-flex items-center justify-center">
                          <span className="blink flex h-3 w-3 rounded-full bg-green-500"></span>
                        </span>
                      )}
                    </span>
                    <ChevronRight size={20} />
                  </Link>
                ))}
                <Link
                  href="/donate"
                  className="flex items-center justify-center bg-orange-500 text-white px-4 py-2 mx-4 mt-4 rounded-full hover:bg-orange-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Donate
                </Link>
              </div>
            </nav>
            <div className="p-4 bg-blue-700">
              {!state.loading && (
                state.user ? (
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/profile"
                      className="flex items-center justify-center bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center justify-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    {/* Login and Sign Up buttons can be added here if needed */}
                  </div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}