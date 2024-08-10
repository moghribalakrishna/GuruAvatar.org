// File: app/ai-masterclass/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Brain, Zap, Users, Globe, Book, Code, Rocket, ChevronRight } from 'lucide-react';

const AIMasterclassPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Dive into the AI Revolution", image: "/images/ai-masterclass/hero-1.webp" },
    { title: "Learn from Industry Experts", image: "/images/ai-masterclass/hero-2.webp" },
    { title: "Build Real-World AI Projects", image: "/images/ai-masterclass/hero-3.webp" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-teal-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-6xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI Masterclass: Shaping the Future
        </motion.h1>

        {/* Hero Slider */}
        <div className="relative h-[60vh] mb-16 overflow-hidden rounded-2xl">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <Image src={slide.image} alt={slide.title} layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-5xl font-bold text-center">{slide.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Course Highlights */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Course Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Cutting-edge AI Concepts", description: "Dive deep into machine learning, neural networks, and more." },
              { icon: Code, title: "Hands-on Coding", description: "Build AI models from scratch using Python and TensorFlow." },
              { icon: Rocket, title: "Industry-Ready Projects", description: "Develop a portfolio of real-world AI applications." },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <highlight.icon className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Course Modules</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Foundations of AI", link: "/ai-masterclass/foundations", image: "/images/ai-masterclass/foundations-hero.webp" },
              { title: "Machine Learning Deep Dive", link: "/ai-masterclass/machine-learning", image: "/images/ai-masterclass/machine-learning-hero.webp" },
              { title: "Neural Networks & Deep Learning", link: "/ai-masterclass/neural-networks", image: "/images/ai-masterclass/neural-networks-hero.webp" },
              { title: "Natural Language Processing", link: "/ai-masterclass/nlp", image: "/images/ai-masterclass/nlp-hero.webp" },
              { title: "Computer Vision", link: "/ai-masterclass/computer-vision", image: "/images/ai-masterclass/computer-vision-hero.webp" },
              { title: "AI Ethics & Future Trends", link: "/ai-masterclass/ethics-and-trends", image: "/images/ai-masterclass/ai-ethics-trends-hero.webp" },
            ].map((module, index) => (
              <Link href={module.link} key={index}>
                <motion.div
                  className="bg-white bg-opacity-10 p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src={module.image} alt={module.title} layout="fill" objectFit="cover" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{module.title}</h3>
                  <ChevronRight className="ml-2 inline-block" />
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Instructor Spotlight */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Meet Your Instructor</h2>
          <div className="bg-white bg-opacity-10 p-8 rounded-xl flex flex-col md:flex-row items-center">
            <Image src="/founder-image.jpeg" alt="AI Instructor" width={300} height={300} className="rounded-full mb-6 md:mb-0 md:mr-8" />
            <div>
              <h3 className="text-3xl font-bold mb-4">Balakrishna Moghri</h3>
              <p className="text-xl mb-4">Founder & CTO of 2 Startups & Worked for Multiple Startups</p>
              <p className="text-gray-300 mb-4">
                Mr Balakrishna Moghri brings years of industry and academic experience to the AI Masterclass. 
                His 1st Hand experince of Using AI @GuruAvatar & @AlienHu in Real World Projects will help you to understand the real world problems and solutions.
              </p>
              <Link href="/ai-masterclass/instructor" className="text-teal-400 hover:text-teal-300 transition-colors duration-300">
                Learn more about your instructor →
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Master AI?</h2>
          <p className="text-xl mb-8">
            Join our comprehensive AI Masterclass and transform your career. 
            Limited spots available for the upcoming cohort.
          </p>
          <Link href="/ai-masterclass/enroll" className="bg-teal-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-teal-600 transition duration-300 inline-block">
            Enroll Now
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default AIMasterclassPage;