// Indicador 6 — Escalabilidad del sistema de microservicios

function EscalCard({
  title,
  rnf,
  items,
  color,
}: {
  title: string
  rnf: string
  items: string[]
  color: string
}) {
  return (
    <div
      className="rounded-lg p-4 border"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: color + '44' }}
    >
      <div className="flex items-center gap-2 mb-3">
        <p className="font-body font-bold text-base" style={{ color: 'var(--text)' }}>{title}</p>
        <span
          className="font-body text-xs px-1.5 py-0.5 rounded"
          style={{ backgroundColor: color + '22', color }}
        >
          {rnf}
        </span>
      </div>
      <ul className="space-y-1.5">
        {items.map(item => (
          <li key={item} className="font-body text-base flex gap-2" style={{ color: 'var(--text-muted)' }}>
            <span className="shrink-0" style={{ color }}>›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function P08Escalabilidad() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-10 py-10 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
          Indicador 6 — Escalabilidad
        </p>
        <h2
          className="font-heading text-4xl font-bold leading-tight mb-5"
          style={{ color: 'var(--text)' }}
        >
          Crecimiento y Adaptación
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <EscalCard
            title="Escalado horizontal en contenedores"
            rnf="RNF-2.1"
            color="#307FE2"
            items={[
              'ECS EC2 con Auto Scaling según métricas de CPU/memoria',
              'Cada microservicio escala de forma independiente',
              'Picos de cierre de semestre sin afectar otros servicios',
            ]}
          />
          <EscalCard
            title="Servicios Stateless — condición necesaria"
            rnf="RNF-2.2"
            color="#43B02A"
            items={[
              'JWT valida identidad en cada request (sin sesión en memoria)',
              'Persistencia delegada a RDS + S3 — no hay estado que sincronizar',
              'Réplicas adicionales sin coordinación entre instancias',
            ]}
          />
          <EscalCard
            title="Escalado del Agente IA (Cloud Run)"
            rnf="Serverless"
            color="#1ABC9C"
            items={[
              'Escala a 0 fuera del horario escolar — costo ≈ $0',
              'Múltiples docentes simultáneos → invocaciones Lambda paralelas',
              'Sin servidor dedicado activo en períodos no lectivos',
            ]}
          />
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-4 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <p className="font-body text-sm uppercase tracking-widest text-center font-bold" style={{ color: 'var(--text-dim)' }}>
          Alta disponibilidad
        </p>
        {/* Zonas de disponibilidad */}
        <div
          className="w-full rounded-lg p-4 border"
          style={{ borderColor: '#307FE244', backgroundColor: '#307FE210' }}
        >
          <p className="font-body text-sm uppercase tracking-widest mb-3 text-center" style={{ color: '#307FE2' }}>
            2 Zonas de Disponibilidad
          </p>
          <div className="grid grid-cols-2 gap-3">
            {['Zona A', 'Zona B'].map(z => (
              <div
                key={z}
                className="rounded p-3 border text-center"
                style={{ borderColor: '#307FE233', backgroundColor: '#307FE215' }}
              >
                <p className="font-body text-sm font-bold text-duoc-blue">{z}</p>
                <p className="font-body text-sm mt-1.5" style={{ color: 'var(--text-muted)' }}>
                  ECS · RDS<br />réplica cruzada
                </p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-center mt-3" style={{ color: 'var(--text-muted)' }}>
            Load Balancer redistribuye ante fallo de zona
          </p>
        </div>

        <div
          className="w-full rounded-lg p-4 border text-center"
          style={{ borderColor: '#43B02A44', backgroundColor: '#43B02A10' }}
        >
          <p className="font-heading text-4xl font-bold" style={{ color: '#43B02A' }}>3×</p>
          <p className="font-body text-base mt-1" style={{ color: 'var(--text-muted)' }}>
            microservicios independientes<br />escalan sin acoplamiento
          </p>
        </div>
      </div>
    </div>
  )
}
