import SlideLayout from './SlideLayout'

const CRITICAL_FORCES = [
  {
    force: 'Poder negociador — Proveedores',
    level: 'Muy Alto',
    color: '#E53E3E',
    note: 'Sindicatos FENATS/CONFUSAM · Legacy IT con control de APIs · vendor lock-in Cloud.',
    implication: 'El proyecto debe diseñarse con los actores, no contra ellos.',
  },
  {
    force: 'Rivalidad por talento especializado',
    level: 'Muy Alto',
    color: '#E53E3E',
    note: '"Brain drain" médico y TI hacia la minería · competencia por fondos MINSAL.',
    implication: 'Riesgo de perder equipo clave durante la implementación.',
  },
]

const OTHER_FORCES = [
  { force: 'Poder negociador — Pacientes', level: 'Bajo', color: '#43B02A' },
  { force: 'Amenaza de nuevos competidores', level: 'Bajo', color: '#43B02A' },
  { force: 'Amenaza de sustitutos', level: 'Media-Alta', color: '#FFB800' },
]

export default function Slide04Porter() {
  return (
    <SlideLayout
      label="Análisis del Microentorno"
      title="Modelo de Porter — Riesgos Críticos"
      stat="2"
      statLabel='fuerzas en nivel "Muy Alto"'
      statColor="#E53E3E"
    >
      <div className="space-y-3">
        {CRITICAL_FORCES.map(({ force, level, color, note, implication }) => (
          <div
            key={force}
            className="rounded-lg px-5 py-4 border"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', borderLeftColor: color, borderLeftWidth: '3px' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className="inline-block font-body text-sm font-bold px-3 py-1 rounded-full shrink-0"
                style={{ backgroundColor: `${color}22`, color }}
              >
                {level}
              </span>
              <p className="font-body text-lg font-bold" style={{ color: 'var(--text)' }}>{force}</p>
            </div>
            <p className="font-body text-lg mb-2" style={{ color: 'var(--text-label)' }}>{note}</p>
            <p className="font-body text-lg font-bold" style={{ color }}>{implication}</p>
          </div>
        ))}

        <div
          className="rounded-lg px-5 py-3 border"
          style={{ backgroundColor: 'rgba(48,127,226,0.05)', borderColor: 'rgba(48,127,226,0.2)' }}
        >
          <p className="font-body text-xs text-duoc-blue uppercase tracking-widest mb-2">Otras 3 fuerzas — nivel bajo o medio</p>
          <div className="flex gap-4 flex-wrap">
            {OTHER_FORCES.map(({ force, level, color }) => (
              <span
                key={force}
                className="font-body text-sm px-3 py-1 rounded-full"
                style={{ backgroundColor: `${color}18`, color }}
              >
                {force} — {level}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
