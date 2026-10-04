import React, { useState } from 'react';
import { X, Send, HelpCircle } from 'lucide-react';
import type { QuestionCategory } from '../../types';
import { useApp } from '../../context/AppContext';

interface AskQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AskQuestionModal: React.FC<AskQuestionModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
  const { addQuestion } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState<QuestionCategory>('AI/ML');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const categories: QuestionCategory[] = [
    'AI/ML',
    'Projects',
    'Career',
    'Learning',
    'Jobs',
    'AI Tools',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !question.trim()) return;

    addQuestion({
      name: name.trim(),
      email: email.trim(),
      question: question.trim(),
      category
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setQuestion('');
      onClose();
    }, 1500);
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
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)'
        }}
      />

      {/* Modal Box */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '520px',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-medium)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        padding: '1.75rem',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
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

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✅</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '0.35rem' }}>
              Question Sent to Jeevan!
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Thank you for asking. Jeevan will review your question and respond directly or feature it on Instagram.
            </p>
          </div>
        ) : (
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
                <HelpCircle size={14} />
                <span>Ask Jeevan</span>
              </div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc' }}>
                Ask a Question
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Have a question regarding AI/ML, career, tools, or learning strategy? Drop it below.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.6rem 0.8rem',
                      color: '#fff',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
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
                      padding: '0.6rem 0.8rem',
                      color: '#fff',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as QuestionCategory)}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.6rem 0.8rem',
                    color: '#fff',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Your Question *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="What is your question or what are you currently stuck on?..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.65rem 0.8rem',
                    color: '#fff',
                    fontSize: '0.85rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ marginTop: '0.5rem', width: '100%' }}
              >
                <Send size={16} />
                <span>Submit Question to Jeevan</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
