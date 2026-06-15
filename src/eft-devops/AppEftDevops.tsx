import { useState, useEffect } from 'react'
import duocLogo from '../assets/Logo_DuocUC.svg'
import D01Portada from './slides/D01Portada'
import D02Arquitectura from './slides/D02Arquitectura'
import D03Integracion from './slides/D03Integracion'
import D04Contenedores from './slides/D04Contenedores'
import D05Compose from './slides/D05Compose'
import D06RegistroEcr from './slides/D06RegistroEcr'
import D07Pipeline from './slides/D07Pipeline'
import D08InfraAws from './slides/D08InfraAws'
import D09Orquestacion from './slides/D09Orquestacion'
import D10Seguridad from './slides/D10Seguridad'
import D11Observabilidad from './slides/D11Observabilidad'
import D12Cierre from './slides/D12Cierre'

const SLIDES = [
  { component: D01Portada,       label: 'Portada' },
  { component: D02Arquitectura,  label: 'Arquitectura · IE1' },
  { component: D03Integracion,   label: 'Integración · IE1' },
  { component: D04Contenedores,  label: 'Contenedores · IE2' },
  { component: D05Compose,       label: 'Docker Compose · IE2' },
  { component: D06RegistroEcr,   label: 'Registro ECR · IE3' },
  { component: D07Pipeline,      label: 'Pipeline CI/CD · IE3' },
  { component: D08InfraAws,      label: 'Infraestructura AWS · IE4' },
  { component: D09Orquestacion,  label: 'Orquestación y Escalado · IE4' },
  { component: D10Seguridad,     label: 'Seguridad y Secretos' },
  { component: D11Observabilidad,label: 'Observabilidad · IE5' },
  { component: D12Cierre,        label: 'Cierre' },
]

export default function AppEftDevops() {
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
          href="?"
          title="Volver al menú principal"
          className="flex items-center gap-1.5 font-body text-xs px-2.5 py-1 rounded-full border transition-colors select-none"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-label)' }}
        >
          ← Menú
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
