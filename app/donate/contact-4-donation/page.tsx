'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  amount: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function DonationFollowUpPage() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    amount: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const amount = searchParams.get('amount');
    if (amount) {
      setFormData(prevData => ({ ...prevData, amount }));
    }
  }, [searchParams]);

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

    if (!formData.amount) {
      newErrors.amount = 'Donation amount is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/donation-intents`, {
          data: formData
        });

        if (response.status === 200) {
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            amount: '',
          });
        } else {
          throw new Error('Failed to submit donation intent');
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
    <div className="bg-gradient-to-br from-blue-900 via-purple-800 to-teal-700 text-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">Complete Your Donation</h2>
      <p className="text-xl mb-8 text-center text-blue-200">
        Please provide your details so we can facilitate your donation and keep you updated on our impact.
      </p>

      {submitSuccess ? (
        <motion.div
          className="bg-green-500 bg-opacity-20 p-8 rounded-xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Thank You for Your Support!</h3>
          <p className="text-lg mb-4">We're currently working on integrating online donations. Our team will contact you shortly to facilitate your donation offline.</p>
          <p className="text-lg">Your generosity helps us continue our mission of providing transformative education to students worldwide.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white bg-opacity-10 p-8 rounded-xl">
          <div>
            <label htmlFor="amount" className="block mb-2 font-semibold">Donation Amount</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={formData.amount}
              readOnly
              className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white"
            />
          </div>

          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 ${errors.name ? 'border border-red-400' : ''}`}
              placeholder="Enter your full name"
              required
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 ${errors.email ? 'border border-red-400' : ''}`}
              placeholder="abc@example.com"
              required
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 font-semibold">Phone Number *</label>
            <div className="relative max-w-md">
              <PhoneInput
                country={'in'}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{
                  name: 'phone',
                  required: true,
                  className: 'w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 pl-14'
                }}
                containerClass="!w-full"
                buttonClass="!bg-white !bg-opacity-20 !border-r-0 !px-3 !pl-3"
                dropdownClass="!bg-gray-800 !text-white"
              />
            </div>
            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300"
              rows={4}
              placeholder="Any additional information or message you'd like to share"
            ></textarea>
          </div>

          {errors.submit && (
            <div className="bg-red-500 bg-opacity-20 p-3 rounded-md flex items-center">
              <AlertCircle className="mr-2" />
              <p>{errors.submit}</p>
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
                  Processing...
                </>
              ) : (
                <>
                  <Send className="mr-2" />
                  Complete Donation
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}