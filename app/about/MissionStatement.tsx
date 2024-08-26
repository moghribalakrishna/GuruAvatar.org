import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export default function MissionStatement() {
    return (
        <section className="my-16 bg-white">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <motion.div
                    className="md:w-1/2 bg-white bg-opacity-10 p-8 rounded-lg shadow-lg text-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.div
                        initial={{ rotate: -10, scale: 0.9 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Quote className="w-12 h-12 mx-auto text-orange-400 mb-4" />
                    </motion.div>
                    <motion.p
                        className="text-2xl font-semibold mb-4 italic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        "In today's world, education is at your fingertips—free and accessible to all. What truly makes the difference is the drive to learn, the practice of mindfulness, the cultivation of good habits, and the guidance of a mentor."
                    </motion.p>
                    <motion.p
                        className="text-lg font-medium text-orange-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        - Balakrishna Moghri & Deepa Kongara, Founders of GuruAvatar
                    </motion.p>
                </motion.div>
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src="/images/about/founder-vision-mission.webp"
                        alt="Founders' Vision and Mission"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                </motion.div>
            </div>
            <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg mb-4">
                    GuruAvatar is dedicated to revolutionizing education by blending cutting-edge AI technology with traditional wisdom. Our mission is to empower learners with personalized education, mindfulness practices, and expert mentorship, accessible to all, regardless of geographical or economic barriers.
                </p>
                <motion.p
                    className="text-lg mb-4 font-semibold text-orange-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    A core focus of our mission is to uplift rural communities by appointing educated women in villages to provide free, digitally empowered education to children up to 7th standard. Your donations directly contribute to transforming these communities and shaping a brighter future for the next generation.
                </motion.p>
            </motion.div>
        </section>
    );
}