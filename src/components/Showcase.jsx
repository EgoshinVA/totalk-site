import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Showcase() {
  const { t } = useTranslation()
  const items = t('showcase.items', { returnObjects: true })
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }} className="section-title"
          >
            {t('showcase.title')}
          </motion.h2>
        </div>

        {/* Tab buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 56, flexWrap: 'wrap' }}>
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                background: active === i ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${active === i ? 'rgba(124,58,237,0.5)' : 'rgba(255,255,255,0.08)'}`,
                color: active === i ? '#a78bfa' : '#a0a0b8',
                borderRadius: 12, padding: '10px 20px', fontSize: 14, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.25s', fontFamily: 'Inter',
              }}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ display: 'flex', gap: 60, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* GIF placeholder */}
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              width: 240, height: 480,
              background: 'linear-gradient(160deg, #1a1a28, #111118)',
              borderRadius: 36, border: '1.5px solid rgba(124,58,237,0.3)',
              boxShadow: '0 0 60px rgba(124,58,237,0.2), 0 30px 60px rgba(0,0,0,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: 12, position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Placeholder for GIF */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(79,70,229,0.04))',
            }} />
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ color: 'rgba(124,58,237,0.6)', zIndex: 1 }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                <circle cx="9" cy="9" r="2"/>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
              </svg>
            </motion.div>
            <p style={{ fontSize: 12, color: 'rgba(124,58,237,0.6)', zIndex: 1, textAlign: 'center', padding: '0 20px' }}>
              Add your GIF here
            </p>
          </motion.div>

          {/* Text */}
          <motion.div
            key={`text-${active}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{ maxWidth: 360 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20,
              background: 'rgba(124,58,237,0.12)', borderRadius: 8, padding: '6px 14px',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 3, background: '#7c3aed', boxShadow: '0 0 8px #7c3aed', display: 'block' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#9d5ffd', letterSpacing: '0.5px' }}>0{active + 1} / 0{items.length}</span>
            </div>

            <h3 style={{ fontSize: 28, fontWeight: 800, color: '#f0f0f8', marginBottom: 12, letterSpacing: '-0.5px' }}>
              {items[active].title}
            </h3>
            <p style={{ fontSize: 16, color: '#a0a0b8', lineHeight: 1.7 }}>
              {items[active].desc}
            </p>

            {/* Navigation dots */}
            <div style={{ display: 'flex', gap: 8, marginTop: 32 }}>
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: active === i ? 24 : 8, height: 8,
                    borderRadius: 4, border: 'none', cursor: 'pointer',
                    background: active === i ? '#7c3aed' : 'rgba(255,255,255,0.15)',
                    transition: 'all 0.3s',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
