'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MessageSquare, Zap, TrendingUp, RefreshCw, LineChart } from 'lucide-react';

export default function RealTimeFeedbackPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl font-bold mb-6 flex items-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MessageSquare className="w-12 h-12 mr-4 text-blue-500" />
          Real-time Feedback: Accelerate Your Learning
        </motion.h1>

        <div className="mb-8 rounded-xl overflow-hidden">
          <Image src="/images/ai-learning/real-time-feedback.webp" alt="Real-time Feedback" width={1200} height={600} className="w-full" />
        </div>

        <motion.p className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience the power of instant, personalized feedback on your learning journey. Our AI-powered real-time feedback system provides immediate insights and guidance, helping you learn faster and more effectively than ever before.
        </motion.p>

        <motion.div className="mb-12 bg-gray-50 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Key Features of Real-time Feedback</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Zap className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
              <span><strong className="text-blue-600">Instant Analysis:</strong> Receive immediate feedback on your work, identifying strengths and areas for improvement.</span>
            </li>
            <li className="flex items-start">
              <TrendingUp className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
              <span><strong className="text-blue-600">Personalized Suggestions:</strong> Get tailored recommendations for improvement based on your unique learning pattern.</span>
            </li>
            <li className="flex items-start">
              <RefreshCw className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
              <span><strong className="text-blue-600">Continuous Adaptation:</strong> Our AI system evolves with you, adjusting feedback based on your progress and changing needs.</span>
            </li>
            <li className="flex items-start">
              <LineChart className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
              <span><strong className="text-blue-600">Progress Tracking:</strong> Visualize your learning journey with real-time progress charts and analytics.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">How Real-time Feedback Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Continuous Monitoring</h3>
              <p className="text-gray-600">Our AI system constantly analyzes your interactions, responses, and progress within the learning platform.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Instant Analysis</h3>
              <p className="text-gray-600">As you complete tasks or answer questions, the AI immediately processes your input and generates feedback.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Personalized Insights</h3>
              <p className="text-gray-600">Receive tailored suggestions and explanations based on your unique learning style and current understanding.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Adaptive Learning Path</h3>
              <p className="text-gray-600">Your learning journey automatically adjusts based on the real-time feedback, ensuring optimal challenge and progress.</p>
            </div>
          </div>
        </motion.div>

    

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5,delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Benefits of Real-time Feedback</h2>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Accelerated learning through immediate correction and reinforcement</li>
                <li>Reduced frustration by addressing misconceptions as they occur</li>
                <li>Increased engagement and motivation through constant interaction</li>
                <li>Personalized learning experience tailored to your unique needs</li>
                <li>Improved retention of information through timely repetition and clarification</li>
                <li>Enhanced self-awareness of your learning progress and areas for improvement</li>
                <li>Efficient use of study time by focusing on areas that need the most attention</li>
              </ul>
            </div>
          </motion.div>
  
          <motion.div className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">The Science Behind Real-time Feedback</h2>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <p className="text-gray-600 mb-4">
                Our real-time feedback system is built on cutting-edge AI and machine learning technologies, combined with principles from cognitive science and educational psychology. Key components include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Natural Language Processing (NLP) for understanding and analyzing written responses</li>
                <li>Machine Learning algorithms for pattern recognition and prediction of learning outcomes</li>
                <li>Knowledge graphs for mapping connections between concepts and identifying gaps in understanding</li>
                <li>Adaptive learning models that evolve based on individual and collective learner data</li>
                <li>Sentiment analysis to gauge learner engagement and emotional state during the learning process</li>
              </ul>
            </div>
          </motion.div>
  
          <motion.section className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Experience the Power of Real-time Feedback</h2>
            <p className="text-xl mb-8 text-gray-600">
              Transform your learning experience with our AI-powered real-time feedback system. Start learning smarter, faster, and more effectively today.
            </p>
            <Link href="/ai-learning/try-real-time-feedback" className="bg-blue-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-600 transition duration-300 inline-block">
              Try Real-time Feedback Now
            </Link>
          </motion.section>
        </div>
      </div>
    );
  }