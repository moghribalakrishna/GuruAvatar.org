'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Users, ChevronRight, Globe, Briefcase, MessageSquare, Share2, UserPlus } from 'lucide-react';

export default function ExpandedNetworkPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl font-bold mb-6 flex items-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Users className="w-12 h-12 mr-4 text-blue-500" />
          Expanded Network: Your Gateway to Opportunities
        </motion.h1>

        <div className="mb-8 rounded-xl overflow-hidden">
          <Image src="/images/expert-mentorship/expanded-network.webp" alt="Expanded Network" width={1200} height={600} className="w-full" />
        </div>

        <motion.p className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          In the professional world, your network is your net worth. GuruAvatar's mentorship program doesn't just connect you with a mentor; it opens doors to a vast network of industry professionals, thought leaders, and potential collaborators.
        </motion.p>

        <motion.div className="mb-12 bg-gray-50 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Power of an Expanded Network</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Globe className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Global Connections:</strong> Access a worldwide community of professionals across various industries and disciplines.</span>
            </li>
            <li className="flex items-start">
              <Briefcase className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Career Opportunities:</strong> Tap into the hidden job market and discover opportunities not advertised publicly.</span>
            </li>
            <li className="flex items-start">
              <MessageSquare className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Knowledge Exchange:</strong> Engage in enriching discussions and gain diverse perspectives from industry experts.</span>
            </li>
            <li className="flex items-start">
              <Share2 className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span><strong className="text-green-600">Collaboration Possibilities:</strong> Find potential partners for projects, startups, or research initiatives.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Networking Opportunities Through GuruAvatar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Mentor Network Access</h3>
              <p className="text-gray-600">Gain introductions to your mentor's professional network, opening doors to new opportunities.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Industry Events</h3>
              <p className="text-gray-600">Participate in exclusive webinars, conferences, and meetups with industry leaders.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Peer Collaboration</h3>
              <p className="text-gray-600">Connect with fellow mentees for peer support, idea exchanges, and collaborative projects.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Alumni Network</h3>
              <p className="text-gray-600">Join a community of GuruAvatar alumni, creating long-lasting professional relationships.</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Success Stories</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <blockquote className="text-lg italic mb-4 text-gray-600">
              "Through GuruAvatar's network, I connected with a venture capitalist who ended up funding my startup. The introductions my mentor facilitated were invaluable – it's not just about who you know, but who your mentor knows. This expanded network literally changed the trajectory of my career."
            </blockquote>
            <p className="text-right text-gray-700">- David K., Tech Entrepreneur</p>
          </div>
        </motion.div>

        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Building Your Network with GuruAvatar</h2>
          <div className="relative">
            {[
              { icon: UserPlus, title: "Connect with Your Mentor", description: "Start by building a strong relationship with your expert mentor" },
              { icon: Users, title: "Expand to Mentor's Network", description: "Gain introductions to your mentor's professional contacts" },
              { icon: MessageSquare, title: "Engage in Community Discussions", description: "Participate in forum discussions and group chats with other mentees and experts" },
              { icon: Globe, title: "Attend Virtual Events", description: "Join webinars, online conferences, and networking sessions" },
              { icon: Share2, title: "Collaborate on Projects", description: "Find partners for collaborative projects or research initiatives" }
            ].map((step, index) => (
              <div key={index} className="flex mb-8 items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <step.icon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Ready to Expand Your Professional Network?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Join GuruAvatar today and connect with mentors and professionals who can open doors to new opportunities.
          </p>
          <Link href="/expert-mentorship/find-mentor" className="bg-blue-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-600 transition duration-300 inline-block">
            Start Networking Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}