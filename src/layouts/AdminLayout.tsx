import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Link as LinkIcon, 
  MessageSquare, 
  CalendarCheck, 
  Clock, 
  Settings, 
  LogOut, 
  ExternalLink,
  Menu,
  X,
  ShieldCheck
} from 'lucide-react';
import { useAuth } from '../auth/AuthContext';
import brandLogo from '../assets/brand/ai-with-jeevan-logo.png';

export const AdminLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login', { replace: true });
  };

  const navItems = [
    { label: 'Dashboard', path: '/admin', icon: LayoutDashboard, end: true },
    { label: 'Resources', path: '/admin/resources', icon: LinkIcon, end: false },
    { label: 'Questions', path: '/admin/questions', icon: MessageSquare, end: false },
    { label: 'Bookings', path: '/admin/bookings', icon: CalendarCheck, end: false },
    { label: 'Availability', path: '/admin/availability', icon: Clock, end: false },
    { label: 'Settings', path: '/admin/settings', icon: Settings, end: false },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#070a0f',
      color: '#e2e8f0',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Top Admin Header Bar */}
      <header style={{
        height: '64px',
        backgroundColor: '#0c111a',
        borderBottom: '1px solid #1e293b',
        padding: '0 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 40
      }}>
        {/* Brand identity */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="admin-mobile-toggle"
            style={{
              padding: '0.4rem',
              borderRadius: '6px',
              backgroundColor: '#1e293b',
              color: '#fff',
              display: 'none'
            }}
            aria-label="Toggle admin menu"
          >
            {isMobileNavOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <img 
              src={brandLogo} 
              alt="Logo" 
              style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'contain' }}
            />
            <div>
              <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc', display: 'block', lineHeight: 1.1 }}>
                AI with Jeevan
              </span>
              <span style={{ fontSize: '0.7rem', color: '#38bdf8', fontWeight: 700, letterSpacing: '0.04em' }}>
                ADMIN CONSOLE
              </span>
            </div>
          </div>
        </div>

        {/* Right Admin Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.8rem',
              color: '#94a3b8',
              backgroundColor: 'rgba(30, 41, 59, 0.6)',
              padding: '0.35rem 0.65rem',
              borderRadius: '6px',
              border: '1px solid #1e293b',
              textDecoration: 'none'
            }}
          >
            <span>Public Site</span>
            <ExternalLink size={13} />
          </a>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.3rem 0.6rem',
            borderRadius: '6px',
            backgroundColor: '#111827',
            border: '1px solid #1f2937'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: 'rgba(56, 189, 248, 0.15)',
              color: '#38bdf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 700
            }}>
              J
            </div>
            <div style={{ display: 'none' }} className="admin-user-info">
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc' }}>
                {user?.name || 'Jeevan'}
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#f87171',
              backgroundColor: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              padding: '0.4rem 0.75rem',
              borderRadius: '6px',
              transition: 'all 0.15s ease'
            }}
            title="Log out from admin"
          >
            <LogOut size={14} />
            <span className="logout-text">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Admin Workspace with Sidebar */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Desktop Sidebar */}
        <aside 
          className={`admin-sidebar ${isMobileNavOpen ? 'mobile-open' : ''}`}
          style={{
            width: '240px',
            backgroundColor: '#090d15',
            borderRight: '1px solid #1e293b',
            padding: '1.25rem 0.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem'
          }}
        >
          <div style={{ padding: '0 0.5rem 0.75rem 0.5rem', borderBottom: '1px solid #1e293b', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.08em' }}>
              Management
            </span>
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={() => setIsMobileNavOpen(false)}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.6rem 0.85rem',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#38bdf8' : '#94a3b8',
                  backgroundColor: isActive ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                  border: isActive ? '1px solid rgba(56, 189, 248, 0.2)' : '1px solid transparent',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease'
                })}
              >
                <Icon size={17} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}

          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid #1e293b' }}>
            <div style={{
              padding: '0.75rem',
              backgroundColor: '#0c121d',
              borderRadius: '8px',
              border: '1px solid #1e293b',
              fontSize: '0.75rem',
              color: '#64748b'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#10b981', fontWeight: 600, marginBottom: '0.2rem' }}>
                <ShieldCheck size={14} />
                <span>Admin Session Active</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.7rem' }}>
                {user?.email || 'admin@aiwithjeevan.com'}
              </p>
            </div>
          </div>
        </aside>

        {/* Content Viewport */}
        <main style={{ flex: 1, padding: '1.75rem', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
          <Outlet />
        </main>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .admin-mobile-toggle {
            display: block !important;
          }
          .admin-sidebar {
            position: fixed;
            top: 64px;
            bottom: 0;
            left: 0;
            z-index: 50;
            transform: translateX(-100%);
            transition: transform 0.2s ease-in-out;
            box-shadow: 10px 0 25px rgba(0,0,0,0.5);
          }
          .admin-sidebar.mobile-open {
            transform: translateX(0);
          }
          .logout-text {
            display: none;
          }
        }
        @media (min-width: 640px) {
          .admin-user-info {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};
