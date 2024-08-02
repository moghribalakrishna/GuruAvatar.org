
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-blue-700 min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Revolutionizing 360° Learning with 
            <span className="text-orange-400">AI</span>, 
            <span className="text-green-400">Mindfulness</span>, 
            <span className="text-yellow-400">Habits</span> & 
            <span className="text-purple-400">Mentorship</span>
          </h1>
            <p className="text-xl mb-8 text-blue-200">
              GuruAvatar combines cutting-edge AI technology with holistic learning approaches to empower the next generation of innovators and leaders.
            </p>
            <Link href="/contact" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block">
              Start Your Journey
            </Link>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image 
              src="/guruavatar-hero.webp" 
              alt="GuruAvatar Learning Environment" 
              width={800} 
              height={450} 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Our Innovative Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "AI-Powered Learning", icon: "🤖", description: "Personalized learning paths and adaptive content tailored to each student's unique needs and pace." },
              { title: "Expert Mentorship", icon: "👥", description: "Connect with industry leaders and receive guidance to navigate your educational and career journey." },
              { title: "Mindfulness Integration", icon: "🧘", description: "Incorporating meditation and mindfulness techniques to enhance focus, reduce stress, and improve overall well-being." }
            ].map((feature, index) => (
              <div key={index} className="bg-white text-indigo-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-indigo-800 py-16 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Educational Journey?</h2>
          <p className="text-xl mb-8 text-blue-200">Join GuruAvatar today and experience the future of learning.</p>
          <Link href="/contact" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block">
            Get Started Now
          </Link>
        </section>
      </div>
    </div>
  )
}
