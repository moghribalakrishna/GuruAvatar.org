'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, ChevronRight, Clock, Brain, TrendingUp, BarChart } from 'lucide-react';

export default function AcceleratedLearningPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl font-bold mb-6 flex items-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Zap className="w-12 h-12 mr-4 text-yellow-500" />
          Accelerated Learning: Fast-Track Your Progress
        </motion.h1>

        <div className="mb-8 rounded-xl overflow-hidden">
          <Image src="/images/expert-mentorship/accelerated-learning.webp" alt="Accelerated Learning" width={1200} height={600} className="w-full" />
        </div>

        <motion.p className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          In today's fast-paced world, the ability to learn quickly and effectively is a superpower. Our accelerated learning approach combines cutting-edge techniques with expert guidance to help you absorb and apply knowledge at an unprecedented rate.
        </motion.p>

        <motion.div className="mb-12 bg-gray-50 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Accelerated Learning Advantage</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Clock className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Time Efficiency:</strong> Learn in weeks what traditionally takes months or years. Our methods are designed to maximize your learning potential.</span>
            </li>
            <li className="flex items-start">
              <Brain className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Deep Understanding:</strong> Go beyond surface-level knowledge. Our approach ensures you grasp complex concepts thoroughly and can apply them practically.</span>
            </li>
            <li className="flex items-start">
              <TrendingUp className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Rapid Skill Acquisition:</strong> Develop new skills and competencies at an accelerated pace, giving you a competitive edge in your career or studies.</span>
            </li>
            <li className="flex items-start">
              <BarChart className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Measurable Progress:</strong> Track your growth with our advanced analytics, allowing you to see your improvement in real-time and stay motivated.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Accelerated Learning Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Spaced Repetition</h3>
              <p className="text-gray-600">Optimize your memory retention with scientifically-proven review intervals.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Active Recall</h3>
              <p className="text-gray-600">Strengthen neural connections through strategic self-testing and application.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Interleaving</h3>
              <p className="text-gray-600">Enhance your ability to apply knowledge in diverse contexts by mixing related topics.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Elaborative Rehearsal</h3>
              <p className="text-gray-600">Create meaningful connections to existing knowledge for deeper understanding.</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Real Results, Real Fast</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <blockquote className="text-lg italic mb-4 text-gray-600">
              "I was skeptical about 'accelerated learning', but GuruAvatar's methods are the real deal. I mastered advanced programming concepts in just 8 weeks, something that would have taken me at least a year on my own. The impact on my career has been incredible!"
            </blockquote>
            <p className="text-right text-gray-700">- Alex T., Full-Stack Developer</p>
          </div>
        </motion.div>
{/* 
        <motion.div className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Ready to Supercharge Your Learning?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Discover the power of accelerated learning and achieve your goals faster than you ever thought possible.
          </p>
          <Link href="/expert-mentorship/find-mentor" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block">
            Start Your Accelerated Journey
          </Link>
        </motion.div> */}
        {/* <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Accelerated Learning in Action</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <Image src="/images/expert-mentorship/accelerated-learning-action.webp" alt="Accelerated Learning in Action" width={800} height={400} className="w-full rounded-lg mb-4" />
            <p className="text-gray-600">
              Our accelerated learning techniques are designed to help you quickly grasp and apply complex concepts. Through a combination of expert mentorship, cutting-edge technology, and proven learning methods, you'll be able to achieve your learning goals in record time.
            </p>
          </div>
        </motion.div> */}

        <motion.div className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Ready to Accelerate Your Learning Journey?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Join GuruAvatar today and experience the power of accelerated learning with expert mentorship.
          </p>
          <Link href="/expert-mentorship/find-mentor" className="bg-yellow-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-600 transition duration-300 inline-block">
            Start Learning Faster Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}