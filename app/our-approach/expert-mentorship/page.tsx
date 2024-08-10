'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Target, Briefcase, Globe, Zap, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function ExpertMentorshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Users className="w-12 h-12 mr-4 text-blue-300" />
          Expert Mentorship: Bridging Knowledge and Experience
        </motion.h1>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At GuruAvatar, we believe that true education goes beyond textbooks and lectures. Our Expert Mentorship program connects you with industry leaders and seasoned professionals, providing invaluable insights, guidance, and real-world perspective to complement your learning journey.
        </motion.p>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image 
            src="/images/our-approach/expert-mentorship-illustration.webp" 
            alt="Expert Mentorship Illustration" 
            width={800} 
            height={400} 
            className="rounded-xl shadow-2xl"
          />
        </motion.div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Why Expert Mentorship Matters</h2>
          <p className="text-lg mb-4">
            Expert mentorship is the secret ingredient that turns knowledge into wisdom. Here's how our mentorship program enhances your educational experience:
          </p>
          <ul className="space-y-4">
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Star className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-yellow-400">Real-World Insights:</strong> Our mentors bring years of industry experience, offering perspectives that go beyond theoretical knowledge.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Target className="w-6 h-6 text-green-400 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-green-400">Personalized Guidance:</strong> Get tailored advice on your career path, skill development, and personal growth.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Briefcase className="w-6 h-6 text-pink-400 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-pink-400">Networking Opportunities:</strong> Connect with industry professionals and build relationships that can open doors in your future career.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Globe className="w-6 h-6 text-purple-400 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-purple-400">Global Perspective:</strong> Our mentors come from diverse backgrounds, offering a global perspective on your field of study.</span>
            </motion.li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">How Our Mentorship Program Works</h2>
          <p className="text-lg mb-4">
            We've designed our mentorship program to be flexible, engaging, and impactful:
          </p>
          <ol className="space-y-4 list-decimal list-inside">
            <motion.li 
              className="flex items-start"
              initial={{ opacity:0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span><strong className="text-blue-300">AI-Powered Matching:</strong> Our advanced algorithms match you with mentors based on your goals, interests, and learning style.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <span><strong className="text-green-300">Regular One-on-One Sessions:</strong> Engage in personalized video calls with your mentor to discuss your progress, challenges, and aspirations.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <span><strong className="text-yellow-300">Group Mentorship Circles:</strong> Participate in small group sessions with peers and mentors to foster collaborative learning and networking.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <span><strong className="text-pink-300">Mentorship Projects:</strong> Work on real-world projects under your mentor's guidance, building practical skills and a portfolio.</span>
            </motion.li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Meet Our Mentors</h2>
          <p className="text-lg mb-6">
            Our mentors are more than just successful professionals; they're passionate about nurturing the next generation of leaders and innovators. Here's a glimpse into our diverse mentor network:
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { name: "Dr. Sarah Chen", role: "AI Research Scientist", company: "TechGiant Inc.", image: "/images/mentor-sarah.webp" },
              { name: "Michael Rodriguez", role: "Senior Software Engineer", company: "InnovateTech", image: "/images/mentor-michael.webp" },
              { name: "Aisha Patel", role: "Entrepreneurship Coach", company: "StartUp Accelerator", image: "/images/mentor-aisha.webp" },
              { name: "Dr. James Thompson", role: "Climate Scientist", company: "GreenEarth Institute", image: "/images/mentor-james.webp" }
            ].map((mentor, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-10 p-4 rounded-xl flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <Image 
                  src={mentor.image} 
                  alt={mentor.name} 
                  width={80} 
                  height={80} 
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{mentor.name}</h3>
                  <p className="text-sm text-gray-300">{mentor.role}</p>
                  <p className="text-sm text-gray-400">{mentor.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Success Stories</h2>
          <div className="bg-white bg-opacity-10 p-6 rounded-xl">
            <blockquote className="text-lg italic mb-4">
              "The mentorship I received through GuruAvatar was transformative. My mentor not only helped me navigate complex technical concepts but also guided me in making crucial career decisions. Today, I'm working on cutting-edge AI projects, and I owe much of my success to the guidance I received."
            </blockquote>
            <p className="text-right">- Alex J., Data Scientist at AI Innovations</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Become a Mentor</h2>
          <p className="text-lg mb-4">
            Are you an experienced professional passionate about shaping the future of education? Join our mentor network and make a lasting impact on the next generation of learners.
          </p>
          <a href="/become-mentor" className="text-orange-400 hover:text-orange-300 transition duration-300 flex items-center">
            Learn more about becoming a mentor <Zap className="ml-2" />
          </a>
        </section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Experience the Power of Expert Mentorship</h2>
          <p className="text-xl mb-8">
            Ready to supercharge your learning with guidance from industry experts? Join GuruAvatar today and connect with mentors who can help shape your future.
          </p>
          <a href="/get-started" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-flex items-center">
            <BookOpen className="mr-2" />
            Start Your Mentorship Journey
          </a>
        </motion.section>
      </div>
    </div>
  );
}