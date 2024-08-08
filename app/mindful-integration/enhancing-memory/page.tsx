'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
 
import { motion } from 'framer-motion';
import { Brain, Book, Repeat, Zap, Sun } from 'lucide-react';
import Link from 'next/link';

export default function EnhancingMemoryPage() {

 const videoRef = useRef<HTMLVideoElement>(null);

 useEffect(() => {
   if (videoRef.current) {
     videoRef.current.play().catch(error => {
       console.error("Auto-play was prevented:", error);
     });
   }
 }, []);

  const [showExercise, setShowExercise] = useState(false);
  const [memoryList, setMemoryList] = useState<string[]>([]);
  const [userInput, setUserInput] = useState('');

  const startExercise = () => {
    setShowExercise(true);
    setMemoryList(['Apple', 'Book', 'Cat', 'Dog', 'Elephant', 'Flower', 'Guitar', 'House', 'Ice cream', 'Jacket']);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const score = memoryList.filter(item => userInput.toLowerCase().includes(item.toLowerCase())).length;
    alert(`You remembered ${score} out of 10 items. Great job!`);
    setShowExercise(false);
    setUserInput('');
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
          Enhancing Memory and Retention
        </motion.h1>
        <div className="mb-8 rounded-xl overflow-hidden">
          <video 
            ref={videoRef}
            className="w-full"
            loop
            muted
            playsInline
          >
            <source src="/videos/mindful-integration/enhancing-memory.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">The Importance of Memory in Learning</h2>
          <p className="text-lg mb-4">
            Memory plays a crucial role in the learning process. It's not just about memorizing facts; it's about retaining information, connecting ideas, and applying knowledge in various contexts. Enhancing your memory and retention skills can significantly improve your academic performance and make your learning more efficient and effective.
          </p>
          <p className="text-lg">
            By developing strong memory techniques, you can reduce study time, perform better on exams, and retain information for longer periods, leading to deeper understanding and more successful application of your knowledge.
          </p>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Benefits of Enhanced Memory and Retention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improved academic performance and grades</li>
            <li>More efficient studying and reduced cramming</li>
            <li>Better long-term retention of information</li>
            <li>Enhanced ability to make connections between different subjects</li>
            <li>Increased confidence in exams and class participation</li>
            <li>Improved problem-solving skills</li>
            <li>Better application of knowledge in practical situations</li>
            <li>Reduced stress and anxiety related to learning and exams</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Effective Memory Techniques</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li><strong>Spaced Repetition:</strong> Review information at increasing intervals over time.</li>
            <li><strong>Mnemonics:</strong> Create acronyms, rhymes, or phrases to remember complex information.</li>
            <li><strong>Mind Mapping:</strong> Visually organize information to see connections and hierarchies.</li>
            <li><strong>Method of Loci (Memory Palace):</strong> Associate information with specific locations in a familiar place.</li>
            <li><strong>Chunking:</strong> Group related pieces of information together.</li>
            <li><strong>Active Recall:</strong> Test yourself regularly instead of passively reviewing notes.</li>
            <li><strong>Elaborative Rehearsal:</strong> Connect new information to existing knowledge.</li>
            <li><strong>Visualization:</strong> Create vivid mental images to represent information.</li>
            <li><strong>Teaching Others:</strong> Explain concepts to reinforce your own understanding.</li>
            <li><strong>Dual Coding:</strong> Combine verbal and visual information for better retention.</li>
          </ol>
        </motion.section>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image 
            src="/images/mindful-integration/enhancing-memory.webp" 
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
          <h2 className="text-2xl font-semibold mb-4">Memory Enhancement Exercise</h2>
          <p className="text-lg mb-4">
            Try this simple memory exercise. You'll be shown a list of 10 words for 30 seconds. After that, try to recall as many words as you can.
          </p>
          {!showExercise ? (
            <button 
              onClick={startExercise}
              className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300"
            >
              Start Memory Exercise
            </button>
          ) : (
            <div className="text-center">
              <p className="text-2xl font-bold mb-4">Remember these words:</p>
              <p className="text-xl mb-4">{memoryList.join(', ')}</p>
              <p className="text-lg mb-4">You have 30 seconds to memorize these words.</p>
              <form onSubmit={handleSubmit} className="mt-8">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Enter the words you remember"
                  className="w-full p-2 text-black rounded"
                />
                <button type="submit" className="mt-4 bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
                  Check Your Memory
                </button>
              </form>
            </div>
          )}
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Strategies for Effective Information Retention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Create Meaningful Associations:</strong> Link new information to concepts you already understand.</li>
            <li><strong>Use Multiple Senses:</strong> Engage various senses while studying (e.g., read aloud, write notes, draw diagrams).</li>
            <li><strong>Practice Retrieval:</strong> Regularly test yourself on the material you're learning.</li>
            <li><strong>Teach the Material:</strong> Explaining concepts to others reinforces your own understanding.</li>
            <li><strong>Break Information into Chunks:</strong> Organize large amounts of information into smaller, manageable parts.</li>
            <li><strong>Use Analogies and Metaphors:</strong> Relate new concepts to familiar ideas.</li>
            <li><strong>Create a Study Schedule:</strong> Plan regular review sessions to reinforce learning.</li>
            <li><strong>Minimize Multitasking:</strong> Focus on one subject or concept at a time for better retention.</li>
            <li><strong>Get Adequate Sleep:</strong> Sleep plays a crucial role in memory consolidation.</li>
            <li><strong>Stay Physically Active:</strong> Regular exercise can improve memory and cognitive function.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Overcoming Common Memory Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Information Overload:</strong> Break study sessions into smaller, focused periods.</li>
            <li><strong>Lack of Sleep:</strong> Prioritize a consistent sleep schedule to support memory consolidation.</li>
            <li><strong>Stress and Anxiety:</strong> Practice relaxation techniques and mindfulness to reduce mental tension.</li>
            <li><strong>Difficulty with Abstract Concepts:</strong> Use analogies and real-world examples to make ideas more concrete.</li>
            <li><strong>Poor Organization:</strong> Develop a systematic approach to note-taking and information management.</li>
            <li><strong>Forgetting Over Time:</strong> Implement a spaced repetition system for long-term retention.</li>
            <li><strong>Lack of Context:</strong> Relate new information to your personal experiences or existing knowledge.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Long-term Strategies for Memory Enhancement</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Develop a regular meditation practice to improve focus and memory.</li>
            <li>Engage in mentally stimulating activities like puzzles, learning new skills, or playing instruments.</li>
            <li>Maintain a balanced diet rich in omega-3 fatty acids, antioxidants, and vitamins.</li>
            <li>Stay socially active, as social interactions can help keep your mind sharp.</li>
            <li>Practice mindfulness to improve your ability to focus and retain information.</li>
            <li>Continuously challenge yourself with new learning experiences.</li>
            <li>Use memory techniques consistently across different subjects and areas of life.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Boost Your Memory and Retention</h2>
          <p className="text-lg mb-6">
            Explore our additional resources to further enhance your memory and retention skills.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
          <Link href="/mindful-integration/mindfulness-community" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
            Join Our Community
          </Link>
          <Link href="/free-consultation" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
            Schedule a Free Consultation
          </Link>
        </div>
        </motion.section>
      </div>
    </div>
  );
}