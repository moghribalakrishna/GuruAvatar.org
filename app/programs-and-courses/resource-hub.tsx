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
      className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-md mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Extensive Resource Hub</h2>
      <p className="text-center mb-8 text-blue-200">
        Access a wealth of curated, free learning materials across various formats.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {resourceTypes.map((type, index) => (
          <div key={index} className="text-center">
            <motion.div 
              className="bg-white bg-opacity-20 rounded-full p-4 inline-block mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <type.icon size={32} />
            </motion.div>
            <h3 className="font-semibold mb-2">{type.name}</h3>
            <p className="text-yellow-300">{type.count}+</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}