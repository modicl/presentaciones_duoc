import duocLogo from '../../assets/Logo_DuocUC.svg'

const ACCENT = '#10B981'
const INDIGO = '#6366F1'
const RED = '#EF4444'
const AMBER = '#F59E0B'

const C = {
  bg: '#FFFFFF',
  card: '#F8FAFC',
  right: '#F1F5F9',
  border: '#E2E8F0',
  text: '#1A202C',
  muted: '#4A5568',
  label: '#6B7280',
  dim: '#9CA3AF',
}

function PBadge({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '1px 7px',
      borderRadius: '10px',
      fontSize: '8px',
      fontWeight: 700,
      color,
      background: `${color}22`,
      whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  )
}

function FullPage({
  label,
  title,
  accentColor = ACCENT,
  children,
}: {
  label: string
  title: string
  accentColor?: string
  children: React.ReactNode
}) {
  return (
    <div className="pdf-page" style={{ gap: '8px' }}>
      <div className="pdf-accent" style={{ backgroundColor: accentColor }} />
      <p className="pdf-label" style={{ color: accentColor }}>{label}</p>
      <h2 className="pdf-title">{title}</h2>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', minHeight: 0 }}>
        {children}
      </div>
    </div>
  )
}

function Card({ children, leftColor }: { children: React.ReactNode; leftColor?: string }) {
  return (
    <div style={{
      background: C.card,
      border: `1px solid ${C.border}`,
      ...(leftColor ? { borderLeft: `3px solid ${leftColor}` } : {}),
      borderRadius: '6px',
      padding: '8px 12px',
    }}>
      {children}
    </div>
  )
}

// ─── Slide 1 — Portada ────────────────────────────────────────────────

function Slide1() {
  const team = ['Javier Arancibia', 'Luciano Riveros', 'Danilo Quiroz', 'Felipe Villarroel']
  return (
    <div className="pdf-page" style={{ flexDirection: 'row', padding: 0, gap: 0 }}>
      <div className="pdf-accent" style={{ backgroundColor: ACCENT }} />
      <div style={{
        flex: 3, padding: '16mm 12mm 14mm 24mm',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px',
      }}>
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
          {team.map(n => (
            <span key={n} style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>{n}</span>
          ))}
        </div>
        <p style={{ fontSize: '10px', color: C.dim, margin: '4px 0 0' }}>Docente: Andrés Santoro Del Campo</p>
      </div>
      <div style={{
        flex: 2, borderLeft: `1px solid ${C.border}`, background: C.right,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: '16px', padding: '20mm 16mm',
      }}>
        <img src={duocLogo} alt="Duoc UC" style={{ width: '110px', opacity: 0.9 }} />
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'Merriweather, serif', fontSize: '44px', fontWeight: 700, color: ACCENT, lineHeight: 1, margin: 0 }}>EP3</p>
          <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', color: C.dim, margin: '8px 0 0' }}>
            Evaluación de Proyectos · 2026
          </p>
        </div>
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '8px 14px', textAlign: 'center', width: '100%' }}>
          <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: C.dim, margin: '0 0 3px' }}>Tema</p>
          <p style={{ fontSize: '10px', fontWeight: 600, color: C.muted, margin: 0 }}>Flujo de Caja · VAN · TIR · PRI<br />Simulación de Préstamo</p>
        </div>
      </div>
    </div>
  )
}

// ─── Slide 2 — Introducción ───────────────────────────────────────────

function Slide2() {
  const cards = [
    {
      title: 'RedNorte — Antecedentes', color: ACCENT,
      items: [
        '16 nodos asistenciales en la macrozona norte',
        '1.200 funcionarios diurnos · 75% de capacidad instalada utilizada',
        '717.750 atenciones/año · tarifa FONASA $18.000 CLP prom.',
      ],
    },
    {
      title: 'El Problema Financiero Central', color: AMBER,
      items: [
        '15% de inasistencia → ~107.663 cupos clínicos inutilizados/año',
        'Margen operacional ajustado: masa salarial $13.737,6M vs ingresos ~$14.500M',
        'Necesidad de elegir alternativa con menor carga fija adicional',
      ],
    },
    {
      title: 'EDGDA — Sistema Evaluado', color: INDIGO,
      items: [
        '5 módulos integrados bajo estándar HL7 FHIR',
        '3 alternativas: Mixta ($1.350M), Inhouse ($1.320M), Low-Code ($1.330M)',
        'Evaluación a 5 años con tasa social de descuento 5,5% (MIDESO 2024)',
      ],
    },
  ]
  return (
    <FullPage label="Contexto del Proyecto" title="RedNorte y el Sistema EDGDA" accentColor={ACCENT}>
      {cards.map(({ title, color, items }) => (
        <Card key={title} leftColor={color}>
          <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color, margin: '0 0 5px' }}>{title}</p>
          <ul className="pdf-list">
            {items.map(item => (
              <li key={item} className="pdf-bullet"><span style={{ color }}>›</span><span>{item}</span></li>
            ))}
          </ul>
        </Card>
      ))}
    </FullPage>
  )
}

