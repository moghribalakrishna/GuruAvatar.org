import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Users, Award, Zap, Target } from 'lucide-react';

const timelineData = [
  { year: 2012, title: 'Singapore Epiphany', icon: Lightbulb, color: 'text-yellow-400' },
  { year: 2013, title: 'Leap of Faith', icon: Rocket, color: 'text-red-400' },
  { year: 2014, title: 'GuruAvatar Conception', icon: Users, color: 'text-blue-400' },
  { year: 2016, title: 'AlienHu Chapter', icon: Award, color: 'text-green-400' },
  { year: 2023, title: 'GuruAvatar Reborn', icon: Zap, color: 'text-purple-400' },
  { year: 2024, title: 'Future Vision', icon: Target, color: 'text-orange-400' },
];

const Timeline = ({ currentPhase }) => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-r-lg shadow-lg">
      {timelineData.map((item, index) => (
        <motion.div
          key={item.year}
          className={`flex items-center mb-4 ${
            currentPhase === item.title ? 'opacity-100' : 'opacity-50'
          }`}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <item.icon className={`${item.color} mr-2`} size={24} />
          <div>
            <p className="text-sm font-bold">{item.year}</p>
            <p className="text-xs">{item.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;