import SlideLayout from '../../slides/SlideLayout'

const CRITERIOS = [
  {
    num: '01',
    ponderacion: 'Relevante',
    titulo: 'Plan de gestión del cambio con funcionarios',
    detalle: '¿Existe un plan de co-diseño activo con los funcionarios que operarán el módulo? FENATS y CONFUSAM tienen capacidad real de paralizar la operación. El SOME —usuario directo de M1 y M2— debe co-diseñar los flujos antes del despliegue, no después.',
    impacto: '2.800 funcionarios en la red — adhesión gremial es condición previa a cualquier módulo.',
  },
  {
    num: '02',
    ponderacion: 'Neutral',
    titulo: 'Viabilidad en el plazo de 12 meses',
    detalle: '¿El módulo puede completarse dentro del plazo establecido para el proyecto EDGDA? M3 (Hub de Interoperabilidad) es el único que presenta riesgo real de superar el plazo por su dependencia de la cooperación del proveedor SIDRA.',
    impacto: 'El cronograma de Fase 2 depende de que el SLA con el proveedor SIDRA esté firmado antes de iniciar M3.',
  },
  {
    num: '03',
    ponderacion: 'Marginal',
    titulo: 'Estrategia para reducir la brecha digital',
    detalle: '¿El módulo contempla canales alternativos para la población sin acceso digital? El 72% de los pacientes desconoce su posición en la lista. M4 (Portal) no cumplirá su mandato legal sin kioskos asistidos, IVR y enrolamiento presencial diferenciado para zonas extremas.',
    impacto: 'M2 y M4 deben incluir IVR y SMS como canales de primer nivel, no como funcionalidades secundarias.',
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
        {CRITERIOS.map(({ num, ponderacion, titulo, detalle, impacto }) => (
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
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-body text-xl font-bold" style={{ color: 'var(--text)' }}>{titulo}</p>
                  <span className="font-body text-xs px-2 py-0.5 rounded-full shrink-0" style={{ backgroundColor: '#FFB80022', color: '#FFB800' }}>{ponderacion}</span>
                </div>
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
