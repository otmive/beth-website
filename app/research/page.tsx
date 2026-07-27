import Link from 'next/link';
import { researchItems } from '../researchItems';

const highlightGreen = '#39ff14';

export default function ResearchPage() {
  return (
    <main>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: highlightGreen, marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: '600' }}>
          Research
        </h2>
        <div className="work-grid">
          {researchItems.map((item) => (
            <div
              key={item.title}
              style={{
                border: '1px solid #333333',
                padding: '2rem',
                borderRadius: '8px',
                backgroundColor: '#2a2a2a',
                boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
              }}
            >
              <h3 style={{ marginBottom: '1rem', color: highlightGreen, fontSize: '1.2rem' }}>
                {item.title}
              </h3>
              <p style={{ color: '#999999', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                <strong>Status:</strong> {item.status}
              </p>
              <p style={{ lineHeight: '1.7', color: '#cccccc', fontSize: '1rem' }}>
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
