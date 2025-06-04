// src/app/gallery/page.tsx
import Image from 'next/image';
import React from 'react';

export default function GalleryPage() {
  // Sample placeholder image data
  // IMPORTANT: Actual image files need to be placed in public/images/gallery/ for these to work.
  const images = [
    { id: 1, src: '/images/gallery/placeholder1.jpg', alt: 'Poured Petals workshop creation - vibrant blues and greens' },
    { id: 2, src: '/images/gallery/placeholder2.jpg', alt: 'Close-up of a delicate poured flower design' },
    { id: 3, src: '/images/gallery/placeholder3.jpg', alt: 'Participants enjoying a Poured Petals workshop' },
    { id: 4, src: '/images/gallery/placeholder4.jpg', alt: 'A stunning array of finished floral art pieces' },
    { id: 5, src: '/images/gallery/placeholder5.jpg', alt: 'Detailed shot of pouring technique in action' },
    { id: 6, src: '/images/gallery/placeholder6.jpg', alt: 'Colorful abstract floral patterns from a workshop' },
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-pink-700">Workshop Gallery</h1>
        <p className="text-xl text-gray-600 mt-3">A showcase of beautiful creations from our workshops.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-8">
        {images.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-72"> {/* Fixed height container for images */}
              <Image
                src={image.src}
                alt={image.alt}
                fill // Use fill to cover the container
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Responsive sizes
                className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                // Note: Actual images need to be in public/images/gallery/
                // For now, these will show broken image icons if files don't exist.
                // It's good practice to have some fallback or placeholder styling for missing images.
                onError={(e) => {
                  // Basic fallback styling if image fails to load
                  (e.target as HTMLImageElement).alt = `Error loading: ${image.alt}`;
                  // Could add a class here to style the broken image container
                }}
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 truncate group-hover:whitespace-normal transition-all">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for Instagram Feed */}
      <section className="mt-16 py-12 bg-white shadow-inner">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">Follow Our Journey on Instagram</h2>
          <p className="text-lg text-gray-600 mb-6">
            Get daily inspiration, workshop updates, and see the latest creations from our community!
          </p>
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-lg text-center shadow-lg">
            <p className="text-gray-700 italic text-xl">
              (Our beautiful Instagram feed embed will be displayed here soon!)
            </p>
            <a
              href="https://www.instagram.com" // Replace with actual Instagram profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              Visit @PouredPetals
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
