'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, CheckCircle, Clock, Star, BookOpen, Video } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MockInterviewPage() {
  const features = [
    { icon: Users, title: "Expert Interviewers", description: "Practice with industry professionals" },
    { icon: Video, title: "Realistic Scenarios", description: "Experience true-to-life interview settings" },
    { icon: Star, title: "Personalized Feedback", description: "Receive detailed, constructive feedback" },
    { icon: Clock, title: "Flexible Scheduling", description: "Choose times that work for you" },
  ];

  const interviewTypes = [
    { title: "General Interview", description: "Broad questions covering your background and career goals" },
    { title: "Technical Interview", description: "In-depth questions related to your technical skills and problem-solving abilities" },
    { title: "Behavioral Interview", description: "Questions about past experiences and how you handled specific situations" },
    { title: "Case Interview", description: "Problem-solving scenarios to assess analytical and communication skills" },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Image src="/images/jobs-internships/mock-interview.webp" alt="Mock Interview Hub" width={1200} height={600} className="rounded-lg mx-auto" />
        </div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mock Interview Hub
        </motion.h1>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Elevate Your Interview Skills</h2>
          <p className="mb-6 text-gray-600">Experience realistic interview scenarios, receive expert feedback, and boost your confidence for real-world interviews.</p>
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Interview Types We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interviewTypes.map((type, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-800">{type.title}</h3>
                <p className="text-sm text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Practice with Mock Interviews</h2>
          <p className="mb-6 text-gray-600">Gain confidence and improve your interview skills. Register now to schedule a mock interview session.</p>
          <Link href="/register?type=mock-interview" passHref>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 font-semibold flex items-center mx-auto">
              Register for Mock Interview
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Prepare for Your Mock Interview</h2>
          <ul className="list-none space-y-2">
            {[
              'Review common interview questions for your industry',
              'Prepare your elevator pitch and key talking points',
              'Research the company and role you\'re interviewing for',
              'Practice your body language and non-verbal communication',
              'Prepare thoughtful questions to ask your interviewer',
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Not Sure Where to Start?</h2>
          <p className="mb-6 text-gray-600">Check out our comprehensive interview preparation resources to kickstart your journey.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-semibold">
            Explore Interview Resources
          </button>
        </motion.section>
      </div>
    </div>
  );
}