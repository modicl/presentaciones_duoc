import duocLogo from '../../assets/Logo_DuocUC.svg'

const ACCENT = '#10B981'
const INDIGO = '#6366F1'
const RED    = '#EF4444'
const AMBER  = '#F59E0B'

const C = {
  bg:     '#FFFFFF',
  card:   '#F8FAFC',
  right:  '#F1F5F9',
  border: '#E2E8F0',
  text:   '#1A202C',
  muted:  '#4A5568',
  label:  '#6B7280',
  dim:    '#9CA3AF',
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function TwoCol({
  accent = ACCENT,
  label,
  title,
  left,
  right,
}: {
  accent?: string
  label: string
  title: string
  left: React.ReactNode
  right: React.ReactNode
}) {
  return (
    <div className="pdf-page" style={{ flexDirection: 'row', padding: 0, gap: 0 }}>
      <div className="pdf-accent" style={{ backgroundColor: accent }} />
      <div style={{ flex: 3, padding: '14mm 10mm 12mm 24mm', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}>
        <p className="pdf-label" style={{ color: accent }}>{label}</p>
        <h2 className="pdf-title">{title}</h2>
        {left}
      </div>
      <div style={{ flex: 2, borderLeft: `1px solid ${C.border}`, background: C.right, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14mm 12mm' }}>
        {right}
      </div>
    </div>
  )
}

function Card({ children, leftColor }: { children: React.ReactNode; leftColor?: string }) {
  return (
    <div style={{ background: C.card, border: `1px solid ${C.border}`, ...(leftColor ? { borderLeft: `3px solid ${leftColor}` } : {}), borderRadius: '6px', padding: '8px 12px' }}>
      {children}
    </div>
  )
}

function BigStat({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <span style={{ fontFamily: 'Merriweather, serif', fontSize: '52px', fontWeight: 700, color, lineHeight: 1, display: 'block' }}>{value}</span>
      <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.12em', color: C.dim, margin: '6px 0 0', textAlign: 'center' }}>{label}</p>
    </div>
  )
}

// ─── Slide 1 — Portada ────────────────────────────────────────────────────────

function Slide1() {
  const team = ['Javier Arancibia', 'Luciano Riveros', 'Danilo Quiroz', 'Felipe Villarroel']
  return (
    <div className="pdf-page" style={{ flexDirection: 'row', padding: 0, gap: 0 }}>
      <div className="pdf-accent" style={{ backgroundColor: ACCENT }} />
      <div style={{ flex: 3, padding: '16mm 12mm 14mm 24mm', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
        <p className="pdf-label" style={{ color: ACCENT }}>Escuela de Informática y Telecomunicaciones</p>
        <h1 className="pdf-title--hero">Evaluación Económica<br />Financiera del Proyecto</h1>
        <p style={{ fontSize: '11px', color: C.muted, margin: 0, lineHeight: 1.4 }}>
          EDGDA — Ecosistema Digital de Gestión de Demanda Asistencial<br />
          Servicio Público de Salud RedNorte
        </p>
        <div style={{ display: 'flex', gap: '10px', margin: '2px 0 4px' }}>
          <div style={{ width: '36px', height: '2px', background: ACCENT }} />
          <div style={{ width: '18px', height: '2px', background: '#FFB800' }} />
        </div>
        <p style={{ fontSize: '9px', fontWeight: 700, color: C.label, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Integrantes</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px 20px' }}>
          {team.map(n => <span key={n} style={{ fontSize: '12px', fontWeight: 600, color: C.text }}>{n}</span>)}
        </div>
        <p style={{ fontSize: '10px', color: C.dim, margin: '4px 0 0' }}>Docente: Andrés Santoro Del Campo</p>
      </div>
      <div style={{ flex: 2, borderLeft: `1px solid ${C.border}`, background: C.right, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '20mm 16mm' }}>
        <img src={duocLogo} alt="Duoc UC" style={{ width: '110px', opacity: 0.9 }} />
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'Merriweather, serif', fontSize: '44px', fontWeight: 700, color: ACCENT, lineHeight: 1, margin: 0 }}>EP3</p>
          <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', color: C.dim, margin: '8px 0 0' }}>Evaluación de Proyectos · 2026</p>
        </div>
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '8px 14px', textAlign: 'center', width: '100%' }}>
          <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: C.dim, margin: '0 0 3px' }}>Tema</p>
          <p style={{ fontSize: '10px', fontWeight: 600, color: C.muted, margin: 0 }}>Flujo de Caja · VAN · TIR · PRI<br />Simulación de Préstamo</p>
        </div>
      </div>
    </div>
  )
}

// ─── Slide 2 — Introducción ───────────────────────────────────────────────────

function Slide2() {
  const cards = [
    {
      title: 'RedNorte — Antecedentes', color: ACCENT,
      items: ['16 nodos asistenciales en la macrozona norte', '1.200 funcionarios diurnos · 75% de capacidad instalada utilizada', '717.750 atenciones/año · tarifa FONASA $18.000 CLP prom.'],
    },
    {
      title: 'El Problema Financiero Central', color: AMBER,
      items: ['15% de inasistencia → ~107.663 cupos clínicos inutilizados/año', 'Margen operacional ajustado: masa salarial $13.737,6M vs ingresos ~$14.500M', 'Necesidad de elegir alternativa con menor carga fija adicional'],
    },
    {
      title: 'EDGDA — Sistema Evaluado', color: INDIGO,
      items: ['5 módulos integrados bajo estándar HL7 FHIR', '3 alternativas: Mixta ($1.350M), Inhouse ($1.320M), Low-Code ($1.330M)', 'Evaluación a 5 años con tasa social de descuento 5,5% (MIDESO 2024)'],
    },
  ]
  return (
    <TwoCol
      label="Contexto del Proyecto"
      title="RedNorte y el Sistema EDGDA"
      left={
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {cards.map(({ title, color, items }) => (
            <Card key={title} leftColor={color}>
              <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color, margin: '0 0 5px' }}>{title}</p>
              {items.map(item => (
                <div key={item} style={{ display: 'flex', gap: '5px', marginBottom: '3px' }}>
                  <span style={{ color, flexShrink: 0 }}>›</span>
                  <span style={{ fontSize: '9px', color: C.muted }}>{item}</span>
                </div>
              ))}
            </Card>
          ))}
        </div>
      }
      right={<BigStat value="15%" label="inasistencia a citaciones médicas" color={ACCENT} />}
    />
  )
}

