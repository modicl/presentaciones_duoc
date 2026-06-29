import SlideLayout from '../../slides/SlideLayout'

const ACCENT = '#307FE2'
const RED = '#E53E3E'
const AMBER = '#F59E0B'

const CARDS = [
  {
    titulo: 'RedNorte — Servicio Público de Salud',
    color: ACCENT,
    bullets: [
      '717.750 atenciones ambulatorias anuales',
      'Presupuesto fiscal anual de $1.600M',
      '16 nodos asistenciales: SAPU, CESFAM, COSAM, CECOSF',
      '1.200 funcionarios · Planilla anual $13.738M',
    ],
  },
  {
    titulo: 'Crisis Asistencial Detectada',
    color: RED,
    bullets: [
      'Más de 42.000 pacientes en lista de espera',
      '15% de inasistencia a citaciones médicas',
      'Pérdida del 12-18% de horas médicas disponibles',
      'Ineficiencia en uso del recurso médico y horas perdidas sin reasignación',
    ],
  },
  {
    titulo: 'Déficit de Interoperabilidad',
    color: AMBER,
    bullets: [
      'Sistemas departamentales sin integración (silos de información)',
      'Ausencia de estándar HL7 FHIR en la red asistencial',
      'Imposibilidad de priorizar pacientes por riesgo clínico',
      'Fragmentación de la ficha clínica entre establecimientos',
    ],
  },
]

export default function X02Contexto() {
  return (
    <SlideLayout
      label="Contexto del Proyecto"
      title="RedNorte y el Problema de Gestión Asistencial"
      stat=">42.000"
      statLabel="pacientes en lista de espera"
      statColor={RED}
      accentColor={RED}
    >
      <div className="space-y-2.5">
        {CARDS.map(({ titulo, color, bullets }) => (
          <div
            key={titulo}
            className="rounded-lg px-5 py-3 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              borderLeftColor: color,
              borderLeftWidth: '3px',
            }}
          >
            <p className="font-body text-sm font-bold mb-2" style={{ color }}>{titulo}</p>
            <ul className="space-y-0.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-2 font-body text-sm" style={{ color: 'var(--text-muted)' }}>
                  <span className="mt-0.5 shrink-0" style={{ color }}>›</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
