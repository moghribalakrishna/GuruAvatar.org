import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Users, ChevronDown, ChevronUp, Code, BookOpen, Brain, Target } from 'lucide-react';

// Define the prop types
interface GuruAvatarConceptionProps {
  isActive: boolean;
}

const GuruAvatarConception: React.FC<GuruAvatarConceptionProps> = ({ isActive }) => {
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
      <h2 className="text-4xl font-bold mb-6">2014: GuruAvatar Conception</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-lg mb-4">
            With their leap of faith taken, Balakrishna and Deepa found themselves in India, ready to breathe life into their vision of GuruAvatar. The year 2014 marked the beginning of an intense period of research, planning, and development.
          </p>
          <p className="text-lg mb-4">
            Their dining table became a war room, covered in notes, diagrams, and half-empty coffee cups. Days blurred into nights as they worked tirelessly to transform their idea into reality.
          </p>
        </div>
        <div>
          <Image
            src="/images/about/balakrishna-deepa-2013.webp"
            alt="GuruAvatar Planning Session 2014"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Core Pillars of GuruAvatar</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <Code className="text-blue-400 mr-2 mt-1" />
            <span>AI-Powered Personalization: Adaptive learning paths tailored to each student's needs</span>
          </li>
          <li className="flex items-start">
            <BookOpen className="text-green-400 mr-2 mt-1" />
            <span>Comprehensive Curriculum: Covering academic subjects and life skills</span>
          </li>
          <li className="flex items-start">
            <Brain className="text-purple-400 mr-2 mt-1" />
            <span>Mindfulness Integration: Fostering emotional intelligence and mental well-being</span>
          </li>
          <li className="flex items-start">
            <Target className="text-red-400 mr-2 mt-1" />
            <span>Goal-Oriented Learning: Helping students set and achieve meaningful objectives</span>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <button
          className="flex items-center text-xl font-semibold mb-2"
          onClick={() => toggleSection('researchPhase')}
        >
          The Research Phase
          {expandedSection === 'researchPhase' ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>
        <AnimatePresence>
          {expandedSection === 'researchPhase' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p className="text-lg mb-4">
                Balakrishna and Deepa immersed themselves in studying successful educational models worldwide. They drew inspiration from platforms like Khan Academy and Coursera, while also delving deep into pedagogical theories and the latest research in educational psychology.
              </p>
              <p className="text-lg mb-4">
                They conducted interviews with students, teachers, and parents to understand the pain points in the current education system. This research phase was crucial in shaping GuruAvatar's unique approach to learning.
              </p>
              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-lg">
                "We weren't just building another EdTech platform. We were reimagining education for the 21st century." - Balakrishna Moghri
              </blockquote>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">The Birth of GuruAvatar</h3>
        <div className="flex items-center bg-white bg-opacity-10 p-4 rounded-lg">
          <Users className="text-orange-400 mr-4" size={48} />
          <p className="text-lg">
            By the end of 2014, the initial prototype of GuruAvatar was born. It was a basic platform that combined AI-driven personalization with a curriculum that went beyond traditional academics, incorporating elements of mindfulness and goal-setting.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <button
          className="flex items-center text-xl font-semibold mb-2"
          onClick={() => toggleSection('earlyFeedback')}
        >
          Early Feedback and Iterations
          {expandedSection === 'earlyFeedback' ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>
        <AnimatePresence>
          {expandedSection === 'earlyFeedback' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p className="text-lg mb-4">
                The initial prototype was tested with a small group of students and teachers. The feedback was encouraging but highlighted areas for improvement:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Users loved the personalized learning paths but wanted more interactive content</li>
                <li>The mindfulness features were well-received, but needed better integration with academic content</li>
                <li>Teachers requested more tools for tracking student progress and customizing curricula</li>
                <li>Parents expressed interest in being more involved in their child's learning journey</li>
              </ul>
              <p className="text-lg mt-4">
                This feedback led to multiple iterations of the platform, each bringing GuruAvatar closer to its vision of transformative education.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-center">
        <p className="text-xl font-semibold mb-4">Impact on GuruAvatar's Future</p>
        <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-2xl font-bold">
          50% of the journey completed
        </div>
      </div>
    </motion.div>
  );
};

export default GuruAvatarConception;