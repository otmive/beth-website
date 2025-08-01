import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata = {
  title: 'Beth Pearson - PhD Student on the Interactive AI CDT at Univeristy of Bristol',
  description: 'Personal academic website of Beth Pearson, PhD student at University of Bristol researching Compositional Generalization in Vision-Language Models',
  keywords: 'Beth Pearson, PhD student, computer science, vision-language models, compositional generalization, University of Bristol, AI research',
  author: 'Beth Pearson',
  openGraph: {
    title: 'Beth Pearson - PhD Student in Computer Science',
    description: 'Researching Compositional Generalization in Vision-Language Models at University of Bristol',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: 'var(--font-geist-sans)',
        backgroundColor: '#fafafa',
        color: '#1a1a1a',
        lineHeight: 1.6
      }}>
        <div style={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <header style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '2rem 1rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              opacity: 0.3
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                maxWidth: '1400px',
                margin: '0 auto'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center' }}>
                  {/* ## REPLACE THIS DIV WITH YOUR PROFILE IMAGE ## */}
                  <img 
                    src="/profile.jpg" 
                    alt="Beth Pearson"
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid rgba(255,255,255,0.3)',
                      flexShrink: 0
                    }}
                  />
                  <div>
                    <h1 style={{
                      margin: 0,
                      fontSize: '2rem',
                      fontWeight: '700',
                      letterSpacing: '-0.02em',
                      marginBottom: '0.5rem'
                    }}>
                      Beth Pearson
                    </h1>
                    <p style={{
                      margin: 0,
                      fontSize: '1rem',
                      opacity: 0.9,
                      fontWeight: '400'
                    }}>
                      PhD Student at Interactive AI CDT • University of Bristol
                    </p>
                    <p style={{
                      margin: '0.5rem 0 0 0',
                      fontSize: '0.9rem',
                      opacity: 0.8,
                      fontStyle: 'italic'
                    }}>
                      Researching Compositional Generalization in Vision-Language Models
                    </p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}>
                  <a href="https://github.com/otmive" target="_blank" rel="noopener noreferrer" style={{
                    padding: '0.5rem 0.75rem',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: '500',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <span>🐙</span> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/beth-pearson-6175b4161/" target="_blank" rel="noopener noreferrer" style={{
                    padding: '0.5rem 0.75rem',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: '500',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <span>💼</span> LinkedIn
                  </a>
                  <a href="mailto:beth.pearson@bristol.ac.uk" style={{
                    padding: '0.5rem 0.75rem',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: '500',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <span>📧</span> Email
                  </a>
                </div>
              </div>
            </div>
          </header>

          <main style={{ 
            flex: '1 0 auto',
            padding: '2rem 1rem',
            backgroundColor: 'white',
            maxWidth: '1400px',
            margin: '0 auto',
            width: '100%'
          }}>
            {children}
          </main>

          <footer style={{
            backgroundColor: '#1f2937',
            color: 'white',
            padding: '1.5rem 1rem',
            marginTop: 'auto',
            width: '100%'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxWidth: '1400px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <div>
                <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>
                  © {new Date().getFullYear()} Beth Pearson • University of Bristol
                </p>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem', opacity: 0.6 }}>
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
              <div style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a href="https://github.com/otmive" target="_blank" rel="noopener noreferrer" style={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.8,
                  transition: 'opacity 0.2s ease'
                }}>
                  GitHub
                </a>
                <span style={{ opacity: 0.4 }}>•</span>
                <a href="https://www.linkedin.com/in/beth-pearson-6175b4161/" target="_blank" rel="noopener noreferrer" style={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.8,
                  transition: 'opacity 0.2s ease'
                }}>
                  LinkedIn
                </a>
                <span style={{ opacity: 0.4 }}>•</span>
                <a href="mailto:beth.pearson@bristol.ac.uk" style={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.8,
                  transition: 'opacity 0.2s ease'
                }}>
                  Email
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
