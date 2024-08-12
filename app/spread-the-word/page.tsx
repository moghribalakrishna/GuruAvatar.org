'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';

const socialPlatforms = [
  { icon: Lucide.Facebook, name: 'Facebook', color: 'bg-blue-600', link: 'https://www.facebook.com/sharer/sharer.php?u=' },
  { icon: Lucide.Twitter, name: 'Twitter', color: 'bg-sky-500', link: 'https://twitter.com/intent/tweet?text=' },
  { icon: Lucide.Linkedin, name: 'LinkedIn', color: 'bg-blue-700', link: 'https://www.linkedin.com/shareArticle?mini=true&url=' },
];

const shareMessages = [
  "Join the education revolution with GuruAvatar! 🚀📚 AI-powered learning for a brighter future. #EducationForAll #AILearning",
  "Empowering students worldwide through innovative, personalized education. Discover GuruAvatar! 🌍🧠 #EdTech #PersonalizedLearning",
  "Mindfulness meets AI in education. Experience the GuruAvatar difference! 🧘‍♀️💻 #MindfulLearning #EducationInnovation"
];

export default function SpreadTheWordPage() {
  const [copiedMessage, setCopiedMessage] = useState('');

  const handleCopy = (message:string) => {
    navigator.clipboard.writeText(message);
    setCopiedMessage(message);
    setTimeout(() => setCopiedMessage(''), 3000);
  };

  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Spread the Word
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Help us revolutionize education by sharing GuruAvatar's mission with your network. Your voice can make a difference in bringing innovative, AI-powered learning to students worldwide.
        </motion.p>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Share on Social Media</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={index}
                href={`${platform.link}${encodeURIComponent('https://guruavatar.org')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${platform.color} hover:opacity-90 transition duration-300 p-4 rounded-xl flex items-center justify-center space-x-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <platform.icon className="w-6 h-6" />
                <span>Share on {platform.name}</span>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Sample Messages</h2>
          <div className="space-y-6">
            {shareMessages.map((message, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <p className="text-lg mb-4">{message}</p>
                <button
                  onClick={() => handleCopy(message)}
                  className="absolute top-4 right-4 text-gray-300 hover:text-white transition duration-300"
                >
                  {copiedMessage === message ? <Lucide.Check className="w-5 h-5" /> : <Lucide.Copy className="w-5 h-5" />}
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Email Your Network</h2>
          <motion.div
            className="bg-white bg-opacity-10 p-6 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-lg mb-4">
              Share GuruAvatar with your contacts who are passionate about education and innovation. Here's a template to get you started:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-300">
                Subject: Revolutionizing Education with AI and Mindfulness - Discover GuruAvatar
              </p>
              <p className="text-sm text-gray-300 mt-2">
                Dear [Name],<br /><br />
                I hope this email finds you well. I recently discovered an innovative educational platform called GuruAvatar that I thought might interest you.<br /><br />
                GuruAvatar is a non-profit organization dedicated to revolutionizing education through AI-powered learning, mindfulness practices, and personalized mentorship. They're making quality education accessible to students worldwide, regardless of their background.<br /><br />
                You can learn more about their mission and impact at https://guruavatar.org.<br /><br />
                I believe their approach could make a significant difference in how we think about and deliver education. If you're interested, I encourage you to check out their website and consider getting involved.<br /><br />
                Best regards,<br />
                [Your Name]
              </p>
            </div>
            <a 
              href={`mailto:?subject=${encodeURIComponent('Revolutionizing Education with AI and Mindfulness - Discover GuruAvatar')}&body=${encodeURIComponent('Dear [Name],\n\nI hope this email finds you well. I recently discovered an innovative educational platform called GuruAvatar that I thought might interest you.\n\nGuruAvatar is a non-profit organization dedicated to revolutionizing education through AI-powered learning, mindfulness practices, and personalized mentorship. They\'re making quality education accessible to students worldwide, regardless of their background.\n\nYou can learn more about their mission and impact at https://guruavatar.org.\n\nI believe their approach could make a significant difference in how we think about and deliver education. If you\'re interested, I encourage you to check out their website and consider getting involved.\n\nBest regards,\n[Your Name]')}`}
              className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 inline-flex items-center"
            >
              <Lucide.Mail className="mr-2" />
              Send Email
            </a>
          </motion.div>
        </section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Every Share Counts</h2>
          <p className="text-xl mb-8">
            Your support in spreading the word about GuruAvatar helps us reach more students, educators, and potential partners. Together, we can create a future where quality education is accessible to all.
          </p>
          <a 
            href="/impact-report" 
            className="bg-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300 inline-flex items-center"
          >
            <Lucide.Share2 className="mr-2" />
            See Our Impact
          </a>
        </motion.section>
      </div>
    </div>
  );
}