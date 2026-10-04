import React, { useState } from 'react';
import { Plus, Trash2, Edit3, ExternalLink, Save, X, Eye, EyeOff } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import type { ResourceItem } from '../../types';

export const AdminResourcesPage: React.FC = () => {
  const {
    resources,
    addResource,
    updateResource,
    deleteResource,
    togglePublishResource
  } = useApp();

  // Form State
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [published, setPublished] = useState(true);

  // Edit State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editUrl, setEditUrl] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editDesc, setEditDesc] = useState('');

  // Handle Add Resource
  const handleAddResource = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !url.trim()) return;

    addResource({
      title: title.trim(),
      url: url.trim(),
      category: category.trim() || undefined,
      description: description.trim() || undefined,
      published
    });

    setTitle('');
    setUrl('');
    setCategory('');
    setDescription('');
    setPublished(true);
  };

  // Start Edit
  const handleStartEdit = (res: ResourceItem) => {
    setEditingId(res.id);
    setEditTitle(res.title);
    setEditUrl(res.url);
    setEditDesc(res.description || '');
    setEditCategory(res.category || '');
  };

  // Save Edit
  const handleSaveEdit = (id: string) => {
    updateResource(id, {
      title: editTitle.trim(),
      url: editUrl.trim(),
      description: editDesc.trim() || undefined,
      category: editCategory.trim() || undefined
    });
    setEditingId(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem' }}>
          Resource Management
        </h1>
        <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
          Add, edit, or remove links. Newest published resources automatically appear at the top of the public website.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
        {/* Left Column: Add Resource Form */}
        <div style={{
          backgroundColor: '#0d131f',
          border: '1px solid #1e293b',
          borderRadius: '12px',
          padding: '1.5rem'
        }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Plus size={18} color="#38bdf8" />
            <span>Add New Resource</span>
          </h2>
          <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '1.25rem' }}>
            Enter link details you want to share with followers.
          </p>

          <form onSubmit={handleAddResource} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.35rem' }}>
                Resource Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 90-Day AI/ML Roadmap"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                Resource URL *
              </label>
              <input
                type="url"
                required
                placeholder="https://example.com/roadmap"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
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
                Category (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Roadmap, AI Tools, Jobs, Learning"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
                Short Description (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Brief summary or description for your followers..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#111827',
                  border: '1px solid #1f2937',
                  borderRadius: '6px',
                  padding: '0.65rem 0.85rem',
                  color: '#fff',
                  fontSize: '0.875rem',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', margin: '0.25rem 0' }}>
              <input
                type="checkbox"
                id="pubCheck"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                style={{ width: '1.1rem', height: '1.1rem', accentColor: '#38bdf8' }}
              />
              <label htmlFor="pubCheck" style={{ fontSize: '0.85rem', color: '#e2e8f0', cursor: 'pointer' }}>
                Publish immediately (Visible to public)
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <Plus size={16} />
              <span>Publish Resource</span>
            </button>
          </form>
        </div>

        {/* Right Column: Existing Resources List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc' }}>
              All Resources ({resources.length})
            </h2>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Sorted: Newest first
            </span>
          </div>

          {resources.map((item) => {
            const isEditing = editingId === item.id;

            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#0d131f',
                  border: '1px solid #1e293b',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                {isEditing ? (
                  /* Edit Form */
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      placeholder="Title"
                      style={{
                        backgroundColor: '#111827',
                        border: '1px solid #38bdf8',
                        borderRadius: '6px',
                        padding: '0.5rem 0.75rem',
                        color: '#fff',
                        fontSize: '0.875rem'
                      }}
                    />
                    <input
                      type="url"
                      value={editUrl}
                      onChange={(e) => setEditUrl(e.target.value)}
                      placeholder="URL"
                      style={{
                        backgroundColor: '#111827',
                        border: '1px solid #38bdf8',
                        borderRadius: '6px',
                        padding: '0.5rem 0.75rem',
                        color: '#fff',
                        fontSize: '0.875rem'
                      }}
                    />
                    <input
                      type="text"
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                      placeholder="Category (optional)"
                      style={{
                        backgroundColor: '#111827',
                        border: '1px solid #38bdf8',
                        borderRadius: '6px',
                        padding: '0.5rem 0.75rem',
                        color: '#fff',
                        fontSize: '0.875rem'
                      }}
                    />
                    <textarea
                      rows={2}
                      value={editDesc}
                      onChange={(e) => setEditDesc(e.target.value)}
                      placeholder="Description (optional)"
                      style={{
                        backgroundColor: '#111827',
                        border: '1px solid #38bdf8',
                        borderRadius: '6px',
                        padding: '0.5rem 0.75rem',
                        color: '#fff',
                        fontSize: '0.875rem'
                      }}
                    />
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => setEditingId(null)}
                        className="btn btn-secondary btn-sm"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                      >
                        <X size={14} />
                        <span>Cancel</span>
                      </button>
                      <button
                        onClick={() => handleSaveEdit(item.id)}
                        className="btn btn-primary btn-sm"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                      >
                        <Save size={14} />
                        <span>Save</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Display View */
                  <>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                          {item.category && (
                            <span style={{
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              color: '#38bdf8',
                              backgroundColor: 'rgba(56, 189, 248, 0.1)',
                              padding: '0.15rem 0.5rem',
                              borderRadius: '4px'
                            }}>
                              {item.category}
                            </span>
                          )}
                          <span style={{
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            padding: '0.15rem 0.5rem',
                            borderRadius: '4px',
                            backgroundColor: item.published ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                            color: item.published ? '#34d399' : '#f87171'
                          }}>
                            {item.published ? 'Published' : 'Draft / Unpublished'}
                          </span>
                        </div>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                          {item.title}
                        </h3>
                        {item.description && (
                          <p style={{ fontSize: '0.825rem', color: '#94a3b8', marginTop: '0.35rem', marginBottom: 0 }}>
                            {item.description}
                          </p>
                        )}
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: '0.75rem',
                            color: '#64748b',
                            marginTop: '0.35rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            textDecoration: 'none'
                          }}
                        >
                          <span style={{ maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {item.url}
                          </span>
                          <ExternalLink size={12} />
                        </a>
                      </div>

                      {/* Action buttons */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
                        <button
                          onClick={() => togglePublishResource(item.id)}
                          style={{
                            padding: '0.4rem 0.6rem',
                            borderRadius: '6px',
                            backgroundColor: '#111827',
                            border: '1px solid #1f2937',
                            color: item.published ? '#34d399' : '#94a3b8',
                            fontSize: '0.75rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem'
                          }}
                          title={item.published ? 'Unpublish' : 'Publish'}
                        >
                          {item.published ? <Eye size={14} /> : <EyeOff size={14} />}
                          <span>{item.published ? 'Public' : 'Hidden'}</span>
                        </button>

                        <button
                          onClick={() => handleStartEdit(item)}
                          style={{
                            padding: '0.4rem 0.5rem',
                            borderRadius: '6px',
                            backgroundColor: '#111827',
                            border: '1px solid #1f2937',
                            color: '#94a3b8',
                            fontSize: '0.75rem'
                          }}
                          title="Edit Resource"
                        >
                          <Edit3 size={14} />
                        </button>

                        <button
                          onClick={() => {
                            if (window.confirm(`Delete "${item.title}"?`)) {
                              deleteResource(item.id);
                            }
                          }}
                          style={{
                            padding: '0.4rem 0.5rem',
                            borderRadius: '6px',
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.2)',
                            color: '#f87171',
                            fontSize: '0.75rem'
                          }}
                          title="Delete Resource"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
