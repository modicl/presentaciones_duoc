// Indicador 2 — Reflexión retrospectiva sobre decisiones de backend y frontend

function Col({ title, color, items }: { title: string; color: string; items: [string, string][] }) {
  return (
    <div className="flex-1 min-w-0">
      <p className="font-body text-xs uppercase tracking-widest mb-2 font-bold" style={{ color }}>{title}</p>
      <div className="flex flex-col gap-2">
        {items.map(([t, d]) => (
          <div key={t} className="rounded-lg px-3 py-2 border" style={{ backgroundColor: color + '0E', borderColor: color + '33' }}>
            <p className="font-body font-bold text-sm" style={{ color: 'var(--text)' }}>{t}</p>
            <p className="font-body text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function T06Retrospectiva() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      <div className="flex flex-col justify-center pl-16 pr-16 py-8 w-full min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-2">
          Indicador 2 — Retrospectiva
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-6" style={{ color: 'var(--text)' }}>
          Decisiones de backend y frontend
        </h2>

        <div className="flex gap-4 mb-5">
          <Col title="Backend · NestJS" color="#307FE2" items={[
            ['Módulos por dominio + DI', 'PrismaService @Injectable reutilizable, ciclo de vida onModuleInit/Destroy.'],
            ['Repository tipado (Prisma)', 'prismaService.job.findMany con paginación; equivalente a JPA/Hibernate.'],
          ]} />
          <Col title="Frontend · React + Vite" color="#FFB800" items={[
            ['Capa de servicios por dominio', 'auth / jobs / paci / admin desacoplan UI de la red.'],
            ['SSE para sesión activa', 'ActiveSessionContext sigue agent_start / completed en vivo.'],
          ]} />
        </div>

        <div className="flex gap-4">
          <Col title="✓ Aciertos" color="#43B02A" items={[
            ['Tipados Prisma de extremo a extremo', 'Menos errores en runtime, refactors seguros.'],
            ['BFF desacopla la SPA', 'El front no conoce la topología de microservicios.'],
          ]} />
          <Col title="⚠ Dificultades" color="#E24030" items={[
            ['Claims de rol en el JWT', 'Bugs CP-12/13/14: 403 indebidos por claims no extraídos.'],
            ['Cobertura inicial baja del front', '26% → 81% líneas tras esfuerzo del equipo.'],
          ]} />
        </div>
      </div>
    </div>
  )
}
