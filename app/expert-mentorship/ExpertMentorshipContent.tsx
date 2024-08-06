'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { mentors, mentorshipAreas, testimonials } from '../data/mentorshipData';
import { Search, Filter } from 'lucide-react';

export default function ExpertMentorshipContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('All');

  const filteredMentors = mentors.filter(mentor => 
    (mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     mentor.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()))) &&
    (selectedArea === 'All' || mentor.areas.includes(selectedArea))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white overflow-hidden relative p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-yellow-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Expert Mentorship
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-center max-w-4xl mx-auto text-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Connect with industry leaders and experienced professionals. 
          Gain invaluable insights and guidance tailored to your learning journey.
        </motion.p>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search mentors or expertise..."
                className="w-full p-3 pl-10 rounded bg-white bg-opacity-20 text-white placeholder-blue-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
            </div>
            <div className="relative w-full md:w-1/3">
              <select
                className="w-full p-3 pl-10 rounded bg-white bg-opacity-20 text-white appearance-none"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
              >
                <option value="All">All Areas</option>
                {mentorshipAreas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMentors.map((mentor, index) => (
              <Link href={`/expert-mentorship/${mentor.id}`} key={index}>
                <motion.div
                  className="bg-white bg-opacity-10 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg overflow-hidden relative"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Image 
                    src={mentor.image} 
                    alt={mentor.name} 
                    width={100} 
                    height={100} 
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-center">{mentor.name}</h3>
                  <p className="text-blue-200 text-center mb-4">{mentor.title}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {mentor.expertise.slice(0, 3).map((exp, i) => (
                      <span key={i} className="bg-blue-500 bg-opacity-30 px-2 py-1 rounded text-sm">
                        {exp}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Expert Mentorship?</h2>
          <div className="bg-white bg-opacity-10 p-8 rounded-xl">
            <ul className="list-disc list-inside space-y-4">
              <li>Gain real-world insights from industry professionals</li>
              <li>Receive personalized guidance tailored to your goals</li>
              <li>Build valuable connections in your field of interest</li>
              <li>Accelerate your learning and career growth</li>
              <li>Access exclusive resources and opportunities</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-blue-300">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Ready to Connect with Expert Mentors?</h2>
          <p className="text-xl mb-8">
            Start your journey towards success with personalized guidance from industry leaders.
          </p>
          <Link href="/get-started" className="bg-yellow-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-600 transition duration-300 inline-block">
            Find Your Mentor
          </Link>
        </motion.section>
      </div>
    </div>
  );
}