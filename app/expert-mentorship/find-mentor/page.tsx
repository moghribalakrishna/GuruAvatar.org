'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Filter, Star, Book, Clock, Users, ChevronDown } from 'lucide-react';
import { mentors, mentorshipAreas } from '../../data/mentorshipData';

interface Mentor {
  id: string;
  name: string;
  title: string;
  image: string;
  expertise: string[];
  areas: string[];
  bio: string;
  achievements: string[];
  approach: string;
  availableTimes: string[];
  languages: string[];
  rating: number;
  studentsHelped: number;
  yearsExperience: number;
}
export default function EnhancedFindMentorPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('All');
  const [filteredMentors, setFilteredMentors] = useState<Mentor[]>(mentors);

  useEffect(() => {
    const filtered = mentors.filter(mentor => 
      (mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       mentor.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()))) &&
      (selectedArea === 'All' || mentor.expertise.includes(selectedArea))
    );
    setFilteredMentors(filtered);
  }, [searchTerm, selectedArea]);

  const MentorCard = ({ mentor }: { mentor: Mentor }) => (
    <motion.div
      className="bg-white bg-opacity-10 rounded-lg p-6 transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center mb-4">
        <Image 
          src={mentor.image} 
          alt={mentor.name} 
          width={80} 
          height={80} 
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold">{mentor.name}</h3>
          <p className="text-blue-300">{mentor.title}</p>
        </div>
      </div>
      <div className="mb-4">
        {mentor.expertise.slice(0, 3).map((exp, index) => (
          <span key={index} className="inline-block bg-blue-500 bg-opacity-20 text-blue-100 rounded-full px-3 py-1 text-sm mr-2 mb-2">
            {exp}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Star className="text-yellow-400 mr-1" size={16} />
          <span>{mentor.rating}</span>
        </div>
        <div className="flex items-center">
          <Users className="text-blue-300 mr-1" size={16} />
          <span>{mentor.studentsHelped} students</span>
        </div>
        <div className="flex items-center">
          <Clock className="text-blue-300 mr-1" size={16} />
          <span>{mentor.yearsExperience} years</span>
        </div>
      </div>
      <Link href={`/expert-mentorship/${mentor.id}`}>
        <button className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition duration-300">
          View Profile
        </button>
      </Link>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Find Your Perfect Mentor
        </motion.h1>
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Connect with industry experts who can guide you on your learning journey and help you achieve your goals.
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
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <p className="text-center text-xl mt-12">No mentors found matching your criteria. Please try adjusting your search.</p>
        )}

        <motion.section 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Become a Mentor</h2>
          <p className="text-xl mb-8">
            Share your expertise and make a lasting impact on the next generation of learners.
          </p>
          <Link href="/expert-mentorship/become-mentor" className="bg-green-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-green-600 transition duration-300 inline-flex items-center">
            <Users className="mr-2" />
            Apply to Be a Mentor
          </Link>
        </motion.section>
      </div>
    </div>
  );
}