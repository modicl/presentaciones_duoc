import SlideLayout from './SlideLayout'

const MODULES = [
  { num: '01', name: 'Motor de Priorización Biopsicosocial',  desc: 'Scoring auditable: severidad clínica + tiempo de espera + vulnerabilidad social.' },
  { num: '02', name: 'Gestor de Reasignación Multicanal',     desc: 'Reasignación automática con gateway híbrido SMS/WhatsApp/IVR para zonas remotas.' },
  { num: '03', name: 'Hub de Interoperabilidad HL7 FHIR',    desc: 'REST APIs bidireccionales con SIDRA para sincronización de 42.000 registros.' },
  { num: '04', name: 'Portal de Transparencia y Autogestión', desc: 'Interfaz web/móvil con consulta en tiempo real. Cumplimiento Ley 20.584.' },
  { num: '05', name: 'Analytics de Capacidad Asistencial (BI)', desc: 'Dashboards en tiempo real con SLA por especialidad para los 16 nodos de la red.' },
]

export default function Slide07Producto() {
  return (
    <SlideLayout
      label="Solución"
      title="Arquitectura del Producto — 5 Módulos"
      stat="5"
      statLabel="módulos del sistema"
    >
      <div className="space-y-3">
        {MODULES.map(({ num, name, desc }) => (
          <div
            key={num}
            className="flex gap-4 rounded-lg px-5 py-4 border"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <span className="shrink-0 font-heading text-2xl font-bold text-duoc-blue opacity-40 w-9">{num}</span>
            <div>
              <p className="font-body text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>{name}</p>
              <p className="font-body text-lg" style={{ color: 'var(--text-muted)' }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
