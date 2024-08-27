'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Lightbulb, Clock, MessageCircle, Zap } from 'lucide-react';

export default function AITutoringPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl font-bold mb-6 flex items-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Users className="w-12 h-12 mr-4 text-purple-500" />
          AI Tutoring: Your Personal Learning Companion
        </motion.h1>

        <div className="mb-8 rounded-xl overflow-hidden">
          <Image src="/images/ai-learning/ai-tutoring.webp" alt="AI Tutoring" width={1200} height={600} className="w-full" />
        </div>

        <motion.p className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience the future of education with our AI tutoring system. Available 24/7, our AI tutor adapts to your learning style, provides personalized explanations, and offers unlimited patience to ensure you master every concept.
        </motion.p>

        <motion.div className="mb-12 bg-gray-50 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Key Features of AI Tutoring</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Lightbulb className="w-6 h-6 text-purple-500 mr-2 flex-shrink-0" />
              <span><strong className="text-purple-600">Adaptive Learning:</strong> The AI tutor adjusts its teaching style and content based on your progress and preferences.</span>
            </li>
            <li className="flex items-start">
              <Clock className="w-6 h-6 text-purple-500 mr-2 flex-shrink-0" />
              <span><strong className="text-purple-600">24/7 Availability:</strong> Get help anytime, anywhere, without scheduling constraints.</span>
            </li>
            <li className="flex items-start">
              <MessageCircle className="w-6 h-6 text-purple-500 mr-2 flex-shrink-0" />
              <span><strong className="text-purple-600">Natural Language Interaction:</strong> Communicate with the AI tutor using natural language, just like chatting with a human tutor.</span>
            </li>
            <li className="flex items-start">
              <Zap className="w-6 h-6 text-purple-500 mr-2 flex-shrink-0" />
              <span><strong className="text-purple-600">Instant Feedback:</strong> Receive immediate responses to your questions and instant feedback on your work.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">How AI Tutoring Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Initial Assessment</h3>
              <p className="text-gray-600">The AI tutor evaluates your current knowledge level and learning style through a series of interactive questions.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Personalized Lesson Plan</h3>
              <p className="text-gray-600">Based on the assessment, the AI creates a customized learning path tailored to your needs and goals.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Interactive Learning Sessions</h3>
              <p className="text-gray-600">Engage in dynamic learning sessions with the AI tutor, asking questions and receiving personalized explanations.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Continuous Adaptation</h3>
              <p className="text-gray-600">The AI tutor constantly adjusts its teaching approach based on your progress and feedback.</p>
            </div>
          </div>
        </motion.div>

        {/* <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">AI Tutoring in Action</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <Image src="/images/ai-learning/ai-tutoring-demo.gif" alt="AI Tutoring Demo" width={800} height={400} className="w-full rounded-lg mb-4" />
            <p className="text-gray-600">
              Watch as our AI tutor guides a student through a complex math problem, providing step-by-step explanations and adapting to the student's questions and learning pace.
            </p>
          </div>
        </motion.div> */}

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Benefits of AI Tutoring</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Personalized learning experience tailored to your needs</li>
              <li>Unlimited practice and repetition without judgment</li>
              <li>Immediate feedback and clarification on complex topics</li>
              <li>Flexible learning schedule with 24/7 availability</li>
              <li>Consistent quality of instruction across all subjects</li>
              <li>Reduced learning anxiety in a supportive, private environment</li>
              <li>Cost-effective alternative to traditional private tutoring</li>
            </ul>
          </div>
        </motion.div>

        <motion.section className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Experience AI Tutoring Today</h2>
          <p className="text-xl mb-8 text-gray-600">
            Discover the power of personalized AI tutoring and take your learning to the next level.
          </p>
          <Link href="/ai-learning/start-ai-tutoring" className="bg-purple-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-purple-600 transition duration-300 inline-block">
            Start Your AI Tutoring Session
          </Link>
        </motion.section>
      </div>
    </div>
  );
}