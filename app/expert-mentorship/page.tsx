'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Zap, Target, BookOpen, Brain, Rocket, ArrowRight } from 'lucide-react';

interface ClickableCardProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  iconColor?: string;
}

const ClickableCard: React.FC<ClickableCardProps> = ({ href, icon: Icon, title, description, iconColor }) => (
  <Link href={href}>
    <motion.div
      className="bg-white bg-opacity-10 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg group relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className={`w-12 h-12 ${iconColor} mb-4`} />
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-blue-100">{description}</p>
      <ArrowRight className="absolute bottom-4 right-4 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
    </motion.div>
  </Link>
);

export default function ExpertMentorshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white overflow-hidden relative p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Expert Mentorship Program
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-center max-w-4xl mx-auto text-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Connect with industry leaders and experienced professionals. 
          Gain invaluable insights and guidance tailored to your learning journey.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ClickableCard
            href="/expert-mentorship/find-mentor"
            icon={Users}
            title="Find a Mentor"
            description="Search our diverse pool of expert mentors and find the perfect match for your goals."
            iconColor="text-orange-400"
          />
          <ClickableCard
            href="/expert-mentorship/benefits"
            icon={Zap}
            title="Benefits of Mentorship"
            description="Discover how expert mentorship can accelerate your learning and career growth."
            iconColor="text-yellow-400"
          />
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Expert Mentorship?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ClickableCard
              href="/expert-mentorship/benefits/personalized-guidance"
              icon={Target}
              title="Personalized Guidance"
              description="Get tailored advice and strategies specific to your goals and challenges."
              iconColor="text-teal-300"
            />
            <ClickableCard
              href="/expert-mentorship/benefits/accelerated-learning"
              icon={BookOpen}
              title="Accelerated Learning"
              description="Fast-track your progress with insights from experienced professionals."
              iconColor="text-teal-300"
            />
            <ClickableCard
              href="/expert-mentorship/benefits/skill-development"
              icon={Brain}
              title="Skill Enhancement"
              description="Rapidly develop both technical and soft skills crucial for success."
              iconColor="text-teal-300"
            />
          </div>
        </section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl mb-8">
            Join our expert mentorship program and unlock your full potential.
          </p>
        </motion.section>

        {/* New CTAs Section */}
        <motion.section 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Take the Next Step</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ClickableCard
              href="/expert-mentorship/find-mentor"
              icon={Users}
              title="Find a Mentor"
              description="Connect with expert mentors tailored to your goals and interests."
              iconColor="text-orange-400"
            />
            <ClickableCard
              href="/expert-mentorship/become-mentor"
              icon={Rocket}
              title="Become a Mentor"
              description="Share your expertise and make a difference in students' lives."
              iconColor="text-yellow-400"
            />
            <ClickableCard
              href="/forms/free-consultation"
              icon={Zap}
              title="Free Consultation"
              description="Schedule a free session to explore how mentorship can benefit you."
              iconColor="text-green-400"
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}