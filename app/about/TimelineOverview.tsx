import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Users, Award, Zap, Target } from 'lucide-react';

const timelineData = [
  { year: 2012, title: 'Singapore Epiphany', icon: Lightbulb, color: 'text-yellow-300' },
  { year: 2013, title: 'Leap of Faith', icon: Rocket, color: 'text-red-300' },
  { year: 2014, title: 'GuruAvatar Conception', icon: Users, color: 'text-blue-300' },
  { year: 2016, title: 'AlienHu Chapter', icon: Award, color: 'text-green-300' },
  { year: 2023, title: 'GuruAvatar Reborn', icon: Zap, color: 'text-purple-300' },
  { year: 2024, title: 'Future Vision', icon: Target, color: 'text-orange-300' },
];

const Timeline = ({ currentPhase }) => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 backdrop-blur-md p-6 rounded-r-lg shadow-lg">
      {timelineData.map((item, index) => (
        <motion.div
          key={item.year}
          className={`flex items-center mb-6 ${
            currentPhase === item.title ? 'opacity-100' : 'opacity-60'
          }`}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className={`bg-opacity-20 bg-white p-2 rounded-full mr-3 ${currentPhase === item.title ? 'ring-2 ring-white' : ''}`}>
            <item.icon className={`${item.color}`} size={24} />
          </div>
          <div>
            <p className={`text-sm font-bold ${currentPhase === item.title ? 'text-white' : 'text-gray-300'}`}>{item.year}</p>
            <p className={`text-xs ${currentPhase === item.title ? 'text-white' : 'text-gray-400'}`}>{item.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;