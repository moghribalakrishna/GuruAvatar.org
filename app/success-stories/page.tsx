'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Story {
  name: string;
  location: string;
  image: string;
  story: string;
  achievement: string;
}

const successStories = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    image: "/priya-sharma.jpg",
    story: "GuruAvatar's AI-powered learning helped me improve my math scores by 40%. I went from struggling with basic concepts to excelling in advanced calculus. Now, I'm confidently pursuing my dream of becoming an engineer.",
    achievement: "Secured admission to IIT Bombay"
  },
  {
    name: "Alex Chen",
    location: "Singapore",
    image: "/alex-chen.jpg",
    story: "The mindfulness techniques I learned through GuruAvatar transformed my approach to studying. I used to struggle with exam anxiety, but now I can stay calm and focused. My grades have improved across all subjects.",
    achievement: "Achieved top scores in A-levels"
  },
  {
    name: "Kwame Osei",
    location: "Accra, Ghana",
    image: "/kwame-osei.jpg",
    story: "GuruAvatar's mentorship program connected me with a tech entrepreneur who guided me in developing my own educational app. This experience has been invaluable in shaping my career aspirations.",
    achievement: "Launched a successful EdTech startup"
  },
  {
    name: "Sofia Rodriguez",
    location: "Mexico City, Mexico",
    image: "/sofia-rodriguez.jpg",
    story: "As a working mother, I thought going back to school was impossible. GuruAvatar's flexible learning approach and habit-building techniques allowed me to balance my studies with my family responsibilities.",
    achievement: "Completed a degree in Business Administration"
  }
];

const SuccessStoryCard = ({ story }: { story: Story }) => (
  <motion.div 
    className="bg-white bg-opacity-10 rounded-xl p-6 flex flex-col h-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <Image 
        src={story.image} 
        alt={story.name} 
        width={80} 
        height={80} 
        className="rounded-full mr-4"
      />
      <div>
        <h3 className="text-xl font-semibold">{story.name}</h3>
        <p className="text-sm text-gray-300">{story.location}</p>
      </div>
    </div>
    <p className="text-gray-200 mb-4 flex-grow">{story.story}</p>
    <div className="bg-orange-500 bg-opacity-20 rounded-lg p-4 mt-4">
      <div className="flex items-center">
        <Star className="text-yellow-400 mr-2" />
        <span className="font-semibold">Key Achievement:</span>
      </div>
      <p className="mt-2">{story.achievement}</p>
    </div>
  </motion.div>
);

export default function SuccessStoriesPage() {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Success Stories
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover how GuruAvatar has transformed the lives of students worldwide, empowering them to achieve their dreams through innovative, AI-driven education.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <SuccessStoryCard key={index} story={story} />
          ))}
        </div>

        <motion.section 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8">
            Join GuruAvatar today and embark on your journey to academic and personal growth.
          </p>
          <a 
            href="/get-started" 
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 inline-block"
          >
            Start Your Journey
          </a>
        </motion.section>
      </div>
    </div>
  );
}