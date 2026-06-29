import SlideLayout from '../../slides/SlideLayout'

const ACCENT = '#307FE2'
const GREEN = '#43B02A'
const RED = '#E53E3E'
const AMBER = '#F59E0B'

const FODA = [
  {
    categoria: 'Fortalezas',
    color: GREEN,
    items: [
      'Ingresos estructurales FONASA + presupuesto fiscal $1.600M/año',
      'Posición de prestador único de salud pública en la zona norte',
      'Infraestructura desplegada en 16 nodos asistenciales',
    ],
  },
  {
    categoria: 'Debilidades',
    color: RED,
    items: [
      'Pérdida del 12-18% de horas médicas por inasistencia',
      'Sistemas de información fragmentados en silos departamentales',
      'Margen operacional ajustado con nula holgura presupuestaria',
    ],
  },
  {
    categoria: 'Oportunidades',
    color: ACCENT,
    items: [
      'Fondos MINSAL disponibles para transformación digital en salud',
      'Recuperación de capacidad ociosa mediante reasignación automática',
      'Estándares de interoperabilidad HL7 FHIR como habilitante nacional',
    ],
  },
  {
    categoria: 'Amenazas',
    color: AMBER,
    items: [
      'Fuga de especialistas al sector privado (minería, clínicas)',
      'Financiamiento fiscal anual sin garantía de continuidad plurianual',
      'Riesgo de rechazo gremial a nuevos sistemas de gestión clínica',
    ],
  },
]

export default function X03FODA() {
  return (
    <SlideLayout
      label="Análisis Estratégico"
      title="Matriz FODA del Proyecto EDGDA"
      stat="FODA"
      statLabel="Fortalezas · Debilidades · Oportunidades · Amenazas"
      statColor={ACCENT}
      accentColor={ACCENT}
    >
      <div className="grid grid-cols-2 gap-2.5">
        {FODA.map(({ categoria, color, items }) => (
          <div
            key={categoria}
            className="rounded-lg px-4 py-3 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              borderLeftColor: color,
              borderLeftWidth: '3px',
            }}
          >
            <p className="font-body text-sm font-bold mb-2" style={{ color }}>{categoria}</p>
            <ul className="space-y-1">
              {items.map((item, i) => (
                <li key={i} className="flex gap-1.5 font-body text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  <span className="mt-0.5 shrink-0" style={{ color }}>›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
