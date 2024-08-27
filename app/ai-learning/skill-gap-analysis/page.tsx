'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Target, BarChart, TrendingUp, Compass } from 'lucide-react';

export default function SkillGapAnalysisPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl font-bold mb-6 flex items-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Search className="w-12 h-12 mr-4 text-indigo-500" />
          Skill Gap Analysis: Bridging Your Knowledge Gaps
        </motion.h1>

        <div className="mb-8 rounded-xl overflow-hidden">
          <Image src="/images/ai-learning/skill-gap-analysis.webp" alt="Skill Gap Analysis" width={1200} height={600} className="w-full" />
        </div>

        <motion.p className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Unlock your full potential with our AI-powered Skill Gap Analysis. Identify your strengths, pinpoint areas for improvement, and receive a personalized learning roadmap to achieve your goals.
        </motion.p>

        <motion.div className="mb-12 bg-gray-50 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Key Features of Skill Gap Analysis</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Target className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0" />
              <span><strong className="text-indigo-600">Comprehensive Assessment:</strong> Evaluate your skills across multiple domains with our in-depth analysis tools.</span>
            </li>
            <li className="flex items-start">
              <BarChart className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0" />
              <span><strong className="text-indigo-600">Visual Skill Mapping:</strong> See your skills visualized in intuitive charts and graphs for easy understanding.</span>
            </li>
            <li className="flex items-start">
              <TrendingUp className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0" />
              <span><strong className="text-indigo-600">Personalized Recommendations:</strong> Receive tailored suggestions for courses, resources, and activities to bridge your skill gaps.</span>
            </li>
            <li className="flex items-start">
              <Compass className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0" />
              <span><strong className="text-indigo-600">Career Path Alignment:</strong> Align your skill development with your career goals and industry requirements.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">How Skill Gap Analysis Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Initial Assessment</h3>
              <p className="text-gray-600">Complete a comprehensive skills assessment covering various domains relevant to your field.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">AI-Powered Analysis</h3>
              <p className="text-gray-600">Our AI system analyzes your results, comparing them to industry standards and your career goals.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Gap Identification</h3>
              <p className="text-gray-600">Receive a detailed report highlighting your strengths and areas where skills can be improved or developed.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Personalized Roadmap</h3>
              <p className="text-gray-600">Get a customized learning plan with specific recommendations to bridge your skill gaps effectively.</p>
            </div>
          </div>
        </motion.div>

      

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Benefits of Skill Gap Analysis</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Gain a clear understanding of your current skill set and proficiency levels</li>
              <li>Identify critical skills needed for career advancement or job transitions</li>
              <li>Receive a personalized learning plan tailored to your specific needs and goals</li>
              <li>Optimize your learning journey by focusing on the most impactful skill improvements</li>
              <li>Track your progress over time with regular reassessments and updated recommendations</li>
              <li>Align your skill development with industry trends and employer requirements</li>
              <li>Boost your confidence by recognizing and leveraging your existing strengths</li>
            </ul>
          </div>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Continuous Improvement</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <p className="text-gray-600 mb-4">
              Our Skill Gap Analysis is not a one-time assessment but an ongoing process of continuous improvement:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Regular reassessments to track your progress and identify new areas for growth</li>
              <li>Dynamic updating of your learning roadmap based on your evolving skills and goals</li>
              <li>Integration with our AI tutoring and real-time feedback systems for a cohesive learning experience</li>
              <li>Incorporation of industry trends and emerging skills to keep your skillset relevant and future-proof</li>
            </ul>
          </div>
        </motion.div>

        <motion.section className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Discover Your Path to Success</h2>
          <p className="text-xl mb-8 text-gray-600">
            Start your journey to personal and professional growth with our AI-powered Skill Gap Analysis. Uncover your potential and chart your course to success.
          </p>
          <Link href="/ai-learning/start-skill-gap-analysis" className="bg-indigo-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-indigo-600 transition duration-300 inline-block">
            Begin Your Skill Gap Analysis
          </Link>
        </motion.section>
      </div>
    </div>
  );
}