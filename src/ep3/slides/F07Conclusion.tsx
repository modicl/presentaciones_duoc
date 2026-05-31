import SlideLayout from '../../slides/SlideLayout'

const ACCENT = '#6366F1'
const GREEN = '#10B981'

const PUNTOS = [
  {
    titulo: 'Capacidad financiera comprobada',
    desc: 'Ingresos FONASA $12.900M–$13.500M + presupuesto fiscal $1.600M cubren holgadamente cuotas de $177M/año. Margen positivo desde Año 1.',
    color: GREEN,
  },
  {
    titulo: 'Alt 2 Inhouse: máximo VAN',
    desc: 'VAN $2.032,5M CLP (+$239,9M vs Alt 1), TIR 100,24% (18,2× el umbral), PRI 1 año 5 meses 23 días.',
    color: ACCENT,
  },
  {
    titulo: 'Propiedad intelectual replicable',
    desc: 'Software propio de RedNorte → replicable en otras redes MINSAL sin costo marginal de licenciamiento. Multiplicador de retorno social.',
    color: '#F59E0B',
  },
  {
    titulo: 'Alt 3 Low-Code: descartada',
    desc: 'Costos fijos $16.670,6M/año superan ingresos. Déficit acumulado -$9.295M. Ninguna tasa de descuento la hace viable.',
    color: '#EF4444',
  },
  {
    titulo: 'Alt 1 Mixta: opción de repliegue',
    desc: 'VAN $1.792,6M, PRI 2 años. Si los plazos de desarrollo inhouse se vuelven inciertos, Alt 1 es la contingencia natural.',
    color: '#94A3B8',
  },
]

export default function F07Conclusion() {
  return (
    <SlideLayout
      label="Conclusión y Recomendación"
      title="Alternativa Recomendada: Inhouse"
      stat="$2.032M"
      statLabel="VAN · Alt 2 Desarrollo Inhouse"
      statColor={ACCENT}
      accentColor={ACCENT}
    >
      <div className="space-y-2.5 mb-3">
        {PUNTOS.map(({ titulo, desc, color }) => (
          <div
            key={titulo}
            className="flex gap-3 rounded-lg px-4 py-3 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              borderLeftColor: color,
              borderLeftWidth: '3px',
            }}
          >
            <div className="min-w-0">
              <p className="font-body text-base font-bold mb-0.5" style={{ color: 'var(--text)' }}>{titulo}</p>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-lg px-6 py-4 border"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: `${ACCENT}40` }}
      >
        <p className="font-heading text-base font-bold leading-relaxed italic" style={{ color: 'var(--text-muted)' }}>
          "Cuando VAN, TIR y PRI{' '}
          <span className="not-italic" style={{ color: ACCENT }}>convergen en la misma dirección</span>,
          {' '}la decisión es robusta frente a variaciones razonables en los supuestos."
        </p>
      </div>
    </SlideLayout>
  )
}
