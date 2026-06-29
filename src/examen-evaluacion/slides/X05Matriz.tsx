const ACCENT = '#307FE2'
const GREEN = '#43B02A'
const YELLOW = '#FFB800'
const RED = '#E53E3E'

const DIMENSIONES = [
  { dim: 'Técnica', peso: '30%', color: ACCENT, puntaje: '21.4 / 25.2', items: 'Escalabilidad, Seguridad, Arquitectura' },
  { dim: 'Organizacional', peso: '25%', color: YELLOW, puntaje: '17.8 / 21', items: 'RRHH, Cultura, Gobernanza' },
  { dim: 'Normativa/Legal', peso: '25%', color: RED, puntaje: '18.3 / 21', items: 'Ley 19.628, 20.584, 21.663' },
  { dim: 'Financiera', peso: '20%', color: GREEN, puntaje: '13.7 / 16.8', items: 'CAPEX, OPEX, Costo/Beneficio' },
]

const ALTS = [
  { id: 'Alt 1', nombre: 'Mixta', puntaje: '71.2', max: '84', color: GREEN, rank: 1, bar: 84.8 },
  { id: 'Alt 2', nombre: 'Inhouse', puntaje: '67.2', max: '84', color: ACCENT, rank: 2, bar: 80.0 },
  { id: 'Alt 3', nombre: 'Low-Code', puntaje: '59.2', max: '84', color: RED, rank: 3, bar: 70.5 },
]

export default function X05Matriz() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10" style={{ backgroundColor: ACCENT }} />

      <div className="flex flex-1 min-h-0">
        <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[3] min-w-0">
          <p className="font-body text-sm tracking-[0.25em] uppercase mb-3" style={{ color: GREEN }}>
            Selección por Matriz Multicriterio
          </p>
          <h2 className="font-heading text-5xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
            Alternativa 1 — Mixta Seleccionada
          </h2>

          <div className="space-y-2.5 mb-4">
            {ALTS.map(({ id, nombre, puntaje, max, color, rank, bar }) => (
              <div
                key={id}
                className="flex items-center gap-3 rounded-lg px-4 py-3 border"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  borderLeftColor: color,
                  borderLeftWidth: '3px',
                }}
              >
                <span className="font-heading text-2xl font-bold shrink-0 w-4 text-center" style={{ color }}>{rank}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between mb-1.5">
                    <span className="font-body text-base font-bold" style={{ color: 'var(--text)' }}>{id} — {nombre}</span>
                    <span className="font-heading text-base font-bold" style={{ color }}>{puntaje}</span>
                  </div>
                  <div className="h-2 rounded-full" style={{ backgroundColor: 'var(--border)' }}>
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{ width: `${bar}%`, backgroundColor: color }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-lg px-5 py-3 border"
            style={{ backgroundColor: `${GREEN}12`, borderColor: `${GREEN}40` }}
          >
            <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              La Alt 1 Mixta obtuvo <span style={{ color: GREEN, fontWeight: 700 }}>71,2 / 84 puntos</span> tras evaluar 12 criterios en 4 dimensiones. Todos los módulos superan los filtros de bloqueo (legislación + viabilidad técnica). Supera en <span style={{ color: GREEN, fontWeight: 700 }}>+4,0 puntos</span> a Alt 2 y en <span style={{ color: RED, fontWeight: 700 }}>+12,0 puntos</span> a Alt 3.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col justify-center flex-[2] border-l px-8 py-8 gap-3"
          style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
        >
          <div className="text-center mb-3">
            <span
              className="font-heading font-bold leading-none"
              style={{ fontSize: 'clamp(48px, 7vw, 88px)', color: GREEN }}
            >
              84
            </span>
            <p className="font-body text-sm uppercase tracking-widest mt-1" style={{ color: 'var(--text-dim)' }}>
              puntos máximos · 12 criterios
            </p>
          </div>

          {DIMENSIONES.map(({ dim, peso, color, puntaje, items }) => (
            <div
              key={dim}
              className="rounded-lg px-4 py-2.5 border"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
                borderLeftColor: color,
                borderLeftWidth: '3px',
              }}
            >
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="font-body text-sm font-bold" style={{ color }}>{dim}</span>
                <span className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>{puntaje}</span>
              </div>
              <p className="font-body text-xs" style={{ color: 'var(--text-dim)' }}>{items}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
