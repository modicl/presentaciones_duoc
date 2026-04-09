// Herramientas y justificación técnica — sin BFF / Next.js

// Logos inline SVG simplificados (paths de brand identities)
function ToolLogo({ name, bg, fg }: { name: string; bg: string; fg: string }) {
  // Docker
  if (name === 'docker') return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill={fg}>
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/>
    </svg>
  )
  // NestJS
  if (name === 'nestjs') return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill={fg}>
      <path d="M11.642.01C11.463.01 11.288.06 11.134.16L1.047 6.304a1.03 1.03 0 0 0-.507.89v11.612a1.04 1.04 0 0 0 .507.89L11.134 25.84a1.047 1.047 0 0 0 1.037 0L23.27 19.7a1.04 1.04 0 0 0 .507-.89V7.195a1.03 1.03 0 0 0-.507-.89L12.183.16a1.047 1.047 0 0 0-.541-.15zM14.39 16.43c.36-.36.568-.849.568-1.359 0-.51-.208-.999-.568-1.359l-2.748-2.748 2.748-2.748c.36-.36.568-.849.568-1.359 0-.51-.208-.999-.568-1.36-.36-.36-.849-.567-1.359-.567-.51 0-.999.208-1.359.568L9.643 8.247 7.245 5.849a1.921 1.921 0 0 0-2.718 2.718l2.398 2.398-2.398 2.398a1.921 1.921 0 0 0 2.718 2.718l2.398-2.398 2.389 2.389c.36.36.848.568 1.359.568.51 0 .998-.208 1.359-.568l.54-.62z"/>
    </svg>
  )
  // Generic letter badge
  return (
    <span className="font-heading font-bold text-sm" style={{ color: fg }}>
      {name.substring(0, 2).toUpperCase()}
    </span>
  )
}

function IconBadge({ label, color }: { label: string; color: string }) {
  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 font-heading font-bold text-sm"
      style={{ backgroundColor: color + '25', color, border: `1px solid ${color}55` }}
    >
      {label}
    </div>
  )
}

const tools = [
  {
    icon: '🐳',
    abbr: 'DO',
    name: 'Docker + ECS EC2',
    category: 'Orquestación',
    why: 'Imagen inmutable = rollback en segundos. Escalado horizontal automático.',
    color: '#1D97E0',
  },
  {
    icon: '🔴',
    abbr: 'NJ',
    name: 'NestJS + TypeScript',
    category: 'Microservicios',
    why: 'Módulos aislados por dominio. Inyección de dependencias. Stateless por diseño.',
    color: '#E0234E',
  },
  {
    icon: '☁️',
    abbr: 'GW',
    name: 'Amazon API Gateway',
    category: 'Seguridad',
    why: 'Único punto de entrada. Validación JWT + rate limiting sin lógica duplicada.',
    color: '#FF9900',
  },
  {
    icon: '🗄️',
    abbr: 'RD',
    name: 'AWS RDS PostgreSQL',
    category: 'Persistencia',
    why: 'Backups automáticos, parches gestionados, métricas CloudWatch. Datos PII menores.',
    color: '#336791',
  },
  {
    icon: 'λ',
    abbr: 'λ',
    name: 'AWS Lambda',
    category: 'Serverless',
    why: 'Costo $0 fuera de horario escolar. Escalado automático por invocación.',
    color: '#FF9900',
  },
  {
    icon: '⚡',
    abbr: 'SB',
    name: 'Supabase Auth',
    category: 'Autenticación',
    why: 'Emisión centralizada de JWT. API Gateway los valida antes de cualquier acceso.',
    color: '#3ECF8E',
  },
  {
    icon: '🔍',
    abbr: 'SQ',
    name: 'SonarQube',
    category: 'Calidad / CI-CD',
    why: 'Puerta automática en pipeline. Bloquea vulnerabilidades y verifica WCAG 2.1.',
    color: '#4E9BCD',
  },
  {
    icon: '📊',
    abbr: 'P+G',
    name: 'Prometheus + Grafana',
    category: 'Observabilidad',
    why: 'Cubre AWS + Google Cloud. Detecta si latencia del agente se acerca al timeout 270 s.',
    color: '#E6522C',
  },
]

export default function P09Herramientas() {
  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-yellow" />

      {/* Header */}
      <div className="pl-16 pr-14 pt-8 pb-2 shrink-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-yellow uppercase mb-1">
          Herramientas y Estrategias
        </p>
        <h2
          className="font-heading text-4xl font-bold leading-tight"
          style={{ color: 'var(--text)' }}
        >
          Justificación Técnica
        </h2>
      </div>

      {/* Tools grid — 4 columnas, altura natural */}
      <div className="pl-16 pr-14 py-3 flex-1 flex items-center">
        <div className="grid grid-cols-4 gap-2.5 w-full">
          {tools.map(({ abbr, name, category, why, color }) => (
            <div
              key={name}
              className="rounded-lg px-3 py-3 border flex flex-col gap-2"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: color + '44' }}
            >
              <div className="flex items-center gap-2">
                <IconBadge label={abbr} color={color} />
                <div className="min-w-0">
                  <span
                    className="font-body text-xs px-1.5 py-0.5 rounded block w-fit"
                    style={{ backgroundColor: color + '20', color }}
                  >
                    {category}
                  </span>
                  <p className="font-body font-bold text-sm leading-tight mt-0.5" style={{ color: 'var(--text)' }}>{name}</p>
                </div>
              </div>
              <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>{why}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Criterios de selección — destacado */}
      <div
        className="mx-16 mb-10 px-6 py-3 rounded-xl border-2 shrink-0"
        style={{ borderColor: '#FFB800', backgroundColor: '#FFB80015' }}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl shrink-0">⭐</span>
          <div>
            <p className="font-body text-xs uppercase tracking-widest mb-0.5" style={{ color: '#FFB800' }}>Criterios de selección</p>
            <p className="font-body text-base font-bold" style={{ color: 'var(--text)' }}>
              Coherencia de ecosistema &nbsp;·&nbsp; Eficiencia bajo demanda &nbsp;·&nbsp; Mantenibilidad operativa
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
