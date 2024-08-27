import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Book, Users, Calendar, Lightbulb, MessageCircle } from 'lucide-react';

const formFields: Record<string, { name: string; type: string; label: string; required?: boolean; options?: string[] }[]> = {
  common: [
    { name: 'name', type: 'text', label: 'Full Name', required: true },
    { name: 'email', type: 'email', label: 'Email Address', required: true },
    { name: 'phone', type: 'tel', label: 'Phone Number' },
    { name: 'linkedinProfile', type: 'url', label: 'LinkedIn Profile URL' },
  ],
  education: [
    { name: 'institution', type: 'text', label: 'Educational Institution' },
    { name: 'courseOfStudy', type: 'text', label: 'Course of Study' },
    { name: 'graduationYear', type: 'select', label: 'Expected Graduation Year', options: ['2024', '2025', '2026', '2027', '2028'] },
  ],
  experience: [
    { name: 'yearsOfExperience', type: 'select', label: 'Years of Experience', options: ['0-1', '1-3', '3-5', '5+'] },
    { name: 'currentRole', type: 'text', label: 'Current Role (if applicable)' },
    { name: 'workExperience', type: 'textarea', label: 'Previous Work Experience' },
  ],
  skills: [
    { name: 'skills', type: 'textarea', label: 'Relevant Skills' },
    { name: 'desiredIndustry', type: 'text', label: 'Desired Industry' },
  ],
  availability: [
    { name: 'availableHours', type: 'text', label: 'Available Hours per Week' },
    { name: 'preferredJobType', type: 'select', label: 'Preferred Job Type', options: ['Full-time', 'Part-time', 'Internship', 'Remote'] },
    { name: 'availabilityDate', type: 'date', label: 'Available to Start Work' },
  ],
  interview: [
    { name: 'interviewType', type: 'select', label: 'Preferred Interview Type', options: ['General', 'Technical', 'Behavioral', 'Case'] },
    { name: 'preferredInterviewDate', type: 'date', label: 'Preferred Interview Date' },
  ],
  additional: [
    { name: 'additionalInfo', type: 'textarea', label: 'Additional Information or Questions' },
  ],
};

const formSections: Record<string, string[]> = {
  'interview-preparation': ['common', 'education', 'experience', 'skills', 'interview', 'additional'],
  'mock-interview': ['common', 'education', 'experience', 'skills', 'interview', 'additional'],
  'full-time-jobs': ['common', 'education', 'experience', 'skills', 'availability', 'additional'],
  'jobs-while-studying': ['common', 'education', 'skills', 'availability', 'additional'],
  'internships': ['common', 'education', 'skills', 'availability', 'additional'],
  'career-advice': ['common', 'education', 'experience', 'skills', 'additional'],
};

export default function UnifiedRegistrationForm({ formType }: { formType: keyof typeof formSections }) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submissionStatus, setSubmissionStatus] = useState('idle');

  useEffect(() => {
    // Initialize form data with empty values
    const initialData: Record<string, string> = {};
    formSections[formType].forEach((section: string) => {
      formFields[section].forEach(field => {
        initialData[field.name] = '';
      });
    });
    setFormData(initialData);
  }, [formType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmissionStatus('success');
      // Reset form after successful submission
      setFormData({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    }
  };

  interface FormField {
    name: string;
    type: string;
    label: string;
    required?: boolean;
    options?: string[];
  }

  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'select':
        return (
          <select
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-white rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required={field.required}
          >
            <option value="">{field.label}</option>
            {field.options?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleInputChange}
            placeholder={field.label}
            className="w-full px-4 py-2 bg-white rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            rows={3}
            required={field.required}
          />
        );
      default:
        return (
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleInputChange}
            placeholder={field.label}
            className="w-full px-4 py-2 bg-white rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required={field.required}
          />
        );
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        {formType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Registration
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {formSections[formType].map(section =>
          formFields[section].map(field => (
            <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
              {renderField(field)}
            </div>
          ))
        )}
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        disabled={submissionStatus === 'submitting'}
      >
        {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit Registration'}
      </button>
      {submissionStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-4 bg-green-500 text-white rounded-md"
        >
          Thank you for your submission. We'll be in touch soon!
        </motion.div>
      )}
      {submissionStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-4 bg-red-500 text-white rounded-md"
        >
          An error occurred while submitting your form. Please try again later.
        </motion.div>
      )}
    </motion.form>
  );
}