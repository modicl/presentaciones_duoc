// Indicadores 1 y 12 — Arquitectura de microservicios + diagrama de despliegue

function Node({ title, sub, color }: { title: string; sub?: string; color: string }) {
  return (
    <div
      className="rounded-md px-2.5 py-1.5 border text-center min-w-0"
      style={{ backgroundColor: color + '18', borderColor: color + '55' }}
    >
      <p className="font-body font-bold text-[11px] leading-tight truncate" style={{ color }}>{title}</p>
      {sub && <p className="font-body text-[9px] leading-tight" style={{ color: 'var(--text-muted)' }}>{sub}</p>}
    </div>
  )
}

const POINTS = [
  ['Punto único de entrada', 'La SPA React (Vite, 3002) solo habla con bff-prisma (3010): proxy, agregación y mapeo de errores 502/403.'],
  ['Seis backends NestJS', 'ms-users (3001), perfil-alumno (3005), docs (3000), adminpanel (3004) y el BFF; comunicación HTTP con JWT propagado.'],
  ['Motor IA desacoplado', 'prisma_workflow (Python/Gemini+ADK) orquesta DynamoDB + S3; no conoce el dominio relacional.'],
  ['database-per-service', 'Una instancia PostgreSQL (Neon) con esquemas aislados: users · public · jobs. Cada servicio es dueño de sus datos.'],
]

export default function T03Arquitectura() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[2] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
          Indicadores 1 y 12 — Arquitectura
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
          Seis microservicios, una puerta
        </h2>
        <ul className="space-y-3 max-w-md">
          {POINTS.map(([t, d]) => (
            <li key={t} className="flex gap-3 font-body" style={{ color: 'var(--text-muted)' }}>
              <span className="mt-1 shrink-0 text-duoc-blue">›</span>
              <span className="text-sm">
                <span className="font-bold" style={{ color: 'var(--text)' }}>{t}.</span> {d}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right column — diagrama */}
      <div
        className="flex flex-col justify-center items-center flex-[3] border-l px-6 py-6"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <p className="font-body text-xs uppercase tracking-widest mb-4 shrink-0" style={{ color: 'var(--text-dim)' }}>
          Vista de despliegue
        </p>

        <div className="w-full max-w-md flex flex-col items-center gap-2">
          {/* SPA */}
          <Node title="SPA React · prisma-front" sub="Vite · puerto 3002" color="#307FE2" />
          <span style={{ color: 'var(--text-dim)' }}>↓ HTTP + JWT</span>

          {/* BFF */}
          <div className="w-2/3"><Node title="bff-prisma (3010)" sub="Backend-for-Frontend · /api/dashboard/me" color="#FFB800" /></div>
          <span style={{ color: 'var(--text-dim)' }}>↓ agrega + propaga JWT</span>

          {/* Microservicios */}
          <div className="grid grid-cols-2 gap-1.5 w-full">
            <Node title="ms-users (3001)" sub="esquema users" color="#E24030" />
            <Node title="perfil-alumno (3005)" sub="esquema public" color="#E24030" />
            <Node title="ms-docs (3000)" sub="esquema jobs" color="#E24030" />
            <Node title="adminpanel (3004)" sub="dashboard admin" color="#E24030" />
          </div>
          <span style={{ color: 'var(--text-dim)' }}>↓</span>

          {/* Motor IA */}
          <div className="w-3/4"><Node title="prisma_workflow · Motor IA" sub="Python · Gemini + Google ADK" color="#9B59B6" /></div>
          <span style={{ color: 'var(--text-dim)' }}>↓ persistencia políglota</span>

          {/* Persistencia */}
          <div className="grid grid-cols-2 gap-1.5 w-full">
            <Node title="PostgreSQL · Neon" sub="users · public · jobs" color="#1ABC9C" />
            <Node title="Supabase Auth" sub="JWT · identidad" color="#1ABC9C" />
            <Node title="Amazon DynamoDB" sub="sesiones IA · TTL 7d" color="#F39C12" />
            <Node title="Amazon S3" sub="PACI · DOCX · PDF" color="#F39C12" />
          </div>
        </div>
      </div>
    </div>
  )
}
