import SlideLayout from '../../slides/SlideLayout'

const ALTERNATIVAS = [
  {
    num: '01',
    nombre: 'Desarrollo In-House Integral',
    desc: 'Equipo TI interno desarrolla el sistema completo con control total sobre arquitectura y cumplimiento normativo.',
    tag: 'Control máximo',
    tagColor: '#307FE2',
  },
  {
    num: '02',
    nombre: 'SaaS Especializado en Salud',
    desc: 'Plataforma cloud de gestión hospitalaria con soporte del proveedor. Alto riesgo en cumplimiento normativo chileno.',
    tag: 'Despliegue rápido',
    tagColor: '#FFB800',
  },
  {
    num: '03',
    nombre: 'Desarrollo Incremental Priorizado',
    desc: 'In-House en fases: Fase 1 (meses 1–8) módulos críticos, Fase 2 (meses 9–12) portal y CESFAM. Recomendada.',
    tag: '★ Recomendada',
    tagColor: '#43B02A',
  },
  {
    num: '04',
    nombre: 'Plataformas Open Source Adaptadas',
    desc: 'Customización de HAPI FHIR Server / OpenMRS. Sin licencias, alto costo de adaptación al contexto chileno.',
    tag: 'Sin vendor lock-in',
    tagColor: '#307FE2',
  },
  {
    num: '05',
    nombre: 'Consorcio Público Inter-Servicios',
    desc: 'Co-desarrollo con otros servicios de salud bajo patrocinio MINSAL. Plazo 24–36 meses — no viable en 12.',
    tag: 'Costos compartidos',
    tagColor: '#FFB800',
  },
]

export default function E03Alternativas() {
  return (
    <SlideLayout
      label="Alternativas de Desarrollo"
      title="Cinco Opciones Evaluadas"
      stat="5"
      statLabel="alternativas identificadas"
    >
      <div className="space-y-2.5">
        {ALTERNATIVAS.map(({ num, nombre, desc, tag, tagColor }) => (
          <div
            key={num}
            className="flex gap-4 rounded-lg px-4 py-3 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              borderLeftColor: tagColor,
              borderLeftWidth: '3px',
            }}
          >
            <span
              className="shrink-0 font-heading text-xl font-bold opacity-30 w-8"
              style={{ color: tagColor }}
            >
              {num}
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                <p className="font-body text-lg font-bold" style={{ color: 'var(--text)' }}>{nombre}</p>
                <span
                  className="font-body text-sm px-2 py-0.5 rounded-full shrink-0"
                  style={{ backgroundColor: `${tagColor}22`, color: tagColor }}
                >
                  {tag}
                </span>
              </div>
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--text-label)' }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
