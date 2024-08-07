'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`, {
        identifier: email,
        password: password
      });

      if (response.data.jwt) {
        // Store the token in localStorage or a secure cookie
        localStorage.setItem('token', response.data.jwt);
        // Redirect to dashboard or home page
        router.push('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ login: 'Invalid email or password' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/forgot-password`, {
        email: forgotPasswordEmail
      });
      // Show success message
      setErrors({ success: 'Password reset instructions sent to your email' });
    } catch (error) {
      console.error('Forgot password error:', error);
      setErrors({ forgotPassword: 'Error sending reset instructions' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {showForgotPassword ? "Reset Your Password" : "Sign in to your account"}
          </h2>
        </div>
        {!showForgotPassword ? (
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 absolute ml-3" />
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-gray-400 absolute ml-3" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => setShowForgotPassword(true)}>
                  Forgot your password?
                </a>
              </div>
            </div>

            {errors.login && <p className="text-red-500 text-sm">{errors.login}</p>}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isSubmitting ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleForgotPassword}>
            <div>
              <label htmlFor="forgot-password-email" className="sr-only">Email address</label>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 absolute ml-3" />
                <input
                  id="forgot-password-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                />
              </div>
            </div>
            {errors.forgotPassword && <p className="text-red-500 text-sm">{errors.forgotPassword}</p>}
            {errors.success && <p className="text-green-500 text-sm">{errors.success}</p>}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isSubmitting ? 'Sending...' : 'Reset Password'}
              </button>
            </div>
            <div className="text-sm text-center">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => setShowForgotPassword(false)}>
                Back to Login
              </a>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}