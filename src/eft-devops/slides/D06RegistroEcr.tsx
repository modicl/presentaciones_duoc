import SlideLayout from '../../slides/SlideLayout'

const POINTS = [
  ['Amazon ECR', 'Cada servicio publica su imagen en un repositorio dedicado; el registro es común a la cuenta y la variable ECR_REPOSITORY del pipeline elige el repo.'],
  ['Repos por componente', 'devops-ep3-front, devops-ep3-backjs y devops-ep3-backpy — uno por cada servicio contenerizado.'],
  ['Identificador único', 'Cada imagen lleva un identificador único de su versión exacta → permite saber qué versión se subió y volver a una anterior.'],
  ['Tag móvil', ':latest es siempre la última build → es lo que consume la task definition en el redeploy.'],
]

export default function D06RegistroEcr() {
  return (
    <SlideLayout
      label="Registro de imágenes · IE3"
      title="Publicación en Amazon ECR"
      stat="2"
      statLabel="etiquetas por imagen: versión + latest"
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
          devops-ep3-front:1c296d4
        </span>
        <span className="font-mono text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#FFB80022', color: '#FFB800' }}>
          devops-ep3-front:latest
        </span>
      </div>
    </SlideLayout>
  )
}
