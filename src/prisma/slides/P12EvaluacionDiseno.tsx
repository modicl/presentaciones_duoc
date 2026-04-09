// Slide cierre — Evaluación del diseño frente a los requerimientos

function ReqRow({
  req,
  status,
  note,
  color,
}: {
  req: string
  status: string
  note: string
  color: string
}) {
  return (
    <div
      className="rounded px-3 py-2 border flex gap-3 items-start"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <span
        className="font-body text-sm px-2 py-1 rounded shrink-0 font-bold mt-0.5"
        style={{ backgroundColor: color + '22', color }}
      >
        {status}
      </span>
      <div>
        <p className="font-body font-bold text-base" style={{ color: 'var(--text)' }}>{req}</p>
        <p className="font-body text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>{note}</p>
      </div>
    </div>
  )
}

export default function P12EvaluacionDiseno() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-10 py-8 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
          Evaluación del Diseño
        </p>
        <h2
          className="font-heading text-4xl font-bold leading-tight mb-4"
          style={{ color: 'var(--text)' }}
        >
          Requerimientos vs Arquitectura
        </h2>
        <div className="flex flex-col gap-2">
          <ReqRow req="RF-1: Gestión de Perfiles PACI" status="✓ Cumplido" color="#43B02A"
            note="PDF, DOCX y JSON. RDS cifrado en subred privada + S3 SSE." />
          <ReqRow req="RF-2: Sistema Multi-Agente" status="✓ Cumplido" color="#43B02A"
            note="4 agentes ADK. LoopAgent con máx. 3 iteraciones. Decreto N°170 validado." />
          <ReqRow req="RF-2.4: Edición en línea" status="⚠ Parcial" color="#FFB800"
            note="Docente puede regenerar pero no editar inline. Candidato a versión futura." />
          <ReqRow req="RNF-1: Resiliencia" status="✓ Cumplido" color="#43B02A"
            note="Circuit Breaker 3 estados + backoff exponencial + microservicios aislados." />
          <ReqRow req="RNF-2: Escalabilidad" status="✓ Cumplido" color="#43B02A"
            note="ECS Auto Scaling + Cloud Run escala a 0 + Stateless sin sincronización." />
          <ReqRow req="RNF-3: Seguridad y Cumplimiento" status="✓ Cumplido" color="#43B02A"
            note="Supabase JWT + API Gateway + cifrado TLS + Privacy by Design." />
          <ReqRow req="RNF-4: Eficiencia Operativa" status="✓ Cumplido" color="#43B02A"
            note="Sincrónico para navegación. Asíncrono para generación agéntica." />
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-4 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <div
          className="w-full rounded-lg p-4 border text-center"
          style={{ borderColor: '#43B02A44', backgroundColor: '#43B02A10' }}
        >
          <p className="font-heading text-5xl font-bold" style={{ color: '#43B02A' }}>7/8</p>
          <p className="font-body text-base mt-2" style={{ color: 'var(--text-muted)' }}>
            requerimientos cumplidos<br />al 100% en el diseño actual
          </p>
        </div>

        <div
          className="w-full rounded-lg p-3 border"
          style={{ borderColor: '#FFB80044', backgroundColor: '#FFB80010' }}
        >
          <p className="font-body text-sm uppercase tracking-widest mb-1 font-bold" style={{ color: '#FFB800' }}>
            ⚠ Limitación conocida
          </p>
          <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
            Edición inline (RF-2.4): docente edita externamente y reenvía. Editor integrado candidato a v2.
          </p>
        </div>

        <div
          className="w-full rounded-lg p-3 border text-center"
          style={{ borderColor: '#307FE244', backgroundColor: '#307FE210' }}
        >
          <p className="font-body text-sm" style={{ color: 'var(--text-label)' }}>
            La combinación de 4 patrones de arquitectura permite un sistema <span style={{ color: '#307FE2' }} className="font-bold">resiliente, escalable y ético</span> alineado al mandato del Decreto N°170
          </p>
        </div>
      </div>
    </div>
  )
}
