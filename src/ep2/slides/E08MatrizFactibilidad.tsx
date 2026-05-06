const OPCIONES = [
  {
    rank: '1°',
    nombre: 'Incremental Priorizado',
    score: 74,
    max: 84,
    pct: Math.round((74 / 84) * 100),
    nota: 'Flexibilidad + control normativo + gestión de riesgo por fases',
    color: '#43B02A',
  },
  {
    rank: '2°',
    nombre: 'Consorcio Público Inter-Servicios',
    score: 71,
    max: 84,
    pct: Math.round((71 / 84) * 100),
    nota: 'Alto respaldo MINSAL · costos compartidos · plazo 24–36 meses (inviable en 12)',
    color: '#307FE2',
  },
  {
    rank: '3°',
    nombre: 'Desarrollo In-House Integral',
    score: 63,
    max: 84,
    pct: Math.round((63 / 84) * 100),
    nota: 'Máximo control normativo · penalizado por CAPEX alto y plazo ajustado',
    color: '#307FE2',
  },
  {
    rank: '4°',
    nombre: 'Open Source Adaptado',
    score: 58,
    max: 84,
    pct: Math.round((58 / 84) * 100),
    nota: 'Sin vendor lock-in · alto costo de customización al contexto chileno',
    color: '#FFB800',
  },
  {
    rank: '5°',
    nombre: 'SaaS Especializado en Salud',
    score: 52,
    max: 84,
    pct: Math.round((52 / 84) * 100),
    nota: 'Rápido · falla en cumplimiento normativo chileno — criterio determinante',
    color: '#E53E3E',
  },
]

const TIPOS = [
  { label: 'Técnica', criterios: 3, ponderacion: 'Relevantes' },
  { label: 'Normativa/Legal', criterios: 3, ponderacion: 'Relevantes' },
  { label: 'Organizacional', criterios: 3, ponderacion: 'Neutrales' },
  { label: 'Financiera', criterios: 3, ponderacion: 'Neutrales/Marginales' },
]

export default function E08MatrizFactibilidad() {
  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      <div className="flex flex-1 min-h-0">
        {/* Left — ranking */}
        <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[3] min-w-0">
          <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-2">
            Evaluación de Alternativas
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
            Resumen Matriz de Factibilidad
          </h2>

          <div className="space-y-3">
            {OPCIONES.map(({ rank, nombre, score, max, pct, nota, color }) => (
              <div
                key={nombre}
                className="rounded-lg px-4 py-3 border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="font-heading text-xl font-bold shrink-0 w-8" style={{ color }}>{rank}</span>
                  <span className="font-body text-lg font-bold flex-1" style={{ color: 'var(--text)' }}>{nombre}</span>
                  <span className="font-heading text-2xl font-bold shrink-0" style={{ color }}>
                    {score}<span className="text-base font-body opacity-50">/{max}</span>
                  </span>
                </div>
                {/* Progress bar */}
                <div className="h-1.5 rounded-full mb-1.5" style={{ backgroundColor: 'var(--border)' }}>
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${pct}%`, backgroundColor: color }}
                  />
                </div>
                <p className="font-body text-sm pl-11" style={{ color: 'var(--text-label)' }}>{nota}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — structure */}
        <div
          className="flex flex-col justify-center items-center flex-[2] border-l gap-5 px-8 py-8"
          style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
        >
          <div className="text-center mb-2">
            <span className="font-heading font-bold text-duoc-blue" style={{ fontSize: 'clamp(56px, 8vw, 110px)', lineHeight: 1 }}>84</span>
            <p className="font-body text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--text-dim)' }}>puntos máximos</p>
          </div>

          <div className="w-full space-y-2">
            <p className="font-body text-xs uppercase tracking-widest text-center mb-3" style={{ color: 'var(--text-label)' }}>
              12 criterios · 4 dimensiones
            </p>
            {TIPOS.map(({ label, criterios, ponderacion }) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-lg px-4 py-2.5 border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div>
                  <p className="font-body text-base font-bold" style={{ color: 'var(--text)' }}>{label}</p>
                  <p className="font-body text-sm" style={{ color: 'var(--text-label)' }}>{ponderacion}</p>
                </div>
                <span className="font-heading text-lg font-bold text-duoc-blue">{criterios}</span>
              </div>
            ))}
            <div
              className="rounded-lg px-4 py-2.5 border text-center mt-2"
              style={{ backgroundColor: 'rgba(48,127,226,0.06)', borderColor: 'rgba(48,127,226,0.25)' }}
            >
              <p className="font-body text-xs" style={{ color: 'var(--text-label)' }}>
                6 Relevantes · 4 Neutrales · 2 Marginales
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
