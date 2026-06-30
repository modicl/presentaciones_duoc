// Indicadores 6 y 13 — Pruebas funcionales: cobertura total tras corregir el gap de integración

const MODULES: [string, string, number][] = [
  ['prisma-ms-users', 'Auth & Colegios', 10],
  ['prisma-ms-perfil-alumno', 'Alumnos & PACI', 6],
  ['prisma-ms-docs', 'Documentos & S3', 5],
  ['prisma-adminpanel', 'Mantenimiento', 7],
  ['bff-prisma', 'API Gateway', 7],
  ['prisma-front', 'Navegación e Interfaz', 5],
]

export default function T14PruebasFuncionales() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-2">
          Indicadores 6 y 13 — Pruebas funcionales
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-4" style={{ color: 'var(--text)' }}>
          Cobertura funcional: 40/40 · 100%
        </h2>

        <div className="flex gap-3 mb-4">
          <div className="flex-1 rounded-lg p-3 border text-center" style={{ backgroundColor: '#43B02A12', borderColor: '#43B02A55' }}>
            <p className="font-heading text-2xl font-bold" style={{ color: '#43B02A' }}>40 PASS</p>
          </div>
          <div className="flex-1 rounded-lg p-3 border text-center" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <p className="font-heading text-2xl font-bold" style={{ color: 'var(--text-muted)' }}>0 FAIL</p>
          </div>
          <div className="flex-1 rounded-lg p-3 border text-center" style={{ backgroundColor: '#43B02A12', borderColor: '#43B02A55' }}>
            <p className="font-heading text-2xl font-bold" style={{ color: '#43B02A' }}>100%</p>
          </div>
        </div>

        <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-dim)' }}>
          Resumen ejecutivo por módulo
        </p>
        <div className="flex flex-col gap-1.5">
          {MODULES.map(([mod, area, total]) => (
            <div key={mod} className="rounded-lg px-3 py-1.5 border flex gap-2 items-baseline" style={{ backgroundColor: '#43B02A08', borderColor: '#43B02A30' }}>
              <span className="font-mono text-[11px] font-bold shrink-0" style={{ color: '#43B02A' }}>{mod}</span>
              <span className="font-body text-[11px] shrink-0" style={{ color: 'var(--text-label)' }}>{area}</span>
              <span className="font-body text-xs ml-auto shrink-0" style={{ color: 'var(--text-muted)' }}>{total}/{total}</span>
              <span className="font-body text-[11px] font-bold shrink-0 w-12 text-right" style={{ color: '#43B02A' }}>100%</span>
            </div>
          ))}
        </div>
        <p className="font-body text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
          DoD requería ≥ 90% → <b style={{ color: '#43B02A' }}>aprobado para producción</b> (decisión documentada).
          Los 40 casos cubren auth, PACI, documentos/S3, mantenimiento, gateway y navegación.
        </p>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-4 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <div className="w-full rounded-xl p-4 border" style={{ borderColor: '#43B02A55', backgroundColor: '#43B02A12' }}>
          <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: '#43B02A' }}>
            Honestidad técnica: el gap que las funcionales revelaron
          </p>
          <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
            Las unitarias <b>mockean</b> el JWT; las funcionales usan el JWT <b>real</b> de Supabase. Esa diferencia
            destapó un gap de <b>integración</b> (el guard no extraía los claims de rol → 403 indebidos). Tras refinar
            el <b>SupabaseJwtGuard</b> y sumar mocks JWKS, las 40 funcionales pasan al <b>100%</b>.
          </p>
        </div>
        <div className="w-full rounded-lg px-3 py-2.5 border" style={{ backgroundColor: '#43B02A0E', borderColor: '#43B02A38' }}>
          <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
            <b style={{ color: '#43B02A' }}>PASS que evidencian calidad:</b> CP-01 register 201 + JWT · adminpanel CP-22/24/27 al 100% · CP-39/40 Playwright E2E login + dashboard.
          </p>
        </div>
      </div>
    </div>
  )
}
