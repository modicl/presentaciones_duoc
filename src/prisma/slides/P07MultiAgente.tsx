// Indicador 5 — Sistema Multi-Agente ADK

function AgentBox({
  label,
  role,
  color,
  type,
}: {
  label: string
  role: string
  color: string
  type: string
}) {
  return (
    <div
      className="rounded-lg p-3 border"
      style={{ backgroundColor: color + '14', borderColor: color + '44' }}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span
          className="font-body text-xs px-1.5 py-0.5 rounded font-bold"
          style={{ backgroundColor: color + '30', color }}
        >
          {type}
        </span>
        <p className="font-body font-bold text-sm" style={{ color }}>{label}</p>
      </div>
      <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>{role}</p>
    </div>
  )
}

export default function P07MultiAgente() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10" style={{ backgroundColor: '#1ABC9C' }} />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-10 py-10 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] uppercase mb-3" style={{ color: '#1ABC9C' }}>
          Indicador 5 — Pipeline Multi-Agente
        </p>
        <h2
          className="font-heading text-4xl font-bold leading-tight mb-2"
          style={{ color: 'var(--text)' }}
        >
          Google ADK · 4 Agentes
        </h2>
        <p className="font-body text-base mb-5" style={{ color: 'var(--text-muted)' }}>
          Google Cloud Run · Gemini 2.5 Flash Lite · Decreto N°170
        </p>

        {/* Etapa 1 */}
        <div
          className="rounded-lg p-4 border mb-4"
          style={{ borderColor: '#307FE244', backgroundColor: '#307FE20A' }}
        >
          <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: '#307FE2' }}>
            Etapa 1 — Sequential Agent (en secuencia)
          </p>
          <div className="grid grid-cols-2 gap-3">
            <AgentBox
              label="Analizador PACI"
              type="Sub-agente 1"
              color="#307FE2"
              role="Interpreta el perfil PACI: NEE, estrategias y objetivos de aprendizaje adaptados."
            />
            <AgentBox
              label="Adaptador de Contenido"
              type="Sub-agente 2"
              color="#9B59B6"
              role="Reescribe la planificación docente con los lineamientos del agente anterior y el prompt."
            />
          </div>
        </div>

        {/* Etapa 2 */}
        <div
          className="rounded-lg p-4 border"
          style={{ borderColor: '#F39C1244', backgroundColor: '#F39C120A' }}
        >
          <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: '#F39C12' }}>
            Etapa 2 — Loop Agent (hasta 3 iteraciones)
          </p>
          <div className="grid grid-cols-2 gap-3">
            <AgentBox
              label="Generador de Rúbrica"
              type="Sub-agente 3"
              color="#F39C12"
              role="Produce rúbrica de evaluación adaptada al perfil PACI del estudiante."
            />
            <AgentBox
              label="Crítico Evaluador"
              type="Sub-agente 4"
              color="#E24030"
              role="Verifica coherencia con PACI, pertinencia pedagógica y cumplimiento del Decreto N°170."
            />
          </div>
          <p className="font-body text-sm mt-3" style={{ color: 'var(--text-label)' }}>
            Si no es aceptable → retroalimenta al generador. Si alcanza 3 intentos → toma el mejor resultado.
          </p>
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-4 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <p className="font-body text-sm uppercase tracking-widest text-center font-bold" style={{ color: 'var(--text-dim)' }}>
          ¿Por qué ADK?
        </p>
        {[
          {
            tool: 'Google ADK ✓',
            reason: 'Control fino del LoopAgent evaluador. Integración nativa con Gemini y Cloud Run sin adaptadores extra.',
            color: '#1ABC9C',
          },
          {
            tool: 'LangChain ✗',
            reason: 'Mayor complejidad para flujos secuenciales + evaluación iterativa. Requiere adaptadores para Gemini.',
            color: '#E24030',
          },
          {
            tool: 'CrewAI ✗',
            reason: 'Modelo YAML reduce control sobre criterios de salida del evaluador, crítico para cumplir Decreto N°170.',
            color: '#E24030',
          },
        ].map(({ tool, reason, color }) => (
          <div
            key={tool}
            className="w-full rounded px-4 py-3 border"
            style={{ backgroundColor: color + '10', borderColor: color + '33' }}
          >
            <p className="font-body font-bold text-base" style={{ color }}>{tool}</p>
            <p className="font-body text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{reason}</p>
          </div>
        ))}
        <div
          className="w-full rounded px-4 py-3 border text-center mt-1"
          style={{ borderColor: '#1ABC9C33', backgroundColor: '#1ABC9C10' }}
        >
          <p className="font-body text-sm" style={{ color: 'var(--text-label)' }}>
            Ventana de contexto <span style={{ color: '#1ABC9C' }} className="font-bold">1M tokens</span><br />
            → PACI completo sin necesidad de RAG
          </p>
        </div>
      </div>
    </div>
  )
}
