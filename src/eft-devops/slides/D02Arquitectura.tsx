import archImg from '../../assets/deployment_architecture_aws_ecs.png'

const POINTS = [
  ['Puerta única', 'El front (nginx) es el único componente público: sirve la SPA y proxea a los 6 backends.'],
  ['Loopback', 'Los 6 contenedores viven en una sola task de Fargate y se comunican por 127.0.0.1 (modo awsvpc).'],
  ['Database-per-service', 'Cada microservicio NestJS usa Prisma sobre PostgreSQL; se correlacionan por user_id de Supabase.'],
  ['Dependencias externas', 'Salida controlada hacia PostgreSQL (Aiven/Neon), Supabase Auth y Gemini API.'],
]

export default function D02Arquitectura() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column — narración */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-10 flex-[2] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
          Arquitectura de despliegue · IE1
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-6" style={{ color: 'var(--text)' }}>
          Seis microservicios, una puerta
        </h2>

        <ul className="space-y-3.5 max-w-md">
          {POINTS.map(([t, d]) => (
            <li key={t} className="flex gap-3 font-body" style={{ color: 'var(--text-muted)' }}>
              <span className="mt-1 shrink-0 text-duoc-blue">›</span>
              <span className="text-sm">
                <span className="font-bold" style={{ color: 'var(--text)' }}>{t}.</span> {d}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right column — diagrama */}
      <div
        className="flex flex-col justify-center items-center flex-[3] border-l p-6"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <img
          src={archImg}
          alt="Arquitectura de despliegue en AWS ECS"
          className="max-h-full max-w-full object-contain rounded-lg"
        />
      </div>
    </div>
  )
}
