'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function VolunteerThankYouPage() {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 min-h-screen text-white flex items-center justify-center">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Thank You for Volunteering!</h1>
        <p className="text-xl mb-8">
          We appreciate your interest in volunteering with GuruAvatar. We'll review your application and get back to you soon.
        </p>
        <Link 
          href="/"
          className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
}