import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Headphones, FileText } from 'lucide-react';

const resourceTypes = [
  { icon: BookOpen, name: 'eBooks', count: 500 },
  { icon: Video, name: 'Video Tutorials', count: 1000 },
  { icon: Headphones, name: 'Podcasts', count: 250 },
  { icon: FileText, name: 'Articles', count: 2000 },
];

export default function ResourceHub() {
  return (
    <motion.div
      className="bg-gray-100 rounded-lg p-8 shadow-md mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Extensive Resource Hub</h2>
      <p className="text-center mb-8 text-gray-600">
        Access a wealth of curated, free learning materials across various formats.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {resourceTypes.map((type, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-white rounded-full p-4 inline-block mb-4 shadow-md">
              <type.icon size={32} className="text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2 text-gray-800">{type.name}</h3>
            <p className="text-orange-500">{type.count}+</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}