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
      className="bg-gray-100 p-6 rounded-xl shadow-md"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      {React.createElement(feature.icon, { className: "w-12 h-12 text-blue-600 mb-4" })}
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

export default AIFeatureCard;