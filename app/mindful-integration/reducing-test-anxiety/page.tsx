'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { Smile, Heart, Brain, Wind, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

export default function ReducingTestAnxietyPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Auto-play was prevented:", error);
      });
    }
  }, []);

  const [showExercise, setShowExercise] = useState(false);

  const startExercise = () => {
    setShowExercise(true);
    setTimeout(() => setShowExercise(false), 60000); // 1-minute breathing exercise
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
          <Smile className="w-12 h-12 mr-4 text-yellow-300" />
          Reducing Test Anxiety
        </motion.h1>
        <div className="mb-8 rounded-xl overflow-hidden">
          <video 
            ref={videoRef}
            className="w-full"
            loop
            muted
            playsInline
          >
            <source src="/videos/mindful-integration/reducing-test-anxiety.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Understanding Test Anxiety</h2>
          <p className="text-lg mb-4">
            Test anxiety is a type of performance anxiety that can affect students before and during exams. It's characterized by feelings of worry, fear, and unease that can interfere with your ability to perform well on tests. While some level of stress before an exam can be motivating, excessive anxiety can hinder your performance and overall well-being.
          </p>
          <p className="text-lg">
            By understanding the causes of test anxiety and learning effective coping strategies, you can manage your stress levels and perform to the best of your abilities during exams.
          </p>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Common Symptoms of Test Anxiety</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Physical symptoms: Rapid heartbeat, sweating, nausea, shortness of breath</li>
            <li>Emotional symptoms: Feelings of fear, helplessness, or panic</li>
            <li>Cognitive symptoms: Racing thoughts, difficulty concentrating, mind going blank</li>
            <li>Behavioral symptoms: Fidgeting, pacing, avoiding study or test situations</li>
            <li>Sleep disturbances: Insomnia or restless sleep before exams</li>
            <li>Negative self-talk: Self-doubt and critical inner dialogue</li>
            <li>Perfectionism: Setting unrealistically high standards for performance</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Strategies for Managing Test Anxiety</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li><strong>Prepare Thoroughly:</strong> Develop a consistent study schedule and use effective study techniques.</li>
            <li><strong>Practice Mindfulness:</strong> Incorporate mindfulness meditation into your daily routine.</li>
            <li><strong>Use Relaxation Techniques:</strong> Learn and practice deep breathing, progressive muscle relaxation, or visualization.</li>
            <li><strong>Challenge Negative Thoughts:</strong> Identify and reframe negative self-talk into more balanced, realistic thoughts.</li>
            <li><strong>Maintain a Healthy Lifestyle:</strong> Prioritize sleep, exercise, and balanced nutrition.</li>
            <li><strong>Develop Test-Taking Strategies:</strong> Learn time management techniques and effective approaches to different question types.</li>
            <li><strong>Seek Support:</strong> Talk to teachers, counselors, or join study groups for additional support.</li>
            <li><strong>Practice Self-Compassion:</strong> Be kind to yourself and avoid harsh self-criticism.</li>
            <li><strong>Use Positive Visualization:</strong> Imagine yourself successfully taking the test and feeling confident.</li>
            <li><strong>Gradually Expose Yourself to Test Situations:</strong> Practice with mock exams to build confidence.</li>
          </ol>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image 
            src="/images/mindful-integration/reducing-test-anxiety.webp" 
            alt="Observing thoughts" 
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
          <h2 className="text-2xl font-semibold mb-4">Mindful Breathing Exercise</h2>
          <p className="text-lg mb-4">
            Try this simple mindful breathing exercise to calm your nerves before or during a test. Focus on your breath for one minute, allowing thoughts to pass without judgment.
          </p>
          {!showExercise ? (
            <button 
              onClick={startExercise}
              className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300"
            >
              Start 1-Minute Breathing Exercise
            </button>
          ) : (
            <div className="text-center">
              <p className="text-2xl font-bold mb-4">Breathe in... and out...</p>
              <p className="text-lg mb-4">Focus on your breath. Notice the sensation of breathing in and out.</p>
              <p className="text-lg">This exercise will end in 60 seconds.</p>
            </div>
          )}
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Mindfulness Techniques for Exam Situations</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Grounding Technique:</strong> Use your senses to anchor yourself in the present moment (e.g., notice 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, 1 thing you can taste).</li>
            <li><strong>Body Scan:</strong> Quickly scan your body for tension and consciously relax those areas.</li>
            <li><strong>Mindful Reading:</strong> Read exam questions slowly and mindfully, fully absorbing their meaning.</li>
            <li><strong>Thought Labeling:</strong> Notice anxious thoughts and label them (e.g., "This is anxiety talking") without getting caught up in them.</li>
            <li><strong>Mindful Breaks:</strong> Take short, mindful breaks during the exam to reset and refocus.</li>
            <li><strong>Compassionate Self-Talk:</strong> Use kind, encouraging self-talk to boost confidence and calm nerves.</li>
            <li><strong>Mindful Movement:</strong> If allowed, do subtle stretches or movements to release physical tension.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Preparing for Exams Mindfully</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Create a realistic study schedule and stick to it mindfully.</li>
            <li>Use active recall and spaced repetition techniques for effective learning.</li>
            <li>Take regular, mindful breaks during study sessions to prevent burnout.</li>
            <li>Practice mindfulness meditation daily to build overall resilience to stress.</li>
            <li>Visualize yourself calmly and confidently taking the exam.</li>
            <li>Prepare your exam materials the night before to reduce morning stress.</li>
            <li>Develop a calming pre-exam ritual (e.g., listening to soothing music, doing gentle stretches).</li>
            <li>Avoid last-minute cramming, which can increase anxiety.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">During the Exam: Mindful Strategies</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Take a few deep breaths before starting to center yourself.</li>
            <li>Read all instructions carefully and mindfully.</li>
            <li>If you feel anxious, pause and do a quick mindfulness exercise.</li>
            <li>Break the exam into smaller, manageable parts.</li>
            <li>Stay present with each question, avoiding worry about the overall exam.</li>
            <li>If you encounter a difficult question, mindfully acknowledge the challenge and move on.</li>
            <li>Use positive self-talk to maintain confidence.</li>
            <li>Take mindful sips of water to stay hydrated and calm.</li>
            <li>If allowed, take brief stretching breaks to release physical tension.</li>
            <li>Before submitting, take a mindful moment to review your work calmly.</li>
          </ol>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold mb-4">After the Exam: Mindful Reflection</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Take a few moments to breathe and center yourself after the exam.</li>
            <li>Reflect on the experience without judgment, noting what went well and areas for improvement.</li>
            <li>Avoid immediately discussing the exam with others if it increases your anxiety.</li>
            <li>Engage in a calming activity to transition out of exam mode.</li>
            <li>Practice self-compassion, regardless of how you think you performed.</li>
            <li>Use mindfulness to stay present rather than worrying about results.</li>
            <li>Consider journaling about your experience to process emotions and gather insights.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Long-term Strategies for Managing Test Anxiety</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Develop a regular mindfulness meditation practice.</li>
            <li>Work on building self-confidence through positive affirmations and acknowledging your strengths.</li>
            <li>Gradually expose yourself to test-like situations to build resilience.</li>
            <li>Consider cognitive-behavioral therapy (CBT) for persistent anxiety.</li>
            <li>Join a support group or study group to share experiences and strategies.</li>
            <li>Regularly practice relaxation techniques like progressive muscle relaxation or guided imagery.</li>
            <li>Maintain a healthy lifestyle with regular exercise, balanced nutrition, and adequate sleep.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Master Your Test Anxiety</h2>
          <p className="text-lg mb-6">
            Explore our additional resources to further develop your skills in managing test anxiety.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
          <Link href="/mindful-integration/mindfulness-community" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
            Join Our Community
          </Link>
          <Link href="/mindful-integration/free-consultation" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
            Schedule a Free Consultation
          </Link>
        </div>
        </motion.section>
      </div>
    </div>
  );
}