import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Home, 
  BookOpen, 
  Briefcase, 
  MessageSquare, 
  CalendarCheck, 
  User, 
  Compass, 
  Sparkles,
  Globe 
} from 'lucide-react';
import { creatorProfile } from '../../data/mockData';
import { InstagramIcon, YoutubeIcon, GithubIcon } from '../ui/SocialIcons';
import brandLogo from '../../assets/brand/ai-with-jeevan-logo.png';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  if (!isOpen) return null;

  const links = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Resources Hub', path: '/resources', icon: BookOpen },
    { label: '1:1 Guidance (₹50)', path: '/booking', icon: CalendarCheck, isPill: true },
    { label: 'Job & Internship Links', path: '/jobs', icon: Briefcase },
    { label: 'Ask a Question (Q&A)', path: '/qna', icon: MessageSquare },
    { label: '45-Day Series', path: '/series', icon: Sparkles },
    { label: '90-Day Roadmap', path: '/roadmap', icon: Compass },
    { label: 'About Jeevan', path: '/about', icon: User },
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 100,
      display: 'flex'
    }}>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)'
        }}
      />

      {/* Drawer Content */}
      <div style={{
        position: 'relative',
        width: '82%',
        maxWidth: '320px',
        backgroundColor: 'var(--bg-surface)',
        borderRight: '1px solid var(--border-medium)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        zIndex: 101,
        padding: '1.25rem',
        overflowY: 'auto'
      }}>
        {/* Header with Official Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <img
              src={brandLogo}
              alt="AI with Jeevan"
              style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1.5px solid rgba(56, 189, 248, 0.4)',
                boxShadow: '0 0 10px rgba(56, 189, 248, 0.2)'
              }}
            />
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#f8fafc' }}>
                AI with Jeevan
              </div>
              <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600 }}>
                @aiwithjeevan_
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--bg-surface-elevated)',
              color: 'var(--text-muted)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Links list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', flex: 1 }}>
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.7rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  backgroundColor: isActive 
                    ? 'rgba(56, 189, 248, 0.12)' 
                    : link.isPill 
                      ? 'rgba(99, 102, 241, 0.12)' 
                      : 'transparent',
                  color: isActive 
                    ? 'var(--primary)' 
                    : 'var(--text-primary)',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.9rem',
                  border: link.isPill ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Icon size={18} color={isActive ? 'var(--primary)' : 'currentColor'} />
                  <span>{link.label}</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Social Proof & Footer */}
        <div style={{
          marginTop: 'auto',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            Official Creator Platform
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem' }}>
            <a 
              href={creatorProfile.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#e1306c' }}
              title="Instagram"
            >
              <InstagramIcon size={20} color="#e1306c" />
            </a>
            <a 
              href={creatorProfile.youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#ef4444' }}
              title="YouTube"
            >
              <YoutubeIcon size={20} color="#ef4444" />
            </a>
            <a 
              href={creatorProfile.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--text-primary)' }}
              title="GitHub"
            >
              <GithubIcon size={20} color="#fff" />
            </a>
            <a 
              href={creatorProfile.githubPagesUrl || creatorProfile.portfolioUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#38bdf8' }}
              title="Personal Portfolio"
            >
              <Globe size={20} color="#38bdf8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
