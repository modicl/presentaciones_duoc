import { useState, useEffect, useRef } from 'react'
import { downloadPdf } from './pdf/downloadPdf'
import duocLogo from './assets/Logo_DuocUC.svg'
import Slide01Portada from './slides/Slide01Portada'
import Slide02Contexto from './slides/Slide02Contexto'
import Slide03Diagnostico from './slides/Slide03Diagnostico'
import Slide04Porter from './slides/Slide04Porter'
import Slide05Pestel from './slides/Slide05Pestel'
import Slide06Objetivos from './slides/Slide06Objetivos'
import Slide07Producto from './slides/Slide07Producto'
import Slide08Stakeholders from './slides/Slide08Stakeholders'
import Slide10PropuestaValor from './slides/Slide10PropuestaValor'
import Slide11Conclusiones from './slides/Slide11Conclusiones'

const SLIDES = [
  Slide01Portada,
  Slide02Contexto,
  Slide03Diagnostico,
  Slide04Porter,
  Slide05Pestel,
  Slide06Objetivos,
  Slide07Producto,
  Slide08Stakeholders,
  Slide10PropuestaValor,
  Slide11Conclusiones,
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [light, setLight] = useState(false)
  const [pdfStatus, setPdfStatus] = useState<string | null>(null)
  const generatingRef = useRef(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrent(c => Math.min(c + 1, SLIDES.length - 1))
      if (e.key === 'ArrowLeft')  setCurrent(c => Math.max(c - 1, 0))
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

        <button
          disabled={!!pdfStatus}
          title="Descargar presentación como PDF"
          onClick={async () => {
            if (generatingRef.current) return
            generatingRef.current = true
            try {
              await downloadPdf(msg => setPdfStatus(msg))
            } finally {
              setPdfStatus(null)
              generatingRef.current = false
            }
          }}
          className="flex items-center gap-1.5 font-body text-xs px-2.5 py-1 rounded-full border transition-colors select-none disabled:opacity-60"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-label)', cursor: pdfStatus ? 'wait' : 'pointer' }}
        >
          {pdfStatus ? (
            <>
              <svg height="12" width="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin" aria-hidden="true">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              {pdfStatus}
            </>
          ) : (
            <>
              <svg height="13" width="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              PDF
            </>
          )}
        </button>

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
