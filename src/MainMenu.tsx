import { useState, useEffect } from 'react'

export default function MainMenu() {
  const [light, setLight] = useState(false)

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center p-6${light ? ' theme-light' : ''}`}
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
    >
      <div className="max-w-2xl w-full text-center space-y-12">
        <div className="space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: 'var(--text)' }}>
            <span>Presentaciones</span>
          </h1>
          <p className="font-body text-lg max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Selecciona la presentación que deseas visualizar:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="?presentation=ev-proyectos"
            className="group relative flex flex-col items-start p-8 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl text-left"
            style={{ 
              backgroundColor: 'var(--bg-card)', 
              borderColor: 'var(--border)',
            }}
          >
            <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 font-bold group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h2 className="font-heading text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
              Evaluación de Proyectos
            </h2>
            <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
              Presentación EP1 - RedNorte
            </p>
            <div className="mt-6 flex items-center text-sm font-semibold text-blue-400 group-hover:gap-2 transition-all">
              Ver presentación <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </a>

          <a
            href="?presentation=ep2"
            className="group relative flex flex-col items-start p-8 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl text-left"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="h-12 w-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6 text-orange-400 font-bold group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
              </svg>
            </div>
            <h2 className="font-heading text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
              Evaluación de Proyectos
            </h2>
            <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
              Presentación EP2 - Alternativas de Desarrollo
            </p>
            <div className="mt-6 flex items-center text-sm font-semibold text-orange-400 group-hover:gap-2 transition-all">
              Ver presentación <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </a>

          <a
            href="?presentation=ep3"
            className="group relative flex flex-col items-start p-8 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl text-left"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-6 font-bold group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(16,185,129,0.2)', color: '#10B981' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h2 className="font-heading text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
              Evaluación de Proyectos
            </h2>
            <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
              Presentación EP3 - Evaluación Económica Financiera
            </p>
            <div className="mt-6 flex items-center text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: '#10B981' }}>
              Ver presentación <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </a>

          <a
            href="?presentation=prisma"
            className="group relative flex flex-col items-start p-8 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl text-left"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="h-12 w-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400 font-bold group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <h2 className="font-heading text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
              Fullstack III
            </h2>
            <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
              Presentación EP1 - P.R.I.S.M.A
            </p>
             <div className="mt-6 flex items-center text-sm font-semibold text-emerald-400 group-hover:gap-2 transition-all">
              Ver presentación <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </a>

          <a
            href="?presentation=eft-devops"
            className="group relative flex flex-col items-start p-8 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl text-left"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-6 font-bold group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(48,127,226,0.2)', color: '#307FE2' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
              </svg>
            </div>
            <h2 className="font-heading text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
              Introducción a Herramientas DevOps
            </h2>
            <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
              EFT - CI/CD y Despliegue en AWS (P.R.I.S.M.A.)
            </p>
            <div className="mt-6 flex items-center text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: '#307FE2' }}>
              Ver presentación <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute top-6 right-6">
        <button
          onClick={() => setLight(l => !l)}
          title={light ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
          className="flex items-center gap-1.5 font-body text-sm px-4 py-2 rounded-full border transition-colors select-none"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-label)' }}
        >
          {light ? '🌙 Oscuro' : '☀️ Claro'}
        </button>
      </div>

      <div className="absolute bottom-6 font-body text-sm select-none opacity-50" style={{ color: 'var(--text-dim)' }}>
        © {new Date().getFullYear()} Modi - Duoc UC
      </div>
    </div>
  )
}
