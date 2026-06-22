import SlideLayout from '../../slides/SlideLayout'

const POINTS = [
  ['Un comando', 'docker compose up --build levanta los tres servicios junto a la base de datos MariaDB para el entorno de desarrollo local.'],
  ['Red interna', 'Compose crea una red bridge compartida donde cada servicio es resoluble por su nombre (front, backjs, backpy, db).'],
  ['Config y persistencia', 'Las credenciales se pasan por variables de entorno y la base de datos persiste sus datos en un volumen.'],
  ['Paridad con prod', 'Las mismas imágenes que se construyen desde estos Dockerfile son las que se publican en ECR y corren en ECS Fargate.'],
]

export default function D05Compose() {
  return (
    <SlideLayout
      label="Contenedores · IE2"
      title="Orquestación local"
      stat="3+1"
      statLabel="servicios + base de datos"
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
      <div
        className="mt-5 inline-block rounded-lg px-4 py-2 border font-mono text-sm"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
      >
        <span className="text-duoc-blue">$</span> docker compose up --build
      </div>
    </SlideLayout>
  )
}
