'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Zap, Target, BookOpen, Brain, Rocket } from 'lucide-react';

export default function ExpertMentorshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white overflow-hidden relative p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Expert Mentorship Program
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-center max-w-4xl mx-auto text-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Connect with industry leaders and experienced professionals. 
          Gain invaluable insights and guidance tailored to your learning journey.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Link href="/expert-mentorship/find-mentor">
            <motion.div
              className="bg-white bg-opacity-10 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-12 h-12 text-orange-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Find a Mentor</h2>
              <p className="text-blue-100">Search our diverse pool of expert mentors and find the perfect match for your goals.</p>
            </motion.div>
          </Link>
          <Link href="/expert-mentorship/benefits">
            <motion.div
              className="bg-white bg-opacity-10 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Benefits of Mentorship</h2>
              <p className="text-blue-100">Discover how expert mentorship can accelerate your learning and career growth.</p>
            </motion.div>
          </Link>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Expert Mentorship?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/expert-mentorship/benefits/personalized-guidance">
              <motion.div 
                className="bg-white bg-opacity-10 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target className="w-12 h-12 text-teal-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
                <p className="text-blue-100">Get tailored advice and strategies specific to your goals and challenges.</p>
              </motion.div>
            </Link>
            <Link href="/expert-mentorship/benefits/accelerated-learning">
              <motion.div 
                className="bg-white bg-opacity-10 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-12 h-12 text-teal-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Accelerated Learning</h3>
                <p className="text-blue-100">Fast-track your progress with insights from experienced professionals.</p>
              </motion.div>
            </Link>
            <Link href="/expert-mentorship/benefits/skill-development">
              <motion.div 
                className="bg-white bg-opacity-10 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Brain className="w-12 h-12 text-teal-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Skill Enhancement</h3>
                <p className="text-blue-100">Rapidly develop both technical and soft skills crucial for success.</p>
              </motion.div>
            </Link>
            <Link href="/expert-mentorship/benefits/career-advancement">
              <motion.div 
                className="bg-white bg-opacity-10 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-12 h-12 text-teal-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Career Acceleration</h3>
                <p className="text-blue-100">Fast-track your career growth with expert-backed strategies and networking.</p>
              </motion.div>
            </Link>
            <Link href="/expert-mentorship/benefits/expanded-network">
              <motion.div 
                className="bg-white bg-opacity-10 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-12 h-12 text-teal-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expand Your Network</h3>
                <p className="text-blue-100">Connect with industry professionals and peers to broaden your opportunities.</p>
              </motion.div>
            </Link>
            <Link href="/expert-mentorship/benefits/increased-confidence">
              <motion.div 
                className="bg-white bg-opacity-10 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-12 h-12 text-teal-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Boost Confidence</h3>
                <p className="text-blue-100">Build self-assurance through validation and support from experienced mentors.</p>
              </motion.div>
            </Link>
          </div>
        </section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl mb-8">
            Join our expert mentorship program and unlock your full potential.
          </p>
          <Link href="/expert-mentorship/find-mentor" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block">
            Find Your Mentor
          </Link>
        </motion.section>
      </div>
    </div>
  );
}