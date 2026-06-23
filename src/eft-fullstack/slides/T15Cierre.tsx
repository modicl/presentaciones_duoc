// Indicadores 2, 3 y 6 — Lecciones aprendidas y cierre

function List({ title, color, items }: { title: string; color: string; items: string[] }) {
  return (
    <div className="rounded-lg px-4 py-3 border" style={{ backgroundColor: color + '0E', borderColor: color + '38' }}>
      <p className="font-body text-xs uppercase tracking-widest mb-2 font-bold" style={{ color }}>{title}</p>
      <ul className="font-body text-xs space-y-1.5" style={{ color: 'var(--text-muted)' }}>
        {items.map(i => <li key={i}>› {i}</li>)}
      </ul>
    </div>
  )
}

export default function T15Cierre() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-2">
          Indicadores 2, 3 y 6 — Cierre
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
          Lecciones aprendidas
        </h2>
        <div className="grid grid-cols-1 gap-2.5 max-w-xl">
          <List title="✓ Aciertos" color="#43B02A" items={[
            'Persistencia políglota coherente con la naturaleza de cada dato.',
            'Gates de compliance preventivos (ahorro de tokens y privacidad).',
            'CI bloqueante con 1322 tests como gate de merge.',
          ]} />
          <List title="⚠ Deudas técnicas" color="#E24030" items={[
            'Claims de rol del JWT de Supabase (7 funcionales en rojo).',
            'Cobertura de ramas: front 63.45% · ms-users 52.58%.',
            'DoD funcional aún no cumplido (82.5% < 90%).',
          ]} />
          <List title="→ Mejoras futuras" color="#307FE2" items={[
            'Mocking del JWKS en tests + e2e en todos los microservicios.',
            'Publicar lcov como artefacto CI.',
            'Observabilidad: logs → OpenTelemetry.',
          ]} />
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-6 px-10 text-center"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-0.5 bg-duoc-blue" />
          <div className="w-6 h-0.5 bg-duoc-yellow" />
        </div>
        <h3 className="font-heading text-4xl font-bold leading-tight" style={{ color: 'var(--text)' }}>
          Gracias
        </h3>
        <p className="font-body text-lg" style={{ color: 'var(--text-muted)' }}>
          ¿Preguntas?
        </p>
        <p className="font-body text-sm" style={{ color: 'var(--text-dim)' }}>
          PRISMA · DSY1106 Desarrollo Fullstack III · Evaluación Final Transversal
        </p>
      </div>
    </div>
  )
}
