'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-teal-700 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About GuruAvatar
        </motion.h1>
        
        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Non-Profit Mission
          </motion.h2>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            GuruAvatar is a non-profit organization dedicated to democratizing education and empowering learners worldwide. We believe that quality education should be accessible to all, regardless of geographical or economic barriers.
          </motion.p>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our mission is to revolutionize education by combining cutting-edge AI technology with holistic learning approaches, including mindfulness, habit formation, and expert mentorship. We're not just preparing students for exams; we're empowering them for life.
          </motion.p>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our Story
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center mb-8">
            <motion.div 
              className="md:w-1/2 mb-6 md:mb-0 md:mr-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Image 
                src="/founder-image.jpeg" 
                alt="Balakrishna Moghri, Founder of GuruAvatar" 
                width={400} 
                height={300} 
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-lg mb-4">
                Founded in 2024 by Balakrishna Moghri, GuruAvatar emerged from a vision to transform education on a global scale. Inspired by his experiences in Singapore and driven by a desire to make a difference, Balakrishna set out to create an educational platform that would bridge the gap between traditional learning and the needs of the 21st century.
              </p>
              <p className="text-lg">
                What began as a simple idea has grown into a comprehensive educational ecosystem, powered by AI and grounded in holistic development principles.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Our Impact
          </motion.h2>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            As a non-profit organization, our success is measured by the lives we touch and the positive change we create. Since our inception, GuruAvatar has:
          </motion.p>
          <motion.ul 
            className="list-disc list-inside text-lg mb-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <li>Reached over 100,000 students across 50 countries</li>
            <li>Partnered with 200+ educational institutions</li>
            <li>Provided 10,000+ hours of free mentorship</li>
            <li>Improved academic performance by an average of 35% among our users</li>
          </motion.ul>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Every donation, every volunteer hour, and every partnership contributes directly to expanding our reach and deepening our impact.
          </motion.p>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Our Approach
          </motion.h2>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            GuruAvatar's innovative educational model is built on four core pillars:
          </motion.p>
          <motion.ul 
            className="list-disc list-inside text-lg mb-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <li>AI-Powered Learning: Personalized, adaptive learning experiences</li>
            <li>Mindfulness Integration: Techniques to enhance focus and well-being</li>
            <li>Habit Forging: Building lasting habits for lifelong learning and success</li>
            <li>Expert Mentorship: Connecting students with industry leaders and educators</li>
          </motion.ul>
          <Link href="/our-approach" className="text-orange-400 hover:text-orange-300 transition duration-300">
            Learn more about our approach →
          </Link>
        </section>

        <section>
          <motion.h2 
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Join Our Mission
          </motion.h2>
          <motion.p 
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            As a non-profit, we rely on the support of individuals and organizations who share our vision. There are many ways you can contribute to our mission:
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <Link href="/donate" className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300">
              Donate
            </Link>
            <Link href="/volunteer" className="bg-teal-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300">
              Volunteer
            </Link>
            <Link href="/partner" className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300">
              Partner With Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}