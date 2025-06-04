import Link from 'next/link';
import React from 'react';

export default function ManageWorkshopsPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Workshops</h1>
        <Link
          href="/admin/workshops/new"
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          + Create New Workshop
        </Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="italic text-gray-600">
          (Workshop listing, editing tools, and status toggles will be displayed here. Features like search, filter by date/theme, and pagination will also be implemented.)
        </p>
        {/* Placeholder for a table or list of workshops */}
        <div className="mt-4 border border-dashed border-gray-300 rounded-md p-8 text-center text-gray-400">
          Workshop List Area
        </div>
      </div>
    </div>
  );
}
