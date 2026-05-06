import SlideLayout from '../../slides/SlideLayout'

const RAZONES = [
  {
    num: '01',
    titulo: 'Control normativo total',
    desc: 'Conserva todas las ventajas del desarrollo In-House: cumplimiento directo de Leyes 19.628, 20.584 y 21.663 desde el diseño base.',
  },
  {
    num: '02',
    titulo: 'Gestión de riesgo por fases',
    desc: 'Distribuye la inversión en dos fases verificables, reduciendo la dependencia del presupuesto fiscal de un solo año — el principal riesgo institucional.',
  },
  {
    num: '03',
    titulo: 'Adaptabilidad al contexto RedNorte',
    desc: 'La dispersión geográfica, el perfil epidemiológico minero y la brecha digital rural se incorporan como requerimientos de primer orden en cada fase.',
  },
]

export default function E09Conclusiones() {
  return (
    <SlideLayout
      label="Conclusiones"
      title="Opción Recomendada"
      stat="74/84"
      statLabel="Incremental Priorizado"
      statColor="#43B02A"
      accentColor="#43B02A"
    >
      <div className="space-y-3 mb-4">
        <div
          className="rounded-lg px-5 py-3 border"
          style={{ backgroundColor: 'rgba(67,176,42,0.06)', borderColor: 'rgba(67,176,42,0.3)' }}
        >
          <p className="font-body text-sm uppercase tracking-widest mb-1" style={{ color: '#43B02A' }}>
            Opción 3 — Desarrollo Incremental Priorizado
          </p>
          <p className="font-body text-lg" style={{ color: 'var(--text)' }}>
            Fase 1 (meses 1–8): Motor de Priorización + Gestor de Reasignación en 4 hospitales.<br />
            Fase 2 (meses 9–12): Portal del Paciente + Analytics + 12 CESFAM.
          </p>
        </div>

        {RAZONES.map(({ num, titulo, desc }) => (
          <div
            key={num}
            className="flex gap-4 rounded-lg px-5 py-3 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              borderLeftColor: '#43B02A',
              borderLeftWidth: '3px',
            }}
          >
            <span className="shrink-0 font-heading text-xl font-bold opacity-30 w-8" style={{ color: '#43B02A' }}>{num}</span>
            <div>
              <p className="font-body text-lg font-bold mb-0.5" style={{ color: 'var(--text)' }}>{titulo}</p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-lg px-6 py-4 border"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'rgba(67,176,42,0.3)' }}
      >
        <p className="font-heading text-lg font-bold leading-relaxed italic" style={{ color: 'var(--text-muted)' }}>
          "El proyecto EDGDA es técnicamente factible, normativamente alineado y socialmente urgente. Su ejecución permitirá a RedNorte garantizar{' '}
          <span className="not-italic" style={{ color: '#43B02A' }}>atención oportuna, digna y transparente</span>{' '}
          a la población del norte de Chile."
        </p>
      </div>
    </SlideLayout>
  )
}
