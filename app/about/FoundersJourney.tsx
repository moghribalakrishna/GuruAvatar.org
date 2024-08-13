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
        The Founders' Journey: A Path of Sacrifice and Vision
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
          <h3 className="text-2xl font-semibold mb-4">Balakrishna Moghri's Epiphany</h3>
          <p className="text-lg mb-4">
            In 2012, Balakrishna Moghri's life took a transformative turn during a visit to Singapore. Struck by the stark contrast between Singapore's development and his native India, he felt a profound calling to address the root causes of this disparity. Inspired by Mahatma Gandhi's words, "Be the change you wish to see in the world," Balakrishna embarked on a journey of self-reflection that would ultimately lead to the birth of GuruAvatar.
          </p>
          <p className="text-lg mb-4">
            This period of introspection led Balakrishna to a crucial realization: his personal success compared to his peers stemmed from his habit of asking critical questions and his insatiable curiosity. This epiphany became the cornerstone of GuruAvatar's mission - to create an educational platform that would ignite curiosity, foster critical thinking, and empower students to take control of their learning journey.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold mb-4">The Leap of Faith & return Back to India from HongKong </h3>
        <p className="text-lg mb-4">
          The path to realizing this vision was fraught with challenges. In 2013, Balakrishna faced a pivotal moment - choosing between a secure, high-paying career and the uncertain path of an education innovator. It was during this time that he married Deepa Kongara, whose unwavering support would prove instrumental in the years to come.
        </p>
        <p className="text-lg mb-4">
          In a bold move that would define their future, Balakrishna resigned from his prestigious position in Hong Kong and returned to India in early 2014. This decision, made on the cusp of starting a family, was a testament to the couple's commitment to their vision of transforming education in India.
        </p>
      </motion.div>

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
          <h3 className="text-2xl font-semibold mb-4">Deepa Kongara: The Pillar of Strength</h3>
          <p className="text-lg mb-4">
            Deepa Kongara's role in the GuruAvatar journey is a testament to her resilience, wisdom, and unwavering support. Deepa brought invaluable insights into the practical needs of students and educators. Her expertise in curriculum development and teaching methodologies became the bedrock of GuruAvatar's innovative approach.
          </p>
          <p className="text-lg mb-4">
            Throughout the challenging early years, Deepa wore multiple hats - supportive partner, soon-to-be mother, and co-architect of the GuruAvatar vision. Her focus on integrating mindfulness and emotional intelligence into the curriculum became a defining feature of GuruAvatar's holistic approach to education. Deepa's strength in the face of uncertainty and her ability to balance personal responsibilities with the demands of building GuruAvatar were crucial in navigating the turbulent waters of entrepreneurship.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h3 className="text-2xl font-semibold mb-4">United in Purpose</h3>
        <p className="text-lg mb-4">
          Together, Balakrishna and Deepa faced numerous challenges - financial constraints, skepticism from peers, and the daunting task of reimagining education in a country as diverse and complex as India. Their journey was marked by sleepless nights, moments of doubt, and personal sacrifices. Yet, it was precisely these challenges that forged their resolve and deepened their commitment to the mission of transforming education.
        </p>
        <p className="text-lg mb-4">
          Their complementary skills and shared vision created a synergy that would prove invaluable in the years to come. Balakrishna's technological expertise and entrepreneurial drive, combined with Deepa's educational interest and focus on holistic development, laid the foundation for an educational platform that was both innovative and deeply rooted in pedagogical best practices.
        </p>
      </motion.div>
    </section>
  );
}