import Link from 'next/link';

const highlightGreen = '#39ff14';

export default function BlogPage() {
  return (
    <main>


      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: highlightGreen, marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: '600' }}>
          Blog
        </h2>
        <div style={{
          border: '1px solid #333333',
          padding: '1.5rem',
          borderRadius: '8px',
          backgroundColor: '#0f0f0f',
        }}>
          <p style={{ margin: 0, lineHeight: '1.7', color: '#cccccc', fontSize: '1rem' }}>
            coming soon...
          </p>
        </div>
      </section>
    </main>
  );
}
