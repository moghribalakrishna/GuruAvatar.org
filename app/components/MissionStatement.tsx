import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function MissionStatement() {
  return (
    <section className="my-16">
      <motion.div 
        className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ rotate: -10, scale: 0.9 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Quote className="w-12 h-12 mx-auto text-orange-400 mb-4" />
        </motion.div>
        <motion.p 
          className="text-2xl font-semibold mb-4 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          "In today's world, education is at your fingertips—free and accessible to all. What truly makes the difference is the drive to learn, the practice of mindfulness, the cultivation of good habits, and the guidance of a mentor."
        </motion.p>
        <motion.p 
          className="text-lg font-medium text-orange-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          - Balakrishna Moghri & Deepa Kongara, Founders of GuruAvatar
        </motion.p>
      </motion.div>

      <motion.div 
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Non-Profit Mission</h2>
        <p className="text-lg mb-4">
          GuruAvatar is more than just an educational platform; it's a testament to the power of vision, perseverance, and the unwavering belief in the transformative power of education. Founded by Balakrishna Moghri and Deepa Kongara, GuruAvatar stands as a beacon of hope in the landscape of Indian education, dedicated to democratizing knowledge and empowering learners worldwide.
        </p>
        <motion.p 
          className="text-lg mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our mission is to revolutionize education by seamlessly blending cutting-edge AI technology with time-honored wisdom. We believe in nurturing not just the mind, but the whole individual. Through our innovative approach, we combine personalized learning paths, mindfulness practices, habit formation techniques, and expert mentorship to create a holistic educational experience.
        </motion.p>
        <motion.p 
          className="text-lg mb-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          At GuruAvatar, we're not just preparing students for exams; we're empowering them for life. Our non-profit status reflects our commitment to making quality education accessible to all, regardless of geographical or economic barriers. We envision a world where every learner has the tools, guidance, and opportunity to reach their full potential and contribute meaningfully to society.
        </motion.p>
      </motion.div>
    </section>
  );
}