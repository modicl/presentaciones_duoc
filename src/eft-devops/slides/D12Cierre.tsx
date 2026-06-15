import duocLogo from '../../assets/Logo_DuocUC.svg'

const FLOW = ['Código', 'GitHub Actions', 'Amazon ECR', 'ECS Fargate', 'App en la nube']

export default function D12Cierre() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-10 py-10 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
          Cierre
        </p>
        <h2 className="font-heading text-5xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
          Un ciclo CI/CD cerrado
        </h2>

        {/* Flow */}
        <div className="flex items-center flex-wrap gap-2 mb-7">
          {FLOW.map((f, i) => (
            <div key={f} className="flex items-center gap-2">
              <span
                className="font-body text-sm px-3 py-1.5 rounded-lg border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
              >
                {f}
              </span>
              {i < FLOW.length - 1 && <span className="text-duoc-blue">→</span>}
            </div>
          ))}
        </div>

        <ul className="space-y-2.5 max-w-2xl">
          {[
            'Contenedores multietapa minimalistas y orquestación local con Docker Compose.',
            'Pipeline automatizado en GitHub Actions: build → push a ECR → deploy a ECS.',
            'ECS Fargate con escalado por demanda y observabilidad en CloudWatch.',
          ].map(t => (
            <li key={t} className="flex gap-3 font-body text-base" style={{ color: 'var(--text-muted)' }}>
              <span className="mt-0.5 shrink-0 text-duoc-yellow">✓</span>
              {t}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 mt-7">
          <div className="w-12 h-0.5 bg-duoc-blue" />
          <div className="w-6 h-0.5 bg-duoc-yellow" />
        </div>
        <p className="font-body text-sm mt-4" style={{ color: 'var(--text-dim)' }}>
          Repositorio público en GitHub · rama <span className="font-mono">aws-deploy</span> · README + informe técnico
        </p>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-6 px-10"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <img src={duocLogo} alt="Duoc UC" className="w-44 opacity-90" />
        <p className="font-heading text-3xl font-bold text-duoc-blue leading-none">¡Gracias!</p>
        <p className="font-body text-sm text-center" style={{ color: 'var(--text-dim)' }}>
          Defensa técnica · Preguntas
        </p>
      </div>
    </div>
  )
}
