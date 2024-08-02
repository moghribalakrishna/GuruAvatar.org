//File: app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Welcome to GuruAvatar</h1>
        <p className="text-xl mb-8 text-gray-600">Revolutionizing education through AI, mentorship, and innovative learning techniques.</p>
        <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 inline-block">
          Get Started
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        {['AI Education', 'Mentorship', 'Mindfulness'].map((title, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
            <p className="text-gray-600">
              {title === 'AI Education' && 'Learn about cutting-edge AI technologies through our innovative masterclasses.'}
              {title === 'Mentorship' && 'Connect with industry experts and receive personalized guidance for your educational journey.'}
              {title === 'Mindfulness' && 'Enhance your learning experience with our integrated mindfulness and meditation techniques.'}
            </p>
          </div>
        ))}
      </section>
    </div>
  )
}
