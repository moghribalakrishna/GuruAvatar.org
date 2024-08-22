'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, CheckCircle } from 'lucide-react';

export default function InterviewPreparationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    interests: '',
    experience: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form or show success message
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
          Interview Preparation Hub
        </motion.h1>
        
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">How GuruAvatar Helps</h2>
          <p className="mb-4">Our Interview Preparation Hub provides comprehensive resources and guidance to help you ace your interviews. From common questions to industry-specific insights, we've got you covered.</p>
          <ul className="list-none space-y-2">
            {['Practice with real interview questions', 'Learn effective answer techniques', 'Gain confidence through mock interviews', 'Receive personalized feedback'].map((item, index) => (
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
          <h2 className="text-2xl font-semibold mb-4">Register for Interview Preparation</h2>
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
              type="text"
              name="education"
              placeholder="Educational Background"
              value={formData.education}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              name="interests"
              placeholder="Career Interests"
              value={formData.interests}
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
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </div>
  );
}