// ─── Slide 3 — Flujo de Caja ──────────────────────────────────────────────────

const SUPUESTOS = [
  { param: 'Horizonte de evaluación',  valor: '5 años' },
  { param: 'Tasa Social de Descuento', valor: '5,5% anual (MIDESO 2024)' },
  { param: 'Impuesto a la renta',      valor: '0% — entidad pública' },
  { param: 'Tarifa FONASA prom.',      valor: '$18.000 CLP / prestación' },
  { param: 'Depreciación equipos TI',  valor: 'Lineal a 5 años (NICSP)' },
  { param: 'Depreciación muebles',     valor: 'Lineal a 10 años (NICSP)' },
]

const ALTS_FC = [
  { nombre: 'Alt 1 — Mixta',    inv0: '-$650M',  fc1: '$387,7M',    fc2: '$519,4M',    acum5: '$2.256,8M',  color: ACCENT },
  { nombre: 'Alt 2 — Inhouse',  inv0: '-$520M',  fc1: '$495,9M',    fc2: '$552,4M',    acum5: '$2.501,6M',  color: INDIGO },
  { nombre: 'Alt 3 — Low-Code', inv0: '-$580M',  fc1: '-$2.313,9M', fc2: '-$2.186,7M', acum5: '-$9.295,0M', color: RED },
]

