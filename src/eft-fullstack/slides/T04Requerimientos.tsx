// Indicador 1 — Cómo responde la solución a los requerimientos del cliente

function ReqCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  return (
    <div className="rounded-lg px-4 py-3 border flex gap-3 items-start" style={{ backgroundColor: color + '10', borderColor: color + '40' }}>
      <span className="shrink-0 text-xl">{icon}</span>
      <div className="min-w-0">
        <p className="font-body font-bold text-sm" style={{ color: 'var(--text)' }}>{title}</p>
        <p className="font-body text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{desc}</p>
      </div>
    </div>
  )
}

export default function T04Requerimientos() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-2">
          Indicador 1 — Necesidad del cliente
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
          De la necesidad NEE al PACI
        </h2>
        <div className="flex flex-col gap-2.5 max-w-xl">
          <ReqCard icon="📋" color="#307FE2" title="Generar PACI para estudiantes con NEE"
            desc="Cumple Decretos Mineduc 170, 83 y 67; el plan se construye con supervisión docente (Human-in-the-Loop)." />
          <ReqCard icon="🤖" color="#9B59B6" title="Workflow IA multi-agente con checkpoints"
            desc="prisma_workflow encadena agentes con estado de sesión persistido en DynamoDB (fase, mensajes, datos HITL)." />
          <ReqCard icon="🏫" color="#1ABC9C" title="Multi-tenant por colegio"
            desc="colegioId recorre los 3 microservicios: cada establecimiento opera su propia data, aislada lógicamente." />
          <ReqCard icon="📄" color="#F39C12" title="Entregable DOCX descargable"
            desc="Desde el PACI + planificación se genera DOCX en S3; descarga vía URL prefirmada (900 s)." />
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-4 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <p className="font-body text-xs uppercase tracking-widest self-start" style={{ color: 'var(--text-dim)' }}>
          Flujo de generación
        </p>
        {[
          ['1', 'Docente carga insumos', 'Informe + antecedentes del estudiante'],
          ['2', 'Gates de compliance', 'D170/D83 + PII validados antes de gastar tokens'],
          ['3', 'Agentes generan el PACI', 'Gemini + ADK con checkpoints HITL'],
          ['4', 'Docente revisa y aprueba', 'Supervisión humana del plan'],
          ['5', 'Exporta DOCX', 'S3 + URL prefirmada para descarga'],
        ].map(([n, t, d]) => (
          <div key={n} className="w-full flex gap-3 items-start">
            <span className="font-heading font-bold text-sm shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#307FE222', color: '#307FE2' }}>{n}</span>
            <div className="min-w-0">
              <p className="font-body font-bold text-sm" style={{ color: 'var(--text)' }}>{t}</p>
              <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>{d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
