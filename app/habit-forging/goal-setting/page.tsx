'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Target, Brain, Rocket, Clock } from 'lucide-react';

export default function GoalSettingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/habit-forging" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
          <ArrowLeft className="mr-2" /> Back to Habit Forge
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center">
          <span className="text-5xl mr-4">🎯</span>
          Mastering Goal Setting
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Why Goal Setting Matters</h2>
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="md:w-1/2 mb-4 md:mb-0 md:mr-6">
              <Image 
                src="/college-goal-setting-collaboration.webp" // Replace with actual image path
                alt="Person setting goals"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-300 mb-4">
                Effective goal setting is the cornerstone of personal and professional growth. 
                It provides direction, motivation, and a clear measure of success. By mastering 
                the art of goal setting, you'll be able to:
              </p>
              <ul className="space-y-2">
                {['Focus your efforts on what truly matters', 
                  'Increase your motivation and commitment',
                  'Track your progress and celebrate achievements',
                  'Overcome procrastination and inertia'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
  <h2 className="text-3xl font-semibold mb-4">The SMART Framework</h2>
  <p className="text-gray-300 mb-6">
    At GuruAvatar, we teach goal setting using the SMART framework. This proven 
    methodology ensures that your goals are clear, achievable, and impactful.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { letter: 'S', word: 'Specific', desc: 'Clearly define what you want to accomplish', icon: Target },
      { letter: 'M', word: 'Measurable', desc: 'Include concrete criteria for measuring progress', icon: CheckCircle },
      { letter: 'A', word: 'Achievable', desc: 'Ensure the goal is attainable with effort', icon: Rocket },
      { letter: 'R', word: 'Relevant', desc: 'Align with your broader objectives and values', icon: Brain },
      { letter: 'T', word: 'Time-bound', desc: 'Set a realistic timeframe for achievement', icon: Clock }
    ].map((item, index) => (
      <div key={index} className="bg-gray-800 p-6 rounded-lg">
        <item.icon className="text-blue-400 mb-2" size={32} />
        <h3 className="text-xl font-semibold mb-2">
          <span className="text-blue-400 mr-2">{item.letter}</span>
          {item.word}
        </h3>
        <p className="text-gray-300">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Your Goal Setting Journey</h2>
          <Image 
            src="/college-goal-setting-journey.webp" // Replace with actual image path
            alt="Goal setting journey"
            width={800}
            height={400}
            className="rounded-lg mb-6"
          />
          <p className="text-gray-300 mb-4">
            Our comprehensive goal setting course will guide you through:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Understanding the psychology of goal setting</li>
            <li>Crafting SMART goals for different areas of your life</li>
            <li>Developing action plans to achieve your goals</li>
            <li>Overcoming common obstacles and staying motivated</li>
            <li>Tracking progress and adjusting goals as needed</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Success Stories</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <blockquote className="text-gray-300 italic mb-4">
              "GuruAvatar's goal setting course transformed my approach to personal development. 
              I've achieved more in the past six months than in the previous two years combined!"
            </blockquote>
            <p className="text-right text-gray-400">- Sarah J., Entrepreneur</p>
          </div>
        </section>

        <div className="mt-8">
          <Link href="/courses/goal-setting">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Start Your Goal Setting Mastery
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}