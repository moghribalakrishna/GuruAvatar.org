'use client';

import React from 'react';
import HabitForge from './HabitForge';

export default function HabitForgeContent() {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden relative p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center">
          The GuruAvatar Habit Forge
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-center max-w-4xl mx-auto text-gray-700">
          Explore our interconnected habits. Forge your path to success by mastering
          these essential skills for holistic growth and lifelong learning.
        </p>
        <HabitForge />
      </div>
    </div>
  );
}