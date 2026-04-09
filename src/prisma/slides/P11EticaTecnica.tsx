// Indicador 8 — Evaluación ética y técnica del diseño

function EthicCard({
  icon,
  title,
  norm,
  items,
  color,
}: {
  icon: string
  title: string
  norm: string
  items: string[]
  color: string
}) {
  return (
    <div
      className="rounded-xl p-5 border flex gap-4"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: color + '55' }}
    >
      {/* Icon */}
      <div
        className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
        style={{ backgroundColor: color + '20', border: `1px solid ${color}44` }}
      >
        {icon}
      </div>
      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <p className="font-body font-bold text-base" style={{ color: 'var(--text)' }}>{title}</p>
          <span
            className="font-body text-xs px-1.5 py-0.5 rounded"
            style={{ backgroundColor: color + '22', color }}
          >
            {norm}
          </span>
        </div>
        <ul className="space-y-1">
          {items.map(item => (
            <li key={item} className="font-body text-sm flex gap-2" style={{ color: 'var(--text-muted)' }}>
              <span className="shrink-0" style={{ color }}>›</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function P11EticaTecnica() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10" style={{ backgroundColor: '#E24030' }} />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-10 py-10 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] uppercase mb-3" style={{ color: '#E24030' }}>
          Indicador 8 — Ética y Responsabilidad
        </p>
        <h2
          className="font-heading text-4xl font-bold leading-tight mb-5"
          style={{ color: 'var(--text)' }}
        >
          Software Responsable
        </h2>
        <div className="flex flex-col gap-3">
          <EthicCard
            icon="🔒"
            title="Privacidad por Diseño"
            norm="Ley N°19.628 · ISO 27001"
            color="#E24030"
            items={[
              'RDS en subred privada + cifrado en reposo y TLS en tránsito',
              'Minimización de datos · derecho a eliminar perfiles PACI',
            ]}
          />
          <EthicCard
            icon="⚖️"
            title="Equidad y Transparencia Algorítmica"
            norm="Decreto N°170"
            color="#9B59B6"
            items={[
              'El agente no reduce expectativas: valida contra Decreto N°170',
              'Tabla generation_results: trazabilidad de cada decisión del modelo',
              'Supervisión humana: el material es una "propuesta para revisar"',
            ]}
          />
          <EthicCard
            icon="♿"
            title="Inclusión y Accesibilidad"
            norm="WCAG 2.1 · DUA"
            color="#1ABC9C"
            items={[
              'SonarQube verifica WCAG 2.1 en cada build del frontend',
              'Material generado respeta Diseño Universal para el Aprendizaje',
            ]}
          />
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-4 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <p className="font-body text-sm uppercase tracking-widest text-center font-bold" style={{ color: 'var(--text-dim)' }}>
          Alineación normativa
        </p>
        {[
          { icon: '🇨🇱', label: 'Ley N°19.628', desc: 'Protección de datos Chile', color: '#E24030' },
          { icon: '🔐', label: 'ISO/IEC 27001', desc: 'Seguridad de la información', color: '#9B59B6' },
          { icon: '🛡️', label: 'ISO/IEC 27701', desc: 'Gestión de privacidad', color: '#9B59B6' },
          { icon: '♿', label: 'WCAG 2.1', desc: 'Accesibilidad web', color: '#1ABC9C' },
          { icon: '📋', label: 'Decreto N°170', desc: 'Criterios pedagógicos NEE', color: '#43B02A' },
        ].map(({ icon, label, desc, color }) => (
          <div
            key={label}
            className="w-full rounded-lg px-4 py-2.5 border flex items-center gap-3"
            style={{ backgroundColor: color + '10', borderColor: color + '33' }}
          >
            <span className="text-lg shrink-0">{icon}</span>
            <div className="flex-1 flex justify-between items-center gap-2">
              <span className="font-body font-bold text-sm" style={{ color }}>{label}</span>
              <span className="font-body text-xs text-right" style={{ color: 'var(--text-muted)' }}>{desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
