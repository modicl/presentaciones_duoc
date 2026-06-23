// Indicadores 6 y 13 — Pruebas unitarias: estrategia y resultados

const ROWS: [string, string, string, string, string][] = [
  // componente, runner, tests, %líneas, color
  ['prisma-front', 'Vitest', '445', '81.03', '#307FE2'],
  ['bff-prisma', 'Jest', '187', '84.06', '#FFB800'],
  ['prisma-ms-users', 'Jest', '139', '85.24', '#E24030'],
  ['prisma-ms-docs', 'Jest', '77', '83.89', '#9B59B6'],
  ['prisma-ms-perfil-alumno', 'Jest', '63', '87.18', '#1ABC9C'],
  ['prisma-adminpanel', 'Jest', '169', '80.67', '#43B02A'],
  ['prisma_workflow', 'pytest', '245', '85.37', '#F39C12'],
]

export default function T13PruebasUnitarias() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column — tabla */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-2">
          Indicadores 6 y 13 — Pruebas unitarias
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-4" style={{ color: 'var(--text)' }}>
          1322 pruebas, 100% aprobadas
        </h2>

        <div className="rounded-lg border overflow-hidden" style={{ borderColor: 'var(--border)' }}>
          <div className="grid grid-cols-[2fr_1fr_1fr_1.2fr] px-3 py-1.5 font-body text-[11px] uppercase tracking-wider font-bold"
            style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-label)' }}>
            <span>Componente</span><span>Runner</span><span>Tests</span><span>% Líneas</span>
          </div>
          {ROWS.map(([comp, runner, tests, lines, color]) => (
            <div key={comp} className="grid grid-cols-[2fr_1fr_1fr_1.2fr] px-3 py-1.5 font-body text-xs items-center border-t"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
              <span className="font-bold truncate" style={{ color: 'var(--text)' }}>
                <span style={{ color }}>●</span> {comp}
              </span>
              <span>{runner}</span>
              <span>{tests}</span>
              <span className="font-bold" style={{ color: '#43B02A' }}>{lines}%</span>
            </div>
          ))}
        </div>
        <p className="font-body text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
          Stack: <b>Vitest</b> (front) · <b>Jest + @nestjs/testing</b> (microservicios) · <b>pytest + pytest-cov</b> (motor IA).
        </p>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-3 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <div className="w-full rounded-xl p-4 border text-center" style={{ borderColor: '#43B02A55', backgroundColor: '#43B02A12' }}>
          <p className="font-heading text-4xl font-bold" style={{ color: '#43B02A' }}>158</p>
          <p className="font-body text-xs mt-1" style={{ color: 'var(--text-muted)' }}>suites · cobertura ≥ 80% en los 7 componentes</p>
        </div>
        <div className="w-full rounded-lg px-3 py-2.5 border" style={{ backgroundColor: '#307FE20E', borderColor: '#307FE238' }}>
          <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
            <b style={{ color: '#307FE2' }}>BFF</b>: 100% ramas y 98.87% funciones. <b style={{ color: '#9B59B6' }}>compliance_gates</b>: 100% de reglas (D170/D83/PII/NEE) <b>sin gastar tokens</b>.
          </p>
        </div>
        <div className="w-full rounded-lg px-3 py-2.5 border" style={{ backgroundColor: '#FFB8000E', borderColor: '#FFB80038' }}>
          <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
            <b style={{ color: '#FFB800' }}>Evolución:</b> front 26→81% · BFF 17→84% · adminpanel 2→81% líneas.
          </p>
        </div>
        <p className="font-body text-[11px] text-center" style={{ color: 'var(--text-dim)' }}>
          Pendiente: ramas en ms-users (52.6%) y front (63.5%); publicar lcov como artefacto CI.
        </p>
      </div>
    </div>
  )
}
