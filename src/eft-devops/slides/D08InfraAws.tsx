import SlideLayout from '../../slides/SlideLayout'

const POINTS = [
  ['Cómputo', 'Amazon ECS con Fargate: un cluster por servicio (3 en total) en la VPC de us-east-1; subredes públicas con IP pública (Academy no tiene NAT).'],
  ['Balanceo', 'Un ALB internet-facing enruta por path; target groups de tipo IP (tg-front:80, tg-backjs:8081, tg-backpy:8082), obligatorios en Fargate.'],
  ['Base de datos', 'EC2 con MariaDB (Amazon Linux 2023) por IP privada; en Academy no hay permisos para RDS. Bases users_db y products_db.'],
  ['IAM e identidad', 'Rol LabRole como task execution role y task role (Academy no permite iam:CreateRole), con permisos mínimos para ECR y CloudWatch.'],
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
