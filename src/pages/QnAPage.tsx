import React, { useState } from 'react';
import { MessageSquare, HelpCircle, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AskQuestionModal } from '../components/features/AskQuestionModal';

export const QnAPage: React.FC = () => {
  const { questions } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    'All',
    'AI/ML',
    'Projects',
    'Career',
    'Learning',
    'Jobs',
    'AI Tools',
    'Other'
  ];

  const filteredQuestions = questions.filter((q) => {
    // Public security: only show questions that Admin has answered and approved for public display
    const isPublic = q.status === 'answered' && q.isPublic !== false;
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
    const matchesSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (q.answer && q.answer.text.toLowerCase().includes(searchQuery.toLowerCase()));

    return isPublic && matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '2.5rem' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Header Hero */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2.5rem'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.3rem 0.8rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            color: 'var(--accent-indigo)',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '0.75rem'
          }}>
            <MessageSquare size={14} />
            <span>Community Questions</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Ask a Question
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Have a question about AI/ML, roadmaps, career, or learning? Ask below and I will review and answer it.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary btn-lg"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
          >
            <HelpCircle size={17} />
            <span>Submit a Question</span>
          </button>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem',
          marginBottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '0.6rem 0.85rem',
            gap: '0.65rem'
          }}>
            <Search size={18} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search previous questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          <div className="pill-scroll-list">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`pill-item ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Questions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {filteredQuestions.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '3.5rem 1rem',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)'
            }}>
              <p style={{ color: 'var(--text-muted)' }}>
                No questions found under this filter. Be the first to ask!
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '0.75rem' }}
              >
                Ask a Question
              </button>
            </div>
          ) : (
            filteredQuestions.map((q) => (
              <div
                key={q.id}
                className="interactive-card"
                style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 'var(--radius-full)'
                  }}>
                    {q.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Asked by <strong style={{ color: '#fff' }}>{q.name}</strong> • {q.createdAt}
                  </span>
                </div>

                <p style={{ fontSize: '1rem', fontWeight: 600, color: '#f8fafc', lineHeight: 1.5 }}>
                  "{q.question}"
                </p>

                {q.answer ? (
                  <div style={{
                    backgroundColor: 'rgba(56, 189, 248, 0.05)',
                    borderLeft: '3px solid var(--primary)',
                    borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                    padding: '0.85rem 1rem',
                    marginTop: '0.25rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--primary)' }}>
                        Jeevan (@aiwithjeevan_)
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        • {q.answer.answeredAt}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#e2e8f0', lineHeight: 1.55 }}>
                      {q.answer.text}
                    </p>
                  </div>
                ) : (
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    ⏳ Awaiting response in Admin panel
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <AskQuestionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
