import type { ResearchItem } from './researchItems';

const highlightGreen = '#39ff14';

const linkStyle = {
  color: highlightGreen,
  textDecoration: 'none',
  border: `1px solid ${highlightGreen}`,
  borderRadius: '999px',
  padding: '0.3rem 0.75rem',
  fontSize: '0.85rem',
  backgroundColor: 'rgba(57, 255, 20, 0.08)',
};

export default function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <div
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
        {item.status}
      </p>
      <p style={{ lineHeight: '1.7', color: '#cccccc', fontSize: '1rem' }}>
        {item.summary}
      </p>
      {(item.paperUrl || item.codeUrl) && (
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {item.paperUrl && (
            <a href={item.paperUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Paper
            </a>
          )}
          {item.codeUrl && (
            <a href={item.codeUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Code
            </a>
          )}
        </div>
      )}
    </div>
  );
}
