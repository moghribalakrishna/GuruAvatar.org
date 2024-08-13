import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Target, ChevronDown, ChevronUp, Globe, Layers, Users, Zap } from 'lucide-react';

// Define the prop types
interface FutureVisionProps {
  isActive: boolean;
}

const FutureVision: React.FC<FutureVisionProps> = ({ isActive }) => {
  const [expandedSection, setExpandedSection] = useState<null | string>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-6">2024 and Beyond: The Future of GuruAvatar</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-lg mb-4">
            As GuruAvatar steps into 2024 and looks towards the future, the vision that began with a spark of inspiration in Singapore has evolved into a comprehensive plan to revolutionize education globally. Balakrishna and Deepa, along with their dedicated team, are poised to make a lasting impact on learners worldwide.
          </p>
          <p className="text-lg mb-4">
            The future of GuruAvatar is not just about technological advancement, but about creating a holistic ecosystem that nurtures curiosity, critical thinking, and personal growth.
          </p>
        </div>
        <div>
          <Image
            src="/images/about/technology-traditional-education.webp"
            alt="GuruAvatar Future Vision"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Key Objectives for the Future</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <Globe className="text-blue-400 mr-2 mt-1" />
            <span>Expand reach to serve over 1 million students globally by 2025</span>
          </li>
          <li className="flex items-start">
            <Layers className="text-purple-400 mr-2 mt-1" />
            <span>Develop advanced AI modules for personalized STEM education</span>
          </li>
          <li className="flex items-start">
            <Users className="text-green-400 mr-2 mt-1" />
            <span>Launch a global peer-to-peer mentorship program</span>
          </li>
          <li className="flex items-start">
            <Zap className="text-yellow-400 mr-2 mt-1" />
            <span>Implement mindfulness practices in 5,000+ schools worldwide</span>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <button
          className="flex items-center text-xl font-semibold mb-2"
          onClick={() => toggleSection('innovativePlans')}
        >
          Innovative Plans and Initiatives
          {expandedSection === 'innovativePlans' ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>
        <AnimatePresence>
          {expandedSection === 'innovativePlans' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <ul className="list-disc list-inside space-y-2">
                <li>GuruAvatar Labs: A research division focused on educational innovation</li>
                <li>Virtual Reality Campuses: Immersive learning environments for global collaboration</li>
                <li>AI Ethics Curriculum: Preparing students for the ethical challenges of an AI-driven world</li>
                <li>Neuro-adaptive Learning: Utilizing neurofeedback for optimized learning experiences</li>
                <li>Global Challenge Solver Program: Connecting students to solve real-world problems</li>
                <li>Lifelong Learning Passport: A blockchain-verified record of skills and achievements</li>
              </ul>
              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-lg mt-4">
                "Our goal is not just to educate, but to empower the next generation to shape a better world." - Balakrishna Moghri
              </blockquote>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Partnerships and Collaborations</h3>
        <div className="flex items-center bg-white bg-opacity-10 p-4 rounded-lg">
          <Target className="text-orange-400 mr-4" size={48} />
          <p className="text-lg">
            GuruAvatar aims to forge strategic partnerships with educational institutions, tech companies, and governments worldwide. These collaborations will focus on integrating GuruAvatar's innovative approach into existing educational systems and creating new opportunities for learners everywhere.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <button
          className="flex items-center text-xl font-semibold mb-2"
          onClick={() => toggleSection('challenges')}
        >
          Anticipated Challenges and Solutions
          {expandedSection === 'challenges' ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>
        <AnimatePresence>
          {expandedSection === 'challenges' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p className="text-lg mb-4">
                As GuruAvatar looks to the future, several challenges are anticipated:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Bridging the global digital divide</li>
                <li>Ensuring data privacy and security in an increasingly connected world</li>
                <li>Adapting to rapidly evolving technologies and changing job markets</li>
                <li>Balancing screen time with real-world experiences</li>
                <li>Maintaining the human touch in AI-driven education</li>
              </ul>
              <p className="text-lg mt-4">
                GuruAvatar is proactively developing strategies to address these challenges, including offline learning capabilities, advanced encryption methods, continuous curriculum updates, and blended learning approaches that combine digital and physical experiences.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-center">
        <p className="text-xl font-semibold mb-4">The Journey Continues</p>
        <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-2xl font-bold">
          100% committed to lifelong learning and growth
        </div>
      </div>
    </motion.div>
  );
};

export default FutureVision;