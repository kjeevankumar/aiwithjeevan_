import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, CalendarCheck, Briefcase, MessageSquare } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const location = useLocation();

  const items = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Resources', path: '/resources', icon: BookOpen },
    { label: '1:1 Book', path: '/booking', icon: CalendarCheck, isSpecial: true },
    { label: 'Jobs', path: '/jobs', icon: Briefcase },
    { label: 'Q&A', path: '/qna', icon: MessageSquare },
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'rgba(9, 13, 22, 0.95)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid var(--border-subtle)',
      paddingBottom: 'env(safe-area-inset-bottom, 8px)',
      display: 'block'
    }} className="mobile-bottom-bar">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '3.85rem',
        maxWidth: '540px',
        margin: '0 auto',
        padding: '0 0.5rem'
      }}>
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          if (item.isSpecial) {
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.15rem',
                  textDecoration: 'none',
                  flex: 1,
                  position: 'relative'
                }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #0284c7 0%, #6366f1 100%)',
                  width: '2.3rem',
                  height: '2.3rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 2px 10px rgba(99, 102, 241, 0.4)',
                  marginTop: '-0.75rem',
                  border: '2px solid #090d16'
                }}>
                  <Icon size={16} />
                </div>
                <span style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: isActive ? '#38bdf8' : '#e2e8f0',
                  letterSpacing: '-0.01em'
                }}>
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.2rem',
                textDecoration: 'none',
                flex: 1,
                padding: '0.35rem 0',
                transition: 'all var(--transition-fast)'
              }}
            >
              <div style={{
                position: 'relative',
                color: isActive ? 'var(--primary)' : 'var(--text-muted)'
              }}>
                <Icon size={20} strokeWidth={isActive ? 2.3 : 1.8} />
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)'
                  }} />
                )}
              </div>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                letterSpacing: '-0.01em'
              }}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .mobile-bottom-bar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
