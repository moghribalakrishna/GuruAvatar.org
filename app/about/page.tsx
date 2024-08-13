'use client';
import React from 'react';
import { motion } from 'framer-motion';
import MissionStatement from '../components/MissionStatement';
import FoundersJourney from '../components/FoundersJourney';
import GuruAvatarEvolution from '../components/GuruAvatarEvolution';
import ImpactAndFuture from '../components/ImpactAndFuture';

export default function About() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-teal-700 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The GuruAvatar Journey
          <span className="block text-sm text-orange-400 mt-2">A Decade of Sacrifice, Innovation, and Hope</span>
        </motion.h1>

        <MissionStatement />
        <FoundersJourney />
        <GuruAvatarEvolution />
        <ImpactAndFuture />
      </div>
    </div>
  );
}