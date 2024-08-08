// File: app/expert-mentorship/benefits/skill-development/page.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Brain, ArrowLeft } from 'lucide-react';

export default function SkillDevelopmentPage() {
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
          <Brain className="w-12 h-12 mr-4 text-yellow-400" />
          Skill Development
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
            poster="/videos/skill-development-poster.jpg"
          >
            <source src="/videos/skill-development.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.p 
          className="text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Rapid and effective skill development is a core benefit of our expert mentorship program. Under the guidance of experienced professionals, you'll enhance both your technical and soft skills, preparing you for success in your chosen field.
        </motion.p>

        <motion.h2 
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          How Mentorship Enhances Your Skills:
        </motion.h2>

        <motion.ul 
          className="list-disc list-inside space-y-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <li>Personalized skill assessment and development plans</li>
          <li>Hands-on guidance in applying new skills to real-world scenarios</li>
          <li>Access to cutting-edge tools and methodologies in your field</li>
          <li>Feedback on your work from experienced professionals</li>
          <li>Development of both technical and soft skills crucial for career success</li>
        </motion.ul>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img 
            src="/images/skill-development.jpg" 
            alt="Skill development through mentorship" 
            className="w-full rounded-xl shadow-lg"
          />
          {/* Image description: A mentor guiding a mentee through a complex task, with holographic displays showing skill progression and mastery levels */}
        </motion.div>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Through focused skill development with expert mentors, you'll build a robust toolkit of abilities that will set you apart in your field and prepare you for future challenges and opportunities.
        </motion.p>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/expert-mentorship/find-mentor" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block">
            Develop Your Skills
          </Link>
        </motion.div>
      </div>
    </div>
  );
}