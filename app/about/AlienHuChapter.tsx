import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Award, ChevronDown, ChevronUp, TrendingUp, Users, DollarSign, Zap } from 'lucide-react';

const AlienHuChapter = ({ isActive }) => {
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
      <h2 className="text-4xl font-bold mb-6">2016-2023: The AlienHu Chapter</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-lg mb-4">
            As GuruAvatar's development progressed, Balakrishna and Deepa realized they needed more resources and experience to bring their vision to life. This led to the creation of AlienHu in 2016, a venture that would serve as a stepping stone and learning experience.
          </p>
          <p className="text-lg mb-4">
            AlienHu, while separate from GuruAvatar, was seen as a means to gain crucial experience in building and scaling a technology company. It would prove to be a rollercoaster journey of its own.
          </p>
        </div>
        <div>
          <Image
            src="/alienhu-launch-2016.jpg"
            alt="AlienHu Launch 2016"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">AlienHu's Journey</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <TrendingUp className="text-green-400 mr-2 mt-1" />
            <span>Rapid growth: Serving over 10,000 B2B customers and 150,000 B2C users</span>
          </li>
          <li className="flex items-start">
            <Users className="text-blue-400 mr-2 mt-1" />
            <span>Team expansion: Growing to employ over 200 professionals at its peak</span>
          </li>
          <li className="flex items-start">
            <DollarSign className="text-yellow-400 mr-2 mt-1" />
            <span>Financial milestone: Achieving monthly peak SaaS revenue of Rs 4 million</span>
          </li>
          <li className="flex items-start">
            <Zap className="text-purple-400 mr-2 mt-1" />
            <span>Technological innovation: Developing cutting-edge solutions for local businesses</span>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <button
          className="flex items-center text-xl font-semibold mb-2"
          onClick={() => toggleSection('challenges')}
        >
          Challenges and Learning
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
                The AlienHu years were marked by both triumphs and significant challenges:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Navigating the competitive landscape of well-funded startups</li>
                <li>Scaling operations while maintaining product quality and customer satisfaction</li>
                <li>Financial constraints and the need for strategic pivots</li>
                <li>The devastating impact of the COVID-19 pandemic on the business</li>
                <li>Balancing the demands of AlienHu with the ongoing vision for GuruAvatar</li>
              </ul>
              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-lg mt-4">
                "Every challenge we faced at AlienHu was a lesson that would later shape GuruAvatar. The dream never died; it was evolving." - Balakrishna Moghri
              </blockquote>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Invaluable Experience Gained</h3>
        <div className="flex items-center bg-white bg-opacity-10 p-4 rounded-lg">
          <Award className="text-orange-400 mr-4" size={48} />
          <p className="text-lg">
            Despite the challenges, the AlienHu experience provided Balakrishna and Deepa with invaluable insights into product development, team building, financial management, and the intricacies of scaling a technology platform. These lessons would prove crucial in the next phase of GuruAvatar's journey.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <button
          className="flex items-center text-xl font-semibold mb-2"
          onClick={() => toggleSection('guruAvatarImpact')}
        >
          Impact on GuruAvatar's Vision
          {expandedSection === 'guruAvatarImpact' ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>
        <AnimatePresence>
          {expandedSection === 'guruAvatarImpact' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p className="text-lg mb-4">
                Throughout the AlienHu years, the vision of GuruAvatar continued to evolve:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Enhanced understanding of scalable technology infrastructure</li>
                <li>Insights into user engagement and retention strategies</li>
                <li>Deepened appreciation for the importance of adaptability in the face of challenges</li>
                <li>Refined approach to building and managing high-performance teams</li>
                <li>Clearer vision of GuruAvatar as a non-profit, mission-driven organization</li>
              </ul>
              <p className="text-lg mt-4">
                These years, while focused on AlienHu, were instrumental in shaping GuruAvatar into a more robust and visionary concept.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-center">
        <p className="text-xl font-semibold mb-4">Impact on GuruAvatar's Future</p>
        <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-2xl font-bold">
          75% of the journey completed
        </div>
      </div>
    </motion.div>
  );
};

export default AlienHuChapter;