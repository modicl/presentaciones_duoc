import SlideLayout from '../../slides/SlideLayout'

const POINTS = [
  ['Front multietapa', 'Build con maven:3.9-eclipse-temurin-17 genera el sitio estático; el runtime nginx:1.27-alpine solo copia el resultado → la imagen final no lleva JDK ni Maven.'],
  ['Imágenes minimalistas', 'node:18-alpine (Backend JS) y python:3.11-slim (Backend Python); bases pequeñas y seguras.'],
  ['Usuario no-root', 'El Backend JS corre como USER node; cada contenedor expone solo su puerto (80, 8081, 8082).'],
  ['Buenas prácticas', '.dockerignore por componente, npm ci --omit=dev, pip --no-cache-dir y copia previa de dependencias para aprovechar la caché de capas.'],
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
