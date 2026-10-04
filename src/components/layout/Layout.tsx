import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { MobileNav } from './MobileNav';
import { Drawer } from './Drawer';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navigation */}
      <Navbar 
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)} 
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Mobile Drawer */}
      <Drawer 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }} className="pb-mobile-nav">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation Bar */}
      <MobileNav />
    </div>
  );
};
