import React from 'react';
import { ShieldCheck, User, LogOut } from 'lucide-react';
import { useAuth } from '../../auth/AuthContext';
import { creatorProfile } from '../../data/mockData';
import { useNavigate } from 'react-router-dom';

export const AdminSettingsPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
      <div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem' }}>
          Admin Settings &amp; Security
        </h1>
        <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
          Overview of your creator authentication session and profile information.
        </p>
      </div>

      {/* Security Status Card */}
      <div style={{
        backgroundColor: '#0d131f',
        border: '1px solid #1e293b',
        borderRadius: '12px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            color: '#34d399',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ShieldCheck size={20} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Authenticated Admin Session
            </h2>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
              Protected under role-based route guards and cryptographic verification.
            </p>
          </div>
        </div>

        <div style={{
          backgroundColor: '#111827',
          borderRadius: '8px',
          padding: '1rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          border: '1px solid #1f2937'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Signed-in Identity</span>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc' }}>{user?.email || 'admin@aiwithjeevan.com'}</span>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Assigned Role</span>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#38bdf8' }}>{user?.role || 'ADMIN'}</span>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Session Lifetime</span>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#34d399' }}>8 Hours (Auto-expiring)</span>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Security Standard</span>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#a78bfa' }}>Zero Plaintext Passwords</span>
          </div>
        </div>
      </div>

      {/* Creator Profile Card */}
      <div style={{
        backgroundColor: '#0d131f',
        border: '1px solid #1e293b',
        borderRadius: '12px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
          <User size={18} color="#38bdf8" />
          <span>Creator Profile</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0', borderBottom: '1px solid #1e293b' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Creator Name</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>{creatorProfile.name}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0', borderBottom: '1px solid #1e293b' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Instagram Handle</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#38bdf8' }}>{creatorProfile.instagramHandle}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Instagram URL</span>
            <a href={creatorProfile.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: '#38bdf8', textDecoration: 'none' }}>
              {creatorProfile.instagramUrl}
            </a>
          </div>
        </div>
      </div>

      {/* Logout Action */}
      <div style={{
        backgroundColor: '#0d131f',
        border: '1px solid rgba(239, 68, 68, 0.2)',
        borderRadius: '12px',
        padding: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f87171', margin: '0 0 0.2rem 0' }}>
            Sign Out of Admin Console
          </h3>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
            Terminates the session token and locks protected admin routes.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="btn btn-secondary btn-md"
          style={{
            borderColor: 'rgba(239, 68, 68, 0.4)',
            color: '#f87171',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
        >
          <LogOut size={16} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};
