// Indicador 5 — Diagrama de componentes: 6 capas (sin BFF)
import diagramaArq from '../../assets/prisma_architecture_diagram_v2.svg'

function Layer({
  num,
  name,
  components,
  color,
}: {
  num: string
  name: string
  components: string[]
  color: string
}) {
  return (
    <div
      className="rounded px-3 py-2 border flex items-center gap-3"
      style={{ backgroundColor: color + '12', borderColor: color + '40' }}
    >
      <span
        className="font-heading font-bold text-sm shrink-0 w-6 text-center"
        style={{ color }}
      >
        {num}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-body font-bold text-xs mb-0.5" style={{ color }}>{name}</p>
        <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
          {components.join(' · ')}
        </p>
      </div>
    </div>
  )
}

export default function P05DiagramaArquitectura() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
          Indicador 5 — Vista de Componentes
        </p>
        <h2
          className="font-heading text-4xl font-bold leading-tight mb-4"
          style={{ color: 'var(--text)' }}
        >
          Arquitectura en 6 Capas
        </h2>
        <div className="flex flex-col gap-2">
          <Layer num="1" color="#307FE2" name="Clientes (Frontend)" components={['Portal Profesor · React', 'Panel Admin · React', 'UI-Lib compartida · S3']} />
          <Layer num="2" color="#FFB800" name="API Gateway" components={['Amazon API Gateway', 'Validación JWT · Rate limiting', 'Único punto de entrada']} />
          <Layer num="3" color="#E24030" name="Microservicios (ECS EC2)" components={['Usuarios (NestJS)', 'Formulario y Documentos (NestJS)', 'Perfil Alumno (NestJS) · Docker + ECR']} />
          <Layer num="4" color="#9B59B6" name="Comunicación Asíncrona" components={['S3 PUT trigger', 'AWS Lambda orquestador', 'Circuit Breaker (3 estados)']} />
          <Layer num="5" color="#1ABC9C" name="Sistema Multi-Agente" components={['Google Cloud Run · ADK', 'SequentialAgent + LoopAgent', 'Gemini 2.5 Flash Lite']} />
          <Layer num="6" color="#F39C12" name="Persistencia" components={['3× AWS RDS PostgreSQL', 'S3 uploads · S3 results', 'CloudWatch logs']} />
        </div>
      </div>

      {/* Right column — diagrama SVG */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l px-4 py-4 overflow-hidden"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <p className="font-body text-xs uppercase tracking-widest mb-3 shrink-0" style={{ color: 'var(--text-dim)' }}>
          Diagrama 1 — Vista de Componentes
        </p>
        <div className="flex-1 flex items-center justify-center min-h-0 w-full overflow-hidden">
          <img
            src={diagramaArq}
            alt="Diagrama Vista de Componentes"
            className="w-full h-full object-contain"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}
