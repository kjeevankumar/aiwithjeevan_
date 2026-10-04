import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div style={{ padding: '6rem 1rem', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '500px' }}>
        <div style={{
          fontSize: '4.5rem',
          fontWeight: 900,
          background: 'var(--gradient-brand)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1
        }}>
          404
        </div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginTop: '1rem', marginBottom: '0.5rem' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>
          The learning pathway or resource you are looking for has been moved or does not exist.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            <span>Back to Creator Hub</span>
          </Link>
          <Link to="/series" className="btn btn-secondary">
            <Compass size={16} />
            <span>45-Day Series</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
