import SlideLayout from '../../slides/SlideLayout'

const CRITERIOS = [
  {
    num: '01',
    titulo: 'Interoperabilidad HL7 FHIR + Certificación CENS',
    detalle: 'El sistema debe integrarse con SIDRA/MINSAL bajo HL7 FHIR. Sin certificación CENS, la solución opera en aislamiento total — requisito no negociable.',
    obstaculo: 'Proveedores de sistemas legados controlan APIs y pueden obstaculizar la integración.',
  },
  {
    num: '02',
    titulo: 'Operación Offline en Zonas Extremas',
    detalle: 'La dispersión del Desierto de Atacama exige capacidad de operación desconectada con sincronización diferida.',
    obstaculo: '58% de inasistencias se atribuye a fallas de comunicación en campamentos y localidades rurales.',
  },
  {
    num: '03',
    titulo: 'Disponibilidad de Talento Técnico Especializado',
    detalle: 'Se requieren perfiles con experiencia en microservicios, HL7 FHIR y seguridad en salud.',
    obstaculo: 'Competencia salarial con la industria minera privada genera "brain drain" técnico constante.',
  },
]

export default function E04CriteriosTecnicos() {
  return (
    <SlideLayout
      label="Factibilidad Técnica"
      title="Criterios Técnicos"
      stat="3"
      statLabel="criterios técnicos evaluados"
    >
      <div className="space-y-4">
        {CRITERIOS.map(({ num, titulo, detalle, obstaculo }) => (
          <div
            key={num}
            className="rounded-lg px-5 py-4 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              borderLeftColor: '#307FE2',
              borderLeftWidth: '3px',
            }}
          >
            <div className="flex gap-4">
              <span className="shrink-0 font-heading text-xl font-bold text-duoc-blue opacity-30 w-8">{num}</span>
              <div>
                <p className="font-body text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>{titulo}</p>
                <p className="font-body text-lg leading-relaxed mb-2" style={{ color: 'var(--text-muted)' }}>{detalle}</p>
                <p className="font-body text-base" style={{ color: '#FFB800' }}>
                  ⚠ Obstáculo: {obstaculo}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}
