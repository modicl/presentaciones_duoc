const ACCENT = '#10B981'
const INDIGO = '#6366F1'
const RED    = '#EF4444'

const ALTS = [
  {
    id: 'Alt 1',
    nombre: 'Implementación Mixta',
    estado: 'VIABLE',
    estadoColor: ACCENT,
    van:  { valor: '$1.792,6M', color: ACCENT },
    tir:  { valor: '71,03%',   color: ACCENT },
    pri:  { valor: '2a 0m 7d', color: ACCENT },
    color: ACCENT,
  },
  {
    id: 'Alt 2',
    nombre: 'Desarrollo Inhouse',
    estado: 'RECOMENDADA ★',
    estadoColor: INDIGO,
    van:  { valor: '$2.032,5M',  color: INDIGO },
    tir:  { valor: '100,24%',   color: INDIGO },
    pri:  { valor: '1a 5m 23d', color: INDIGO },
    color: INDIGO,
  },
  {
    id: 'Alt 3',
    nombre: 'Low-Code OutSystems/Mendix',
    estado: 'INVIABLE ✗',
    estadoColor: RED,
    van:  { valor: '-$8.284,2M',  color: RED },
    tir:  { valor: 'Sin solución', color: RED },
    pri:  { valor: 'No recupera', color: RED },
    color: RED,
  },
]

export default function F05Indicadores() {
  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10" style={{ backgroundColor: ACCENT }} />

      {/* Header */}
      <div className="pl-16 pr-8 pt-8 pb-4 shrink-0">
        <p className="font-body text-sm tracking-[0.25em] uppercase mb-1" style={{ color: ACCENT }}>
          Evaluación Económica
        </p>
        <h2 className="font-heading text-4xl font-bold" style={{ color: 'var(--text)' }}>
          Indicadores VAN · TIR · PRI
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-1 pl-16 pr-8 pb-8 gap-5 min-h-0">
        {ALTS.map(({ id, nombre, estado, estadoColor, van, tir, pri, color }) => (
          <div
            key={id}
            className="flex flex-col rounded-2xl border overflow-hidden flex-1"
            style={{
              borderColor: color,
              borderWidth: '2px',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            {/* Card header */}
            <div className="px-8 py-4 shrink-0" style={{ backgroundColor: `${color}18` }}>
              <p className="font-heading text-2xl font-bold mb-0.5" style={{ color }}>
                {id}
              </p>
              <p className="font-body text-base" style={{ color: 'var(--text-muted)' }}>
                {nombre}
              </p>
            </div>

            {/* Indicadores */}
            <div className="flex flex-col flex-1 min-h-0">
              {[
                { label: 'VAN', sub: 'Valor Actual Neto', ...van },
                { label: 'TIR', sub: 'Tasa Interna de Retorno', ...tir },
                { label: 'PRI', sub: 'Período de Recuperación', ...pri },
              ].map(({ label, sub, valor, color: vColor }) => (
                <div
                  key={label}
                  className="flex-1 flex flex-col justify-center px-8 py-3 border-b last:border-b-0"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <p className="font-body text-lg font-bold uppercase tracking-wider leading-none mb-0.5" style={{ color: 'var(--text)' }}>
                    {label}
                  </p>
                  <p className="font-body text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                    {sub}
                  </p>
                  <p
                    className="font-heading font-bold leading-none"
                    style={{ fontSize: 'clamp(32px, 4.5vw, 64px)', color: vColor }}
                  >
                    {valor}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer badge */}
            <div className="px-8 py-4 shrink-0 text-center" style={{ backgroundColor: `${estadoColor}22` }}>
              <span className="font-heading text-lg font-bold tracking-wide" style={{ color: estadoColor }}>
                {estado}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
