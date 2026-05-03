import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 24px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 10,
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 20px #7c3aed40',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
              </div>
              <span style={{ fontWeight: 700, fontSize: 18, color: '#f0f0f8' }}>ToTalk</span>
            </div>
            <p style={{ fontSize: 14, color: '#606078', lineHeight: 1.65 }}>{t('footer.tagline')}</p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#606078', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 16 }}>
                {t('footer.links')}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { label: t('nav.features'), href: '#features' },
                  { label: t('nav.how'), href: '#how' },
                  { label: t('nav.download'), href: '#download' },
                  { label: 'GitHub', href: 'https://github.com/EgoshinVA' },
                  { label: 'Figma', href: 'https://www.figma.com/design/SlNHYHFfEgzGqeWSDMT1YR/Untitled?node-id=0-1&t=DpOdUy15muhgwntF-0' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} style={{ fontSize: 14, color: '#606078', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#a0a0b8'}
                    onMouseLeave={e => e.target.style.color = '#606078'}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#606078', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 16 }}>
                {t('footer.legal')}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { label: t('footer.privacy'), href: '#' },
                  { label: t('footer.terms'), href: '#' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} style={{ fontSize: 14, color: '#606078', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#a0a0b8'}
                    onMouseLeave={e => e.target.style.color = '#606078'}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: '#606078' }}>
            © 2026 ToTalk. {t('footer.madeWith')} <span style={{ color: '#7c3aed' }}>♥</span> {t('footer.by')} Vitaliy
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="https://github.com/EgoshinVA" target="_blank" rel="noopener noreferrer" style={{ color: '#606078', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#a0a0b8'}
              onMouseLeave={e => e.currentTarget.style.color = '#606078'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
