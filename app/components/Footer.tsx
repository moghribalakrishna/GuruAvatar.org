'use client';
import Link from 'next/link'
import NewsletterSignup from '../forms/news-letter/NewsletterSignup'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About GuruAvatar</h3>
            <p className="text-sm text-gray-600 mb-4">
              GuruAvatar is a non-profit organization dedicated to revolutionizing education through AI, mindfulness, habit formation, and expert mentorship.
            </p>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 transition duration-300">
              Learn More
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/our-approach" className="text-gray-600 hover:text-blue-600 transition duration-300">Our Approach</Link></li>
              <li><Link href="/impact-report" className="text-gray-600 hover:text-blue-600 transition duration-300">Our Impact</Link></li>
              <li><Link href="/success-stories" className="text-gray-600 hover:text-blue-600 transition duration-300">Success Stories</Link></li>
              <li><Link href="/get-involved" className="text-gray-600 hover:text-blue-600 transition duration-300">Get Involved</Link></li>
              <li><Link href="/forms/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-blue-600 transition duration-300">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <NewsletterSignup />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            &copy; 2024 GuruAvatar. All rights reserved. | Non-Profit Organization
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}