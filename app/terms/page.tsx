'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Terms of Service
        </motion.h1>
        
        <motion.div 
          className="bg-white bg-opacity-10 p-8 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-4">Last updated: [Insert Date]</p>

          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using GuruAvatar's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p className="mb-4">
            GuruAvatar provides an AI-powered educational platform offering personalized learning experiences, mentorship opportunities, and various educational resources.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <p className="mb-4">
            You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Content and Conduct</h2>
          <p className="mb-4">
            You retain all rights to any content you submit, post or display on or through GuruAvatar. By posting content, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through GuruAvatar.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
          <p className="mb-4">
            The GuruAvatar service and its original content, features, and functionality are owned by GuruAvatar and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall GuruAvatar, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
          </p>

          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mb-4">
            Email: terms@guruavatar.org<br />
            Address: [Insert Physical Address]
          </p>
        </motion.div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/privacy" className="text-orange-400 hover:text-orange-300 transition duration-300">
            View our Privacy Policy
          </Link>
        </motion.div>
      </div>
    </div>
  );
}