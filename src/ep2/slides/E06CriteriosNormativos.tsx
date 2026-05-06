import SlideLayout from '../../slides/SlideLayout'

const CRITERIOS = [
  {
    num: '01',
    ponderacion: 'Relevante',
    ley: 'Leyes 19.628 · 20.584 · 21.663',
    nombre: 'Cumplimiento normativo desde el diseño',
    requisito: 'Aplica a M1, M2 y M3, que procesan datos clínicos. Sin cumplimiento desde el día 1, el módulo expone al Servicio a sanciones y paralización. No es una capa adicional: debe estar en el núcleo del diseño.',
    verificacion: 'Revisión legal por hito: el Departamento Jurídico verifica el comportamiento funcional antes de autorizar el paso de fase.',
  },
  {
    num: '02',
    ponderacion: 'Relevante',
    ley: 'Ley 19.628 · Art. 12',
    nombre: 'Protección de datos: cifrado, RBAC y auditoría',
    requisito: 'Cifrado extremo a extremo, control de acceso por roles (RBAC) y logs de auditoría accesibles por la Contraloría desde el día 1. Aplica a todos los módulos que acceden a la ficha clínica del paciente.',
    verificacion: '100% de registros cifrados en tránsito y en reposo. Logs auditables en tiempo real por la CGR.',
  },
  {
    num: '03',
    ponderacion: 'Neutral',
    ley: 'Guía CENS 2021 · MINSAL',
    nombre: 'Certificación técnica CENS para operar en SIDRA',
    requisito: 'M3 (Hub de Interoperabilidad) debe superar la certificación formal del CENS antes de conectarse al ambiente productivo de SIDRA. Sin ella, el módulo —y todo el ecosistema que depende de él— no puede operar.',
    verificacion: 'Pentest de seguridad + aprobación de la ANCI antes del despliegue productivo de M3. Gestionado por el Director del Servicio.',
  },
]

export default function E06CriteriosNormativos() {
  return (
    <SlideLayout
      label="Factibilidad Normativa y Legal"
      title="Criterios Normativos"
      stat="3"
      statLabel="criterios normativos evaluados"
      accentColor="#E53E3E"
      statColor="#E53E3E"
    >
      <div className="space-y-3">
        {CRITERIOS.map(({ num, ponderacion, ley, nombre, requisito, verificacion }) => (
          <div
            key={num}
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
                className="shrink-0 font-body text-sm font-bold px-2 py-0.5 rounded self-start mt-0.5 whitespace-nowrap"
                style={{ backgroundColor: '#E53E3E22', color: '#E53E3E' }}
              >
                {ley}
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  <p className="font-body text-lg font-bold" style={{ color: 'var(--text)' }}>{nombre}</p>
                  <span className="font-body text-xs px-2 py-0.5 rounded-full shrink-0" style={{ backgroundColor: '#E53E3E22', color: '#E53E3E' }}>{ponderacion}</span>
                </div>
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
          <p className="font-body text-sm text-duoc-blue uppercase tracking-widest mb-1">Marco adicional — Ley 20.584</p>
          <p className="font-body text-base" style={{ color: 'var(--text-label)' }}>
            El módulo M4 (Portal del Paciente) es un requisito de cumplimiento de esta ley, no una funcionalidad opcional. Sin él, RedNorte incumple el derecho del paciente a conocer su posición en la lista de espera en cada día de operación.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
