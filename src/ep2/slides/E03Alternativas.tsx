import SlideLayout from '../../slides/SlideLayout'

const MODULOS = [
  {
    cod: 'M1',
    nombre: 'Motor de Priorización Bio-Psico-Social',
    desc: 'Reemplaza la lógica FIFO por un algoritmo que pondera gravedad clínica, tiempo acumulado y vulnerabilidad social. Incluye variables del norte: exposición a metales pesados y condición migratoria.',
    score: '74/84',
    fase: 'Fase 1',
    color: '#43B02A',
  },
  {
    cod: 'M2',
    nombre: 'Gestor de Reasignación Multicanal',
    desc: 'Detecta cancelaciones y horas ociosas en tiempo real y reasigna automáticamente vía SMS, IVR y WhatsApp. Ataca directamente la pérdida del 12–18% de horas médicas.',
    score: '73/84',
    fase: 'Fase 1',
    color: '#43B02A',
  },
  {
    cod: 'M3',
    nombre: 'Hub de Interoperabilidad HL7 FHIR',
    desc: 'Capa técnica que conecta EDGDA con la plataforma SIDRA del MINSAL bajo HL7 FHIR. Requiere certificación CENS y SLA con proveedor legado antes de iniciar desarrollo.',
    score: '59/84',
    fase: 'Fase 2',
    color: '#E53E3E',
  },
  {
    cod: 'M4',
    nombre: 'Portal de Autogestión del Paciente',
    desc: 'Plataforma web/móvil para consulta de posición en lista de espera, confirmación de citas y notificaciones. Implementa directamente la obligación legal de la Ley 20.584.',
    score: '71/84',
    fase: 'Fase 2',
    color: '#307FE2',
  },
  {
    cod: 'M5',
    nombre: 'Analytics de Capacidad Asistencial',
    desc: 'Dashboard de inteligencia de datos para directivos: proyección de demanda, rendimiento por especialidad y alertas tempranas. Su valor depende de que M1 y M2 estén operativos.',
    score: '59/84',
    fase: 'Fase 2',
    color: '#FFB800',
  },
]

export default function E03Alternativas() {
  return (
    <SlideLayout
      label="Opciones de Desarrollo"
      title="Cinco Módulos del Ecosistema EDGDA"
      stat="5"
      statLabel="módulos evaluados"
    >
      <div className="space-y-2.5">
        {MODULOS.map(({ cod, nombre, desc, score, fase, color }) => (
          <div
            key={cod}
            className="flex gap-4 rounded-lg px-4 py-3 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              borderLeftColor: color,
              borderLeftWidth: '3px',
            }}
          >
            <span
              className="shrink-0 font-heading text-xl font-bold opacity-40 w-10"
              style={{ color }}
            >
              {cod}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                <p className="font-body text-lg font-bold" style={{ color: 'var(--text)' }}>{nombre}</p>
                <span
                  className="font-body text-sm px-2 py-0.5 rounded-full shrink-0"
                  style={{ backgroundColor: `${color}22`, color }}
                >
                  {fase} · {score}
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
