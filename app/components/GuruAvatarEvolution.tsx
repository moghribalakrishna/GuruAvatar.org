import React from 'react';
import { motion } from 'framer-motion';

export default function GuruAvatarEvolution() {
  return (
    <section className="mb-16">
      <motion.h2
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        The Evolution of GuruAvatar: A Journey of Resilience and Innovation
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-4">From Concept to Non-Profit (2014-2016)</h3>
        <p className="text-lg mb-4">
          The early years of GuruAvatar were marked by intense research, countless iterations, and a deepening understanding of the educational landscape. Balakrishna and Deepa immersed themselves in studying successful educational models worldwide, drawing inspiration from platforms like Wikipedia and Khan Academy. It was during this period that the vision of GuruAvatar as a non-profit organization began to crystallize.
        </p>
        <p className="text-lg mb-4">
          The decision to pursue GuruAvatar as a non-profit was not an easy one. It meant foregoing potential financial gains in favor of maximizing social impact. However, this choice aligned perfectly with their core mission of democratizing quality education and making it accessible to all, regardless of socioeconomic background.
        </p>
      </motion.div>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold mb-4">The AlienHu Chapter: A Detour for Growth (2016-2023)</h3>
        <p className="text-lg mb-4">
          Realizing the need for more resources and experience to bring GuruAvatar to life, Balakrishna co-founded AlienHu in 2016. This venture, while separate from GuruAvatar, was seen as a stepping stone - a means to gain crucial experience in building and scaling a technology company. Deepa played a vital supporting role, managing operations and providing emotional support for the team, all while raising their family.
        </p>
        <p className="text-lg mb-4">
          The AlienHu years were a rollercoaster of highs and lows. The company achieved significant milestones, including serving over 10,000 B2B customers and employing 200 people at its peak. However, it also faced numerous challenges, from financial constraints to the devastating impact of the COVID-19 pandemic. Through it all, the dream of GuruAvatar remained alive, informing many of the decisions and strategies employed at AlienHu.
        </p>
        <p className="text-lg mb-4">
          This period was a crucible of learning for Balakrishna and Deepa. They gained invaluable insights into product development, team building, financial management, and the intricacies of scaling a technology platform. These lessons, though hard-earned, would prove instrumental in the next phase of GuruAvatar's journey.
        </p>
      </motion.div>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold mb-4">GuruAvatar Reborn: A Vision Realized (2023-Present)</h3>
        <p className="text-lg mb-4">
          In early 2023, with the AlienHu chapter coming to a close, Balakrishna and Deepa found themselves at a crossroads. The challenges and setbacks they had faced could have easily deterred them from pursuing their original dream. Instead, these experiences had only strengthened their resolve and equipped them with the tools needed to bring GuruAvatar to life.
        </p>
        <p className="text-lg mb-4">
          The rebirth of GuruAvatar as a non-profit organization marked a return to their core mission, now enhanced by years of practical experience. The platform they envisioned was no longer just a dream but a carefully crafted reality, built on a foundation of technological expertise, educational insight, and a deep understanding of the challenges facing learners in India and beyond.
        </p>
        <p className="text-lg mb-4">
          This new iteration of GuruAvatar combined all the elements of their original vision:
        </p>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>AI-powered personalized learning paths</li>
          <li>Mindfulness practices integrated into the curriculum</li>
          <li>Habit formation techniques to foster lifelong learning</li>
          <li>Expert mentorship to guide and inspire students</li>
          <li>A holistic approach addressing cognitive, emotional, and social aspects of education</li>
        </ul>
        <p className="text-lg mb-4">
          The platform was designed to be more than just an educational tool; it was conceived as a comprehensive life companion for students, supporting them through every stage of their learning journey and beyond.
        </p>
      </motion.div>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4">The Road Ahead</h3>
        <p className="text-lg mb-4">
          Today, GuruAvatar stands as a testament to the power of perseverance, adaptability, and unwavering commitment to a vision. Balakrishna and Deepa's journey - from a spark of inspiration in Singapore to the launch of a comprehensive educational platform - embodies the very qualities they seek to instill in learners: curiosity, resilience, and the courage to pursue one's dreams against all odds.
        </p>
        <p className="text-lg mb-4">
          As GuruAvatar continues to evolve, it remains true to its core mission of democratizing education and empowering learners. The road ahead is filled with both challenges and opportunities, but with a decade of experience behind them and an unwavering commitment to their vision, Balakrishna and Deepa are poised to lead GuruAvatar into a future where quality education is accessible to all, transforming lives and communities along the way.
        </p>
      </motion.div>
    </section>
  );
}