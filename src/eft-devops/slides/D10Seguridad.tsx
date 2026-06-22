import SlideLayout from '../../slides/SlideLayout'

const POINTS = [
  ['Security Groups en 3 capas', 'sg-alb (TCP 80 desde 0.0.0.0/0) → sg-ecs (80/8081/8082 solo desde sg-alb) → sg-db (3306 solo desde sg-ecs; 22 desde IP propia).'],
  ['Secretos', 'Credenciales AWS en GitHub Secrets; variables no sensibles como env de la task. Los .env nunca llegan a Git (.gitignore / .dockerignore).'],
  ['Escaneo y mínimo privilegio', 'Scan on push de ECR revisa CVEs en cada imagen; las tareas usan LabRole solo con permisos para ECR y CloudWatch.'],
  ['Hardening de imágenes', 'Bases alpine / slim, build multietapa (sin JDK ni Maven en runtime), usuario no-root y un solo puerto expuesto por contenedor.'],
]

export default function D10Seguridad() {
  return (
    <SlideLayout
      label="Seguridad básica · Configuración y secretos"
      title="Secretos y endurecimiento"
      stat="3"
      statLabel="capas de security groups"
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
