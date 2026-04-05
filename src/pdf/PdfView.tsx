import duocLogo from '../assets/Logo_DuocUC.svg'
import PdfLayout from './PdfLayout'

/* ── helpers ─────────────────────────────────────── */
function Card({ children }: { children: React.ReactNode }) {
  return <div className="pdf-card">{children}</div>
}

function Bullet({ children, color = '#307FE2' }: { children: React.ReactNode; color?: string }) {
  return (
    <li className="pdf-bullet">
      <span style={{ color }}>›</span>
      <span>{children}</span>
    </li>
  )
}

function Dots({ value, color }: { value: number; color: string }) {
  return (
    <span className="pdf-dots">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="pdf-dot" style={{ background: i < value ? color : '#DDE3EC' }} />
      ))}
    </span>
  )
}

/* ── Slides PDF ───────────────────────────────────── */

function Slide1() {
  return (
    <div className="pdf-page pdf-page--center">
      <div className="pdf-accent" style={{ backgroundColor: '#307FE2' }} />
      <img src={duocLogo} alt="Duoc UC" className="pdf-logo" />
      <p className="pdf-label" style={{ color: '#307FE2' }}>Escuela de Informática y Telecomunicaciones</p>
      <h1 className="pdf-title--hero">
        Sistema Integrado de Gestión<br />de Demanda y Capacidad Asistencial
      </h1>
      <p className="pdf-subtitle">Caso de Estudio — Servicio Público de Salud RedNorte</p>
      <div className="pdf-divider" />
      <div className="pdf-team">
        {['Javier Arancibia', 'Luciano Riveros', 'Danilo Quiroz', 'Felipe Villarroel'].map(n => (
          <span key={n}>{n}</span>
        ))}
      </div>
      <p className="pdf-footnote">Docente: Andrés Santoro Del Campo · Evaluación de Proyectos · 2026</p>
    </div>
  )
}

function Slide2() {
  return (
    <PdfLayout
      label="Contexto"
      title="Servicio de Salud RedNorte"
      accentColor="#FFB800"
      stat=">42.000"
      statLabel="pacientes en lista de espera"
    >
      <Card>
        <p className="pdf-card-title">Infraestructura</p>
        <ul className="pdf-list">
          <Bullet>1 hospital de alta complejidad</Bullet>
          <Bullet>3 hospitales comunitarios · 12 CESFAM</Bullet>
          <Bullet>2.800 funcionarios en la red</Bullet>
        </ul>
      </Card>
      <Card>
        <p className="pdf-card-title">Crisis asistencial</p>
        <ul className="pdf-list">
          <Bullet>Tiempos de respuesta superiores a 18 meses</Bullet>
          <Bullet>12–18% de ineficiencia operacional</Bullet>
          <Bullet>Dispersión geográfica extrema — Desierto de Atacama</Bullet>
        </ul>
      </Card>
      <Card>
        <p className="pdf-card-title">Factores de presión</p>
        <ul className="pdf-list">
          <Bullet>Migración transfronteriza y población flotante minera</Bullet>
          <Bullet>Envejecimiento demográfico y patologías crónicas</Bullet>
        </ul>
      </Card>
    </PdfLayout>
  )
}

function Slide3() {
  const pilares = [
    { num: '1', title: 'Fragmentación de Datos', desc: 'Sistemas SIDRA en silos — duplicación de registros y visión distorsionada de la lista de espera real.' },
    { num: '2', title: 'Capacidad Ociosa No Gestionada', desc: 'Pérdida de hasta el 18% de horas médicas sin motor de reasignación en tiempo real.' },
    { num: '3', title: 'Brecha de Comunicación', desc: 'Baja penetración digital en zonas rurales y falta de actualización de datos de pacientes en tránsito.' },
  ]
  return (
    <PdfLayout label="Diagnóstico" title="Problemática y Alcance" stat="58%" statLabel="inasistencias por fallas de notificación">
      <div className="pdf-pilares">
        {pilares.map(({ num, title, desc }) => (
          <Card key={num}>
            <div className="pdf-pilar-header">
              <span className="pdf-pilar-num">{num}</span>
              <strong>{title}</strong>
            </div>
            <p className="pdf-pilar-desc">{desc}</p>
          </Card>
        ))}
      </div>
    </PdfLayout>
  )
}

