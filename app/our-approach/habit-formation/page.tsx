'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Repeat, Target, Zap, Clock, TrendingUp, CheckCircle, Brain, Book, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HabitFormationPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Repeat className="w-12 h-12 mr-4 text-green-500" />
          Habit Formation: The Foundation of Lifelong Learning
        </motion.h1>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At GuruAvatar, we believe that the key to lasting educational success lies not just in what you learn, but in how you learn. Our Habit Formation program is designed to help you build the routines and behaviors that will support your learning journey for years to come.
        </motion.p>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image 
            src="/images/our-approach/habit-formation-illustration.webp" 
            alt="Habit Formation Illustration" 
            width={800} 
            height={400} 
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">The Power of Habits in Learning</h2>
          <p className="text-lg mb-4">
            Habits are the building blocks of success. Here's why habit formation is crucial for effective learning:
          </p>
          <ul className="space-y-4">
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Target className="w-6 h-6 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-yellow-600">Consistency:</strong> Good habits ensure regular engagement with learning materials, leading to steady progress.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Zap className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-green-600">Efficiency:</strong> Well-formed habits reduce decision fatigue, allowing you to focus your mental energy on learning.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Clock className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-pink-600">Long-term Success:</strong> By building sustainable habits, you're setting yourself up for lifelong learning and growth.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <TrendingUp className="w-6 h-6 text-purple-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-purple-600">Compounding Effects:</strong> Small, consistent habits lead to significant improvements over time.</span>
            </motion.li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">GuruAvatar's Habit Formation Approach</h2>
          <p className="text-lg mb-4">
            Our habit formation program is built on cutting-edge behavioral science and tailored to your individual needs:
          </p>
          <ol className="space-y-4 list-decimal list-inside">
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span><strong className="text-blue-600">Personalized Habit Analysis:</strong> We use AI to analyze your current habits and identify areas for improvement.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <span><strong className="text-green-600">Micro-Habit Design:</strong> We help you break down large goals into small, achievable daily actions.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <span><strong className="text-yellow-600">Habit Stacking:</strong> Learn to build new habits by attaching them to existing routines.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <span><strong className="text-pink-600">Adaptive Reminders:</strong> Our AI system provides timely, context-aware prompts to reinforce your habits.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <span><strong className="text-purple-600">Progress Tracking:</strong> Visualize your habit formation journey with detailed analytics and insights.</span>
            </motion.li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Key Habits for Educational Success</h2>
          <p className="text-lg mb-4">
            While we tailor habits to individual needs, here are some core habits we help students develop:
          </p>
          <ul className="space-y-4">
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <CheckCircle className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-blue-600">Daily Learning:</strong> Consistent engagement with educational content, even if just for a short period each day.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <Brain className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-green-600">Reflective Practice:</strong> Regular self-assessment and reflection on learning progress and strategies.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <Book className="w-6 h-6 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-yellow-600">Active Reading:</strong> Engaging deeply with texts through note-taking, summarizing, and questioning.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <Users className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-pink-600">Collaborative Learning:</strong> Regular participation in study groups or peer discussions.</span>
            </motion.li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">The Science Behind Habit Formation</h2>
          <p className="text-lg mb-4">
            Our approach is grounded in scientific research on habit formation and behavior change:
          </p>
          <ul className="space-y-4">
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              <Brain className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-blue-600">Neuroplasticity:</strong> Repeated behaviors create stronger neural pathways, making habits easier to maintain over time.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <Repeat className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-green-600">Habit Loop:</strong> We leverage the cue-routine-reward cycle to reinforce positive learning habits.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.9 }}
            >
              <Target className="w-6 h-6 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-yellow-600">Implementation Intentions:</strong> We help you create specific plans for when, where, and how you'll perform your learning habits.</span>
            </motion.li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Success Stories</h2>
          <div className="bg-gray-100 p-6 rounded-xl mb-6">
            <blockquote className="text-lg italic mb-4">
              "GuruAvatar's habit formation program transformed my approach to learning. I went from struggling to study consistently to having a rock-solid daily learning routine. My grades have improved significantly, and I feel much more confident in my abilities."
            </blockquote>
            <p className="text-right">- Sarah K., High School Student</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl">
            <blockquote className="text-lg italic mb-4">
              "As a working professional, finding time for continuous learning was always a challenge. GuruAvatar helped me build sustainable habits that fit into my busy schedule. I'm now making steady progress towards my career goals without feeling overwhelmed."
            </blockquote>
            <p className="text-right">- Michael T., Software Engineer</p>
          </div>
        </section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.0 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Learning Habits?</h2>
          <p className="text-xl mb-8">
            Join GuruAvatar today and start building the habits that will support your lifelong learning journey.
          </p>
          <Link href="/get-started" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-flex items-center">
            <Book className="mr-2" />
            Start Your Habit Formation Journey
          </Link>
        </motion.section>
      </div>
    </div>
  );
}