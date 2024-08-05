'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const habits = [
  { id: "goal-setting", title: "Goal Setting", video: "/videos/goal-setting.mp4" },
  { id: "mindfulness", title: "Mindfulness", video: "/videos/mindfulness.mp4" },
  { id: "time-management", title: "Time Management", video: "/videos/time-management.mp4" },
  { id: "journaling-reading", title: "Journaling & Reading", video: "/videos/journaling-reading.mp4" },
  { id: "health", title: "Health", video: "/videos/health.mp4" },
  { id: "communication", title: "Communication", video: "/videos/communication.mp4" },
  { id: "teamwork", title: "Teamwork", video: "/videos/teamwork.mp4" },
  { id: "critical-thinking", title: "Critical Thinking", video: "/videos/critical-thinking.mp4" },
  { id: "mentorship", title: "Mentorship", video: "/videos/mentorship.mp4" },
  { id: "financial-literacy", title: "Financial Literacy", video: "/videos/financial-literacy.mp4" }
];

const HabitCard = ({ habit }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Auto-play was prevented:", error);
      });
    }
  }, []);

  return (
    <Link href={`/habit-forging/${habit.id}`} passHref>
      <motion.div
        className="bg-white bg-opacity-10 rounded-lg cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg overflow-hidden relative"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <video 
          ref={videoRef}
          src={habit.video} 
          className="w-full h-40 object-cover"
          loop
          muted
          playsInline
        />
        <div className="p-4 flex justify-between items-center">
          <span className="text-lg font-semibold">{habit.title}</span>
          <ChevronRight size={20} />
        </div>
      </motion.div>
    </Link>
  );
};

const HabitForge = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="mb-12 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto"
        >
          <source src="/videos/habit-forge-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/get-started" passHref>
          <motion.button
            className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 flex items-center justify-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey <ChevronRight className="ml-2" />
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default HabitForge;