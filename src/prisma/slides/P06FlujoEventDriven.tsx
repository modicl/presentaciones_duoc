// Indicador 5 — Flujo Event-Driven: S3 → Lambda → Cloud Run
import flowDiagram from '../../assets/prisma_flow_diagram_v2.svg'

function Step({
  number,
  actor,
  action,
  detail,
  color,
}: {
  number: string
  actor: string
  action: string
  detail: string
  color: string
}) {
  return (
    <div className="flex gap-4 items-start">
      <div
        className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-base mt-0.5"
        style={{ backgroundColor: color + '22', color, border: `1px solid ${color}55` }}
      >
        {number}
      </div>
      <div>
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-body font-bold text-base" style={{ color }}>{actor}</span>
          <span className="font-body text-base" style={{ color: 'var(--text)' }}>{action}</span>
        </div>
        <p className="font-body text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>{detail}</p>
      </div>
    </div>
  )
}

export default function P06FlujoEventDriven() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10" style={{ backgroundColor: '#9B59B6' }} />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-10 py-10 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] uppercase mb-3" style={{ color: '#9B59B6' }}>
          Indicador 5 — Flujo Event-Driven
        </p>
        <h2
          className="font-heading text-4xl font-bold leading-tight mb-2"
          style={{ color: 'var(--text)' }}
        >
          S3 → Lambda → Cloud Run
        </h2>
        <p className="font-body text-base mb-5" style={{ color: 'var(--text-muted)' }}>
          Generación asíncrona: el docente no espera bloqueado
        </p>
        <div className="flex flex-col gap-4">
          <Step
            number="1" color="#307FE2"
            actor="MS Formulario/Docs"
            action="sube archivo a S3"
            detail="PDF, DOCX o JSON del formulario → bucket prisma-paci-uploads/{user_id}/{job_id}/"
          />
          <div className="w-0.5 h-3 ml-4" style={{ backgroundColor: 'var(--border)' }} />
          <Step
            number="2" color="#9B59B6"
            actor="S3 PUT trigger"
            action="activa Lambda orquestador"
            detail="Sin conexión abierta. Lambda detecta tipo → extrae texto / parsea JSON → actualiza job a processing"
          />
          <div className="w-0.5 h-3 ml-4" style={{ backgroundColor: 'var(--border)' }} />
          <Step
            number="3" color="#1ABC9C"
            actor="Lambda → Cloud Run"
            action="POST /generate (timeout 270s)"
            detail="SequentialAgent (PACI + Contenido) → LoopAgent (Rúbrica + Crítico). Máximo 3 iteraciones."
          />
          <div className="w-0.5 h-3 ml-4" style={{ backgroundColor: 'var(--border)' }} />
          <Step
            number="4" color="#F39C12"
            actor="ADK"
            action="escribe en S3 results directamente"
            detail="Evita límite de 6 MB de payload Lambda. Lambda actualiza job a done."
          />
          <div className="w-0.5 h-3 ml-4" style={{ backgroundColor: 'var(--border)' }} />
          <Step
            number="5" color="#43B02A"
            actor="Frontend polling"
            action="GET /jobs/:id detecta done"
            detail="URL firmada S3 con expiración de 15 min. Docente descarga material adaptado."
          />
        </div>
      </div>

      {/* Right column — flow diagram */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l px-4 py-4 overflow-hidden"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <p className="font-body text-xs uppercase tracking-widest mb-3 shrink-0" style={{ color: 'var(--text-dim)' }}>
          Diagrama 2 — Flujo del Sistema
        </p>
        <div className="flex-1 flex items-center justify-center min-h-0 w-full overflow-hidden">
          <img
            src={flowDiagram}
            alt="Diagrama Flujo del Sistema"
            className="w-full h-full object-contain"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}
