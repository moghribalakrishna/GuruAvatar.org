// File: app/expert-mentorship/find-mentor/page.tsx

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Filter } from 'lucide-react';
import { mentors, mentorshipAreas } from '../../data/mentorshipData';

export default function FindMentorPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('All');

  const filteredMentors = mentors.filter(mentor => 
    (mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     mentor.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()))) &&
    (selectedArea === 'All' || mentor.areas.includes(selectedArea))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Find Your Perfect Mentor
        </motion.h1>
        <motion.p 
          className="text-xl mb-12 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Browse our diverse pool of expert mentors and find the right match for your goals and aspirations.
        </motion.p>

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

        {filteredMentors.length === 0 && (
          <p className="text-center text-xl mt-12">No mentors found matching your criteria. Please try adjusting your search.</p>
        )}
      </div>
    </div>
  );
}