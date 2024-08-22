'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Briefcase, Zap } from 'lucide-react';

export default function JobsWhileStudyingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    courseOfStudy: '',
    availableHours: '',
    preferredJobType: '',
    relevantSkills: '',
    workExperience: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Jobs While Studying Application:', formData);
    // Here you would send the form data to your backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center"
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
          <h2 className="text-2xl font-semibold mb-4">Balance Work and Studies with GuruAvatar</h2>
          <p className="mb-6">Gain valuable work experience while pursuing your education. GuruAvatar helps you find flexible job opportunities that complement your studies and boost your career prospects.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Clock, title: "Flexible Schedules", description: "Find jobs that fit around your class timetable" },
              { icon: BookOpen, title: "Study-Relevant Opportunities", description: "Discover roles that align with your field of study" },
              { icon: Briefcase, title: "Part-Time and Casual Work", description: "Access a variety of job types to suit your needs" },
              { icon: Zap, title: "Skill Development", description: "Enhance your employability with real-world experience" },
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <feature.icon className="w-6 h-6 text-orange-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-blue-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-10 p-6 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Find Your Perfect Student Job</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="text"
              name="institution"
              placeholder="Educational Institution"
              value={formData.institution}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              name="courseOfStudy"
              placeholder="Course of Study"
              value={formData.courseOfStudy}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              name="availableHours"
              placeholder="Available Hours per Week"
              value={formData.availableHours}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <select
              name="preferredJobType"
              value={formData.preferredJobType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Preferred Job Type</option>
              <option value="part-time">Part-Time</option>
              <option value="casual">Casual</option>
              <option value="freelance">Freelance</option>
              <option value="remote">Remote</option>
            </select>
            <textarea
              name="relevantSkills"
              placeholder="Relevant Skills"
              value={formData.relevantSkills}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={3}
            />
            <textarea
              name="workExperience"
              placeholder="Previous Work Experience (if any)"
              value={formData.workExperience}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Submit Job Preferences
          </button>
        </motion.form>
      </div>
    </div>
  );
}