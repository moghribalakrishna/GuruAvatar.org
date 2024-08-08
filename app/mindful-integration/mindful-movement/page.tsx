'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Move, Activity, Wind, Sun, Brain } from 'lucide-react';
import Image from 'next/image';

export default function MindfulMovementPage() {
  const [showTimer, setShowTimer] = useState(false);
  const [time, setTime] = useState(300); // 5 minutes in seconds
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Auto-play was prevented:", error);
      });
    }
  }, []);

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
          <Move className="w-12 h-12 mr-4 text-yellow-300" />
          Mindful Movement
        </motion.h1>

        <div className="mb-8 rounded-xl overflow-hidden">
          <video 
            ref={videoRef}
            className="w-full"
            loop
            muted
            playsInline
          >
            <source src="/videos/mindful-integration/mindful-movement.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">What is Mindful Movement?</h2>
          <p className="text-lg mb-4">
            Mindful movement is the practice of bringing focused awareness to your body as you engage in physical activities. It involves paying close attention to your bodily sensations, breath, and the present moment while moving. This practice can be applied to various forms of movement, from simple stretches to more complex exercises or sports.
          </p>
          <p className="text-lg">
            By combining physical movement with mindfulness, you can enhance your body awareness, improve your physical performance, and cultivate a deeper mind-body connection. Mindful movement can help you become more attuned to your body's needs, reduce the risk of injury, and bring a sense of presence and enjoyment to your physical activities.
          </p>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Benefits of Mindful Movement</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Enhanced body awareness and proprioception</li>
            <li>Improved physical performance and coordination</li>
            <li>Reduced risk of injury during physical activities</li>
            <li>Decreased stress and anxiety</li>
            <li>Increased enjoyment of physical activities</li>
            <li>Better posture and body alignment</li>
            <li>Enhanced focus and concentration</li>
            <li>Improved mind-body connection</li>
            <li>Greater overall sense of well-being</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">How to Practice Mindful Movement</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>Choose a form of movement (e.g., walking, stretching, yoga, tai chi, or any sport you enjoy).</li>
            <li>Begin by taking a few deep breaths to center yourself.</li>
            <li>As you start moving, bring your attention to your breath. Notice how it changes with your movement.</li>
            <li>Focus on the sensations in your body. Feel your muscles contracting and relaxing, your joints moving, and your feet touching the ground.</li>
            <li>Notice the rhythm and flow of your movement. Is it smooth or jerky? Fast or slow?</li>
            <li>Be aware of your posture and alignment. Make adjustments if needed.</li>
            <li>If your mind wanders, gently bring your attention back to your body and breath.</li>
            <li>Notice any emotions or thoughts that arise without judgment. Let them pass like clouds in the sky.</li>
            <li>Continue this practice for the duration of your movement session.</li>
            <li>At the end of your practice, take a moment to reflect on your experience.</li>
          </ol>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Types of Mindful Movement Practices</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Mindful Walking:</strong> Paying attention to each step, the sensation of your feet touching the ground, and your breath as you walk.</li>
            <li><strong>Yoga:</strong> Focusing on the breath and body sensations as you move through different poses.</li>
            <li><strong>Tai Chi:</strong> Slow, flowing movements combined with breath awareness and meditation.</li>
            <li><strong>Qigong:</strong> Gentle exercises that combine movement, breathing, and meditation.</li>
            <li><strong>Mindful Stretching:</strong> Bringing awareness to the sensations of stretching and releasing tension in your muscles.</li>
            <li><strong>Mindful Running:</strong> Focusing on your breath, foot strikes, and body sensations while running.</li>
            <li><strong>Mindful Swimming:</strong> Paying attention to the feeling of water on your skin, your breath, and the movement of your body through water.</li>
            <li><strong>Mindful Dance:</strong> Moving to music while staying aware of your body's movements and emotional responses.</li>
          </ul>
        </motion.section>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image 
            src="/images/mindful-integration/mindful-movement.webp" 
            alt="Mindful Movement Practice" 
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
          <h2 className="text-2xl font-semibold mb-4">Guided Mindful Movement Exercise</h2>
          <p className="text-lg mb-4">
            Try this simple mindful stretching exercise. Use our timer for a 5-minute practice session:
          </p>
          {!showTimer ? (
            <button 
              onClick={startTimer}
              className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300"
            >
              Start 5-Minute Mindful Stretching
            </button>
          ) : (
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</p>
              <p className="text-lg">Slowly stretch your body, paying attention to the sensations in your muscles and joints. Notice your breath and any areas of tension or release.</p>
            </div>
          )}
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Tips for Effective Mindful Movement</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Start with short sessions and gradually increase the duration as you become more comfortable</li>
            <li>Choose a form of movement that you enjoy to make the practice more engaging</li>
            <li>Use your breath as an anchor to help you stay present during movement</li>
            <li>Practice non-judgment towards your performance or physical abilities</li>
            <li>Explore different types of movement to keep your practice fresh and interesting</li>
            <li>Consider using guided mindful movement recordings when starting out</li>
            <li>Be patient with yourself and remember that mindfulness is a skill that develops over time</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Incorporating Mindful Movement into Daily Life</h2>
          <p className="text-lg mb-4">
            You can practice mindful movement in various everyday activities:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Practice mindful walking during your commute or while running errands</li>
            <li>Do mindful stretches during study breaks or while waiting for appointments</li>
            <li>Engage in mindful eating by paying attention to the movements of chewing and swallowing</li>
            <li>Perform household chores mindfully, focusing on the movements and sensations involved</li>
            <li>Take mindful movement breaks during long periods of sitting</li>
            <li>Bring awareness to your posture and body position throughout the day</li>
            <li>Practice mindfulness during your regular workout or sports activities</li>
          </ul>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Explore More Mindful Movement Practices</h2>
          <p className="text-lg mb-6">
            Discover a variety of mindful movement techniques and find the ones that resonate with you.
          </p>
          <div className="space-x-4">
            <button className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300">
              Browse Guided Videos
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Join a Live Class
            </button>
          </div>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">The Science Behind Mindful Movement</h2>
          <p className="text-lg mb-4">
            Research has shown numerous benefits of incorporating mindfulness into physical activities:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Improved physical performance and reduced risk of injury (Kabat-Zinn et al., 1985)</li>
            <li>Enhanced body awareness and proprioception (Kerr et al., 2016)</li>
            <li>Reduced symptoms of anxiety and depression (Hofmann et al., 2010)</li>
            <li>Increased activation in brain regions associated with attention and sensory processing (Gard et al., 2014)</li>
            <li>Improved balance and reduced fall risk in older adults (Li et al., 2005)</li>
          </ul>
          <p className="text-lg mt-4">
            These studies demonstrate that integrating mindfulness with physical movement can lead to significant improvements in both physical and mental well-being.
          </p>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Mindful Movement for Specific Populations</h2>
          <p className="text-lg mb-4">
            Mindful movement can be adapted to suit various needs and abilities:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Students:</strong> Incorporate mindful movement breaks during study sessions to improve focus and reduce stress.</li>
            <li><strong>Office Workers:</strong> Practice desk yoga or mindful stretching to counteract the effects of prolonged sitting.</li>
            <li><strong>Athletes:</strong> Use mindful movement techniques to enhance performance, prevent injuries, and improve recovery.</li>
            <li><strong>Seniors:</strong> Engage in gentle mindful movement practices to improve balance, flexibility, and overall well-being.</li>
            <li><strong>People with Chronic Pain:</strong> Adapt mindful movement practices to work within pain limitations and potentially reduce discomfort.</li>
            <li><strong>Children:</strong> Introduce playful mindful movement activities to develop body awareness and emotional regulation skills.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Overcoming Common Challenges in Mindful Movement</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Difficulty staying focused:</strong> Start with shorter sessions and use external cues (like music or a timer) to help maintain attention.</li>
            <li><strong>Feeling self-conscious:</strong> Practice in a comfortable, private space until you build confidence in your mindful movement skills.</li>
            <li><strong>Boredom or restlessness:</strong> Experiment with different types of movement to find what engages you most.</li>
            <li><strong>Physical limitations:</strong> Adapt movements to suit your body's needs and abilities. Remember, mindful movement is about awareness, not achieving perfect form.</li>
            <li><strong>Lack of time:</strong> Incorporate mindful movement into daily activities, like walking to class or doing household chores.</li>
            <li><strong>Inconsistent practice:</strong> Set reminders or schedule mindful movement sessions to help establish a regular routine.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Mindful Movement and Emotional Well-being</h2>
          <p className="text-lg mb-4">
            Mindful movement can be a powerful tool for managing emotions and enhancing overall well-being:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Use mindful walking to process difficult emotions or solve problems</li>
            <li>Practice mindful stretching to release physical tension associated with stress or anxiety</li>
            <li>Engage in mindful dance or free movement to express and explore emotions</li>
            <li>Use mindful movement as a way to ground yourself when feeling overwhelmed</li>
            <li>Incorporate loving-kindness meditation into your movement practice to cultivate positive emotions</li>
          </ul>
        </motion.section>
        
        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Start Your Mindful Movement Journey</h2>
          <p className="text-lg mb-6">
            Whether you're new to mindfulness or looking to deepen your practice, mindful movement offers a dynamic way to cultivate presence and enhance your overall well-being.
          </p>
          <div className="space-x-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
              Try a Guided Practice
            </button>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300">
              Create a Personal Plan
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}