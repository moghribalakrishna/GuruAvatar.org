'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Award, TrendingUp, Briefcase, Calendar, Star, ArrowRight, CheckCircle } from 'lucide-react';

export default function InternshipsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    major: '',
    graduationYear: '',
    desiredIndustry: '',
    skills: '',
    availability: '',
    projectIdeas: '',
    resumeLink: '',
    linkedinProfile: '',
    preferredLocation: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Internship Application:', formData);
    // Here you would send the form data to your backend
  };

  const internshipBenefits = [
    { icon: Lightbulb, title: "Hands-on Experience", description: "Work on real projects and gain practical skills" },
    { icon: Users, title: "Networking Opportunities", description: "Connect with industry professionals and potential mentors" },
    { icon: Award, title: "Career Advancement", description: "Enhance your resume and improve job prospects" },
    { icon: TrendingUp, title: "Skill Development", description: "Identify and develop key competencies for your chosen field" },
  ];

  const internshipTypes = [
    { title: "Summer Internships", description: "Intensive programs during the summer break" },
    { title: "Co-op Programs", description: "Alternating academic terms with work terms" },
    { title: "Remote Internships", description: "Flexible opportunities to work from anywhere" },
    { title: "Project-Based Internships", description: "Focus on specific projects or initiatives" },
  ];

  const preparationTips = [
    "Research companies and industries of interest",
    "Tailor your resume and cover letter for each application",
    "Practice interview skills and common questions",
    "Develop a portfolio showcasing relevant projects",
    "Network with alumni and professionals in your field",
    "Stay updated on industry trends and news",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Internship Opportunities
        </motion.h1>
        
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Kickstart Your Career with Meaningful Internships</h2>
          <p className="mb-6 text-lg">Gain invaluable industry experience, build your professional network, and apply your academic knowledge in real-world settings. GuruAvatar connects you with internship opportunities that align with your career goals.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internshipBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
                <benefit.icon className="w-6 h-6 text-orange-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-blue-200">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Types of Internships</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {internshipTypes.map((type, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{type.title}</h3>
                <p className="text-sm text-blue-200">{type.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Apply for Internship Matching</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="text"
              name="university"
              placeholder="University/College"
              value={formData.university}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              name="major"
              placeholder="Major/Field of Study"
              value={formData.major}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <select
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Expected Graduation Year</option>
              {[...Array(6)].map((_, i) => {
                const year = new Date().getFullYear() + i;
                return <option key={year} value={year}>{year}</option>;
              })}
            </select>
            <input
              type="text"
              name="desiredIndustry"
              placeholder="Desired Industry for Internship"
              value={formData.desiredIndustry}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              name="preferredLocation"
              placeholder="Preferred Internship Location"
              value={formData.preferredLocation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              name="resumeLink"
              placeholder="Link to Your Resume (Google Drive, Dropbox, etc.)"
              value={formData.resumeLink}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              name="linkedinProfile"
              placeholder="LinkedIn Profile URL"
              value={formData.linkedinProfile}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              name="skills"
              placeholder="Relevant Skills (e.g., Programming Languages, Tools, Soft Skills)"
              value={formData.skills}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={3}
            />
            <textarea
              name="availability"
              placeholder="Availability (e.g., Summer 2024, Fall 2024, Part-time during semester)"
              value={formData.availability}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={3}
            />
            <textarea
              name="projectIdeas"
              placeholder="Any specific project ideas or areas of interest?"
              value={formData.projectIdeas}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 md:col-span-2"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 font-semibold"
          >
            Submit Internship Application
          </button>
        </motion.form>

        <motion.section
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Prepare for Success</h2>
          <div className="bg-white bg-opacity-10 p-6 rounded-xl">
            <ul className="space-y-2">
              {preparationTips.map((tip, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Ready to Explore Internship Opportunities?</h2>
          <p className="mb-6">Browse our curated list of internships and find the perfect match for your skills and interests.</p>
          <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition duration-300 font-semibold flex items-center mx-auto">
            Browse Internships
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </motion.section>
      </div>
    </div>
  );
}