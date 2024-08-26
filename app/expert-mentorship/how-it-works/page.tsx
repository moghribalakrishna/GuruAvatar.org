'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Users, MessageSquare, Target, ChartBar, Award } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Find Your Mentor",
    description: "Use our AI-powered matching system to find mentors that align with your goals, interests, and learning style. Browse through profiles and select the mentor that resonates with you."
  },
  {
    icon: Users,
    title: "Initial Connection",
    description: "Once you've selected a mentor, we'll facilitate an initial meeting. This is your opportunity to discuss your goals, expectations, and establish a mentorship plan together."
  },
  {
    icon: MessageSquare,
    title: "Regular Sessions",
    description: "Engage in scheduled mentorship sessions via video calls or our integrated chat platform. These sessions are tailored to your needs and can cover various topics from skill development to career guidance."
  },
  {
    icon: Target,
    title: "Goal Setting and Tracking",
    description: "Work with your mentor to set clear, achievable goals. Our AI-enhanced platform helps track your progress and adjusts recommendations based on your advancement."
  },
  {
    icon: ChartBar,
    title: "Continuous Growth",
    description: "As you progress, your mentor will provide ongoing support, challenges, and resources to ensure continuous growth. Our AI system will also suggest additional learning materials and opportunities."
  },
  {
    icon: Award,
    title: "Milestone Celebrations",
    description: "Celebrate your achievements along the way. Your mentor will help recognize your progress, and our platform will showcase your growth through badges and skill verifications."
  }
];

export default function HowMentorshipWorksPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl font-bold mb-6 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How Our Mentorship Program Works
        </motion.h1>
        <motion.p
          className="text-xl mb-12 text-center max-w-4xl mx-auto text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the journey of growth and learning through our innovative mentorship process.
        </motion.p>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center bg-gray-50 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                <div className="bg-orange-100 rounded-full p-4">
                  <step.icon className="w-12 h-12 text-orange-500" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{step.title}</h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.section
          className="mt-16 bg-gray-50 p-8 rounded-xl shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">The GuruAvatar Mentorship Difference</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Users className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-1" />
              <span className="text-gray-600">Personalized matching using advanced AI algorithms</span>
            </li>
            <li className="flex items-start">
              <MessageSquare className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-1" />
              <span className="text-gray-600">Integrated communication tools for seamless mentor-mentee interaction</span>
            </li>
            <li className="flex items-start">
              <Target className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-1" />
              <span className="text-gray-600">AI-enhanced goal setting and progress tracking</span>
            </li>
            <li className="flex items-start">
              <ChartBar className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-1" />
              <span className="text-gray-600">Data-driven insights to optimize your learning journey</span>
            </li>
          </ul>
        </motion.section>
        <motion.section
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Ready to Start Your Mentorship Journey?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Take the first step towards accelerated growth and personalized guidance.
          </p>
          <a
            href="/expert-mentorship/find-mentor"
            className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block"
          >
            Find Your Mentor Now
          </a>
        </motion.section>
      </div>
    </div>
  );
}