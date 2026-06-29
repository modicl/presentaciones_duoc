const ACCENT = '#307FE2'
const GREEN = '#43B02A'
const AMBER = '#F59E0B'

const SUPUESTOS = [
  ['Horizonte evaluación', '5 años (2027–2031)'],
  ['Tasa social de descuento', '5,5% (MINSAL)'],
  ['Impuesto a la renta', 'Exento (art. 40 DL 2.763)'],
  ['Tarifa FONASA por prestación', '$18.000'],
  ['Depreciación anual (HW + Intangibles)', '$123,6M (57,6 + 66,0)'],
  ['Préstamo FNDR', '$700M al 25% anual · Sistema Francés'],
]

const FCN_ROWS = [
  { item: 'Ingresos FONASA', a1: '$13.049M', a2: '$13.178M', a5: '$13.372M' },
  { item: 'Costos operacionales', a1: '-$13.954M', a2: '-$13.956M', a5: '-$13.959M' },
  { item: 'Intereses préstamo', a1: '-$175,0M', a2: '-$153,7M', a5: '-$52,1M' },
  { item: 'Presupuesto fiscal', a1: '$1.600M', a2: '$1.600M', a5: '$1.600M' },
  { item: 'Utilidad antes de impuesto', a1: '$395,8M', a2: '$544,6M', a5: '$837,5M' },
  { item: 'Impuesto (0%)', a1: '$0', a2: '$0', a5: '$0' },
  { item: 'Dep. + Amort. (+)', a1: '$123,6M', a2: '$123,6M', a5: '$123,6M' },
  { item: 'Amortización capital', a1: '-$85,3M', a2: '-$106,6M', a5: '-$208,2M' },
]

export default function X09FlujoCaja() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10" style={{ backgroundColor: ACCENT }} />

      <div className="flex flex-1 min-h-0">
        <div className="flex flex-col justify-center pl-16 pr-8 py-6 flex-[3] min-w-0">
          <p className="font-body text-sm tracking-[0.25em] uppercase mb-2" style={{ color: ACCENT }}>
            Evaluación Financiera
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight mb-4" style={{ color: 'var(--text)' }}>
            Flujo de Caja Neto — Alt 1 Mixta
          </h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-4">
            {SUPUESTOS.map(([label, val]) => (
              <div key={label} className="flex justify-between gap-2">
                <span className="font-body text-xs" style={{ color: 'var(--text-label)' }}>{label}</span>
                <span className="font-body text-xs font-bold text-right" style={{ color: 'var(--text)' }}>{val}</span>
              </div>
            ))}
          </div>

          <p className="font-body text-xs uppercase tracking-wider mb-1.5" style={{ color: 'var(--text-label)' }}>
            Componentes del FCN
          </p>
          <div className="rounded-xl border overflow-hidden mb-3" style={{ borderColor: 'var(--border)' }}>
            <div
              className="grid grid-cols-4 text-center px-3 py-2"
              style={{ backgroundColor: `${ACCENT}20`, borderBottom: '1px solid var(--border)' }}
            >
              {['Concepto', 'Año 1', 'Año 2', 'Año 5'].map(h => (
                <span key={h} className="font-body text-xs font-bold uppercase tracking-wider" style={{ color: ACCENT }}>{h}</span>
              ))}
            </div>
            {FCN_ROWS.map(({ item, a1, a2, a5 }, i) => (
              <div
                key={item}
                className="grid grid-cols-4 text-center px-3 py-1.5"
                style={{
                  backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'transparent',
                  borderBottom: i < FCN_ROWS.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <span className="font-body text-xs text-left" style={{ color: 'var(--text-muted)' }}>{item}</span>
                <span className="font-body text-xs" style={{ color: a1.startsWith('-') ? AMBER : 'var(--text-muted)' }}>{a1}</span>
                <span className="font-body text-xs" style={{ color: a2.startsWith('-') ? AMBER : 'var(--text-muted)' }}>{a2}</span>
                <span className="font-body text-xs" style={{ color: a5.startsWith('-') ? AMBER : 'var(--text-muted)' }}>{a5}</span>
              </div>
            ))}
          </div>

          <div
            className="rounded-lg px-4 py-3 border"
            style={{ backgroundColor: `${GREEN}12`, borderColor: `${GREEN}40` }}
          >
            <p className="font-body text-xs uppercase tracking-wider mb-2" style={{ color: GREEN }}>
              FCN = Ingresos − Costos − Impuesto (0%) − CAPEX + Préstamo − Amortización + Residual + KT
            </p>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div>
                <p className="font-body text-xs" style={{ color: 'var(--text-label)' }}>Año 0</p>
                <p className="font-body text-sm font-bold" style={{ color: '#EF4444' }}>-$1.094,8M</p>
              </div>
              <div>
                <p className="font-body text-xs" style={{ color: 'var(--text-label)' }}>Año 1</p>
                <p className="font-body text-sm font-bold" style={{ color: GREEN }}>$434,1M</p>
              </div>
              <div>
                <p className="font-body text-xs" style={{ color: 'var(--text-label)' }}>Año 2</p>
                <p className="font-body text-sm font-bold" style={{ color: GREEN }}>$561,6M</p>
              </div>
              <div>
                <p className="font-body text-xs" style={{ color: 'var(--text-label)' }}>Año 5</p>
                <p className="font-body text-sm font-bold" style={{ color: GREEN }}>$1.929,6M</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-center flex-[2] border-l px-6 py-6 gap-2"
          style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
        >
          <div className="text-center mb-2">
            <span
              className="font-heading font-bold leading-none"
              style={{ fontSize: 'clamp(40px, 5vw, 72px)', color: GREEN }}
            >
              $3.144,9M
            </span>
            <p className="font-body text-sm uppercase tracking-widest mt-1" style={{ color: 'var(--text-dim)' }}>
              FCN acumulado · Año 5
            </p>
          </div>

          <p className="font-body text-xs uppercase tracking-wider text-center mb-1" style={{ color: 'var(--text-label)' }}>
            Puntos clave del flujo
          </p>

          {[
            ['Inversión total Año 0', '$1.794,8M', ACCENT],
            ['Préstamo FNDR recibido', '$700M', GREEN],
            ['Recup. KT + residual Año 5', '$1.176,8M', GREEN],
            ['Exención tributaria (0%)', 'Art. 40 DL 2.763', AMBER],
          ].map(([label, val, color]) => (
            <div
              key={label}
              className="rounded-lg px-4 py-2 border flex justify-between items-center"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
                borderLeftColor: color,
                borderLeftWidth: '3px',
              }}
            >
              <span className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>{label}</span>
              <span className="font-body text-xs font-bold" style={{ color }}>{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
