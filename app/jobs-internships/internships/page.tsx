'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function InternshipsPage() {
  const internshipBenefits = [
    { icon: Lightbulb, title: "Hands-on Experience", description: "Work on real projects and gain practical skills" },
    { icon: Users, title: "Networking Opportunities", description: "Connect with industry professionals and potential mentors" },
    { icon: Award, title: "Career Advancement", description: "Enhance your resume and improve job prospects" },
    { icon: TrendingUp, title: "Skill Development", description: "Identify and develop key competencies for your chosen field" },
  ];

  const internshipTypes = [
    { title: "Summer Internships", description: "Intensive programs during the summer break" },
    { title: "Co-op Programs", description: "Alternating academic terms with work terms" },
    { title: "Remote Internships", description: "Flexible opportunities to work from anywhere" },
    { title: "Project-Based Internships", description: "Focus on specific projects or initiatives" },
  ];

  const preparationTips = [
    "Research companies and industries of interest",
    "Tailor your resume and cover letter for each application",
    "Practice interview skills and common questions",
    "Develop a portfolio showcasing relevant projects",
    "Network with alumni and professionals in your field",
    "Stay updated on industry trends and news",
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Image src="/images/jobs-internships/internships.webp" alt="Internships" width={1200} height={600} className="rounded-lg mx-auto" />
        </div>
        
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Internship Opportunities
        </motion.h1>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Kickstart Your Career with Meaningful Internships</h2>
          <p className="mb-6 text-gray-600">Gain invaluable industry experience, build your professional network, and apply your academic knowledge in real-world settings. GuruAvatar connects you with internship opportunities that align with your career goals.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internshipBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-gray-100 p-4 rounded-lg">
                <benefit.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-800">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Types of Internships</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {internshipTypes.map((type, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-800">{type.title}</h3>
                <p className="text-sm text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Apply for Internship Opportunities</h2>
          <p className="mb-6 text-gray-600">Kickstart your career with an internship. Register now to explore exciting opportunities.</p>
          <Link href="/register?type=internships" passHref>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 font-semibold flex items-center mx-auto">
              Register for Internships
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </Link>
        </motion.section>

        <motion.section 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Prepare for Success</h2>
          <div className="bg-gray-100 p-6 rounded-xl">
            <ul className="space-y-2">
              {preparationTips.map((tip, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span className="text-gray-800">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ready to Explore Internship Opportunities?</h2>
          <p className="mb-6 text-gray-600">Browse our curated list of internships and find the perfect match for your skills and interests.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-semibold flex items-center mx-auto">
            Browse Internships
            <TrendingUp className="ml-2 w-4 h-4" />
          </button>
        </motion.section>
      </div>
    </div>
  );
}