import vpcEgress from '../../assets/prisma_vpc_egress.svg'

export default function D07bVpcEgress() {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Left column — contexto */}
      <div className="flex flex-col justify-center pl-16 pr-8 py-10 flex-[1.5] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
          CI/CD · GitHub Actions · IE3
        </p>
        <h2 className="font-heading text-4xl font-bold leading-tight mb-6" style={{ color: 'var(--text)' }}>
          VPC con egress externo
        </h2>
        <ul className="space-y-3 max-w-sm">
          {[
            ['VPC Default', 'Subred pública con IP dinámica en cada tarea Fargate.'],
            ['Security Group', 'Inbound TCP :80 · Outbound ALL hacia internet.'],
            ['Egress externo', 'Tasks alcanzan Aiven (PostgreSQL), Supabase y Gemini API.'],
          ].map(([t, d]) => (
            <li key={t} className="flex gap-3 font-body" style={{ color: 'var(--text-muted)' }}>
              <span className="mt-1 shrink-0 text-duoc-blue">›</span>
              <span className="text-sm">
                <span className="font-bold" style={{ color: 'var(--text)' }}>{t}.</span> {d}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right column — diagrama */}
      <div
        className="flex flex-col justify-center items-center flex-[3] border-l p-4"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <img
          src={vpcEgress}
          alt="Diagrama VPC con egress externo"
          className="max-h-full max-w-full object-contain rounded-lg"
        />
      </div>
    </div>
  )
}
