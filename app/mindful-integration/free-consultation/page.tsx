// File: app/free-consultation/page.tsx

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle } from 'lucide-react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  message: string;
}

export default function FreeConsultationRequest() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: '',
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.preferredDate) newErrors.preferredDate = "Preferred date is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/consultation-requests`, {
          data: formData
        });

        if (response.status === 200) {
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            preferredDate: '',
            message: '',
          });
        } else {
          throw new Error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ ...errors, submit: 'An error occurred. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Schedule a Free Consultation
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Request a free consultation with one of our mindfulness experts to discuss your personal mindfulness journey.
        </motion.p>

        {submitSuccess ? (
          <motion.div
            className="max-w-2xl mx-auto bg-green-500 bg-opacity-20 p-8 rounded-xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Thank You for Your Request!</h2>
            <p>We've received your consultation request and will get back to you shortly to confirm your appointment.</p>
          </motion.div>
        ) : (
          <motion.form
            className="max-w-2xl mx-auto bg-white bg-opacity-10 p-8 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 bg-white bg-opacity-20 rounded text-white ${errors.name ? 'border-red-500' : ''}`}
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 bg-white bg-opacity-20 rounded text-white ${errors.email ? 'border-red-500' : ''}`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block mb-2">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 bg-white bg-opacity-20 rounded text-white ${errors.phone ? 'border-red-500' : ''}`}
                required
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="preferredDate" className="block mb-2">Preferred Consultation Date *</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 bg-white bg-opacity-20 rounded text-white ${errors.preferredDate ? 'border-red-500' : ''}`}
                required
              />
              {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2">Additional Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white bg-opacity-20 rounded text-white"
                rows={4}
              ></textarea>
            </div>

            {errors.submit && (
              <div className="mb-6 bg-red-500 bg-opacity-20 p-3 rounded flex items-center">
                <AlertCircle className="mr-2" />
                <p>{errors.submit}</p>
              </div>
            )}

            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 flex items-center justify-center w-full disabled:opacity-50 disabled:cursor-not-allowed"
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
                  Request Consultation
                </>
              )}
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}