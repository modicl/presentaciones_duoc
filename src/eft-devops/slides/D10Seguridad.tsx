import SlideLayout from '../../slides/SlideLayout'

const POINTS = [
  ['Secretos', 'GitHub Secrets para las credenciales AWS del CI; variables de runtime inyectadas en la task. Los .env nunca llegan a Git (.gitignore / .dockerignore).'],
  ['Mínimo privilegio', 'Solo ms-users tiene el SERVICE_ROLE de Supabase; el resto solo valida el JWT con la clave pública (JWKS). Tasks con el rol del lab.'],
  ['Puertos mínimos', 'Cada imagen expone un solo puerto; el Security Group abre únicamente el 80. Todo lo demás viaja por loopback.'],
  ['Hardening de imágenes', 'Bases alpine / slim, usuario no-root y build multietapa (sin toolchain en el runtime).'],
]

export default function D10Seguridad() {
  return (
    <SlideLayout
      label="Seguridad básica · Configuración y secretos"
      title="Secretos y endurecimiento"
      stat=":80"
      statLabel="único puerto expuesto"
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
