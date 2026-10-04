import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './auth/AuthContext';
import { ProtectedRoute } from './auth/ProtectedRoute';
import { Layout } from './components/layout/Layout';
import { AdminLayout } from './layouts/AdminLayout';

// Public Pages
import { HomePage } from './pages/HomePage';
import { SeriesPage } from './pages/SeriesPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { JobsPage } from './pages/JobsPage';
import { QnAPage } from './pages/QnAPage';
import { BookingPage } from './pages/BookingPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Admin Pages
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminResourcesPage } from './pages/admin/AdminResourcesPage';
import { AdminQuestionsPage } from './pages/admin/AdminQuestionsPage';
import { AdminBookingsPage } from './pages/admin/AdminBookingsPage';
import { AdminAvailabilityPage } from './pages/admin/AdminAvailabilityPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            {/* Standalone Admin Login (Direct URL only, no public navigation link) */}
            <Route path="/admin/login" element={<AdminLoginPage />} />

            {/* Protected Creator Admin Console (Role-guarded: ADMIN only) */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute requiredRole="ADMIN">
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminDashboardPage />} />
              <Route path="resources" element={<AdminResourcesPage />} />
              <Route path="questions" element={<AdminQuestionsPage />} />
              <Route path="bookings" element={<AdminBookingsPage />} />
              <Route path="availability" element={<AdminAvailabilityPage />} />
              <Route path="settings" element={<AdminSettingsPage />} />
            </Route>

            {/* Legacy admin preview redirect to protected /admin */}
            <Route path="/admin-preview" element={<Navigate to="/admin" replace />} />

            {/* Public Creator Platform (Zero login required for followers/visitors) */}
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/series" element={<Layout><SeriesPage /></Layout>} />
            <Route path="/roadmap" element={<Layout><RoadmapPage /></Layout>} />
            <Route path="/resources" element={<Layout><ResourcesPage /></Layout>} />
            <Route path="/resources/:id" element={<Layout><ResourcesPage /></Layout>} />
            <Route path="/jobs" element={<Layout><JobsPage /></Layout>} />
            <Route path="/qna" element={<Layout><QnAPage /></Layout>} />
            <Route path="/qa" element={<Navigate to="/qna" replace />} />
            <Route path="/ask" element={<Layout><QnAPage /></Layout>} />
            <Route path="/booking" element={<Layout><BookingPage /></Layout>} />
            <Route path="/guidance" element={<Navigate to="/booking" replace />} />
            <Route path="/about" element={<Layout><AboutPage /></Layout>} />
            <Route path="/connect" element={<Navigate to="/about" replace />} />
            
            {/* 404 Catch-All */}
            <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </AuthProvider>
  );
};

export default App;
