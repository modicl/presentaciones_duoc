// Indicadores 1 y 7 — Ética, seguridad, privacidad y sostenibilidad

function Pill({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span className="font-body text-[11px] font-bold px-2 py-0.5 rounded" style={{ backgroundColor: color + '22', color }}>
      {children}
    </span>
  )
}

export default function T05Etica() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-2">
          Indicadores 1 y 7 — Ética y Seguridad
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
          Compliance antes del token
        </h2>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-lg px-3 py-2.5 border" style={{ backgroundColor: '#E2403010', borderColor: '#E2403040' }}>
            <p className="font-body font-bold text-sm mb-1" style={{ color: '#E24030' }}>⚖️ Compliance gates</p>
            <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
              prisma_workflow bloquea el PACI <b>antes</b> de invocar el LLM si hay PII, informe vencido o NEE no reconocida.
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              <Pill color="#E24030">Ley 21.719 · PII</Pill>
              <Pill color="#E24030">D170</Pill>
              <Pill color="#E24030">D83</Pill>
            </div>
          </div>
          <div className="rounded-lg px-3 py-2.5 border" style={{ backgroundColor: '#307FE210', borderColor: '#307FE240' }}>
            <p className="font-body font-bold text-sm mb-1" style={{ color: '#307FE2' }}>🔐 Seguridad</p>
            <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
              JWT Supabase + Guards por rol (TEACHER/SUPERADMIN). UUID como PK evita IDs secuenciales.
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              <Pill color="#307FE2">SupabaseJwtGuard</Pill>
              <Pill color="#307FE2">URLs 900 s</Pill>
            </div>
          </div>
          <div className="rounded-lg px-3 py-2.5 border" style={{ backgroundColor: '#9B59B610', borderColor: '#9B59B640' }}>
            <p className="font-body font-bold text-sm mb-1" style={{ color: '#9B59B6' }}>🕵️ Privacidad y auditoría</p>
            <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
              AuditService + logs_usuarios registran quién/cuándo/IP sin bloquear el negocio. PII nunca como URL pública.
            </p>
          </div>
          <div className="rounded-lg px-3 py-2.5 border" style={{ backgroundColor: '#43B02A10', borderColor: '#43B02A40' }}>
            <p className="font-body font-bold text-sm mb-1" style={{ color: '#43B02A' }}>🌱 Sostenibilidad</p>
            <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
              Gates preventivos evitan gasto de tokens. TTL DynamoDB 7 días purga sesiones muertas. Políglota = menos desperdicio.
            </p>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-4 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <div className="w-full rounded-xl p-5 border" style={{ borderColor: '#FFB80055', backgroundColor: '#FFB80012' }}>
          <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: '#FFB800' }}>
            ❓ Pregunta anticipada
          </p>
          <p className="font-body text-sm font-bold mb-2" style={{ color: 'var(--text)' }}>
            ¿Por qué validar compliance antes del LLM y no después?
          </p>
          <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
            Porque es <b>preventivo</b>: evita exponer PII al modelo, reduce costo y energía, y previene generar un PACI
            sobre datos inválidos. Decidir tarde gasta tokens y arriesga la privacidad del estudiante.
          </p>
        </div>
        <p className="font-body text-xs text-center" style={{ color: 'var(--text-dim)' }}>
          La normativa chilena está modelada <b>en código</b>, no solo en documentación.
        </p>
      </div>
    </div>
  )
}
