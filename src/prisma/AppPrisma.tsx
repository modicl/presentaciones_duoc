import { useState, useEffect } from 'react'
import duocLogo from '../assets/Logo_DuocUC.svg'
import P01Portada from './slides/P01Portada'
import P02Contexto from './slides/P02Contexto'
import P03Objetivos from './slides/P03Objetivos'
import P04Patrones from './slides/P04Patrones'
import P05DiagramaArquitectura from './slides/P05DiagramaArquitectura'
import P06FlujoEventDriven from './slides/P06FlujoEventDriven'
import P07MultiAgente from './slides/P07MultiAgente'
import P08Escalabilidad from './slides/P08Escalabilidad'
import P09Herramientas from './slides/P09Herramientas'
import P10Sostenibilidad from './slides/P10Sostenibilidad'
import P11EticaTecnica from './slides/P11EticaTecnica'
import P12EvaluacionDiseno from './slides/P12EvaluacionDiseno'

const SLIDES = [
  { component: P01Portada,             label: 'Portada' },
  { component: P02Contexto,            label: 'Contexto' },
  { component: P03Objetivos,           label: 'Objetivos' },
  { component: P04Patrones,            label: 'Patrones (Ind. 5)' },
  { component: P05DiagramaArquitectura,label: 'Diagrama (Ind. 5)' },
  { component: P06FlujoEventDriven,    label: 'Flujo Event-Driven (Ind. 5)' },
  { component: P07MultiAgente,         label: 'Multi-Agente (Ind. 5)' },
  { component: P08Escalabilidad,       label: 'Escalabilidad (Ind. 6)' },
  { component: P09Herramientas,        label: 'Herramientas' },
  { component: P10Sostenibilidad,      label: 'Sostenibilidad (Ind. 7)' },
  { component: P11EticaTecnica,        label: 'Ética y Técnica (Ind. 8)' },
  { component: P12EvaluacionDiseno,    label: 'Evaluación del Diseño' },
]

export default function AppPrisma() {
  const [current, setCurrent] = useState(0)
  const [light, setLight] = useState(false)

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
          href="?presentation=ev-proyectos"
          title="Ir a presentación Evaluación de Proyectos"
          className="flex items-center gap-1.5 font-body text-xs px-2.5 py-1 rounded-full border transition-colors select-none"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-label)' }}
        >
          ← Ev. Proyectos
        </a>
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
