'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Globe, Star, Book, MessageSquare, Users } from 'lucide-react';
import { mentors } from '../../data/mentorshipData';

export default function MentorProfilePage() {
  const { mentorId } = useParams();
  const mentor = mentors.find(m => m.id === mentorId);
  const [showContactForm, setShowContactForm] = useState(false);

  if (!mentor) {
    return <div>Mentor not found</div>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-100 rounded-xl p-8 mb-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
            <Image src={mentor.image} alt={mentor.name} width={200} height={200} className="rounded-full mb-4 md:mb-0 md:mr-8" />
            <div>
              <motion.h1 className="text-4xl font-bold mb-2 text-gray-800" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                {mentor.name}
              </motion.h1>
              <p className="text-xl text-gray-600 mb-4">{mentor.title}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.expertise.map((exp, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {exp}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="mr-2" size={18} />
                Available: {mentor.availableTimes.join(', ')}
              </div>
              <div className="flex items-center text-gray-600">
                <Globe className="mr-2" size={18} />
                Languages: {mentor.languages.join(', ')}
              </div>
            </div>
          </div>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">About {mentor.name}</h2>
            <p className="text-gray-600">{mentor.bio}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Achievements</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {mentor.achievements.map((achievement, index) => (
                <motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}>
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Mentoring Approach</h2>
            <p className="text-gray-600">{mentor.approach}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Areas of Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {mentor.areas.map((area, index) => (
                <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                  <Star className="mr-2 text-yellow-500" size={18} />
                  <span className="text-blue-800">{area}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Mentorship Style</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center bg-teal-50 p-4 rounded-lg">
                <Book className="mr-3 text-teal-500" size={24} />
                <div>
                  <h3 className="font-semibold text-teal-800">Structured Learning</h3>
                  <p className="text-sm text-teal-600">Guided curriculum and milestone-based progress</p>
                </div>
              </div>
              <div className="flex items-center bg-purple-50 p-4 rounded-lg">
                <MessageSquare className="mr-3 text-purple-500" size={24} />
                <div>
                  <h3 className="font-semibold text-purple-800">Open Discussions</h3>
                  <p className="text-sm text-purple-600">Engaging dialogues and thought-provoking questions</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Ready to Start Your Mentorship Journey?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Connect with {mentor.name} and take the next step in your career.
          </p>
          <button
            onClick={() => setShowContactForm(true)}
            className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-flex items-center"
          >
            <Users className="mr-2" /> Request Mentorship
          </button>
        </motion.div>
        {showContactForm && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div className="bg-white text-gray-800 p-8 rounded-lg max-w-md w-full" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <h3 className="text-2xl font-semibold mb-4">Contact {mentor.name}</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
                </div>
                <div className="flex justify-end space-x-2">
                  <button type="button" onClick={() => setShowContactForm(false)} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Send Request
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}