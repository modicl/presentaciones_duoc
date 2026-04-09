function ObjCard({ number, title, desc, color }: { number: string; title: string; desc: string; color: string }) {
  return (
    <div
      className="rounded-lg p-4 border flex gap-4 items-start"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <span className="font-heading text-3xl font-bold shrink-0 leading-none" style={{ color }}>{number}</span>
      <div>
        <p className="font-body font-bold text-base mb-1" style={{ color: 'var(--text)' }}>{title}</p>
        <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>{desc}</p>
      </div>
    </div>
  )
}

export default function P03Objetivos() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-green" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-10 py-10 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-green uppercase mb-3">
          Propuesta de Solución
        </p>
        <h2
          className="font-heading text-5xl font-bold leading-tight mb-6"
          style={{ color: 'var(--text)' }}
        >
          Objetivos del Sistema
        </h2>
        <div className="grid grid-cols-1 gap-3">
          <ObjCard
            number="01"
            color="#307FE2"
            title="Reducción drástica del tiempo de adaptación"
            desc="El docente sube el PACI y recibe en minutos material adaptado y listo para revisar."
          />
          <ObjCard
            number="02"
            color="#FFB800"
            title="Coherencia entre el PACI y el material generado"
            desc="Cada adaptación está alineada con objetivos, estrategias y restricciones del perfil individual."
          />
          <ObjCard
            number="03"
            color="#43B02A"
            title="Democratización de la adaptación curricular"
            desc="Calidad uniforme para docentes con y sin formación especializada en NEE."
          />
          <ObjCard
            number="04"
            color="#E24030"
            title="Escalabilidad hacia un ecosistema pedagógico"
            desc="Base para integrar otros instrumentos de planificación y evaluación diferenciada."
          />
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-4 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        {/* Transformación visual */}
        <div className="flex flex-col items-center gap-2 text-center">
          <span
            className="font-heading font-bold leading-none"
            style={{ fontSize: 'clamp(42px, 6vw, 72px)', color: 'var(--text-muted)' }}
          >
            Horas
          </span>
          <span
            className="font-heading font-bold"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: '#43B02A' }}
          >
            ↓
          </span>
          <span
            className="font-heading font-bold leading-none"
            style={{ fontSize: 'clamp(42px, 6vw, 72px)', color: '#43B02A' }}
          >
            Minutos
          </span>
        </div>
        <div
          className="w-full rounded-lg p-4 border text-center mt-2"
          style={{ borderColor: '#43B02A44', backgroundColor: '#43B02A10' }}
        >
          <p className="font-body text-base font-bold" style={{ color: '#43B02A' }}>
            Reducción del tiempo de adaptación curricular
          </p>
          <p className="font-body text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
            El docente sube su material y el perfil PACI → el sistema genera en minutos una propuesta validada contra el Decreto N°170
          </p>
        </div>
      </div>
    </div>
  )
}
