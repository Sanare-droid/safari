import React from 'react';

export default function NewWorkshopPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Create New Workshop</h1>
      </header>
      <form className="bg-white p-8 rounded-lg shadow-md space-y-6 max-w-2xl mx-auto">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Workshop Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm p-2"
            placeholder="e.g., Rose Pouring Masterclass"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input type="date" name="date" id="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm p-2" />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <input type="time" name="time" id="time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm p-2" />
          </div>
        </div>

        <div>
          <label htmlFor="instructor" className="block text-sm font-medium text-gray-700 mb-1">Instructor</label>
          <input
            type="text"
            name="instructor"
            id="instructor"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm p-2"
            placeholder="e.g., Petal Picasso"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            id="description"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm p-2"
            placeholder="Detailed description of the workshop..."
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price (in USD cents)</label>
            <input
              type="number"
              name="price"
              id="price"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm p-2"
              placeholder="e.g., 5000 for $50.00"
            />
          </div>
          <div>
            <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1">Capacity (Max Participants)</label>
            <input
              type="number"
              name="capacity"
              id="capacity"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm p-2"
              placeholder="e.g., 10"
            />
          </div>
        </div>

        <div>
          <label htmlFor="venueAddress" className="block text-sm font-medium text-gray-700 mb-1">Venue Name & Address</label>
          <input
            type="text"
            name="venueAddress"
            id="venueAddress"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm p-2"
            placeholder="e.g., The Floral Studio, 123 Main St, Anytown"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image URL (Optional)</label>
          <input
            type="url"
            name="image"
            id="image"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm p-2"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="button" // Change to submit when backend is ready
            onClick={() => alert('Form submission not implemented yet.')}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            Save Workshop (Non-functional)
          </button>
        </div>
      </form>
    </div>
  );
}
