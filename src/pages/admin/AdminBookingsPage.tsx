import React, { useState } from 'react';
import { CalendarCheck, Mail, Clock, Search } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminBookingsPage: React.FC = () => {
  const { bookingRequests } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = bookingRequests.filter(b => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem' }}>
            1:1 Guidance Bookings
          </h1>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
            Followers who booked a 15-minute 1:1 conversation (₹50). Contact them via email to send the meeting link.
          </p>
        </div>

        {/* Search */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#0d131f',
          border: '1px solid #1e293b',
          borderRadius: '8px',
          padding: '0.45rem 0.75rem',
          gap: '0.5rem',
          width: '240px'
        }}>
          <Search size={15} color="#64748b" />
          <input
            type="text"
            placeholder="Search bookings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '0.85rem',
              outline: 'none',
              width: '100%'
            }}
          />
        </div>
      </div>

      {/* Bookings List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filtered.length === 0 ? (
          <div style={{
            padding: '3rem 1.5rem',
            textAlign: 'center',
            backgroundColor: '#0d131f',
            borderRadius: '12px',
            border: '1px solid #1e293b',
            color: '#64748b'
          }}>
            <CalendarCheck size={32} style={{ margin: '0 auto 0.75rem auto', opacity: 0.5 }} />
            <p style={{ margin: 0, fontSize: '0.95rem' }}>No booking requests found.</p>
          </div>
        ) : (
          filtered.map((req) => (
            <div
              key={req.id}
              style={{
                backgroundColor: '#0d131f',
                border: '1px solid #1e293b',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc' }}>
                      {req.name}
                    </span>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      backgroundColor: 'rgba(56, 189, 248, 0.1)',
                      color: '#38bdf8',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px'
                    }}>
                      ₹{req.amount} Paid
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      • Booked {new Date(req.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.825rem', color: '#94a3b8', flexWrap: 'wrap' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Mail size={13} color="#64748b" />
                      <a href={`mailto:${req.email}`} style={{ color: '#38bdf8', textDecoration: 'none' }}>
                        {req.email}
                      </a>
                    </span>
                    {req.instagram && (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                        <span style={{ color: '#64748b' }}>IG:</span>
                        <span>@{req.instagram.replace('@', '')}</span>
                      </span>
                    )}
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#34d399', fontWeight: 600 }}>
                      <Clock size={13} />
                      <span>{req.slotTime}</span>
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <a
                    href={`mailto:${req.email}?subject=1:1 Guidance with Jeevan - Meeting Confirmation&body=Hi ${req.name},%0D%0A%0D%0AThanks for booking a 1:1 guidance session for ${req.slotTime}.%0D%0A%0D%0AHere is our Google Meet link: `}
                    className="btn btn-primary btn-sm"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    <Mail size={14} />
                    <span>Send Meet Link</span>
                  </a>
                </div>
              </div>

              {/* Topic & Notes */}
              <div style={{
                backgroundColor: '#111827',
                borderRadius: '8px',
                padding: '0.75rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                border: '1px solid #1f2937'
              }}>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Focus Topic: <strong style={{ color: '#f8fafc' }}>{req.topic}</strong>
                </div>
                {req.notes && (
                  <p style={{ fontSize: '0.825rem', color: '#cbd5e1', margin: 0, fontStyle: 'italic' }}>
                    Follower notes: "{req.notes}"
                  </p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
