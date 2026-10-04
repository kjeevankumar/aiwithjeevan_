import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ResourceCard } from '../components/features/ResourceCard';

export const ResourcesPage: React.FC = () => {
  const { resources } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Only published resources for public view, newest first (already in order in state)
  const publishedResources = resources.filter(r => r.published);

  // Extract unique categories dynamically from current resources
  const categories = ['All', ...Array.from(new Set(publishedResources.map(r => r.category).filter(Boolean))) as string[]];

  const filteredResources = publishedResources.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '2.5rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{
          textAlign: 'center',
          maxWidth: '720px',
          margin: '0 auto 2.5rem auto'
        }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Resources
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Useful links and resources I've shared with my community.
          </p>
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
              placeholder="Search resources by title or keyword..."
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
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}
              >
                Clear
              </button>
            )}
          </div>

          {categories.length > 1 && (
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
          )}
        </div>

        {/* Grid of resources */}
        {filteredResources.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 1rem',
            backgroundColor: 'var(--bg-surface)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)'
          }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              No resources found matching "{searchQuery}".
            </p>
            {searchQuery && (
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '1rem' }}
              >
                Reset Search
              </button>
            )}
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem'
          }}>
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
