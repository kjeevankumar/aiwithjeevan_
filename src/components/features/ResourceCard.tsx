import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { ResourceItem } from '../../types';

interface ResourceCardProps {
  resource: ResourceItem;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <div className="interactive-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      {/* Category Pill */}
      {resource.category && (
        <div>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            color: 'var(--primary)',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            padding: '0.2rem 0.6rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(56, 189, 248, 0.2)'
          }}>
            {resource.category}
          </span>
        </div>
      )}

      {/* Title & Description */}
      <div>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem', lineHeight: '1.35' }}>
          {resource.title}
        </h3>
        {resource.description && (
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
            {resource.description}
          </p>
        )}
      </div>

      {/* Action CTA Button */}
      <div style={{
        marginTop: 'auto',
        paddingTop: '0.75rem',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            textDecoration: 'none'
          }}
        >
          <span>Open Resource</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};
