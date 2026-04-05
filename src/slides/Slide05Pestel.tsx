import SlideLayout from './SlideLayout'

const INSIGHTS = [
  {
    letter: 'P',
    dimension: 'Político',
    color: '#307FE2',
    headline: 'El MINSAL financia la transformación digital',
    desc: 'Fondos concursables activos para proyectos de salud digital — el entorno político impulsa, no frena.',
  },
  {
    letter: 'T',
    dimension: 'Tecnológico',
    color: '#307FE2',
    headline: 'HL7 FHIR es el estándar maduro disponible hoy',
    desc: 'La tecnología de integración ya existe. Solo falta aplicarla a los 42.000 registros de SIDRA.',
  },
  {
    letter: 'L',
    dimension: 'Legal',
    color: '#307FE2',
    headline: 'Las leyes ya nos obligan a actuar',
    desc: 'Ley 20.584 (transparencia de esperas) y Ley 19.628 (protección de datos) exigen cumplimiento inmediato.',
  },
]

const SUMMARY = [
  { letter: 'E', label: 'Económico', note: '12–18% ineficiencia recuperable · cloud OPEX escalable' },
  { letter: 'S', label: 'Social', note: 'Migración + envejecimiento aumentan demanda compleja' },
  { letter: 'E', label: 'Ecológico', note: 'Extremo climático y minero agrava morbilidad' },
]

export default function Slide05Pestel() {
  return (
    <SlideLayout
      label="Análisis del Macroentorno"
      title="PESTEL — 3 Hallazgos Clave"
      stat="✓"
      statLabel="el entorno nos impulsa"
      statColor="#43B02A"
    >
      <div className="space-y-3">
        {INSIGHTS.map(({ letter, dimension, color, headline, desc }) => (
          <div
            key={dimension}
            className="flex gap-4 rounded-lg px-5 py-4 border"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', borderLeftColor: color, borderLeftWidth: '3px' }}
          >
            <span className="w-9 h-9 rounded-full bg-duoc-blue flex items-center justify-center font-heading font-bold text-white text-base shrink-0">
              {letter}
            </span>
            <div>
              <p className="font-body text-lg font-bold mb-0.5" style={{ color: 'var(--text)' }}>{headline}</p>
              <p className="font-body text-lg" style={{ color: 'var(--text-label)' }}>{desc}</p>
            </div>
          </div>
        ))}

        <div
          className="rounded-lg px-5 py-3 border"
          style={{ backgroundColor: 'rgba(48,127,226,0.05)', borderColor: 'rgba(48,127,226,0.2)' }}
        >
          <p className="font-body text-xs text-duoc-blue uppercase tracking-widest mb-2">Otras dimensiones analizadas</p>
          <div className="flex gap-6 flex-wrap">
            {SUMMARY.map(({ letter, label, note }) => (
              <div key={label} className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-duoc-blue flex items-center justify-center font-heading font-bold text-white text-xs shrink-0 mt-0.5">
                  {letter}
                </span>
                <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text-label)' }}>{label}:</strong> {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
