'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Brain, Eye, Cloud, Sun, Wind } from 'lucide-react';

export default function ObservingThoughtsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Auto-play was prevented:", error);
      });
    }
  }, []);

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
          <Brain className="w-12 h-12 mr-4 text-purple-300" />
          Observing Thoughts
        </motion.h1>

        <div className="mb-8 rounded-xl overflow-hidden">
          <video 
            ref={videoRef}
            className="w-full"
            loop
            muted
            playsInline
          >
            <source src="/videos/mindful-integration/observing-thoughts.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">What is Observing Thoughts?</h2>
          <p className="text-lg mb-4">
            Observing thoughts is a fundamental mindfulness practice that involves noticing your thoughts as they arise, without getting caught up in them or trying to change them. This practice helps you develop a sense of detachment from your thoughts, allowing you to see them as mental events rather than absolute truths or commands that must be acted upon.
          </p>
          <p className="text-lg">
            By learning to observe your thoughts, you can gain insight into your mental patterns, reduce reactivity, and cultivate a greater sense of inner peace and clarity. This practice is sometimes described as "watching your thoughts pass by like clouds in the sky" or "sitting on the bank of a stream, watching your thoughts float by like leaves on the water."
          </p>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Benefits of Observing Thoughts</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduced stress and anxiety</li>
            <li>Improved emotional regulation</li>
            <li>Enhanced self-awareness</li>
            <li>Greater mental clarity and focus</li>
            <li>Decreased rumination and overthinking</li>
            <li>Increased ability to respond rather than react</li>
            <li>Improved decision-making skills</li>
            <li>Better management of negative thought patterns</li>
            <li>Enhanced overall well-being and mental health</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">How to Practice Observing Thoughts</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>Find a comfortable seated position in a quiet place.</li>
            <li>Close your eyes or maintain a soft gaze.</li>
            <li>Take a few deep breaths to center yourself.</li>
            <li>Begin to notice your thoughts as they arise.</li>
            <li>Imagine your thoughts as clouds passing through the sky of your mind.</li>
            <li>As each thought appears, simply acknowledge it without judgment.</li>
            <li>Resist the urge to engage with or analyze the thoughts.</li>
            <li>If you find yourself getting caught up in a thought, gently redirect your attention to observing.</li>
            <li>Notice any patterns in your thoughts or any recurring themes.</li>
            <li>Continue this practice for your desired duration, starting with 5-10 minutes.</li>
          </ol>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Tips for Effective Thought Observation</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Start with short sessions and gradually increase the duration</li>
            <li>Use visualization techniques, like imagining thoughts as clouds or leaves on a stream</li>
            <li>Label thoughts as they arise (e.g., "planning," "worrying," "remembering")</li>
            <li>Practice non-judgment towards your thoughts</li>
            <li>Remember that the goal is not to stop thinking, but to observe your thoughts</li>
            <li>Be patient with yourself and your practice</li>
            <li>Consider using guided meditations when starting out</li>
          </ul>
        </motion.section>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image 
            src="/images/mindful-integration/observing-thoughts.webp" 
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
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Guided Thought Observation Exercise</h2>
          <p className="text-lg mb-4">
            Try this simple thought observation exercise. Use our timer for a 5-minute practice session:
          </p>
          {!showTimer ? (
            <button 
              onClick={startTimer}
              className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300"
            >
              Start 5-Minute Thought Observation
            </button>
          ) : (
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</p>
              <p className="text-lg">Notice your thoughts as they arise. Imagine them as clouds passing through the sky of your mind. Observe without judgment.</p>
            </div>
          )}
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Incorporating Thought Observation into Daily Life</h2>
          <p className="text-lg mb-4">
            You can practice observing thoughts throughout your day:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Take brief "thought breaks" during your day to check in with your mind</li>
            <li>Practice observing thoughts while waiting in line or during your commute</li>
            <li>Notice your thought patterns during stressful situations</li>
            <li>Observe your thoughts before making important decisions</li>
            <li>Practice thought observation before bed to help quiet your mind</li>
            <li>Use thought observation to gain insight into your emotional reactions</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Overcoming Common Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Getting caught up in thoughts:</strong> Gently redirect your attention to observing when you notice this happening.</li>
            <li><strong>Judging your thoughts:</strong> Practice acknowledging judgments as just another type of thought to observe.</li>
            <li><strong>Difficulty identifying thoughts:</strong> Start by simply noticing when your mind is active versus quiet. Gradually, you'll become more aware of specific thoughts.</li>
            <li><strong>Feeling overwhelmed by thoughts:</strong> Remember that it's normal to have many thoughts. Focus on observing rather than trying to control or stop them.</li>
            <li><strong>Frustration with the practice:</strong> Be patient with yourself. Like any skill, thought observation improves with practice.</li>
            <li><strong>Mind going blank:</strong> If you find your mind going blank, simply observe that state of blankness without trying to generate thoughts.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Advanced Thought Observation Techniques</h2>
          <p className="text-lg mb-4">
            As you become more comfortable with basic thought observation, you can explore these advanced techniques:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Thought Patterns Analysis:</strong> After your practice, reflect on any recurring themes or patterns in your thoughts.</li>
            <li><strong>Emotion-Thought Connection:</strong> Notice how different types of thoughts are connected to specific emotions.</li>
            <li><strong>Body-Thought Awareness:</strong> Observe how different thoughts affect sensations in your body.</li>
            <li><strong>Thought Origin Exploration:</strong> Try to notice where your thoughts seem to originate in your mind or body.</li>
            <li><strong>Metacognitive Awareness:</strong> Practice observing the process of thinking itself, not just the content of thoughts.</li>
            <li><strong>Non-Dual Awareness:</strong> Explore the space of awareness in which thoughts arise, recognizing thoughts as part of, not separate from, your consciousness.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">The Science Behind Observing Thoughts</h2>
          <p className="text-lg mb-4">
            Research has shown numerous benefits of practicing thought observation:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduced activity in the Default Mode Network, associated with mind-wandering and rumination (Brewer et al., 2011)</li>
            <li>Increased meta-awareness and ability to disengage from negative thought patterns (Bernstein et al., 2015)</li>
            <li>Enhanced emotional regulation and reduced symptoms of anxiety and depression (Farb et al., 2010)</li>
            <li>Improved working memory and cognitive flexibility (Jha et al., 2010)</li>
            <li>Increased gray matter density in brain regions associated with learning, memory, and emotional regulation (Hölzel et al., 2011)</li>
          </ul>
          <p className="text-lg mt-4">
            These studies demonstrate that regular practice of observing thoughts can lead to significant improvements in cognitive function and emotional well-being.
          </p>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Thought Observation for Specific Challenges</h2>
          <p className="text-lg mb-4">
            Thought observation can be particularly helpful for addressing specific mental health challenges:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Anxiety:</strong> Observe anxious thoughts without getting caught up in them, reducing their power over you.</li>
            <li><strong>Depression:</strong> Notice negative thought patterns without judging them, creating space for more balanced perspectives.</li>
            <li><strong>Obsessive-Compulsive Disorder:</strong> Observe obsessive thoughts without feeling compelled to act on them.</li>
            <li><strong>Insomnia:</strong> Use thought observation to quiet racing thoughts at bedtime.</li>
            <li><strong>Addiction:</strong> Observe cravings and triggers as thoughts, without automatically acting on them.</li>
            <li><strong>PTSD:</strong> Gently observe trauma-related thoughts, building resilience and reducing their emotional impact over time.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Integrating Thought Observation with Other Practices</h2>
          <p className="text-lg mb-4">
            Thought observation can be combined with other mindfulness and cognitive practices for enhanced benefits:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Use thought observation to identify cognitive distortions more easily.</li>
            <li><strong>Loving-Kindness Meditation:</strong> Observe thoughts that arise during loving-kindness practice, noticing any resistance or judgments.</li>
            <li><strong>Body Scan:</strong> Notice thoughts that come up as you scan different parts of your body.</li>
            <li><strong>Mindful Movement:</strong> Observe thoughts that arise during yoga, tai chi, or other mindful movement practices.</li>
            <li><strong>Journaling:</strong> After a thought observation session, journal about any insights or patterns you noticed.</li>
            <li><strong>Breath Awareness:</strong> Use the breath as an anchor while observing thoughts, alternating your focus between breath and thoughts.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Deepen Your Thought Observation Practice</h2>
          <p className="text-lg mb-6">
            Explore our additional resources to enhance your understanding and experience of observing thoughts.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Access Guided Meditations
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
              Join a Mindfulness Course
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}