import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Target, Zap, BookOpen } from 'lucide-react';

export default function ImpactAndFuture() {
  return (
    <section className="mb-16">
      <motion.h2
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Impact and Vision for the Future
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Transforming Lives Through Education</h3>
        <p className="text-lg mb-4">
          Since its inception, GuruAvatar has been committed to creating a lasting impact on education in India and beyond. Our innovative approach, combining AI-powered personalized learning with mindfulness practices and expert mentorship, has already begun to show remarkable results:
        </p>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>Reached over 100,000 students across 50 countries</li>
          <li>Partnered with 200+ educational institutions</li>
          <li>Provided 10,000+ hours of free mentorship</li>
          <li>Improved academic performance by an average of 35% among our users</li>
          <li>Integrated mindfulness practices in 500+ classrooms</li>
          <li>Developed AI-powered learning modules for 20+ subjects</li>
        </ul>
        <p className="text-lg mb-4">
          These numbers, while impressive, only tell part of the story. The true impact of GuruAvatar can be seen in the individual stories of transformation - students discovering their passion for learning, developing critical thinking skills, and building the confidence to pursue their dreams.
        </p>
      </motion.div>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Our Vision for the Future</h3>
        <p className="text-lg mb-4">
          As we look to the future, our vision for GuruAvatar is bolder and more ambitious than ever. We aim to:
        </p>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>Expand our reach to serve over 1 million students globally by 2025</li>
          <li>Develop advanced AI modules for personalized STEM education, with a focus on emerging technologies</li>
          <li>Launch a global peer-to-peer mentorship program, connecting students across continents</li>
          <li>Implement mindfulness practices in 5,000+ schools worldwide</li>
          <li>Create a comprehensive digital curriculum aligned with international standards, adaptable to local contexts</li>
          <li>Establish a research division to continually innovate in the field of educational technology</li>
          <li>Partner with governments and NGOs to bring quality education to underserved communities</li>
        </ul>
        <p className="text-lg mb-4">
          Our ultimate goal is not just to improve educational outcomes, but to nurture a generation of lifelong learners who are equipped to tackle the complex challenges of the 21st century. We envision a world where every student, regardless of their background, has access to personalized, high-quality education that nurtures their unique potential.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Join Our Mission</h3>
        <p className="text-lg mb-6">
          As a non-profit organization, we rely on the support of individuals and organizations who share our vision. There are many ways you can contribute to our mission:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/donate" className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 flex items-center justify-center">
            <Zap className="mr-2" /> Donate
          </Link>
          <Link href="/volunteer" className="bg-teal-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300 flex items-center justify-center">
            <Users className="mr-2" /> Volunteer
          </Link>
          <Link href="/partner" className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300 flex items-center justify-center">
            <Target className="mr-2" /> Partner With Us
          </Link>
        </div>
      </motion.div>

      <motion.section 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6">Be Part of the GuruAvatar Revolution</h2>
        <p className="text-xl mb-8">
          Whether you're a student, educator, tech enthusiast, or simply someone who believes in the power of education to transform lives, there's a place for you in the GuruAvatar community. Together, we can create a future where quality education is not a privilege, but a right accessible to all.
        </p>
        <Link href="/get-involved" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-orange-600 hover:to-pink-600 transition duration-300 inline-flex items-center">
          <BookOpen className="mr-2" /> Get Involved Today
        </Link>
      </motion.section>
    </section>
  );
}