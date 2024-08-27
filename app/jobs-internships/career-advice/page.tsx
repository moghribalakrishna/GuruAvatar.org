'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, Users, MessageCircle, Briefcase, TrendingUp, Calendar, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CareerAdvicePage() {
  const careerServices = [
    { icon: Compass, title: "Career Path Guidance", description: "Explore potential career trajectories and make informed decisions" },
    { icon: BookOpen, title: "Skill Development Resources", description: "Access curated learning materials to enhance your professional skills" },
    { icon: Users, title: "Mentorship Opportunities", description: "Connect with experienced professionals for personalized guidance" },
    { icon: MessageCircle, title: "Q&A Forums", description: "Engage with peers and experts to get answers to your career questions" },
    { icon: Briefcase, title: "Job Search Support", description: "Get assistance with your job search strategy and application process" },
    { icon: TrendingUp, title: "Career Advancement Planning", description: "Develop strategies for progressing in your chosen career path" },
  ];

  const careerResources = [
    { icon: BookOpen, title: "Resume Writing Guide", description: "Learn how to craft a standout resume that gets noticed by employers." },
    { icon: Users, title: "Interview Preparation Toolkit", description: "Comprehensive resources to help you ace your job interviews." },
    { icon: Compass, title: "Networking Strategies", description: "Effective techniques for building and leveraging professional networks." },
    { icon: TrendingUp, title: "Career Path Exploration", description: "Tools and insights to help you map out potential career trajectories." },
  ];

  const upcomingWorkshops = [
    { title: "Mastering the Art of Networking", date: "May 15, 2024", time: "2:00 PM - 3:30 PM" },
    { title: "Tech Industry Trends and Opportunities", date: "May 22, 2024", time: "1:00 PM - 2:30 PM" },
    { title: "Effective Job Search Strategies", date: "June 5, 2024", time: "3:00 PM - 4:30 PM" },
    { title: "Building Your Personal Brand", date: "June 12, 2024", time: "2:00 PM - 3:30 PM" },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Image src="/images/jobs-internships/career-advice.webp" alt="Career Connect Advice Hub" width={1200} height={600} className="rounded-lg mx-auto" />
        </div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Career Connect Advice Hub
        </motion.h1>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Navigate Your Career Journey with Expert Guidance</h2>
          <p className="mb-6 text-gray-600">Access personalized career advice, industry insights, and professional development resources to help you make informed decisions and advance your career.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-3 bg-gray-100 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <service.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-800">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Career Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {careerResources.map((resource, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-100 p-4 rounded-lg flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <resource.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get Personalized Career Advice</h2>
          <p className="mb-6 text-gray-600">Take the first step towards your dream career. Register now to receive tailored guidance from our experts.</p>
          <Link href="/jobs-internships/register?type=career-advice" passHref>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 font-semibold flex items-center mx-auto">
              Register for Career Advice
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </Link>
        </motion.section>

        <motion.section 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Upcoming Career Workshops</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {upcomingWorkshops.map((workshop, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-100 p-4 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-semibold mb-2 text-gray-800">{workshop.title}</h3>
                <p className="text-sm text-gray-600">{workshop.date} | {workshop.time}</p>
                <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition duration-300">
                  Register
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Start Your Career Journey Today</h2>
          <p className="mb-6 text-gray-600">Take the first step towards a fulfilling career with our expert guidance and resources.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-semibold flex items-center mx-auto">
            Explore Career Resources
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </motion.section>
      </div>
    </div>
  );
}