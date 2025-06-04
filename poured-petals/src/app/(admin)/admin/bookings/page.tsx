import React from 'react';

export default function ViewBookingsPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">View Bookings</h1>
      </header>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="italic text-gray-600 mb-4">
          (A sortable and filterable list of all workshop bookings will be displayed here. Options to view booking details, manage refunds (if applicable), and export booking data to CSV will be available.)
        </p>
        {/* Placeholder for bookings table */}
        <div className="border border-dashed border-gray-300 rounded-md p-8 text-center text-gray-400">
          Bookings List Area
        </div>
        <div className="mt-6">
          <button
            type="button"
            onClick={() => alert('CSV Export not implemented yet.')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Export Bookings to CSV (Non-functional)
          </button>
        </div>
      </div>
    </div>
  );
}
