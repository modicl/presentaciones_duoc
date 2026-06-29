import SlideLayout from '../../slides/SlideLayout'

const ACCENT = '#307FE2'
const GREEN = '#43B02A'
const AMBER = '#F59E0B'

const CAPEX_ITEMS = [
  { label: 'Infraestructura TI (Hardware)', valor: '$320M', color: ACCENT, pct: '18%' },
  { label: 'Intangibles (Software, licencias)', valor: '$330M', color: GREEN, pct: '18%' },
  { label: 'Capital de Trabajo (KT)', valor: '$1.144,8M', color: AMBER, pct: '64%' },
]

const FINANCIAMIENTO = [
  { label: 'Inversión total', valor: '$1.794,8M' },
  { label: 'Préstamo FNDR (25% anual)', valor: '-$700M' },
  { label: 'Desembolso neto Año 0', valor: '$1.094,8M', destacado: true },
]

export default function X08CAPEX() {
  return (
    <SlideLayout
      label="Inversiones del Proyecto"
      title="Desglose CAPEX y Capital de Trabajo"
      stat="$1.794,8M"
      statLabel="inversión total · Período 0"
      statColor={ACCENT}
      accentColor={ACCENT}
    >
      <div className="space-y-3">
        <div>
          <p className="font-body text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--text-label)' }}>
            Componentes de la inversión
          </p>
          {CAPEX_ITEMS.map(({ label, valor, color, pct }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-lg px-4 py-2 mb-1.5 border"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
                borderLeftColor: color,
                borderLeftWidth: '3px',
              }}
            >
              <span className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>{label}</span>
              <span className="flex-1" />
              <span className="font-heading text-base font-bold" style={{ color }}>{valor}</span>
              <span
                className="font-body text-xs px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${color}22`, color }}
              >
                {pct}
              </span>
            </div>
          ))}
        </div>

        <div
          className="rounded-lg px-4 py-3 border"
          style={{ backgroundColor: `${ACCENT}12`, borderColor: `${ACCENT}40` }}
        >
          <p className="font-body text-xs uppercase tracking-wider mb-2" style={{ color: ACCENT }}>
            Financiamiento neto
          </p>
          {FINANCIAMIENTO.map(({ label, valor, destacado }) => (
            <div key={label} className="flex justify-between mb-1">
              <span
                className="font-body text-sm"
                style={{ color: destacado ? 'var(--text)' : 'var(--text-muted)', fontWeight: destacado ? 700 : 400 }}
              >
                {label}
              </span>
              <span
                className="font-heading text-sm font-bold"
                style={{ color: destacado ? GREEN : 'var(--text-muted)' }}
              >
                {valor}
              </span>
            </div>
          ))}
        </div>

        <div
          className="rounded-lg px-4 py-2.5 border"
          style={{ backgroundColor: `${GREEN}10`, borderColor: `${GREEN}30` }}
        >
          <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            El KT cubre <span style={{ color: GREEN, fontWeight: 700 }}>3 meses de costo operacional</span> ($1.144,8M ≈ 25% de la planilla anual de $13.738M). Se recupera íntegramente al final del horizonte junto con el valor residual del hardware ($32M).
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}
