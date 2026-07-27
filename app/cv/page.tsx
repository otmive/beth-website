import Link from 'next/link';

const highlightGreen = '#39ff14';

export default function CvPage() {
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
          CV
        </h2>
        <div style={{
          border: '1px solid #333333',
          padding: '1.5rem',
          borderRadius: '8px',
          backgroundColor: '#0f0f0f',
        }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <a
              href="/CV_latest.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: highlightGreen,
                textDecoration: 'none',
                border: `1px solid ${highlightGreen}`,
                borderRadius: '999px',
                padding: '0.55rem 1rem',
                display: 'inline-block',
                backgroundColor: 'rgba(57, 255, 20, 0.08)',
                fontWeight: 600,
              }}
            >
              Open CV (PDF)
            </a>
            <a
              href="/CV_latest.pdf"
              download
              style={{
                color: '#e0e0e0',
                textDecoration: 'none',
                border: '1px solid #333333',
                borderRadius: '999px',
                padding: '0.55rem 1rem',
                display: 'inline-block',
                backgroundColor: '#1a1a1a',
                fontWeight: 600,
              }}
            >
              Download (PDF)
            </a>
          </div>

          <div style={{
            width: '100%',
            height: '75vh',
            border: '1px solid #333333',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#1a1a1a',
          }}>
            <iframe
              title="CV preview"
              src="/CV_latest.pdf#view=FitH"
              style={{ width: '100%', height: '100%', border: 0 }}
            />
          </div>

          <p style={{ margin: '1rem 0 0 0', lineHeight: '1.6', color: '#999999', fontSize: '0.9rem' }}>
            Place the file at <code style={{ color: '#cccccc' }}>/public/CV_latest.pdf</code>.
          </p>
        </div>
      </section>
    </main>
  );
}
