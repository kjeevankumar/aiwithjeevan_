import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, Video, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTopic?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  preselectedTopic 
}) => {
  const { bookingSlots, addBookingRequest } = useApp();
  const availableSlots = bookingSlots.filter(s => s.isAvailable);
  const [selectedSlotId, setSelectedSlotId] = useState(availableSlots[0]?.id || '');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [topic, setTopic] = useState(preselectedTopic || 'AI/ML learning roadmap');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const topics = [
    'AI/ML learning roadmap',
    'Project guidance',
    'Career direction',
    'Interview preparation',
    'Beginner doubts',
    'Learning strategy'
  ];

  const selectedSlot = bookingSlots.find(s => s.id === selectedSlotId) || bookingSlots[0];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !selectedSlot) return;

    addBookingRequest({
      slotId: selectedSlot.id,
      slotTime: `${selectedSlot.date} at ${selectedSlot.time}`,
      name: name.trim(),
      email: email.trim(),
      whatsapp: whatsapp.trim() || undefined,
      topic: `${topic}${notes ? ` - ${notes}` : ''}`,
      amount: 50
    });

    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 110,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      {/* Backdrop */}
      <div 
        onClick={handleReset}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)'
        }}
      />

      {/* Modal Content */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '540px',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-medium)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
        padding: '1.75rem',
        maxHeight: '92vh',
        overflowY: 'auto'
      }}>
        <button
          onClick={handleReset}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '2rem',
            height: '2rem',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--bg-surface-elevated)',
            color: 'var(--text-muted)'
          }}
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          /* Confirmation Success View */
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '4rem',
              height: '4rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(52, 211, 153, 0.15)',
              color: '#34d399',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto',
              border: '2px solid rgba(52, 211, 153, 0.4)'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <span style={{
              fontSize: '0.75rem',
              color: 'var(--primary)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Booking Reserved
            </span>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', marginTop: '0.25rem' }}>
              Your 15-Minute 1:1 is Reserved!
            </h3>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.5rem', maxWidth: '420px', margin: '0.5rem auto 1.5rem auto', lineHeight: 1.5 }}>
              Slot: <strong>{selectedSlot?.date} ({selectedSlot?.time})</strong>.<br/>
              A Google Meet invitation has been prepared for <strong>{email}</strong>.
            </p>

            <div style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Clock size={16} color="var(--primary)" />
                <span style={{ fontSize: '0.85rem', color: '#fff' }}>Duration: 15-Minute 1:1 Video Conversation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Video size={16} color="var(--primary)" />
                <span style={{ fontSize: '0.85rem', color: '#fff' }}>Format: Google Meet 1:1</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <ShieldCheck size={16} color="#34d399" />
                <span style={{ fontSize: '0.85rem', color: '#fff' }}>Fee: ₹50</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Done &amp; Return to Hub
            </button>
          </div>
        ) : (
          /* Booking Form View */
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                color: 'var(--primary)',
                fontSize: '0.75rem',
                fontWeight: 700,
                marginBottom: '0.5rem'
              }}>
                <Calendar size={13} />
                <span>1:1 Guidance with Jeevan</span>
              </div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc' }}>
                15-Minute 1:1 Guidance
              </h2>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.2rem', lineHeight: 1.45 }}>
                Have a specific question or don't know what to learn next? Book a short 1:1 conversation and let's discuss it.
              </p>
            </div>

            <form onSubmit={handleConfirm} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Select Topic */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  What would you like to discuss?
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.65rem 0.8rem',
                    color: '#fff',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                >
                  {topics.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Select Slot */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Available Slots
                </label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                  gap: '0.4rem'
                }}>
                  {bookingSlots.map(slot => (
                    <button
                      type="button"
                      key={slot.id}
                      disabled={!slot.isAvailable}
                      onClick={() => setSelectedSlotId(slot.id)}
                      style={{
                        padding: '0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: selectedSlotId === slot.id 
                          ? 'var(--primary)' 
                          : slot.isAvailable 
                            ? 'var(--bg-surface-elevated)' 
                            : 'rgba(255,255,255,0.02)',
                        color: selectedSlotId === slot.id 
                          ? '#000' 
                          : slot.isAvailable 
                            ? 'var(--text-primary)' 
                            : 'var(--text-faint)',
                        border: selectedSlotId === slot.id 
                          ? '1px solid var(--primary)' 
                          : '1px solid var(--border-subtle)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textAlign: 'center',
                        cursor: slot.isAvailable ? 'pointer' : 'not-allowed',
                        opacity: slot.isAvailable ? 1 : 0.4
                      }}
                    >
                      <div>{slot.date}</div>
                      <div style={{ fontSize: '0.7rem', opacity: 0.85 }}>{slot.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Contact */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Verma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.6rem 0.75rem',
                      color: '#fff',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.6rem 0.75rem',
                      color: '#fff',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                  WhatsApp Number (Optional for meeting reminder)
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.6rem 0.75rem',
                    color: '#fff',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                  Any context or specific questions? (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Currently in 3rd year, confused between AI/ML and Web Dev"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.6rem 0.75rem',
                    color: '#fff',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Price summary badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                backgroundColor: 'rgba(56, 189, 248, 0.08)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(56, 189, 248, 0.2)'
              }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
                    15-Minute 1:1 Guidance
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    Symbolic commitment fee
                  </div>
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)' }}>
                  ₹50
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-glow-brand btn-lg"
                style={{ width: '100%', marginTop: '0.25rem' }}
              >
                <span>Book a 1:1 — ₹50</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
