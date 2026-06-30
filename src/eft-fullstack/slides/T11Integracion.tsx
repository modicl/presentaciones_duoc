// Indicador 5 — Integración backend ↔ frontend ↔ base de datos
import seqDiagram from '../../assets/diagrama-secuencia-job-paci.png'
import legendJob from '../../assets/leyenda-evidencia-job-paci.png'

export default function T11Integracion() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      <div className="flex flex-col h-full w-full pl-16 pr-10 py-6 min-h-0">
        {/* Header */}
        <div className="shrink-0 mb-3">
          <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-1.5">
            Indicador 5 — Integración
          </p>
          <div className="flex items-baseline gap-4 flex-wrap">
            <h2 className="font-heading text-3xl font-bold leading-tight" style={{ color: 'var(--text)' }}>
              Cohesión entre capas
            </h2>
            <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
              Subida de un Job PACI coordina <b>PostgreSQL → DynamoDB → S3</b>, con el <b>BFF ↔ ms-docs</b> propagando el JWT y un camino de error controlado.
            </p>
          </div>
        </div>

        {/* Diagrama de secuencia — protagonista: muestra la cohesión de extremo a extremo */}
        <div className="flex-1 min-h-0 flex items-center justify-center">
          <img
            src={seqDiagram}
            alt="Diagrama de secuencia — Subida de Job PACI: Frontend → BFF → ms-docs → PostgreSQL → DynamoDB → S3 → Lambda, con ramas de éxito (201) y error (502)"
            className="max-h-full max-w-full object-contain rounded-lg border"
            style={{ backgroundColor: '#ffffff', borderColor: 'var(--border)' }}
          />
        </div>

        {/* Leyenda + evidencia en código — complementa el diagrama */}
        <div className="shrink-0 mt-3 flex items-center justify-center">
          <img
            src={legendJob}
            alt="Leyenda y evidencia en código — Subida de Job PACI: llamada síncrona, retorno, fragmento alt y archivos del repositorio que respaldan cada paso"
            className="max-h-[150px] max-w-full object-contain rounded-lg border"
            style={{ backgroundColor: '#ffffff', borderColor: 'var(--border)' }}
          />
        </div>
      </div>
    </div>
  )
}
