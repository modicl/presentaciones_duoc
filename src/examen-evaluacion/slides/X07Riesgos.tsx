import SlideLayout from '../../slides/SlideLayout'

const RED = '#E53E3E'
const AMBER = '#F59E0B'

const RIESGOS_TECNICOS = [
  {
    titulo: 'Interoperabilidad HL7 FHIR',
    desc: 'El Hub de Interoperabilidad (M3) depende del estándar HL7 FHIR. La integración con sistemas externos no controlados por RedNorte requiere certificación CENS y acuerdos SLA con proveedores. Riesgo de retraso si el proceso de certificación no está iniciado al momento del desarrollo.',
    nivel: 'Alto',
  },
  {
    titulo: 'Escalabilidad de la plataforma',
    desc: '717.750 prestaciones anuales exigen una arquitectura con alta disponibilidad. Picos de demanda pueden saturar servicios cloud si no se dimensiona correctamente el autoescalado desde la fase de diseño.',
    nivel: 'Medio',
  },
  {
    titulo: 'Ciberseguridad de datos clínicos',
    desc: 'El sistema maneja fichas clínicas electrónicas. Cualquier brecha de seguridad constituye un incidente grave ante la Ley 21.663 (Protección de Datos Personales). Se requiere cifrado extremo a extremo y auditoría de accesos.',
    nivel: 'Alto',
  },
]

const RIESGOS_LEGALES = [
  {
    titulo: 'Ley 20.584 — Derechos del Paciente',
    desc: 'El Portal de Autogestión (M4) debe garantizar acceso del paciente a su ficha clínica en tiempo real. Incumplimiento expone a sanciones de la Superintendencia de Salud y posibles acciones judiciales por parte de usuarios.',
    nivel: 'Alto',
  },
  {
    titulo: 'Ley 19.628 — Protección de Datos Sensibles',
    desc: 'Los datos de salud son categoría sensible. El consentimiento informado del paciente debe ser explícito para cada uso de sus datos. La anonimización para analytics (M5) debe ser irreversible.',
    nivel: 'Medio',
  },
]

export default function X07Riesgos() {
  return (
    <SlideLayout
      label="Riesgos del Proyecto"
      title="Riesgos Técnicos y Legales Detectados"
      stat="5"
      statLabel="riesgos críticos identificados"
      statColor={RED}
      accentColor={RED}
    >
      <div className="space-y-3">
        <div>
          <p className="font-body text-sm font-bold uppercase tracking-wider mb-2" style={{ color: RED }}>
            Riesgos Técnicos
          </p>
          <div className="space-y-2">
            {RIESGOS_TECNICOS.map(({ titulo, desc, nivel }) => (
              <div
                key={titulo}
                className="rounded-lg px-4 py-2.5 border"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  borderLeftColor: nivel === 'Alto' ? RED : AMBER,
                  borderLeftWidth: '3px',
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-body text-sm font-bold" style={{ color: 'var(--text)' }}>{titulo}</p>
                  <span
                    className="font-body text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: nivel === 'Alto' ? `${RED}22` : `${AMBER}22`, color: nivel === 'Alto' ? RED : AMBER }}
                  >
                    {nivel}
                  </span>
                </div>
                <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-body text-sm font-bold uppercase tracking-wider mb-2" style={{ color: RED }}>
            Riesgos Legales
          </p>
          <div className="space-y-2">
            {RIESGOS_LEGALES.map(({ titulo, desc, nivel }) => (
              <div
                key={titulo}
                className="rounded-lg px-4 py-2.5 border"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  borderLeftColor: nivel === 'Alto' ? RED : AMBER,
                  borderLeftWidth: '3px',
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-body text-sm font-bold" style={{ color: 'var(--text)' }}>{titulo}</p>
                  <span
                    className="font-body text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: nivel === 'Alto' ? `${RED}22` : `${AMBER}22`, color: nivel === 'Alto' ? RED : AMBER }}
                  >
                    {nivel}
                  </span>
                </div>
                <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
