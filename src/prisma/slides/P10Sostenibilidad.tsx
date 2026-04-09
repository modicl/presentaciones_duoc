// Indicador 7 — Sostenibilidad del sistema a largo plazo

function SustCard({
  icon,
  title,
  subtitle,
  items,
  color,
}: {
  icon: string
  title: string
  subtitle: string
  items: string[]
  color: string
}) {
  return (
    <div
      className="rounded-xl p-5 border flex gap-4"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: color + '55' }}
    >
      {/* Icon */}
      <div
        className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
        style={{ backgroundColor: color + '20', border: `1px solid ${color}44` }}
      >
        {icon}
      </div>
      {/* Content */}
      <div className="min-w-0">
        <p className="font-body text-xs uppercase tracking-widest mb-0.5" style={{ color }}>{title}</p>
        <p className="font-body font-bold text-base mb-2" style={{ color: 'var(--text)' }}>{subtitle}</p>
        <ul className="space-y-1">
          {items.map(item => (
            <li key={item} className="font-body text-sm flex gap-2" style={{ color: 'var(--text-muted)' }}>
              <span className="shrink-0" style={{ color }}>›</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function P10Sostenibilidad() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-green" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-10 py-10 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-green uppercase mb-3">
          Indicador 7 — Sostenibilidad a Largo Plazo
        </p>
        <h2
          className="font-heading text-4xl font-bold leading-tight mb-5"
          style={{ color: 'var(--text)' }}
        >
          Diseño Sostenible
        </h2>
        <div className="flex flex-col gap-3">
          <SustCard
            icon="🌱"
            title="Green Computing"
            subtitle="Escalado a cero bajo demanda"
            color="#43B02A"
            items={[
              'Lambda y Cloud Run sin costo fuera del horario escolar',
              'CPU/RAM asignados solo según la carga real de cada servicio',
            ]}
          />
          <SustCard
            icon="🔧"
            title="Mantenibilidad Técnica"
            subtitle="Componentes independientes y reemplazables"
            color="#307FE2"
            items={[
              'Database per Service: migrar una BD sin tocar las demás',
              'CI/CD + SonarQube: bloquea deuda técnica desde el origen',
            ]}
          />
          <SustCard
            icon="🛡️"
            title="Resiliencia Operativa"
            subtitle="El sistema sobrevive a fallos externos"
            color="#9B59B6"
            items={[
              'Circuit Breaker: proveedor LLM cae → sistema responde con error controlado',
              '2 zonas de disponibilidad: fallo de datacenter → tráfico redirigido',
            ]}
          />
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-5 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        {/* Stat */}
        <div
          className="w-full rounded-xl p-5 border text-center"
          style={{ borderColor: '#43B02A55', backgroundColor: '#43B02A12' }}
        >
          <span style={{ fontSize: 40 }}>⚡</span>
          <p className="font-heading text-5xl font-bold mt-2" style={{ color: '#43B02A' }}>≈ $0</p>
          <p className="font-body text-base mt-1" style={{ color: 'var(--text-muted)' }}>
            costo fuera del<br />horario escolar
          </p>
        </div>

        {/* Visión de futuro */}
        <div
          className="w-full rounded-xl p-4 border"
          style={{ borderColor: '#307FE255', backgroundColor: '#307FE210' }}
        >
          <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: '#307FE2' }}>
            🚀 Visión de futuro
          </p>
          <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
            Base técnica para extender la plataforma a otros instrumentos pedagógicos chilenos más allá del PACI
          </p>
        </div>

        {/* Equipo */}
        <div
          className="w-full rounded-xl p-4 border"
          style={{ borderColor: '#9B59B655', backgroundColor: '#9B59B610' }}
        >
          <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: '#9B59B6' }}>
            👥 Equipo
          </p>
          <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
            SonarQube garantiza que nuevos integrantes no introduzcan regresiones ni vulnerabilidades
          </p>
        </div>
      </div>
    </div>
  )
}
