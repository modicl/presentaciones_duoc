import duocLogo from '../../assets/Logo_DuocUC.svg'

export default function D01Portada() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-10 py-10 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
          ISY1101 — Introducción a Herramientas DevOps
        </p>
        <h2
          className="font-heading text-5xl font-bold leading-tight mb-4"
          style={{ color: 'var(--text)' }}
        >
          CI/CD y Despliegue en la Nube
        </h2>
        <p className="font-body text-xl mb-6" style={{ color: 'var(--text-muted)' }}>
          Automatización del ciclo de integración y entrega continua de la
          plataforma <span className="font-bold text-duoc-blue">P.R.I.S.M.A.</span> sobre AWS
        </p>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['Docker', 'GitHub Actions', 'Amazon ECR', 'ECS Fargate', 'CloudWatch'].map(t => (
            <span
              key={t}
              className="font-body text-xs px-3 py-1 rounded-full border"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-label)' }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-duoc-blue" />
          <div className="w-6 h-0.5 bg-duoc-yellow" />
        </div>

        <div className="font-body space-y-2">
          <p className="font-bold text-base" style={{ color: 'var(--text-muted)' }}>Integrantes</p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-1.5 text-lg" style={{ color: 'var(--text-label)' }}>
            <span>Felipe Villarroel</span>
            <span>Javier Arancibia</span>
          </div>
          <p className="text-sm pt-2" style={{ color: 'var(--text-dim)' }}>
            Evaluación Final Transversal (EFT) &nbsp;·&nbsp; Docente: Javier Esteban Peña Reyes
          </p>
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-6 px-10"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <img src={duocLogo} alt="Duoc UC" className="w-48 opacity-90" />
        <div className="text-center">
          <p className="font-body text-sm uppercase tracking-[0.3em] mb-1" style={{ color: 'var(--text-dim)' }}>EFT</p>
          <p className="font-heading text-5xl font-bold text-duoc-blue leading-none">2026</p>
        </div>
      </div>
    </div>
  )
}
