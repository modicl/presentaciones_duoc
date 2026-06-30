// Indicadores 4 y 11 — Estrategia de branching y organización del equipo

function Branch({ name, desc, color }: { name: string; desc: string; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-sm font-bold px-2 py-1 rounded shrink-0 w-32 text-center" style={{ backgroundColor: color + '22', color }}>{name}</span>
      <span className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>{desc}</span>
    </div>
  )
}

export default function T10Branching() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-2">
          Indicadores 4 y 11 — Branching Git
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
          Trunk-based para un equipo chico
        </h2>

        <div className="flex flex-col gap-2.5 mb-5">
          <Branch name="main" color="#43B02A" desc="Producción. Solo recibe lo ya integrado y probado." />
          <Branch name="develop" color="#307FE2" desc="Integración del Sprint. Tags v1.0.0 por Sprint." />
          <Branch name="feature/*" color="#FFB800" desc="Una rama por historia de usuario → PR." />
          <Branch name="hotfix/*" color="#E24030" desc="Correcciones urgentes sobre producción." />
        </div>

        <div className="rounded-lg px-4 py-3 border" style={{ backgroundColor: '#9B59B60E', borderColor: '#9B59B638' }}>
          <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
            <span className="font-bold" style={{ color: '#9B59B6' }}>PR + CI bloqueante.</span> ≥1 revisión de un compañero y
            <span className="font-mono"> npm test --coverage</span> / <span className="font-mono">pytest --cov</span> deben pasar antes de mergear a develop.
            Commits tipo Conventional (<span className="font-mono">feat:</span>, <span className="font-mono">fix:</span>, <span className="font-mono">test:</span>).
          </p>
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-4 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <div className="w-full rounded-xl p-5 border text-center" style={{ borderColor: '#43B02A55', backgroundColor: '#43B02A12' }}>
          <p className="font-heading text-4xl font-bold" style={{ color: '#43B02A' }}>1322</p>
          <p className="font-body text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
            pruebas convertidas en <b>gate</b> de merge
          </p>
        </div>
        <div className="w-full rounded-xl p-4 border" style={{ borderColor: '#FFB80055', backgroundColor: '#FFB80012' }}>
          <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: '#FFB800' }}>¿Por qué trunk-based y no GitFlow puro? </p>
          <p className="font-body text-sm font-bold mb-1" style={{ color: 'var(--text)' }}></p>
          <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
            Equipo pequeño: integración más rápida y menos ramas vivas, manteniendo el mismo aislamiento con feature/*.
          </p>
        </div>
        <p className="font-body text-xs text-center" style={{ color: 'var(--text-dim)' }}>
          La CI detectó el bug CP-33 (502 ECONNREFUSED) <b>antes</b> de desplegar desde develop.
        </p>
      </div>
    </div>
  )
}
