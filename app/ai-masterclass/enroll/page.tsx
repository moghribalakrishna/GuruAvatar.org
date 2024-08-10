// File: app/ai-masterclass/register/page.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign, Users, Clock, CheckCircle } from 'lucide-react';

const EnrollPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    background: '',
    goals: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setStep(3); // Move to confirmation step
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-teal-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Enroll in AI Masterclass
        </motion.h1>

        <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-2xl">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Course Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Calendar className="w-8 h-8 text-teal-400 mr-4" />
                  <div>
                    <h3 className="font-semibold">Start Date</h3>
                    <p>September 1, 2024</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-8 h-8 text-teal-400 mr-4" />
                  <div>
                    <h3 className="font-semibold">Duration</h3>
                    <p>12 weeks, 20 hours/week</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-8 h-8 text-teal-400 mr-4" />
                  <div>
                    <h3 className="font-semibold">Tuition</h3>
                    <p>Rs 500 </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-8 h-8 text-teal-400 mr-4" />
                  <div>
                    <h3 className="font-semibold">Class Size</h3>
                    <p>Limited to 50 students</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setStep(2)} 
                className="mt-8 bg-teal-500 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-teal-600 transition duration-300"
              >
                Proceed to Application
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Application Form</h2>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 rounded text-white"
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 rounded text-white"
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="background" className="block mb-2">Your Background in AI/ML</label>
                <textarea 
                  id="background" 
                  name="background" 
                  value={formData.background} 
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 rounded text-white"
                  rows={4}
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="goals" className="block mb-2">Your Goals for This Course</label>
                <textarea 
                  id="goals" 
                  name="goals" 
                  value={formData.goals} 
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 rounded text-white"
                  rows={4}
                  required 
                />
              </div>
              <button 
                type="submit" 
                className="mt-4 bg-teal-500 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-teal-600 transition duration-300"
              >
                Submit Application
              </button>
            </motion.form>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
              <p className="text-xl mb-6">
                Thank you for applying to the AI Masterclass. We'll review your application and get back to you within 5 business days.
              </p>
              <p className="text-lg">
                In the meantime, why not check out our <a href="/blog" className="text-teal-400 hover:underline">blog</a> for the latest in AI trends and insights?
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollPage;