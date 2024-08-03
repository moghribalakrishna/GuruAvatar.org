'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Target, Brain, Rocket, Clock } from 'lucide-react';

export default function GoalSettingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/habit-forging" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8 transition duration-300">
          <ArrowLeft className="mr-2" /> Back to Habit Forge
        </Link>
        
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-8 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-6xl mr-4">🎯</span>
          Mastering Goal Setting
        </motion.h1>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6">Why Goal Setting Matters</h2>
          <div className="flex flex-col lg:flex-row items-center mb-8">
            <div className="lg:w-1/2 mb-6 lg:mb-0 lg:mr-8">
              <Image 
                src="/college-goal-setting-collaboration.webp"
                alt="Person setting goals"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-xl text-blue-100 mb-6">
                Effective goal setting is the cornerstone of personal and professional growth. 
                It provides direction, motivation, and a clear measure of success. By mastering 
                the art of goal setting, you'll be able to:
              </p>
              <ul className="space-y-4">
                {['Focus your efforts on what truly matters', 
                  'Increase your motivation and commitment',
                  'Track your progress and celebrate achievements',
                  'Overcome procrastination and inertia'
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6">The SMART Framework</h2>
          <p className="text-xl text-blue-100 mb-8">
            At GuruAvatar, we teach goal setting using the SMART framework. This proven 
            methodology ensures that your goals are clear, achievable, and impactful.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { letter: 'S', word: 'Specific', desc: 'Clearly define what you want to accomplish', icon: Target },
              { letter: 'M', word: 'Measurable', desc: 'Include concrete criteria for measuring progress', icon: CheckCircle },
              { letter: 'A', word: 'Achievable', desc: 'Ensure the goal is attainable with effort', icon: Rocket },
              { letter: 'R', word: 'Relevant', desc: 'Align with your broader objectives and values', icon: Brain },
              { letter: 'T', word: 'Time-bound', desc: 'Set a realistic timeframe for achievement', icon: Clock }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="text-orange-400 mb-4" size={40} />
                <h3 className="text-2xl font-semibold mb-3">
                  <span className="text-orange-400 mr-2">{item.letter}</span>
                  {item.word}
                </h3>
                <p className="text-blue-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6">Your Goal Setting Journey</h2>
          <Image 
            src="/college-goal-setting-journey.webp"
            alt="Goal setting journey"
            width={1200}
            height={600}
            className="rounded-xl shadow-2xl mb-8"
          />
          <p className="text-xl text-blue-100 mb-6">
            Our comprehensive goal setting course will guide you through:
          </p>
          <ol className="list-decimal list-inside space-y-4 text-lg text-blue-100">
            <li>Understanding the psychology of goal setting</li>
            <li>Crafting SMART goals for different areas of your life</li>
            <li>Developing action plans to achieve your goals</li>
            <li>Overcoming common obstacles and staying motivated</li>
            <li>Tracking progress and adjusting goals as needed</li>
          </ol>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6">Success Stories</h2>
          <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-xl">
            <blockquote className="text-xl text-blue-100 italic mb-4">
              "GuruAvatar's goal setting course transformed my approach to personal development. 
              I've achieved more in the past six months than in the previous two years combined!"
            </blockquote>
            <p className="text-right text-lg text-blue-300">- Sarah J., Entrepreneur</p>
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link href="/courses/goal-setting">
            <motion.button 
              className="bg-orange-500 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Goal Setting Mastery
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}