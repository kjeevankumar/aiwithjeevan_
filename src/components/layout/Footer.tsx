import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { creatorProfile } from '../../data/mockData';
import { InstagramIcon, YoutubeIcon, GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import brandLogo from '../../assets/brand/ai-with-jeevan-logo.png';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '3.5rem',
      paddingBottom: '2.5rem',
      marginTop: '4rem',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          {/* Creator Profile Summary with Official Logo */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img
                src={brandLogo}
                alt="AI with Jeevan Logo"
                style={{
                  width: '2.75rem',
                  height: '2.75rem',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1.5px solid rgba(56, 189, 248, 0.4)',
                  boxShadow: '0 0 12px rgba(56, 189, 248, 0.25)',
                  display: 'block'
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc' }}>AI with Jeevan</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>@aiwithjeevan_</p>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              {creatorProfile.bio}
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <a
                href={creatorProfile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '2.2rem',
                  height: '2.2rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <InstagramIcon size={17} color="#e1306c" />
              </a>

              <a
                href={creatorProfile.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{
                  width: '2.2rem',
                  height: '2.2rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <YoutubeIcon size={17} color="#ef4444" />
              </a>

              <a
                href={creatorProfile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  width: '2.2rem',
                  height: '2.2rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <GithubIcon size={17} color="#fff" />
              </a>

              <a
                href={creatorProfile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '2.2rem',
                  height: '2.2rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <LinkedinIcon size={17} color="#0a66c2" />
              </a>
            </div>
          </div>

          {/* Quick Hub Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1rem', letterSpacing: '0.02em' }}>
              RESOURCES &amp; LINKS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link to="/resources" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  All Shared Resources
                </Link>
              </li>
              <li>
                <a 
                  href="https://aiml-90-days-challenge.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>90-Day AI/ML Roadmap</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <Link to="/series" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  45-Day Instagram Series
                </Link>
              </li>
              <li>
                <Link to="/jobs" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Job &amp; Career Sheets
                </Link>
              </li>
              <li>
                <Link to="/qna" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Ask a Question
                </Link>
              </li>
            </ul>
          </div>

          {/* Guidance & Creator */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1rem', letterSpacing: '0.02em' }}>
              1:1 GUIDANCE &amp; CREATOR
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link to="/booking" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>Book 15-Min 1:1 (₹50)</span>
                  <ArrowUpRight size={14} />
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  About Jeevan
                </Link>
              </li>
              <li>
                <a href={creatorProfile.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>Instagram @aiwithjeevan_</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-faint)' }}>
            © {new Date().getFullYear()} AI with Jeevan. All links and roadmaps shared for the community.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <span>Official creator hub for</span>
            <span style={{ color: '#f8fafc', fontWeight: 600 }}>@aiwithjeevan_</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
