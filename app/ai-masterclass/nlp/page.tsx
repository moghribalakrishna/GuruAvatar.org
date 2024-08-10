// File: app/ai-masterclass/nlp/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Globe, Book, Pencil } from 'lucide-react';

const NLPPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MessageSquare className="w-12 h-12 mr-4 text-blue-300" />
          Natural Language Processing
        </motion.h1>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Unlock the power of human language with AI. This module covers the techniques and models used to process, analyze, and generate human language.
        </motion.p>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image src="/images/ai-masterclass/nlp-hero.webp" alt="Natural Language Processing" width={800} height={400} className="rounded-xl shadow-2xl" />
        </motion.div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Key Topics</h2>
          <ul className="space-y-4">
            {[
              "Text preprocessing and tokenization",
              "Word embeddings and language models",
              "Named Entity Recognition (NER)",
              "Sentiment analysis and text classification",
              "Machine translation and sequence-to-sequence models",
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Globe className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">NLP Applications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: MessageSquare, title: "Chatbot Development", description: "Build an intelligent chatbot using advanced NLP techniques" },
              { icon: Globe, title: "Multilingual NLP", description: "Develop models that understand and generate text in multiple languages" },
              { icon: Book, title: "Text Summarization", description: "Create an AI system that generates concise summaries of long documents" },
              { icon: Pencil, title: "AI Content Generation", description: "Implement a model that can generate human-like text on various topics" },
            ].map((application, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <application.icon className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{application.title}</h3>
                <p className="text-gray-300">{application.description}</p>
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
          <Link href="/ai-masterclass/enroll" className="bg-teal-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-teal-600 transition duration-300 inline-block">
            Enroll Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NLPPage;