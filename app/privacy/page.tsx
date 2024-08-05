'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
        </motion.h1>
        
        <motion.div 
          className="bg-white bg-opacity-10 p-8 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-4">Last updated: [Insert Date]</p>

          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            GuruAvatar ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="mb-4">We collect information that you provide directly to us, such as:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Personal information (e.g., name, email address, phone number)</li>
            <li>Account information</li>
            <li>Educational background and goals</li>
            <li>Payment information</li>
          </ul>
          <p className="mb-4">We also automatically collect certain information about your device and how you interact with our services.</p>

          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Personalize your experience</li>
            <li>Communicate with you</li>
            <li>Process transactions</li>
            <li>Analyze usage patterns</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
          <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Service providers</li>
            <li>Educational partners</li>
            <li>Legal and regulatory authorities</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-4">
            Email: privacy@guruavatar.org<br />
            Address: [Insert Physical Address]
          </p>
        </motion.div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/terms" className="text-orange-400 hover:text-orange-300 transition duration-300">
            View our Terms of Service
          </Link>
        </motion.div>
      </div>
    </div>
  );
}