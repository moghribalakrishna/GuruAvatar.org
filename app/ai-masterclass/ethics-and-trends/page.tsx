// File: app/ai-masterclass/ethics-and-trends/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, TrendingUp, Users, Lightbulb } from 'lucide-react';

const AIEthicsAndTrendsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ShieldCheck className="w-12 h-12 mr-4 text-blue-300" />
          AI Ethics & Future Trends
        </motion.h1>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore the ethical implications of AI and gain insights into emerging trends. This module prepares you to navigate the complex landscape of AI development responsibly.
        </motion.p>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image src="/images/ai-masterclass/ai-ethics-trends-hero.webp" alt="AI Ethics & Future Trends" width={800} height={400} className="rounded-xl shadow-2xl" />
        </motion.div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Key Topics</h2>
          <ul className="space-y-4">
            {[
              "Ethical frameworks for AI development",
              "Bias and fairness in AI systems",
              "AI governance and regulation",
              "Privacy and security considerations",
              "Emerging AI technologies and their potential impacts",
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <ShieldCheck className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Exploring the Future of AI</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, title: "AI in Healthcare", description: "Examine the potential of AI to revolutionize medical diagnosis and treatment" },
              { icon: Users, title: "AI and Society", description: "Analyze the societal impacts of widespread AI adoption" },
              { icon: Lightbulb, title: "Quantum AI", description: "Explore the intersection of quantum computing and artificial intelligence" },
              { icon: ShieldCheck, title: "Responsible AI Development", description: "Learn frameworks for building ethical and transparent AI systems" },
            ].map((topic, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <topic.icon className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
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

export default AIEthicsAndTrendsPage;