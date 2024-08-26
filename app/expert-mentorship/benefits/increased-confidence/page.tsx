'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChartBar, ChevronRight, Star, Target, Users, Brain } from 'lucide-react';

export default function IncreasedConfidencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <div className="max-w-4xl mx-auto">
      
        
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ChartBar className="w-12 h-12 mr-4 text-yellow-400" />
          Increased Confidence: Empowering Your Potential
        </motion.h1>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Confidence is the cornerstone of success in both academic and professional realms. Our expert mentorship program is designed to boost your self-assurance, allowing you to tackle challenges with resilience and achieve your goals with unwavering belief in your abilities.
        </motion.p>

        <motion.div 
          className="mb-12 bg-white bg-opacity-10 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">The Confidence Advantage</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Star className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" />
              <span><strong className="text-green-400">Enhanced Performance:</strong> Confident students are more likely to participate actively and excel in their studies.</span>
            </li>
            <li className="flex items-start">
              <Target className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" />
              <span><strong className="text-green-400">Goal Achievement:</strong> With increased confidence, you'll set higher goals and be more motivated to achieve them.</span>
            </li>
            <li className="flex items-start">
              <Users className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" />
              <span><strong className="text-green-400">Better Relationships:</strong> Confidence improves communication skills and helps build stronger professional networks.</span>
            </li>
            <li className="flex items-start">
              <Brain className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" />
              <span><strong className="text-green-400">Resilience:</strong> Face challenges head-on with a positive mindset and bounce back from setbacks more easily.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Confidence-Boosting Strategies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Positive Reinforcement</h3>
              <p>Receive consistent encouragement and recognition for your efforts and achievements.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Skill Mastery</h3>
              <p>Develop new competencies under expert guidance, building confidence through accomplishment.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Constructive Feedback</h3>
              <p>Learn to view feedback as a growth opportunity, enhancing your skills and self-assurance.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Mindset Transformation</h3>
              <p>Shift from a fixed to a growth mindset, embracing challenges as opportunities to learn and improve.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
          <div className="bg-white bg-opacity-10 rounded-xl p-6">
            <blockquote className="text-lg italic mb-4">
              "Before joining GuruAvatar's mentorship program, I doubted my abilities and shied away from challenges. Now, I confidently tackle complex projects and have even presented at industry conferences. The transformation in my self-belief has been life-changing!"
            </blockquote>
            <p className="text-right">- Sarah L., Data Scientist</p>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Ready to Boost Your Confidence?</h2>
          <p className="text-xl mb-8">
            Unlock your full potential with our expert mentorship and watch your confidence soar to new heights.
          </p>
          <Link href="/expert-mentorship/find-mentor" className="bg-yellow-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-600 transition duration-300 inline-block">
            Start Your Confidence Journey
          </Link>
        </motion.div>
      </div>
    </div>
  );
}