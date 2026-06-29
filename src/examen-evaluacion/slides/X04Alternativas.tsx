import SlideLayout from '../../slides/SlideLayout'

const ACCENT = '#307FE2'
const GREEN = '#43B02A'
const INDIGO = '#6366F1'
const RED = '#EF4444'

const ALTERNATIVAS = [
  {
    id: 'Alt 1',
    nombre: 'Mixta (MINSAL + FNDR)',
    color: GREEN,
    desc: 'Desarrollo combinado con financiamiento estatal. Módulos críticos propios (Java/Spring, HAPI FHIR) + soporte bajo código. 10-12 meses de implementación. Propiedad intelectual parcial.',
    tags: ['CAPEX $650M', 'VAN $2.386M', 'Seleccionada por matriz'],
  },
  {
    id: 'Alt 2',
    nombre: 'Inhouse (Desarrollo Propio)',
    color: INDIGO,
    desc: 'Construcción completa del ecosistema con equipo interno RedNorte (Java/Spring, React, HAPI FHIR, CI/CD). 12-14 meses. Propiedad intelectual total, activo replicable en otras redes MINSAL.',
    tags: ['CAPEX $800M', 'VAN superior', 'Propiedad intelectual total'],
  },
  {
    id: 'Alt 3',
    nombre: 'Low-Code (Plataforma Externa)',
    color: RED,
    desc: 'Uso de plataforma comercial (OutSystems/Mendix) con alto costo de licenciamiento recurrente. 6-8 meses de implementación. Propiedad intelectual nula. Costos fijos superan ingresos.',
    tags: ['CAPEX $450M', 'VAN negativo', 'Descartada por inviabilidad'],
  },
]

export default function X04Alternativas() {
  return (
    <SlideLayout
      label="Alternativas de Desarrollo"
      title="Tres Opciones Evaluadas para el Ecosistema EDGDA"
      stat="3"
      statLabel="alternativas analizadas"
      statColor={ACCENT}
      accentColor={ACCENT}
    >
      <div className="space-y-3">
        {ALTERNATIVAS.map(({ id, nombre, color, desc, tags }) => (
          <div
            key={id}
            className="flex gap-3 rounded-lg px-4 py-3 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              borderLeftColor: color,
              borderLeftWidth: '3px',
            }}
          >
            <div className="shrink-0 w-14 text-center">
              <p className="font-heading text-lg font-bold" style={{ color }}>{id}</p>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-body text-base font-bold mb-1" style={{ color: 'var(--text)' }}>{nombre}</p>
              <p className="font-body text-xs leading-relaxed mb-2" style={{ color: 'var(--text-muted)' }}>{desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map(t => (
                  <span
                    key={t}
                    className="font-body text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${color}22`, color }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
