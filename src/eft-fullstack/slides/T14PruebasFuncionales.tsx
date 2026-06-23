// Indicadores 6 y 13 — Pruebas funcionales, bugs detectados y honestidad técnica

const FAILS: [string, string, string][] = [
  ['CP-12/13/14', 'ms-perfil-alumno', '403 indebidos: claims de rol del JWT no extraídos'],
  ['CP-18', 'ms-docs', '403 en GET /api/jobs por guard de roles'],
  ['CP-33', 'bff-prisma', '502 Bad Gateway: ECONNREFUSED 127.0.0.1:3001'],
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
          Honestidad técnica: 33/40
        </h2>

        <div className="flex gap-3 mb-4">
          <div className="flex-1 rounded-lg p-3 border text-center" style={{ backgroundColor: '#43B02A12', borderColor: '#43B02A55' }}>
            <p className="font-heading text-2xl font-bold" style={{ color: '#43B02A' }}>33 PASS</p>
          </div>
          <div className="flex-1 rounded-lg p-3 border text-center" style={{ backgroundColor: '#E2403012', borderColor: '#E2403055' }}>
            <p className="font-heading text-2xl font-bold" style={{ color: '#E24030' }}>7 FAIL</p>
          </div>
          <div className="flex-1 rounded-lg p-3 border text-center" style={{ backgroundColor: '#FFB80012', borderColor: '#FFB80055' }}>
            <p className="font-heading text-2xl font-bold" style={{ color: '#FFB800' }}>82.5%</p>
          </div>
        </div>

        <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-dim)' }}>
          Fallas concentradas en roles del JWT
        </p>
        <div className="flex flex-col gap-1.5">
          {FAILS.map(([cp, mod, causa]) => (
            <div key={cp} className="rounded-lg px-3 py-1.5 border flex gap-2 items-baseline" style={{ backgroundColor: '#E2403008', borderColor: '#E2403030' }}>
              <span className="font-mono text-[11px] font-bold shrink-0" style={{ color: '#E24030' }}>{cp}</span>
              <span className="font-body text-[11px] shrink-0" style={{ color: 'var(--text-label)' }}>{mod}</span>
              <span className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>{causa}</span>
            </div>
          ))}
        </div>
        <p className="font-body text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
          DoD requería ≥ 90% → <b style={{ color: '#E24030' }}>rechazado para producción</b> (decisión documentada).
          Acciones: refinar SupabaseJwtGuard, sumar mocks JWKS, ampliar e2e estilo ms-docs.
        </p>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-4 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <div className="w-full rounded-xl p-4 border" style={{ borderColor: '#FFB80055', backgroundColor: '#FFB80012' }}>
          <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: '#FFB800' }}>❓ Pregunta anticipada</p>
          <p className="font-body text-sm font-bold mb-1" style={{ color: 'var(--text)' }}>
            Si 1322 unitarias pasan al 100%, ¿por qué fallaron 7 funcionales?
          </p>
          <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
            Porque las unitarias <b>mockean</b> el JWT; las funcionales usan el JWT real de Supabase. Es un gap de
            <b> integración</b>, no de lógica: el guard no extrae los claims de rol en el token real.
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
