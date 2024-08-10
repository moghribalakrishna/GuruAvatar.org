'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, Users, TrendingUp, Layers, ChartBar, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function AIPoweredLearningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Brain className="w-12 h-12 mr-4 text-blue-300" />
          AI-Powered Learning: The Future of Education
        </motion.h1>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At GuruAvatar, we're harnessing the power of artificial intelligence to revolutionize education. Our AI-powered learning system adapts to each student's unique needs, creating a personalized and optimized learning experience that was once thought impossible at scale.
        </motion.p>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image 
            src="/images/our-approach/ai-learning-illustration.webp" 
            alt="AI-Powered Learning Illustration" 
            width={800} 
            height={400} 
            className="rounded-xl shadow-2xl"
          />
        </motion.div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">The Power of AI in Education</h2>
          <p className="text-lg mb-4">
            Artificial Intelligence is not just a buzzword at GuruAvatar; it's the core of our educational revolution. Here's how our AI transforms the learning experience:
          </p>
          <ul className="space-y-4">
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Zap className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-yellow-400">Adaptive Learning Paths:</strong> Our AI algorithms analyze your learning style, pace, and performance to create a tailored learning journey. No two students will have the same experience, ensuring everyone learns in the way that suits them best.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Target className="w-6 h-6 text-green-400 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-green-400">Personalized Content:</strong> Receive customized lessons, exercises, and resources that match your current knowledge level and learning goals. Our AI ensures you're always challenged, but never overwhelmed.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <TrendingUp className="w-6 h-6 text-pink-400 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-pink-400">Real-time Progress Tracking:</strong> Our AI continuously monitors your progress, providing instant feedback and adjusting your learning path in real-time. You'll always know where you stand and what to focus on next.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Layers className="w-6 h-6 text-purple-400 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-purple-400">Smart Content Recommendations:</strong> Based on your interests, goals, and learning history, our AI suggests additional resources and topics to explore, fostering a love for lifelong learning.</span>
            </motion.li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">The Science Behind Our AI</h2>
          <p className="text-lg mb-4">
            Our AI isn't just smart; it's built on cutting-edge research in education, cognitive science, and machine learning. Here's a glimpse into the technology powering GuruAvatar:
          </p>
          <ul className="space-y-4">
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Brain className="w-6 h-6 text-blue-400 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-blue-400">Neural Networks:</strong> We use advanced neural networks to model and predict student learning patterns, allowing for highly accurate personalization.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <ChartBar className="w-6 h-6 text-green-400 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-green-400">Natural Language Processing:</strong> Our AI understands and analyzes text, allowing for intelligent content recommendations and even automated essay grading.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-yellow-400">Reinforcement Learning:</strong> Our AI continually improves its teaching strategies based on student outcomes, ensuring it gets better over time.</span>
            </motion.li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Real Stories, Real Impact</h2>
          <div className="bg-white bg-opacity-10 p-6 rounded-xl">
            <blockquote className="text-lg italic mb-4">
              "GuruAvatar's AI-powered learning completely transformed my study habits. It's like having a personal tutor who knows exactly what I need, available 24/7. I've improved my grades significantly and actually enjoy learning now!"
            </blockquote>
            <p className="text-right">- Sarah K., High School Student</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">The Future of AI in Education</h2>
          <p className="text-lg mb-4">
            At GuruAvatar, we're constantly pushing the boundaries of what's possible with AI in education. Here's a glimpse into what we're working on:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>AI-powered virtual reality learning environments</li>
            <li>Emotional intelligence AI that can detect and respond to student emotions</li>
            <li>Collaborative AI that facilitates group learning and projects</li>
            <li>AI-generated content that creates unlimited, personalized learning materials</li>
          </ul>
        </section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Experience the AI Revolution in Learning</h2>
          <p className="text-xl mb-8">
            Ready to transform your educational journey with the power of AI? Join GuruAvatar today and experience the future of learning.
          </p>
          <a href="/get-started" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-flex items-center">
            <Users className="mr-2" />
            Start Your AI-Powered Learning Journey
          </a>
        </motion.section>
      </div>
    </div>
  );
}