'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle, Check } from 'lucide-react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  selectedHabits: string[];
  preferredStartDate: string;
  goals: string;
}

export default function HabitForgingRegistration() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    selectedHabits: [],
    preferredStartDate: '',
    goals: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const habitOptions = [
    'Goal Setting', 'Time Management', 'Mindfulness', 'Journaling & Reading',
    'Health', 'Communication', 'Teamwork', 'Critical Thinking',
    'Mentorship', 'Financial Literacy'
  ];

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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, selectedHabits: [...formData.selectedHabits, value] });
    } else {
      setFormData({ ...formData, selectedHabits: formData.selectedHabits.filter(habit => habit !== value) });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (formData.selectedHabits.length === 0) newErrors.selectedHabits = "Please select at least one habit";
    if (!formData.preferredStartDate) newErrors.preferredStartDate = "Please select a preferred start date";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/habit-forging-registrations`, {
          data: formData
        });

        if (response.status === 200) {
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            selectedHabits: [],
            preferredStartDate: '',
            goals: '',
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
    <div className="bg-gradient-to-br from-blue-900 via-purple-800 to-teal-700 text-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">Transform Your Life with Habit Forging</h2>
      <p className="text-xl mb-8 text-center text-blue-200">
        Join our expert-guided classes and develop powerful habits for success. Start your journey today!
      </p>

      {submitSuccess ? (
        <motion.div
          className="bg-green-500 bg-opacity-20 p-8 rounded-xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Check className="w-16 h-16 mx-auto mb-4 text-green-400" />
          <h3 className="text-2xl font-bold mb-4">Registration Successful!</h3>
          <p className="text-lg">Thank you for registering for our Habit Forging classes. We'll contact you soon with more details.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white bg-opacity-10 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300"
                placeholder="type your name"
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
                className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300"
                placeholder="abc@example.com"
                required
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
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
                  className: 'w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 pl-14' // Added padding-left for spacing
                }}
                containerClass="!w-full"
                buttonClass="!bg-white !bg-opacity-20 !border-r-0 !px-3 !pl-3"
                dropdownClass="!bg-gray-800 !text-white"
              />
            </div>
            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <p className="mb-2 font-semibold">Select Habits to Develop *</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              {habitOptions.map((habit) => (
                <label key={habit} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="selectedHabits"
                    value={habit}
                    checked={formData.selectedHabits.includes(habit)}
                    onChange={handleCheckboxChange}
                    className="form-checkbox text-orange-500 rounded"
                  />
                  <span>{habit}</span>
                </label>
              ))}
            </div>
            {errors.selectedHabits && <p className="text-red-400 text-sm mt-1">{errors.selectedHabits}</p>}
          </div>

          <div>
            <label htmlFor="preferredStartDate" className="block mb-2 font-semibold">Preferred Start Date *</label>
            <input
              type="date"
              id="preferredStartDate"
              name="preferredStartDate"
              value={formData.preferredStartDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white"
              required
            />
            {errors.preferredStartDate && <p className="text-red-400 text-sm mt-1">{errors.preferredStartDate}</p>}
          </div>

          <div>
            <label htmlFor="goals" className="block mb-2 font-semibold">Your Goals (Optional)</label>
            <textarea
              id="goals"
              name="goals"
              value={formData.goals}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300"
              rows={4}
              placeholder="What do you hope to achieve through these habit forging classes?"
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
                    Registering...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" />
                    Register for Habit Forging Classes
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }