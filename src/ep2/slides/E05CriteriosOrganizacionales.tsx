import SlideLayout from '../../slides/SlideLayout'

const CRITERIOS = [
  {
    num: '01',
    titulo: 'Gestión del Cambio con Gremios de Salud',
    detalle: 'FENATS y CONFUSAM poseen capacidad real de paralizar la operación. Todo cambio en flujos de trabajo debe ser co-diseñado con los funcionarios antes del despliegue, no después.',
    impacto: '2.800 funcionarios en la red — adhesión gremial es condición previa.',
  },
  {
    num: '02',
    titulo: 'Estrategia para la Brecha Digital',
    detalle: 'El 72% de los pacientes desconoce su posición en la lista de espera. Se requieren canales asistidos (kioskos, IVR, SMS) como componentes del sistema, no funcionalidades secundarias.',
    impacto: 'Sin enrolamiento asistido, el Portal del Paciente no cumple su promesa de transparencia.',
  },
  {
    num: '03',
    titulo: 'Adhesión del Personal SOME',
    detalle: 'Los errores de registro del personal administrativo son la causa directa del 12–18% de pérdida de horas médicas. Su adopción del sistema es tan crítica como la implementación técnica.',
    impacto: 'Nodo de calidad de datos más importante de la red asistencial.',
  },
]

export default function E05CriteriosOrganizacionales() {
  return (
    <SlideLayout
      label="Factibilidad Organizacional"
      title="Criterios Organizacionales"
      stat="3"
      statLabel="criterios organizacionales"
      accentColor="#FFB800"
      statColor="#FFB800"
    >
      <div className="space-y-4">
        {CRITERIOS.map(({ num, titulo, detalle, impacto }) => (
          <div
            key={num}
            className="rounded-lg px-5 py-4 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              borderLeftColor: '#FFB800',
              borderLeftWidth: '3px',
            }}
          >
            <div className="flex gap-4">
              <span className="shrink-0 font-heading text-xl font-bold opacity-30 w-8" style={{ color: '#FFB800' }}>{num}</span>
              <div>
                <p className="font-body text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>{titulo}</p>
                <p className="font-body text-lg leading-relaxed mb-2" style={{ color: 'var(--text-muted)' }}>{detalle}</p>
                <p className="font-body text-base font-bold" style={{ color: '#FFB800' }}>
                  → {impacto}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
