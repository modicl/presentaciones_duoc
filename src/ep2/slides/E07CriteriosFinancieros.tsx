import SlideLayout from '../../slides/SlideLayout'

const CRITERIOS = [
  {
    num: '01',
    titulo: 'Modelo de Inversión — CAPEX vs OPEX',
    detalle: 'Las opciones in-house concentran el gasto inicial (CAPEX alto) con costos operativos predecibles. Las opciones SaaS distribuyen el gasto en el tiempo (OPEX) pero generan costos recurrentes permanentes.',
    impacto: 'In-House: mayor CAPEX año 1. SaaS: menor CAPEX, mayor OPEX perpetuo.',
    color: '#43B02A',
  },
  {
    num: '02',
    titulo: 'Dependencia del Ciclo Presupuestario Fiscal',
    detalle: 'RedNorte carece de financiamiento plurianual garantizado. La ausencia de presupuesto para la Fase 2 puede dejar la Fase 1 incompleta e inoperante. Riesgo institucional, no solo financiero.',
    impacto: 'Opciones incrementales y de consorcio mitigan este riesgo mejor que el desarrollo total en año 1.',
    color: '#43B02A',
  },
  {
    num: '03',
    titulo: 'Riesgo de Vendor Lock-in',
    detalle: 'La dependencia de un proveedor externo expone al proyecto a cambios unilaterales de precio, condiciones de servicio o discontinuación de la plataforma sin posibilidad de migración económica.',
    impacto: 'SaaS: riesgo máximo. Open Source e In-House: riesgo nulo. Consorcio: riesgo bajo.',
    color: '#43B02A',
  },
]

export default function E07CriteriosFinancieros() {
  return (
    <SlideLayout
      label="Factibilidad Financiera"
      title="Criterios Financieros"
      stat="3"
      statLabel="criterios financieros evaluados"
      accentColor="#43B02A"
      statColor="#43B02A"
    >
      <div className="space-y-4">
        {CRITERIOS.map(({ num, titulo, detalle, impacto, color }) => (
          <div
            key={num}
            className="rounded-lg px-5 py-4 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              borderLeftColor: color,
              borderLeftWidth: '3px',
            }}
          >
            <div className="flex gap-4">
              <span className="shrink-0 font-heading text-xl font-bold opacity-30 w-8" style={{ color }}>{num}</span>
              <div>
                <p className="font-body text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>{titulo}</p>
                <p className="font-body text-lg leading-relaxed mb-2" style={{ color: 'var(--text-muted)' }}>{detalle}</p>
                <p className="font-body text-base font-bold" style={{ color }}>
                  → {impacto}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
