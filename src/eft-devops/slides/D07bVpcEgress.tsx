const POINTS = [
  ['VPC en us-east-1', 'Las tareas Fargate corren en subredes públicas con IP pública habilitada dentro de la VPC del proyecto.'],
  ['Sin NAT Gateway', 'AWS Academy no provee NAT, por lo que la IP pública es la vía para que Fargate descargue la imagen y envíe logs.'],
  ['Seguridad por SG', 'La protección efectiva la dan los security groups, no la ausencia de IP pública: el ingreso queda restringido al ALB.'],
]

const EGRESS = [
  { t: 'Amazon ECR', d: 'pull de la imagen del contenedor al iniciar la tarea', c: '#307FE2' },
  { t: 'CloudWatch Logs', d: 'envío de logs de la aplicación vía driver awslogs', c: '#FFB800' },
  { t: 'EC2 · MariaDB', d: 'conexión a la BD por IP privada dentro de la VPC', c: '#43B02A' },
]

export default function D07bVpcEgress() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column — contexto */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-10 flex-[1.6] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
          Infraestructura en la nube · IE4
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-6" style={{ color: 'var(--text)' }}>
          VPC con egress externo
        </h2>
        <ul className="space-y-3 max-w-sm">
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

      {/* Right column — destinos de salida */}
      <div
        className="flex flex-col justify-center flex-[2] border-l p-10 gap-4"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <p className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--text-dim)' }}>
          Salida de las tareas Fargate
        </p>
        {EGRESS.map(({ t, d, c }) => (
          <div
            key={t}
            className="rounded-xl px-5 py-4 border"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', borderLeftColor: c, borderLeftWidth: '4px' }}
          >
            <p className="font-heading font-bold text-lg" style={{ color: c }}>{t}</p>
            <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>{d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
