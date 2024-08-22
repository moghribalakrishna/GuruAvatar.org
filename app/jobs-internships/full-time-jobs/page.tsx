'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Star, DollarSign, TrendingUp } from 'lucide-react';

export default function FullTimeJobsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    graduationDate: '',
    desiredIndustry: '',
    skills: '',
    experience: '',
    preferredLocation: '',
    salaryExpectation: '',
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
    console.log('Full-Time Job Application:', formData);
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
          Full-Time Job Opportunities
        </motion.h1>
        
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Launch Your Career with GuruAvatar</h2>
          <p className="mb-6">Transitioning from student life to a full-time career is a significant milestone. GuruAvatar is here to guide you through every step of the process, from finding the right opportunities to negotiating your first salary.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Star, title: "Personalized Job Matching", description: "AI-powered job recommendations based on your skills and interests" },
              { icon: Briefcase, title: "Application Guidance", description: "Expert tips on crafting standout resumes and cover letters" },
              { icon: DollarSign, title: "Salary Insights", description: "Access to industry salary data to help you negotiate confidently" },
              { icon: TrendingUp, title: "Career Path Planning", description: "Tools to map out your long-term career goals and progression" },
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
          <h2 className="text-2xl font-semibold mb-4">Tell Us About Your Career Goals</h2>
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
              type="date"
              name="graduationDate"
              placeholder="Graduation Date"
              value={formData.graduationDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              name="desiredIndustry"
              placeholder="Desired Industry"
              value={formData.desiredIndustry}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              name="skills"
              placeholder="Key Skills"
              value={formData.skills}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={3}
            />
            <textarea
              name="experience"
              placeholder="Relevant Experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={3}
            />
            <input
              type="text"
              name="preferredLocation"
              placeholder="Preferred Job Location"
              value={formData.preferredLocation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              name="salaryExpectation"
              placeholder="Salary Expectation"
              value={formData.salaryExpectation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Submit Career Profile
          </button>
        </motion.form>
      </div>
    </div>
  );
}