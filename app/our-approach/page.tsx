'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Zap, Repeat, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const approachSections = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Our advanced AI algorithms create personalized learning paths, adapting in real-time to each student's progress and learning style.",
    link: "/our-approach/ai-powered-learning",
    imageSrc: "/images/our-approach/ai-learning-illustration.webp" // Replace with the actual image path
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "We connect students with industry professionals, providing guidance, inspiration, and real-world insights to enhance their learning journey.",
    link: "/our-approach/expert-mentorship",
    imageSrc: "/images/our-approach/expert-mentorship-illustration.webp" // Replace with the actual image path
  },
  {
    icon: Zap,
    title: "Mindfulness Integration",
    description: "By incorporating mindfulness techniques, we help students enhance focus, reduce stress, and improve overall well-being.",
    link: "/our-approach/mindfulness-integration",
    imageSrc: "/images/our-approach/mindfulness-illustration.webp" // Replace with the actual image path
  },
  {
    icon: Repeat,
    title: "Habit Formation",
    description: "We employ scientifically-backed methods to help students build lasting habits that support continuous learning and personal growth.",
    link: "/our-approach/habit-formation",
    imageSrc: "/images/our-approach/habit-formation-illustration.webp" // Replace with the actual image path
  }
];

export default function OurApproachPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Approach to Revolutionary Education
        </motion.h1>

        <motion.p 
          className="text-xl mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At GuruAvatar, we're pioneering a holistic, technology-enhanced approach to education. Our innovative methodology combines cutting-edge AI with time-honored practices to create a truly transformative learning experience.
        </motion.p>

        {/* Main image for Our Approach page */}
        <div className="text-center mb-12">
          <Image 
            src="/images/our-approach/our-approach.webp" // Replace with the actual path to the overall image
            alt="Holistic Educational Approach"
            width={800}
            height={400}
            className="rounded-lg mx-auto"
          />
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">The Four Pillars of GuruAvatar</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {approachSections.map((section, index) => (
              <Link href={section.link} key={index}>
                <motion.div 
                  className="bg-white bg-opacity-10 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image 
                    src={section.imageSrc}
                    alt={section.title}
                    width={400}
                    height={225}
                    className="rounded-lg mb-4 w-full h-40 object-cover"
                  />
                  <section.icon className="w-12 h-12 text-blue-300 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-gray-300">{section.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">The GuruAvatar Difference</h2>
          <motion.div 
            className="bg-white bg-opacity-10 p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-lg mb-4">
              What sets GuruAvatar apart is our commitment to providing a 360-degree educational experience. We don't just focus on academic knowledge; we nurture the whole individual:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong className="text-white">Personalized Learning:</strong> Our AI adapts to each student's unique needs and learning style.</li>
              <li><strong className="text-white">Real-World Relevance:</strong> Expert mentors bridge the gap between theory and practice.</li>
              <li><strong className="text-white">Emotional Intelligence:</strong> Mindfulness practices foster self-awareness and emotional regulation.</li>
              <li><strong className="text-white">Lifelong Skills:</strong> We instill habits that support continuous growth and adaptability.</li>
            </ul>
          </motion.div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Vision for the Future of Education</h2>
          <motion.p 
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            At GuruAvatar, we envision a world where quality education is accessible to all, regardless of geographical or economic barriers. Our approach is designed to:
          </motion.p>
          <motion.ul 
            className="list-disc list-inside space-y-2 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <li>Democratize access to world-class education</li>
            <li>Foster a love for lifelong learning</li>
            <li>Prepare students for the challenges of the 21st century</li>
            <li>Nurture not just knowledgeable, but emotionally intelligent and adaptable individuals</li>
            <li>Create a global community of learners and mentors</li>
          </motion.ul>
        </section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Join the Education Revolution</h2>
          <p className="text-xl mb-8">
            Experience the future of learning with GuruAvatar. Together, we can transform education and empower the next generation of learners.
          </p>
          <Link href="/get-started" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-flex items-center">
            <BookOpen className="mr-2" />
            Start Your Learning Journey
          </Link>
        </motion.section>
      </div>
    </div>
  );
}