import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarCheck, 
  ArrowRight, 
  HelpCircle, 
  BookOpen,
  Globe
} from 'lucide-react';
import { creatorProfile } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { ResourceCard } from '../components/features/ResourceCard';
import { AskQuestionModal } from '../components/features/AskQuestionModal';
import { BookingModal } from '../components/features/BookingModal';
import { InstagramIcon, YoutubeIcon } from '../components/ui/SocialIcons';
import brandLogo from '../assets/brand/ai-with-jeevan-logo.png';

export const HomePage: React.FC = () => {
  const { resources } = useApp();
  const [isAskModalOpen, setIsAskModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Show top 3 published resources on the homepage
  const latestResources = resources.filter(r => r.published).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '3.5rem 0 2.5rem 0',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{
            maxWidth: '740px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem'
          }}>
            {/* Official Brand Logo */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src={brandLogo}
                  alt="AI with Jeevan Logo"
                  style={{
                    width: '6.5rem',
                    height: '6.5rem',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    boxShadow: '0 0 30px rgba(56, 189, 248, 0.35)',
                    border: '3px solid rgba(56, 189, 248, 0.45)',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '4px',
                  right: '4px',
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  border: '3px solid #070a12'
                }} />
              </div>

              <div>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em' }}>
                  AI with Jeevan
                </h1>
                <p style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 600, marginTop: '0.15rem' }}>
                  Making complex concepts simple.
                </p>
              </div>
            </div>

            {/* Social & Portfolio Links Badges */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              flexWrap: 'wrap'
            }}>
              {/* Instagram */}
              <a
                href={creatorProfile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(225, 48, 108, 0.12)',
                  border: '1px solid rgba(225, 48, 108, 0.3)',
                  color: '#f472b6',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <InstagramIcon size={14} color="#e1306c" />
                <span>{creatorProfile.instagramHandle}</span>
              </a>

              {/* YouTube */}
              <a
                href={creatorProfile.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#fca5a5',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <YoutubeIcon size={14} color="#ef4444" />
                <span>@aiwithjeevan944</span>
              </a>

              {/* Portfolio */}
              <a
                href={creatorProfile.githubPagesUrl || creatorProfile.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  color: '#38bdf8',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <Globe size={13} color="#38bdf8" />
                <span>Personal Portfolio</span>
              </a>
            </div>

            {/* Introduction */}
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '620px'
            }}>
              Hey there! Welcome to my personal creator hub. Here you will find all the roadmaps, tools, and links I share on Instagram, along with direct 1:1 guidance and a community question form.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.85rem',
              flexWrap: 'wrap',
              width: '100%',
              marginTop: '0.5rem'
            }}>
              <Link
                to="/resources"
                className="btn btn-primary btn-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
              >
                <BookOpen size={17} />
                <span>Explore Resources</span>
              </Link>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="btn btn-glow-brand btn-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
              >
                <CalendarCheck size={17} />
                <span>Book a 1:1 — ₹50</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured / Latest Resources Section */}
      <section style={{ padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc' }}>
                Latest Resources
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                Links and guides I've shared with my followers.
              </p>
            </div>

            <Link
              to="/resources"
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <span>View All Links</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem'
          }}>
            {latestResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* 1:1 Guidance Spotlight */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.12) 0%, rgba(99, 102, 241, 0.15) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.25rem 1.75rem',
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(56, 189, 248, 0.15)',
              color: 'var(--primary)',
              fontSize: '0.75rem',
              fontWeight: 700,
              marginBottom: '0.75rem'
            }}>
              <CalendarCheck size={14} />
              <span>15-Minute Conversation</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: '0.65rem' }}>
              1:1 Guidance with Jeevan
            </h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Have a specific question or don't know what to learn next? Book a short 1:1 conversation and let's discuss it.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem'
            }}>
              {['Learning Roadmap', 'Project Guidance', 'Career Direction', 'Interview Prep', 'Beginner Doubts'].map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  ✓ {tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="btn btn-glow-brand btn-lg"
              style={{ padding: '0.85rem 2rem' }}
            >
              <span>Book a 1:1 — ₹50</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Ask a Question Callout */}
      <section style={{ padding: '2rem 0 3rem 0' }}>
        <div className="container">
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem',
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            <HelpCircle size={28} color="var(--primary)" style={{ margin: '0 auto 0.75rem auto' }} />
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem' }}>
              Have a Question for Jeevan?
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
              Submit your question directly through the website. I review all questions and answer them directly or cover them in upcoming Instagram reels.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setIsAskModalOpen(true)}
                className="btn btn-primary"
              >
                <HelpCircle size={15} />
                <span>Ask a Question</span>
              </button>
              <Link
                to="/qna"
                className="btn btn-secondary"
              >
                <span>View Q&amp;A Hub</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <AskQuestionModal
        isOpen={isAskModalOpen}
        onClose={() => setIsAskModalOpen(false)}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};
