"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function BookingSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-green-800 p-6">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center max-w-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-3xl font-bold text-green-700 mb-4">Booking Successful!</h1>
        <p className="text-lg mb-2">
          Thank you for your booking. Your workshop spot is confirmed.
        </p>
        {sessionId && (
          <p className="text-md text-gray-600 mb-6 bg-green-100 p-2 rounded">
            Stripe Session ID: <span className="font-mono break-all">{sessionId}</span>
          </p>
        )}
        <p className="mb-6">
          You should receive a confirmation email shortly with all the details.
        </p>
        <div className="space-x-4">
          <Link href="/" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
            Go to Homepage
          </Link>
          <Link href="/workshops" className="bg-gray-200 hover:bg-gray-300 text-green-700 font-semibold py-2 px-6 rounded-lg transition duration-300">
            Browse More Workshops
          </Link>
        </div>
      </div>
    </div>
  );
}
