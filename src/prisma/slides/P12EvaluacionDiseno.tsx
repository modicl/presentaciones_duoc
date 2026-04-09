// Slide cierre — Evaluación del diseño frente a todos los RF y RNF del informe actualizado

function ReqGroup({
  id,
  name,
  status,
  note,
  color,
}: {
  id: string
  name: string
  status: '✓' | '⚠'
  note: string
  color: string
}) {
  const isPartial = status === '⚠'
  return (
    <div
      className="rounded-lg px-3 py-2 border flex items-start gap-3"
      style={{
        backgroundColor: isPartial ? '#FFB80010' : color + '0C',
        borderColor: isPartial ? '#FFB80044' : color + '44',
      }}
    >
      <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
        <span
          className="font-body font-bold text-xs px-1.5 py-0.5 rounded"
          style={{ backgroundColor: color + '22', color }}
        >
          {id}
        </span>
        <span
          className="font-body font-bold text-sm"
          style={{ color: isPartial ? '#FFB800' : '#43B02A' }}
        >
          {status}
        </span>
      </div>
      <div className="min-w-0">
        <p className="font-body font-bold text-sm leading-tight" style={{ color: 'var(--text)' }}>{name}</p>
        <p className="font-body text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{note}</p>
      </div>
    </div>
  )
}

function LimitCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div
      className="rounded-lg px-3 py-2.5 border flex gap-2.5 items-start"
      style={{ backgroundColor: '#FFB80010', borderColor: '#FFB80033' }}
    >
      <span className="shrink-0 text-base">{icon}</span>
      <div>
        <p className="font-body font-bold text-sm" style={{ color: '#FFB800' }}>{title}</p>
        <p className="font-body text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{desc}</p>
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
      <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-2">
          Evaluación del Diseño
        </p>
        <h2
          className="font-heading text-4xl font-bold leading-tight mb-4"
          style={{ color: 'var(--text)' }}
        >
          RF y RNF vs Arquitectura
        </h2>

        {/* RF */}
        <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: '#307FE2' }}>
          Requerimientos Funcionales
        </p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <ReqGroup id="RF-1" color="#307FE2" status="✓" name="Gestión de Perfiles PACI"
            note="PDF, DOCX y JSON. RDS cifrado + S3 SSE." />
          <ReqGroup id="RF-2" color="#307FE2" status="⚠" name="Sistema Multi-Agente"
            note="✓ Cumplido — excepto RF-2.4: edición inline pendiente." />
          <ReqGroup id="RF-3" color="#307FE2" status="✓" name="Interfaces de Usuario"
            note="Portal Profesor + Panel Admin en React/S3." />
          <ReqGroup id="RF-4" color="#307FE2" status="✓" name="Seguimiento del Proceso"
            note="Polling /jobs/:id + historial + notificación de resultado." />
          <ReqGroup id="RF-5" color="#307FE2" status="✓" name="Gestión de Materiales"
            note="Descarga URL firmada + reutilización de perfiles PACI." />
        </div>

        {/* RNF */}
        <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: '#43B02A' }}>
          Requerimientos No Funcionales
        </p>
        <div className="grid grid-cols-2 gap-2">
          <ReqGroup id="RNF-1" color="#43B02A" status="✓" name="Resiliencia"
            note="Circuit Breaker + aislamiento microservicios + backoff." />
          <ReqGroup id="RNF-2" color="#43B02A" status="✓" name="Escalabilidad"
            note="ECS Auto Scaling + Cloud Run a 0 + Stateless." />
          <ReqGroup id="RNF-3" color="#43B02A" status="✓" name="Seguridad"
            note="Supabase JWT + API Gateway + cifrado TLS + Ley N°19.628." />
          <ReqGroup id="RNF-4" color="#43B02A" status="✓" name="Eficiencia Operativa"
            note="Sincrónico para navegación · asíncrono para generación." />
          <ReqGroup id="RNF-5" color="#43B02A" status="✓" name="Usabilidad"
            note="≤5 interacciones desde login · WCAG 2.1 AA · mensajes pedagógicos." />
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-4 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        {/* Stat */}
        <div
          className="w-full rounded-xl p-4 border text-center"
          style={{ borderColor: '#43B02A55', backgroundColor: '#43B02A12' }}
        >
          <p className="font-heading text-5xl font-bold" style={{ color: '#43B02A' }}>9/10</p>
          <p className="font-body text-base mt-1" style={{ color: 'var(--text-muted)' }}>
            grupos de requerimientos<br />cumplidos al 100%
          </p>
          <p className="font-body text-xs mt-1" style={{ color: 'var(--text-dim)' }}>
            RF-2 cumplido parcialmente (RF-2.4)
          </p>
        </div>

        {/* Limitaciones */}
        <p className="font-body text-xs uppercase tracking-widest font-bold self-start" style={{ color: '#FFB800' }}>
          ⚠ Limitaciones identificadas
        </p>
        <div className="w-full flex flex-col gap-2">
          <LimitCard
            icon="✏️"
            title="Edición inline (RF-2.4)"
            desc="El docente edita externamente y reenvía. Editor integrado candidato a v2."
          />
          <LimitCard
            icon="🔭"
            title="Observabilidad distribuida"
            desc="Sin trazas end-to-end. AWS X-Ray identificaría cuellos de botella NestJS→Lambda."
          />
          <LimitCard
            icon="⏱️"
            title="Timeout Lambda 270 s"
            desc="Perfiles PACI complejos podrían superarlo. Solución futura: webhook de Cloud Run."
          />
        </div>
      </div>
    </div>
  )
}
