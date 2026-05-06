import SlideLayout from '../../slides/SlideLayout'

const CRITERIOS = [
  {
    num: '01',
    ponderacion: 'Relevante',
    titulo: 'Costo sostenible dentro del presupuesto fiscal',
    detalle: '¿La inversión requerida por el módulo es manejable dentro del presupuesto fiscal disponible de RedNorte? M1 (Motor de Priorización) es el de mayor inversión en Fase 1, pero con ROI inmediatamente medible: reducción del tiempo de espera en especialidades críticas.',
    impacto: 'M3 requiere presupuesto de contingencia específico — su plazo es incierto y no debe comprometerse en Fase 1.',
    color: '#43B02A',
  },
  {
    num: '02',
    ponderacion: 'Neutral',
    titulo: 'Modelo OPEX/CAPEX sostenible a largo plazo',
    detalle: '¿Los costos de operación y mantenimiento son proyectables y sostenibles? M2 (Reasignación Multicanal) tiene bajo CAPEX de desarrollo pero costos recurrentes por mensaje SMS/IVR que deben proyectarse en el modelo OPEX anual del Servicio.',
    impacto: 'RedNorte carece de financiamiento plurianual garantizado — los módulos con OPEX recurrente son los más expuestos.',
    color: '#43B02A',
  },
  {
    num: '03',
    ponderacion: 'Marginal',
    titulo: 'Riesgo de dependencia de proveedores externos',
    detalle: '¿El módulo minimiza el vendor lock-in? Los módulos desarrollados con estándares abiertos (HL7 FHIR, APIs REST, herramientas BI open source) son migrables sin fricción económica. M3 en particular debe diseñarse sin dependencia de un único proveedor de integración.',
    impacto: 'Alta dependencia de un proveedor único haría inviable cualquier migración futura sin pérdida de datos.',
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
        {CRITERIOS.map(({ num, ponderacion, titulo, detalle, impacto, color }) => (
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
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-body text-xl font-bold" style={{ color: 'var(--text)' }}>{titulo}</p>
                  <span className="font-body text-xs px-2 py-0.5 rounded-full shrink-0" style={{ backgroundColor: `${color}22`, color }}>{ponderacion}</span>
                </div>
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
