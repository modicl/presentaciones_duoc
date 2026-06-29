import SlideLayout from '../../slides/SlideLayout'

const ACCENT = '#307FE2'
const GREEN = '#43B02A'
const AMBER = '#F59E0B'

const PUNTOS = [
  {
    titulo: 'Invertir en el proyecto EDGDA es viable y recomendado',
    desc: 'VAN positivo de $2.386M a TSD 5,5%. TIR de 50,9% supera ampliamente la tasa de exigencia social. PRI de 2 años 1 mes — dentro del horizonte de 5 años. La exención tributaria fortalece los flujos netos.',
    color: GREEN,
  },
  {
    titulo: 'Selección por matriz: Alt 1 Mixta (71,2/84 pts)',
    desc: 'La evaluación multicriterio en 4 dimensiones (técnica, organizacional, normativa, financiera) selecciona la alternativa Mixta como la más equilibrada. Combina licencias existentes con desarrollo a medida, reduciendo riesgo de implementación.',
    color: ACCENT,
  },
  {
    titulo: 'Riesgos mitigables con plan de contingencia',
    desc: 'Los 5 riesgos técnicos y legales identificados (interoperabilidad, ciberseguridad, Ley 20.584, Ley 19.628, escalabilidad) tienen contramedidas específicas. La certificación CENS y el cifrado de datos son acciones concretas desde la fase de diseño.',
    color: AMBER,
  },
  {
    titulo: 'Capital de trabajo y financiamiento asegurados',
    desc: 'KT de $1.144,8M cubre 3 meses de operación. Préstamo FNDR de $700M al 25% anual financiado con sistema francés. Inversión total $1.794,8M con desembolso neto de $1.094,8M en Año 0.',
    color: ACCENT,
  },
  {
    titulo: 'Alt 2 Inhouse: opción estratégica de largo plazo',
    desc: 'Si bien Alt 1 es la seleccionada en matriz, Alt 2 (Inhouse) ofrece propiedad intelectual total y es replicable en otras redes MINSAL sin costo marginal de licenciamiento. Evaluar como fase 2 cuando RedNorte consolide capacidad técnica interna.',
    color: ACCENT,
  },
]

export default function X12Recomendacion() {
  return (
    <SlideLayout
      label="Recomendación Final"
      title="Invertir en el Proyecto EDGDA"
      stat="SÍ"
      statLabel="Recomendación del equipo consultor"
      statColor={GREEN}
      accentColor={GREEN}
    >
      <div className="space-y-2 mb-3">
        {PUNTOS.map(({ titulo, desc, color }) => (
          <div
            key={titulo}
            className="flex gap-3 rounded-lg px-4 py-2.5 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              borderLeftColor: color,
              borderLeftWidth: '3px',
            }}
          >
            <div className="min-w-0">
              <p className="font-body text-sm font-bold mb-0.5" style={{ color: 'var(--text)' }}>{titulo}</p>
              <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-lg px-5 py-3 border"
        style={{ backgroundColor: `${GREEN}12`, borderColor: `${GREEN}40` }}
      >
        <p className="font-heading text-sm font-bold leading-relaxed italic" style={{ color: 'var(--text-muted)' }}>
          "El ecosistema EDGDA es{' '}
          <span className="not-italic" style={{ color: GREEN }}>técnicamente factible, normativamente urgente y socialmente necesario</span>.
          {' '}Con VAN $2.386M, TIR 50,9% y PRI 2 años 1 mes, la decisión de invertir es{' '}
          <span className="not-italic" style={{ color: GREEN }}>robusta, fundamentada y alineada con el interés público</span>."
        </p>
      </div>
    </SlideLayout>
  )
}
