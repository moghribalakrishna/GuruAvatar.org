// File: app/ai-masterclass/instructor/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, BookOpen, Users } from 'lucide-react';

const InstructorPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8"> // Changed background to white and text color to gray-800
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Your Instructor
        </motion.h1>

        <motion.div 
          className="bg-gray-100 p-8 rounded-xl flex flex-col md:flex-row items-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image src="/founder-image.jpeg" alt="Mr Balakrishna Moghri" width={300} height={300} className="rounded-full mb-6 md:mb-0 md:mr-8" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Mr Balakrishna Moghri</h2>
            <p className="text-xl mb-4">Founder & CTO of 2 Startups GuruAvatar & AlienHu, Worked for $300M funded startups @Leadership Positions</p>
            <p className="text-gray-600 mb-4"> // Changed text color to gray-600
              Mr Balakrishna Moghri brings years of industry and academic experience to the AI Masterclass. 
            </p>
          </div>
        </motion.div>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Expertise & Achievements</h2>
          <ul className="space-y-4">
            {[
              "Developed 10+ Software Products from Scratch",
              "Built 2 Startups from Scratch to 100K+ Users",
              "Worked for 3 Startups in Leadership Positions",
              "Raised $1M+ Funding for 2 Startups",
              "Led 20+ Teams in Software Development",
              "Mentored 500+ Students & Professionals",
              "Trained 1000+ Students in AI & ML",
            ].map((achievement, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Award className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Learn from the Best in AI</h2>
          <p className="text-xl mb-8">
            Join Mr Balakrishna Moghri in this immersive AI Masterclass and gain insights from one of the field's leading experts.
          </p>
          <a 
            href="/ai-masterclass/register" 
            className="bg-teal-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-teal-600 transition duration-300 inline-flex items-center"
          >
            <BookOpen className="mr-2" />
            Enroll Now
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default InstructorPage;