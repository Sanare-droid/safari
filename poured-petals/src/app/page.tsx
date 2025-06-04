"use client"; // Make this a client component

import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Successfully subscribed!');
        setEmail(''); // Clear email field on success
      } else {
        setMessage(data.message || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-pink-50 text-gray-800"> {/* Removed justify-between and p-24 for full page flow */}
      {/* Hero Section */}
      <section className="w-full max-w-5xl text-center py-12 px-4 sm:px-6 lg:px-8 mt-10"> {/* Added some top margin */}
        <h1 className="text-5xl font-bold text-pink-700 mb-6">
          Poured Petals
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover the art of flower pouring and create stunning floral arrangements. Join our workshops to unleash your creativity.
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300">
          Book a Workshop
        </button>
      </section>

      {/* Upcoming Events Section */}
      <section className="w-full max-w-5xl py-12">
        <h2 className="text-3xl font-semibold text-pink-700 mb-8 text-center">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Event 1 Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">Rose Pouring Masterclass</h3>
            <p className="text-gray-600 mb-2">Date: October 10, 2024</p>
            <p className="text-gray-600 mb-4">Time: 2:00 PM - 5:00 PM</p>
            <a href="#" className="text-pink-500 hover:text-pink-600 font-semibold">Learn More &rarr;</a>
          </div>
          {/* Event 2 Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">Lily Pad Workshop</h3>
            <p className="text-gray-600 mb-2">Date: November 5, 2024</p>
            <p className="text-gray-600 mb-4">Time: 10:00 AM - 1:00 PM</p>
            <a href="#" className="text-pink-500 hover:text-pink-600 font-semibold">Learn More &rarr;</a>
          </div>
          {/* Event 3 Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">Orchid Creation Session</h3>
            <p className="text-gray-600 mb-2">Date: December 1, 2024</p>
            <p className="text-gray-600 mb-4">Time: 1:00 PM - 4:00 PM</p>
            <a href="#" className="text-pink-500 hover:text-pink-600 font-semibold">Learn More &rarr;</a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full max-w-5xl py-12">
        <h2 className="text-3xl font-semibold text-pink-700 mb-10 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-pink-200 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-pink-600 mb-2">1. Choose Your Workshop</h3>
            <p className="text-gray-600">Browse our selection of flower pouring workshops and pick your favorite.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-pink-200 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-pink-600 mb-2">2. Book Your Spot</h3>
            <p className="text-gray-600">Reserve your place easily through our online booking system.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-pink-200 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-pink-600 mb-2">3. Create & Enjoy</h3>
            <p className="text-gray-600">Attend the workshop, learn the techniques, and create your beautiful floral piece!</p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="w-full bg-pink-100 py-16 mt-12"> {/* Added mt-12 for spacing */}
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">Stay in the Loop!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest updates on new workshops, special offers, and creative tips.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-grow p-3 border border-pink-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none text-gray-700"
              required
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-md sm:rounded-r-md sm:rounded-l-none mt-3 sm:mt-0 shadow-md transition duration-300 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {message && (
            <p className={`mt-6 text-md ${message.startsWith('Successfully') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
