import React, { useState } from 'react';
import { Clock, Plus, Trash2, CheckCircle2, XCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminAvailabilityPage: React.FC = () => {
  const { bookingSlots, addBookingSlot, toggleSlotAvailability, deleteBookingSlot } = useApp();

  const [date, setDate] = useState('');
  const [dayName, setDayName] = useState('');
  const [time, setTime] = useState('');

  const handleAddSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date.trim() || !time.trim()) return;

    addBookingSlot({
      date: date.trim(),
      dayName: dayName.trim() || 'Available',
      time: time.trim(),
      isAvailable: true
    });

    setDate('');
    setDayName('');
    setTime('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem' }}>
          Availability &amp; Slots
        </h1>
        <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
          Control which 15-minute time slots are open for 1:1 bookings on the public booking page.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
        {/* Add Slot Form */}
        <div style={{
          backgroundColor: '#0d131f',
          border: '1px solid #1e293b',
          borderRadius: '12px',
          padding: '1.5rem'
        }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Plus size={18} color="#34d399" />
            <span>Add New Booking Slot</span>
          </h2>
          <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '1.25rem' }}>
            Create an open slot for followers to book.
          </p>

          <form onSubmit={handleAddSlot} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.35rem' }}>
                Date Label *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Tomorrow, or Oct 10"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#111827',
                  border: '1px solid #1f2937',
                  borderRadius: '6px',
                  padding: '0.65rem 0.85rem',
                  color: '#fff',
                  fontSize: '0.875rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.35rem' }}>
                Day Name (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Saturday, Sunday"
                value={dayName}
                onChange={(e) => setDayName(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#111827',
                  border: '1px solid #1f2937',
                  borderRadius: '6px',
                  padding: '0.65rem 0.85rem',
                  color: '#fff',
                  fontSize: '0.875rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.35rem' }}>
                Time Slot *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 06:00 PM IST"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#111827',
                  border: '1px solid #1f2937',
                  borderRadius: '6px',
                  padding: '0.65rem 0.85rem',
                  color: '#fff',
                  fontSize: '0.875rem',
                  outline: 'none'
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <Plus size={16} />
              <span>Add Slot</span>
            </button>
          </form>
        </div>

        {/* Existing Slots List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc' }}>
              All Scheduled Slots ({bookingSlots.length})
            </h2>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
              {bookingSlots.filter(s => s.isAvailable).length} available
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {bookingSlots.map((slot) => (
              <div
                key={slot.id}
                style={{
                  backgroundColor: '#0d131f',
                  border: '1px solid #1e293b',
                  borderRadius: '10px',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc' }}>
                      {slot.date}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      ({slot.dayName})
                    </span>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#38bdf8', fontSize: '0.825rem', fontWeight: 600 }}>
                    <Clock size={13} />
                    <span>{slot.time}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={() => toggleSlotAvailability(slot.id)}
                    style={{
                      padding: '0.4rem 0.65rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      backgroundColor: slot.isAvailable ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                      color: slot.isAvailable ? '#34d399' : '#f87171',
                      border: '1px solid',
                      borderColor: slot.isAvailable ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'
                    }}
                  >
                    {slot.isAvailable ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
                    <span>{slot.isAvailable ? 'Available' : 'Booked / Closed'}</span>
                  </button>

                  <button
                    onClick={() => {
                      if (window.confirm('Delete this time slot?')) {
                        deleteBookingSlot(slot.id);
                      }
                    }}
                    style={{
                      padding: '0.4rem',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      color: '#f87171'
                    }}
                    title="Delete slot"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
