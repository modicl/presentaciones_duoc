import SlideLayout from '../../slides/SlideLayout'

const POINTS = [
  ['Amazon ECR', 'Se eligió ECR (sobre Docker Hub) por integración nativa con IAM, ECS y CloudWatch en la misma cuenta.'],
  ['Repos por componente', 'prisma-front, prisma-ms-users, prisma-ms-docs, prisma-adminpanel, prisma-ms-perfil-alumno, prisma-workflow.'],
  ['Tag inmutable', ':<commit-SHA> apunta al commit exacto → trazabilidad y rollback.'],
  ['Tag móvil', ':latest es siempre la última build → es lo que consume ECS en el redeploy.'],
]

export default function D06RegistroEcr() {
  return (
    <SlideLayout
      label="Registro de imágenes · IE3"
      title="Publicación en Amazon ECR"
      stat="2"
      statLabel="tags por imagen: SHA + latest"
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
      <div className="flex flex-wrap gap-2 mt-5">
        <span className="font-mono text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#307FE222', color: '#307FE2' }}>
          prisma-front:1c296d4
        </span>
        <span className="font-mono text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#FFB80022', color: '#FFB800' }}>
          prisma-front:latest
        </span>
      </div>
    </SlideLayout>
  )
}
