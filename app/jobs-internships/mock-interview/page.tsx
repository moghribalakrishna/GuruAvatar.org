'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, CheckCircle } from 'lucide-react';

export default function MockInterviewPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    preferredDate: '',
    interviewType: '',
    additionalInfo: '',
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
    console.log('Mock Interview Request:', formData);
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
          Mock Interview Hub
        </motion.h1>
        
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Prepare for Success with Mock Interviews</h2>
          <p className="mb-4">Experience realistic interview scenarios and receive valuable feedback to improve your performance.</p>
          <ul className="list-none space-y-2">
            {['Practice with industry professionals', 'Receive constructive feedback', 'Improve your communication skills', 'Build confidence for real interviews'].map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-10 p-6 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Schedule a Mock Interview</h2>
          <div className="space-y-4">
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
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <select
              name="interviewType"
              value={formData.interviewType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            >
              <option value="">Select Interview Type</option>
              <option value="general">General Interview</option>
              <option value="technical">Technical Interview</option>
              <option value="behavioral">Behavioral Interview</option>
            </select>
            <textarea
              name="additionalInfo"
              placeholder="Any additional information or specific areas you want to focus on"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Schedule Mock Interview
          </button>
        </motion.form>
      </div>
    </div>
  );
}