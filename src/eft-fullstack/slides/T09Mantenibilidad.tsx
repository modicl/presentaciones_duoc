// Indicadores 8 y 9 — Adaptabilidad y mantenibilidad con ejemplos del código

const USER_MODEL = `model User {
  id             String   @id @default(uuid()) @db.Uuid
  supabaseUserId String   @unique @map("id_supabase")
  email          String   @unique @map("correo")
  role           UserRole @default(TEACHER) @map("rol")
  colegioId      String?  @map("colegio_id") @db.Uuid
  colegio        Colegio? @relation(fields: [colegioId],
                   references: [id], onDelete: SetNull)
  @@index([colegioId])
  @@schema("users")
  @@map("usuarios")
}`

export default function T09Mantenibilidad() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-8 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-2">
          Indicadores 8 y 9 — Adaptabilidad y mantenibilidad
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-5" style={{ color: 'var(--text)' }}>
          Cambiar sin romper
        </h2>
        <div className="flex flex-col gap-2.5 max-w-xl">
          {[
            ['#307FE2', 'schema.prisma declarativo', 'Agregar un campo = 1 línea + prisma migrate dev. El cliente tipado se regenera solo.'],
            ['#9B59B6', 'Migraciones idempotentes', 'add_colegio_and_superadmin, add_colegio_id_to_jobs: CREATE IF NOT EXISTS / DO $$ EXCEPTION. Evolución segura en producción multi-tenant.'],
            ['#1ABC9C', 'JSONB en PaciProfile.datosEstructurales', 'El plan cambia de forma sin alterar el esquema relacional: metadatos fijos + contenido flexible.'],
            ['#F39C12', 'Vigencia validFrom / validUntil', 'Perfiles históricos y activos coexisten sin borrar datos: trazabilidad y reversión.'],
          ].map(([color, t, d]) => (
            <div key={t} className="rounded-lg px-3 py-2 border flex gap-3 items-start" style={{ backgroundColor: color + '0E', borderColor: color + '38' }}>
              <span className="mt-1 shrink-0" style={{ color }}>›</span>
              <div className="min-w-0">
                <p className="font-body font-bold text-sm" style={{ color: 'var(--text)' }}>{t}</p>
                <p className="font-body text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column — código */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l px-6 py-6"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <p className="font-body text-xs uppercase tracking-widest mb-3 self-start" style={{ color: 'var(--text-dim)' }}>
          Modelo User · UUID + enum + onDelete
        </p>
        <pre className="w-full rounded-lg p-4 border overflow-auto font-mono text-[11px] leading-relaxed"
          style={{ backgroundColor: '#0D0D0D', borderColor: 'var(--border)', color: '#9CDCFE' }}>
          <code>{USER_MODEL}</code>
        </pre>
        <p className="font-body text-xs mt-3" style={{ color: 'var(--text-dim)' }}>
          UUID (no secuencial) · onDelete: SetNull preserva integridad referencial sin perder usuarios.
        </p>
      </div>
    </div>
  )
}
