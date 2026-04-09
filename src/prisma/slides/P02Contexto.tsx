function Card({ title, items, accent = '#307FE2' }: { title: string; items: string[]; accent?: string }) {
  return (
    <div
      className="rounded-lg p-4 border"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <p className="font-body text-xs tracking-widest uppercase mb-3" style={{ color: accent }}>{title}</p>
      <ul className="space-y-1.5">
        {items.map(item => (
          <li key={item} className="font-body text-base flex gap-2" style={{ color: 'var(--text-muted)' }}>
            <span className="shrink-0 mt-0.5" style={{ color: accent }}>›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function P02Contexto() {
  return (
    <div
      className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-yellow" />

      {/* Left column */}
      <div className="flex flex-col justify-center pl-16 pr-10 py-10 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-yellow uppercase mb-3">
          Contexto
        </p>
        <h2
          className="font-heading text-5xl font-bold leading-tight mb-6"
          style={{ color: 'var(--text)' }}
        >
          El Dolor del Docente
        </h2>
        <div className="grid grid-cols-1 gap-3">
          <Card
            title="El mandato legal"
            accent="#FFB800"
            items={[
              'Decreto N°170 obliga a elaborar PACI para alumnos con NEE',
              'Un curso puede tener 2–6 estudiantes con perfiles distintos',
            ]}
          />
          <Card
            title="La brecha operacional"
            accent="#307FE2"
            items={[
              'Docente reescribe el mismo material N veces manualmente',
              'Sin herramientas especializadas: adapta en Word/PPT basándose en su propio criterio',
              'Calidad inconsistente según disponibilidad horaria del docente',
            ]}
          />
          <Card
            title="El impacto pedagógico"
            accent="#43B02A"
            items={[
              'Cada hora en adaptaciones = hora restada a enseñanza directa',
              'Brecha de formación en redacción adaptada por tipo de NEE',
            ]}
          />
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center items-center flex-[2] border-l gap-3 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}
      >
        <span
          className="font-heading font-bold leading-none text-center"
          style={{ fontSize: 'clamp(64px, 9vw, 120px)', color: '#FFB800' }}
        >
          2–6
        </span>
        <span
          className="font-body text-sm uppercase tracking-widest text-center"
          style={{ color: 'var(--text-dim)' }}
        >
          alumnos con NEE por curso
        </span>
        <div className="mt-6 w-full px-4">
          <div
            className="rounded-lg p-4 border text-center"
            style={{ borderColor: '#307FE222', backgroundColor: '#307FE210' }}
          >
            <p className="font-heading text-2xl font-bold text-duoc-blue">P.R.I.S.M.A.</p>
            <p className="font-body text-xs mt-1" style={{ color: 'var(--text-dim)' }}>
              Plataforma de Reducción de Ineficiencia<br />en la Síntesis de Material Adaptado
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
