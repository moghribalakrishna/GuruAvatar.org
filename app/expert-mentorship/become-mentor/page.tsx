'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle, Check } from 'lucide-react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  phone: string;
  expertise: string;
  experience: string;
  motivation: string;
}

export default function BecomeMentorPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    expertise: '',
    experience: '',
    motivation: '',
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

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
    if (errors.phone) {
      setErrors({ ...errors, phone: '' });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.expertise.trim()) newErrors.expertise = "Area of expertise is required";
    if (!formData.experience.trim()) newErrors.experience = "Experience is required";
    if (!formData.motivation.trim()) newErrors.motivation = "Motivation is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/mentor-applications`, { data: formData });
        if (response.status === 200) {
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            expertise: '',
            experience: '',
            motivation: '',
          });
        } else {
          throw new Error('Failed to submit application');
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
      <h2 className="text-4xl font-bold mb-6 text-center">Become a Mentor</h2>
      <p className="text-xl mb-8 text-center text-gray-600">
        Share your expertise and make a lasting impact on the next generation of learners. Join our mentorship program and help shape the future of education.
      </p>

      <div className="mb-8 rounded-xl overflow-hidden">
        <Image src="/images/expert-mentorship/become-mentor.webp" alt="Become a Mentor" width={1200} height={600} className="w-full" />
      </div>

      {submitSuccess ? (
        <motion.div className="bg-green-100 p-8 rounded-xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Check className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <h3 className="text-2xl font-bold mb-4 text-green-800">Thank You for Applying!</h3>
          <p className="text-lg text-green-700">Your mentor application has been submitted successfully. We'll review your information and get back to you soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-xl">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Full Name *</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400" placeholder="Enter your full name" required />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email Address *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400" placeholder="your.email@example.com" required />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                  className: 'w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 pl-14'
                }}
                containerClass="!w-full"
                buttonClass="!bg-gray-100 !border-r-0 !px-3 !pl-3"
                dropdownClass="!bg-white !text-gray-700"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="expertise" className="block mb-2 font-semibold text-gray-700">Area of Expertise *</label>
            <input type="text" id="expertise" name="expertise" value={formData.expertise} onChange={handleInputChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400" placeholder="E.g., Machine Learning, Web Development, Data Science" required />
            {errors.expertise && <p className="text-red-500 text-sm mt-1">{errors.expertise}</p>}
          </div>
          <div>
            <label htmlFor="experience" className="block mb-2 font-semibold text-gray-700">Relevant Experience *</label>
            <textarea id="experience" name="experience" value={formData.experience} onChange={handleInputChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400" rows={4} placeholder="Briefly describe your relevant experience in your area of expertise" required></textarea>
            {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
          </div>
          <div>
            <label htmlFor="motivation" className="block mb-2 font-semibold text-gray-700">Why do you want to be a mentor? *</label>
            <textarea id="motivation" name="motivation" value={formData.motivation} onChange={handleInputChange} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-gray-400" rows={4} placeholder="Share your motivation for becoming a mentor" required></textarea>
            {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>}
          </div>
          {errors.submit && (
            <div className="bg-red-100 p-3 rounded-md flex items-center text-red-700">
              <AlertCircle className="mr-2" />
              <p>{errors.submit}</p>
            </div>
          )}
          <div className="flex justify-center">
            <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 flex items-center justify-center max-w-md w-full" disabled={isSubmitting}>
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
                  Submit Application
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}