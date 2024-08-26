'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, Target, Users, Rocket, Brain, ChartBar } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: "Personalized Guidance",
    description: "Receive tailored advice and strategies specific to your unique goals, challenges, and learning style.",
    link: "/expert-mentorship/benefits/personalized-guidance"
  },
  {
    icon: Zap,
    title: "Accelerated Learning",
    description: "Fast-track your progress by learning from the experiences and insights of industry experts.",
    link: "/expert-mentorship/benefits/accelerated-learning"
  },
  {
    icon: Users,
    title: "Expanded Network",
    description: "Gain access to your mentor's professional network, opening doors to new opportunities.",
    link: "/expert-mentorship/benefits/expanded-network"
  },
  {
    icon: Rocket,
    title: "Career Advancement",
    description: "Benefit from insider knowledge on industry trends, job market insights, and career strategies.",
    link: "/expert-mentorship/benefits/career-advancement"
  },
  {
    icon: Brain,
    title: "Skill Development",
    description: "Rapidly enhance both your technical and soft skills under the guidance of experienced professionals.",
    link: "/expert-mentorship/benefits/skill-development"
  },
  {
    icon: ChartBar,
    title: "Increased Confidence",
    description: "Build self-assurance through validation, constructive feedback, and support from your mentor.",
    link: "/expert-mentorship/benefits/increased-confidence"
  }
];

export default function MentorshipBenefitsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl font-bold mb-6 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Benefits of Expert Mentorship
        </motion.h1>
        <motion.p
          className="text-xl mb-12 text-center max-w-4xl mx-auto text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover how our expert mentorship program can transform your learning experience and accelerate your personal and professional growth.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Link href={benefit.link} key={index}>
              <motion.div
                className="bg-gray-50 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <benefit.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{benefit.title}</h2>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
        <motion.section
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
         <h2 className="text-3xl font-semibold mb-6 text-gray-800">Ready to Experience the Power of Mentorship?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Join our expert mentorship program and unlock your full potential today.
          </p>
          <Link href="/expert-mentorship/find-mentor" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block">
            Find Your Mentor
          </Link>
        </motion.section>
      </div>
    </div>
  );
}