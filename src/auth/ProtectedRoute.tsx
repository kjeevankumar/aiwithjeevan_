import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import type { UserRole } from './types';

interface ProtectedRouteProps {
  children?: React.ReactNode;
  requiredRole?: UserRole;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole = 'ADMIN' 
}) => {
  const { isAuthenticated, role, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-canvas)',
        color: 'var(--text-secondary)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '36px',
            height: '36px',
            border: '3px solid rgba(56, 189, 248, 0.2)',
            borderTopColor: 'var(--primary)',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            margin: '0 auto 1rem auto'
          }} />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Checking authorization...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || (requiredRole && role !== requiredRole)) {
    // Redirect unauthenticated or unauthorized users to /admin/login
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
