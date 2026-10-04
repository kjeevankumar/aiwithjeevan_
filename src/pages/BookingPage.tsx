import React, { useState } from 'react';
import { CalendarCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { BookingModal } from '../components/features/BookingModal';
import { useApp } from '../context/AppContext';

export const BookingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('AI/ML learning roadmap');
  const { bookingSlots } = useApp();

  const topics = [
    {
      title: 'AI/ML learning roadmap',
      desc: 'Confused where to start or what to focus on next based on your current knowledge.'
    },
    {
      title: 'Project guidance',
      desc: 'Feedback on what project to build to showcase practical skills.'
    },
    {
      title: 'Career direction',
      desc: 'Discussing AI/ML roles, SDE vs ML paths, and realistic industry requirements.'
    },
    {
      title: 'Interview preparation',
      desc: 'How to structure your interview prep for entry-level or junior AI positions.'
    },
    {
      title: 'Beginner doubts',
      desc: 'Ask any beginner questions regarding Python, math, or foundational topics.'
    },
    {
      title: 'Learning strategy',
      desc: 'How to manage your time and stay consistent alongside college or a full-time job.'
    }
  ];

  const handleSelectTopic = (t: string) => {
    setSelectedTopic(t);
    setIsModalOpen(true);
  };

  return (
    <div style={{ paddingTop: '2.5rem' }}>
      <div className="container">
        {/* Header Hero */}
        <div style={{
          textAlign: 'center',
          maxWidth: '740px',
          margin: '0 auto 3rem auto'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.3rem 0.8rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            color: 'var(--primary)',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '0.75rem'
          }}>
            <CalendarCheck size={14} />
            <span>1:1 Conversation</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            1:1 Guidance with Jeevan
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Have a specific question or don't know what to learn next? Book a short 1:1 conversation and let's discuss it.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-glow-brand btn-lg"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 2rem' }}
          >
            <span>Book a 1:1 — ₹50</span>
            <ArrowRight size={17} />
          </button>

          <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={13} /> 15-Minute Google Meet
            </span>
            <span>•</span>
            <span>Fee: ₹50</span>
            <span>•</span>
            <span>{bookingSlots.filter(s => s.isAvailable).length} slots available</span>
          </div>
        </div>

        {/* Topics Grid */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc', marginBottom: '1.25rem', textAlign: 'center' }}>
            Topics We Can Discuss
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem'
          }}>
            {topics.map((item, idx) => (
              <div
                key={idx}
                className="interactive-card"
                onClick={() => handleSelectTopic(item.title)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--primary)" />
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
                      {item.title}
                    </h3>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>
                    ₹50
                  </span>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {item.desc}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>
                  <span>Select topic &amp; book</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Note */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.5rem',
          maxWidth: '680px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>
            A Quick Note
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            This is a 15-minute 1:1 conversation to answer your questions and give you direct clarity. I do not promise job placement or guaranteed career outcomes. The ₹50 fee simply ensures committed attendance so both our times are respected.
          </p>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedTopic={selectedTopic}
      />
    </div>
  );
};
