'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Briefcase, Zap, Search } from 'lucide-react';
import Image from 'next/image';
import UnifiedRegistrationForm from '../UnifiedRegistrationForm';

export default function JobsWhileStudyingPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedJobType, setSelectedJobType] = React.useState('');

  const featuredJobs = [
    { title: "Campus Ambassador", company: "TechStart", type: "Part-time" },
    { title: "Research Assistant", company: "BioLab", type: "Flexible" },
    { title: "Social Media Intern", company: "CreativeMinds", type: "Remote" },
    { title: "Junior Web Developer", company: "WebSolutions", type: "Part-time" },
    { title: "Library Assistant", company: "University Library", type: "On-campus" },
    { title: "Marketing Intern", company: "StartupX", type: "Remote" },
  ];

  const filteredJobs = featuredJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedJobType === '' || job.type === selectedJobType)
  );

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Image src="/images/jobs-internships/part-time-jobs.webp" alt="Jobs While Studying" width={1200} height={600} className="rounded-lg mx-auto" />
        </div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Jobs While Studying
        </motion.h1>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Balance Work and Studies with GuruAvatar</h2>
          <p className="mb-6 text-gray-600">Gain valuable work experience while pursuing your education. GuruAvatar helps you find flexible job opportunities that complement your studies and boost your career prospects.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Flexible Schedules", description: "Find jobs that fit around your class timetable" },
              { icon: BookOpen, title: "Study-Relevant Opportunities", description: "Discover roles that align with your field of study" },
              { icon: Briefcase, title: "Part-Time and Casual Work", description: "Access a variety of job types to suit your needs" },
              { icon: Zap, title: "Skill Development", description: "Enhance your employability with real-world experience" },
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Featured Job Listings</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-grow">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search jobs..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 pl-10"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            <select 
              value={selectedJobType} 
              onChange={(e) => setSelectedJobType(e.target.value)}
              className="px-4 py-2 bg-gray-100 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">All Job Types</option>
              <option value="Part-time">Part-time</option>
              <option value="Flexible">Flexible</option>
              <option value="Remote">Remote</option>
              <option value="On-campus">On-campus</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredJobs.map((job, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-100 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-semibold mb-1 text-gray-800">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.company}</p>
                <p className="text-sm text-blue-600 mb-2">{job.type}</p>
                <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition duration-300">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Unified Registration Form */}
        <UnifiedRegistrationForm formType="jobs-while-studying" />

      </div>
    </div>
  );
}