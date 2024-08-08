// File: app/expert-mentorship/benefits/expanded-network/page.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, ArrowLeft } from 'lucide-react';

export default function ExpandedNetworkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/expert-mentorship/benefits" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8">
          <ArrowLeft className="mr-2" /> Back to Benefits
        </Link>
        
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Users className="w-12 h-12 mr-4 text-yellow-400" />
          Expanded Network
        </motion.h1>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <video 
            className="w-full rounded-xl shadow-lg"
            controls
            poster="/videos/expanded-network-poster.jpg"
          >
            <source src="/videos/expanded-network.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.p 
          className="text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          One of the most valuable benefits of our expert mentorship program is the opportunity to expand your professional network. Through your mentor, you'll gain access to a wealth of connections and opportunities that can significantly impact your career.
        </motion.p>

        <motion.h2 
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          How Mentorship Expands Your Network:
        </motion.h2>

        <motion.ul 
          className="list-disc list-inside space-y-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <li>Access to your mentor's professional connections</li>
          <li>Introductions to industry leaders and potential employers</li>
          <li>Opportunities to participate in exclusive events and conferences</li>
          <li>Collaboration possibilities with other mentees and professionals</li>
          <li>Insights into different companies and organizational cultures</li>
        </motion.ul>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img 
            src="/images/expanded-network.jpg" 
            alt="Networking through mentorship" 
            className="w-full rounded-xl shadow-lg"
          />
          {/* Image description: A mentor introducing the mentee to a diverse group of professionals at a networking event, with holographic displays showing interconnected network nodes */}
        </motion.div>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          By expanding your network through mentorship, you'll open doors to new opportunities, gain diverse perspectives, and build relationships that can support your long-term career growth.
        </motion.p>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/expert-mentorship/find-mentor" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block">
            Expand Your Network
          </Link>
        </motion.div>
      </div>
    </div>
  );
}