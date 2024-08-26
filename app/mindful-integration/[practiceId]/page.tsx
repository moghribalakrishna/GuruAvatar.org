'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { mindfulnessPractices } from '../../data/mindfulnessData';

export default function MindfulnessPracticePage() {
  const { practiceId } = useParams();
  const practice = mindfulnessPractices.find(p => p.id === practiceId);

  if (!practice) {
    return <div>Practice not found</div>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <practice.icon className="w-12 h-12 mr-4 text-blue-600" />
          {practice.title}
        </motion.h1>

        <motion.p 
          className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {practice.fullDescription}
        </motion.p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            {practice.benefits.map((benefit, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-gray-600"
              >
                {benefit}
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">How to Practice</h2>
          <ol className="list-decimal list-inside space-y-2">
            {practice.steps.map((step, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-gray-600"
              >
                {step}
              </motion.li>
            ))}
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Tips for Success</h2>
          <ul className="list-disc list-inside space-y-2">
            {practice.tips.map((tip, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-gray-600"
              >
                {tip}
              </motion.li>
            ))}
          </ul>
        </section>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/get-started" className="bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300 inline-block">
            Start Practicing Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}