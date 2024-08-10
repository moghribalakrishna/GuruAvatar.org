// File: app/ai-masterclass/neural-networks/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Network, Layers, Cpu, Zap } from 'lucide-react';

const NeuralNetworksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Network className="w-12 h-12 mr-4 text-blue-300" />
          Neural Networks & Deep Learning
        </motion.h1>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore the cutting-edge of AI with deep neural networks. This module covers the architecture, training, and application of neural networks in solving complex problems.
        </motion.p>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image src="/images/ai-masterclass/neural-networks-hero.webp" alt="Neural Networks & Deep Learning" width={800} height={400} className="rounded-xl shadow-2xl" />
        </motion.div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Core Concepts</h2>
          <ul className="space-y-4">
            {[
              "Feedforward and recurrent neural networks",
              "Backpropagation and gradient descent",
              "Convolutional neural networks (CNNs)",
              "Long Short-Term Memory (LSTM) networks",
              "Generative Adversarial Networks (GANs)",
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Layers className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Hands-on Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Cpu, title: "Image Classification", description: "Build a CNN to classify images with high accuracy" },
              { icon: Zap, title: "Sequence Prediction", description: "Implement an LSTM for time series forecasting" },
              { icon: Network, title: "Natural Language Understanding", description: "Develop a neural network for sentiment analysis" },
              { icon: Layers, title: "Generative Art", description: "Create a GAN to generate unique artistic images" },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <project.icon className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
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

export default NeuralNetworksPage;