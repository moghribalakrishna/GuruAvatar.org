'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, Bulb, Palette, Book, Brain, Sun } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function BoostingCreativityPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Auto-play was prevented:", error);
      });
    }
  }, []);

  const [showExercise, setShowExercise] = useState(false);
  const [randomWords, setRandomWords] = useState<string[]>([]);

  const startExercise = () => {
    const words = ['apple', 'mountain', 'whisper', 'ocean', 'telescope', 'butterfly', 'castle', 'diamond', 'umbrella', 'cactus'];
    const selected = words.sort(() => 0.5 - Math.random()).slice(0, 3);
    setRandomWords(selected);
    setShowExercise(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Zap className="w-12 h-12 mr-4 text-yellow-300" />
          Boosting Creativity
        </motion.h1>

        <div className="mb-8 rounded-xl overflow-hidden">
          <video 
            ref={videoRef}
            className="w-full"
            loop
            muted
            playsInline
          >
            <source src="/videos/mindful-integration/boosting-creativity.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">The Importance of Creativity in Academics</h2>
          <p className="text-lg mb-4">
            Creativity is not just for artists and musicians – it's a crucial skill in all academic disciplines. Creative thinking allows you to approach problems from new angles, make unique connections between ideas, and develop innovative solutions. In today's rapidly changing world, the ability to think creatively is increasingly valued in education and the workplace.
          </p>
          <p className="text-lg">
            By enhancing your creative skills, you can improve your academic performance, enrich your learning experience, and prepare yourself for future challenges in your studies and career.
          </p>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Benefits of Boosting Creativity</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Enhanced problem-solving abilities</li>
            <li>Improved ability to make connections between different concepts</li>
            <li>Increased originality in academic work</li>
            <li>Greater adaptability to new situations and challenges</li>
            <li>Enhanced critical thinking skills</li>
            <li>Improved ability to generate and develop ideas</li>
            <li>Increased engagement and enjoyment in learning</li>
            <li>Better preparation for future careers that value innovation</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Techniques for Enhancing Creative Thinking</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li><strong>Brainstorming:</strong> Generate a large quantity of ideas without judgment.</li>
            <li><strong>Mind Mapping:</strong> Visually organize information and explore connections.</li>
            <li><strong>Lateral Thinking:</strong> Approach problems from unexpected angles.</li>
            <li><strong>Analogical Thinking:</strong> Apply concepts from one domain to another.</li>
            <li><strong>SCAMPER Technique:</strong> Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse.</li>
            <li><strong>Six Thinking Hats:</strong> Consider problems from different perspectives.</li>
            <li><strong>Random Word Association:</strong> Use unrelated words to spark new ideas.</li>
            <li><strong>Challenging Assumptions:</strong> Question established beliefs and practices.</li>
            <li><strong>Reverse Thinking:</strong> Consider the opposite of conventional approaches.</li>
            <li><strong>Meditation and Mindfulness:</strong> Clear your mind to make room for new ideas.</li>
          </ol>
        </motion.section>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image 
            src="/images/mindful-integration/boosting-creativity.webp" 
            alt= "Bossting Creativity"
            width={800} 
            height={400} 
            className="rounded-xl shadow-2xl"
          />
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Creative Thinking Exercise</h2>
          <p className="text-lg mb-4">
            Try this random word association exercise to spark your creativity. You'll be given three random words. Your task is to create a short story or scenario that incorporates all three words.
          </p>
          {!showExercise ? (
            <button 
              onClick={startExercise}
              className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300"
            >
              Start Creative Exercise
            </button>
          ) : (
            <div className="text-center">
              <p className="text-2xl font-bold mb-4">Your random words are:</p>
              <p className="text-xl mb-4">{randomWords.join(', ')}</p>
              <p className="text-lg">Create a short story or scenario that includes all three words. Let your imagination flow!</p>
            </div>
          )}
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Applying Creativity in Different Subjects</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Mathematics:</strong> Visualize problems in new ways, explore multiple solution paths.</li>
            <li><strong>Science:</strong> Design innovative experiments, develop unique hypotheses.</li>
            <li><strong>Literature:</strong> Create original interpretations, write creative responses to texts.</li>
            <li><strong>History:</strong> Imagine alternative historical scenarios, create visual timelines.</li>
            <li><strong>Art and Music:</strong> Experiment with new techniques, combine different styles.</li>
            <li><strong>Social Sciences:</strong> Develop new research questions, create innovative study designs.</li>
            <li><strong>Computer Science:</strong> Design original algorithms, create unique user interfaces.</li>
            <li><strong>Language Learning:</strong> Create mnemonics, invent stories to remember vocabulary.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Overcoming Creative Blocks</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Change Your Environment:</strong> Work in a new location to stimulate fresh thinking.</li>
            <li><strong>Take Breaks:</strong> Allow your mind to rest and recharge.</li>
            <li><strong>Engage in Physical Activity:</strong> Exercise can help stimulate creative thinking.</li>
            <li><strong>Practice Mindfulness:</strong> Clear your mind to make room for new ideas.</li>
            <li><strong>Explore Different Mediums:</strong> If stuck in writing, try drawing or vice versa.</li>
            <li><strong>Collaborate with Others:</strong> Bouncing ideas off others can spark new thoughts.</li>
            <li><strong>Embrace Constraints:</strong> Sometimes, limitations can foster creativity.</li>
            <li><strong>Sleep on It:</strong> Allow your subconscious to work on problems overnight.</li>
            <li><strong>Freewriting or Sketching:</strong> Engage in unstructured creative activities.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Mindfulness and Creativity</h2>
          <p className="text-lg mb-4">
            Mindfulness practices can significantly enhance your creative abilities:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Open Monitoring Meditation:</strong> Increases divergent thinking and idea generation.</li>
            <li><strong>Mindful Observation:</strong> Enhances your ability to notice details and make unique connections.</li>
            <li><strong>Body Scan:</strong> Reduces physical tension that can block creative flow.</li>
            <li><strong>Loving-Kindness Meditation:</strong> Cultivates a positive mindset that supports creative risk-taking.</li>
            <li><strong>Mindful Walking:</strong> Stimulates creativity through gentle physical activity and environmental engagement.</li>
            <li><strong>Breath Awareness:</strong> Calms the mind, creating space for creative insights to emerge.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Cultivating a Creative Mindset</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Embrace curiosity and ask "what if" questions.</li>
            <li>Practice looking at things from multiple perspectives.</li>
            <li>Allow yourself to make mistakes and learn from them.</li>
            <li>Seek out diverse experiences and knowledge.</li>
            <li>Keep a journal or sketchbook for ideas and observations.</li>
            <li>Set aside time for regular creative practice.</li>
            <li>Surround yourself with inspiring people and environments.</li>
            <li>Challenge yourself with new skills and subjects.</li>
            <li>Embrace ambiguity and uncertainty as part of the creative process.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Creativity-Boosting Habits</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Read widely across different genres and subjects.</li>
            <li>Practice daily freewriting or sketching.</li>
            <li>Engage in regular brainstorming sessions.</li>
            <li>Collaborate with people from diverse backgrounds.</li>
            <li>Take up a new hobby or learn a new skill regularly.</li>
            <li>Attend workshops, lectures, or events outside your field.</li>
            <li>Create a dedicated space for creative work.</li>
            <li>Start a creativity ritual to signal your brain it's time to be creative.</li>
            <li>Regularly challenge your assumptions and preconceptions.</li>
            <li>Practice mindfulness meditation daily.</li>
          </ol>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Evaluating and Refining Creative Ideas</h2>
          <p className="text-lg mb-4">
            Once you've generated creative ideas, it's important to evaluate and refine them:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Use the PMI technique: consider Plus, Minus, and Interesting aspects of each idea.</li>
            <li>Seek feedback from others, but don't let criticism stifle your creativity.</li>
            <li>Test and prototype your ideas when possible.</li>
            <li>Be willing to combine or modify ideas for better results.</li>
            <li>Consider the feasibility and impact of your creative solutions.</li>
            <li>Use analogies to explore how your idea might work in different contexts.</li>
            <li>Allow ideas to incubate; revisit them after some time has passed.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Unlock Your Creative Potential</h2>
          <p className="text-lg mb-6">
            Explore our additional resources to further develop your creative thinking skills.
          </p>
          <div className="space-x-4">
            <Link href="/creativity-workshop" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Join Creativity Workshop
            </Link>
            <Link href="/creative-problem-solving" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
              Explore Creative Problem-Solving
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}