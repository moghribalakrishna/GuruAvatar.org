'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Book, CheckCircle, Users, Lightbulb, Video, FileText, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function InterviewPreparationPage() {
  const features = [
    { icon: Book, title: "Comprehensive Resources", description: "Access a vast library of interview questions and best practices" },
    { icon: Users, title: "Expert Guidance", description: "Learn from industry professionals and seasoned interviewers" },
    { icon: Video, title: "Mock Interview Sessions", description: "Practice with realistic video interview simulations" },
    { icon: Lightbulb, title: "Personalized Strategies", description: "Receive tailored advice based on your background and goals" },
  ];

  const preparationSteps = [
    "Research the company and role thoroughly",
    "Practice common interview questions",
    "Prepare your own questions for the interviewer",
    "Review your resume and be ready to discuss it",
    "Prepare examples of your achievements and skills",
    "Practice your body language and communication skills",
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-12">
          <Image src="/images/jobs-internships/interview-prep.webp" alt="Interview Preparation Hub" width={1200} height={600} className="rounded-lg mx-auto" />
        </div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Interview Preparation Hub
        </motion.h1>

        <motion.p 
          className="text-lg sm:text-xl mb-12 text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Interview Preparation Hub equips you with the tools, knowledge, and confidence to excel in any interview.
        </motion.p>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ace Your Interviews with GuruAvatar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 bg-gray-100 p-4 rounded-lg">
                <feature.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Preparation Checklist</h2>
          <div className="bg-gray-100 p-6 rounded-xl">
            <ul className="space-y-2">
              {preparationSteps.map((step, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span className="text-gray-800">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Prepare for Your Interviews</h2>
          <p className="mb-6 text-gray-600">Get personalized interview preparation assistance. Register now to start your journey to interview success.</p>
          <Link href="/jobs-internships/register?type=interview-preparation" passHref>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 font-semibold flex items-center mx-auto">
              Register for Interview Preparation
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">What You'll Get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: FileText, title: "Customized Study Plan", description: "Tailored to your industry and role" },
              { icon: Video, title: "Mock Interview Sessions", description: "Practice with AI-powered simulations" },
              { icon: Users, title: "Expert Feedback", description: "Get insights from industry professionals" },
              { icon: Star, title: "Performance Analytics", description: "Track your progress and improvement" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg flex items-start space-x-3">
                <item.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ready to Take Your Interview Skills to the Next Level?</h2>
          <p className="mb-6 text-gray-600">Explore our comprehensive resources and start your journey to interview success today.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-semibold flex items-center mx-auto">
            Explore Resources
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </motion.section>
      </div>
    </div>
  );
}