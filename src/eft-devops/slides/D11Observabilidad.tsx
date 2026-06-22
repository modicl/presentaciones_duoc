import SlideLayout from '../../slides/SlideLayout'

const POINTS = [
  ['Logs del pipeline', 'La pestaña Actions de GitHub deja el log por etapa: build, test, push a ECR y deploy a ECS terminan en verde.'],
  ['Logs de la nube', 'Las tareas envían sus logs a CloudWatch (/ecs/devops-front-ep3, -backjs-ep3, -backpy-ep3); ahí se confirma "Connected to MySQL database".'],
  ['Métricas', 'CPU y memoria de ECS (base del auto-scaling) y del ALB: RequestCount, TargetResponseTime y HealthyHostCount por target group.'],
  ['App funcional', 'Flujo end-to-end probado front → ALB → backend → MariaDB; los 3 servicios quedan healthy y se recuperan tras un redeploy.'],
]

export default function D11Observabilidad() {
  return (
    <SlideLayout
      label="Observabilidad y verificación · IE5"
      title="Logs, métricas y app viva"
      stat="CloudWatch"
      statLabel="logs + CPU / memoria"
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
