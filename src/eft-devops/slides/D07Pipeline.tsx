function Stage({ icon, title, sub, color }: { icon: string; title: string; sub: string; color: string }) {
  return (
    <div
      className="w-full rounded-lg px-4 py-3 border flex items-center gap-3"
      style={{ backgroundColor: color + '14', borderColor: color + '55' }}
    >
      <span className="shrink-0 text-xl">{icon}</span>
      <div className="min-w-0">
        <p className="font-body font-bold text-sm leading-tight" style={{ color }}>{title}</p>
        <p className="font-body text-xs leading-tight" style={{ color: 'var(--text-muted)' }}>{sub}</p>
      </div>
    </div>
  )
}

const POINTS = [
  ['Disparador', 'push a la rama aws-deploy → workflow deploy-ecr.yml en un runner ubuntu-latest.'],
  ['Build & push', 'Imagen multietapa → Amazon ECR con doble tag :<sha> + :latest.'],
  ['Deploy', 'force-new-deployment: una task → un redeploy de los 6 contenedores con :latest.'],
  ['Secretos', 'Credenciales AWS del lab en GitHub Secrets (4 valores temporales, ~4 h).'],
]

export default function D07Pipeline() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column — narración */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-10 flex-[2] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
          CI/CD · GitHub Actions · IE3
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-6" style={{ color: 'var(--text)' }}>
          Pipeline automatizado de punta a punta
        </h2>

        <ul className="space-y-3.5 max-w-md">
          {POINTS.map(([t, d]) => (
            <li key={t} className="flex gap-3 font-body" style={{ color: 'var(--text-muted)' }}>
              <span className="mt-1 shrink-0 text-duoc-blue">›</span>
              <span className="text-sm">
                <span className="font-bold" style={{ color: 'var(--text)' }}>{t}.</span> {d}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right column — diagrama del pipeline */}
      <div
        className="flex flex-col justify-center items-center flex-[3] border-l p-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <p className="font-body text-xs uppercase tracking-widest mb-5 self-center" style={{ color: 'var(--text-dim)' }}>
          deploy-ecr.yml · runner ubuntu-latest
        </p>
        <div className="w-full max-w-sm flex flex-col items-center gap-2">
          <Stage icon="🚀" color="#307FE2" title="1 · Disparador"
            sub="push a la rama aws-deploy" />
          <span style={{ color: 'var(--text-dim)' }}>↓</span>
          <Stage icon="🐳" color="#FFB800" title="2 · Build & push"
            sub="imagen multietapa → Amazon ECR · tags :<sha> + :latest" />
          <span style={{ color: 'var(--text-dim)' }}>↓</span>
          <Stage icon="♻️" color="#43B02A" title="3 · Deploy"
            sub="force-new-deployment · redeploy de los 6 contenedores con :latest" />
          <span style={{ color: 'var(--text-dim)' }}>↓</span>
          <Stage icon="🔑" color="#E24030" title="Secretos"
            sub="credenciales AWS del lab en GitHub Secrets (4 valores, ~4 h)" />
        </div>
      </div>
    </div>
  )
}
