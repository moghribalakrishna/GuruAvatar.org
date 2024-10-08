'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Star, DollarSign, TrendingUp, Book, Users, ArrowRight, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function FullTimeJobsPage() {
  const features = [
    { icon: Star, title: "Personalized Job Matching", description: "AI-powered job recommendations based on your skills and interests" },
    { icon: Briefcase, title: "Application Guidance", description: "Expert tips on crafting standout resumes and cover letters" },
    { icon: DollarSign, title: "Salary Insights", description: "Access to industry salary data to help you negotiate confidently" },
    { icon: TrendingUp, title: "Career Path Planning", description: "Tools to map out your long-term career goals and progression" },
  ];

  const careerResources = [
    { icon: FileText, title: "Resume Building Workshop", description: "Learn to create a compelling resume that stands out" },
    { icon: Users, title: "Interview Preparation", description: "Practice common interview questions and techniques" },
    { icon: Book, title: "Industry Insights", description: "Stay updated with the latest trends in your field" },
    { icon: Briefcase, title: "Job Search Strategies", description: "Effective methods to find and apply for the right jobs" },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Image src="/images/jobs-internships/full-time-jobs.webp" alt="Full-Time Jobs" width={1200} height={600} className="rounded-lg mx-auto" />
        </div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Full-Time Job Opportunities
        </motion.h1>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Launch Your Career with GuruAvatar</h2>
          <p className="mb-6 text-gray-600">Transitioning from student life to a full-time career is a significant milestone. GuruAvatar is here to guide you through every step of the process, from finding the right opportunities to negotiating your first salary.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 bg-gray-100 p-4 rounded-lg">
                <feature.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Apply for Full-Time Opportunities</h2>
          <p className="mb-6 text-gray-600">Ready to start your career? Register now to access exclusive full-time job opportunities.</p>
          <Link href="/jobs-internships/register?type=full-time-jobs" passHref>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 font-semibold flex items-center mx-auto">
              Register for Full-Time Jobs
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Career Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {careerResources.map((resource, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg flex items-start space-x-3">
                <resource.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-800">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Prepare for Success</h2>
          <div className="bg-gray-100 p-6 rounded-xl">
            <ul className="space-y-2">
              {[
                "Research companies in your desired industry",
                "Tailor your resume and cover letter for each application",
                "Practice common interview questions",
                "Develop a compelling personal brand",
                "Network with professionals in your field",
                "Stay updated on industry trends and news",
              ].map((tip, index) => (
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
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ready to Explore Full-Time Opportunities?</h2>
          <p className="mb-6 text-gray-600">Browse our curated list of job openings and find your perfect career match.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-semibold flex items-center mx-auto">
            Browse Job Listings
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </motion.section>
      </div>
    </div>
  );
}