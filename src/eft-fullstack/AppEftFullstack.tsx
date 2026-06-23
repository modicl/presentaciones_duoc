import { useState, useEffect } from 'react'
import duocLogo from '../assets/Logo_DuocUC.svg'
import { downloadEftFullstackPdf } from './pdf/downloadEftFullstackPdf'
import T01Portada from './slides/T01Portada'
import T02Agenda from './slides/T02Agenda'
import T03Arquitectura from './slides/T03Arquitectura'
import T04Requerimientos from './slides/T04Requerimientos'
import T05Etica from './slides/T05Etica'
import T06Retrospectiva from './slides/T06Retrospectiva'
import T07Patrones from './slides/T07Patrones'
import T08Arquetipos from './slides/T08Arquetipos'
import T09Mantenibilidad from './slides/T09Mantenibilidad'
import T10Branching from './slides/T10Branching'
import T11Integracion from './slides/T11Integracion'
import T12Escalabilidad from './slides/T12Escalabilidad'
import T13PruebasUnitarias from './slides/T13PruebasUnitarias'
import T14PruebasFuncionales from './slides/T14PruebasFuncionales'
import T15Cierre from './slides/T15Cierre'

const SLIDES = [
  { component: T01Portada,            label: 'Portada' },
  { component: T02Agenda,             label: 'Agenda' },
  { component: T03Arquitectura,       label: 'Arquitectura · Ind. 1, 12' },
  { component: T04Requerimientos,     label: 'Requerimientos del cliente · Ind. 1' },
  { component: T05Etica,              label: 'Ética y Seguridad · Ind. 1, 7' },
  { component: T06Retrospectiva,      label: 'Backend + Frontend · Ind. 2' },
  { component: T07Patrones,           label: 'Patrones de diseño · Ind. 3, 8' },
  { component: T08Arquetipos,         label: 'Arquetipos arquitectónicos · Ind. 10, 12' },
  { component: T09Mantenibilidad,     label: 'Adaptabilidad · Ind. 8, 9' },
  { component: T10Branching,          label: 'Branching Git · Ind. 4, 11' },
  { component: T11Integracion,        label: 'Integración · Ind. 5' },
  { component: T12Escalabilidad,      label: 'Escalabilidad · Ind. 12' },
  { component: T13PruebasUnitarias,   label: 'Pruebas unitarias · Ind. 6, 13' },
  { component: T14PruebasFuncionales, label: 'Pruebas funcionales · Ind. 6, 13' },
  { component: T15Cierre,             label: 'Cierre · Ind. 2, 3, 6' },
]

export default function AppEftFullstack() {
  const [current, setCurrent] = useState(0)
  const [light, setLight] = useState(false)
  const [pdfMsg, setPdfMsg] = useState('')
  const [generatingPdf, setGeneratingPdf] = useState(false)

  const handlePdf = async () => {
    setGeneratingPdf(true)
    try {
      await downloadEftFullstackPdf(setPdfMsg)
    } catch (e) {
      console.error(e)
    } finally {
      setGeneratingPdf(false)
      setPdfMsg('')
    }
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrent(c => Math.min(c + 1, SLIDES.length - 1))
      if (e.key === 'ArrowLeft')  setCurrent(c => Math.max(c - 1, 0))
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const { component: SlideComponent, label } = SLIDES[current]
  const progress = (current / (SLIDES.length - 1)) * 100

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden${light ? ' theme-light' : ''}`}
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <SlideComponent />

      {/* Duoc logo — top right */}
      <div className="absolute top-5 right-6 z-20 pointer-events-none select-none">
        <img src={duocLogo} alt="Duoc UC" className="h-8 opacity-70" />
      </div>

      {/* Slide label — top center */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none">
        <p className="font-body text-xs uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
          {label}
        </p>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ backgroundColor: 'var(--border)' }}>
        <div
          className="h-full bg-duoc-blue transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide counter */}
      <div
        className="absolute bottom-4 right-6 font-body text-xs select-none"
        style={{ color: 'var(--text-dim)' }}
      >
        {current + 1} / {SLIDES.length}
      </div>

      {/* Bottom-left controls */}
      <div className="absolute bottom-3 left-6 z-20 flex items-center gap-2">
        <button
          onClick={() => setLight(l => !l)}
          title={light ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
          className="flex items-center gap-1.5 font-body text-xs px-2.5 py-1 rounded-full border transition-colors select-none"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-label)' }}
        >
          {light ? '🌙 Oscuro' : '☀️ Claro'}
        </button>
        <a
          href="?"
          title="Volver al menú principal"
          className="flex items-center gap-1.5 font-body text-xs px-2.5 py-1 rounded-full border transition-colors select-none"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-label)' }}
        >
          ← Menú
        </a>
        <button
          onClick={handlePdf}
          disabled={generatingPdf}
          title="Descargar presentación en PDF"
          className="flex items-center gap-1.5 font-body text-xs px-2.5 py-1 rounded-full border transition-colors select-none"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border)',
            color: generatingPdf ? '#9B59B6' : 'var(--text-label)',
            opacity: generatingPdf ? 0.75 : 1,
            cursor: generatingPdf ? 'default' : 'pointer',
          }}
        >
          {generatingPdf ? (pdfMsg || 'Generando…') : '⬇ PDF'}
        </button>
      </div>

      {/* Arrow hints */}
      {current > 0 && (
        <button
          onClick={() => setCurrent(c => c - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 transition-colors text-2xl select-none"
          style={{ color: 'var(--border)' }}
        >
          ‹
        </button>
      )}
      {current < SLIDES.length - 1 && (
        <button
          onClick={() => setCurrent(c => c + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors text-2xl select-none"
          style={{ color: 'var(--border)' }}
        >
          ›
        </button>
      )}
    </div>
  )
}
