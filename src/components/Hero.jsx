import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

function PhoneMockup() {
  return (
    <div style={{
      width: 260, height: 520,
      background: 'linear-gradient(160deg, #1a1a28, #111118)',
      borderRadius: 40, border: '1.5px solid rgba(124,58,237,0.3)',
      boxShadow: '0 0 80px rgba(124,58,237,0.2), 0 40px 80px rgba(0,0,0,0.6)',
      overflow: 'hidden', position: 'relative',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Status bar */}
      <div style={{ padding: '16px 24px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#a0a0b8' }}>9:41</span>
        <div style={{ width: 80, height: 20, background: '#1a1a28', borderRadius: 10 }} />
        <span style={{ fontSize: 12, color: '#a0a0b8' }}>●●●</span>
      </div>

      {/* Header */}
      <div style={{ padding: '8px 20px 16px' }}>
        <p style={{ fontSize: 11, color: '#606078', marginBottom: 4 }}>Recent Tasks</p>
      </div>

      {/* Tasks */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          { title: 'Call the dentist', time: 'Today, 14:00', done: false },
          { title: 'Buy groceries', time: 'Tomorrow, 10:00', done: true },
          { title: 'Weekly team sync', time: 'Mon, 11:00', done: false, recurring: true },
        ].map((task, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
            style={{
              background: task.done ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.06)',
              borderRadius: 12, padding: '10px 12px',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', gap: 10,
              opacity: task.done ? 0.5 : 1,
            }}
          >
            <div style={{
              width: 20, height: 20, borderRadius: 10,
              border: task.done ? 'none' : '2px solid #7c3aed',
              background: task.done ? '#7c3aed' : 'transparent',
              flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {task.done && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: task.done ? '#606078' : '#f0f0f8', textDecoration: task.done ? 'line-through' : 'none', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{task.title}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#606078" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <p style={{ fontSize: 10, color: '#606078' }}>{task.time}</p>
                {task.recurring && <span style={{ fontSize: 9, color: '#7c3aed', background: 'rgba(124,58,237,0.15)', borderRadius: 4, padding: '1px 5px' }}>↻</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Record button area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', padding: '0 0 32px' }}>
        <p style={{ fontSize: 10, color: '#606078', marginBottom: 16 }}>Hold to record</p>
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 80, height: 80, borderRadius: 40,
            background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(79,70,229,0.3))',
            border: '1.5px solid rgba(124,58,237,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 40px rgba(124,58,237,0.4)',
            cursor: 'pointer',
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9d5ffd" strokeWidth="2" strokeLinecap="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" x2="12" y1="19" y2="22"/>
          </svg>
        </motion.div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80 }}>
      {/* Background glows */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', right: '5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
      }} />

      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 80, justifyContent: 'space-between', flexWrap: 'wrap', padding: '80px 24px' }}>
        {/* Left */}
        <div style={{ flex: 1, minWidth: 300, maxWidth: 560 }}>
          <motion.div {...fadeUp(0.1)}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: 100, padding: '6px 14px', fontSize: 12, fontWeight: 600,
              color: '#a78bfa', marginBottom: 28, letterSpacing: '0.5px',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 3, background: '#7c3aed', boxShadow: '0 0 8px #7c3aed' }} />
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} style={{ fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 8 }}>
            {t('hero.title')}
          </motion.h1>
          <motion.h1 {...fadeUp(0.3)} className="gradient-text" style={{ fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 28 }}>
            {t('hero.titleAccent')}
          </motion.h1>

          <motion.p {...fadeUp(0.4)} style={{ fontSize: 18, color: '#a0a0b8', lineHeight: 1.7, marginBottom: 40, maxWidth: 460 }}>
            {t('hero.subtitle')}
          </motion.p>

          <motion.div {...fadeUp(0.5)} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#download" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
              color: '#fff', textDecoration: 'none', borderRadius: 14,
              padding: '14px 28px', fontSize: 16, fontWeight: 700,
              boxShadow: '0 0 40px rgba(124,58,237,0.35)', transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(124,58,237,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.35)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              {t('hero.cta')}
            </a>
            <a href="#how" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              color: '#a0a0b8', textDecoration: 'none', borderRadius: 14,
              padding: '14px 28px', fontSize: 16, fontWeight: 600, transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#f0f0f8' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#a0a0b8' }}
            >
              {t('hero.ctaSecondary')} →
            </a>
          </motion.div>
        </div>

        {/* Right — Phone */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateY: -15 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1000 }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  )
}
