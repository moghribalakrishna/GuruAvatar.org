// File: app/ai-masterclass/machine-learning/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Database, TrendingUp, GitBranch, FileText } from 'lucide-react';

const MachineLearningPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Database className="w-12 h-12 mr-4 text-blue-300" />
          Machine Learning Deep Dive
        </motion.h1>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Master the core machine learning algorithms and techniques that power modern AI systems. This module combines theory with hands-on implementation to give you a comprehensive understanding of ML.
        </motion.p>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image src="/images/ai-masterclass/machine-learning-hero.webp" alt="Machine Learning Deep Dive" width={800} height={400} className="rounded-xl shadow-2xl" />
        </motion.div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Key Topics</h2>
          <ul className="space-y-4">
            {[
              "Supervised and unsupervised learning",
              "Feature engineering and selection",
              "Model evaluation and validation techniques",
              "Ensemble methods and boosting algorithms",
              "Advanced optimization techniques",
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <TrendingUp className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Practical Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: GitBranch, title: "Predictive Model Development", description: "Build and deploy a machine learning model for real-world prediction tasks" },
              { icon: FileText, title: "Natural Language Processing", description: "Implement text classification and sentiment analysis systems" },
              { icon: Database, title: "Recommender Systems", description: "Create a personalized recommendation engine using collaborative filtering" },
              { icon: TrendingUp, title: "Time Series Forecasting", description: "Develop models for predicting future values in time-dependent data" },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <project.icon className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
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

export default MachineLearningPage;