const GREEN = '#43B02A'
const ACCENT = '#307FE2'
const RED = '#E53E3E'

const INDICADORES = [
  {
    id: 'Alt 1',
    nombre: 'Mixta',
    status: 'VIABLE · SELECCIONADA',
    color: GREEN,
    van: { valor: '$2.386M', sub: 'VAN (TSD 5,5%)' },
    tir: { valor: '50,9%', sub: 'TIR' },
    pri: { valor: '2a 1m', sub: 'PRI' },
  },
  {
    id: 'Alt 2',
    nombre: 'Inhouse',
    status: 'VIABLE · ESTRATÉGICA',
    color: ACCENT,
    van: { valor: 'Superior', sub: 'VAN (TSD 5,5%)' },
    tir: { valor: '>50%', sub: 'TIR estimada' },
    pri: { valor: '<2a', sub: 'PRI estimado' },
  },
  {
    id: 'Alt 3',
    nombre: 'Low-Code',
    status: 'INVIABLE',
    color: RED,
    van: { valor: 'Negativo', sub: 'VAN (TSD 5,5%)' },
    tir: { valor: 'N/A', sub: 'TIR' },
    pri: { valor: '—', sub: 'No recupera' },
  },
]

export default function X11Indicadores() {
  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10" style={{ backgroundColor: GREEN }} />

      <div className="flex flex-col justify-center px-16 pt-8 pb-4">
        <p className="font-body text-sm tracking-[0.25em] uppercase mb-2" style={{ color: GREEN }}>
          Viabilidad Económica
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-4" style={{ color: 'var(--text)' }}>
          Indicadores VAN, TIR y PRI por Alternativa
        </h2>
      </div>

      <div className="flex gap-4 px-12 pb-6 flex-1 min-h-0">
        {INDICADORES.map(({ id, nombre, status, color, van, tir, pri }) => (
          <div
            key={id}
            className="flex-1 flex flex-col rounded-xl border overflow-hidden"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <div
              className="px-5 py-3"
              style={{ backgroundColor: `${color}15`, borderBottom: `2px solid ${color}` }}
            >
              <p className="font-heading text-lg font-bold mb-0.5" style={{ color }}>{id} — {nombre}</p>
            </div>

            <div className="flex flex-col justify-center flex-1 px-5 py-4 gap-5">
              <div className="text-center">
                <p className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--text-label)' }}>{van.sub}</p>
                <span
                  className="font-heading font-bold leading-none"
                  style={{ fontSize: 'clamp(24px, 3vw, 48px)', color: color }}
                >
                  {van.valor}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <p className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--text-label)' }}>{tir.sub}</p>
                  <p className="font-heading text-xl font-bold" style={{ color }}>{tir.valor}</p>
                </div>
                <div className="text-center">
                  <p className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--text-label)' }}>{pri.sub}</p>
                  <p className="font-heading text-xl font-bold" style={{ color }}>{pri.valor}</p>
                </div>
              </div>

              <div
                className="rounded-full px-4 py-1.5 text-center"
                style={{ backgroundColor: `${color}20` }}
              >
                <span className="font-body text-sm font-bold tracking-wider" style={{ color }}>
                  {status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mx-12 mb-4 rounded-lg px-5 py-3 border text-center"
        style={{ backgroundColor: `${GREEN}10`, borderColor: `${GREEN}30` }}
      >
        <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          <span style={{ color: GREEN, fontWeight: 700 }}>VAN $2.386M &gt; 0</span> — el proyecto crea valor para el Estado.
          {' '}<span style={{ color: GREEN, fontWeight: 700 }}>TIR 50,9% &gt; TSD 5,5%</span> — amplio margen sobre la tasa de exigencia.
          {' '}<span style={{ color: GREEN, fontWeight: 700 }}>PRI 2 años 1 mes &lt; 5 años</span> — recuperación dentro del horizonte de evaluación.
          {' '}La exención tributaria (Art. 40 DL 2.763) fortalece los flujos netos.
        </p>
      </div>
    </div>
  )
}
