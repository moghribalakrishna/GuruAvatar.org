import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const habits = [
  { id: "goal-setting", title: "Goal Setting", icon: "🎯" },
  { id: "mindfulness", title: "Mindfulness", icon: "🧘" },
  { id: "time-management", title: "Time Management", icon: "⏰" },
  { id: "journaling-reading", title: "Journaling & Reading", icon: "📚" },
  { id: "health", title: "Health", icon: "🧠" },
  { id: "communication", title: "Communication", icon: "💬" },
  { id: "teamwork", title: "Teamwork", icon: "🤝" },
  { id: "critical-thinking", title: "Critical Thinking", icon: "🧐" },
  { id: "mentorship", title: "Mentorship", icon: "🏆" },
  { id: "financial-literacy", title: "Financial Literacy", icon: "💰" }
];

const HabitCard = ({ habit }) => (
  <Link href={`/habit-forging/${habit.id}`}>
    <motion.div
      className="bg-white bg-opacity-10 p-4 rounded-lg cursor-pointer transition-all duration-300 flex items-center space-x-3 hover:bg-opacity-20 hover:shadow-lg"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-2xl">{habit.icon}</span>
      <span className="text-lg font-semibold">{habit.title}</span>
      <ChevronRight className="ml-auto" size={20} />
    </motion.div>
  </Link>
);

const HabitForge = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8 rounded-lg overflow-hidden max-w-2xl mx-auto">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto"
        >
          <source src="/habit-forging-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/habit-forging/start">
          <motion.button
            className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 flex items-center justify-center mx-auto"
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