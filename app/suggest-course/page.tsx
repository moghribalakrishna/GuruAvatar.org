// File: app/suggest-course/page.tsx

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, User, Mail, Send } from 'lucide-react';

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
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        courseTitle: '',
        courseDescription: '',
        targetAudience: '',
      });
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Suggest a Course
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Have an idea for a course? We'd love to hear it!
          </p>
        </div>
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-600"
          >
            <p className="text-xl font-semibold">Thank you for your suggestion!</p>
            <p className="mt-2">We'll review your course idea and get back to you soon.</p>
          </motion.div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-400 absolute ml-3" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 absolute ml-3" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="courseTitle" className="sr-only">Course Title</label>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-gray-400 absolute ml-3" />
                  <input
                    id="courseTitle"
                    name="courseTitle"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Suggested Course Title"
                    value={formData.courseTitle}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="courseDescription" className="sr-only">Course Description</label>
                <textarea
                  id="courseDescription"
                  name="courseDescription"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Brief description of the course"
                  rows={4}
                  value={formData.courseDescription}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="targetAudience" className="sr-only">Target Audience</label>
                <input
                  id="targetAudience"
                  name="targetAudience"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Who is this course for?"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Course Suggestion
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}