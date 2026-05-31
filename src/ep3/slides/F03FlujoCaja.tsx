const ACCENT = '#10B981'
const RED    = '#EF4444'

const SUPUESTOS = [
  { param: 'Horizonte de evaluación',    valor: '5 años' },
  { param: 'Tasa Social de Descuento',   valor: '5,5% anual (MIDESO 2024)' },
  { param: 'Impuesto a la renta',        valor: '0% — entidad pública' },
  { param: 'Tarifa FONASA prom.',        valor: '$18.000 CLP / prestación' },
  { param: 'Depreciación equipos TI',    valor: 'Lineal a 5 años (NICSP)' },
  { param: 'Depreciación muebles',       valor: 'Lineal a 10 años (NICSP)' },
]

const ALTS = [
  { nombre: 'Alt 1 — Mixta',    inv0: '-$650M',  fc1: '$387,7M',   fc2: '$519,4M',   acum5: '$2.256,8M',  color: ACCENT },
  { nombre: 'Alt 2 — Inhouse',  inv0: '-$520M',  fc1: '$495,9M',   fc2: '$552,4M',   acum5: '$2.501,6M',  color: '#6366F1' },
  { nombre: 'Alt 3 — Low-Code', inv0: '-$580M',  fc1: '-$2.313,9M', fc2: '-$2.186,7M', acum5: '-$9.295,0M', color: RED },
]

const COLS = ['', 'Año 0', 'Año 1', 'Año 2', 'Acum. 5 años']

export default function F03FlujoCaja() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10" style={{ backgroundColor: ACCENT }} />

      <div className="flex flex-1 min-h-0">

        {/* ── Columna izquierda: supuestos + estructura FCN ── */}
        <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[3] min-w-0">
          <p className="font-body text-base tracking-[0.25em] uppercase mb-2" style={{ color: ACCENT }}>
            Evaluación Financiera
          </p>
          <h2 className="font-heading text-5xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
            Flujo de Caja
          </h2>

          {/* Tabla de supuestos */}
          <p className="font-body text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--text-label)' }}>
            Supuestos y parámetros generales
          </p>
          <div
            className="rounded-xl border overflow-hidden mb-5"
            style={{ borderColor: 'var(--border)' }}
          >
            {SUPUESTOS.map(({ param, valor }, i) => (
              <div
                key={param}
                className="flex justify-between px-5 py-3"
                style={{
                  backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'transparent',
                  borderBottom: i < SUPUESTOS.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <span className="font-body text-base" style={{ color: 'var(--text-muted)' }}>{param}</span>
                <span className="font-body text-base font-semibold" style={{ color: 'var(--text)' }}>{valor}</span>
              </div>
            ))}
          </div>

          {/* Estructura FCN */}
          <div
            className="rounded-xl px-5 py-4 border"
            style={{ backgroundColor: `${ACCENT}12`, borderColor: `${ACCENT}40` }}
          >
            <p className="font-body text-sm uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
              Estructura del FCN
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Ingresos FONASA + Presupuesto Fiscal − Costos Fijos − Costos Variables TI
              − Depreciaciones − Intereses − Amortización préstamo ± Inversión Año 0
            </p>
          </div>
        </div>

        {/* ── Columna derecha: tabla FCN comparativa ── */}
        <div
          className="flex flex-col justify-center flex-[2] border-l px-8 py-8 gap-5"
          style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
        >
          <p className="font-body text-sm uppercase tracking-widest text-center" style={{ color: 'var(--text-label)' }}>
            Flujos de Caja Neto — resumen comparativo
          </p>

          {/* Cabecera de columnas */}
          <div className="grid grid-cols-5 gap-1 text-center px-1">
            {COLS.map(h => (
              <span
                key={h}
                className="font-body text-sm font-bold uppercase tracking-wider"
                style={{ color: 'var(--text-muted)' }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Filas por alternativa */}
          {ALTS.map(({ nombre, inv0, fc1, fc2, acum5, color }) => (
            <div
              key={nombre}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: color }}
            >
              <div
                className="px-4 py-2"
                style={{ backgroundColor: `${color}20` }}
              >
                <p className="font-body text-base font-bold" style={{ color }}>{nombre}</p>
              </div>
              <div
                className="grid grid-cols-5 gap-1 px-4 py-3 text-center"
                style={{ backgroundColor: 'var(--bg-card)' }}
              >
                <span />
                <span className="font-body text-base font-semibold" style={{ color: RED }}>{inv0}</span>
                <span className="font-body text-base" style={{ color: color === RED ? RED : 'var(--text-muted)' }}>{fc1}</span>
                <span className="font-body text-base" style={{ color: color === RED ? RED : 'var(--text-muted)' }}>{fc2}</span>
                <span className="font-body text-base font-bold" style={{ color: color === RED ? RED : ACCENT }}>{acum5}</span>
              </div>
            </div>
          ))}

          {/* Nota Alt 3 */}
          <div
            className="rounded-xl px-5 py-3 border text-center"
            style={{ backgroundColor: `${RED}12`, borderColor: `${RED}40` }}
          >
            <p className="font-body text-base" style={{ color: 'var(--text-muted)' }}>
              Alt 3: costos fijos $16.670,6M/año{' '}
              <span style={{ color: RED, fontWeight: 700 }}>superan los ingresos</span>
              {' '}→ déficit estructural en todos los períodos
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
