import SlideLayout from '../../slides/SlideLayout'

const LEYES = [
  {
    ley: 'Ley 19.628',
    nombre: 'Protección de Datos Personales de Salud',
    requisito: 'Cifrado extremo a extremo, RBAC y auditoría completa de acceso a ficha clínica desde el día 1.',
    verificacion: '100% de registros cifrados en tránsito y reposo. Logs accesibles a Contraloría en tiempo real.',
  },
  {
    ley: 'Ley 20.584',
    nombre: 'Derechos y Deberes del Paciente',
    requisito: 'El Portal de Autogestión del Paciente es un requisito de cumplimiento legal, no una funcionalidad opcional.',
    verificacion: '100% de pacientes puede consultar su posición en lista y recibir notificaciones en tiempo real.',
  },
  {
    ley: 'Ley 21.663',
    nombre: 'Ciberseguridad en Infraestructura Crítica',
    requisito: 'Sistemas de salud pública clasificados como infraestructura crítica. Pentest obligatorio antes de producción.',
    verificacion: 'Aprobación formal de la Agencia Nacional de Ciberseguridad (ANCI) previo al despliegue.',
  },
]

export default function E06CriteriosNormativos() {
  return (
    <SlideLayout
      label="Factibilidad Normativa y Legal"
      title="Marcos Regulatorios"
      stat="4"
      statLabel="marcos legales vinculantes"
      accentColor="#E53E3E"
      statColor="#E53E3E"
    >
      <div className="space-y-3">
        {LEYES.map(({ ley, nombre, requisito, verificacion }) => (
          <div
            key={ley}
            className="rounded-lg px-5 py-3 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              borderLeftColor: '#E53E3E',
              borderLeftWidth: '3px',
            }}
          >
            <div className="flex gap-3">
              <span
                className="shrink-0 font-body text-sm font-bold px-2 py-0.5 rounded self-start mt-0.5"
                style={{ backgroundColor: '#E53E3E22', color: '#E53E3E' }}
              >
                {ley}
              </span>
              <div>
                <p className="font-body text-lg font-bold mb-0.5" style={{ color: 'var(--text)' }}>{nombre}</p>
                <p className="font-body text-base mb-1" style={{ color: 'var(--text-muted)' }}>{requisito}</p>
                <p className="font-body text-sm" style={{ color: 'var(--text-label)' }}>
                  ✓ Verificación: {verificacion}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div
          className="rounded-lg px-5 py-3 border"
          style={{ backgroundColor: 'rgba(48,127,226,0.06)', borderColor: 'rgba(48,127,226,0.25)' }}
        >
          <p className="font-body text-sm text-duoc-blue uppercase tracking-widest mb-1">4° marco — Normativa CENS / MINSAL (HL7 FHIR)</p>
          <p className="font-body text-base" style={{ color: 'var(--text-label)' }}>
            El Hub de Interoperabilidad debe certificarse ante el CENS antes de conectarse al ecosistema productivo de SIDRA. Condición <em>sine qua non</em> para integración nacional.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
