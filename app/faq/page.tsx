'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is GuruAvatar?",
    answer: "GuruAvatar is a non-profit organization dedicated to revolutionizing education through AI-powered learning, mindfulness integration, habit formation, and expert mentorship. We aim to provide personalized, holistic education to learners worldwide."
  },
  {
    question: "How does AI-powered learning work?",
    answer: "Our AI algorithms analyze each student's learning style, pace, and preferences to create personalized learning paths. The system adapts in real-time, providing customized content, exercises, and feedback to optimize the learning experience."
  },
  {
    question: "Is GuruAvatar only for students?",
    answer: "While our primary focus is on students, GuruAvatar's resources can benefit lifelong learners of all ages. We offer programs for high school and college students, as well as professionals looking to upskill or change careers."
  },
  {
    question: "How can I support GuruAvatar's mission?",
    answer: "There are several ways to support us: you can donate, volunteer your time and skills, partner with us as an institution, or help spread the word about our mission. Visit our 'Get Involved' page to learn more about these opportunities."
  },
  {
    question: "Are GuruAvatar's services free?",
    answer: "As a non-profit, we strive to make our services accessible to all. While some of our resources are free, we do charge for certain programs to cover operational costs. However, we offer scholarships and financial aid to ensure that cost is not a barrier to quality education."
  },
  {
    question: "How does GuruAvatar incorporate mindfulness into learning?",
    answer: "We integrate mindfulness practices throughout our curriculum. This includes guided meditation sessions, stress-reduction techniques, and mindfulness exercises designed to enhance focus, reduce anxiety, and improve overall well-being."
  },
  {
    question: "Can I become a mentor with GuruAvatar?",
    answer: "Absolutely! We're always looking for experienced professionals and educators to join our mentorship program. If you're interested, please visit our 'Volunteer' page to learn more about the application process."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="mb-4 bg-white bg-opacity-10 rounded-lg overflow-hidden"
      initial={false}
      animate={{ backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)' }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="p-4 text-gray-200">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQPage() {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Find answers to common questions about GuruAvatar, our mission, and how we're revolutionizing education.
        </motion.p>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>

        <motion.section 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Still have questions?</h2>
          <p className="text-xl mb-8">
            If you couldn't find the answer you were looking for, please don't hesitate to reach out to us directly.
          </p>
          <a 
            href="/forms/contact" 
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 inline-block"
          >
            Contact Us
          </a>
        </motion.section>
      </div>
    </div>
  );
}