// ─── Slide 3 — Flujo de Caja ──────────────────────────────────────────

const SUPUESTOS = [
  { param: 'Horizonte de evaluación', valor: '5 años' },
  { param: 'Tasa Social de Descuento', valor: '5,5% anual (MIDESO 2024)' },
  { param: 'Impuesto a la renta', valor: '0% — entidad pública' },
  { param: 'Tarifa FONASA prom.', valor: '$18.000 CLP / prestación' },
  { param: 'Depreciación equipos TI', valor: 'Lineal a 5 años (NICSP)' },
  { param: 'Depreciación software', valor: 'Lineal a 3 años (NICSP)' },
]

const ALTS_FC = [
  { nombre: 'Alt 1 — Mixta', inv0: '-$650M', fc1: '$387,7M', fc2: '$519,4M', acum5: '$2.256,8M', color: ACCENT },
  { nombre: 'Alt 2 — Inhouse', inv0: '-$520M', fc1: '$495,9M', fc2: '$552,4M', acum5: '$2.501,6M', color: INDIGO },
  { nombre: 'Alt 3 — Low-Code', inv0: '-$580M', fc1: '-$2.313,9M', fc2: '-$2.186,7M', acum5: '-$9.295,0M', color: RED },
]

function Slide3() {
  return (
    <div className="pdf-page" style={{ flexDirection: 'row', padding: 0, gap: 0 }}>
      <div className="pdf-accent" style={{ backgroundColor: ACCENT }} />
      <div style={{ flex: 3, padding: '14mm 10mm 12mm 24mm', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
        <p className="pdf-label" style={{ color: ACCENT }}>Evaluación Financiera</p>
        <h2 className="pdf-title" style={{ marginBottom: '6px' }}>Flujo de Caja</h2>
        <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: C.dim, margin: 0 }}>Supuestos y parámetros generales</p>
        <div style={{ border: `1px solid ${C.border}`, borderRadius: '6px', overflow: 'hidden' }}>
          {SUPUESTOS.map(({ param, valor }, i) => (
            <div key={param} style={{
              display: 'flex', justifyContent: 'space-between', padding: '5px 12px',
              background: i % 2 === 0 ? C.card : C.bg,
              borderBottom: i < SUPUESTOS.length - 1 ? `1px solid ${C.border}` : 'none',
            }}>
              <span style={{ fontSize: '9px', color: C.label }}>{param}</span>
              <span style={{ fontSize: '9px', fontWeight: 600, color: C.muted }}>{valor}</span>
            </div>
          ))}
        </div>
        <div style={{ background: `${ACCENT}10`, border: `1px solid ${ACCENT}30`, borderRadius: '6px', padding: '8px 12px' }}>
          <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: ACCENT, margin: '0 0 4px' }}>Estructura del FCN</p>
          <p style={{ fontSize: '9px', color: C.muted, margin: 0, lineHeight: 1.4 }}>
            Ingresos FONASA + Presupuesto Fiscal − Costos Fijos − Costos Variables TI
            − Depreciaciones − Intereses − Amortización préstamo ± Inversión Año 0
          </p>
        </div>
      </div>
      <div style={{
        flex: 2, borderLeft: `1px solid ${C.border}`, background: C.right,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px', padding: '14mm 12mm',
      }}>
        <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: C.dim, textAlign: 'center', margin: 0 }}>
          Flujos de Caja Neto (resumen)
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', textAlign: 'center', gap: '2px', marginBottom: '4px' }}>
          {['', 'Año 0', 'Año 1', 'Año 2', 'Acum.5'].map(h => (
            <span key={h} style={{ fontSize: '7px', textTransform: 'uppercase', color: C.dim, fontWeight: 700 }}>{h}</span>
          ))}
        </div>
        {ALTS_FC.map(({ nombre, inv0, fc1, fc2, acum5, color }) => (
          <div key={nombre} style={{ border: `1px solid ${color}`, borderRadius: '6px', overflow: 'hidden' }}>
            <div style={{ background: `${color}18`, padding: '4px 8px' }}>
              <p style={{ fontSize: '9px', fontWeight: 700, color, margin: 0 }}>{nombre}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', textAlign: 'center', padding: '6px 8px', background: C.card }}>
              <span />
              <span style={{ fontSize: '8px', fontWeight: 600, color: RED }}>{inv0}</span>
              <span style={{ fontSize: '8px', color: color === RED ? RED : C.muted }}>{fc1}</span>
              <span style={{ fontSize: '8px', color: color === RED ? RED : C.muted }}>{fc2}</span>
              <span style={{ fontSize: '8px', fontWeight: 700, color: color === RED ? RED : ACCENT }}>{acum5}</span>
            </div>
          </div>
        ))}
        <div style={{ background: `${RED}08`, border: `1px solid ${RED}30`, borderRadius: '6px', padding: '6px 10px', textAlign: 'center' }}>
          <p style={{ fontSize: '9px', color: C.label, margin: 0 }}>
            Alt 3: costos fijos $16.670,6M/año{' '}
            <span style={{ color: RED, fontWeight: 700 }}>superan ingresos</span>
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Slide 4 — Préstamo ───────────────────────────────────────────────

