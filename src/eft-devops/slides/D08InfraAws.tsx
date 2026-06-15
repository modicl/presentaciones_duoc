import SlideLayout from '../../slides/SlideLayout'

const POINTS = [
  ['VPC y subred', 'Se usa la VPC default con subred pública; la task recibe IP pública para pull de ECR y salida a internet.'],
  ['Security Group', 'prisma-sg con inbound solo TCP 80. El outbound (stateful) queda abierto → los backends alcanzan Gemini, Supabase y S3.'],
  ['Plataforma', 'ECS con Fargate: sin servidores EC2 que administrar. Sin ALB; el front expone el :80 por IP pública.'],
  ['Servicios AWS', 'VPC · ECS · ECR · IAM · CloudWatch interactúan en una sola cuenta del Learner Lab.'],
]

export default function D08InfraAws() {
  return (
    <SlideLayout
      label="Infraestructura en la nube · IE4"
      title="Arquitectura en AWS"
      stat="Fargate"
      statLabel="sin servidores que gestionar"
      accentColor="#307FE2"
      statColor="#307FE2"
    >
      <ul className="space-y-3 max-w-2xl">
        {POINTS.map(([t, d]) => (
          <li key={t} className="flex gap-3 font-body" style={{ color: 'var(--text-muted)' }}>
            <span className="mt-1 shrink-0 text-duoc-blue">›</span>
            <span className="text-base">
              <span className="font-bold" style={{ color: 'var(--text)' }}>{t}.</span> {d}
            </span>
          </li>
        ))}
      </ul>
    </SlideLayout>
  )
}
