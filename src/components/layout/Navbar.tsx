import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  Briefcase, 
  User, 
  Menu, 
  X
} from 'lucide-react';
import { creatorProfile } from '../../data/mockData';
import { InstagramIcon } from '../ui/SocialIcons';
import brandLogo from '../../assets/brand/ai-with-jeevan-logo.png';

interface NavbarProps {
  onOpenMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu, isMobileMenuOpen }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Resources', path: '/resources', icon: BookOpen },
    { name: 'Jobs', path: '/jobs', icon: Briefcase },
    { name: 'Q&A', path: '/qna', icon: MessageSquare },
    { name: 'About', path: '/about', icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 40,
      backgroundColor: 'rgba(7, 10, 18, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
      transition: 'all var(--transition-normal)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '4.25rem'
      }}>
        {/* Brand Logo & Name */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <img
              src={brandLogo}
              alt="AI with Jeevan Logo"
              style={{
                width: '2.6rem',
                height: '2.6rem',
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block',
                border: '1.5px solid rgba(56, 189, 248, 0.4)',
                boxShadow: '0 0 12px rgba(56, 189, 248, 0.25)'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '-1px',
              right: '-1px',
              width: '9px',
              height: '9px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              border: '2px solid #070a12'
            }} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#f8fafc', letterSpacing: '-0.02em' }}>
                AI with Jeevan
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span>@aiwithjeevan_</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '0.35rem' }} className="desktop-nav">
          <Link 
            to="/" 
            style={{
              padding: '0.5rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: isActive('/') ? 'var(--primary)' : 'var(--text-secondary)',
              backgroundColor: isActive('/') ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
              transition: 'all var(--transition-fast)'
            }}
          >
            Home
          </Link>

          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  position: 'relative',
                  padding: '0.5rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.875rem',
                  fontWeight: active ? 600 : 500,
                  color: active ? 'var(--primary)' : 'var(--text-secondary)',
                  backgroundColor: active ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
                  transition: 'all var(--transition-fast)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <a
            href={creatorProfile.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Follow @aiwithjeevan_ on Instagram"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.25rem',
              height: '2.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-surface)',
              color: '#e1306c',
              transition: 'all var(--transition-fast)'
            }}
          >
            <InstagramIcon size={18} color="#e1306c" />
          </a>

          <Link
            to="/booking"
            className="btn btn-glow-brand"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.825rem',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Calendar size={14} />
            <span>1:1 Guidance (₹50)</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={onOpenMobileMenu}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.4rem',
              height: '2.4rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-primary)'
            }}
            className="mobile-toggle-btn"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
