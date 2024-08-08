// File: app/expert-mentorship/benefits/increased-confidence/page.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChartBar, ArrowLeft } from 'lucide-react';

export default function IncreasedConfidencePage() {
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
          <ChartBar className="w-12 h-12 mr-4 text-yellow-400" />
          Increased Confidence
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
            poster="/videos/increased-confidence-poster.jpg"
          >
            <source src="/videos/increased-confidence.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.p 
          className="text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Building self-confidence is a crucial outcome of our expert mentorship program. Through validation, constructive feedback, and support from your mentor, you'll develop a stronger sense of self-assurance in your abilities and decisions.
        </motion.p>

        <motion.h2 
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          How Mentorship Boosts Your Confidence:
        </motion.h2>

        <motion.ul 
          className="list-disc list-inside space-y-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <li>Validation of your skills and potential from industry experts</li>
          <li>Constructive feedback to help you improve and grow</li>
          <li>Support in overcoming imposter syndrome and self-doubt</li>
          <li>Encouragement to take on new challenges and stretch your abilities</li>
          <li>Recognition of your achievements and progress</li>
        </motion.ul>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img 
            src="/images/increased-confidence.jpg" 
            alt="Increased confidence through mentorship" 
            className="w-full rounded-xl shadow-lg"
          />
          {/* Image description: A mentor and mentee in a celebratory pose, with holographic displays showing the mentee's growth in confidence and achievements over time */}
        </motion.div>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          With increased confidence gained through expert mentorship, you'll be better equipped to take on new challenges, speak up in professional settings, and pursue ambitious goals in your career and personal life.
        </motion.p>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/expert-mentorship/find-mentor" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block">
            Boost Your Confidence
          </Link>
        </motion.div>
      </div>
    </div>
  );
}