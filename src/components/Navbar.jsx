import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 24px',
        transition: 'all 0.3s',
        background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 10,
            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px #7c3aed40',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" x2="12" y1="19" y2="22"/>
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 18, color: '#f0f0f8', letterSpacing: '-0.3px' }}>ToTalk</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          {[
            { key: 'nav.features', href: '#features' },
            { key: 'nav.how', href: '#how' },
            { key: 'nav.download', href: '#download' },
          ].map(({ key, href }) => (
            <a key={key} href={href} style={{ color: '#a0a0b8', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#f0f0f8'}
              onMouseLeave={e => e.target.style.color = '#a0a0b8'}
            >
              {t(key)}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={toggleLang} style={{
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            color: '#a0a0b8', borderRadius: 8, padding: '6px 12px', fontSize: 13,
            fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'Inter',
          }}
            onMouseEnter={e => { e.target.style.background = 'rgba(124,58,237,0.2)'; e.target.style.color = '#f0f0f8' }}
            onMouseLeave={e => { e.target.style.background = 'rgba(255,255,255,0.06)'; e.target.style.color = '#a0a0b8' }}
          >
            {i18n.language === 'en' ? 'RU' : 'EN'}
          </button>

          <a href="#download" style={{
            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
            color: '#fff', textDecoration: 'none', borderRadius: 10,
            padding: '8px 18px', fontSize: 14, fontWeight: 600,
            boxShadow: '0 0 20px #7c3aed30', transition: 'all 0.2s',
          }}
            onMouseEnter={e => e.target.style.boxShadow = '0 0 30px #7c3aed60'}
            onMouseLeave={e => e.target.style.boxShadow = '0 0 20px #7c3aed30'}
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .desktop-nav { display: none !important; } }
      `}</style>
    </motion.nav>
  )
}
