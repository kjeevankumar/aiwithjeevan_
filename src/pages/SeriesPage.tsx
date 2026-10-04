import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ExternalLink, CalendarCheck } from 'lucide-react';
import { creatorProfile } from '../data/mockData';
import { InstagramIcon } from '../components/ui/SocialIcons';

export const SeriesPage: React.FC = () => {
  const highlights = [
    'Python & Vectorized Math for Machine Learning',
    'Exploratory Data Analysis and Feature Engineering',
    'Classical ML Algorithms & Tree Models',
    'PyTorch Fundamentals & Custom Neural Networks',
    'Transformers, Self-Attention & LLM Principles',
    'Practical RAG Architectures & GenAI Tooling'
  ];

  return (
    <div style={{ paddingTop: '2.5rem' }}>
      <div className="container" style={{ maxWidth: '780px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.3rem 0.8rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            color: 'var(--primary)',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '0.75rem'
          }}>
            <Sparkles size={14} />
            <span>Completed Instagram Series</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            45-Day AI/ML Series
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            I completed this 45-day practical series on my Instagram profile (<strong>@aiwithjeevan_</strong>), breaking down key concepts daily into simple, visual reels.
          </p>

          <a
            href={creatorProfile.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <InstagramIcon size={18} color="#000" />
            <span>Watch Series on Instagram (@aiwithjeevan_)</span>
            <ExternalLink size={15} />
          </a>
        </div>

        {/* Overview Card */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
            What Was Covered in the 45 Days
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
            Every reel was crafted to demystify complex theoretical topics without unnecessary jargon:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {highlights.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.65rem 0.85rem',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.875rem',
                  color: 'var(--text-primary)'
                }}
              >
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps CTA */}
        <div style={{
          backgroundColor: 'var(--gradient-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: '1.75rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>
              Have Questions About Any Series Topic?
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              You can book a 15-minute 1:1 conversation or submit a question directly.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/booking" className="btn btn-glow-brand btn-sm">
              <CalendarCheck size={14} />
              <span>Book 1:1 Guidance (₹50)</span>
            </Link>
            <Link to="/resources" className="btn btn-secondary btn-sm">
              <span>View Shared Resources</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
