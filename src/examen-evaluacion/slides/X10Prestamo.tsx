const ACCENT = '#307FE2'
const GREEN = '#43B02A'
const AMBER = '#F59E0B'

const TABLA = [
  { p: 1, cuota: '$260.292.718', interes: '$175.000.000', amort: '$85.292.718', saldo: '$614.707.282' },
  { p: 2, cuota: '$260.292.718', interes: '$153.676.821', amort: '$106.615.897', saldo: '$508.091.385' },
  { p: 3, cuota: '$260.292.718', interes: '$127.022.846', amort: '$133.269.872', saldo: '$374.821.514' },
  { p: 4, cuota: '$260.292.718', interes: '$93.705.378', amort: '$166.587.339', saldo: '$208.234.174' },
  { p: 5, cuota: '$260.292.718', interes: '$52.058.544', amort: '$208.234.174', saldo: '$0' },
]

export default function X10Prestamo() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10" style={{ backgroundColor: ACCENT }} />

      <div className="flex flex-1 min-h-0">
        <div className="flex flex-col justify-center pl-16 pr-8 py-6 flex-[3] min-w-0">
          <p className="font-body text-sm tracking-[0.25em] uppercase mb-2" style={{ color: ACCENT }}>
            Sistema de Amortización Francés
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight mb-4" style={{ color: 'var(--text)' }}>
            Simulación de Préstamo FNDR
          </h2>

          <div
            className="rounded-xl border px-5 py-3 mb-4"
            style={{ backgroundColor: `${ACCENT}12`, borderColor: `${ACCENT}40` }}
          >
            <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
              Cuota constante · C = P × i(1+i)ⁿ / [(1+i)ⁿ − 1]
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
              {[
                ['P', 'Monto préstamo: $700M'],
                ['i', 'Tasa interés anual: 25%'],
                ['n', 'Horizonte: 5 años'],
                ['Cuota', '$260.292.718 / año'],
              ].map(([sym, desc]) => (
                <p key={sym} className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
                  <span className="font-bold" style={{ color: 'var(--text)' }}>{sym}</span> = {desc}
                </p>
              ))}
            </div>
          </div>

          <p className="font-body text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--text-label)' }}>
            Tabla de amortización — 5 períodos
          </p>
          <div className="rounded-xl border overflow-hidden" style={{ borderColor: 'var(--border)' }}>
            <div
              className="grid grid-cols-5 text-center px-3 py-2"
              style={{ backgroundColor: `${ACCENT}20`, borderBottom: '1px solid var(--border)' }}
            >
              {['Per.', 'Cuota', 'Interés', 'Amortización', 'Saldo'].map(h => (
                <span key={h} className="font-body text-xs font-bold uppercase tracking-wider" style={{ color: ACCENT }}>
                  {h}
                </span>
              ))}
            </div>
            {TABLA.map(({ p, cuota, interes, amort, saldo }, i) => (
              <div
                key={p}
                className="grid grid-cols-5 text-center px-3 py-2"
                style={{
                  backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'transparent',
                  borderBottom: i < TABLA.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <span className="font-body text-sm font-bold" style={{ color: ACCENT }}>{p}</span>
                <span className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>{cuota}</span>
                <span className="font-body text-xs font-semibold" style={{ color: AMBER }}>{interes}</span>
                <span className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>{amort}</span>
                <span className="font-body text-xs" style={{ color: p === 5 ? GREEN : 'var(--text-muted)' }}>{saldo}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col justify-center flex-[2] border-l px-8 py-8 gap-5"
          style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
        >
          <div className="text-center">
            <span
              className="font-heading font-bold leading-none"
              style={{ fontSize: 'clamp(48px, 6vw, 80px)', color: AMBER }}
            >
              25%
            </span>
            <p className="font-body text-sm uppercase tracking-widest mt-1" style={{ color: 'var(--text-dim)' }}>
              tasa anual · préstamo FNDR
            </p>
          </div>

          {[
            { label: 'Monto total', valor: '$700.000.000' },
            { label: 'Total intereses', valor: '$601.463.589', color: AMBER },
            { label: 'Total pagado', valor: '$1.301.463.589' },
          ].map(({ label, valor, color }) => (
            <div
              key={label}
              className="rounded-lg px-4 py-2.5 border text-center"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
              }}
            >
              <p className="font-body text-xs uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-label)' }}>{label}</p>
              <p className="font-heading text-lg font-bold" style={{ color: color || 'var(--text)' }}>{valor}</p>
            </div>
          ))}

          <div
            className="rounded-xl px-4 py-2.5 border text-center"
            style={{ backgroundColor: `${GREEN}10`, borderColor: `${GREEN}30` }}
          >
            <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Apalancamiento positivo: deuda del{' '}
              <span style={{ color: AMBER, fontWeight: 700 }}>25%</span> financiada
              con flujos descontados al{' '}
              <span style={{ color: GREEN, fontWeight: 700 }}>5,5%</span> social
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
