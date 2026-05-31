import SlideLayout from '../../slides/SlideLayout'

const ACCENT = '#10B981'

function InfoCard({ title, items, color = ACCENT }: { title: string; items: string[]; color?: string }) {
  return (
    <div
      className="rounded-lg p-4 border"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', borderLeftColor: color, borderLeftWidth: '3px' }}
    >
      <p className="font-body text-xs tracking-widest uppercase mb-2" style={{ color }}>{title}</p>
      <ul className="space-y-1.5">
        {items.map(item => (
          <li key={item} className="font-body text-base flex gap-2" style={{ color: 'var(--text-muted)' }}>
            <span className="mt-0.5 shrink-0" style={{ color }}>›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function F02Introduccion() {
  return (
    <SlideLayout
      label="Contexto del Proyecto"
      title="RedNorte y el Sistema EDGDA"
      stat="15%"
      statLabel="inasistencia a citaciones médicas"
      statColor={ACCENT}
      accentColor={ACCENT}
    >
      <div className="grid grid-cols-1 gap-3">
        <InfoCard
          title="RedNorte — Antecedentes"
          items={[
            '16 nodos asistenciales en la macrozona norte',
            '1.200 funcionarios diurnos · 75% de capacidad instalada utilizada',
            '717.750 atenciones/año · tarifa FONASA $18.000 CLP prom.',
          ]}
          color={ACCENT}
        />
        <InfoCard
          title="El Problema Financiero Central"
          items={[
            '15% de inasistencia → ~107.663 cupos clínicos inutilizados/año',
            'Margen operacional ajustado: masa salarial $13.737,6M vs ingresos ~$14.500M',
            'Necesidad de elegir alternativa con menor carga fija adicional',
          ]}
          color="#F59E0B"
        />
        <InfoCard
          title="EDGDA — Sistema Evaluado"
          items={[
            '5 módulos integrados bajo estándar HL7 FHIR',
            '3 alternativas: Mixta ($1.350M), Inhouse ($1.320M), Low-Code ($1.330M)',
            'Evaluación a 5 años con tasa social de descuento 5,5% (MIDESO 2024)',
          ]}
          color="#6366F1"
        />
      </div>
    </SlideLayout>
  )
}
