'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Briefcase, Book, Users, Calendar, Lightbulb, MessageCircle } from 'lucide-react';

const subModules = [
  { title: 'Interview Preparation Hub', icon: Book, link: '/jobs-internships/interview-preparation' },
  { title: 'Mock Interview Hub', icon: Users, link: '/jobs-internships/mock-interview' },
  { title: 'Full-Time Jobs', icon: Briefcase, link: '/jobs-internships/full-time-jobs' },
  { title: 'Jobs While Studying', icon: Calendar, link: '/jobs-internships/jobs-while-studying' },
  { title: 'Internships', icon: Lightbulb, link: '/jobs-internships/internships' },
  { title: 'Career Connect Advice Hub', icon: MessageCircle, link: '/jobs-internships/career-advice' },
];

export default function JobsInternshipsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empower Your Career Journey with GuruAvatar
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Comprehensive resources for interview preparation, job search, and career advice
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subModules.map((module, index) => (
            <Link href={module.link} key={index}>
              <motion.div
                className="bg-white bg-opacity-10 p-6 rounded-xl hover:bg-opacity-20 transition duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <module.icon className="w-12 h-12 mb-4 text-orange-400" />
                <h2 className="text-xl font-semibold mb-2">{module.title}</h2>
                <p className="text-sm text-blue-200">Explore resources and guidance for your career journey.</p>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.section
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Upcoming Workshops</h2>
          <p className="mb-6">Join our career development workshops to enhance your skills and knowledge.</p>
          <Link href="/workshops">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
              View Workshops
            </button>
          </Link>
        </motion.section>
      </div>
    </div>
  );
}