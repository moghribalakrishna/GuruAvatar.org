import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

const SingaporeEpiphany = ({ isActive }) => {
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
      <h2 className="text-4xl font-bold mb-6">2012: The Singapore Epiphany</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-lg mb-4">
            In 2012, Balakrishna Moghri's life took an unexpected turn during a business trip to
            Singapore. The stark contrast between Singapore's development and his native India
            sparked a profound introspection about the root causes of this disparity.
          </p>
          <p className="text-lg mb-4">
            As he walked the immaculate streets of Singapore, observing its efficient public
            transportation and gleaming skyscrapers, a gnawing question began to form in his mind:
            Why was India, with its rich history and vast potential, lagging so far behind?
          </p>
        </div>
        <div>
          <Image
            src="/images/about/singapore-skyline-2012.webp"
            alt="Singapore Skyline 2012"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Key Realizations</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>The power of critical thinking and curiosity in personal and national development</li>
          <li>The need for a systematic approach to fostering these skills in education</li>
          <li>The potential of technology to democratize access to quality education</li>
        </ul>
      </div>
      <div className="mb-8">
        <button
          className="flex items-center text-xl font-semibold mb-2"
          onClick={() => toggleSection('personalReflection')}
        >
          Personal Reflection
          {expandedSection === 'personalReflection' ? (
            <ChevronUp className="ml-2" />
          ) : (
            <ChevronDown className="ml-2" />
          )}
        </button>
        <AnimatePresence>
          {expandedSection === 'personalReflection' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p className="text-lg mb-4">
                During sleepless nights in his Singapore hotel room, Balakrishna reflected on his
                own journey. He realized that his success compared to his peers stemmed largely
                from his habit of asking critical questions and his insatiable curiosity.
              </p>
              <p className="text-lg mb-4">
                This epiphany became the cornerstone of what would eventually become GuruAvatar's
                mission - to create an educational platform that would ignite curiosity, foster
                critical thinking, and empower students to take control of their learning journey.
              </p>
              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-lg">
                "If not me, then who? If not now, then when? These questions echoed in my mind,
                demanding action." - Balakrishna Moghri
              </blockquote>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">The Seed of an Idea</h3>
        <div className="flex items-center bg-white bg-opacity-10 p-4 rounded-lg">
          <Lightbulb className="text-yellow-400 mr-4" size={48} />
          <p className="text-lg">
            The concept of GuruAvatar began to take shape: a platform that would leverage
            technology to ignite curiosity on a massive scale, combining software, videos, and
            interactive content to create a scalable, accessible learning environment.
          </p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold mb-4">Impact on GuruAvatar's Future</p>
        <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-2xl font-bold">
          10% of the journey completed
        </div>
      </div>
    </motion.div>
  );
};

export default SingaporeEpiphany;