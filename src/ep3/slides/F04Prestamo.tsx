const ACCENT  = '#10B981'
const INDIGO  = '#6366F1'
const RED     = '#EF4444'
const AMBER   = '#F59E0B'

const TABLA_ALT1 = [
  { p: 1, cuota: '$143.962.893', interes: '$22.750.000', amort: '$121.212.893', saldo: '$528.787.107' },
  { p: 2, cuota: '$143.962.893', interes: '$18.507.549', amort: '$125.455.344', saldo: '$403.331.764' },
  { p: 3, cuota: '$143.962.893', interes: '$14.116.612', amort: '$129.846.281', saldo: '$273.485.483' },
  { p: 4, cuota: '$143.962.893', interes: '$9.571.992',  amort: '$134.390.901', saldo: '$139.094.582' },
  { p: 5, cuota: '$143.962.893', interes: '$4.868.310',  amort: '$139.094.583', saldo: '$0' },
]

const PRESTAMOS = [
  { alt: 'Alt 1 — Mixta',    fuente: 'MINSAL / FNDR',    monto: '$700.000.000', cuota: '$143.962.893', totalInt: '$69.814.463',  color: ACCENT },
  { alt: 'Alt 2 — Inhouse',  fuente: 'Préstamo Bancario', monto: '$800.000.000', cuota: '$177.185.099', totalInt: '$85.925.493',  color: INDIGO },
  { alt: 'Alt 3 — Low-Code', fuente: 'MINSAL / FNDR',    monto: '$450.000.000', cuota: '$99.666.618',  totalInt: '$48.333.090',  color: RED },
]

export default function F04Prestamo() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10" style={{ backgroundColor: ACCENT }} />

      <div className="flex flex-1 min-h-0">

        {/* ── Columna izquierda: fórmula + tabla completa Alt 1 ── */}
        <div className="flex flex-col justify-center pl-16 pr-8 py-7 flex-[3] min-w-0">
          <p className="font-body text-base tracking-[0.25em] uppercase mb-2" style={{ color: ACCENT }}>
            Sistema de Amortización Francés
          </p>
          <h2 className="font-heading text-5xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
            Simulación de Préstamo
          </h2>

          {/* Fórmula */}
          <div
            className="rounded-xl border px-5 py-4 mb-5"
            style={{ backgroundColor: `${ACCENT}12`, borderColor: `${ACCENT}40` }}
          >
            <p className="font-body text-sm uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
              Cuota constante (C)
            </p>
            <p className="font-heading text-3xl font-bold mb-3" style={{ color: 'var(--text)' }}>
              C = P × i(1+i)ⁿ / [(1+i)ⁿ − 1]
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
              {[
                ['P', 'Monto del préstamo'],
                ['i', 'Tasa de interés anual (3,5%)'],
                ['n', 'Número de períodos (5 años)'],
                ['Interés_t', 'Saldo_{t-1} × i'],
              ].map(([sym, desc]) => (
                <p key={sym} className="font-body text-base" style={{ color: 'var(--text-muted)' }}>
                  <span className="font-bold" style={{ color: 'var(--text)' }}>{sym}</span> = {desc}
                </p>
              ))}
            </div>
          </div>

          {/* Tabla completa Alt 1 — 5 períodos */}
          <p className="font-body text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--text-label)' }}>
            Tabla de amortización — Alt 1 Mixta (5 períodos completos)
          </p>
          <div className="rounded-xl border overflow-hidden" style={{ borderColor: 'var(--border)' }}>
            {/* Cabecera */}
            <div
              className="grid grid-cols-5 text-center px-4 py-2.5"
              style={{ backgroundColor: `${ACCENT}20`, borderBottom: '1px solid var(--border)' }}
            >
              {['Per.', 'Cuota', 'Interés', 'Amortización', 'Saldo'].map(h => (
                <span key={h} className="font-body text-sm font-bold uppercase tracking-wider" style={{ color: ACCENT }}>
                  {h}
                </span>
              ))}
            </div>
            {/* Filas */}
            {TABLA_ALT1.map(({ p, cuota, interes, amort, saldo }, i) => (
              <div
                key={p}
                className="grid grid-cols-5 text-center px-4 py-2.5"
                style={{
                  backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'transparent',
                  borderBottom: i < TABLA_ALT1.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <span className="font-body text-base font-bold" style={{ color: ACCENT }}>{p}</span>
                <span className="font-body text-base" style={{ color: 'var(--text-muted)' }}>{cuota}</span>
                <span className="font-body text-base font-semibold" style={{ color: AMBER }}>{interes}</span>
                <span className="font-body text-base" style={{ color: 'var(--text-muted)' }}>{amort}</span>
                <span className="font-body text-base" style={{ color: p === 5 ? ACCENT : 'var(--text-muted)' }}>{saldo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Columna derecha: stat + comparativo ── */}
        <div
          className="flex flex-col justify-center flex-[2] border-l px-8 py-8 gap-5"
          style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
        >
          {/* Stat grande */}
          <div className="text-center">
            <span
              className="font-heading font-bold leading-none"
              style={{ fontSize: 'clamp(56px, 7vw, 96px)', color: ACCENT }}
            >
              3,5%
            </span>
            <p className="font-body text-sm uppercase tracking-widest mt-1" style={{ color: 'var(--text-label)' }}>
              tasa anual · por debajo del 5,5% social
            </p>
          </div>

          <p className="font-body text-sm uppercase tracking-widest text-center" style={{ color: 'var(--text-label)' }}>
            Comparativo de préstamos
          </p>

          {/* Cards por alternativa */}
          {PRESTAMOS.map(({ alt, fuente, monto, cuota, totalInt, color }) => (
            <div
              key={alt}
              className="rounded-xl border px-5 py-4"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', borderLeftColor: color, borderLeftWidth: '3px' }}
            >
              <p className="font-body text-base font-bold mb-0.5" style={{ color }}>{alt}</p>
              <p className="font-body text-sm mb-3" style={{ color: 'var(--text-muted)' }}>{fuente}</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="font-body text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-label)' }}>Monto</p>
                  <p className="font-body text-base font-bold" style={{ color: 'var(--text)' }}>{monto}</p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-label)' }}>Cuota/año</p>
                  <p className="font-body text-base font-bold" style={{ color }}>{cuota}</p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-label)' }}>Total int.</p>
                  <p className="font-body text-base font-bold" style={{ color: AMBER }}>{totalInt}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Nota apalancamiento */}
          <div
            className="rounded-xl px-5 py-3 border text-center"
            style={{ backgroundColor: `${ACCENT}12`, borderColor: `${ACCENT}40` }}
          >
            <p className="font-body text-base" style={{ color: 'var(--text-muted)' }}>
              Apalancamiento positivo: costo deuda{' '}
              <span style={{ color: ACCENT, fontWeight: 700 }}>3,5%</span>
              {' '}&lt;{' '}
              tasa social de descuento{' '}
              <span style={{ color: ACCENT, fontWeight: 700 }}>5,5%</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
