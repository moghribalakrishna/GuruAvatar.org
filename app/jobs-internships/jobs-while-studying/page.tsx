'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Briefcase, Zap, Search, Filter } from 'lucide-react';
import Image from 'next/image';

export default function JobsWhileStudyingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    courseOfStudy: '',
    availableHours: '',
    preferredJobType: '',
    relevantSkills: '',
    workExperience: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Jobs While Studying Application:', formData);
      setSubmissionStatus('success');
      setFormData({
        name: '',
        email: '',
        institution: '',
        courseOfStudy: '',
        availableHours: '',
        preferredJobType: '',
        relevantSkills: '',
        workExperience: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    }
  };

  const featuredJobs = [
    { title: "Campus Ambassador", company: "TechStart", type: "Part-time" },
    { title: "Research Assistant", company: "BioLab", type: "Flexible" },
    { title: "Social Media Intern", company: "CreativeMinds", type: "Remote" },
    { title: "Junior Web Developer", company: "WebSolutions", type: "Part-time" },
    { title: "Library Assistant", company: "University Library", type: "On-campus" },
    { title: "Marketing Intern", company: "StartupX", type: "Remote" },
  ];

  const filteredJobs = featuredJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedJobType === '' || job.type === selectedJobType)
  );

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Image 
            src="/images/jobs-internships/part-time-jobs.webp" 
            alt="Jobs While Studying" 
            width={1200} 
            height={600} 
            className="rounded-lg mx-auto"
          />
        </div>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Jobs While Studying
        </motion.h1>
        
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Balance Work and Studies with GuruAvatar</h2>
          <p className="mb-6 text-gray-600">Gain valuable work experience while pursuing your education. GuruAvatar helps you find flexible job opportunities that complement your studies and boost your career prospects.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "Flexible Schedules", description: "Find jobs that fit around your class timetable" },
              { icon: BookOpen, title: "Study-Relevant Opportunities", description: "Discover roles that align with your field of study" },
              { icon: Briefcase, title: "Part-Time and Casual Work", description: "Access a variety of job types to suit your needs" },
              { icon: Zap, title: "Skill Development", description: "Enhance your employability with real-world experience" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Featured Job Listings</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 pl-10"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            <select
              value={selectedJobType}
              onChange={(e) => setSelectedJobType(e.target.value)}
              className="px-4 py-2 bg-gray-100 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">All Job Types</option>
              <option value="Part-time">Part-time</option>
              <option value="Flexible">Flexible</option>
              <option value="Remote">Remote</option>
              <option value="On-campus">On-campus</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-semibold mb-1 text-gray-800">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.company}</p>
                <p className="text-sm text-blue-600 mb-2">{job.type}</p>
                <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition duration-300">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Submit Your Job Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="text"
              name="institution"
              placeholder="Educational Institution"
              value={formData.institution}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              name="courseOfStudy"
              placeholder="Course of Study"
              value={formData.courseOfStudy}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              name="availableHours"
              placeholder="Available Hours per Week"
              value={formData.availableHours}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <select
              name="preferredJobType"
              value={formData.preferredJobType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Preferred Job Type</option>
              <option value="part-time">Part-Time</option>
              <option value="casual">Casual</option>
              <option value="freelance">Freelance</option>
              <option value="remote">Remote</option>
            </select>
            <textarea
              name="relevantSkills"
              placeholder="Relevant Skills"
              value={formData.relevantSkills}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={3}
            />
            <textarea
              name="workExperience"
              placeholder="Previous Work Experience (if any)"
              value={formData.workExperience}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit Job Preferences
          </button>
        </motion.form>

        {submissionStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 p-4 bg-green-500 text-white rounded-md"
          >
            Thank you for submitting your job preferences. We'll be in touch soon!
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
      </div>
    </div>
  );
}