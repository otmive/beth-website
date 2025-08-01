import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ 
          color: '#1f2937', 
          marginBottom: '2rem', 
          fontSize: '2rem',
          fontWeight: '600'
        }}>
          About Me
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '4rem',
          alignItems: 'start'
        }}>
          <div>
            <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: '#374151', fontSize: '1.05rem' }}>
              I'm a PhD student at the University of Bristol, working in the intersection of Computer Vision and Natural Language Processing. 
              My research focuses on Compositional Generalisation in Vision-Language Models, specifically understanding how these models 
              compose and interpret spatial relationships between objects in images.
            </p>
            <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: '#374151', fontSize: '1.05rem' }}>
            I completed a 3-month internship developing a tool to help radiologists identify meaningful differences in reports, supporting the training of junior doctors.
            </p>
            <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: '#374151', fontSize: '1.05rem' }}>
              Before starting my PhD, I completed my MEng in Engineering Mathematics at the University of Bristol. After graduating, I worked as a Software Engineer at Wilxite, where I built internal web applications for data management, invoicing, and other business operations. 
            </p>
          </div>
          <div>
            <p style={{ lineHeight: '1.7', color: '#374151', fontSize: '1.05rem' }}>
            When I’m not coding or writing papers, I’m probably out running, rock climbing, or catching up with friends at the pub. I'm always interested in collaborating on interesting projects and discussing the future of AI!
            </p>
            <div style={{ 
              marginTop: '2rem',
              padding: '2rem',
              backgroundColor: '#f8fafc',
              borderRadius: '16px',
              border: '1px solid #e2e8f0'
            }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#1f2937', fontSize: '1.2rem' }}>
                Quick Facts
              </h4>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#374151', fontSize: '1.05rem' }}>
                <li>PhD in at the Interactive AI CDT, University of Bristol</li>
                <li>MEng in Engineering Mathematics, University of Bristol</li>
                <li>Focus: Vision-Language Models & Compositional Generalization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '5rem' }}>
        <h2 style={{ 
          color: '#1f2937', 
          marginBottom: '2rem', 
          fontSize: '2rem',
          fontWeight: '600'
        }}>
          Recent Work
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2.5rem' }}>
          <div style={{
            border: '1px solid #e5e7eb',
            padding: '2.5rem',
            borderRadius: '16px',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              backgroundColor: '#667eea', 
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <span style={{ color: 'white', fontSize: '1.5rem' }}>🔬</span>
            </div>
            <h3 style={{ marginBottom: '1rem', color: '#1f2937', fontSize: '1.3rem' }}>
              Spatial Compositional Reasoning and Negation in Vision-Language Models
            </h3>
            <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              <strong>Status:</strong> In Progress • <strong>Expected:</strong> 2025
            </p>
            <p style={{ lineHeight: '1.7', color: '#374151', fontSize: '1.05rem' }}>
            I'm investigating how vision-language models like LLaVA handle negation,
             by comparing how their visual attention shifts when processing positive vs.
              negated versions of the same sentence—and how this compares to human patterns.
            </p>
          </div>

          <div style={{
            border: '1px solid #e5e7eb',
            padding: '2.5rem',
            borderRadius: '16px',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              backgroundColor: '#f59e0b', 
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <span style={{ color: 'white', fontSize: '1.5rem' }}>🛡️</span>
            </div>
            <h3 style={{ marginBottom: '1rem', color: '#1f2937', fontSize: '1.3rem' }}>
            Semantic Similarity in Radiology Reports via
            LLMs and NER
            </h3>
            <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              <strong>Status:</strong> Paper Accepted at AI Bio Workshop at ECAI 2025
            </p>
            <p style={{ lineHeight: '1.7', color: '#374151', fontSize: '1.05rem' }}>
            We explore how large language models can help evaluate junior radiologists' reports by identifying meaningful 
            differences from senior-edited versions. Our method, Llama-EntScore, combines LLaMA 3.1 with named-entity 
            recognition to produce interpretable similarity scores, achieving 93% accuracy within ±1 of expert 
            ratings—outperforming LLMs and NER alone.
            </p>
          </div>

          <div style={{
            border: '1px solid #e5e7eb',
            padding: '2.5rem',
            borderRadius: '16px',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              backgroundColor: '#10b981', 
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <span style={{ color: 'white', fontSize: '1.5rem' }}>🔍</span>
            </div>
            <h3 style={{ marginBottom: '1rem', color: '#1f2937', fontSize: '1.3rem' }}>
            Evaluating Compositional Generalisation in VLMs and Diffusion Models
            </h3>
            <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              <strong>Status:</strong> Paper accepted at IWCS 2025
            </p>
            <p style={{ lineHeight: '1.7', color: '#374151', fontSize: '1.05rem' }}>
            We explore whether diffusion models can better handle compositional generalisation—understanding how objects, attributes, and relationships combine in images—compared to models like CLIP. While diffusion models do well matching objects with attributes, all—including CLIP—struggle with spatial relationships like "left" and "right." This highlights ongoing challenges in teaching AI to understand how parts of a scene relate.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ 
          color: '#1f2937', 
          marginBottom: '2rem', 
          fontSize: '2rem',
          fontWeight: '600'
        }}>
          News & Updates
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* <div style={{
            border: '1px solid #e5e7eb',
            padding: '2rem',
            borderRadius: '16px',
            backgroundColor: '#f0f9ff',
            borderLeft: '4px solid #3b82f6'
          }}> */}
            {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <h3 style={{ margin: 0, color: '#1f2937', fontSize: '1.2rem' }}>
                🎉 Paper Accepted at ICML 2024!
              </h3>
              <span style={{ color: '#6b7280', fontSize: '0.9rem', whiteSpace: 'nowrap', marginLeft: '1rem' }}>
                December 2024
              </span>
            </div>
            <p style={{ margin: 0, lineHeight: '1.7', color: '#374151', fontSize: '1.05rem' }}>
              Our paper "Interpretability Methods for Vision-Language Models: A Comparative Study" has been accepted 
              for presentation at ICML 2024 in Vienna, Austria. Looking forward to sharing our findings with the community!
            </p>
          </div> */}

          {/* <div style={{
            border: '1px solid #e5e7eb',
            padding: '2rem',
            borderRadius: '16px',
            backgroundColor: '#f0f9ff',
            borderLeft: '4px solid #3b82f6'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <h3 style={{ margin: 0, color: '#1f2937', fontSize: '1.2rem' }}>
                🗣️ Invited Talk at Bristol AI Seminar Series
              </h3>
              <span style={{ color: '#6b7280', fontSize: '0.9rem', whiteSpace: 'nowrap', marginLeft: '1rem' }}>
                November 2024
              </span>
            </div>
            <p style={{ margin: 0, lineHeight: '1.7', color: '#374151', fontSize: '1.05rem' }}>
              Presented my latest research on compositional generalization in vision-language models to the Bristol AI community. 
              Great discussions and feedback from colleagues!
            </p>
          </div> */}

          <div style={{
            border: '1px solid #e5e7eb',
            padding: '2rem',
            borderRadius: '16px',
            backgroundColor: '#f0f9ff',
            borderLeft: '4px solid #3b82f6'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <h3 style={{ margin: 0, color: '#1f2937', fontSize: '1.2rem' }}>
                🏆 Best Poster at UK AI 2025
              </h3>
              <span style={{ color: '#6b7280', fontSize: '0.9rem', whiteSpace: 'nowrap', marginLeft: '1rem' }}>
                June 2025
              </span>
            </div>
            <p style={{ margin: 0, lineHeight: '1.7', color: '#374151', fontSize: '1.05rem' }}>
              Honored to receive the Best Poster Award at the UK AI 2025 Conference supported by HDR (National Institue for Health Data Research). I presented my work on using LLMs to evaluate radiology reports.
            </p>
          </div>

          <div style={{
            border: '1px solid #e5e7eb',
            padding: '2rem',
            borderRadius: '16px',
            backgroundColor: '#f0f9ff',
            borderLeft: '4px solid #3b82f6'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <h3 style={{ margin: 0, color: '#1f2937', fontSize: '1.2rem' }}>
                🌍 Attended CVPR 2024 in Seattle
              </h3>
              <span style={{ color: '#6b7280', fontSize: '0.9rem', whiteSpace: 'nowrap', marginLeft: '1rem' }}>
                June 2024
              </span>
            </div>
            <p style={{ margin: 0, lineHeight: '1.7', color: '#374151', fontSize: '1.05rem' }}>
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
