'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Brain, ChevronRight, Target, Layers, Compass, Award, TrendingUp } from 'lucide-react';

export default function SkillDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl font-bold mb-6 flex items-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Brain className="w-12 h-12 mr-4 text-purple-500" />
          Skill Development: Mastery Through Mentorship
        </motion.h1>

        <div className="mb-8 rounded-xl overflow-hidden">
          <Image src="/images/expert-mentorship/skill-development.webp" alt="Skill Development" width={1200} height={600} className="w-full" />
        </div>

        <motion.p className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          In today's rapidly evolving world, continuous skill development is crucial for personal and professional success. Our expert mentorship program is designed to help you acquire, refine, and master the skills that matter most in your field.
        </motion.p>

        <motion.div className="mb-12 bg-gray-50 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">The GuruAvatar Approach to Skill Development</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Target className="w-6 h-6 text-purple-500 mr-2 flex-shrink-0" />
              <span><strong className="text-purple-600">Targeted Learning:</strong> Focus on the skills that will have the biggest impact on your career or personal growth.</span>
            </li>
            <li className="flex items-start">
              <Layers className="w-6 h-6 text-purple-500 mr-2 flex-shrink-0" />
              <span><strong className="text-purple-600">Layered Skill Building:</strong> Develop foundational skills and progressively build towards advanced competencies.</span>
            </li>
            <li className="flex items-start">
              <Compass className="w-6 h-6 text-purple-500 mr-2 flex-shrink-0" />
              <span><strong className="text-purple-600">Guided Practice:</strong> Learn from experts who provide hands-on exercises and real-world applications.</span>
            </li>
            <li className="flex items-start">
              <TrendingUp className="w-6 h-6 text-purple-500 mr-2 flex-shrink-0" />
              <span><strong className="text-purple-600">Continuous Improvement:</strong> Regular feedback and assessments ensure you're always progressing and refining your skills.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Key Areas of Skill Development</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Technical Skills</h3>
              <p className="text-gray-600">Master cutting-edge technologies and programming languages relevant to your field.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Soft Skills</h3>
              <p className="text-gray-600">Enhance communication, leadership, and emotional intelligence for career success.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Problem-Solving</h3>
              <p className="text-gray-600">Develop critical thinking and analytical skills to tackle complex challenges.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Creativity and Innovation</h3>
              <p className="text-gray-600">Cultivate creative thinking and learn to generate innovative solutions.</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">The Power of Expert-Guided Skill Development</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <blockquote className="text-lg italic mb-4 text-gray-600">
              "The skill development program at GuruAvatar transformed my career. My mentor helped me identify the critical skills I needed to advance in my field and provided a structured path to mastery. Within months, I was taking on projects I never thought I'd be capable of handling!"
            </blockquote>
            <p className="text-right text-gray-700">- Michael R., Data Scientist</p>
          </div>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Skill Development Process</h2>
          <div className="relative">
            {[
              { icon: Target, title: "Skill Assessment", description: "Identify your current skill level and areas for improvement" },
              { icon: Compass, title: "Customized Learning Path", description: "Develop a tailored plan to acquire and enhance key skills" },
              { icon: Layers, title: "Guided Practice", description: "Learn through hands-on exercises and real-world projects" },
              { icon: TrendingUp, title: "Progress Tracking", description: "Monitor your skill development with advanced analytics" },
              { icon: Award, title: "Skill Certification", description: "Earn recognized certifications as you master new skills" }
            ].map((step, index) => (
              <div key={index} className="flex mb-8 items-start">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <step.icon className="w-6 h-6 text-purple-500" />
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Skill Development in Action</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <Image src="/images/expert-mentorship/skill-development.webp" alt="Skill Development in Action" width={800} height={400} className="w-full rounded-lg mb-4" />
            <p className="text-gray-600">
              Our skill development program is designed to help you acquire and master the competencies essential for your success. Through expert mentorship, hands-on projects, and continuous feedback, you'll see tangible growth in your abilities and confidence.
            </p>
          </div>
        </motion.div>

        <motion.div className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Ready to Elevate Your Skills?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Start your journey towards mastery with personalized guidance from industry experts.
          </p>
          <Link href="/expert-mentorship/find-mentor" className="bg-purple-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-purple-600 transition duration-300 inline-block">
            Begin Your Skill Development Journey
          </Link>
        </motion.div>
      </div>
    </div>
  );
}