'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Rocket, ChevronRight, TrendingUp, Users, Briefcase, Award, Target } from 'lucide-react';

export default function CareerAdvancementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/expert-mentorship/benefits" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8 transition duration-300">
          <ChevronRight className="mr-2 rotate-180" /> Back to Benefits
        </Link>
        
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Rocket className="w-12 h-12 mr-4 text-orange-400" />
          Career Advancement: Skyrocket Your Professional Journey
        </motion.h1>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Mentorship is a powerful catalyst for career growth. At GuruAvatar, we connect you with industry leaders who can guide you towards your professional goals, help you navigate career challenges, and open doors to new opportunities.
        </motion.p>

        <motion.div 
          className="mb-12 bg-white bg-opacity-10 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">How Mentorship Accelerates Your Career</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <TrendingUp className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" />
              <span><strong className="text-green-400">Strategic Career Planning:</strong> Get expert guidance on plotting your career trajectory and making informed decisions.</span>
            </li>
            <li className="flex items-start">
              <Users className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" />
              <span><strong className="text-green-400">Industry Insights:</strong> Gain invaluable insider knowledge about your field, upcoming trends, and hidden opportunities.</span>
            </li>
            <li className="flex items-start">
              <Briefcase className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" />
              <span><strong className="text-green-400">Skill Enhancement:</strong> Develop the critical skills and competencies needed to advance in your chosen career path.</span>
            </li>
            <li className="flex items-start">
              <Award className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" />
              <span><strong className="text-green-400">Personal Branding:</strong> Learn how to effectively showcase your talents and stand out in a competitive job market.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Career Advancement Strategies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Goal Setting & Achievement</h3>
              <p>Work with your mentor to set ambitious yet attainable career goals and create actionable plans to achieve them.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Leadership Development</h3>
              <p>Cultivate essential leadership skills to prepare for management and executive roles.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Negotiation Mastery</h3>
              <p>Learn effective negotiation techniques for salary discussions, promotions, and project leadership.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Career Pivoting</h3>
              <p>Get expert guidance on successfully transitioning to new roles or industries.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
          <div className="bg-white bg-opacity-10 rounded-xl p-6">
            <blockquote className="text-lg italic mb-4">
              "My GuruAvatar mentor didn't just help me land a job; they helped me build a career. Within 18 months of starting the program, I transitioned from a junior developer role to leading a team at a Fortune 500 company. The strategic advice and industry insights were game-changers."
            </blockquote>
            <p className="text-right">- Emily L., Senior Software Engineer</p>
          </div>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">The GuruAvatar Career Advancement Process</h2>
          <div className="relative">
            {[
              { icon: Target, title: "Career Assessment", description: "Identify your strengths, weaknesses, and long-term career aspirations" },
              { icon: Users, title: "Mentor Matching", description: "Connect with mentors who have succeeded in your desired career path" },
              { icon: TrendingUp, title: "Strategic Planning", description: "Develop a customized career advancement plan with your mentor" },
              { icon: Briefcase, title: "Skill Development", description: "Acquire the specific skills and experiences needed for your target roles" },
              { icon: Rocket, title: "Career Acceleration", description: "Leverage your mentor's network and insights to fast-track your career growth" }
            ].map((step, index) => (
              <div key={index} className="flex mb-8 items-start">
                <div className="bg-orange-500 rounded-full p-3 mr-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Ready to Accelerate Your Career?</h2>
          <p className="text-xl mb-8">
            Take the first step towards rapid career advancement with expert guidance from industry leaders.
          </p>
          <Link href="/expert-mentorship/find-mentor" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block">
            Find Your Career Mentor
          </Link>
        </motion.div>
      </div>
    </div>
  );
}