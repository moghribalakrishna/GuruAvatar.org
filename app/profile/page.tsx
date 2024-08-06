'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { getUserProfile, logout } from '../lib/auth';

export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await getUserProfile();
        setUser(profile);
      } catch (error) {
        router.push('/login');
      }
    };
    fetchUserProfile();
  }, [router]);

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="bg-gradient-to-b from-blue-900 to-teal-700 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Profile</div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Welcome, {user.username}!</h1>
            <p className="mt-2 text-gray-500">Email: {user.email}</p>
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Logout
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}