'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

const expenseData = [
  { name: 'Program Development', value: 60 },
  { name: 'Technology Infrastructure', value: 15 },
  { name: 'Teachers Welfare & Development', value: 10 },
  { name: 'Administrative Costs', value: 10 },
  { name: 'Marketing & Outreach', value: 5 },
];

const yearlyData = [
  { year: '2024', revenue: 5000000, expenses: 4500000 },
  { year: '2025', revenue: 30000000, expenses: 25000000 },
  { year: '2026', revenue: 100000000, expenses: 85000000 },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
};

export default function FinancialTransparencyPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <motion.h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8 text-center text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Financial Transparency
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl mb-8 sm:mb-12 text-center max-w-3xl mx-auto text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At GuruAvatar, we believe in full transparency. Here's a detailed breakdown of how we allocate funds and our financial performance over the years.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-gray-800">Expense Allocation</h2>
            <div className="bg-gray-100 p-4 sm:p-6 rounded-xl h-[300px] sm:h-[400px] shadow-md">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius="80%"
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-gray-800">Expected Yearly Financial Overview</h2>
            <div className="bg-gray-100 p-4 sm:p-6 rounded-xl h-[300px] sm:h-[400px] shadow-md">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearlyData}>
                  <XAxis dataKey="year" stroke="#4B5563" />
                  <YAxis stroke="#4B5563" tickFormatter={(value) => `${value / 1000000}M`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid #E5E7EB' }}
                    itemStyle={{ color: '#4B5563' }}
                    formatter={(value) => formatCurrency(value as number)}
                  />
                  <Legend />
                  <Bar dataKey="revenue" fill="#3B82F6" name="Expected Revenue" />
                  <Bar dataKey="expenses" fill="#10B981" name="Expected Expenses" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.section>
        </div>

        <motion.section 
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center text-gray-800">Our Financial Principles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lucide.Maximize2, title: "Maximizing Impact", description: "We allocate maximum resources to educational programs and technology development." },
              { icon: Lucide.TrendingUp, title: "Sustainable Growth", description: "We balance growth with financial sustainability for long-term impact." },
              { icon: Lucide.Search, title: "Transparency", description: "We provide clear financial reports and welcome inquiries about our practices." },
              { icon: Lucide.Shield, title: "Ethical Fundraising", description: "We adhere to the highest ethical standards in fundraising and donor relationships." }
            ].map((principle, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-4 sm:p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <principle.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{principle.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-gray-800">Questions About Our Finances?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-600">
            We're committed to transparency. If you have any questions about our financial practices or reports, we're here to help.
          </p>
          <motion.a 
            href="/forms/contact" 
            className="bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold hover:bg-blue-600 transition duration-300 inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Lucide.Mail className="mr-2" />
            Contact Us
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
}