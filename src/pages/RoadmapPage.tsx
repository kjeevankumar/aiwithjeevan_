import React from 'react';
import { Compass, ExternalLink, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RoadmapPage: React.FC = () => {
  const roadmapUrl = 'https://aiml-90-days-challenge.vercel.app/';

  return (
    <div style={{ paddingTop: '2.5rem' }}>
      <div className="container" style={{ maxWidth: '780px' }}>
        {/* Header Hero */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2.5rem'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.3rem 0.8rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(129, 140, 248, 0.1)',
            color: 'var(--accent-indigo)',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '0.75rem'
          }}>
            <Compass size={14} />
            <span>Official Roadmap</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            90-Day AI/ML Roadmap
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            Follow my structured 90-day AI/ML learning journey.
          </p>

          <a
            href={roadmapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span>Open Roadmap</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Roadmap Feature Card */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
            About the 90-Day AI/ML Challenge
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
            The 90-Day Challenge is my complete learning blueprint built to take you step-by-step from core foundations up through modern machine learning and generative AI engineering.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Visit the live roadmap web app to follow daily milestones, recommended topics, and structured progression.
          </p>
        </div>

        {/* 1:1 Guidance Callout */}
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
              Need Help Structuring Your Study Plan?
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              Book a 15-minute 1:1 guidance session to discuss how to pace this roadmap alongside your schedule.
            </p>
          </div>

          <Link to="/booking" className="btn btn-glow-brand btn-sm">
            <CalendarCheck size={14} />
            <span>Book a 1:1 — ₹50</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
