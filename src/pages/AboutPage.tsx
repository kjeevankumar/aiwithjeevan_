import React from 'react';
import { 
  Send, 
  Code2, 
  Award, 
  Terminal, 
  ArrowUpRight,
  Globe
} from 'lucide-react';
import { creatorProfile } from '../data/mockData';
import { YoutubeIcon, GithubIcon } from '../components/ui/SocialIcons';
import brandLogo from '../assets/brand/ai-with-jeevan-logo.png';

export const AboutPage: React.FC = () => {
  const tools = [
    'Python', 'PyTorch', 'Transformers', 'Hugging Face', 
    'LangChain', 'FastAPI', 'Docker', 'NumPy', 
    'Pandas 2.0', 'Scikit-Learn', 'Pinecone', 'Ollama'
  ];

  return (
    <div style={{ paddingTop: '2rem' }}>
      <div className="container">
        {/* Profile Hero */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem 1.75rem',
          marginBottom: '2.5rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            {/* Visual Profile Avatar with Official Logo */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ position: 'relative', marginBottom: '1rem' }}>
                <img
                  src={brandLogo}
                  alt="AI with Jeevan Official Logo"
                  style={{
                    width: '8.5rem',
                    height: '8.5rem',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    boxShadow: '0 0 35px rgba(56, 189, 248, 0.35)',
                    border: '3px solid rgba(56, 189, 248, 0.45)',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '6px',
                  right: '6px',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  border: '3px solid #0e1422'
                }} />
              </div>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc' }}>
                AI with Jeevan
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 700, marginTop: '0.15rem' }}>
                @aiwithjeevan_
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                AI Engineer • Educator • Open Source Builder
              </p>
            </div>

            {/* Biography */}
            <div>
              <span className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>
                The Creator Behind the Platform
              </span>
              <h1 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1.25, marginBottom: '0.85rem' }}>
                Demystifying Artificial Intelligence with code you can actually understand and run.
              </h1>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                Hey there! I am Jeevan. I started <strong>@aiwithjeevan_</strong> with one straightforward realization: machine learning education had become overly academic and detached from what industry engineering teams actually need.
              </p>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Too many courses spend six months deriving abstract proofs without ever teaching how to handle dirty tabular data, write a clean PyTorch training loop, or deploy an LLM microservice with FastAPI and Docker.
              </p>
            </div>
          </div>
        </div>

        {/* The 3 Core Philosophies */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', marginBottom: '1.25rem', textAlign: 'center' }}>
            The AI with Jeevan Principles
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <div className="interactive-card">
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '0.75rem'
              }}>
                <Terminal size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>
                1. Code First, Proofs Second
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                We believe you learn faster by seeing gradient descent update weights in a NumPy array before memorizing abstract Lagrange multipliers.
              </p>
            </div>

            <div className="interactive-card">
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(52, 211, 153, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#34d399',
                marginBottom: '0.75rem'
              }}>
                <Code2 size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>
                2. Beyond Jupyter Notebooks
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                Real companies do not ship Jupyter notebooks. Every pathway teaches Docker containerization, asynchronous endpoints, and production testing.
              </p>
            </div>

            <div className="interactive-card">
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(192, 132, 252, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c084fc',
                marginBottom: '0.75rem'
              }}>
                <Award size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>
                3. Zero Gatekeeping
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                Quality education shouldn't cost ₹50,000 bootcamps. Our roadmaps and series are 100% free, and 1:1 guidance is just ₹50 to prevent no-shows.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: '2rem',
          marginBottom: '3rem'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.75rem' }}>
            Primary Engineering Stack &amp; Tools
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            The exact technologies we use across the 45-day series and 90-day roadmap:
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tools.map((t, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-medium)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Official Social Channels Card Grid */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', marginBottom: '1.25rem', textAlign: 'center' }}>
            Connect Across Official Platforms
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {/* Instagram Primary Brand Card with Official Logo */}
            <a
              href={creatorProfile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                border: '1px solid rgba(225, 48, 108, 0.35)',
                backgroundColor: 'rgba(225, 48, 108, 0.05)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{
                  width: '2.8rem',
                  height: '2.8rem',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid rgba(225, 48, 108, 0.5)',
                  boxShadow: '0 0 12px rgba(225, 48, 108, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <img
                    src={brandLogo}
                    alt="@aiwithjeevan_"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>Instagram (Official)</div>
                  <div style={{ fontSize: '0.75rem', color: '#f472b6', fontWeight: 600 }}>@aiwithjeevan_ (120K+)</div>
                </div>
              </div>
              <ArrowUpRight size={18} color="#f472b6" />
            </a>

            {/* Personal Portfolio */}
            <a
              href={creatorProfile.githubPagesUrl || creatorProfile.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-card"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{
                  width: '2.8rem',
                  height: '2.8rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(56, 189, 248, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Globe size={22} color="#38bdf8" />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>Personal Portfolio</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary)' }}>kjeevankumar.g1</div>
                </div>
              </div>
              <ArrowUpRight size={18} color="#38bdf8" />
            </a>

            {/* YouTube */}
            <a
              href={creatorProfile.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-card"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{
                  width: '2.8rem',
                  height: '2.8rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <YoutubeIcon size={22} color="#ef4444" />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>YouTube Channel</div>
                  <div style={{ fontSize: '0.75rem', color: '#fca5a5' }}>@aiwithjeevan944</div>
                </div>
              </div>
              <ArrowUpRight size={18} color="#ef4444" />
            </a>

            <a
              href={creatorProfile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-card"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{
                  width: '2.8rem',
                  height: '2.8rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <GithubIcon size={22} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>GitHub</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Open Source Repos</div>
                </div>
              </div>
              <ArrowUpRight size={18} color="var(--text-muted)" />
            </a>

            <a
              href={creatorProfile.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-card"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{
                  width: '2.8rem',
                  height: '2.8rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(56, 189, 248, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Send size={20} color="#38bdf8" />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>Telegram Community</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Code Drops &amp; Discussions</div>
                </div>
              </div>
              <ArrowUpRight size={18} color="var(--text-muted)" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
