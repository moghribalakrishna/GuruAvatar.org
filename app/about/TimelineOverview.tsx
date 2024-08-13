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
    <div className="fixed left-0 bottom-0 w-full md:top-1/2 md:-translate-y-1/2 md:w-auto bg-gray-800 bg-opacity-90 backdrop-blur-md p-4 md:p-6 md:rounded-r-lg shadow-lg z-20">
      <div className="flex md:flex-col justify-between md:justify-start overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            className={`flex flex-col items-center mx-2 md:mx-0 md:flex-row md:mb-6 ${
              currentPhase === item.title ? 'opacity-100' : 'opacity-60'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={`bg-opacity-20 bg-white p-2 rounded-full mb-1 md:mb-0 md:mr-3 ${currentPhase === item.title ? 'ring-2 ring-white' : ''}`}>
              <item.icon className={`${item.color}`} size={24} />
            </div>
            <div className="text-center md:text-left">
              <p className={`text-xs md:text-sm font-bold ${currentPhase === item.title ? 'text-white' : 'text-gray-300'}`}>{item.year}</p>
              <p className={`text-xs ${currentPhase === item.title ? 'text-white' : 'text-gray-400'} hidden md:block`}>{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;