'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Target, ChevronRight, Users, Zap, Award } from 'lucide-react';

export default function PersonalizedGuidancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/expert-mentorship/benefits" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8 transition duration-300">
          <ChevronRight className="mr-2 rotate-180" /> Back to Benefits
        </Link>
        
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Target className="w-12 h-12 mr-4 text-yellow-400" />
          Personalized Guidance: Your Path to Success
        </motion.h1>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At GuruAvatar, we believe that every learner is unique. Our personalized guidance approach ensures that you receive tailored advice and strategies specific to your goals, challenges, and learning style.
        </motion.p>

        <motion.div 
          className="mb-12 bg-white bg-opacity-10 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Why Personalized Guidance Matters</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <ChevronRight className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" />
              <span><strong className="text-green-400">Tailored Learning Path:</strong> Our AI-powered system analyzes your strengths, weaknesses, and goals to create a customized learning journey.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" />
              <span><strong className="text-green-400">Adaptive Feedback:</strong> Receive real-time, constructive feedback that evolves as you progress, ensuring continuous improvement.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" />
              <span><strong className="text-green-400">Targeted Skill Development:</strong> Focus on the skills that matter most for your personal and professional growth.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" />
              <span><strong className="text-green-400">Motivational Support:</strong> Stay inspired with personalized encouragement and milestone celebrations tailored to your journey.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">The Power of Personalization</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">1-on-1 Mentorship</h3>
              <p>Connect with mentors who understand your unique needs and aspirations.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2">AI-Driven Insights</h3>
              <p>Leverage cutting-edge AI to uncover your learning patterns and optimize your growth.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Customized Resources</h3>
              <p>Access hand-picked materials and exercises tailored to your learning style.</p>
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
              "The personalized guidance I received through GuruAvatar was a game-changer. My mentor understood my unique challenges and helped me develop a learning strategy that finally clicked. I've achieved more in the past 6 months than in the previous 2 years combined!"
            </blockquote>
            <p className="text-right">- Sarah J., Software Engineer</p>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Ready to Experience Personalized Guidance?</h2>
          <p className="text-xl mb-8">
            Take the first step towards a tailored learning experience that will accelerate your growth and help you achieve your goals.
          </p>
          <Link href="/expert-mentorship/find-mentor" className="bg-green-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-green-600 transition duration-300 inline-block">
            Find Your Perfect Mentor
          </Link>
        </motion.div>
      </div>
    </div>
  );
}