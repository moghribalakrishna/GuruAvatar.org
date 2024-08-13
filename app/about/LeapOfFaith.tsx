import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Rocket, ChevronDown, ChevronUp, DollarSign, Home, Heart } from 'lucide-react';

const LeapOfFaith = ({ isActive }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-6">2013: The Leap of Faith & Return Back to India from HongKong</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-lg mb-4">
            In 2013, Balakrishna Moghri stood at a crossroads. The vision of GuruAvatar, born from his epiphany in Singapore, now demanded action. But pursuing this dream meant leaving behind a secure, high-paying career in Hong Kong.
          </p>
          <p className="text-lg mb-4">
            This was not just a career decision; it was a life-altering choice that would impact not only Balakrishna but also his wife, Deepa Kongara.
          </p>
        </div>
        <div>
          <Image
            src="/images/about/back-2-India.webp"
            alt="Balakrishna and Deepa in 2013"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">The Decision</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <DollarSign className="text-red-400 mr-2 mt-1" />
            <span>Resign from a prestigious, high-paying job in Hong Kong</span>
          </li>
          <li className="flex items-start">
            <Home className="text-green-400 mr-2 mt-1" />
            <span>Return to India to pursue the GuruAvatar dream</span>
          </li>
          <li className="flex items-start">
            <Heart className="text-pink-400 mr-2 mt-1" />
            <span>Embark on this journey with Deepa as life partners & Co-Founders</span>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <button
          className="flex items-center text-xl font-semibold mb-2"
          onClick={() => toggleSection('deepasRole')}
        >
          Deepa's Crucial Role
          {expandedSection === 'deepasRole' ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>
        <AnimatePresence>
          {expandedSection === 'deepasRole' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p className="text-lg mb-4">
                Deepa Kongara's support was instrumental in this pivotal moment.she brought valuable insights into the practical needs of students and teachers.
              </p>
              <p className="text-lg mb-4">
                Her deep interest in curriculum development and teaching methodologies would later become the bedrock of GuruAvatar's innovative approach. Deepa's decision to support Balakrishna's vision, even as they were about to start their life together, was a testament to her belief in the transformative power of education.
              </p>
              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-lg">
                "We're in this together now. If we can change even one life through better education, it will all be worth it." - Deepa Kongara
              </blockquote>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">The Leap</h3>
        <div className="flex items-center bg-white bg-opacity-10 p-4 rounded-lg">
          <Rocket className="text-orange-400 mr-4" size={48} />
          <p className="text-lg">
            In early 2014, Balakrishna and Deepa took the plunge. They left the comfort and security of their lives in Hong Kong and returned to India, armed with nothing but their savings, their expertise, and an unwavering belief in their vision for GuruAvatar.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <button
          className="flex items-center text-xl font-semibold mb-2"
          onClick={() => toggleSection('challenges')}
        >
          Initial Challenges
          {expandedSection === 'challenges' ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>
        <AnimatePresence>
          {expandedSection === 'challenges' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Financial insecurity and the pressure of depleting savings</li>
                <li>Skepticism from friends and family about leaving a stable career</li>
                <li>The daunting task of building an educational platform from scratch</li>
                <li>Balancing the demands of a new marriage with the stress of a startup</li>
                <li>Navigating the complex regulatory landscape of education in India</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-center">
        <p className="text-xl font-semibold mb-4">Impact on GuruAvatar's Future</p>
        <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-2xl font-bold">
          25% of the journey completed
        </div>
      </div>
    </motion.div>
  );
};

export default LeapOfFaith;