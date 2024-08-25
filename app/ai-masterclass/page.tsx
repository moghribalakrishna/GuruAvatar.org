'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Brain, Zap, Users, Globe, Book, Code, Rocket, ChevronRight, ChevronLeft } from 'lucide-react';

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
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI Masterclass: Shaping the Future
        </motion.h1>

        {/* Hero Slider */}
        <div className="relative h-[400px] md:h-[500px] mb-16 overflow-hidden rounded-2xl">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <Image 
                src={slide.image} 
                alt={slide.title} 
                layout="fill" 
                objectFit="cover"
                quality={100}
                priority={index === 0}
              />
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 p-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-white">{slide.title}</h2>
              </div>
            </motion.div>
          ))}
          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-black' : 'bg-gray-400'}`}
              />
            ))}
          </div>
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
                className="bg-gray-100 p-6 rounded-xl transition-all duration-300 hover:bg-gray-200 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <highlight.icon className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Course Modules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="bg-gray-100 p-6 rounded-xl hover:bg-gray-200 transition-all duration-300 cursor-pointer h-full flex flex-col"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src={module.image} alt={module.title} layout="fill" objectFit="cover" quality={100} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 flex-grow">{module.title}</h3>
                  <ChevronRight className="ml-auto" />
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Instructor Spotlight */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Meet Your Instructor</h2>
          <div className="bg-gray-100 p-8 rounded-xl flex flex-col md:flex-row items-center">
            <Image src="/founder-image.jpeg" alt="AI Instructor" width={300} height={300} className="rounded-full mb-6 md:mb-0 md:mr-8 shadow-lg" quality={100} />
            <div>
              <h3 className="text-3xl font-bold mb-4">Balakrishna Moghri</h3>
              <p className="text-xl mb-4">Founder & CTO of 2 Startups & Worked for Multiple Startups</p>
              <p className="text-gray-600 mb-4">
                Mr Balakrishna Moghri brings years of industry and academic experience to the AI Masterclass. 
                His 1st Hand experince of Using AI @GuruAvatar & @AlienHu in Real World Projects will help you to understand the real world problems and solutions.
              </p>
              <Link href="/ai-masterclass/instructor" className="text-teal-400 hover:text-teal-300 transition-colors duration-300 inline-flex items-center">
                Learn more about your instructor <ChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section 
          className="text-center bg-gray-100 p-12 rounded-xl shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Master AI?</h2>
          <p className="text-xl mb-8">
            Join our comprehensive AI Masterclass and transform your career. 
            Limited spots available for the upcoming cohort.
          </p>
          <Link href="/ai-masterclass/register" className="bg-teal-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-teal-600 transition duration-300 inline-block shadow-lg">
            Enroll Now
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default AIMasterclassPage;