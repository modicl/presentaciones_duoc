import SlideLayout from '../../slides/SlideLayout'

const FASES = [
  {
    fase: 'Fase 1',
    modulos: 'M1 + M2',
    color: '#43B02A',
    titulo: 'Motor de Priorización + Gestor de Reasignación',
    desc: 'Módulos de mayor viabilidad (74 y 73/84) y mayor impacto operativo inmediato. Generan resultados medibles antes de comprometer presupuesto en los módulos de mayor riesgo.',
  },
  {
    fase: 'Fase 2a',
    modulos: 'M4',
    color: '#307FE2',
    titulo: 'Portal de Autogestión del Paciente',
    desc: 'Primera entrega de Fase 2. Mandato legal de la Ley 20.584 — cumplimiento obligatorio. Menor costo de desarrollo y mayor impacto ciudadano visible.',
  },
  {
    fase: 'Fase 2b',
    modulos: 'M3',
    color: '#E53E3E',
    titulo: 'Hub de Interoperabilidad HL7 FHIR',
    desc: 'Condicionado a que el SLA con el proveedor SIDRA esté firmado y el proceso CENS iniciado. El puntaje bajo (59/84) no indica inviabilidad: indica precondiciones contractuales no técnicas.',
  },
  {
    fase: 'Fase 2c',
    modulos: 'M5',
    color: '#FFB800',
    titulo: 'Analytics de Capacidad Asistencial',
    desc: 'Última entrega. Su valor estratégico depende de que M1 y M2 estén generando datos de calidad. Sin esa base, cualquier inversión en analytics es prematura.',
  },
]

export default function E09Conclusiones() {
  return (
    <SlideLayout
      label="Conclusiones"
      title="Secuencia de Implementación"
      stat="M1·M2"
      statLabel="Prioridad Fase 1 · 147 pts combinados"
      statColor="#43B02A"
      accentColor="#43B02A"
    >
      <div className="space-y-2.5 mb-4">
        {FASES.map(({ fase, modulos, color, titulo, desc }) => (
          <div
            key={fase}
            className="flex gap-3 rounded-lg px-4 py-3 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              borderLeftColor: color,
              borderLeftWidth: '3px',
            }}
          >
            <div className="shrink-0 text-center w-16">
              <p className="font-body text-xs font-bold uppercase" style={{ color }}>{fase}</p>
              <p className="font-heading text-base font-bold" style={{ color }}>{modulos}</p>
            </div>
            <div className="min-w-0">
              <p className="font-body text-base font-bold mb-0.5" style={{ color: 'var(--text)' }}>{titulo}</p>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-lg px-6 py-4 border"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'rgba(67,176,42,0.3)' }}
      >
        <p className="font-heading text-base font-bold leading-relaxed italic" style={{ color: 'var(--text-muted)' }}>
          "El ecosistema EDGDA es técnicamente factible, normativamente urgente y socialmente necesario.{' '}
          <span className="not-italic" style={{ color: '#43B02A' }}>La evaluación módulo a módulo permite gestionar el riesgo de forma transparente</span>{' '}
          y priorizar la inversión donde el impacto es mayor."
        </p>
      </div>
    </SlideLayout>
  )
}
