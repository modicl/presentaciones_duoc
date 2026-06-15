const CARDS = [
  {
    t: 'Desplegar',
    c: '#307FE2',
    items: ['Task definition + service prisma-app', '1 task con los 6 contenedores', 'Comunicación por localhost (awsvpc)'],
  },
  {
    t: 'Gestionar',
    c: '#FFB800',
    items: ['Consola ECS: tasks y revisiones', 'force-new-deployment (rolling)', 'desiredCount 0 ↔ 1 = prender/apagar'],
  },
  {
    t: 'Escalar',
    c: '#43B02A',
    items: ['Service Auto Scaling (target tracking)', 'CPU 70% · min 0 / max 3', 'Cooldown 60s · escala 1 → 2 → 3'],
  },
]

export default function D09Orquestacion() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center overflow-hidden px-16 py-12" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
        Orquestación y escalabilidad · IE4
      </p>
      <h2 className="font-heading text-5xl font-bold leading-tight mb-2" style={{ color: 'var(--text)' }}>
        ECS Fargate: desplegar, gestionar, escalar
      </h2>
      <p className="font-body text-base mb-8" style={{ color: 'var(--text-label)' }}>
        Clúster <span className="font-mono text-sm">prisma-cluster</span> · servicio
        <span className="font-mono text-sm"> prisma-app</span> — orquestación gestionada frente a un despliegue manual.
      </p>

      <div className="grid grid-cols-3 gap-5">
        {CARDS.map(card => (
          <div
            key={card.t}
            className="rounded-xl px-5 py-5 border"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', borderTopColor: card.c, borderTopWidth: '3px' }}
          >
            <p className="font-heading font-bold text-xl mb-3" style={{ color: card.c }}>{card.t}</p>
            <ul className="space-y-2">
              {card.items.map(it => (
                <li key={it} className="flex gap-2 font-body text-sm" style={{ color: 'var(--text-muted)' }}>
                  <span className="mt-0.5 shrink-0" style={{ color: card.c }}>›</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="font-body text-sm mt-7" style={{ color: 'var(--text-label)' }}>
        <span className="font-semibold" style={{ color: 'var(--text-muted)' }}>Fargate</span> elimina la gestión de servidores;
        el <span className="font-semibold" style={{ color: 'var(--text-muted)' }}>auto-scaling</span> ajusta la cantidad de tasks
        por métrica de CPU, con auto-recuperación y despliegues sin downtime.
      </p>
    </div>
  )
}
