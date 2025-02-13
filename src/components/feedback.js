import React, { useState } from 'react';
import { Star, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const TestimonialsContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 mt-14">
      {/* Testimonials Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">What Our Users Say</h2>
          <p className="text-gray-400">Experiences from travelers and local partners</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          {/* Testimonial 1 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-orange-500 text-xl mb-4">"</div>
            <p className="text-gray-300 mb-4">The booking saved me precious time helping me plan my visit efficiently. We avoided the rush hours and had a wonderful experience at the Taj Mahal.</p>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-gray-400 text-sm">International Tourist</div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-green-500 text-xl mb-4">"</div>
            <p className="text-gray-300 mb-4">Being a local experience host on the platform has helped me showcase our cultural heritage while maintaining sustainable practices. The technology makes management effortless.</p>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">Rajesh Kumar</div>
                <div className="text-gray-400 text-sm">Local Experience Host</div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#" className="text-orange-500 hover:text-orange-400 inline-flex items-center">
            View More Testimonials
            <span className="ml-2">→</span>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-400">Have questions about sustainable tourism or want to partner with us? Reach out!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-gray-700 rounded-md p-3 text-white"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-700 rounded-md p-3 text-white"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <select
                    className="w-full bg-gray-700 rounded-md p-3 text-white"
                    value={formData.topic}
                    onChange={(e) => setFormData({...formData, topic: e.target.value})}
                  >
                    <option value="">Topic</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-gray-700 rounded-md p-3 text-white"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-400" />
                  <span>contact@ecotravelindia.in</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-gray-400" />
                  <span>+91 123 456 7890</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Office Location</h3>
              <p className="text-gray-400">
                123 Green Building Complex<br />
                100 Green Street<br />
                New Delhi, India 110001
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">EcoTravel India</h4>
            <p className="text-gray-400 text-sm mb-4">
              Promoting sustainable and responsible tourism across India through technology and local partnerships.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Services</a></li>
              <li><a href="#" className="hover:text-white">Destinations</a></li>
              <li><a href="#" className="hover:text-white">Partner With Us</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Real-time Crowd Monitoring</a></li>
              <li><a href="#" className="hover:text-white">Accessibility Guidelines</a></li>
              <li><a href="#" className="hover:text-white">Eco-friendly Tracker</a></li>
              <li><a href="#" className="hover:text-white">Local Experience</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Safety Information</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 pb-8 text-center text-gray-400 text-sm">
          <div className="mb-2">© 2024 Eco Travel India. All rights reserved.</div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TestimonialsContactFooter;