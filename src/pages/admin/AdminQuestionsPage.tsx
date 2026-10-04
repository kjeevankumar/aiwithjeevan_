import React, { useState } from 'react';
import { MessageSquare, CheckCircle2, Clock, Trash2, Send } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminQuestionsPage: React.FC = () => {
  const { questions, answerQuestion, deleteQuestion } = useApp();

  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'answered'>('all');
  const [answeringId, setAnsweringId] = useState<string | null>(null);
  const [answerText, setAnswerText] = useState('');

  const filteredQuestions = questions.filter(q => {
    if (activeTab === 'pending') return q.status === 'pending';
    if (activeTab === 'answered') return q.status === 'answered';
    return true;
  });

  const handleStartAnswer = (id: string, currentAnswer?: string) => {
    setAnsweringId(id);
    setAnswerText(currentAnswer || '');
  };

  const handleSaveAnswer = (id: string) => {
    if (!answerText.trim()) return;
    answerQuestion(id, answerText.trim());
    setAnsweringId(null);
    setAnswerText('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem' }}>
            Questions Inbox
          </h1>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
            Review, answer, and manage questions submitted by followers. Only answered questions are made public.
          </p>
        </div>

        {/* Tab Filter */}
        <div style={{
          display: 'flex',
          backgroundColor: '#0d131f',
          border: '1px solid #1e293b',
          borderRadius: '8px',
          padding: '0.25rem',
          gap: '0.25rem'
        }}>
          {(['all', 'pending', 'answered'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: activeTab === tab ? 700 : 500,
                color: activeTab === tab ? '#38bdf8' : '#94a3b8',
                backgroundColor: activeTab === tab ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                border: activeTab === tab ? '1px solid rgba(56, 189, 248, 0.2)' : '1px solid transparent',
                textTransform: 'capitalize'
              }}
            >
              {tab} ({tab === 'all' ? questions.length : questions.filter(q => q.status === tab).length})
            </button>
          ))}
        </div>
      </div>

      {/* Questions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredQuestions.length === 0 ? (
          <div style={{
            padding: '3rem 1.5rem',
            textAlign: 'center',
            backgroundColor: '#0d131f',
            borderRadius: '12px',
            border: '1px solid #1e293b',
            color: '#64748b'
          }}>
            <MessageSquare size={32} style={{ margin: '0 auto 0.75rem auto', opacity: 0.5 }} />
            <p style={{ margin: 0, fontSize: '0.95rem' }}>No questions under this view.</p>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isAnswering = answeringId === q.id;

            return (
              <div
                key={q.id}
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
                {/* Header Info */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#38bdf8',
                      backgroundColor: 'rgba(56, 189, 248, 0.1)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px'
                    }}>
                      {q.category}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
                      {q.name}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      ({q.email})
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#475569' }}>
                      • {q.createdAt}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      backgroundColor: q.status === 'answered' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(251, 191, 36, 0.12)',
                      color: q.status === 'answered' ? '#34d399' : '#fbbf24'
                    }}>
                      {q.status === 'answered' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                      <span>{q.status === 'answered' ? 'Answered' : 'Pending'}</span>
                    </span>

                    <button
                      onClick={() => {
                        if (window.confirm('Delete this question permanently?')) {
                          deleteQuestion(q.id);
                        }
                      }}
                      style={{
                        padding: '0.35rem',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        color: '#f87171'
                      }}
                      title="Delete question"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <p style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#f8fafc',
                  margin: 0,
                  lineHeight: 1.5,
                  padding: '0.5rem 0'
                }}>
                  "{q.question}"
                </p>

                {/* Existing Answer if present */}
                {q.answer && !isAnswering && (
                  <div style={{
                    backgroundColor: '#111827',
                    borderLeft: '3px solid #38bdf8',
                    borderRadius: '0 8px 8px 0',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8' }}>
                        Your Published Answer
                      </span>
                      <button
                        onClick={() => handleStartAnswer(q.id, q.answer?.text)}
                        style={{ fontSize: '0.75rem', color: '#94a3b8', textDecoration: 'underline' }}
                      >
                        Edit answer
                      </button>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#cbd5e1', margin: 0, lineHeight: 1.5 }}>
                      {q.answer.text}
                    </p>
                  </div>
                )}

                {/* Answer Form or Trigger */}
                {isAnswering ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.5rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#38bdf8' }}>
                      Write Answer (will appear on public Q&A page):
                    </label>
                    <textarea
                      rows={3}
                      value={answerText}
                      onChange={(e) => setAnswerText(e.target.value)}
                      placeholder="Write your advice or direct answer here..."
                      style={{
                        width: '100%',
                        backgroundColor: '#111827',
                        border: '1px solid #38bdf8',
                        borderRadius: '6px',
                        padding: '0.75rem',
                        color: '#fff',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    />
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => setAnsweringId(null)}
                        className="btn btn-secondary btn-sm"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSaveAnswer(q.id)}
                        className="btn btn-primary btn-sm"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                      >
                        <Send size={14} />
                        <span>Publish Answer</span>
                      </button>
                    </div>
                  </div>
                ) : !q.answer && (
                  <div>
                    <button
                      onClick={() => handleStartAnswer(q.id)}
                      className="btn btn-primary btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <Send size={14} />
                      <span>Answer Question</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
