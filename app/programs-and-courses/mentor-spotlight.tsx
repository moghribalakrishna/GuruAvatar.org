import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const mentors = [
  { name: 'Dr. Jane Smith', expertise: 'AI & Machine Learning', image: '/mentors/jane-smith.jpg' },
  { name: 'John Doe', expertise: 'Full Stack Development', image: '/mentors/john-doe.jpg' },
  { name: 'Emily Johnson', expertise: 'Data Science', image: '/mentors/emily-johnson.jpg' },
];

export default function MentorSpotlight() {
  return (
    <motion.div
      className="bg-gray-100 rounded-lg p-8 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Learn from Industry Experts</h2>
      <p className="text-center mb-8 text-gray-600">
        Connect with experienced mentors who are leaders in their fields.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mentors.map((mentor, index) => (
          <motion.div
            key={index}
            className="text-center bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={mentor.image}
              alt={mentor.name}
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2 text-gray-800">{mentor.name}</h3>
            <p className="text-blue-600">{mentor.expertise}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}