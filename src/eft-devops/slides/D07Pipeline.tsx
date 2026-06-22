const POINTS = [
  ['Disparador', 'push a las ramas main o aws (y workflow_dispatch manual) lanza deploy.yml en un runner ubuntu-latest.'],
  ['Test como compuerta', 'Las pruebas se ejecutan antes de construir la imagen; si fallan, el pipeline se detiene y no se publica nada roto.'],
  ['Build & push', 'Imagen multietapa → Amazon ECR con doble tag :<sha> + :latest.'],
  ['Deploy', 'Actualiza la task definition y fuerza un nuevo despliegue del servicio en ECS para tomar la imagen recién publicada.'],
]

const STAGES = [
  ['1', 'Checkout', 'descarga el código'],
  ['2', 'Test', 'frena ante un fallo'],
  ['3', 'AWS creds', 'desde GitHub Secrets'],
  ['4', 'Login ECR', 'docker login temporal'],
  ['5', 'Build & push', ':<sha> + :latest'],
  ['6', 'Deploy ECS', 'force-new-deployment'],
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

      {/* Right column — etapas del pipeline */}
      <div
        className="flex flex-col justify-center flex-[3] border-l p-10 gap-3"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-dim)' }}>
          .github/workflows/deploy.yml
        </p>
        {STAGES.map(([n, t, d]) => (
          <div key={t} className="flex items-center gap-4">
            <div
              className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full font-heading font-bold text-sm"
              style={{ backgroundColor: '#307FE2', color: '#fff' }}
            >
              {n}
            </div>
            <div
              className="flex-1 rounded-lg px-4 py-2.5 border flex items-baseline justify-between gap-3"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <span className="font-heading font-bold text-base" style={{ color: 'var(--text)' }}>{t}</span>
              <span className="font-mono text-xs text-right" style={{ color: 'var(--text-dim)' }}>{d}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
