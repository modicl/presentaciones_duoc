import SlideLayout from '../../slides/SlideLayout'

const ACCENT = '#307FE2'
const GREEN = '#43B02A'

const ROLES = [
  { cargo: 'Dirección del Servicio', reporta: 'MINSAL', resp: 'Respaldo financiero y priorización estratégica' },
  { cargo: 'Jefe de Proyecto / Arquitecto', reporta: 'Dirección', resp: 'Arquitectura técnica y gobernanza del ecosistema' },
  { cargo: 'Líder de Desarrollo', reporta: 'Jefe Proyecto', resp: 'Construcción de módulos M1, M2, M4 (Java/Spring, React)' },
  { cargo: 'Especialista Integración SIDRA', reporta: 'Líder Desarrollo', resp: 'Mapeo HL7 FHIR y conexión con sistemas externos' },
  { cargo: 'Analista QA y Seguridad', reporta: 'Jefe Proyecto', resp: 'Pruebas funcionales, cifrado y auditoría de accesos' },
  { cargo: 'Encargado Gestión del Cambio', reporta: 'Jefe Proyecto', resp: 'Capacitación SOME y adopción por usuarios clínicos' },
]

const DOTACION = [
  ['Médicos', '48'],
  ['Odontólogos', '48'],
  ['Enfermeros/as', '360'],
  ['TENS', '360'],
  ['Kinesiólogos', '48'],
  ['Admin / Aux / TI', '240'],
]

export default function X06Organizacion() {
  return (
    <SlideLayout
      label="Estructura del Proyecto"
      title="Organización y Dotación EDGDA"
      stat="1.200"
      statLabel="funcionarios · $13.738M costo anual"
      statColor={ACCENT}
      accentColor={ACCENT}
    >
      <div className="space-y-3">
        <p className="font-body text-xs uppercase tracking-wider" style={{ color: 'var(--text-label)' }}>
          Equipo del Proyecto — 6 roles clave
        </p>
        <div className="space-y-1.5">
          {ROLES.map(({ cargo, reporta, resp }) => (
            <div
              key={cargo}
              className="flex items-center gap-2 rounded-lg px-3 py-2 border"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
                borderLeftColor: ACCENT,
                borderLeftWidth: '3px',
              }}
            >
              <div className="flex-1 min-w-0">
                <p className="font-body text-sm font-bold" style={{ color: 'var(--text)' }}>{cargo}</p>
                <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>{resp}</p>
              </div>
              <span
                className="font-body text-xs px-2 py-0.5 rounded-full shrink-0"
                style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
              >
                → {reporta}
              </span>
            </div>
          ))}
        </div>

        <p className="font-body text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--text-label)' }}>
          Dotación — RedNorte (turno diurno)
        </p>
        <div className="grid grid-cols-3 gap-1.5">
          {DOTACION.map(([cargo, n]) => (
            <div
              key={cargo}
              className="rounded-lg px-3 py-1.5 border text-center"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <p className="font-heading text-lg font-bold" style={{ color: GREEN }}>{n}</p>
              <p className="font-body text-xs" style={{ color: 'var(--text-dim)' }}>{cargo}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}
