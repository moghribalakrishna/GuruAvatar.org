// File: app/expert-mentorship/benefits/career-advancement/page.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Rocket, ArrowLeft } from 'lucide-react';

export default function CareerAdvancementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/expert-mentorship/benefits" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8">
          <ArrowLeft className="mr-2" /> Back to Benefits
        </Link>
        
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Rocket className="w-12 h-12 mr-4 text-yellow-400" />
          Career Advancement
        </motion.h1>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <video 
            className="w-full rounded-xl shadow-lg"
            controls
            poster="/videos/career-advancement-poster.jpg"
          >
            <source src="/videos/career-advancement.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.p 
          className="text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Career advancement is a key focus of our expert mentorship program. With guidance from industry professionals, you'll gain the insights and strategies needed to fast-track your career growth and achieve your professional goals.
        </motion.p>

        <motion.h2 
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          How Mentorship Accelerates Your Career:
        </motion.h2>

        <motion.ul 
          className="list-disc list-inside space-y-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <li>Insider knowledge on industry trends and job market insights</li>
          <li>Guidance on career planning and goal-setting</li>
          <li>Strategies for professional branding and self-promotion</li>
          <li>Advice on negotiating salaries and promotions</li>
          <li>Support in identifying and pursuing leadership opportunities</li>
        </motion.ul>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img 
            src="/images/career-advancement.jpg" 
            alt="Career advancement through mentorship" 
            className="w-full rounded-xl shadow-lg"
          />
          {/* Image description: A mentor and mentee reviewing a holographic career trajectory, with milestones and achievements highlighted along the path */}
        </motion.div>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          With expert guidance on career advancement, you'll be better equipped to navigate your professional journey, make informed decisions, and seize opportunities that align with your long-term goals.
        </motion.p>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/expert-mentorship/find-mentor" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block">
            Advance Your Career
          </Link>
        </motion.div>
      </div>
    </div>
  );
}