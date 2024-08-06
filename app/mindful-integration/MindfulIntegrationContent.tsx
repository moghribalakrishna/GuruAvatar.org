'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { mindfulnessPractices } from '../data/mindfulnessData';

export default function MindfulIntegrationContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white overflow-hidden relative p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mindful Integration
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-center max-w-4xl mx-auto text-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Enhance your learning journey with AI-guided mindfulness practices. 
          Cultivate focus, reduce stress, and boost cognitive performance.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mindfulnessPractices.map((practice, index) => (
            <Link href={`/mindful-integration/${practice.id}`} key={index}>
              <motion.div
                className="bg-white bg-opacity-10 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg overflow-hidden relative"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <practice.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
                <p className="text-blue-100">{practice.shortDescription}</p>
              </motion.div>
            </Link>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Mindful Learning?</h2>
          <div className="bg-white bg-opacity-10 p-8 rounded-xl">
            <ul className="list-disc list-inside space-y-4">
              <li>Improve focus and attention span by up to 22%</li>
              <li>Reduce stress levels and enhance emotional well-being</li>
              <li>Boost information retention and recall by 15%</li>
              <li>Develop a growth mindset and resilience in learning</li>
              <li>Seamlessly integrate mindfulness into your daily study routine</li>
            </ul>
          </div>
        </section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl mb-8">
            Explore our mindfulness practices and elevate your learning potential with GuruAvatar.
          </p>
          <Link href="/get-started" className="bg-purple-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-purple-600 transition duration-300 inline-block">
            Start Your Mindful Learning Journey
          </Link>
        </motion.section>
      </div>
    </div>
  );
}