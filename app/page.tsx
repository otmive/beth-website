import Link from 'next/link';

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
              I'm a PhD student at the University of Bristol, working in the intersection of Computer Vision and Natural Language Processing. 
              My research focuses on Compositional Generalisation in Vision-Language Models, specifically understanding how these models 
              compose and interpret spatial relationships between objects in images.
            </p>
            <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: '#cccccc', fontSize: '1rem' }}>
            I completed a 3-month internship developing a tool to help radiologists identify meaningful differences in reports, supporting the training of junior doctors.
            </p>
            <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: '#cccccc', fontSize: '1rem' }}>
              Before starting my PhD, I completed my MEng in Engineering Mathematics at the University of Bristol. After graduating, I worked as a Software Engineer at Wilxite, where I built internal web applications for data management, invoicing, and other business operations. 
            </p>
            <p style={{ lineHeight: '1.7', color: '#cccccc', fontSize: '1rem' }}>
            When I'm not coding or writing papers, I'm probably out running, rock climbing, or catching up with friends at the pub. I'm always interested in collaborating on interesting projects and discussing the future of AI!
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
          <div style={{
            border: '1px solid #333333',
            padding: '2rem',
            borderRadius: '8px',
            backgroundColor: '#2a2a2a',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            <h3 style={{ marginBottom: '1rem', color: highlightGreen, fontSize: '1.2rem' }}>
              Spatial Compositional Reasoning and Negation in Vision-Language Models
            </h3>
            <p style={{ color: '#999999', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              <strong>Status:</strong> In Progress • <strong>Expected:</strong> 2025
            </p>
            <p style={{ lineHeight: '1.7', color: '#cccccc', fontSize: '1rem' }}>
            I'm investigating how vision-language models like LLaVA handle negation,
             by comparing how their visual attention shifts when processing positive vs.
              negated versions of the same sentence—and how this compares to human patterns.
            </p>
          </div>

          <div style={{
            border: '1px solid #333333',
            padding: '2rem',
            borderRadius: '8px',
            backgroundColor: '#2a2a2a',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            <h3 style={{ marginBottom: '1rem', color: highlightGreen, fontSize: '1.2rem' }}>
            Semantic Similarity in Radiology Reports via
            LLMs and NER
            </h3>
            <p style={{ color: '#999999', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              <strong>Status:</strong> Paper Accepted at AI Bio Workshop at ECAI 2025
            </p>
            <p style={{ lineHeight: '1.7', color: '#cccccc', fontSize: '1rem' }}>
            We explore how large language models can help evaluate junior radiologists' reports by identifying meaningful 
            differences from senior-edited versions. Our method, Llama-EntScore, combines LLaMA 3.1 with named-entity 
            recognition to produce interpretable similarity scores, achieving 93% accuracy within ±1 of expert 
            ratings—outperforming LLMs and NER alone.
            </p>
          </div>

          <div style={{
            border: '1px solid #333333',
            padding: '2rem',
            borderRadius: '8px',
            backgroundColor: '#2a2a2a',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            <h3 style={{ marginBottom: '1rem', color: highlightGreen, fontSize: '1.2rem' }}>
            Evaluating Compositional Generalisation in VLMs and Diffusion Models
            </h3>
            <p style={{ color: '#999999', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              <strong>Status:</strong> Paper accepted at IWCS 2025
            </p>
            <p style={{ lineHeight: '1.7', color: '#cccccc', fontSize: '1rem' }}>
            We explore whether diffusion models can better handle compositional generalisation—understanding how objects, attributes, and relationships combine in images—compared to models like CLIP. While diffusion models do well matching objects with attributes, all—including CLIP—struggle with spatial relationships like "left" and "right." This highlights ongoing challenges in teaching AI to understand how parts of a scene relate.
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
          News & Updates
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{
            border: '1px solid #333333',
            padding: '1.5rem',
            borderRadius: '8px',
            backgroundColor: '#0f0f0f',
            borderLeft: '4px solid #4a9eff'
          }}>
            <h4 style={{ margin: 0, color: highlightGreen, fontSize: '1.1rem' }}>
              🏆 Best Poster at UK AI 2025
            </h4>
            <span style={{ color: '#999999', fontSize: '0.85rem' }}>
              June 2025
            </span>
            <p style={{ margin: 0, lineHeight: '1.7', color: '#cccccc', fontSize: '1rem' }}>
              Honored to receive the Best Poster Award at the UK AI 2025 Conference supported by HDR (National Institue for Health Data Research). I presented my work on using LLMs to evaluate radiology reports.
            </p>
          </div>

          <div style={{
            border: '1px solid #333333',
            padding: '1.5rem',
            borderRadius: '8px',
            backgroundColor: '#0f0f0f',
            borderLeft: '4px solid #4a9eff'
          }}>
            <h4 style={{ margin: 0, color: highlightGreen, fontSize: '1.1rem' }}>
              🌍 Attended CVPR 2024 in Seattle
            </h4>
            <span style={{ color: '#999999', fontSize: '0.85rem' }}>
              June 2024
            </span>
            <p style={{ margin: 0, lineHeight: '1.7', color: '#cccccc', fontSize: '1rem' }}>
              Fantastic experience at CVPR 2024! Attended inspiring talks on computer vision, networked with researchers, 
              and presented a poster on our compositional generalisation project. The conference was incredibly valuable for 
              staying up-to-date with the latest developments in the field.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
