// File: app/expert-mentorship/benefits/accelerated-learning/page.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, ArrowLeft } from 'lucide-react';

export default function AcceleratedLearningPage() {
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
          <Zap className="w-12 h-12 mr-4 text-yellow-400" />
          Accelerated Learning
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
            poster="/videos/accelerated-learning-poster.jpg"
          >
            <source src="/videos/accelerated-learning.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.p 
          className="text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Accelerated learning is a key benefit of our expert mentorship program. By learning from the experiences and insights of industry experts, you can fast-track your progress and achieve your goals more quickly.
        </motion.p>

        <motion.h2 
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          How Our Mentorship Accelerates Your Learning:
        </motion.h2>

        <motion.ul 
          className="list-disc list-inside space-y-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <li>Learn from real-world experiences and avoid common pitfalls</li>
          <li>Gain access to cutting-edge industry knowledge and best practices</li>
          <li>Receive targeted feedback to quickly improve your skills</li>
          <li>Leverage AI-powered learning tools to optimize your study habits</li>
          <li>Benefit from curated resources and learning materials</li>
        </motion.ul>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img 
            src="/images/accelerated-learning.jpg" 
            alt="Accelerated learning through mentorship" 
            className="w-full rounded-xl shadow-lg"
          />
          {/* Image description: A mentor and mentee working together with holographic displays showing rapid skill progression and knowledge acquisition */}
        </motion.div>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          With accelerated learning through expert mentorship, you can compress years of trial and error into months of focused growth, giving you a significant advantage in your personal and professional development.
        </motion.p>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/expert-mentorship/find-mentor" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block">
            Accelerate Your Learning
          </Link>
        </motion.div>
      </div>
    </div>
  );
}