'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ClipboardCheck, TrendingUp, Target, Zap, BarChart } from 'lucide-react';

export default function AdaptiveAssessmentsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl font-bold mb-6 flex items-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ClipboardCheck className="w-12 h-12 mr-4 text-green-500" />
          Adaptive Assessments: Precision in Evaluation
        </motion.h1>

        <div className="mb-8 rounded-xl overflow-hidden">
          <Image src="/images/ai-learning/adaptive-assessments.webp" alt="Adaptive Assessments" width={1200} height={600} className="w-full" />
        </div>

        <motion.p className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience a new era of assessments that evolve in real-time based on your responses. Our AI-powered adaptive assessments provide a more accurate measure of your knowledge and skills while reducing test anxiety and time spent on irrelevant questions.
        </motion.p>

        <motion.div className="mb-12 bg-gray-50 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Key Features of Adaptive Assessments</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <TrendingUp className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Dynamic Difficulty Adjustment:</strong> Questions adapt in real-time based on your performance, ensuring an optimal challenge level.</span>
            </li>
            <li className="flex items-start">
              <Target className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Precision Measurement:</strong> Accurately pinpoint your knowledge level with fewer questions than traditional tests.</span>
            </li>
            <li className="flex items-start">
              <Zap className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Efficient Testing:</strong> Reduce testing time by focusing on questions that provide the most information about your abilities.</span>
            </li>
            <li className="flex items-start">
              <BarChart className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Detailed Insights:</strong> Receive comprehensive analytics on your performance, including strengths, weaknesses, and suggested areas for improvement.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">How Adaptive Assessments Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Initial Calibration</h3>
              <p className="text-gray-600">The assessment begins with questions of moderate difficulty to gauge your general knowledge level.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Real-time Adaptation</h3>
              <p className="text-gray-600">As you answer questions, the AI adjusts the difficulty and content based on your responses.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Precision Measurement</h3>
              <p className="text-gray-600">The system narrows down your ability level with each question, providing a more accurate assessment.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Comprehensive Analysis</h3>
              <p className="text-gray-600">After the assessment, you receive detailed insights into your performance and personalized learning recommendations.</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Benefits of Adaptive Assessments</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>More accurate measurement of knowledge and skills</li>
              <li>Reduced test anxiety due to personalized difficulty levels</li>
              <li>Shorter testing times without compromising accuracy</li>
              <li>Immediate feedback and personalized learning recommendations</li>
              <li>Fairer assessment for students of all ability levels</li>
              <li>Deeper insights into learning progress and areas for improvement</li>
            </ul>
          </div>
        </motion.div>

        {/* <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Adaptive Assessment in Action</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <Image src="/images/ai-learning/adaptive-assessment-demo.gif" alt="Adaptive Assessment Demo" width={800} height={400} className="w-full rounded-lg mb-4" />
            <p className="text-gray-600">
              Watch as our adaptive assessment system dynamically adjusts question difficulty based on the user's responses, providing a tailored and efficient testing experience.
            </p>
          </div>
        </motion.div> */}

        <motion.section className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Experience the Future of Assessments</h2>
          <p className="text-xl mb-8 text-gray-600">
            Try our adaptive assessments and discover a more accurate, efficient, and less stressful way to evaluate your knowledge and skills.
          </p>
          <Link href="/ai-learning/try-adaptive-assessment" className="bg-green-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-green-600 transition duration-300 inline-block">
            Take a Sample Adaptive Assessment
          </Link>
        </motion.section>
      </div>
    </div>
  );
}