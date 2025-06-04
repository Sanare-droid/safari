import React from 'react';
import Link from 'next/link'; // Import Link for Next.js navigation

export default function AdminDashboardPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-lg text-gray-600">Welcome to the Poured Petals control center.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card for Manage Events */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-pink-700 mb-3">Manage Workshops</h2>
          <p className="text-gray-600 mb-4">
            Create new workshop events, update existing ones, manage schedules, and set pricing.
          </p>
          <Link href="/admin/workshops" className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Manage Workshops
          </Link>
          {/* <p className="text-pink-500 italic font-medium mt-2">(Link to /admin/workshops - to be implemented)</p> */}
        </div>

        {/* Card for View Bookings */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">View Bookings</h2>
          <p className="text-gray-600 mb-4">
            Access a comprehensive list of all current and past bookings for your workshops.
          </p>
          <Link href="/admin/bookings" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            View Bookings
          </Link>
          {/* <p className="text-green-500 italic font-medium mt-2">(Link to /admin/bookings - to be implemented)</p> */}
        </div>

        {/* Card for Manage Customers */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Manage Customers</h2>
          <p className="text-gray-600 mb-4">
            View customer details, booking history, and manage communication preferences.
          </p>
          <Link href="/admin/customers" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Manage Customers
          </Link>
          {/* <p className="text-blue-500 italic font-medium mt-2">(Link to /admin/customers - to be implemented)</p> */}
        </div>

        {/* Placeholder for more cards if needed */}
        {/* <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">Site Analytics</h2>
          <p className="text-gray-600 mb-4">
            View traffic, conversion rates, and other important site metrics.
          </p>
          <p className="text-purple-500 italic font-medium mt-2">(Link to /admin/analytics - to be implemented)</p>
        </div> */}
      </div>
    </div>
  );
}
