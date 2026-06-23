// Indicadores 10 y 12 — Arquetipos y patrones arquitectónicos

const ARQ = [
  ['🗄️', 'Database-per-service + multi-schema', '#307FE2',
    'Cada microservicio es dueño exclusivo de sus datos sobre esquemas aislados (users · public · jobs). Evolución independiente sin clusters separados.'],
  ['⬡', 'Hexagonal en el motor IA', '#9B59B6',
    'prisma_workflow consume DynamoDB y S3 por servicios propios (dynamo_store, document_loader, document_exporter). El dominio IA no se acopla al resto.'],
  ['⛓️', 'Chain of Responsibility · gates', '#E24030',
    'Los compliance gates son decisiones early-exit encadenadas: el primero que falla detiene el flujo sin gastar tokens.'],
  ['🛡️', 'Capa anticorrupción', '#1ABC9C',
    'El motor IA no conoce el modelo relacional; traduce entre su mundo (sesiones/eventos) y el dominio PACI mediante adaptadores.'],
]

export default function T08Arquetipos() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-2">
          Indicadores 10 y 12 — Arquetipos arquitectónicos
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
          Decisiones de estructura y escala
        </h2>
        <div className="flex flex-col gap-2.5 max-w-2xl">
          {ARQ.map(([icon, t, color, d]) => (
            <div key={t} className="rounded-lg px-3 py-2.5 border flex gap-3 items-start" style={{ backgroundColor: color + '0E', borderColor: color + '38' }}>
              <span className="shrink-0 text-lg">{icon}</span>
              <div className="min-w-0">
                <p className="font-body font-bold text-sm" style={{ color }}>{t}</p>
                <p className="font-body text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-4 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <div className="w-full rounded-xl p-5 border" style={{ borderColor: '#9B59B655', backgroundColor: '#9B59B612' }}>
          <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: '#9B59B6' }}>
            Impacto en escalabilidad
          </p>
          <ul className="font-body text-xs space-y-1.5" style={{ color: 'var(--text-muted)' }}>
            <li>› Servicios <b>stateless</b> → escalan horizontal por separado.</li>
            <li>› Multi-schema → aislamiento sin costo de instancias extra.</li>
            <li>› Early-exit en gates → menos cómputo y tokens de IA.</li>
            <li>› Anticorrupción → cambiar el LLM no rompe el dominio.</li>
          </ul>
        </div>
        <p className="font-body text-xs text-center" style={{ color: 'var(--text-dim)' }}>
          Cada arquetipo responde a un atributo de calidad concreto, no a moda técnica.
        </p>
      </div>
    </div>
  )
}
