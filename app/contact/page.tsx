export default function Contact() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl mb-8">We'd love to hear from you! Whether you have questions about our programs or want to explore partnership opportunities, our team is here to help.</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <ul className="space-y-2">
              <li><strong>Email:</strong> info@guruavatar.com</li>
              <li><strong>Phone:</strong> +1 (555) 123-4567</li>
              <li><strong>Address:</strong> 123 Education Lane, Knowledge City, IN 54321</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
  
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </div>
    )
  }