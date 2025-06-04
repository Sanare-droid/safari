// src/app/test-page/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function TestPage() {
  // Basic inline styles for this test page
  const styles = {
    container: { fontFamily: 'sans-serif', padding: '20px', lineHeight: '1.6' },
    heading: { fontSize: '24px', color: '#333', marginBottom: '20px' },
    link: { color: '#007bff', textDecoration: 'none', marginRight: '10px' },
    image: { border: '1px solid #ddd', marginTop: '10px', marginBottom: '10px' },
    paragraph: { marginTop: '15px', fontSize: '14px', color: '#555' }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Test Page</h1>
      <Link href="/" style={styles.link}>Go to Home</Link>
      <br />
      <Image
        src="/placeholder.jpg"
        alt="Placeholder"
        width={100}
        height={100}
        style={styles.image}
      />
      <p style={styles.paragraph}>
        This page is for testing build stability with Next.js components.
      </p>
    </div>
  );
}
