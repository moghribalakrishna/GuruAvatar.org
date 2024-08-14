'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, User, Mail, Send, Check } from 'lucide-react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  courseTitle: string;
  courseDescription: string;
  targetAudience: string;
}

export default function SuggestCoursePage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    courseTitle: '',
    courseDescription: '',
    targetAudience: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/course-suggestions`, {
        data: formData
      });

      if (response.status === 200) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          courseTitle: '',
          courseDescription: '',
          targetAudience: '',
        });
      } else {
        throw new Error('Failed to submit course suggestion');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-800 to-teal-700 text-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">Suggest a Course</h2>
      <p className="text-xl mb-8 text-center text-blue-200">
        Have an idea for a course? We'd love to hear it! Your suggestions help us create content that matters to you.
      </p>

      {isSuccess ? (
        <motion.div
          className="bg-green-500 bg-opacity-20 p-8 rounded-xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Check className="w-16 h-16 mx-auto mb-4 text-green-400" />
          <h3 className="text-2xl font-bold mb-4">Thank you for your suggestion!</h3>
          <p className="text-lg">We'll review your course idea and get back to you soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white bg-opacity-10 p-8 rounded-xl">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">Your Name *</label>
            <div className="relative">
              <User className="h-5 w-5 text-gray-400 absolute top-3 left-3" />
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-3 py-2 pl-10 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">Your Email *</label>
            <div className="relative">
              <Mail className="h-5 w-5 text-gray-400 absolute top-3 left-3" />
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 pl-10 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="courseTitle" className="block mb-2 font-semibold">Suggested Course Title *</label>
            <div className="relative">
              <BookOpen className="h-5 w-5 text-gray-400 absolute top-3 left-3" />
              <input
                id="courseTitle"
                name="courseTitle"
                type="text"
                required
                className="w-full px-3 py-2 pl-10 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300"
                placeholder="Enter your suggested course title"
                value={formData.courseTitle}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="courseDescription" className="block mb-2 font-semibold">Course Description *</label>
            <textarea
              id="courseDescription"
              name="courseDescription"
              required
              className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300"
              placeholder="Provide a brief description of the course"
              rows={4}
              value={formData.courseDescription}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="targetAudience" className="block mb-2 font-semibold">Target Audience *</label>
            <input
              id="targetAudience"
              name="targetAudience"
              type="text"
              required
              className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300"
              placeholder="Who is this course for?"
              value={formData.targetAudience}
              onChange={handleInputChange}
            />
          </div>

          {error && (
            <div className="bg-red-500 bg-opacity-20 p-3 rounded-md flex items-center">
              <p className="text-red-200">{error}</p>
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition duration-300 flex items-center justify-center max-w-md w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2" />
                  Submit Course Suggestion
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}