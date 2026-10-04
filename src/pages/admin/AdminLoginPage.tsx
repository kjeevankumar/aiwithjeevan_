import React, { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Lock, Mail, AlertCircle, ArrowLeft, Loader2 } from 'lucide-react';
import { useAuth } from '../../auth/AuthContext';
import brandLogo from '../../assets/brand/ai-with-jeevan-logo.png';

export const AdminLoginPage: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If already authenticated, redirect immediately to /admin
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/admin';
  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError('Please provide both email and password.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await login({ email: email.trim(), password: password.trim() });
      if (response.success) {
        navigate(from, { replace: true });
      } else {
        setError(response.error || 'Invalid credentials. Access restricted to creator admin.');
      }
    } catch {
      setError('An unexpected error occurred during login. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--bg-canvas)',
      padding: '1.5rem',
      position: 'relative'
    }}>
      {/* Background glow effect */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(99, 102, 241, 0.04) 50%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '420px',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-medium)',
        borderRadius: 'var(--radius-xl)',
        padding: '2.5rem 2rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
      }}>
        {/* Header / Brand */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-surface-elevated)',
            border: '2px solid rgba(56, 189, 248, 0.3)',
            marginBottom: '1rem',
            overflow: 'hidden'
          }}>
            <img 
              src={brandLogo} 
              alt="AI with Jeevan Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          
          <h1 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem' }}>
            AI with Jeevan
          </h1>
          <div style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--primary)',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            padding: '0.2rem 0.65rem',
            borderRadius: 'var(--radius-full)',
            marginTop: '0.2rem'
          }}>
            Admin Portal
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '0.75rem 1rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            color: '#fca5a5',
            fontSize: '0.85rem'
          }}>
            <AlertCircle size={16} style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.825rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              marginBottom: '0.4rem'
            }}>
              Email Address
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem 0.85rem',
              gap: '0.6rem'
            }}>
              <Mail size={16} color="var(--text-muted)" />
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="admin@aiwithjeevan.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '0.825rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              marginBottom: '0.4rem'
            }}>
              Password
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem 0.85rem',
              gap: '0.6rem'
            }}>
              <Lock size={16} color="var(--text-muted)" />
              <input
                type="password"
                required
                autoComplete="current-password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary btn-lg"
            style={{
              width: '100%',
              marginTop: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                <span>Authenticating...</span>
              </>
            ) : (
              <span>Login to Dashboard</span>
            )}
          </button>
        </form>

        {/* Back Link */}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              fontSize: '0.825rem',
              color: 'var(--text-muted)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'color var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <ArrowLeft size={14} />
            <span>Return to public website</span>
          </button>
        </div>
      </div>
    </div>
  );
};
