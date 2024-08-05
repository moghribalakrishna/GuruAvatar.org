'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const expenseData = [
  { name: 'Program Development', value: 70 },
  { name: 'Technology Infrastructure', value: 15 },
  { name: 'Administrative Costs', value: 10 },
  { name: 'Marketing & Outreach', value: 5 },
];

const yearlyData = [
  { year: '2024', revenue: 500000, expenses: 450000 },
  { year: '2025', revenue: 750000, expenses: 650000 },
  { year: '2026', revenue: 1000000, expenses: 850000 },
];

export default function FinancialTransparencyPage() {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Financial Transparency
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At GuruAvatar, we believe in full transparency. Here's a detailed breakdown of how we allocate funds and our financial performance over the years.
        </motion.p>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Expense Allocation</h2>
          <motion.div
            className="bg-white bg-opacity-10 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Yearly Financial Overview</h2>
          <motion.div
            className="bg-white bg-opacity-10 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yearlyData}>
                <XAxis dataKey="year" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: 'none' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend />
                <Bar dataKey="revenue" fill="#0088FE" name="Revenue" />
                <Bar dataKey="expenses" fill="#00C49F" name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Financial Principles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Lucide.Maximize2, title: "Maximizing Impact", description: "We strive to allocate the maximum possible resources directly to educational programs and technology development." },
              { icon: Lucide.TrendingUp, title: "Sustainable Growth", description: "We balance our growth with financial sustainability to ensure long-term impact." },
              { icon: Lucide.Search, title: "Transparency", description: "We provide clear, detailed financial reports and welcome inquiries about our financial practices." },
              { icon: Lucide.Shield, title: "Ethical Fundraising", description: "We adhere to the highest ethical standards in our fundraising efforts and donor relationships." }
            ].map((principle, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <principle.icon className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                <p className="text-gray-300">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Financial Reports</h2>
          <motion.div
            className="bg-white bg-opacity-10 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <p className="text-lg mb-4">
              For a more detailed look at our finances, you can download our annual reports:
            </p>
            <ul className="space-y-4">
              {[2026, 2025, 2024].map((year) => (
                <li key={year}>
                  <a 
                    href={`/financial-reports/${year}-annual-report.pdf`}
                    className="flex items-center text-orange-400 hover:text-orange-300 transition duration-300"
                  >
                    <Lucide.FileText className="mr-2" />
                    {year} Annual Financial Report
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Questions About Our Finances?</h2>
          <p className="text-xl mb-8">
            We're committed to transparency. If you have any questions about our financial practices or reports, we're here to help.
          </p>
          <a 
            href="/contact" 
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 inline-flex items-center"
          >
            <Lucide.Mail className="mr-2" />
            Contact Us
          </a>
        </motion.section>
      </div>
    </div>
  );
}