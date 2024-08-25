'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, Camera, Video, Maximize } from 'lucide-react';

const ComputerVisionPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Eye className="w-12 h-12 mr-4 text-blue-300" />
          Computer Vision
        </motion.h1>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore how AI can interpret and analyze visual information from the world. This module covers the techniques and algorithms used to enable machines to see and understand images and videos.
        </motion.p>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image src="/images/ai-masterclass/computer-vision-hero.webp" alt="Computer Vision" width={800} height={400} className="rounded-xl shadow-2xl" />
        </motion.div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Core Concepts</h2>
          <ul className="space-y-4">
            {[
              "Image processing and filtering techniques",
              "Feature detection and extraction",
              "Object detection and recognition",
              "Image segmentation",
              "3D computer vision and depth estimation",
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Camera className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Practical Applications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Eye, title: "Facial Recognition", description: "Develop a system for identifying and verifying faces in images and video" },
              { icon: Video, title: "Real-time Object Tracking", description: "Build an AI that can track objects in video streams" },
              { icon: Maximize, title: "Image Generation", description: "Create AI models capable of generating realistic images" },
              { icon: Camera, title: "Autonomous Navigation", description: "Implement computer vision for robotic navigation and mapping" },
            ].map((application, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <application.icon className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{application.title}</h3>
                <p className="text-gray-600">{application.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Link href="/ai-masterclass/register" className="bg-teal-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-teal-600 transition duration-300 inline-block">
            Enroll Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ComputerVisionPage;