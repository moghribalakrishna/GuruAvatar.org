import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Send, AlertCircle } from 'lucide-react';

const formFields = {
  common: [
    { name: 'name', type: 'text', label: 'Full Name', required: true },
    { name: 'email', type: 'email', label: 'Email Address', required: true },
    { name: 'phone', type: 'phone', label: 'Phone Number', required: true },
    { name: 'country', type: 'text', label: 'Country', required: true },
  ],
  education: [
    { name: 'institution', type: 'text', label: 'Educational Institution', required: true },
    { name: 'courseOfStudy', type: 'text', label: 'Course of Study', required: true },
    { name: 'graduationYear', type: 'select', label: 'Expected Graduation Year', options: ['2024', '2025', '2026', '2027', '2028'], required: true },
  ],
  experience: [
    { name: 'yearsOfExperience', type: 'select', label: 'Years of Experience', options: ['0-1', '1-3', '3-5', '5+'], required: true },
    { name: 'currentRole', type: 'text', label: 'Current Role (if applicable)' },
    { name: 'workExperience', type: 'textarea', label: 'Previous Work Experience' },
  ],
  skills: [
    { name: 'skills', type: 'textarea', label: 'Relevant Skills', required: true },
    { name: 'desiredIndustry', type: 'text', label: 'Desired Industry', required: true },
  ],
  availability: [
    { name: 'availableHours', type: 'text', label: 'Available Hours per Week', required: true },
    { name: 'preferredJobType', type: 'select', label: 'Preferred Job Type', options: ['Full-time', 'Part-time', 'Internship', 'Remote'], required: true },
    { name: 'availabilityDate', type: 'date', label: 'Available to Start Work', required: true },
  ],
  interview: [
    { name: 'interviewType', type: 'select', label: 'Preferred Interview Type', options: ['General', 'Technical', 'Behavioral', 'Case'], required: true },
    { name: 'preferredInterviewDate', type: 'date', label: 'Preferred Interview Date', required: true },
  ],
  additional: [
    { name: 'additionalInfo', type: 'textarea', label: 'Additional Information or Questions' },
  ],
};

const formSections = {
  'interview-preparation': ['common', 'education', 'experience', 'skills', 'interview', 'additional'],
  'mock-interview': ['common', 'education', 'experience', 'skills', 'interview', 'additional'],
  'full-time-jobs': ['common', 'education', 'experience', 'skills', 'availability', 'additional'],
  'jobs-while-studying': ['common', 'education', 'skills', 'availability', 'additional'],
  'internships': ['common', 'education', 'skills', 'availability', 'additional'],
  'career-advice': ['common', 'education', 'experience', 'skills', 'additional'],
  'ai-masterclass': ['common', 'education', 'experience', 'skills', 'additional'],
};

export default function UnifiedRegistrationForm({ formType }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const initialData = {};
    formSections[formType].forEach(section => {
      formFields[section].forEach(field => {
        initialData[field.name] = '';
      });
    });
    setFormData(initialData);
  }, [formType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handlePhoneChange = (value, country) => {
    setFormData(prevState => ({ ...prevState, phone: value, country: country.name }));
    if (errors.phone) {
      setErrors(prevErrors => ({ ...prevErrors, phone: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    formSections[formType].forEach(section => {
      formFields[section].forEach(field => {
        if (field.required && !formData[field.name]) {
          newErrors[field.name] = `${field.label} is required`;
        }
      });
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/registrations`, {
          data: formData
        });
        if (response.status === 200) {
          setSubmitSuccess(true);
          setFormData({});
        } else {
          throw new Error('Failed to submit registration');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors(prevErrors => ({ ...prevErrors, submit: 'An error occurred. Please try again.' }));
      } finally {
        setIsSubmitting(false);
      }
    }
  };


  const renderField = (field) => {
    const baseInputClass = "w-full px-4 py-3 bg-white rounded-lg text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200";
    const errorInputClass = "border-red-400 focus:ring-red-500";

    switch (field.type) {
      case 'select':
        return (
          <div className="mb-6">
            <label htmlFor={field.name} className="block mb-2 font-semibold text-gray-700">{field.label}{field.required ? ' *' : ''}</label>
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleInputChange}
              className={`${baseInputClass} ${errors[field.name] ? errorInputClass : ''}`}
              required={field.required}
            >
              <option value="">{`Select ${field.label.toLowerCase()}`}</option>
              {field.options?.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors[field.name] && <p className="mt-2 text-sm text-red-600">{errors[field.name]}</p>}
          </div>
        );
      case 'textarea':
        return (
          <div className="mb-6">
            <label htmlFor={field.name} className="block mb-2 font-semibold text-gray-700">{field.label}{field.required ? ' *' : ''}</label>
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleInputChange}
              placeholder={`Enter ${field.label.toLowerCase()}`}
              className={`${baseInputClass} ${errors[field.name] ? errorInputClass : ''}`}
              rows={4}
              required={field.required}
            />
            {errors[field.name] && <p className="mt-2 text-sm text-red-600">{errors[field.name]}</p>}
          </div>
        );
      case 'phone':
        return (
          <div className="mb-6">
            <label htmlFor={field.name} className="block mb-2 font-semibold text-gray-700">{field.label}{field.required ? ' *' : ''}</label>
            <PhoneInput
              country={'in'}
              value={formData[field.name]}
              onChange={(value, country) => handlePhoneChange(value, country)}
              inputProps={{
                name: field.name,
                required: field.required,
                className: `${baseInputClass} ${errors[field.name] ? errorInputClass : ''} pl-14`,
              }}
              containerClass="!w-full"
              buttonClass="!bg-gray-100 !border-gray-300 !px-3 !pl-3"
              dropdownClass="!bg-white !text-gray-800"
            />
            {errors[field.name] && <p className="mt-2 text-sm text-red-600">{errors[field.name]}</p>}
          </div>
        );
      default:
        return (
          <div className="mb-6">
            <label htmlFor={field.name} className="block mb-2 font-semibold text-gray-700">{field.label}{field.required ? ' *' : ''}</label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleInputChange}
              placeholder={`Enter ${field.label.toLowerCase()}`}
              className={`${baseInputClass} ${errors[field.name] ? errorInputClass : ''}`}
              required={field.required}
            />
            {errors[field.name] && <p className="mt-2 text-sm text-red-600">{errors[field.name]}</p>}
          </div>
        );
    }
  };

  if (submitSuccess) {
    return (
      <motion.div
        className="bg-green-50 p-8 rounded-xl text-center shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-green-600">Registration Successful!</h3>
        <p className="text-lg text-gray-700">Thank you for your submission. We'll be in touch soon with more details.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        {formType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Registration
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {formSections[formType].map(section =>
          formFields[section].map(field => renderField(field))
        )}
        {errors.submit && (
          <div className="bg-red-50 p-4 rounded-lg flex items-center text-red-700 mb-6">
            <AlertCircle className="mr-2 flex-shrink-0" />
            <p>{errors.submit}</p>
          </div>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
                Submit Registration
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}