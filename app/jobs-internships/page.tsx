'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, Book, Users, Calendar, Lightbulb, MessageCircle } from 'lucide-react';

const subModules = [
  { title: 'Interview Preparation Hub', icon: Book, link: '/jobs-internships/interview-preparation', image: '/images/jobs-internships/interview-prep.webp' },
  { title: 'Mock Interview Hub', icon: Users, link: '/jobs-internships/mock-interview', image: '/images/jobs-internships/mock-interview.webp' },
  { title: 'Full-Time Jobs', icon: Briefcase, link: '/jobs-internships/full-time-jobs', image: '/images/jobs-internships/full-time-jobs.webp' },
  { title: 'Jobs While Studying', icon: Calendar, link: '/jobs-internships/jobs-while-studying', image: '/images/jobs-internships/part-time-jobs.webp' },
  { title: 'Internships', icon: Lightbulb, link: '/jobs-internships/internships', image: '/images/jobs-internships/internships.webp' },
  { title: 'Career Connect Advice Hub', icon: MessageCircle, link: '/jobs-internships/career-advice', image: '/images/jobs-internships/career-advice.webp' },
];

export default function JobsInternshipsPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empower Your Career Journey with GuruAvatar
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-12 text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Comprehensive resources for interview preparation, job search, and career advice
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {subModules.map((module, index) => (
            <Link href={module.link} key={index}>
              <motion.div
                className="bg-gray-100 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={module.image}
                  alt={module.title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow">
                  <module.icon className="w-12 h-12 mb-4 text-orange-500" />
                  <h2 className="text-xl font-semibold mb-2">{module.title}</h2>
                  <p className="text-sm text-gray-600">Explore resources and guidance for your career journey.</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.section
          className="mt-16 text-center bg-gray-100 py-12 rounded-xl shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Upcoming Career Workshops</h2>
          <p className="text-lg mb-8 text-gray-600">Join our career development workshops to enhance your skills and knowledge.</p>
          <Link href="/workshops">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 shadow-lg">
              View Workshops
            </button>
          </Link>
        </motion.section>
      </div>
    </div>
  );
}