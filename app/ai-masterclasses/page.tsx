'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Users, Globe, Book, Code } from 'lucide-react';
import Link from 'next/link';

const masterclasses = [
  {
    title: "Introduction to AI and Machine Learning",
    icon: Brain,
    description: "Dive into the fundamentals of AI and ML, understanding key concepts and their real-world applications.",
  },
  {
    title: "Natural Language Processing",
    icon: Zap,
    description: "Explore how computers understand and generate human language, with hands-on exercises in text analysis.",
  },
  {
    title: "Computer Vision and Image Recognition",
    icon: Code,
    description: "Learn how AI can interpret and analyze visual information from the world around us.",
  },
  {
    title: "AI Ethics and Responsible Innovation",
    icon: Users,
    description: "Delve into the ethical considerations of AI development and deployment, focusing on fairness and transparency.",
  },
];

export default function AIMasterclasses() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-teal-700 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI Masterclasses
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Embark on a journey into the world of Artificial Intelligence with our expert-led masterclasses. Gain hands-on experience and insights into cutting-edge AI technologies.
        </motion.p>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Masterclasses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {masterclasses.map((masterclass, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <masterclass.icon className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{masterclass.title}</h3>
                <p className="text-gray-300">{masterclass.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Our AI Masterclasses?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Industry-Relevant Content", description: "Stay ahead with curriculum aligned to the latest AI trends and applications." },
              { icon: Users, title: "Expert Instructors", description: "Learn from AI professionals with real-world experience in leading tech companies." },
              { icon: Book, title: "Hands-On Learning", description: "Apply your knowledge through practical exercises and real-world projects." },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">How It Works</h2>
          <div className="bg-white bg-opacity-10 p-8 rounded-xl">
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg">Register for a masterclass that interests you</li>
              <li className="text-lg">Receive pre-class materials and setup instructions</li>
              <li className="text-lg">Attend the live, interactive online session</li>
              <li className="text-lg">Complete hands-on projects to reinforce your learning</li>
              <li className="text-lg">Earn a certificate of completion</li>
            </ol>
          </div>
        </section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Ready to Dive into AI?</h2>
          <p className="text-xl mb-8">
            Join our next AI Masterclass and take the first step towards mastering artificial intelligence.
          </p>
          <Link 
            href="/register-masterclass" 
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 inline-block"
          >
            Register Now
          </Link>
        </motion.section>
      </div>
    </div>
  );
}