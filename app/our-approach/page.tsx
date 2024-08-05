'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Brain, Focus, Repeat, Users } from 'lucide-react';

export default function OurApproachPage() {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Approach to Revolutionary Education
        </motion.h1>
        
        <section className="mb-16">
          <motion.p 
            className="text-xl mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At GuruAvatar, we believe in a holistic, technology-enhanced approach to education. Our methodology combines cutting-edge AI with time-honored practices to create a truly transformative learning experience.
          </motion.p>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white bg-opacity-10 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Brain className="w-16 h-16 text-blue-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">AI-Powered Learning</h2>
              <p className="text-lg">Our advanced AI algorithms create personalized learning paths, adapting in real-time to each student's progress and learning style.</p>
            </motion.div>

            <motion.div 
              className="bg-white bg-opacity-10 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Focus className="w-16 h-16 text-green-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Mindfulness Integration</h2>
              <p className="text-lg">We incorporate mindfulness techniques to enhance focus, reduce stress, and improve overall well-being, creating a holistic learning experience.</p>
            </motion.div>

            <motion.div 
              className="bg-white bg-opacity-10 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Repeat className="w-16 h-16 text-purple-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Habit Formation</h2>
              <p className="text-lg">Using scientifically-backed methods, we help students build lasting habits that support continuous learning and personal growth.</p>
            </motion.div>

            <motion.div 
              className="bg-white bg-opacity-10 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Users className="w-16 h-16 text-orange-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Expert Mentorship</h2>
              <p className="text-lg">Our platform connects students with industry experts and educators, providing guidance, inspiration, and real-world insights.</p>
            </motion.div>
          </div>
        </section>

        {/* Rest of the component remains the same */}
        
      </div>
    </div>
  );
}