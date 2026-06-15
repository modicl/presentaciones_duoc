import SlideLayout from '../../slides/SlideLayout'

const POINTS = [
  ['Logs del pipeline', 'Cada ejecución de GitHub Actions deja el log por paso: build, push a ECR (con su digest) y redeploy de ECS.'],
  ['Logs de la nube', 'Los contenedores envían sus logs a CloudWatch Logs mediante el driver awslogs de la task.'],
  ['Métricas básicas', 'CloudWatch expone CPU y memoria del servicio ECS — base del auto-scaling y evidencia de monitoreo.'],
  ['App funcional', 'Sistema accesible por la IP pública de la task: login, carga de PACI y flujo agéntico end-to-end.'],
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
