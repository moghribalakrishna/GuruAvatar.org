// File: app/expert-mentorship/benefits/personalized-guidance/page.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Target, ArrowLeft } from 'lucide-react';

export default function PersonalizedGuidancePage() {
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
          <Target className="w-12 h-12 mr-4 text-yellow-400" />
          Personalized Guidance
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
            poster="/videos/personalized-guidance-poster.jpg"
          >
            <source src="/videos/personalized-guidance.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.p 
          className="text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Personalized guidance is at the heart of our expert mentorship program. Our mentors provide tailored advice and strategies specific to your unique goals, challenges, and learning style.
        </motion.p>

        <motion.h2 
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Key Aspects of Personalized Guidance:
        </motion.h2>

        <motion.ul 
          className="list-disc list-inside space-y-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <li>Customized learning plans based on your individual needs and aspirations</li>
          <li>One-on-one sessions focused on your specific challenges and goals</li>
          <li>Adaptive guidance that evolves as you progress and your needs change</li>
          <li>Integration of AI-driven insights to enhance the personalization of advice</li>
          <li>Tailored resource recommendations to support your unique learning journey</li>
        </motion.ul>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img 
            src="/images/personalized-guidance.jpg" 
            alt="Mentor providing personalized guidance" 
            className="w-full rounded-xl shadow-lg"
          />
          {/* Image description: A mentor and mentee engaged in a one-on-one discussion, with holographic displays showing personalized learning analytics and goals */}
        </motion.div>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          With personalized guidance, you'll receive the focused attention and tailored strategies you need to overcome obstacles, capitalize on your strengths, and achieve your goals faster and more effectively.
        </motion.p>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/expert-mentorship/find-mentor" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block">
            Find Your Mentor
          </Link>
        </motion.div>
      </div>
    </div>
  );
}