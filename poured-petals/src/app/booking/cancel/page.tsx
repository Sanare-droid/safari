import Link from 'next/link';
import React from 'react';

export default function BookingCancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-800 p-6">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center max-w-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-3xl font-bold text-red-700 mb-4">Booking Cancelled</h1>
        <p className="text-lg mb-6">
          Your booking process was cancelled or something went wrong with the payment.
        </p>
        <p className="mb-6">
          No charges were made. Please try again if you wish to complete your booking.
        </p>
        <Link href="/workshops" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-lg">
          Back to Workshops
        </Link>
      </div>
    </div>
  );
}
