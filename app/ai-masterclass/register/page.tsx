'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle } from 'lucide-react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  occupation: string;
  experience: string;
  expectations: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function RegisterMasterclassPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    occupation: '',
    experience: '',
    expectations: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
    if (errors.phone) {
      setErrors({ ...errors, phone: '' });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.occupation.trim()) {
      newErrors.occupation = 'Occupation is required';
    }

    if (!formData.experience.trim()) {
      newErrors.experience = 'Experience level is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/masterclass-registrations`, {
          data: formData
        });

        if (response.status === 200) {
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            occupation: '',
            experience: '',
            expectations: '',
          });
        } else {
          throw new Error('Failed to submit registration');
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
    <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
      <motion.h2 
        className="text-5xl font-bold mb-6 text-center text-teal-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Register for AI Masterclass
      </motion.h2>
      <motion.p 
        className="text-xl mb-8 text-center text-gray-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Join our intensive AI Masterclass and gain hands-on experience with cutting-edge AI technologies. Space is limited, so register now!
      </motion.p>

      {submitSuccess ? (
        <motion.div
          className="bg-green-100 p-8 rounded-xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-green-600">Registration Successful!</h3>
          <p className="text-lg text-gray-700">Thank you for registering for our AI Masterclass. We'll be in touch soon with more details.</p>
        </motion.div>
      ) : (
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 bg-white rounded-md text-gray-700 placeholder-gray-400 border ${errors.name ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
              placeholder="Enter your full name"
              required
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 bg-white rounded-md text-gray-700 placeholder-gray-400 border ${errors.email ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
              placeholder="abc@example.com"
              required
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">Phone Number *</label>
            <div className="relative max-w-md">
              <PhoneInput
                country={'in'}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{
                  name: 'phone',
                  required: true,
                  className: 'w-full px-3 py-2 bg-white rounded-md text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 pl-14'
                }}
                containerClass="!w-full"
                buttonClass="!bg-gray-100 !border-gray-300 !px-3 !pl-3"
                dropdownClass="!bg-white !text-gray-700"
              />
            </div>
            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="occupation" className="block mb-2 font-semibold text-gray-700">Occupation *</label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 bg-white rounded-md text-gray-700 placeholder-gray-400 border ${errors.occupation ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
              placeholder="Software Engineer"
              required
            />
            {errors.occupation && <p className="text-red-400 text-sm mt-1">{errors.occupation}</p>}
          </div>

          <div>
            <label htmlFor="experience" className="block mb-2 font-semibold text-gray-700">Experience with AI *</label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 bg-white rounded-md text-gray-700 border ${errors.experience ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
              required
            >
              <option value="">Select your experience level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            {errors.experience && <p className="text-red-400 text-sm mt-1">{errors.experience}</p>}
          </div>

          <div>
            <label htmlFor="expectations" className="block mb-2 font-semibold text-gray-700">What do you hope to learn from this masterclass?</label>
            <textarea
              id="expectations"
              name="expectations"
              value={formData.expectations}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-white rounded-md text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows={4}
              placeholder="Describe your expectations"
            ></textarea>
          </div>

          {errors.submit && (
            <div className="bg-red-100 p-3 rounded-md flex items-center text-red-700">
              <AlertCircle className="mr-2" />
              <p>{errors.submit}</p>
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300 flex items-center justify-center max-w-md w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Registering...
                </>
              ) : (
                <>
                  <Send className="mr-2" />
                  Register for Masterclass
                </>
              )}
            </button>
          </div>
        </motion.form>
      )}
    </div>
  );
}