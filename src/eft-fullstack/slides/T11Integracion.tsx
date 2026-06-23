// Indicador 5 — Integración backend ↔ frontend ↔ base de datos

function Store({ title, sub, color }: { title: string; sub: string; color: string }) {
  return (
    <div className="rounded-md px-3 py-2 border text-center" style={{ backgroundColor: color + '18', borderColor: color + '55' }}>
      <p className="font-body font-bold text-xs" style={{ color }}>{title}</p>
      <p className="font-body text-[10px]" style={{ color: 'var(--text-muted)' }}>{sub}</p>
    </div>
  )
}

export default function T11Integracion() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-2">
          Indicador 5 — Integración
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
          Cohesión entre capas
        </h2>
        <div className="flex flex-col gap-2.5 max-w-xl">
          {[
            ['#FFB800', 'SPA → BFF (3010)', 'MicroserviceClient arma URL + propaga el JWT a cada microservicio. El front nunca llama directo.'],
            ['#307FE2', 'Agregación en el BFF', '/api/dashboard/me consume ms-users + ms-perfil-alumno + ms-docs en una sola respuesta.'],
            ['#1ABC9C', 'Microservicios → datos', 'PostgreSQL (Prisma) para lo relacional, DynamoDB para sesiones IA y S3 para objetos.'],
            ['#E24030', 'Mapeo de errores', 'El BFF traduce 502/403 internos a respuestas controladas (CP-34, CP-35).'],
          ].map(([color, t, d]) => (
            <div key={t} className="rounded-lg px-3 py-2 border flex gap-3 items-start" style={{ backgroundColor: color + '0E', borderColor: color + '38' }}>
              <span className="mt-1 shrink-0" style={{ color }}>›</span>
              <div className="min-w-0">
                <p className="font-body font-bold text-sm" style={{ color: 'var(--text)' }}>{t}</p>
                <p className="font-body text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-3 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <p className="font-body text-xs uppercase tracking-widest self-start" style={{ color: 'var(--text-dim)' }}>
          Crear un job: coordinación de 3 almacenes
        </p>
        <Store title="1 · PostgreSQL" sub="inserta registro del job (estado pending)" color="#1ABC9C" />
        <span style={{ color: 'var(--text-dim)' }}>↓</span>
        <Store title="2 · DynamoDB" sub="crea sesión IA (escritura condicional, TTL)" color="#F39C12" />
        <span style={{ color: 'var(--text-dim)' }}>↓</span>
        <Store title="3 · S3" sub="sube archivos (paciObjectKey, planningObjectKey)" color="#F39C12" />
        <div className="mt-2 rounded-lg px-3 py-2 border w-full" style={{ backgroundColor: '#E2403010', borderColor: '#E2403040' }}>
          <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
            Si algún paso falla, el job queda en estado <span className="font-mono" style={{ color: '#E24030' }}>error</span> con mensaje → trazabilidad y rollback lógico.
          </p>
        </div>
      </div>
    </div>
  )
}
