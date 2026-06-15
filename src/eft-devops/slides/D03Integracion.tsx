import SlideLayout from '../../slides/SlideLayout'

const POINTS = [
  ['Puerta única', 'El navegador habla solo con el front (nginx). Las llamadas van same-origin y nginx las proxea a cada micro → sin CORS.'],
  ['Identidad común', 'Supabase emite un JWT; el front lo envía como Authorization: Bearer a todos los servicios. Cada uno valida por su cuenta.'],
  ['Backend ↔ BD', 'Cada microservicio NestJS usa Prisma 5 sobre PostgreSQL. Database-per-service: esquemas separados, sin modelos compartidos.'],
  ['Correlación', 'Los datos se relacionan entre bases por el user_id de Supabase (jobs, perfiles PACI, logs).'],
]

export default function D03Integracion() {
  return (
    <SlideLayout
      label="Método de integración · IE1"
      title="Frontend ↔ Backend ↔ BD"
      stat="JWT"
      statLabel="identidad común (Supabase)"
      accentColor="#307FE2"
      statColor="#307FE2"
    >
      <ul className="space-y-3 max-w-2xl">
        {POINTS.map(([t, d]) => (
          <li key={t} className="flex gap-3 font-body" style={{ color: 'var(--text-muted)' }}>
            <span className="mt-1 shrink-0 text-duoc-blue">›</span>
            <span className="text-base">
              <span className="font-bold" style={{ color: 'var(--text)' }}>{t}.</span> {d}
            </span>
          </li>
        ))}
      </ul>
    </SlideLayout>
  )
}