function Slide3() {
  return (
    <TwoCol
      label="Evaluación Financiera"
      title="Flujo de Caja"
      left={
        <>
          <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: C.label, margin: 0 }}>Supuestos y parámetros generales</p>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: '6px', overflow: 'hidden' }}>
            {SUPUESTOS.map(({ param, valor }, i) => (
              <div key={param} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 12px', background: i % 2 === 0 ? C.card : C.bg, borderBottom: i < SUPUESTOS.length - 1 ? `1px solid ${C.border}` : 'none' }}>
                <span style={{ fontSize: '9px', color: C.muted }}>{param}</span>
                <span style={{ fontSize: '9px', fontWeight: 600, color: C.text }}>{valor}</span>
              </div>
            ))}
          </div>
          <div style={{ background: `${ACCENT}10`, border: `1px solid ${ACCENT}30`, borderRadius: '6px', padding: '8px 12px' }}>
            <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: ACCENT, margin: '0 0 4px' }}>Estructura del FCN</p>
            <p style={{ fontSize: '9px', color: C.muted, margin: 0, lineHeight: 1.4 }}>
              Ingresos FONASA + Presupuesto Fiscal − Costos Fijos − Costos Variables TI − Depreciaciones − Intereses − Amortización préstamo ± Inversión Año 0
            </p>
          </div>
        </>
      }
      right={
        <>
          <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: C.label, textAlign: 'center', margin: 0 }}>Flujos de Caja Neto — resumen</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', textAlign: 'center', gap: '2px', width: '100%' }}>
            {['', 'Año 0', 'Año 1', 'Año 2', 'Acum. 5'].map(h => (
              <span key={h} style={{ fontSize: '8px', fontWeight: 700, textTransform: 'uppercase', color: C.muted }}>{h}</span>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
            {ALTS_FC.map(({ nombre, inv0, fc1, fc2, acum5, color }) => (
              <div key={nombre} style={{ border: `1px solid ${color}`, borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ background: `${color}20`, padding: '4px 8px' }}>
                  <p style={{ fontSize: '9px', fontWeight: 700, color, margin: 0 }}>{nombre}</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', textAlign: 'center', padding: '5px 8px', background: C.card }}>
                  <span />
                  <span style={{ fontSize: '8px', fontWeight: 600, color: RED }}>{inv0}</span>
                  <span style={{ fontSize: '8px', color: color === RED ? RED : C.muted }}>{fc1}</span>
                  <span style={{ fontSize: '8px', color: color === RED ? RED : C.muted }}>{fc2}</span>
                  <span style={{ fontSize: '8px', fontWeight: 700, color: color === RED ? RED : ACCENT }}>{acum5}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: `${RED}10`, border: `1px solid ${RED}30`, borderRadius: '6px', padding: '6px 10px', textAlign: 'center', width: '100%' }}>
            <p style={{ fontSize: '9px', color: C.muted, margin: 0 }}>
              Alt 3: costos fijos $16.670,6M/año <span style={{ color: RED, fontWeight: 700 }}>superan los ingresos</span> → déficit estructural
            </p>
          </div>
        </>
      }
    />
  )
}

// ─── Slide 4 — Préstamo ───────────────────────────────────────────────────────

const TABLA_ALT1 = [
  { p: 1, cuota: '$143.962.893', interes: '$22.750.000', amort: '$121.212.893', saldo: '$528.787.107' },
  { p: 2, cuota: '$143.962.893', interes: '$18.507.549', amort: '$125.455.344', saldo: '$403.331.764' },
  { p: 3, cuota: '$143.962.893', interes: '$14.116.612', amort: '$129.846.281', saldo: '$273.485.483' },
  { p: 4, cuota: '$143.962.893', interes: '$9.571.992',  amort: '$134.390.901', saldo: '$139.094.582' },
  { p: 5, cuota: '$143.962.893', interes: '$4.868.310',  amort: '$139.094.583', saldo: '$0' },
]

const PRESTAMOS_PDF = [
  { alt: 'Alt 1 — Mixta',    monto: '$700.000.000', cuota: '$143.962.893', totalInt: '$69.814.463',  color: ACCENT },
  { alt: 'Alt 2 — Inhouse',  monto: '$800.000.000', cuota: '$177.185.099', totalInt: '$85.925.493',  color: INDIGO },
  { alt: 'Alt 3 — Low-Code', monto: '$450.000.000', cuota: '$99.666.618',  totalInt: '$48.333.090',  color: RED },
]

function Slide4() {
  return (
    <TwoCol
      label="Sistema de Amortización Francés"
      title="Simulación de Préstamo"
      left={
        <>
          <div style={{ background: `${ACCENT}10`, border: `1px solid ${ACCENT}30`, borderRadius: '6px', padding: '8px 12px' }}>
            <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: ACCENT, margin: '0 0 4px' }}>Cuota constante (C)</p>
            <p style={{ fontFamily: 'Merriweather, serif', fontSize: '14px', fontWeight: 700, color: C.text, margin: '0 0 4px' }}>C = P × i(1+i)ⁿ / [(1+i)ⁿ − 1]</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
              {[['P', 'Monto del préstamo'], ['i', 'Tasa de interés anual (3,5%)'], ['n', 'Períodos (5 años)'], ['Interés_t', 'Saldo_{t-1} × i']].map(([s, d]) => (
                <p key={s} style={{ fontSize: '8px', color: C.muted, margin: 0 }}>
                  <span style={{ fontWeight: 700, color: C.text }}>{s}</span> = {d}
                </p>
              ))}
            </div>
          </div>
          <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: C.label, margin: '4px 0 2px' }}>Tabla de amortización — Alt 1 Mixta (5 períodos completos)</p>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: '6px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', textAlign: 'center', padding: '5px 8px', background: `${ACCENT}20`, borderBottom: `1px solid ${C.border}` }}>
              {['Per.', 'Cuota', 'Interés', 'Amort.', 'Saldo'].map(h => (
                <span key={h} style={{ fontSize: '8px', fontWeight: 700, textTransform: 'uppercase', color: ACCENT }}>{h}</span>
              ))}
            </div>
            {TABLA_ALT1.map(({ p, cuota, interes, amort, saldo }, i) => (
              <div key={p} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', textAlign: 'center', padding: '5px 8px', background: i % 2 === 0 ? C.card : C.bg, borderBottom: i < TABLA_ALT1.length - 1 ? `1px solid ${C.border}` : 'none' }}>
                <span style={{ fontSize: '9px', fontWeight: 700, color: ACCENT }}>{p}</span>
                <span style={{ fontSize: '9px', color: C.muted }}>{cuota}</span>
                <span style={{ fontSize: '9px', color: AMBER, fontWeight: 600 }}>{interes}</span>
                <span style={{ fontSize: '9px', color: C.muted }}>{amort}</span>
                <span style={{ fontSize: '9px', color: p === 5 ? ACCENT : C.muted, fontWeight: p === 5 ? 700 : 400 }}>{saldo}</span>
              </div>
            ))}
          </div>
        </>
      }
      right={
        <>
          <BigStat value="3,5%" label="tasa anual · por debajo del 5,5% social" color={ACCENT} />
          <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: C.label, textAlign: 'center', margin: 0 }}>Comparativo de préstamos</p>
          {PRESTAMOS_PDF.map(({ alt, monto, cuota, totalInt, color }) => (
            <div key={alt} style={{ background: C.card, border: `1px solid ${C.border}`, borderLeft: `3px solid ${color}`, borderRadius: '6px', padding: '7px 10px', width: '100%' }}>
              <p style={{ fontSize: '10px', fontWeight: 700, color, margin: '0 0 2px' }}>{alt}</p>
              <p style={{ fontSize: '8px', color: C.muted, margin: '0 0 5px' }}>Préstamo bancario</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center' }}>
                {[['Monto', monto, C.text], ['Cuota/año', cuota, color], ['Total int.', totalInt, AMBER]].map(([l, v, c]) => (
                  <div key={String(l)}>
                    <p style={{ fontSize: '7px', color: C.dim, margin: 0 }}>{l}</p>
                    <p style={{ fontSize: '8px', fontWeight: 700, color: String(c), margin: 0 }}>{v}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{ background: `${ACCENT}10`, border: `1px solid ${ACCENT}30`, borderRadius: '6px', padding: '6px 10px', textAlign: 'center', width: '100%' }}>
            <p style={{ fontSize: '9px', color: C.muted, margin: 0 }}>
              Apalancamiento positivo: costo deuda <span style={{ color: ACCENT, fontWeight: 700 }}>3,5%</span> &lt; tasa social <span style={{ color: ACCENT, fontWeight: 700 }}>5,5%</span>
            </p>
          </div>
        </>
      }
    />
  )
}

// ─── Slide 5 — Indicadores VAN · TIR · PRI ───────────────────────────────────

const INDS_ALTS = [
  {
    id: 'Alt 1', nombre: 'Implementación Mixta', estado: 'VIABLE', estadoColor: ACCENT, color: ACCENT,
    van: '$1.792,6M', tir: '71,03%', pri: '2a 0m 7d',
  },
  {
    id: 'Alt 2', nombre: 'Desarrollo Inhouse', estado: 'RECOMENDADA ★', estadoColor: INDIGO, color: INDIGO,
    van: '$2.032,5M', tir: '100,24%', pri: '1a 5m 23d',
  },
  {
    id: 'Alt 3', nombre: 'Low-Code OutSystems/Mendix', estado: 'INVIABLE ✗', estadoColor: RED, color: RED,
    van: '-$8.284,2M', tir: 'Sin solución', pri: 'No recupera',
  },
]

function Slide5() {
  return (
    <div className="pdf-page" style={{ gap: '8px' }}>
      <div className="pdf-accent" style={{ backgroundColor: ACCENT }} />
      <p className="pdf-label" style={{ color: ACCENT }}>Evaluación Económica</p>
      <h2 className="pdf-title">Indicadores VAN · TIR · PRI</h2>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', minHeight: 0 }}>
        {INDS_ALTS.map(({ id, nombre, estado, estadoColor, color, van, tir, pri }) => (
          <div key={id} style={{ display: 'flex', flexDirection: 'column', border: `2px solid ${color}`, borderRadius: '10px', overflow: 'hidden', background: C.card }}>
            {/* Header */}
            <div style={{ padding: '8px 12px', background: `${color}18` }}>
              <p style={{ fontFamily: 'Merriweather, serif', fontSize: '16px', fontWeight: 700, color, margin: '0 0 2px' }}>{id}</p>
              <p style={{ fontSize: '9px', color: C.muted, margin: 0 }}>{nombre}</p>
            </div>
            {/* VAN */}
            {[
              { label: 'VAN', sub: 'Valor Actual Neto', val: van },
              { label: 'TIR', sub: 'Tasa Interna de Retorno', val: tir },
              { label: 'PRI', sub: 'Período de Recuperación', val: pri },
            ].map(({ label, sub, val }, i) => (
              <div key={label} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8px 12px', borderBottom: i < 2 ? `1px solid ${C.border}` : 'none' }}>
                <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.text, margin: '0 0 1px' }}>{label}</p>
                <p style={{ fontSize: '8px', color: C.muted, margin: '0 0 4px' }}>{sub}</p>
                <p style={{ fontFamily: 'Merriweather, serif', fontSize: '20px', fontWeight: 700, color, margin: 0, lineHeight: 1 }}>{val}</p>
              </div>
            ))}
            {/* Footer */}
            <div style={{ padding: '6px 12px', background: `${estadoColor}20`, textAlign: 'center' }}>
              <span style={{ fontFamily: 'Merriweather, serif', fontSize: '10px', fontWeight: 700, color: estadoColor }}>{estado}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Slide 6 — Comparativa ────────────────────────────────────────────────────

const ALTS_COMP = [
  {
    id: 'Alt 1', nombre: 'Implementación Mixta', estado: 'VIABLE', estadoColor: ACCENT,
    van: '$1.792,6M CLP', tir: '71,03%', pri: '2 a. 0 m. 7 d.',
    inv: '$1.350M', financ: 'Préstamo bancario · $700M',
    puntos: ['M1 y M3 desarrollo interno · M2, M4, M5 Low-Code', 'Distribuye riesgo tecnológico entre equipos', 'Mayor coordinación interna/externa requerida'],
    color: ACCENT, destacado: false,
  },
  {
    id: 'Alt 2', nombre: 'Desarrollo Inhouse', estado: 'RECOMENDADA', estadoColor: INDIGO,
    van: '$2.032,5M CLP', tir: '100,24%', pri: '1 a. 5 m. 23 d.',
    inv: '$1.320M', financ: 'Préstamo bancario · $800M',
    puntos: ['Todos los módulos con proveedores especializados', 'Genera propiedad intelectual replicable en MINSAL', 'Riesgo: cumplimiento de plazos en desarrollo interno'],
    color: INDIGO, destacado: true,
  },
  {
    id: 'Alt 3', nombre: 'Low-Code (OutSystems/Mendix)', estado: 'INVIABLE', estadoColor: RED,
    van: '-$8.284,2M CLP', tir: 'Sin solución', pri: 'No recupera',
    inv: '$1.330M', financ: 'Préstamo bancario · $450M',
    puntos: ['Costos fijos $16.670,6M/año superan ingresos FONASA', 'Déficit acumulado -$9.295M en 5 años', 'Licencias por transacción escalan con volumen'],
    color: RED, destacado: false,
  },
]

function Slide6() {
  return (
    <div className="pdf-page" style={{ gap: '8px' }}>
      <div className="pdf-accent" style={{ backgroundColor: ACCENT }} />
      <p className="pdf-label" style={{ color: ACCENT }}>Análisis Comparativo</p>
      <h2 className="pdf-title">Comparación de Alternativas</h2>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', minHeight: 0 }}>
        {ALTS_COMP.map(({ id, nombre, estado, estadoColor, van, tir, pri, inv, financ, puntos, color, destacado }) => (
          <div key={id} style={{ display: 'flex', flexDirection: 'column', border: `${destacado ? 2 : 1}px solid ${destacado ? color : C.border}`, borderRadius: '10px', overflow: 'hidden', background: C.card }}>
            {/* Header */}
            <div style={{ padding: '8px 12px', background: `${color}18` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                <p style={{ fontFamily: 'Merriweather, serif', fontSize: '16px', fontWeight: 700, color, margin: 0 }}>{id}</p>
                <span style={{ fontSize: '8px', fontWeight: 700, padding: '2px 7px', borderRadius: '10px', background: `${estadoColor}25`, color: estadoColor }}>{estado}</span>
              </div>
              <p style={{ fontSize: '9px', fontWeight: 600, color: C.muted, margin: 0 }}>{nombre}</p>
            </div>
            {/* Indicadores */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: `1px solid ${C.border}` }}>
              {[['VAN', van], ['TIR', tir], ['PRI', pri]].map(([l, v], i) => (
                <div key={String(l)} style={{ padding: '6px 4px', textAlign: 'center', borderRight: i < 2 ? `1px solid ${C.border}` : 'none' }}>
                  <p style={{ fontSize: '8px', fontWeight: 700, textTransform: 'uppercase', color: C.muted, margin: '0 0 2px' }}>{l}</p>
                  <p style={{ fontSize: '9px', fontWeight: 700, color, margin: 0 }}>{v}</p>
                </div>
              ))}
            </div>
            {/* Financiamiento */}
            <div style={{ padding: '6px 12px', borderBottom: `1px solid ${C.border}`, display: 'flex', gap: '14px' }}>
              <div>
                <p style={{ fontSize: '7px', textTransform: 'uppercase', color: C.label, margin: '0 0 1px' }}>Inversión</p>
                <p style={{ fontSize: '9px', fontWeight: 700, color: C.text, margin: 0 }}>{inv}</p>
              </div>
              <div>
                <p style={{ fontSize: '7px', textTransform: 'uppercase', color: C.label, margin: '0 0 1px' }}>Financiamiento</p>
                <p style={{ fontSize: '9px', fontWeight: 700, color: C.text, margin: 0 }}>{financ}</p>
              </div>
            </div>
            {/* Puntos */}
            <div style={{ padding: '6px 12px', flex: 1 }}>
              {puntos.map(p => (
                <div key={p} style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                  <span style={{ color, flexShrink: 0, fontWeight: 700 }}>›</span>
                  <span style={{ fontSize: '8px', color: C.muted, lineHeight: 1.35 }}>{p}</span>
                </div>
              ))}
            </div>
            {destacado && (
              <div style={{ padding: '5px 12px', background: `${color}18`, borderTop: `1px solid ${color}40`, textAlign: 'center' }}>
                <p style={{ fontSize: '9px', fontWeight: 700, color, margin: 0 }}>VAN +$239,9M sobre Alt 1 · PI replicable en MINSAL</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Slide 7 — Conclusión ─────────────────────────────────────────────────────

const PUNTOS_PDF = [
  { titulo: 'Capacidad financiera comprobada', desc: 'Ingresos FONASA $12.900M–$13.500M + presupuesto fiscal $1.600M cubren cuotas $177M/año. Margen positivo desde Año 1.', color: ACCENT },
  { titulo: 'Alt 2 Inhouse: máximo VAN', desc: 'VAN $2.032,5M CLP (+$239,9M vs Alt 1), TIR 100,24% (18,2× el umbral), PRI 1 año 5 meses 23 días.', color: INDIGO },
  { titulo: 'Propiedad intelectual replicable', desc: 'Software propio de RedNorte → replicable en otras redes MINSAL sin costo marginal de licenciamiento.', color: AMBER },
  { titulo: 'Alt 3 Low-Code: descartada', desc: 'Costos fijos $16.670,6M/año superan ingresos. Déficit acumulado -$9.295M. Inviable por diseño de costos.', color: RED },
  { titulo: 'Alt 1 Mixta: opción de repliegue', desc: 'VAN $1.792,6M, PRI 2 años. Si los plazos inhouse se vuelven inciertos, Alt 1 es la contingencia natural.', color: '#94A3B8' },
]

function Slide7() {
  return (
    <TwoCol
      accent={INDIGO}
      label="Conclusión y Recomendación"
      title="Alternativa Recomendada: Inhouse"
      left={
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {PUNTOS_PDF.map(({ titulo, desc, color }) => (
              <div key={titulo} style={{ background: C.card, border: `1px solid ${C.border}`, borderLeft: `3px solid ${color}`, borderRadius: '6px', padding: '7px 12px' }}>
                <p style={{ fontSize: '10px', fontWeight: 700, color: C.text, margin: '0 0 2px' }}>{titulo}</p>
                <p style={{ fontSize: '8px', color: C.muted, margin: 0, lineHeight: 1.35 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: `${INDIGO}08`, border: `1px solid ${INDIGO}35`, borderRadius: '6px', padding: '8px 12px' }}>
            <p style={{ fontSize: '9px', fontStyle: 'italic', color: C.muted, margin: 0, lineHeight: 1.45 }}>
              "Cuando VAN, TIR y PRI{' '}
              <span style={{ color: INDIGO, fontStyle: 'normal', fontWeight: 700 }}>convergen en la misma dirección</span>,
              {' '}la decisión es robusta frente a variaciones razonables en los supuestos."
            </p>
          </div>
        </>
      }
      right={<BigStat value="$2.032M" label="VAN · Alt 2 Desarrollo Inhouse" color={INDIGO} />}
    />
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function Ep3PdfView() {
  return (
    <div className="pdf-root">
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <Slide7 />
    </div>
  )
}
