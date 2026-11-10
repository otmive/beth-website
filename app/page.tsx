import { researchItems } from './researchItems';
import ResearchCard from './ResearchCard';
import { eventsItems } from './eventsItems';

const highlightGreen = '#39ff14';

export default function HomePage() {
  return (
    <main>
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          color: highlightGreen, 
          marginBottom: '1.5rem', 
          fontSize: '1.8rem',
          fontWeight: '600'
        }}>
          About Me
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr',
          gap: '2rem',
          alignItems: 'start'
        }}>
          <div>
            <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: '#cccccc', fontSize: '1rem' }}>
              I'm a PhD student at the University of Bristol and part of the Interactive AI CDT.
              My research focuses on compositional generalisation in vision-language models, studying how well they can handle novel combinations of familiar concepts. I am also interested in how these models process complex ideas such as negation and spatial information and using interpretability methods to probe how these models work.
            </p>
            <p style={{
              lineHeight: '1.7',
              marginBottom: '1.5rem',
              color: '#ffffff',
              fontSize: '1rem',
              borderLeft: `4px solid ${highlightGreen}`,
              paddingLeft: '1rem'
            }}>
              I'm currently writing up my thesis and looking for roles in machine learning research and applied AI. If you're hiring, I'd love to hear from you.
            </p>
            <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: '#cccccc', fontSize: '1rem' }}>
            From September to November 2024, I completed a 3-month internship at Rosenfield Health, developing a tool using LLMs to help radiologists identify meaningful differences in reports, supporting the training of junior doctors. This work won the Best Poster Award at UK AI 2025 and was presented as an oral at ECAI 2025.
            </p>
            <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: '#cccccc', fontSize: '1rem' }}>
              Before starting my PhD, I completed my MEng in Engineering Mathematics at the University of Bristol. After graduating, I worked as a Software Developer at Wilxite, where I built internal web applications for data management, invoicing, and other business operations.
            </p>
            <p style={{ lineHeight: '1.7', color: '#cccccc', fontSize: '1rem' }}>
            Outside of research, you'll usually find me running, rock climbing, or at the local pub. I’m always open to interesting collaborations and good conversations about where AI is heading—feel free to reach out.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          color: highlightGreen, 
          marginBottom: '1.5rem', 
          fontSize: '1.8rem',
          fontWeight: '600'
        }}>
          Recent Work
        </h2>
        <div className="work-grid">
          {researchItems.slice(0, 4).map((item) => (
            <ResearchCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          color: highlightGreen, 
          marginBottom: '1.5rem', 
          fontSize: '1.8rem',
          fontWeight: '600'
        }}>
          Events
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {eventsItems.slice(0, 4).map((item) => (
            <div
              key={`${item.date}-${item.title}`}
              style={{
                border: '1px solid #333333',
                padding: '1.5rem',
                borderRadius: '8px',
                backgroundColor: '#0f0f0f',
                borderLeft: `4px solid ${highlightGreen}`
              }}
            >
              <h4 style={{ margin: 0, color: highlightGreen, fontSize: '1.1rem' }}>
                {item.title}
              </h4>
              <span style={{ color: '#999999', fontSize: '0.85rem' }}>
                {item.date}
              </span>
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
