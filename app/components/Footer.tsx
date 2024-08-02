import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">&copy; 2024 GuruAvatar. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}