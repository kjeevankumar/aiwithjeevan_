import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Link as LinkIcon, 
  MessageSquare, 
  CalendarCheck, 
  Clock, 
  Plus, 
  ArrowUpRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminDashboardPage: React.FC = () => {
  const { resources, questions, bookingRequests, bookingSlots } = useApp();

  const publishedResourcesCount = resources.filter(r => r.published).length;
  const pendingQuestionsCount = questions.filter(q => q.status === 'pending').length;
  const availableSlotsCount = bookingSlots.filter(s => s.isAvailable).length;

  const stats = [
    { label: 'Published Resources', value: publishedResourcesCount, total: resources.length, icon: LinkIcon, color: '#38bdf8', link: '/admin/resources' },
    { label: 'Pending Questions', value: pendingQuestionsCount, total: questions.length, icon: MessageSquare, color: '#fbbf24', link: '/admin/questions' },
    { label: '1:1 Bookings', value: bookingRequests.length, total: null, icon: CalendarCheck, color: '#818cf8', link: '/admin/bookings' },
    { label: 'Available Slots', value: availableSlotsCount, total: bookingSlots.length, icon: Clock, color: '#34d399', link: '/admin/availability' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Title & Quick Actions */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem' }}>
            Admin Dashboard
          </h1>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
            Overview of your creator links, follower questions, and 1:1 guidance bookings.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link
            to="/admin/resources"
            className="btn btn-primary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}
          >
            <Plus size={16} />
            <span>Add Resource</span>
          </Link>
          <Link
            to="/admin/questions"
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}
          >
            <MessageSquare size={15} />
            <span>Review Questions ({pendingQuestionsCount})</span>
          </Link>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem'
      }}>
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <Link
              key={idx}
              to={s.link}
              style={{
                backgroundColor: '#0d131f',
                border: '1px solid #1e293b',
                borderRadius: '12px',
                padding: '1.25rem',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.15s ease',
                display: 'block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = s.color;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1e293b';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8' }}>
                  {s.label}
                </span>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: `${s.color}15`,
                  color: s.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={16} />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.85rem', fontWeight: 800, color: '#f8fafc' }}>
                  {s.value}
                </span>
                {s.total !== null && (
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    / {s.total} total
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Two Column Layout: Recent Questions & Recent Bookings */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Recent Follower Questions */}
        <div style={{
          backgroundColor: '#0d131f',
          border: '1px solid #1e293b',
          borderRadius: '12px',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={16} color="#fbbf24" />
              <span>Questions Activity</span>
            </h2>
            <Link to="/admin/questions" style={{ fontSize: '0.75rem', color: '#38bdf8', textDecoration: 'none' }}>
              View all ({questions.length})
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {questions.slice(0, 3).map((q) => (
              <div
                key={q.id}
                style={{
                  backgroundColor: '#111827',
                  border: '1px solid #1f2937',
                  borderRadius: '8px',
                  padding: '0.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc' }}>
                    {q.name}
                  </span>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '0.15rem 0.45rem',
                    borderRadius: '4px',
                    backgroundColor: q.status === 'answered' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(251, 191, 36, 0.15)',
                    color: q.status === 'answered' ? '#34d399' : '#fbbf24'
                  }}>
                    {q.status === 'answered' ? 'Answered' : 'Pending Review'}
                  </span>
                </div>
                <p style={{ fontSize: '0.825rem', color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>
                  "{q.question}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 1:1 Booking Requests */}
        <div style={{
          backgroundColor: '#0d131f',
          border: '1px solid #1e293b',
          borderRadius: '12px',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CalendarCheck size={16} color="#818cf8" />
              <span>Recent 1:1 Booking Requests</span>
            </h2>
            <Link to="/admin/bookings" style={{ fontSize: '0.75rem', color: '#38bdf8', textDecoration: 'none' }}>
              View all ({bookingRequests.length})
            </Link>
          </div>

          {bookingRequests.length === 0 ? (
            <div style={{ padding: '2rem 1rem', textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>
              No booking requests yet. Requests from followers will appear here.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {bookingRequests.slice(0, 3).map((req) => (
                <div
                  key={req.id}
                  style={{
                    backgroundColor: '#111827',
                    border: '1px solid #1f2937',
                    borderRadius: '8px',
                    padding: '0.85rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.825rem', fontWeight: 600, color: '#f8fafc' }}>
                      {req.name} ({req.email})
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 700 }}>
                      ₹{req.amount}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    Topic: <strong style={{ color: '#cbd5e1' }}>{req.topic}</strong> • {req.slotTime}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Newest Resources Preview */}
      <div style={{
        backgroundColor: '#0d131f',
        border: '1px solid #1e293b',
        borderRadius: '12px',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <LinkIcon size={16} color="#38bdf8" />
            <span>Top Active Links ({resources.length})</span>
          </h2>
          <Link to="/admin/resources" style={{ fontSize: '0.75rem', color: '#38bdf8', textDecoration: 'none' }}>
            Manage all links
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {resources.slice(0, 4).map((r) => (
            <div
              key={r.id}
              style={{
                backgroundColor: '#111827',
                border: '1px solid #1f2937',
                borderRadius: '8px',
                padding: '0.85rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.5rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  {r.category && (
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#38bdf8' }}>
                      {r.category}
                    </span>
                  )}
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: r.published ? '#34d399' : '#f87171'
                  }}>
                    {r.published ? '● Published' : '○ Draft'}
                  </span>
                </div>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                  {r.title}
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid #1f2937' }}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.75rem', color: '#38bdf8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  <span>Open link</span>
                  <ArrowUpRight size={12} />
                </a>
                <Link to="/admin/resources" style={{ fontSize: '0.75rem', color: '#94a3b8', textDecoration: 'none' }}>
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
