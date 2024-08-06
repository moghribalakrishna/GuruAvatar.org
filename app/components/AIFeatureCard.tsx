import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AIFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AIFeatureCardProps {
  feature: AIFeature;
}

const AIFeatureCard: React.FC<AIFeatureCardProps> = ({ feature }) => {
  return (
    <motion.div 
      className="bg-white bg-opacity-10 p-6 rounded-xl"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {React.createElement(feature.icon, { className: "w-12 h-12 text-teal-300 mb-4" })}
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-blue-100">{feature.description}</p>
    </motion.div>
  );
};

export default AIFeatureCard;