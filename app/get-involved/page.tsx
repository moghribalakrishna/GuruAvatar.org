'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Building, MessageCircle } from 'lucide-react';

const involvementOptions = [
  {
    title: "Donate",
    icon: Heart,
    description: "Support our mission financially. Every contribution, no matter how small, helps us reach more students.",
    action: "Make a Donation",
    link: "/donate"
  },
  {
    title: "Volunteer",
    icon: Users,
    description: "Share your skills and time. We need mentors, tutors, and various other volunteers to help our students.",
    action: "Become a Volunteer",
    link: "/volunteer"
  },
  {
    title: "Partner with Us",
    icon: Building,
    description: "Are you an educational institution or a company? Partner with us to expand our reach and impact.",
    action: "Explore Partnerships",
    link: "/partnerships"
  },
  {
    title: "Spread the Word",
    icon: MessageCircle,
    description: "Help us reach more people. Share our mission on social media and within your network.",
    action: "Share Our Mission",
    link: "#share"
  }
];

export default function GetInvolvedPage() {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get Involved with GuruAvatar
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your support can make a significant difference in revolutionizing education. Join us in our mission to empower learners worldwide through AI-driven, holistic education.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {involvementOptions.map((option, index) => (
            <motion.div 
              key={option.title}
              className="bg-white bg-opacity-10 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <option.icon className="w-16 h-16 text-orange-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">{option.title}</h2>
              <p className="text-lg mb-6">{option.description}</p>
              <a 
                href={option.link} 
                className="bg-orange-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 inline-block"
              >
                {option.action}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.section 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Have Questions?</h2>
          <p className="text-xl mb-8">
            We're here to help. If you have any questions about getting involved or supporting GuruAvatar, please don't hesitate to reach out.
          </p>
          <a 
            href="/forms/contact" 
            className="bg-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300 inline-block"
          >
            Contact Us
          </a>
        </motion.section>
      </div>
    </div>
  );
}