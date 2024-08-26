'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { habitsData } from '../data/habits';

interface HabitPageProps {
  habitId: keyof typeof habitsData;
}

export default function HabitPage({ habitId }: HabitPageProps) {
  const habit = habitsData[habitId];

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/habit-forging" className="inline-flex items-center text-gray-700 hover:text-gray-600 mb-8 transition duration-300">
          <ArrowLeft className="mr-2" /> Back to Habit Forge
        </Link>
        
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-8 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-6xl mr-4">{habit.icon}</span>
          {habit.title}
        </motion.h1>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6">Why {habit.title} Matters</h2>
          <div className="flex flex-col lg:flex-row items-center mb-8">
            <div className="lg:w-1/2 mb-6 lg:mb-0 lg:mr-8">
              <Image 
                src={habit.imageSrc}
                alt={habit.title}
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-xl text-gray-700 mb-6">
                {habit.description}
              </p>
              <ul className="space-y-4">
                {habit.benefits.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-800">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6">Key Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {habit.keyPoints.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="text-orange-400 mb-4" size={40} />
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6">Your {habit.title} Journey</h2>
          <Image 
            src={habit.journeyImageSrc}
            alt={`${habit.title} journey`}
            width={1200}
            height={600}
            className="rounded-xl shadow-2xl mb-8"
          />
          <p className="text-xl text-gray-700 mb-6">
            Our comprehensive {habit.title.toLowerCase()} course will guide you through:
          </p>
          <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700">
            {habit.journeySteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>

        {habit.successStory && (
          <section className="mb-16">
            <h2 className="text-4xl font-semibold mb-6">Success Stories</h2>
            <div className="bg-gray-100 p-8 rounded-xl shadow-xl">
              <blockquote className="text-xl text-gray-700 italic mb-4">
                {habit.successStory.quote}
              </blockquote>
              <p className="text-right text-lg text-gray-800">- {habit.successStory.author}</p>
            </div>
          </section>
        )}

        <div className="mt-12 text-center">
          <Link href="/habit-forging/registration">
            <motion.button 
              className="bg-orange-500 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your {habit.title} Mastery
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}