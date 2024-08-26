import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Zap, ChevronDown, ChevronUp, Book, Users, Brain, Globe } from 'lucide-react';

// Define the prop types
interface GuruAvatarRebornProps {
  isActive: boolean;
}

const GuruAvatarReborn: React.FC<GuruAvatarRebornProps> = ({ isActive }) => {
  const [expandedSection, setExpandedSection] = useState<null | string>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };


  return (
    <motion.div
      className="max-w-4xl mx-auto bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-6">2023: GuruAvatar Reborn</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-lg mb-4">
            As the AlienHu chapter came to a close in early 2023, Balakrishna and Deepa found themselves at another crossroads. The challenges and setbacks they had faced could have easily deterred them from pursuing their original dream. Instead, these experiences had only strengthened their resolve and equipped them with the tools needed to bring GuruAvatar to life.
          </p>
          <p className="text-lg mb-4">
            With a wealth of experience and a refined vision, they decided it was time to fully commit to realizing the GuruAvatar dream.
          </p>
        </div>
        <div>
          <Image
            src="/images/about/growth-impact.webp"
            alt="GuruAvatar Relaunch 2023"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">The Renewed Vision</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <Book className="text-blue-400 mr-2 mt-1" />
            <span>AI-powered personalized learning paths adapted to individual needs</span>
          </li>
          <li className="flex items-start">
            <Brain className="text-purple-400 mr-2 mt-1" />
            <span>Integrated mindfulness practices and emotional intelligence training</span>
          </li>
          <li className="flex items-start">
            <Users className="text-green-400 mr-2 mt-1" />
            <span>Global peer-to-peer collaboration and mentorship programs</span>
          </li>
          <li className="flex items-start">
            <Globe className="text-yellow-400 mr-2 mt-1" />
            <span>Focus on preparing students for the challenges of a rapidly changing world</span>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <button
          className="flex items-center text-xl font-semibold mb-2"
          onClick={() => toggleSection('keyFeatures')}
        >
          Key Features of the Reborn GuruAvatar
          {expandedSection === 'keyFeatures' ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>
        <AnimatePresence>
          {expandedSection === 'keyFeatures' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Advanced AI algorithms for truly personalized learning experiences</li>
                <li>Virtual Reality (VR) and Augmented Reality (AR) integration for immersive learning</li>
                <li>Gamification elements to increase engagement and motivation</li>
                <li>Real-time analytics for students, parents, and educators</li>
                <li>Blockchain-verified skill passports for secure credential sharing</li>
                <li>Integration with wearable devices for holistic health monitoring</li>
                <li>Adaptive microlearning modules for efficient knowledge acquisition</li>
              </ul>
              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-lg mt-4">
                "GuruAvatar 2.0 isn't just an evolution; it's a revolution in how we approach education and personal growth." - Deepa Kongara
              </blockquote>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">The Rebirth Process</h3>
        <div className="flex items-center bg-white bg-opacity-10 p-4 rounded-lg">
          <Zap className="text-orange-400 mr-4" size={48} />
          <p className="text-lg">
            The rebirth of GuruAvatar was a meticulous process, combining the original vision with the hard-earned lessons from the AlienHu years. Balakrishna and Deepa spent months refining the concept, building a new team, and developing partnerships with educators, technologists, and mindfulness experts worldwide.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <button
          className="flex items-center text-xl font-semibold mb-2"
          onClick={() => toggleSection('challenges')}
        >
          New Challenges and Opportunities
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
                The relaunch of GuruAvatar came with its own set of challenges and opportunities:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Navigating the post-pandemic educational landscape</li>
                <li>Addressing concerns about AI ethics and data privacy in education</li>
                <li>Balancing technological innovation with human-centered learning</li>
                <li>Scaling a non-profit model while ensuring financial sustainability</li>
                <li>Building partnerships with educational institutions and governments</li>
              </ul>
              <p className="text-lg mt-4">
                Each challenge was approached with the wisdom gained from past experiences, turning potential obstacles into opportunities for innovation and growth.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-center">
        <p className="text-xl font-semibold mb-4">Impact on GuruAvatar's Future</p>
        <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-2xl font-bold">
          90% of the journey completed
        </div>
      </div>
    </motion.div>
  );
};

export default GuruAvatarReborn;