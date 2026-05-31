import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ACCENT = '#10B981'
const INDIGO = '#6366F1'
const RED    = '#EF4444'

const ALTS = [
  {
    id: 'Alt 1',
    nombre: 'Implementación Mixta',
    estado: 'VIABLE',
    estadoColor: ACCENT,
    van: '$1.792,6M CLP',
    tir: '71,03%',
    pri: '2 a. 0 m. 7 d.',
    inv: '$1.350M',
    financ: 'MINSAL/FNDR · $700M',
    puntos: [
      'M1 y M3 desarrollo interno · M2, M4, M5 Low-Code',
      'Distribuye riesgo tecnológico entre equipos',
      'Mayor coordinación interna/externa requerida',
    ],
    color: ACCENT,
    destacado: false,
  },
  {
    id: 'Alt 2',
    nombre: 'Desarrollo Inhouse',
    estado: 'RECOMENDADA',
    estadoColor: INDIGO,
    van: '$2.032,5M CLP',
    tir: '100,24%',
    pri: '1 a. 5 m. 23 d.',
    inv: '$1.320M',
    financ: 'Préstamo bancario · $800M',
    puntos: [
      'Todos los módulos con proveedores especializados',
      'Genera propiedad intelectual replicable en MINSAL',
      'Riesgo: cumplimiento de plazos en desarrollo interno',
    ],
    color: INDIGO,
    destacado: true,
  },
  {
    id: 'Alt 3',
    nombre: 'Low-Code (OutSystems/Mendix)',
    estado: 'INVIABLE',
    estadoColor: RED,
    van: '-$8.284,2M CLP',
    tir: 'Sin solución',
    pri: 'No recupera',
    inv: '$1.330M',
    financ: 'MINSAL/FNDR · $450M',
    puntos: [
      'Costos fijos $16.670,6M/año superan ingresos FONASA',
      'Déficit acumulado -$9.295M en 5 años',
      'Licencias por transacción escalan con volumen',
    ],
    color: RED,
    destacado: false,
  },
]

export default function F06Comparativa() {
  const [alt3visible, setAlt3visible] = useState(true)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && alt3visible) {
        e.stopPropagation()
        setAlt3visible(false)
      }
    }
    window.addEventListener('keydown', handler, true)
    return () => window.removeEventListener('keydown', handler, true)
  }, [alt3visible])

  const visibleAlts = alt3visible ? ALTS : ALTS.filter(a => a.color !== RED)

  return (
    <div
      className="relative w-full h-full flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10" style={{ backgroundColor: ACCENT }} />

      {/* Título */}
      <div className="pl-16 pr-12 pt-7 pb-5 shrink-0">
        <p className="font-body text-base tracking-[0.25em] uppercase mb-1" style={{ color: ACCENT }}>
          Análisis Comparativo
        </p>
        <div className="flex items-end justify-between">
          <h2 className="font-heading text-5xl font-bold leading-tight" style={{ color: 'var(--text)' }}>
            Comparación de Alternativas
          </h2>
          {alt3visible && (
            <p className="font-body text-sm pb-1" style={{ color: 'var(--text-label)' }}>
              Presiona{' '}
              <kbd
                className="px-1.5 py-0.5 rounded border font-mono text-xs"
                style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
              >
                →
              </kbd>{' '}
              para descartar la alternativa inviable
            </p>
          )}
        </div>
      </div>

      {/* Cards — Framer Motion layout + AnimatePresence */}
      <div className="pl-16 pr-12 pb-5 flex gap-5">
        <AnimatePresence mode="popLayout">
          {visibleAlts.map(({ id, nombre, estado, estadoColor, van, tir, pri, inv, financ, puntos, color, destacado }) => (
            <motion.div
              key={id}
              layout
              initial={false}
              exit={{ opacity: 0 }}
              transition={{
                layout: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.3 },
              }}
              className="flex flex-col rounded-2xl overflow-hidden min-w-0"
              style={{
                flex: 1,
                border: `${destacado ? 2 : 1}px solid ${destacado ? color : 'var(--border)'}`,
                backgroundColor: 'var(--bg-card)',
              }}
            >
              {/* ── Header ── */}
              <div className="px-6 py-5 shrink-0" style={{ backgroundColor: `${color}20` }}>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="font-heading text-3xl font-bold" style={{ color }}>{id}</p>
                  <span
                    className="font-body text-base font-bold px-4 py-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: `${estadoColor}30`, color: estadoColor }}
                  >
                    {estado}
                  </span>
                </div>
                <p className="font-body text-lg font-semibold" style={{ color: 'var(--text-muted)' }}>
                  {nombre}
                </p>
              </div>

              {/* ── Indicadores ── */}
              <div className="grid grid-cols-3 shrink-0 border-b" style={{ borderColor: 'var(--border)' }}>
                {[
                  { label: 'VAN', val: van },
                  { label: 'TIR', val: tir },
                  { label: 'PRI', val: pri },
                ].map(({ label, val }, i) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center py-4 px-2"
                    style={{ borderRight: i < 2 ? '1px solid var(--border)' : undefined }}
                  >
                    <p
                      className="font-body text-base font-bold uppercase tracking-widest mb-1"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {label}
                    </p>
                    <p
                      className="font-heading font-bold text-center leading-tight"
                      style={{ fontSize: 'clamp(16px, 2vw, 28px)', color }}
                    >
                      {val}
                    </p>
                  </div>
                ))}
              </div>

              {/* ── Financiamiento ── */}
              <div className="px-6 py-4 shrink-0 border-b" style={{ borderColor: 'var(--border)' }}>
                <div className="flex gap-8">
                  <div>
                    <p className="font-body text-sm uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-label)' }}>
                      Inversión
                    </p>
                    <p className="font-body text-lg font-bold" style={{ color: 'var(--text)' }}>{inv}</p>
                  </div>
                  <div>
                    <p className="font-body text-sm uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-label)' }}>
                      Financiamiento
                    </p>
                    <p className="font-body text-lg font-bold" style={{ color: 'var(--text)' }}>{financ}</p>
                  </div>
                </div>
              </div>

              {/* ── Puntos clave ── */}
              <div className="px-6 py-5">
                <ul className="space-y-3">
                  {puntos.map(p => (
                    <li key={p} className="flex gap-2 font-body text-base leading-snug" style={{ color: 'var(--text-muted)' }}>
                      <span className="shrink-0 font-bold text-lg" style={{ color }}>›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Footer destacado (solo Alt 2) ── */}
              {destacado && (
                <div
                  className="px-6 py-4 shrink-0 text-center"
                  style={{ backgroundColor: `${color}20`, borderTop: `1px solid ${color}50` }}
                >
                  <p className="font-body text-lg font-bold" style={{ color }}>
                    VAN +$239,9M sobre Alt 1 · PI replicable en MINSAL
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Nota cuando Alt 3 fue descartada */}
      <AnimatePresence>
        {!alt3visible && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="pl-16 pr-12 pb-4 shrink-0"
          >
            <div
              className="rounded-xl px-6 py-3 border"
              style={{ backgroundColor: `${RED}18`, borderColor: `${RED}50` }}
            >
              <p className="font-body text-base font-semibold" style={{ color: RED }}>
                Alt 3 descartada — costos fijos de $16.670,6M/año superan los ingresos en todos los períodos
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
