'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Ear, Mic, ThumbsUp, Users, Heart } from 'lucide-react';
import Link from 'next/link';

export default function MindfulCommunicationPage() {
  const [showTimer, setShowTimer] = useState(false);
  const [time, setTime] = useState(300); // 5 minutes in seconds

  const startTimer = () => {
    setShowTimer(true);
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
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
          <MessageCircle className="w-12 h-12 mr-4 text-blue-300" />
          Mindful Communication
        </motion.h1>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">What is Mindful Communication?</h2>
          <p className="text-lg mb-4">
            Mindful communication is the practice of bringing full attention and awareness to our interactions with others. It involves being present, listening actively, speaking thoughtfully, and responding with empathy and understanding. This approach to communication can significantly improve our relationships, reduce conflicts, and enhance our overall well-being.
          </p>
          <p className="text-lg">
            By communicating mindfully, we become more aware of our own thoughts and emotions, as well as those of others. This awareness allows us to respond more effectively and compassionately in our interactions, leading to more meaningful and authentic connections.
          </p>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Benefits of Mindful Communication</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improved relationships and deeper connections</li>
            <li>Reduced misunderstandings and conflicts</li>
            <li>Enhanced empathy and emotional intelligence</li>
            <li>Better listening skills and increased understanding</li>
            <li>More effective and clear expression of thoughts and feelings</li>
            <li>Reduced stress and anxiety in social situations</li>
            <li>Increased self-awareness and self-regulation</li>
            <li>Greater ability to navigate difficult conversations</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Key Principles of Mindful Communication</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Present Moment Awareness:</strong> Stay fully engaged in the conversation, avoiding distractions.</li>
            <li><strong>Active Listening:</strong> Focus on truly understanding the other person, rather than just waiting to speak.</li>
            <li><strong>Non-Judgmental Attitude:</strong> Approach conversations with openness and curiosity, suspending judgment.</li>
            <li><strong>Empathy:</strong> Try to understand and share the feelings of others.</li>
            <li><strong>Thoughtful Response:</strong> Take time to consider your words and their potential impact before speaking.</li>
            <li><strong>Authenticity:</strong> Communicate honestly and genuinely, while being kind and considerate.</li>
            <li><strong>Emotional Awareness:</strong> Recognize and manage your own emotions during conversations.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Practicing Mindful Communication</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>Before a conversation, take a few deep breaths to center yourself.</li>
            <li>Pay attention to your body language and tone of voice.</li>
            <li>Listen attentively, avoiding the urge to interrupt or formulate responses while others are speaking.</li>
            <li>Notice any judgments or assumptions arising and gently let them go.</li>
            <li>Reflect back what you've heard to ensure understanding.</li>
            <li>Speak from your own experience using "I" statements.</li>
            <li>Take pauses to breathe and collect your thoughts before responding.</li>
            <li>Be aware of your emotional reactions and manage them mindfully.</li>
            <li>Practice empathy by trying to see things from the other person's perspective.</li>
            <li>End conversations with gratitude and appreciation.</li>
          </ol>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Guided Mindful Communication Exercise</h2>
          <p className="text-lg mb-4">
            Try this mindful listening exercise with a partner. Take turns speaking and listening mindfully for 5 minutes each. Use our timer to guide you:
          </p>
          {!showTimer ? (
            <button 
              onClick={startTimer}
              className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Start 5-Minute Mindful Listening Exercise
            </button>
          ) : (
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</p>
              <p className="text-lg">Listen attentively to your partner without interrupting. Notice your thoughts and emotions as you listen.</p>
            </div>
          )}
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Tips for Incorporating Mindful Communication into Daily Life</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Start your day with a brief mindfulness practice to set an intention for mindful communication.</li>
            <li>Take a few deep breaths before important conversations or meetings.</li>
            <li>Practice active listening in everyday interactions, giving your full attention to the speaker.</li>
            <li>Use mindful pauses throughout the day to check in with your thoughts and emotions.</li>
            <li>Reflect on your communication patterns and identify areas for improvement.</li>
            <li>Practice empathy by considering others' perspectives in your interactions.</li>
            <li>Use mindfulness techniques to manage stress and emotions during difficult conversations.</li>
            <li>End each day by reflecting on your communications and setting intentions for the next day.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Overcoming Common Communication Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Reactive emotions:</strong> Practice STOP (Stop, Take a breath, Observe, Proceed) when feeling triggered.</li>
            <li><strong>Distractions:</strong> Create a distraction-free environment for important conversations.</li>
            <li><strong>Assumptions:</strong> Ask clarifying questions instead of making assumptions about others' intentions.</li>
            <li><strong>Difficulty expressing feelings:</strong> Use "I feel" statements to communicate emotions clearly.</li>
            <li><strong>Conflict avoidance:</strong> Approach conflicts as opportunities for growth and understanding.</li>
            <li><strong>Interrupting:</strong> Practice patience and use non-verbal cues to show you're listening.</li>
            <li><strong>Defensiveness:</strong> Cultivate openness to feedback and view it as an opportunity for self-improvement.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Mindful Communication in Different Contexts</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Academic Settings:</strong> Practice active listening in lectures and discussions. Contribute thoughtfully to class discussions.</li>
            <li><strong>Personal Relationships:</strong> Use mindful communication to deepen connections and resolve conflicts with friends and family.</li>
            <li><strong>Professional Environment:</strong> Enhance teamwork and leadership skills through clear, empathetic communication.</li>
            <li><strong>Digital Communication:</strong> Apply mindfulness principles to email, messaging, and social media interactions.</li>
            <li><strong>Public Speaking:</strong> Use mindfulness techniques to manage anxiety and connect authentically with your audience.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Enhance Your Communication Skills</h2>
          <p className="text-lg mb-6">
            Explore our additional resources to further develop your mindful communication practice.
          </p>
          <div className="space-x-4">
            <Link href="/communication-workshop" className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300">
              Join Communication Workshop
            </Link>
            <Link href="/mindful-speaking-guide" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
              Download Mindful Speaking Guide
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}