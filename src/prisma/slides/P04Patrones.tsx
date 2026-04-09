// Indicador 5 — Expone diagramas de combinaciones de patrones de arquitectura

function PatronCard({
  number,
  name,
  rnf,
  desc,
  color,
}: {
  number: string
  name: string
  rnf: string
  desc: string
  color: string
}) {
  return (
    <div
      className="rounded-lg p-3 border flex gap-3 items-start"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <div
        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-base"
        style={{ backgroundColor: color + '22', color, border: `1px solid ${color}55` }}
      >
        {number}
      </div>
      <div className="min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <p className="font-body font-bold text-base" style={{ color: 'var(--text)' }}>{name}</p>
          <span
            className="font-body text-xs px-1.5 py-0.5 rounded"
            style={{ backgroundColor: color + '18', color }}
          >
            {rnf}
          </span>
        </div>
        <p className="font-body text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>{desc}</p>
      </div>
    </div>
  )
}

export default function P04Patrones() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-10 py-10 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
          Indicador 5 — Patrones de Arquitectura
        </p>
        <h2
          className="font-heading text-4xl font-bold leading-tight mb-2"
          style={{ color: 'var(--text)' }}
        >
          Arquitectura de Microservicios
        </h2>
        <p className="font-body text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
          Estilo arquitectónico base + 4 patrones combinados para P.R.I.S.M.A.
        </p>
        <div className="flex flex-col gap-2.5">
          <PatronCard
            number="1"
            color="#307FE2"
            name="Event-Driven Architecture"
            rnf="RNF-4.1"
            desc="Desacopla la generación agéntica (30 s–varios min) de la navegación. S3 → Lambda → Cloud Run sin conexión síncrona."
          />
          <PatronCard
            number="2"
            color="#FFB800"
            name="Database per Service"
            rnf="RNF-1.2"
            desc="Tres instancias RDS independientes. Fallo en BD de Perfil Alumno no afecta autenticación ni generación de material."
          />
          <PatronCard
            number="3"
            color="#E24030"
            name="Stateless Services"
            rnf="RNF-2.2"
            desc="Microservicios NestJS sin estado en memoria. JWT valida identidad por request. ECS escala réplicas sin sincronización."
          />
          <PatronCard
            number="4"
            color="#9B59B6"
            name="Circuit Breaker"
            rnf="RNF-1.1"
            desc="3 fallos en 5 min abren el circuito. Lambda responde con error controlado sin acumular timeouts de 270 s. Recuperación automática cada 10 min."
          />
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-3 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        {/* Arquitectura base */}
        <div
          className="w-full rounded-lg p-3 border text-center mb-2"
          style={{ borderColor: '#307FE266', backgroundColor: '#307FE218' }}
        >
          <p className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: '#307FE2' }}>Estilo base</p>
          <p className="font-heading text-lg font-bold" style={{ color: 'var(--text)' }}>Microservicios</p>
          <p className="font-body text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Usuarios · Form/Docs · Perfil Alumno</p>
        </div>

        <p className="font-body text-xs uppercase tracking-widest text-center" style={{ color: 'var(--text-dim)' }}>
          4 patrones aplicados
        </p>
        {[
          { label: 'Event-Driven', color: '#307FE2' },
          { label: 'DB per Service', color: '#FFB800' },
          { label: 'Stateless Services', color: '#E24030' },
          { label: 'Circuit Breaker', color: '#9B59B6' },
        ].map(({ label, color }) => (
          <div
            key={label}
            className="w-full rounded px-3 py-2 font-body text-xs font-bold tracking-wide text-center"
            style={{ backgroundColor: color + '22', color, border: `1px solid ${color}44` }}
          >
            {label}
          </div>
        ))}
        <p className="font-body text-xs text-center mt-2 px-2" style={{ color: 'var(--text-label)' }}>
          Resiliencia · Escalabilidad · Eficiencia Operativa
        </p>
      </div>
    </div>
  )
}
