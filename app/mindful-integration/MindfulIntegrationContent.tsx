'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Brain, Heart, Move, Eye, Apple, MessageCircle, Laptop, Smartphone, Smile, Book, Zap, LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface Practice {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const mindfulnessPractices = [
  { id: 'breath-awareness', icon: Brain, title: 'Breath Awareness', description: 'Anchor your attention and improve focus through mindful breathing.' },
  { id: 'body-scan', icon: Eye, title: 'Body Scan', description: 'Enhance body awareness and release tension for improved learning readiness.' },
  { id: 'loving-kindness', icon: Heart, title: 'Loving-Kindness Meditation', description: 'Cultivate compassion and positive emotions towards yourself and others.' },
  { id: 'mindful-movement', icon: Move, title: 'Mindful Movement', description: 'Integrate mindfulness into physical activities for holistic well-being.' },
  { id: 'observing-thoughts', icon: Brain, title: 'Observing Thoughts', description: 'Learn to observe your thoughts without judgment, reducing stress and anxiety.' },
];

const dailyLifePractices = [
  { id: 'mindful-eating', icon: Apple, title: 'Mindful Eating', description: 'Develop a healthier relationship with food and improve digestion.' },
  { id: 'mindful-communication', icon: MessageCircle, title: 'Mindful Communication', description: 'Enhance your interpersonal skills and build stronger relationships.' },
  { id: 'mindful-work', icon: Laptop, title: 'Mindful Work and Study', description: 'Boost productivity and reduce burnout in your academic pursuits.' },
  { id: 'digital-mindfulness', icon: Smartphone, title: 'Digital Mindfulness', description: 'Navigate the digital world with intention and reduce technology-related stress.' },
];

const academicPerformance = [
  { id: 'improving-focus', icon: Eye, title: 'Improving Focus and Concentration', description: 'Enhance your ability to concentrate and stay focused on your studies.' },
  { id: 'enhancing-memory', icon: Brain, title: 'Enhancing Memory and Retention', description: 'Improve your memory and retain information more effectively.' },
  { id: 'reducing-test-anxiety', icon: Smile, title: 'Reducing Test Anxiety', description: 'Manage exam stress and perform better under pressure.' },
  { id: 'boosting-creativity', icon: Zap, title: 'Boosting Creativity', description: 'Unlock your creative potential and approach problems innovatively.' },
];

export default function MindfulIntegrationContent() {
  const [activeTab, setActiveTab] = useState('core-practices');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const storedTab = sessionStorage.getItem('activeTab');
    if (storedTab) {
      setActiveTab(storedTab);
      sessionStorage.removeItem('activeTab'); // Clear the stored tab after using it
    }
  }, [pathname]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderPracticeLink = (practice: Practice, tab: string) => (
    <Link 
      href={`/mindful-integration/${practice.id}`} 
      key={practice.id}
      onClick={() => {
        sessionStorage.setItem('activeTab', tab);
      }}
    >
      <motion.div
        className="bg-white bg-opacity-10 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg overflow-hidden relative"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Image 
          src={`/images/mindful-integration/${practice.id}.webp`} 
          alt={practice.title} 
          width={400}
          height={300}
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <practice.icon className="w-12 h-12 text-purple-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
        <p className="text-blue-100">{practice.description}</p>
      </motion.div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white overflow-hidden relative p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mindful Integration
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-center max-w-4xl mx-auto text-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Enhance your learning journey with AI-guided mindfulness practices. 
          Cultivate focus, reduce stress, and boost cognitive performance.
        </motion.p>

        <div className="mb-8 flex justify-center">
          <button
            className={`px-4 py-2 rounded-l-full ${activeTab === 'core-practices' ? 'bg-purple-600' : 'bg-purple-800'}`}
            onClick={() => handleTabChange('core-practices')}
          >
            Core Practices
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'daily-life' ? 'bg-purple-600' : 'bg-purple-800'}`}
            onClick={() => handleTabChange('daily-life')}
          >
            Daily Life
          </button>
          <button
            className={`px-4 py-2 rounded-r-full ${activeTab === 'academic-performance' ? 'bg-purple-600' : 'bg-purple-800'}`}
            onClick={() => handleTabChange('academic-performance')}
          >
            Academic Performance
          </button>
        </div>

        {activeTab === 'core-practices' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {mindfulnessPractices.map(practice => renderPracticeLink(practice, 'core-practices'))}
          </div>
        )}

        {activeTab === 'daily-life' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {dailyLifePractices.map(practice => renderPracticeLink(practice, 'daily-life'))}
          </div>
        )}

        {activeTab === 'academic-performance' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {academicPerformance.map(practice => renderPracticeLink(practice, 'academic-performance'))}
          </div>
        )}

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl mb-8">
            Explore our mindfulness practices and elevate your learning potential with GuruAvatar.
          </p>
          <Link href="/get-started" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300 inline-block shadow-lg">
            Start Your Mindful Learning Journey
          </Link>
        </motion.section>
      </div>
    </div>
  );
}