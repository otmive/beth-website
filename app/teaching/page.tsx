import Link from 'next/link';

const highlightGreen = '#39ff14';

export default function TeachingPage() {
  return (
    <main>
      <div style={{ marginBottom: '2rem' }}>
        <Link
          href="/"
          style={{
            color: highlightGreen,
            textDecoration: 'none',
            border: `1px solid ${highlightGreen}`,
            borderRadius: '999px',
            padding: '0.45rem 0.85rem',
            display: 'inline-block',
            backgroundColor: 'rgba(57, 255, 20, 0.08)',
          }}
        >
          ← Home
        </Link>
      </div>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: highlightGreen, marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: '600' }}>
          Teaching
        </h2>
        <div style={{
          border: '1px solid #333333',
          padding: '1.5rem',
          borderRadius: '8px',
          backgroundColor: '#0f0f0f',
        }}>
          <p style={{ margin: 0, lineHeight: '1.7', color: '#cccccc', fontSize: '1rem' }}>
            Add teaching materials, tutorials, guest lectures, supervision, or mentoring activities here.
          </p>
        </div>
      </section>
    </main>
  );
}
