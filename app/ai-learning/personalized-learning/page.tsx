'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Brain, Target, Zap, Users, ChartBar } from 'lucide-react';

export default function PersonalizedLearningPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl font-bold mb-6 flex items-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Brain className="w-12 h-12 mr-4 text-blue-500" />
          Personalized Learning with AI
        </motion.h1>

        <div className="mb-8 rounded-xl overflow-hidden">
          <Image src="/images/ai-learning/real-time-feedback.webp-learning.webp" alt="Personalized Learning" width={1200} height={600} className="w-full" />
        </div>

        <motion.p className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience a learning journey tailored specifically to you. Our AI-powered personalized learning system adapts to your unique needs, learning style, and pace, ensuring an optimal and engaging educational experience.
        </motion.p>

        <motion.div className="mb-12 bg-gray-50 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Key Features of AI-Driven Personalized Learning</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Target className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
              <span><strong className="text-blue-600">Adaptive Content Delivery:</strong> AI analyzes your learning patterns and adjusts content difficulty and format in real-time.</span>
            </li>
            <li className="flex items-start">
              <Zap className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
              <span><strong className="text-blue-600">Dynamic Learning Paths:</strong> Customized learning journeys that evolve based on your progress and interests.</span>
            </li>
            <li className="flex items-start">
              <Users className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
              <span><strong className="text-blue-600">Intelligent Study Groups:</strong> AI-matched study groups for collaborative learning with peers at your level.</span>
            </li>
            <li className="flex items-start">
              <ChartBar className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
              <span><strong className="text-blue-600">Continuous Improvement:</strong> Ongoing analysis of your learning data to refine and optimize your personalized experience.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">The Personalized Learning Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Initial Assessment</h3>
              <p className="text-gray-600">Our AI conducts a comprehensive evaluation of your current knowledge, learning preferences, and goals.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Custom Curriculum Design</h3>
              <p className="text-gray-600">Based on your assessment, AI creates a tailored curriculum that addresses your specific needs and objectives.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Adaptive Learning Modules</h3>
              <p className="text-gray-600">Interactive lessons that adjust in real-time based on your responses and engagement levels.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Progress Tracking and Insights</h3>
              <p className="text-gray-600">Detailed analytics and insights into your learning journey, with AI-powered recommendations for improvement.</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Success Story</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <blockquote className="text-lg italic mb-4 text-gray-600">
              "The personalized learning approach completely transformed my educational experience. The AI-driven system identified my strengths and weaknesses, and tailored a learning path that challenged me in the right areas. Within months, I saw significant improvement in my problem-solving skills and test scores. It felt like having a personal tutor available 24/7!"
            </blockquote>
            <p className="text-right text-gray-700">- Priya Sharma, Computer Science Student</p>
          </div>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">The Science Behind AI-Driven Personalized Learning</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <Image src="/images/ai-learning/personalized-learning.webp" alt="AI-Driven Personalized Learning Science" width={800} height={400} className="w-full rounded-lg mb-4" />
            <p className="text-gray-600">
              Our AI-driven personalized learning system is built on advanced machine learning algorithms and cognitive science principles. It continuously analyzes vast amounts of data, including your learning patterns, response times, error rates, and engagement levels, to create a dynamic and evolving learning experience tailored just for you.
            </p>
            <p className="text-gray-600 mt-4">
              The system employs techniques such as:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600">
              <li>Natural Language Processing (NLP) to understand and evaluate your written responses</li>
              <li>Reinforcement Learning to optimize the sequence and difficulty of learning materials</li>
              <li>Collaborative Filtering to recommend resources based on similar learners' experiences</li>
              <li>Computer Vision to analyze your engagement through facial expressions during video lessons</li>
            </ul>
          </div>
        </motion.div>

        <motion.section className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Experience the Future of Learning</h2>
          <p className="text-xl mb-8 text-gray-600">
            Unlock your full potential with AI-powered personalized learning. Start your journey to faster, more effective, and engaging education today.
          </p>
          <Link href="/ai-learning/get-started" className="bg-blue-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-600 transition duration-300 inline-block">
            Begin Your Personalized Learning Journey
          </Link>
        </motion.section>
      </div>
    </div>
  );
}