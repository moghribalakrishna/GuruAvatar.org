'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    title: "Create Your Account",
    description: "Sign up for free and create your personalized GuruAvatar profile.",
    icon: Lucide.UserPlus,
    action: "Sign Up Now",
    link: "/signup"
  },
  {
    title: "Take the Assessment",
    description: "Complete our AI-powered assessment to determine your learning style and goals.",
    icon: Lucide.ClipboardList,
    action: "Start Assessment",
    link: "#"
  },
  {
    title: "Explore Courses",
    description: "Browse our catalog of AI-enhanced courses tailored to your needs.",
    icon: Lucide.BookOpen,
    action: "View Courses",
    link: "/programs-and-courses"
  },
  {
    title: "Connect with Mentors",
    description: "Get matched with expert mentors who can guide your learning journey.",
    icon: Lucide.Users,
    action: "Find a Mentor",
    link: "#"
  },
  {
    title: "Set Your Goals",
    description: "Define your learning objectives and create a personalized study plan.",
    icon: Lucide.Target,
    action: "Set Goals",
    link: "#"
  },
  {
    title: "Start Learning",
    description: "Dive into your first course and begin your transformative educational journey.",
    icon: Lucide.PlayCircle,
    action: "Begin Learning",
    link: "#"
  }
];

export default function GetStartedPage() {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get Started with GuruAvatar
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Embark on your journey of AI-powered, personalized learning. Follow these simple steps to begin your transformative educational experience with GuruAvatar.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 rounded-full p-2 mr-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold">Step {index + 1}</h2>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 mb-4">{step.description}</p>
              {step.link === "#" ? (
                <button 
                  onClick={() => alert("This feature is coming soon!")}
                  className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
                >
                  {step.action} <Lucide.ArrowRight className="ml-2" />
                </button>
              ) : (
                <Link 
                  href={step.link}
                  className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
                >
                  {step.action} <Lucide.ArrowRight className="ml-2" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <motion.section 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl mb-8">
            Join thousands of learners who are already benefiting from GuruAvatar's innovative approach to education.
          </p>
          <Link 
            href="/signup" 
            className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 inline-flex items-center"
          >
            <Lucide.UserPlus className="mr-2" />
            Create Your Free Account
          </Link>
        </motion.section>

        <motion.section 
          className="mt-16 bg-white bg-opacity-10 p-8 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Need Help Getting Started?</h2>
          <p className="text-xl mb-8 text-center">
            Our support team is here to assist you every step of the way. Don't hesitate to reach out if you have any questions.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/faq" 
              className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 inline-flex items-center"
            >
              <Lucide.HelpCircle className="mr-2" />
              FAQs
            </Link>
            <Link 
              href="/contact" 
              className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300 inline-flex items-center"
            >
              <Lucide.MessageCircle className="mr-2" />
              Contact Support
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}