'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Globe, Code, Camera, ChartBar, Heart } from 'lucide-react';

const volunteerOpportunities = [
  { 
    icon: BookOpen, 
    title: "Mentorship", 
    description: "Guide and inspire students in their learning journey. Share your expertise and experiences." 
  },
  { 
    icon: Code, 
    title: "Technical Support", 
    description: "Help develop and maintain our AI-powered learning platform. Contribute to cutting-edge EdTech." 
  },
  { 
    icon: Globe, 
    title: "Content Creation", 
    description: "Create engaging educational content across various subjects and formats." 
  },
  { 
    icon: Camera, 
    title: "Digital Media", 
    description: "Assist with photography, videography, and graphic design for our educational materials." 
  },
  { 
    icon: ChartBar, 
    title: "Data Analysis", 
    description: "Help analyze learning data to improve our AI algorithms and educational outcomes." 
  },
  { 
    icon: Users, 
    title: "Community Outreach", 
    description: "Spread awareness about GuruAvatar and help organize educational events." 
  },
];

export default function VolunteerPage() {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Volunteer with GuruAvatar
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join our mission to revolutionize education. Your skills and passion can make a real difference in shaping the future of learning for students worldwide.
        </motion.p>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <opportunity.icon className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                <p className="text-gray-300">{opportunity.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Volunteer with Us?</h2>
          <div className="bg-white bg-opacity-10 p-8 rounded-xl">
            <ul className="space-y-4">
              <li className="flex items-start">
                <Heart className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-1" />
                <span>Make a meaningful impact on students' lives across the globe</span>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-1" />
                <span>Join a community of passionate educators and innovators</span>
              </li>
              <li className="flex items-start">
                <BookOpen className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-1" />
                <span>Gain experience in cutting-edge educational technology</span>
              </li>
              <li className="flex items-start">
                <Globe className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-1" />
                <span>Contribute to the democratization of quality education</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Volunteer Journey</h2>
          <div className="space-y-6">
            {[
              { number: "1", title: "Application", description: "Fill out our volunteer application form, telling us about your skills and interests." },
              { number: "2", title: "Interview", description: "Have a brief chat with our volunteer coordinator to find the best fit for your skills." },
              { number: "3", title: "Onboarding", description: "Complete our volunteer orientation to learn about GuruAvatar's mission and processes." },
              { number: "4", title: "Contribution", description: "Start making an impact! We'll provide ongoing support throughout your volunteer journey." },
              { number: "5", title: "Recognition", description: "Your efforts will be acknowledged and celebrated within our community." }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">
            Join our team of dedicated volunteers and help shape the future of education. Every contribution, big or small, brings us closer to our goal of accessible, quality education for all.
          </p>
          <a 
            href="/volunteer-application" 
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 inline-flex items-center"
          >
            <Users className="mr-2" />
            Apply to Volunteer
          </a>
        </motion.section>
      </div>
    </div>
  );
}