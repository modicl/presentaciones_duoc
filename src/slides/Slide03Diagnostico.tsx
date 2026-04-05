import SlideLayout from './SlideLayout'

function Pilar({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div
      className="rounded-lg p-4 flex gap-4 border"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <div className="shrink-0 w-10 h-10 rounded-full bg-duoc-blue flex items-center justify-center font-heading font-bold text-white text-lg">
        {num}
      </div>
      <div>
        <h3 className="font-heading text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>{title}</h3>
        <p className="font-body text-lg leading-snug" style={{ color: 'var(--text-muted)' }}>{desc}</p>
      </div>
    </div>
  )
}

export default function Slide03Diagnostico() {
  return (
    <SlideLayout
      label="Diagnóstico"
      title="Problemática y Alcance"
      stat="58%"
      statLabel="inasistencias por fallas de notificación"
    >
      <div className="space-y-3">
        <Pilar
          num="1"
          title="Fragmentación de Datos"
          desc="Sistemas SIDRA en silos — duplicación de registros y visión distorsionada de la lista de espera real."
        />
        <Pilar
          num="2"
          title="Capacidad Ociosa No Gestionada"
          desc="Pérdida de hasta el 18% de horas médicas sin motor de reasignación en tiempo real."
        />
        <Pilar
          num="3"
          title="Brecha de Comunicación"
          desc="Baja penetración digital en zonas rurales y falta de actualización de datos de pacientes en tránsito."
        />

      </div>
    </SlideLayout>
  )
}
