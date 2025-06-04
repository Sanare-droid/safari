"use client"; // Make this a client component

// import { useState } from 'react'; // For potential future use, like loading states - Removed as unused for now

export default function WorkshopsPage() {
  // For potential future use with loading/error states
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  const sampleWorkshops = [
    {
      id: 1,
      title: "Enchanting Rose Arrangement",
      date: "October 26, 2024",
      location: "Sunnyvale Studio",
      theme: "Classic Romance",
      description: "Learn to create breathtaking rose arrangements perfect for any romantic occasion. All materials provided."
    },
    {
      id: 2,
      title: "Tropical Paradise Pour",
      date: "November 9, 2024",
      location: "Online",
      theme: "Exotic Flora",
      description: "Join our virtual workshop and master the art of pouring vibrant, tropical-themed floral designs from home."
    },
    {
      id: 3,
      title: "Winter Wonderland Centerpieces",
      date: "December 7, 2024",
      location: "Mountain View Hall",
      theme: "Festive & Bright",
      description: "Get in the holiday spirit by crafting stunning winter-themed centerpieces that will wow your guests."
    },
    {
      id: 4,
      title: "Spring Awakening Bouquet",
      date: "March 15, 2025",
      location: "Sunnyvale Studio",
      theme: "Seasonal Blooms",
      description: "Celebrate the arrival of spring by designing a fresh and vibrant bouquet using seasonal flowers."
    }
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-8 text-gray-800">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-pink-700">Our Workshops</h1>
        <p className="text-xl text-gray-600 mt-2">Find the perfect workshop to ignite your floral passion.</p>
      </header>

      {/* Filters Section */}
      <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-pink-600 mb-6">Filter Workshops</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="date-filter" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input type="date" id="date-filter" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500" />
          </div>
          <div>
            <label htmlFor="location-filter" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <select id="location-filter" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500">
              <option>All Locations</option>
              <option>Sunnyvale Studio</option>
              <option>Online</option>
              <option>Mountain View Hall</option>
            </select>
          </div>
          <div>
            <label htmlFor="theme-filter" className="block text-sm font-medium text-gray-700 mb-1">Theme</label>
            <select id="theme-filter" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500">
              <option>All Themes</option>
              <option>Classic Romance</option>
              <option>Exotic Flora</option>
              <option>Festive & Bright</option>
              <option>Seasonal Blooms</option>
            </select>
          </div>
        </div>
      </section>

      {/* Workshops List Section */}
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleWorkshops.map((workshop) => (
            <div key={workshop.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-pink-600 mb-3">{workshop.title}</h3>
                <p className="text-gray-700 mb-1"><span className="font-semibold">Date:</span> {workshop.date}</p>
                <p className="text-gray-700 mb-1"><span className="font-semibold">Location:</span> {workshop.location}</p>
                <p className="text-gray-700 mb-3"><span className="font-semibold">Theme:</span> {workshop.theme}</p>
                <p className="text-gray-600 text-sm mb-4">{workshop.description}</p>
              </div>
              <div className="mt-auto">
                <div className="mt-4 mb-3">
                  <label htmlFor={`participants-${workshop.id}`} className="block text-sm font-medium text-gray-700 mb-1">Participants:</label>
                  <input
                    type="number"
                    id={`participants-${workshop.id}`}
                    name={`participants-${workshop.id}`}
                    defaultValue="1"
                    min="1"
                    max="10" // Assuming a max of 10 for now
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <button
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                  onClick={() => alert('View Details for ' + workshop.title + ' (not implemented yet)')} // Placeholder action
                >
                  View Details
                </button>
                <button
                  className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                  onClick={async () => {
                    const participantsInput = document.getElementById(`participants-${workshop.id}`) as HTMLInputElement;
                    const quantity = parseInt(participantsInput?.value || '1', 10);

                    // Mock data for now, as per requirements
                    const mockWorkshopId = `workshop_${workshop.id}`; // Use workshop.id to make it somewhat unique
                    const mockPriceInCents = 5000; // $50.00

                    // setIsLoading(true); // Future: set loading state
                    // setError(null); // Future: clear previous errors

                    try {
                      const response = await fetch('/api/checkout_sessions', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          workshopId: mockWorkshopId,
                          price: mockPriceInCents, // This would ideally be determined by workshopId on the backend
                          quantity: quantity,
                        }),
                      });

                      // setIsLoading(false); // Future: clear loading state

                      if (!response.ok) {
                        const errorData = await response.json();
                        console.error('Failed to create Stripe session:', errorData);
                        alert(`Error: ${errorData.error || 'Failed to create checkout session.'}`);
                        // setError(errorData.error || 'Failed to create checkout session.'); // Future: set error state
                        return;
                      }

                      const session = await response.json();
                      if (session.url) {
                        window.location.href = session.url;
                      } else {
                        console.error('Stripe session URL not found in response:', session);
                        alert('Error: Checkout session URL not found.');
                        // setError('Checkout session URL not found.'); // Future: set error state
                      }
                    } catch (err) {
                      // setIsLoading(false); // Future: clear loading state
                      console.error('Error during checkout process:', err);
                      const message = err instanceof Error ? err.message : 'An unexpected error occurred.';
                      alert(`Error: ${message}`);
                      // setError(message); // Future: set error state
                    }
                  }}
                >
                  Proceed to Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
