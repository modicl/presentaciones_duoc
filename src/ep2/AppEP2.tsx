import { useState, useEffect } from 'react'
import duocLogo from '../assets/Logo_DuocUC.svg'
import E01Portada from './slides/E01Portada'
import E02Problema from './slides/E02Problema'
import E03Alternativas from './slides/E03Alternativas'
import E04CriteriosTecnicos from './slides/E04CriteriosTecnicos'
import E05CriteriosOrganizacionales from './slides/E05CriteriosOrganizacionales'
import E06CriteriosNormativos from './slides/E06CriteriosNormativos'
import E07CriteriosFinancieros from './slides/E07CriteriosFinancieros'
import E08MatrizFactibilidad from './slides/E08MatrizFactibilidad'
import E09Conclusiones from './slides/E09Conclusiones'

const SLIDES = [
  E01Portada,
  E02Problema,
  E03Alternativas,
  E04CriteriosTecnicos,
  E05CriteriosOrganizacionales,
  E06CriteriosNormativos,
  E07CriteriosFinancieros,
  E08MatrizFactibilidad,
  E09Conclusiones,
]

export default function AppEP2() {
  const [current, setCurrent] = useState(0)
  const [light, setLight] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrent(c => Math.min(c + 1, SLIDES.length - 1))
      if (e.key === 'ArrowLeft') setCurrent(c => Math.max(c - 1, 0))
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const SlideComponent = SLIDES[current]
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
          href="?presentation=menu"
          className="flex items-center gap-1.5 font-body text-xs px-2.5 py-1 rounded-full border transition-colors select-none"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-label)' }}
        >
          ← Menú
        </a>

        <a
          href="https://github.com/modicl/presentaciones_evproyecto"
          target="_blank"
          rel="noopener noreferrer"
          title="Ver repositorio en GitHub"
          className="flex items-center gap-1.5 font-body text-xs px-2.5 py-1 rounded-full border transition-colors select-none"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-label)' }}
        >
          <svg height="14" width="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
              0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
              -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
              .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
              -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27
              .68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
              .51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
              0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          GitHub
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
