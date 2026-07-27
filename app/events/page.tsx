import Link from 'next/link';
import { eventsItems } from '../eventsItems';

const highlightGreen = '#39ff14';

export default function EventsPage() {
  return (
    <main>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: highlightGreen, marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: '600' }}>
          Events
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {eventsItems.map((item) => (
            <div
              key={`${item.date}-${item.title}`}
              style={{
                border: '1px solid #333333',
                padding: '1.5rem',
                borderRadius: '8px',
                backgroundColor: '#0f0f0f',
                borderLeft: `4px solid ${highlightGreen}`,
              }}
            >
              <h4 style={{ margin: 0, color: highlightGreen, fontSize: '1.1rem' }}>
                {item.title}
              </h4>
              <span style={{ color: '#999999', fontSize: '0.85rem' }}>{item.date}</span>
              <p style={{ margin: 0, lineHeight: '1.7', color: '#cccccc', fontSize: '1rem' }}>
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
