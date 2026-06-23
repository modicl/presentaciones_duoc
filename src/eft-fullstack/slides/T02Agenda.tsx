const EJES = [
  ['01', 'Arquitectura de microservicios', '6 servicios NestJS + motor IA + SPA · persistencia políglota', '#307FE2'],
  ['02', 'Backend y Frontend', 'Decisiones, aciertos y dificultades (retrospectiva)', '#FFB800'],
  ['03', 'Patrones de diseño', 'BFF · Repository · DI · Guard · Chain of Responsibility', '#E24030'],
  ['04', 'Estrategia de branching', 'Trunk-based + feature branches + CI bloqueante', '#9B59B6'],
  ['05', 'Integración back ↔ front ↔ datos', 'BFF, propagación JWT y coordinación PG · DynamoDB · S3', '#1ABC9C'],
  ['06', 'Pruebas y calidad', '1322 unitarias · 40 funcionales · honestidad técnica', '#43B02A'],
]

export default function T02Agenda() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-10 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
          Agenda · 15 minutos
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-6" style={{ color: 'var(--text)' }}>
          Seis ejes de la defensa
        </h2>
        <div className="grid grid-cols-2 gap-2.5">
          {EJES.map(([num, t, d, color]) => (
            <div
              key={num}
              className="rounded-lg px-3 py-2.5 border flex gap-3 items-start"
              style={{ backgroundColor: color + '12', borderColor: color + '40' }}
            >
              <span className="font-heading font-bold text-lg shrink-0" style={{ color }}>{num}</span>
              <div className="min-w-0">
                <p className="font-body font-bold text-sm leading-tight" style={{ color: 'var(--text)' }}>{t}</p>
                <p className="font-body text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-5 px-10"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <div className="w-full rounded-xl p-5 border text-center" style={{ borderColor: '#307FE255', backgroundColor: '#307FE212' }}>
          <p className="font-heading text-5xl font-bold text-duoc-blue leading-none">13</p>
          <p className="font-body text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
            indicadores de rúbrica<br />cubiertos (Informe 30% + Defensa 70%)
          </p>
        </div>
        <div className="w-full rounded-xl p-5 border text-center" style={{ borderColor: '#FFB80055', backgroundColor: '#FFB80012' }}>
          <p className="font-heading text-3xl font-bold leading-none" style={{ color: '#FFB800' }}>HITL</p>
          <p className="font-body text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
            Human-in-the-Loop: el docente supervisa cada PACI generado por la IA
          </p>
        </div>
        <p className="font-body text-xs text-center" style={{ color: 'var(--text-dim)' }}>
          Espacio de preguntas individuales al final
        </p>
      </div>
    </div>
  )
}
