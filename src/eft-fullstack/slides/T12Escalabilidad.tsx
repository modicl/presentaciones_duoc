// Indicador 12 — Escalabilidad y funcionalidad de microservicios

const CARDS = [
  ['#307FE2', '↔️', 'Escalado horizontal independiente', 'Cada servicio NestJS es stateless y escala por separado sobre PostgreSQL/Neon serverless.'],
  ['#9B59B6', '🗂️', 'Multi-schema sin clusters extra', 'Aislamiento por esquema en una sola instancia: costo contenido, evolución desacoplada.'],
  ['#F39C12', '♾️', 'DynamoDB con TTL automático', 'Escala a millones de sesiones; el TTL de 7 días evita una tabla que crece sin fin.'],
  ['#1ABC9C', '🪣', 'S3 elástico + URLs prefirmadas', 'Objetos PACI/DOCX sin límite; las descargas van directas sin pasar por la app.'],
]

export default function T12Escalabilidad() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-2">
          Indicador 12 — Escalabilidad y funcionalidad
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
          Escalar cada pieza por su cuenta
        </h2>
        <div className="grid grid-cols-2 gap-2.5 max-w-2xl">
          {CARDS.map(([color, icon, t, d]) => (
            <div key={t} className="rounded-lg px-3 py-2.5 border" style={{ backgroundColor: color + '0E', borderColor: color + '38' }}>
              <p className="font-body font-bold text-sm mb-1" style={{ color }}>{icon} {t}</p>
              <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-4 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <div className="w-full rounded-xl p-5 border text-center" style={{ borderColor: '#43B02A55', backgroundColor: '#43B02A12' }}>
          <p className="font-heading text-5xl font-bold" style={{ color: '#43B02A' }}>1322</p>
          <p className="font-body text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
            tests cubriendo auth, jobs, PACI,<br />panel y compliance normativo
          </p>
        </div>
        <p className="font-body text-xs uppercase tracking-widest self-start" style={{ color: 'var(--text-dim)' }}>
          Funcionalidad probada
        </p>
        <ul className="font-body text-xs space-y-1.5 self-start" style={{ color: 'var(--text-muted)' }}>
          <li>› Autenticación y roles (Supabase JWT)</li>
          <li>› Ciclo de jobs: upload, listado, descarga firmada</li>
          <li>› Generación de PACI con HITL</li>
          <li>› Dashboard multidominio (adminpanel)</li>
          <li>› Gates de compliance (D170 / D83 / PII / NEE)</li>
        </ul>
      </div>
    </div>
  )
}
