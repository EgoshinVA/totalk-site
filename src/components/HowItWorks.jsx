import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stepIcons = [
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
]

export default function HowItWorks() {
  const { t } = useTranslation()
  const steps = t('how.steps', { returnObjects: true })
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how" className="section" style={{ position: 'relative', background: 'linear-gradient(180deg, transparent, rgba(124,58,237,0.04), transparent)' }}>
      <div className="container">
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 80 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }} className="section-title"
          >
            {t('how.title')}
          </motion.h2>
        </div>

        <div style={{ display: 'flex', gap: 0, alignItems: 'stretch', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 220, maxWidth: 320 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ textAlign: 'center', padding: '40px 28px', flex: 1 }}
              >
                {/* Number + icon */}
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: 24 }}>
                  <motion.div
                    animate={{ boxShadow: ['0 0 20px rgba(124,58,237,0.3)', '0 0 40px rgba(124,58,237,0.5)', '0 0 20px rgba(124,58,237,0.3)'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    style={{
                      width: 72, height: 72, borderRadius: 24,
                      background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(79,70,229,0.1))',
                      border: '1.5px solid rgba(124,58,237,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#9d5ffd', margin: '0 auto',
                    }}
                  >
                    {stepIcons[i]}
                  </motion.div>
                  <div style={{
                    position: 'absolute', top: -8, right: -8,
                    width: 24, height: 24, borderRadius: 12,
                    background: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 800, color: '#fff',
                  }}>
                    {i + 1}
                  </div>
                </div>

                <h3 style={{ fontSize: 22, fontWeight: 800, color: '#f0f0f8', marginBottom: 10, letterSpacing: '-0.5px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 15, color: '#a0a0b8', lineHeight: 1.65 }}>{step.desc}</p>
              </motion.div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={inView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                  style={{ flexShrink: 0, display: 'flex', alignItems: 'center', padding: '0 8px' }}
                  className="step-arrow"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(124,58,237,0.5)" strokeWidth="1.5" strokeLinecap="round">
                    <line x1="5" x2="19" y1="12" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .step-arrow { display: none !important; } }
      `}</style>
    </section>
  )
}
