import duocLogo from '../../assets/Logo_DuocUC.svg'

export default function E01Portada() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-10 py-10 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
          Escuela de Informática y Telecomunicaciones
        </p>
        <h2
          className="font-heading text-5xl font-bold leading-tight mb-6"
          style={{ color: 'var(--text)' }}
        >
          Evaluación de Alternativas<br />
          de Desarrollo de Software
        </h2>
        <p className="font-body text-xl mb-6" style={{ color: 'var(--text-muted)' }}>
          EDGDA — Ecosistema Digital de Gestión de Demanda Asistencial<br />
          Servicio Público de Salud RedNorte
        </p>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-duoc-blue" />
          <div className="w-6 h-0.5 bg-duoc-yellow" />
        </div>
        <div className="font-body space-y-3">
          <p className="font-bold text-base" style={{ color: 'var(--text-muted)' }}>Integrantes</p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-1.5 text-lg" style={{ color: 'var(--text-label)' }}>
            <span>Javier Arancibia</span>
            <span>Luciano Riveros</span>
            <span>Danilo Quiroz</span>
            <span>Felipe Villarroel</span>
          </div>
          <p className="text-sm pt-2" style={{ color: 'var(--text-dim)' }}>
            Docente: Andrés Santoro Del Campo
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
          <p className="font-heading text-5xl font-bold text-duoc-blue leading-none">EP2</p>
          <p className="font-body text-sm uppercase tracking-widest mt-2" style={{ color: 'var(--text-dim)' }}>
            Evaluación de Proyectos · 2026
          </p>
        </div>
      </div>
    </div>
  )
}
