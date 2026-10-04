import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  icon?: LucideIcon;
  accentColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  label, 
  value, 
  subtext, 
  icon: Icon,
  accentColor = 'var(--primary)'
}) => {
  return (
    <div style={{
      background: 'var(--gradient-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.25rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {Icon && (
        <div style={{
          width: '3rem',
          height: '3rem',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'rgba(56, 189, 248, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: accentColor,
          flexShrink: 0,
          border: '1px solid rgba(56, 189, 248, 0.2)'
        }}>
          <Icon size={24} />
        </div>
      )}
      <div>
        <div style={{
          fontSize: '1.75rem',
          fontWeight: 800,
          color: '#ffffff',
          lineHeight: 1.1,
          letterSpacing: '-0.02em'
        }}>
          {value}
        </div>
        <div style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          color: 'var(--text-secondary)',
          marginTop: '0.2rem'
        }}>
          {label}
        </div>
        {subtext && (
          <div style={{
            fontSize: '0.75rem',
            color: 'var(--text-faint)',
            marginTop: '0.15rem'
          }}>
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
};
