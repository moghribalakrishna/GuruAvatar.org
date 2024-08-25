// File: app/ai-masterclass/foundations/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Brain, Code, BookOpen, Users, Zap } from 'lucide-react';

const FoundationsOfAIPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Brain className="w-12 h-12 mr-4 text-blue-300" />
          Foundations of AI
        </motion.h1>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Dive deep into the core concepts that underpin modern artificial intelligence. From historical context to cutting-edge algorithms, this module lays the groundwork for your AI journey.
        </motion.p>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image src="/images/ai-masterclass/foundations-hero.webp" alt="Foundations of AI" width={800} height={400} className="rounded-xl shadow-2xl" />
        </motion.div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">What You'll Learn</h2>
          <ul className="space-y-4">
            {[
              "Historical evolution of AI",
              "Key AI concepts and terminology",
              "Fundamental algorithms in AI",
              "Introduction to machine learning",
              "Ethical considerations in AI development",
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Zap className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Module Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Code, title: "Hands-on Coding", description: "Implement basic AI algorithms from scratch" },
              { icon: BookOpen, title: "Case Studies", description: "Analyze real-world AI applications and their impact" },
              { icon: Users, title: "Group Projects", description: "Collaborate on AI problem-solving challenges" },
              { icon: Brain, title: "AI Ethics Workshop", description: "Explore the ethical implications of AI technologies" },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <highlight.icon className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Link href="/ai-masterclass/register" className="bg-teal-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-teal-600 transition duration-300 inline-block">
            Enroll Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FoundationsOfAIPage;