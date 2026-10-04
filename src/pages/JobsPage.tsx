import React from 'react';
import { Briefcase, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ResourceCard } from '../components/features/ResourceCard';

export const JobsPage: React.FC = () => {
  const { resources } = useApp();

  // Find all published resources tagged with Jobs or Career
  const jobResources = resources.filter(
    r => r.published && (r.category?.toLowerCase() === 'jobs' || r.category?.toLowerCase() === 'career')
  );

  return (
    <div style={{ paddingTop: '2.5rem' }}>
      <div className="container">
        {/* Header Hero */}
        <div style={{
          textAlign: 'center',
          maxWidth: '720px',
          margin: '0 auto 2.5rem auto'
        }}>
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
            <Briefcase size={14} />
            <span>Opportunities &amp; Guidance</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Job &amp; Internship Resources
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Curated job sheets, career resources, and internship links I share with my followers.
          </p>

          <Link
            to="/booking"
            className="btn btn-glow-brand"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <CalendarCheck size={16} />
            <span>Book Career Guidance (₹50)</span>
          </Link>
        </div>

        {/* Resources List */}
        {jobResources.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem 1.5rem',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-xl)',
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            <Briefcase size={32} color="var(--primary)" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>
              No Job Sheets Added Yet
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Links to hiring sheets, company portals, and templates will appear here as soon as they are added via the Admin panel.
            </p>
            <Link to="/resources" className="btn btn-secondary btn-sm">
              <span>Browse All Resources</span>
            </Link>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem'
          }}>
            {jobResources.map((item) => (
              <ResourceCard key={item.id} resource={item} />
            ))}
          </div>
        )}

        {/* 1:1 Note */}
        <div style={{
          marginTop: '3rem',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: '1.75rem',
          maxWidth: '720px',
          margin: '3rem auto 0 auto',
          textAlign: 'center'
        }}>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>
            Preparing for AI/ML Roles?
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            If you need direction on your resume, portfolio project ideas, or deciding between SDE vs AI roles, you can schedule a 15-minute 1:1 conversation with Jeevan.
          </p>
        </div>
      </div>
    </div>
  );
};
