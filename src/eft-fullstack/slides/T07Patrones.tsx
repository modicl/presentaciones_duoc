// Indicadores 3 y 8 — Patrones de diseño en frontend y backend

function PatternCard({ name, tag, desc, example, color }: { name: string; tag: string; desc: string; example: string; color: string }) {
  return (
    <div className="rounded-lg px-3 py-2.5 border" style={{ backgroundColor: color + '0E', borderColor: color + '38' }}>
      <div className="flex items-center gap-2 mb-1">
        <p className="font-body font-bold text-sm" style={{ color: 'var(--text)' }}>{name}</p>
        <span className="font-body text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: color + '22', color }}>{tag}</span>
      </div>
      <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>{desc}</p>
      <p className="font-mono text-[11px] mt-1" style={{ color }}>{example}</p>
    </div>
  )
}

export default function T07Patrones() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      <div className="flex flex-col justify-center pl-16 pr-16 py-8 w-full min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-2">
          Indicadores 3 y 8 — Patrones de diseño
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
          Patrones que sostienen el código
        </h2>

        <div className="grid grid-cols-3 gap-2.5">
          <PatternCard color="#FFB800" name="Backend-for-Frontend" tag="BFF" desc="Agrega múltiples microservicios en una respuesta y mapea errores 502 a respuestas controladas."
            example="/api/dashboard/me" />
          <PatternCard color="#307FE2" name="Repository tipado" tag="DAO" desc="Prisma Client actúa como repositorio; consultas tipadas con paginación."
            example="prismaService.job.findMany()" />
          <PatternCard color="#9B59B6" name="Dependency Injection" tag="DI" desc="NestJS inyecta PrismaService por constructor con ciclo de vida gestionado."
            example="@Injectable() PrismaService" />
          <PatternCard color="#1ABC9C" name="DTO + Validación" tag="class-validator" desc="Valida entrada y responde 400 con mensaje claro (CP-15)."
            example="rut must be a string" />
          <PatternCard color="#E24030" name="Guard de auth + rol" tag="Security" desc="SupabaseJwtGuard + Role Guard diferencian TEACHER y SUPERADMIN."
            example="SupabaseAuthGuard" />
          <PatternCard color="#F39C12" name="Multi-tenant filter" tag="Tenancy" desc="tenancy.util resuelve colegioId; 403 si falta. Aislamiento lógico de datos."
            example="403 si falta colegioId" />
        </div>

        <div className="mt-4 rounded-lg px-4 py-2.5 border" style={{ backgroundColor: '#43B02A0E', borderColor: '#43B02A38' }}>
          <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
            <span className="font-bold" style={{ color: '#43B02A' }}>Frontend.</span> Context para sesión activa + un servicio por dominio + rutas protegidas (CP-38).
            El <b>DashboardService</b> del BFF agrega varios microservicios y alcanza <b>100% de ramas</b> en sus tests.
          </p>
        </div>
      </div>
    </div>
  )
}
