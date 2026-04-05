import SlideLayout from './SlideLayout'

function MetaCard({ num, title, metric, detail }: { num: number; title: string; metric: string; detail: string }) {
  return (
    <div
      className="rounded-lg p-4 flex gap-4 border"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <div className="shrink-0 w-7 h-7 rounded-full border border-duoc-blue flex items-center justify-center font-body text-xs text-duoc-blue font-bold">
        {num}
      </div>
      <div>
        <p className="font-body text-base font-bold mb-0.5" style={{ color: 'var(--text)' }}>{title}</p>
        <p className="font-heading text-xl font-bold text-duoc-blue">{metric}</p>
        <p className="font-body text-base" style={{ color: 'var(--text-label)' }}>{detail}</p>
      </div>
    </div>
  )
}

export default function Slide06Objetivos() {
  return (
    <SlideLayout
      label="Objetivos"
      title="Objetivos del Proyecto"
      stat="12"
      statLabel="meses de implementación"
    >
      <div
        className="rounded-lg px-5 py-3 mb-4 border"
        style={{
          backgroundColor: 'rgba(48,127,226,0.08)',
          borderColor: 'rgba(48,127,226,0.3)',
        }}
      >
        <p className="font-body text-xs text-duoc-blue uppercase tracking-widest mb-1">Objetivo General</p>
        <p className="font-body text-lg" style={{ color: 'var(--text)' }}>
          Implementar un ecosistema de gestión de demanda y capacidad asistencial integrado con SIDRA bajo estándares{' '}
          <strong className="text-duoc-blue">HL7 FHIR</strong>.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <MetaCard num={1} title="Optimización oferta médica" metric="12–18% → 7%" detail="Motor automático de reasignación geográfica" />
        <MetaCard num={2} title="Adopción digital paciente" metric="70% penetración portal" detail="40% vía kioscos digitales en APS" />
        <MetaCard num={3} title="Interoperabilidad sistémica" metric="100% en 10 meses" detail="Hospital + 3 comunitarios con HL7 FHIR" />
        <MetaCard num={4} title="Cumplimiento regulatorio" metric="100% desde día 1" detail="Leyes 19.628 y 20.584" />
      </div>
    </SlideLayout>
  )
}
