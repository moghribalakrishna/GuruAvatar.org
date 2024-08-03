'use client';

import React from 'react';
import HabitForge from './HabitForge';

export default function HabitForgingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          The GuruAvatar Habit Forge
        </h1>
        <p className="text-lg md:text-xl mb-8 text-center max-w-3xl mx-auto text-gray-300">
          Explore our interconnected habits. Forge your path to success by mastering
          these essential skills.
        </p>
        <HabitForge />
      </div>
    </div>
  );
}