const MODULOS = [
  {
    rank: '1°',
    cod: 'M1',
    nombre: 'Motor de Priorización Bio-Psico-Social',
    score: 74,
    max: 84,
    pct: Math.round((74 / 84) * 100),
    nota: 'Mayor impacto en la crisis asistencial · ROI inmediatamente medible',
    fase: 'Fase 1',
    color: '#43B02A',
  },
  {
    rank: '2°',
    cod: 'M2',
    nombre: 'Gestor de Reasignación Multicanal',
    score: 73,
    max: 84,
    pct: Math.round((73 / 84) * 100),
    nota: 'Aliado natural de la gestión del cambio con SOME y gremios',
    fase: 'Fase 1',
    color: '#43B02A',
  },
  {
    rank: '3°',
    cod: 'M4',
    nombre: 'Portal de Autogestión del Paciente',
    score: 71,
    max: 84,
    pct: Math.round((71 / 84) * 100),
    nota: 'Mandato legal Ley 20.584 · Primera entrega de Fase 2',
    fase: 'Fase 2',
    color: '#307FE2',
  },
  {
    rank: '4°',
    cod: 'M3',
    nombre: 'Hub de Interoperabilidad HL7 FHIR',
    score: 59,
    max: 84,
    pct: Math.round((59 / 84) * 100),
    nota: 'Mayor riesgo técnico · Requiere SLA SIDRA firmado previo',
    fase: 'Fase 2',
    color: '#E53E3E',
  },
  {
    rank: '5°',
    cod: 'M5',
    nombre: 'Analytics de Capacidad Asistencial',
    score: 59,
    max: 84,
    pct: Math.round((59 / 84) * 100),
    nota: 'Última entrega · Valor condicionado a calidad de M1+M2',
    fase: 'Fase 2',
    color: '#FFB800',
  },
]

const TIPOS = [
  { label: 'Técnica', ponderacion: '2 Relevantes · 1 Neutral', color: '#307FE2' },
  { label: 'Normativa/Legal', ponderacion: '2 Relevantes · 1 Neutral', color: '#E53E3E' },
  { label: 'Organizacional', ponderacion: '1 Relevante · 1 Neutral · 1 Marginal', color: '#FFB800' },
  { label: 'Financiera', ponderacion: '1 Relevante · 1 Neutral · 1 Marginal', color: '#43B02A' },
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
            Evaluación de Módulos
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
            Resumen Matriz de Factibilidad
          </h2>

          <div className="space-y-3">
            {MODULOS.map(({ rank, cod, nombre, score, max, pct, nota, fase, color }) => (
              <div
                key={cod}
                className="rounded-lg px-4 py-3 border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="font-heading text-xl font-bold shrink-0 w-8" style={{ color }}>{rank}</span>
                  <span
                    className="font-body text-sm font-bold px-2 py-0.5 rounded shrink-0"
                    style={{ backgroundColor: `${color}22`, color }}
                  >
                    {cod}
                  </span>
                  <span className="font-body text-lg font-bold flex-1" style={{ color: 'var(--text)' }}>{nombre}</span>
                  <span
                    className="font-body text-xs px-2 py-0.5 rounded-full shrink-0"
                    style={{ backgroundColor: `${color}18`, color }}
                  >
                    {fase}
                  </span>
                  <span className="font-heading text-2xl font-bold shrink-0" style={{ color }}>
                    {score}<span className="text-base font-body opacity-50">/{max}</span>
                  </span>
                </div>
                <div className="h-1.5 rounded-full mb-1.5" style={{ backgroundColor: 'var(--border)' }}>
                  <div
                    className="h-full rounded-full"
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
            {TIPOS.map(({ label, ponderacion, color }) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-lg px-4 py-2.5 border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', borderLeftColor: color, borderLeftWidth: '3px' }}
              >
                <div>
                  <p className="font-body text-base font-bold" style={{ color: 'var(--text)' }}>{label}</p>
                  <p className="font-body text-sm" style={{ color: 'var(--text-label)' }}>{ponderacion}</p>
                </div>
                <span className="font-heading text-lg font-bold" style={{ color }}>3</span>
              </div>
            ))}
            <div
              className="rounded-lg px-4 py-2.5 border text-center mt-2"
              style={{ backgroundColor: 'rgba(48,127,226,0.06)', borderColor: 'rgba(48,127,226,0.25)' }}
            >
              <p className="font-body text-sm" style={{ color: 'var(--text-label)' }}>
                6 Relevantes · 4 Neutrales · 2 Marginales
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
