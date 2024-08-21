import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FoundersJourney() {
  return (
    <section className="mb-16">
      <motion.h2 
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        The Founders' Journey
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center mb-8">
        <motion.div 
          className="md:w-1/2 mb-6 md:mb-0 md:mr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <Image 
              src="/founder-image.jpeg" 
              alt="Balakrishna Moghri, Co-founder of GuruAvatar" 
              width={400} 
              height={300} 
              className="rounded-xl shadow-2xl"
            />
            <motion.p 
              className="text-sm text-center mt-2 text-gray-300 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Balakrishna Moghri in 2013, during GuruAvatar's founding days in Hong Kong
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4">A Transformative Vision</h3>
          <p className="text-lg mb-4">
            In 2012, during a visit to Singapore, Balakrishna Moghri realized the stark contrast between Singapore's development and India’s challenges. This inspired him to address these disparities by founding GuruAvatar, a platform that fosters curiosity, critical thinking, and empowers students.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-8">
        <motion.div 
          className="md:w-1/2 mb-6 md:mb-0 md:mr-8 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="relative">
            <Image 
              src="/cofounder-image.webp" 
              alt="Deepa Kongara, Co-founder of GuruAvatar" 
              width={400} 
              height={300} 
              className="rounded-xl shadow-2xl"
            />
            <motion.p 
              className="text-sm text-center mt-2 text-gray-300 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Deepa Kongara in 2013, as GuruAvatar was taking shape in Hong Kong
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Deepa Kongara's Vital Role</h3>
          <p className="text-lg mb-4">
            Deepa played a crucial role in shaping GuruAvatar's approach to education, integrating mindfulness and emotional intelligence into the curriculum. Her support and vision were instrumental in navigating the early challenges of this journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}