import SlideLayout from '../../slides/SlideLayout'

function ProblemCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      className="rounded-lg p-4 border"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <p className="font-body text-sm tracking-widest uppercase mb-3" style={{ color: '#E53E3E' }}>{title}</p>
      <ul className="space-y-1.5">
        {items.map(item => (
          <li key={item} className="font-body text-lg flex gap-2" style={{ color: 'var(--text-muted)' }}>
            <span className="mt-0.5 shrink-0" style={{ color: '#E53E3E' }}>›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function E02Problema() {
  return (
    <SlideLayout
      label="Necesidad del Cliente"
      title="Descripción del Problema"
      stat=">42.000"
      statLabel="pacientes en lista de espera"
      statColor="#E53E3E"
      accentColor="#E53E3E"
    >
      <div className="grid grid-cols-1 gap-4">
        <ProblemCard
          title="Crisis Asistencial"
          items={[
            'Tiempos de respuesta superiores a 18 meses',
            '12–18% de ineficiencia operacional por no-show y errores de registro',
            '15% de inasistencia promedio a citaciones médicas',
          ]}
        />
        <ProblemCard
          title="Causas Sistémicas"
          items={[
            'Dispersión geográfica extrema — Desierto de Atacama',
            'Sistemas SIDRA operando en silos sin interoperabilidad',
            'Migración transfronteriza y población flotante minera',
          ]}
        />
        <ProblemCard
          title="Necesidad del Sistema EDGDA"
          items={[
            'Gestión digital integrada de demanda y capacidad asistencial',
            'Interoperabilidad con SIDRA bajo estándar HL7 FHIR',
            'Transparencia activa para pacientes y Contraloría',
          ]}
        />
      </div>
    </SlideLayout>
  )
}
