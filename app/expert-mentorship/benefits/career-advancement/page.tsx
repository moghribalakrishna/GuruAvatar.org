'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Rocket, ChevronRight, TrendingUp, Users, Briefcase, Award, Target } from 'lucide-react';

export default function CareerAdvancementPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl font-bold mb-6 flex items-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Rocket className="w-12 h-12 mr-4 text-orange-500" />
          Career Advancement: Skyrocket Your Professional Journey
        </motion.h1>

        <div className="mb-8 rounded-xl overflow-hidden">
          <Image src="/images/expert-mentorship/career-advancement.webp" alt="Career Advancement" width={1200} height={600} className="w-full" />
        </div>

        <motion.p className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Mentorship is a powerful catalyst for career growth. At GuruAvatar, we connect you with industry leaders who can guide you towards your professional goals, help you navigate career challenges, and open doors to new opportunities.
        </motion.p>

        <motion.div className="mb-12 bg-gray-50 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">How Mentorship Accelerates Your Career</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <TrendingUp className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Strategic Career Planning:</strong> Get expert guidance on plotting your career trajectory and making informed decisions.</span>
            </li>
            <li className="flex items-start">
              <Users className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Industry Insights:</strong> Gain invaluable insider knowledge about your field, upcoming trends, and hidden opportunities.</span>
            </li>
            <li className="flex items-start">
              <Briefcase className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Skill Enhancement:</strong> Develop the critical skills and competencies needed to advance in your chosen career path.</span>
            </li>
            <li className="flex items-start">
              <Award className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Personal Branding:</strong> Learn how to effectively showcase your talents and stand out in a competitive job market.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Career Advancement Strategies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Goal Setting & Achievement</h3>
              <p className="text-gray-600">Work with your mentor to set ambitious yet attainable career goals and create actionable plans to achieve them.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Leadership Development</h3>
              <p className="text-gray-600">Cultivate essential leadership skills to prepare for management and executive roles.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Negotiation Mastery</h3>
              <p className="text-gray-600">Learn effective negotiation techniques for salary discussions, promotions, and project leadership.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Career Pivoting</h3>
              <p className="text-gray-600">Get expert guidance on successfully transitioning to new roles or industries.</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Success Stories</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <blockquote className="text-lg italic mb-4 text-gray-600">
              "My GuruAvatar mentor didn't just help me land a job; they helped me build a career. Within 18 months of starting the program, I transitioned from a junior developer role to leading a team at a Fortune 500 company. The strategic advice and industry insights were game-changers."
            </blockquote>
            <p className="text-right text-gray-700">- Emily L., Senior Software Engineer</p>
          </div>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">The GuruAvatar Career Advancement Process</h2>
          <div className="relative">
            {[
              { icon: Target, title: "Career Assessment", description: "Identify your strengths, weaknesses, and long-term career aspirations" },
              { icon: Users, title: "Mentor Matching", description: "Connect with mentors who have succeeded in your desired career path" },
              { icon: TrendingUp, title: "Strategic Planning", description: "Develop a customized career advancement plan with your mentor" },
              { icon: Briefcase, title: "Skill Development", description: "Acquire the specific skills and experiences needed for your target roles" },
              { icon: Rocket, title: "Career Acceleration", description: "Leverage your mentor's network and insights to fast-track your career growth" }
            ].map((step, index) => (
              <div key={index} className="flex mb-8 items-start">
                <div className="bg-orange-100 rounded-full p-3 mr-4">
                  <step.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Career Advancement in Action</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <Image src="/images/expert-mentorship/career-advancement.webp" alt="Career Advancement in Action" width={800} height={400} className="w-full rounded-lg mb-4" />
            <p className="text-gray-600">
              Our career advancement strategies are designed to help you climb the professional ladder with confidence. Through personalized mentorship, skill development, and strategic networking, you'll be well-equipped to seize new opportunities and achieve your career goals.
            </p>
          </div>
        </motion.div>

        <motion.div className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Ready to Accelerate Your Career?</h2>
          <p className="text-xl mb-8 text-gray-600">
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