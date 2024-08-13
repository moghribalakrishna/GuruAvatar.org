import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Target, Zap, BookOpen, Globe, ChartBar } from 'lucide-react';

// Define the prop types
interface ImpactMetricProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: string | number;
  description: string;
}

const ImpactMetric: React.FC<ImpactMetricProps> = ({ icon: Icon, value, description }) => (
  <motion.div 
    className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
  >
    <Icon className="w-12 h-12 text-blue-500" />
    <h3 className="mt-4 text-2xl font-bold">{value}</h3>
    <p className="mt-2 text-gray-500">{description}</p>
  </motion.div>
);

// Define the prop types for VisionItem
interface VisionItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const VisionItem: React.FC<VisionItemProps> = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="flex items-start p-6 bg-white bg-opacity-5 rounded-lg shadow-lg"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="w-12 h-12 text-blue-500" />
    <div className="ml-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  </motion.div>
);

export default function ImpactAndFuture() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-teal-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Impact and Vision for the Future
        </motion.h2>

        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-center mb-8">Transforming Lives Through Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImpactMetric icon={Users} value="100,000+" description="Students Reached" />
            <ImpactMetric icon={Globe} value="50+" description="Countries Impacted" />
            <ImpactMetric icon={ChartBar} value="35%" description="Avg. Performance Improvement" />
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-center mb-8">Our Vision for 2025</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VisionItem 
              icon={Target}
              title="Reach 1 Million Students"
              description="Expand our platform to serve learners across the globe, breaking down geographical and economic barriers."
            />
            <VisionItem 
              icon={Zap}
              title="Advanced AI Integration"
              description="Develop cutting-edge AI modules for personalized STEM education, adapting to each student's unique learning style."
            />
            <VisionItem 
              icon={Users}
              title="Global Mentorship Network"
              description="Connect students with industry leaders and experts, fostering a community of lifelong learners and innovators."
            />
            <VisionItem 
              icon={BookOpen}
              title="Comprehensive Digital Curriculum"
              description="Create a dynamic, AI-powered curriculum that evolves with global educational standards and future workforce needs."
            />
          </div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-3xl font-semibold mb-6">Join Our Mission</h3>
          <p className="text-xl mb-8">Together, we can revolutionize education and empower the next generation of global leaders and innovators.</p>
          <a 
            href="/donate" 
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300"
          >
            Support Our Vision
          </a>
        </motion.div>
      </div>
    </section>
  );
}