const PRESTAMOS_PDF = [
  { alt: 'Alt 1 — Mixta', fuente: 'MINSAL/FNDR', monto: '$700M', cuota: '$143.962.893', totalInt: '$69.814.463', color: ACCENT },
  { alt: 'Alt 2 — Inhouse', fuente: 'Préstamo Bancario', monto: '$800M', cuota: '$177.185.099', totalInt: '$85.925.493', color: INDIGO },
  { alt: 'Alt 3 — Low-Code', fuente: 'MINSAL/FNDR', monto: '$450M', cuota: '$99.666.618', totalInt: '$48.333.090', color: RED },
]

const TABLA_ALT1 = [
  { p: 1, cuota: '$143.962.893', interes: '$22.750.000', amort: '$121.212.893', saldo: '$528.787.107' },
  { p: 2, cuota: '$143.962.893', interes: '$18.507.549', amort: '$125.455.344', saldo: '$403.331.764' },
  { p: 5, cuota: '$143.962.893', interes: '$4.868.310', amort: '$139.094.583', saldo: '$0' },
]

function Slide4() {
  return (
    <div className="pdf-page" style={{ flexDirection: 'row', padding: 0, gap: 0 }}>
      <div className="pdf-accent" style={{ backgroundColor: ACCENT }} />
      <div style={{ flex: 3, padding: '14mm 10mm 12mm 24mm', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
        <p className="pdf-label" style={{ color: ACCENT }}>Sistema de Amortización Francés</p>
        <h2 className="pdf-title" style={{ marginBottom: '6px' }}>Simulación de Préstamo</h2>
        <div style={{ background: `${ACCENT}10`, border: `1px solid ${ACCENT}30`, borderRadius: '6px', padding: '8px 12px' }}>
          <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: ACCENT, margin: '0 0 4px' }}>Cuota constante (C)</p>
          <p style={{ fontSize: '14px', fontFamily: 'Merriweather, serif', fontWeight: 700, color: C.text, margin: '0 0 4px' }}>
            C = P × i(1+i)ⁿ / [(1+i)ⁿ − 1]
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
            {[['P', 'Monto del préstamo'], ['i', 'Tasa interés anual (3,5%)'], ['n', 'Períodos (5 años)'], ['Interés_t', 'Saldo_{t-1} × i']].map(([s, d]) => (
              <p key={s} style={{ fontSize: '8px', color: C.dim, margin: 0 }}>
                <span style={{ fontWeight: 700, color: C.label }}>{s}</span> = {d}
              </p>
            ))}
          </div>
        </div>
        <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: C.dim, margin: '4px 0 2px' }}>
          Tabla de amortización Alt 1 (períodos 1, 2 y 5)
        </p>
        <div style={{ border: `1px solid ${C.border}`, borderRadius: '6px', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', textAlign: 'center', padding: '5px 8px', background: `${ACCENT}15`, borderBottom: `1px solid ${C.border}` }}>
            {['Per.', 'Cuota', 'Interés', 'Amort.', 'Saldo'].map(h => (
              <span key={h} style={{ fontSize: '8px', fontWeight: 700, textTransform: 'uppercase', color: ACCENT }}>{h}</span>
            ))}
          </div>
          {TABLA_ALT1.map(({ p, cuota, interes, amort, saldo }) => (
            <div key={p} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', textAlign: 'center', padding: '5px 8px', borderBottom: `1px solid ${C.border}` }}>
              <span style={{ fontSize: '8px', fontWeight: 700, color: ACCENT }}>{p}</span>
              <span style={{ fontSize: '8px', color: C.muted }}>{cuota}</span>
              <span style={{ fontSize: '8px', color: AMBER }}>{interes}</span>
              <span style={{ fontSize: '8px', color: C.label }}>{amort}</span>
              <span style={{ fontSize: '8px', color: C.dim }}>{saldo}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        flex: 2, borderLeft: `1px solid ${C.border}`, background: C.right,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px', padding: '14mm 12mm',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4px' }}>
          <span style={{ fontFamily: 'Merriweather, serif', fontSize: '48px', fontWeight: 700, color: ACCENT, lineHeight: 1, display: 'block' }}>3,5%</span>
          <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.12em', color: C.dim, margin: '4px 0 0' }}>tasa anual · por debajo del 5,5% social</p>
        </div>
        <p style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', color: C.dim, textAlign: 'center', margin: 0 }}>Comparativo de préstamos</p>
        {PRESTAMOS_PDF.map(({ alt, fuente, monto, cuota, totalInt, color }) => (
          <div key={alt} style={{ background: C.card, border: `1px solid ${C.border}`, borderLeft: `3px solid ${color}`, borderRadius: '6px', padding: '7px 10px' }}>
            <p style={{ fontSize: '9px', fontWeight: 700, color, margin: '0 0 2px' }}>{alt}</p>
            <p style={{ fontSize: '8px', color: C.dim, margin: '0 0 4px' }}>{fuente}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center', gap: '4px' }}>
              {[{ l: 'Monto', v: monto, c: C.muted }, { l: 'Cuota/año', v: cuota, c: color }, { l: 'Total int.', v: totalInt, c: AMBER }].map(({ l, v, c }) => (
                <div key={l}>
                  <p style={{ fontSize: '7px', color: C.dim, margin: 0 }}>{l}</p>
                  <p style={{ fontSize: '8px', fontWeight: 700, color: c, margin: 0 }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ background: `${ACCENT}08`, border: `1px solid ${ACCENT}25`, borderRadius: '6px', padding: '6px 10px', textAlign: 'center' }}>
          <p style={{ fontSize: '9px', color: C.label, margin: 0 }}>
            Apalancamiento positivo: costo deuda (3,5%) &lt; tasa social (5,5%)
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Slide 5 — Indicadores ────────────────────────────────────────────

const INDS = [
  {
    sigla: 'VAN', nombre: 'Valor Actual Neto',
    formula: 'Σ FCt / (1 + r)ᵗ  para t = 0…n',
    criterio: 'VAN > 0',
    alt1: { v: '$1.792,6M CLP', ok: true },
    alt2: { v: '$2.032,5M CLP', ok: true },
    alt3: { v: '-$8.284,2M CLP', ok: false },
    color: ACCENT,
  },
  {
    sigla: 'TIR', nombre: 'Tasa Interna de Retorno',
    formula: 'r tal que Σ FCt / (1+r)ᵗ = 0',
    criterio: 'TIR > 5,5%',
    alt1: { v: '71,03%', ok: true },
    alt2: { v: '100,24%', ok: true },
    alt3: { v: 'Sin solución', ok: false },
    color: INDIGO,
  },
  {
    sigla: 'PRI', nombre: 'Período de Recuperación',
    formula: 'A + |FCA_A| / FC_{A+1}',
    criterio: 'Menor es mejor',
    alt1: { v: '2 a. 0 m. 7 d.', ok: true },
    alt2: { v: '1 a. 5 m. 23 d.', ok: true },
    alt3: { v: 'No recupera', ok: false },
    color: AMBER,
  },
]

function Slide5() {
  return (
    <FullPage label="Evaluación Económica" title="Indicadores VAN · TIR · PRI" accentColor={ACCENT}>
      <p style={{ fontSize: '9px', color: C.dim, margin: '-4px 0 4px' }}>
        Tasa social: <span style={{ color: ACCENT, fontWeight: 700 }}>5,5%</span> · Horizonte: 5 años · Impuesto: 0% (entidad pública)
      </p>
      {INDS.map(({ sigla, nombre, formula, criterio, alt1, alt2, alt3, color }) => (
        <div key={sigla} style={{ border: `1px solid ${C.border}`, borderRadius: '6px', overflow: 'hidden' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '100px 1fr 120px 1fr 1fr 1fr',
            padding: '6px 12px', background: `${color}15`, gap: '8px', alignItems: 'center',
          }}>
            <div>
              <span style={{ fontFamily: 'Merriweather, serif', fontSize: '16px', fontWeight: 700, color }}>{sigla}</span>
              <p style={{ fontSize: '7px', color: C.dim, margin: 0 }}>{nombre}</p>
            </div>
            <p style={{ fontSize: '8px', color: C.muted, margin: 0, fontFamily: 'monospace' }}>{formula}</p>
            <PBadge color={color}>{criterio}</PBadge>
            {[alt1, alt2, alt3].map((alt, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '9px', fontWeight: 700, color: alt.ok ? (i === 1 ? color : C.muted) : RED }}>
                  {alt.v} {i === 1 && alt.ok ? '★' : !alt.ok ? '✗' : ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '4px' }}>
        {[{ l: 'Alt 1 — Mixta', c: ACCENT }, { l: 'Alt 2 — Inhouse ★', c: INDIGO }, { l: 'Alt 3 — Low-Code ✗', c: RED }].map(({ l, c }) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: c }} />
            <span style={{ fontSize: '9px', color: C.label }}>{l}</span>
          </div>
        ))}
      </div>
    </FullPage>
  )
}

// ─── Slide 6 — Comparativa ────────────────────────────────────────────

const ALTS_COMP = [
  {
    id: 'Alt 1', nombre: 'Implementación Mixta', estado: 'VIABLE', estadoColor: ACCENT,
    van: '$1.792,6M', tir: '71,03%', pri: '2 a. 0 m. 7 d.',
    inv: '$1.350M', financ: 'MINSAL/FNDR $700M',
    puntos: ['M1 y M3 desarrollo interno · M2, M4, M5 Low-Code', 'Distribuye riesgo tecnológico entre equipos', 'Mayor coordinación interna/externa requerida'],
    color: ACCENT, destacado: false,
  },
  {
    id: 'Alt 2', nombre: 'Desarrollo Inhouse', estado: 'RECOMENDADA', estadoColor: INDIGO,
    van: '$2.032,5M', tir: '100,24%', pri: '1 a. 5 m. 23 d.',
    inv: '$1.320M', financ: 'Préstamo bancario $800M',
    puntos: ['Todos los módulos con proveedores especializados', 'Genera propiedad intelectual replicable en MINSAL', 'Riesgo: cumplimiento de plazos de desarrollo'],
    color: INDIGO, destacado: true,
  },
  {
    id: 'Alt 3', nombre: 'Low-Code (OutSystems/Mendix)', estado: 'INVIABLE', estadoColor: RED,
    van: '-$8.284,2M', tir: 'Sin sol.', pri: 'No recupera',
    inv: '$1.330M', financ: 'MINSAL/FNDR $450M',
    puntos: ['Costos fijos $16.670,6M/año superan ingresos', 'Déficit acumulado -$9.295M en 5 años', 'Licencias por transacción escalan con volumen'],
    color: RED, destacado: false,
  },
]

function Slide6() {
  return (
    <FullPage label="Análisis Comparativo" title="Comparación de Alternativas" accentColor={ACCENT}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', flex: 1 }}>
        {ALTS_COMP.map(({ id, nombre, estado, estadoColor, van, tir, pri, inv, financ, puntos, color, destacado }) => (
          <div key={id} style={{
            border: `${destacado ? 2 : 1}px solid ${destacado ? color : C.border}`,
            borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ background: `${color}15`, padding: '7px 10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                <span style={{ fontFamily: 'Merriweather, serif', fontSize: '13px', fontWeight: 700, color }}>{id}</span>
                <PBadge color={estadoColor}>{estado}</PBadge>
              </div>
              <p style={{ fontSize: '9px', color: C.muted, margin: 0 }}>{nombre}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center', padding: '6px 8px', borderBottom: `1px solid ${C.border}` }}>
              {[['VAN', van], ['TIR', tir], ['PRI', pri]].map(([l, v]) => (
                <div key={l}>
                  <p style={{ fontSize: '7px', textTransform: 'uppercase', color: C.dim, margin: 0 }}>{l}</p>
                  <p style={{ fontSize: '9px', fontWeight: 700, color: color === RED ? RED : color, margin: 0 }}>{v}</p>
                </div>
              ))}
            </div>
            <div style={{ padding: '4px 10px', borderBottom: `1px solid ${C.border}` }}>
              <p style={{ fontSize: '7px', color: C.dim, margin: 0 }}>Inversión: <span style={{ color: C.label }}>{inv}</span></p>
              <p style={{ fontSize: '7px', color: C.dim, margin: 0 }}>Financ.: <span style={{ color: C.label }}>{financ}</span></p>
            </div>
            <div style={{ padding: '6px 10px', flex: 1 }}>
              {puntos.map(p => (
                <p key={p} style={{ fontSize: '8px', color: C.label, margin: '0 0 2px', display: 'flex', gap: '4px' }}>
                  <span style={{ color }}>›</span>{p}
                </p>
              ))}
            </div>
            {destacado && (
              <div style={{ background: `${color}18`, borderTop: `1px solid ${color}40`, padding: '5px 10px', textAlign: 'center' }}>
                <p style={{ fontSize: '9px', fontWeight: 700, color, margin: 0 }}>VAN +$239,9M vs Alt 1 · PI replicable MINSAL</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </FullPage>
  )
}

// ─── Slide 7 — Conclusión ─────────────────────────────────────────────

const PUNTOS_PDF = [
  { titulo: 'Capacidad financiera comprobada', desc: 'Ingresos FONASA $12.900M–$13.500M + presupuesto fiscal $1.600M cubren cuotas $177M/año. Margen positivo desde Año 1.', color: ACCENT },
  { titulo: 'Alt 2 Inhouse: máximo VAN', desc: 'VAN $2.032,5M CLP (+$239,9M vs Alt 1), TIR 100,24% (18,2× el umbral), PRI 1 año 5 meses 23 días.', color: INDIGO },
  { titulo: 'Propiedad intelectual replicable', desc: 'Software propio de RedNorte → replicable en otras redes MINSAL sin costo marginal de licenciamiento.', color: AMBER },
  { titulo: 'Alt 3 Low-Code: descartada', desc: 'Costos fijos $16.670,6M/año superan ingresos. Déficit acumulado -$9.295M. Inviable por diseño de costos.', color: RED },
  { titulo: 'Alt 1 Mixta: opción de repliegue', desc: 'VAN $1.792,6M, PRI 2 años. Si los plazos inhouse se vuelven inciertos, Alt 1 es la contingencia natural.', color: '#94A3B8' },
]

function Slide7() {
  return (
    <FullPage label="Conclusión y Recomendación" title="Alternativa Recomendada: Inhouse" accentColor={INDIGO}>
      {PUNTOS_PDF.map(({ titulo, desc, color }) => (
        <div key={titulo} style={{
          display: 'flex', gap: '8px', background: C.card, border: `1px solid ${C.border}`,
          borderLeft: `3px solid ${color}`, borderRadius: '6px', padding: '7px 12px',
        }}>
          <div>
            <p style={{ fontSize: '10px', fontWeight: 700, color: C.text, margin: '0 0 2px' }}>{titulo}</p>
            <p style={{ fontSize: '9px', color: C.muted, margin: 0, lineHeight: 1.35 }}>{desc}</p>
          </div>
        </div>
      ))}
      <div style={{ background: `${INDIGO}08`, border: `1px solid ${INDIGO}40`, borderRadius: '6px', padding: '8px 14px', marginTop: '2px' }}>
        <p style={{ fontSize: '10px', fontStyle: 'italic', color: C.muted, margin: 0, lineHeight: 1.45 }}>
          "Cuando VAN, TIR y PRI{' '}
          <span style={{ color: INDIGO, fontStyle: 'normal' }}>convergen en la misma dirección</span>,
          {' '}la decisión es robusta frente a variaciones razonables en los supuestos."
        </p>
      </div>
    </FullPage>
  )
}

// ─── Main export ──────────────────────────────────────────────────────

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
