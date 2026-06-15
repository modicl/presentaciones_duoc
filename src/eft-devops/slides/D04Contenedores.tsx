import SlideLayout from '../../slides/SlideLayout'

const POINTS = [
  ['Multietapa', 'Etapa builder (compila TS / instala deps) y runtime slim → la imagen final no arrastra el toolchain de build.'],
  ['Imágenes minimalistas', 'node:20-alpine (NestJS), python:3.12-slim (workflow) y nginx:1.27-alpine (front).'],
  ['Usuario no-root', 'Los contenedores corren como USER node / appuser, no como root.'],
  ['Buenas prácticas', '.dockerignore, npm ci --omit=dev, prisma generate en build y variables de entorno inyectadas en runtime (no horneadas).'],
]

export default function D04Contenedores() {
  return (
    <SlideLayout
      label="Contenedores · IE2"
      title="Imágenes Docker multietapa"
      stat="2"
      statLabel="etapas: build → runtime"
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
