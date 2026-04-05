const GROUPS: { label: string; color: string; actors: { name: string; power: number; interest: number; strategy: string }[] }[] = [
  {
    label: 'Internos',
    color: '#307FE2',
    actors: [
      { name: 'Dirección del Servicio', power: 5, interest: 5, strategy: 'Valida hitos y reportes de impacto por fase.' },
      { name: 'Gremios (FENATS / CONFUSAM)', power: 5, interest: 5, strategy: 'Co-diseño obligatorio de flujos — clave para evitar resistencia.' },
    ],
  },
  {
    label: 'Conectados y Externos',
    color: '#FFB800',
    actors: [
      { name: 'MINSAL — Depto. TIC / SIDRA', power: 5, interest: 3, strategy: 'Cumplimiento HL7 FHIR y seguridad en cada hito certificable.' },
      { name: 'Proveedores Legacy IT', power: 5, interest: 3, strategy: 'SLAs estrictos con penalizaciones por incumplimiento.' },
      { name: 'Agrupaciones de Pacientes', power: 3, interest: 5, strategy: 'Portal con criterios de priorización transparentes.' },
    ],
  },
]

function Dots({ value, color }: { value: number; color: string }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: i < value ? color : 'var(--border)' }} />
      ))}
    </div>
  )
}

export default function Slide08Stakeholders() {
  return (
    <div
      className="relative w-full h-full flex flex-col justify-center px-16 py-10 overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-duoc-blue" />

      <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
        Interesados
      </p>
      <h2 className="font-heading text-5xl font-bold mb-2" style={{ color: 'var(--text)' }}>
        Stakeholders Clave
      </h2>
      <p className="font-body text-base mb-5" style={{ color: 'var(--text-dim)' }}>
        <strong style={{ color: 'var(--text-label)' }}>P</strong> = Poder (1–5) &nbsp;·&nbsp;
        <strong style={{ color: 'var(--text-label)' }}>I</strong> = Interés (1–5)
      </p>

      <div className="grid grid-cols-2 gap-5">
        {GROUPS.map(({ label, color, actors }) => (
          <div key={label} className="flex flex-col gap-3">
            <p className="font-body text-sm font-bold uppercase tracking-widest" style={{ color }}>{label}</p>
            {actors.map(({ name, power, interest, strategy }) => (
              <div
                key={name}
                className="rounded-lg px-4 py-3 border flex gap-4 items-center"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', borderLeftColor: color, borderLeftWidth: '3px' }}
              >
                <div className="flex-1 min-w-0">
                  <p className="font-body text-base font-bold leading-tight" style={{ color: 'var(--text)' }}>{name}</p>
                  <p className="font-body text-base mt-0.5" style={{ color: 'var(--text-label)' }}>{strategy}</p>
                </div>
                <div className="shrink-0 flex gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="font-body text-sm font-bold" style={{ color: 'var(--text-dim)' }}>P</span>
                    <Dots value={power} color={color} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-body text-sm font-bold" style={{ color: 'var(--text-dim)' }}>I</span>
                    <Dots value={interest} color={color} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
