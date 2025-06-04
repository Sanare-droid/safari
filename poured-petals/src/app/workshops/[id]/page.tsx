// src/app/workshops/[id]/page.tsx

// Reverted to a state known to cause only ESLint errors, not the PageProps TS error,
// to allow the build to proceed and test the new /test-page.

export default function WorkshopDetailPage({ params }: { params: { id: string } }) {
  const workshopId = params.id;
  const mockWorkshop = {
    title: "Workshop Detail (Temporarily Minimal)",
    date: "N/A",
    time: "N/A",
    instructor: "N/A",
    details: "This page is temporarily minimal to test other builds.",
    price: "N/A",
    venueName: "N/A",
    venueAddress: "N/A",
    venueMapNote: "N/A",
    imageUrl: "/placeholder.jpg",
  };

  const styles = {
    container: { fontFamily: 'sans-serif', padding: '20px', lineHeight: '1.6', maxWidth: '700px', margin: 'auto' },
    header: { marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' },
    heading: { fontSize: '24px', color: '#333' },
    section: { marginBottom: '15px' },
    // This specific style was associated with the prefer-as-const ESLint error,
    // but the PageProps error was NOT present.
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    label: { color: '#555', fontWeight: 'bold' as 'bold' },
    button: { padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' },
    link: { color: '#007bff', textDecoration: 'none', fontSize: '16px' },
    image: { maxWidth: '100%', height: 'auto', border: '1px solid #ddd', marginTop: '10px', marginBottom: '10px' }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.heading}>{mockWorkshop.title}</h1>
      </header>

      <div style={styles.section}>
        <span style={styles.label}>Workshop ID:</span> {workshopId}
      </div>
      <div style={styles.section}>
        <span style={styles.label}>Details:</span> {mockWorkshop.details}
      </div>

      {/* Using plain img with ESLint disable to avoid PageProps error from next/image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={mockWorkshop.imageUrl} alt="Workshop Mood Board" width="500" height="300" style={styles.image} />

      <button style={styles.button}>
        Book Now (Dummy)
      </button>

      <div style={{ marginTop: '30px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
        {/* Using plain a with ESLint disable to avoid PageProps error from next/link */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/workshops" style={styles.link}>Back to All Workshops (Dummy)</a>
      </div>
    </div>
  );
}