function Slide4() {
  const critical = [
    {
      force: 'Poder negociador — Proveedores',
      level: 'Muy Alto',
      color: '#E53E3E',
      note: 'Sindicatos FENATS/CONFUSAM · Legacy IT con control de APIs · vendor lock-in Cloud.',
      implication: 'El proyecto debe diseñarse con los actores, no contra ellos.',
    },
    {
      force: 'Rivalidad por talento especializado',
      level: 'Muy Alto',
      color: '#E53E3E',
      note: '"Brain drain" médico y TI hacia la minería · competencia por fondos MINSAL.',
      implication: 'Riesgo de perder equipo clave durante la implementación.',
    },
  ]
  const others = [
    { force: 'Poder negociador — Pacientes', level: 'Bajo', color: '#43B02A' },
    { force: 'Amenaza de nuevos competidores', level: 'Bajo', color: '#43B02A' },
    { force: 'Amenaza de sustitutos', level: 'Media-Alta', color: '#FFB800' },
  ]
  return (
    <PdfLayout label="Análisis del Microentorno" title="Modelo de Porter — Riesgos Críticos" stat="2" statLabel='fuerzas en nivel "Muy Alto"' statColor="#E53E3E">
      <div className="pdf-modules">
        {critical.map(({ force, level, color, note, implication }) => (
          <Card key={force}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="pdf-badge" style={{ color, background: `${color}22` }}>{level}</span>
              <strong>{force}</strong>
            </div>
            <p className="pdf-pilar-desc">{note}</p>
            <p style={{ color, fontWeight: 'bold', fontSize: '12px', marginTop: '4px' }}>{implication}</p>
          </Card>
        ))}
      </div>
      <div style={{ marginTop: '12px', padding: '10px 14px', background: 'rgba(48,127,226,0.05)', border: '1px solid rgba(48,127,226,0.2)', borderRadius: '6px' }}>
        <p style={{ fontSize: '10px', color: '#307FE2', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Otras 3 fuerzas — nivel bajo o medio</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {others.map(({ force, level, color }) => (
            <span key={force} className="pdf-badge" style={{ color, background: `${color}18` }}>{force} — {level}</span>
          ))}
        </div>
      </div>
    </PdfLayout>
  )
}

function Slide5() {
  const insights = [
    {
      letter: 'P',
      dimension: 'Político',
      headline: 'El MINSAL financia la transformación digital',
      desc: 'Fondos concursables activos para proyectos de salud digital — el entorno político impulsa, no frena.',
    },
    {
      letter: 'T',
      dimension: 'Tecnológico',
      headline: 'HL7 FHIR es el estándar maduro disponible hoy',
      desc: 'La tecnología de integración ya existe. Solo falta aplicarla a los 42.000 registros de SIDRA.',
    },
    {
      letter: 'L',
      dimension: 'Legal',
      headline: 'Las leyes ya nos obligan a actuar',
      desc: 'Ley 20.584 (transparencia de esperas) y Ley 19.628 (protección de datos) exigen cumplimiento inmediato.',
    },
  ]
  const summary = [
    { letter: 'E', label: 'Económico', note: '12–18% ineficiencia recuperable · cloud OPEX escalable' },
    { letter: 'S', label: 'Social', note: 'Migración + envejecimiento aumentan demanda compleja' },
    { letter: 'E', label: 'Ecológico', note: 'Extremo climático y minero agrava morbilidad' },
  ]
  return (
    <PdfLayout label="Análisis del Macroentorno" title="PESTEL — 3 Hallazgos Clave" stat="✓" statLabel="el entorno nos impulsa" statColor="#43B02A">
      <div className="pdf-modules">
        {insights.map(({ letter, dimension, headline, desc }) => (
          <Card key={dimension}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span className="pdf-pestel-letter" style={{ flexShrink: 0 }}>{letter}</span>
              <div>
                <p style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '3px' }}>{headline}</p>
                <p className="pdf-pilar-desc">{desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div style={{ marginTop: '12px', padding: '10px 14px', background: 'rgba(48,127,226,0.05)', border: '1px solid rgba(48,127,226,0.2)', borderRadius: '6px' }}>
        <p style={{ fontSize: '10px', color: '#307FE2', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Otras dimensiones analizadas</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {summary.map(({ letter, label, note }) => (
            <div key={label} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
              <span className="pdf-pestel-letter" style={{ fontSize: '9px', width: '18px', height: '18px', flexShrink: 0 }}>{letter}</span>
              <p style={{ fontSize: '11px', color: '#666' }}><strong>{label}:</strong> {note}</p>
            </div>
          ))}
        </div>
      </div>
    </PdfLayout>
  )
}

function Slide6() {
  const metas = [
    { num: 1, title: 'Optimización oferta médica', metric: '12–18% → 7%', detail: 'Motor automático de reasignación geográfica' },
    { num: 2, title: 'Adopción digital paciente', metric: '70% penetración portal', detail: '40% vía kioscos digitales en APS' },
    { num: 3, title: 'Interoperabilidad sistémica', metric: '100% en 10 meses', detail: 'Hospital + 3 comunitarios con HL7 FHIR' },
    { num: 4, title: 'Cumplimiento regulatorio', metric: '100% desde día 1', detail: 'Leyes 19.628 y 20.584' },
  ]
  return (
    <PdfLayout label="Objetivos" title="Objetivos del Proyecto" stat="12" statLabel="meses de implementación">
      <div className="pdf-objetivo-general">
        <p className="pdf-card-title">Objetivo General</p>
        <p>Implementar un ecosistema de gestión de demanda y capacidad asistencial integrado con SIDRA bajo estándares <strong>HL7 FHIR</strong> en un ciclo de <strong>12 meses</strong>.</p>
      </div>
      <div className="pdf-grid-2">
        {metas.map(({ num, title, metric, detail }) => (
          <Card key={num}>
            <div className="pdf-meta-header">
              <span className="pdf-meta-num">{num}</span>
              <div>
                <p className="pdf-meta-title">{title}</p>
                <p className="pdf-meta-metric">{metric}</p>
                <p className="pdf-meta-detail">{detail}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PdfLayout>
  )
}

function Slide7() {
  const modules = [
    { num: '01', name: 'Motor de Priorización Biopsicosocial', desc: 'Scoring auditable: severidad clínica + tiempo de espera + vulnerabilidad social.' },
    { num: '02', name: 'Gestor de Reasignación Multicanal', desc: 'Reasignación automática con gateway híbrido SMS/WhatsApp/IVR para zonas remotas.' },
    { num: '03', name: 'Hub de Interoperabilidad HL7 FHIR', desc: 'REST APIs bidireccionales con SIDRA para sincronización de 42.000 registros.' },
    { num: '04', name: 'Portal de Transparencia y Autogestión', desc: 'Interfaz web/móvil con consulta en tiempo real. Cumplimiento Ley 20.584.' },
    { num: '05', name: 'Analytics de Capacidad Asistencial (BI)', desc: 'Dashboards en tiempo real con SLA por especialidad para los 16 nodos de la red.' },
  ]
  return (
    <PdfLayout label="Solución" title="Arquitectura del Producto — 5 Módulos" stat="5" statLabel="módulos del sistema">
      <div className="pdf-modules">
        {modules.map(({ num, name, desc }) => (
          <Card key={num}>
            <div className="pdf-module-row">
              <span className="pdf-module-num">{num}</span>
              <div>
                <p className="pdf-module-name">{name}</p>
                <p className="pdf-module-desc">{desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PdfLayout>
  )
}

function Slide8() {
  const groups: { label: string; color: string; actors: { name: string; power: number; interest: number; strategy: string }[] }[] = [
    {
      label: 'Internos',
      color: '#307FE2',
      actors: [
        { name: 'Dirección del Servicio', power: 5, interest: 5, strategy: 'Valida hitos y reportes de impacto por fase.' },
        { name: 'Gremios (FENATS / CONFUSAM)', power: 5, interest: 5, strategy: 'Co-diseño obligatorio de flujos — clave para evitar resistencia.' },
      ],
    },
    {
      label: 'Conectados y Externos',
      color: '#FFB800',
      actors: [
        { name: 'MINSAL — Depto. TIC / SIDRA', power: 5, interest: 3, strategy: 'Cumplimiento HL7 FHIR y seguridad en cada hito certificable.' },
        { name: 'Proveedores Legacy IT', power: 5, interest: 3, strategy: 'SLAs estrictos con penalizaciones por incumplimiento.' },
        { name: 'Agrupaciones de Pacientes', power: 3, interest: 5, strategy: 'Portal con criterios de priorización transparentes.' },
      ],
    },
  ]
  return (
    <PdfLayout label="Interesados" title="Stakeholders Clave">
      <p className="pdf-note"><strong>P</strong> = Poder (1–5) · <strong>I</strong> = Interés (1–5) · ● nivel máximo</p>
      {groups.map(({ label, color, actors }) => (
        <div key={label} style={{ marginBottom: '12px' }}>
          <p className="pdf-card-title" style={{ color, marginBottom: '6px' }}>{label}</p>
          <table className="pdf-table">
            <thead><tr><th>Actor</th><th>Estrategia de gestión</th><th>P</th><th>I</th></tr></thead>
            <tbody>
              {actors.map(({ name, power, interest, strategy }) => (
                <tr key={name}>
                  <td><strong>{name}</strong></td>
                  <td>{strategy}</td>
                  <td><Dots value={power} color={color} /></td>
                  <td><Dots value={interest} color={color} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </PdfLayout>
  )
}

function Slide10() {
  const pillars = [
    {
      num: '1',
      metric: '0 pérdidas',
      title: 'Integridad y Trazabilidad de Datos',
      items: ['Garantía de no-borrado en 42.000 registros', 'Auditoría completa bajo Ley 19.628'],
    },
    {
      num: '2',
      metric: '+13% oferta',
      title: 'Maximización de Capacidad Instalada',
      items: ['Recuperación de horas perdidas por inasistencia', 'Reducción lista de espera de 42.000 pacientes'],
    },
  ]
  return (
    <PdfLayout label="Propuesta de Valor" title="¿Por qué este proyecto?" stat="99.9%" statLabel="uptime garantizado">
      <div className="pdf-modules">
        {pillars.map(({ num, metric, title, items }) => (
          <Card key={num}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
              <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#307FE2', opacity: 0.2 }}>{num}</span>
              <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#307FE2', textAlign: 'right' }}>{metric}</span>
            </div>
            <p className="pdf-module-name" style={{ marginBottom: '6px' }}>{title}</p>
            <ul className="pdf-list">
              {items.map(i => <Bullet key={i}>{i}</Bullet>)}
            </ul>
          </Card>
        ))}
      </div>
      <div className="pdf-tagline">
        "Técnicamente factible. <span style={{ color: '#307FE2' }}>Socialmente rentable.</span> <span style={{ color: '#FFB800' }}>Estratégicamente urgente.</span>"
      </div>
    </PdfLayout>
  )
}

function Slide11() {
  const csf = [
    { num: '01', title: 'Gestión del Cambio Proactiva', desc: 'Adhesión de 2.800 funcionarios. Participación sindical temprana (FENATS/CONFUSAM) para prevenir boicot operativo.' },
    { num: '02', title: 'Interoperabilidad Basada en Estándares', desc: 'Integración HL7 FHIR con SIDRA elimina duplicación de registros y garantiza integridad de datos a nivel nacional.' },
    { num: '03', title: 'Gobernanza de Datos', desc: 'Cumplimiento estricto de Leyes 19.628 y 20.584 para protección de información sensible y transparencia algorítmica.' },
  ]
  return (
    <PdfLayout label="Conclusiones" title="Factores Críticos de Éxito" accentColor="#43B02A" stat="3" statLabel="factores críticos de éxito" statColor="#43B02A">
      <div className="pdf-modules">
        {csf.map(({ num, title, desc }) => (
          <Card key={num}>
            <div className="pdf-module-row">
              <span className="pdf-module-num" style={{ color: '#43B02A' }}>{num}</span>
              <div>
                <p className="pdf-module-name">{title}</p>
                <p className="pdf-module-desc">{desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="pdf-final-quote">
        "El proyecto permitirá a RedNorte cumplir su mandato fundamental:{' '}
        <span style={{ color: '#43B02A' }}>brindar atención oportuna, digna y transparente</span>{' '}
        a la población del norte de Chile."
      </div>
    </PdfLayout>
  )
}

/* ── Main export ─────────────────────────────────── */
export default function PdfView() {
  return (
    <div className="pdf-root">
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <Slide7 />
      <Slide8 />
      <Slide10 />
      <Slide11 />
    </div>
  )
}
