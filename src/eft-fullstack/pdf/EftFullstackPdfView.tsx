import duocLogo from '../../assets/Logo_DuocUC.svg'
import PdfLayout from '../../pdf/PdfLayout'

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

function Tag({ children, color }: { children: React.ReactNode; color: string }) {
  return <span className="pdf-badge" style={{ color, background: color + '22' }}>{children}</span>
}

/* ── Slide 1 — Portada ────────────────────────────── */
function Slide1() {
  return (
    <div className="pdf-page pdf-page--center">
      <div className="pdf-accent" style={{ backgroundColor: '#307FE2' }} />
      <img src={duocLogo} alt="Duoc UC" className="pdf-logo" />
      <p className="pdf-label" style={{ color: '#307FE2' }}>DSY1106 — Desarrollo Fullstack III · Evaluación Final Transversal</p>
      <h1 className="pdf-title--hero">Defensa de Arquitectura — Plataforma PRISMA</h1>
      <p className="pdf-subtitle">Microservicios NestJS · SPA React (BFF) · Motor IA multi-agente (HITL) para generación de PACI</p>
      <div className="pdf-divider" />
      <div className="pdf-team">
        {['Javier Arancibia', 'Luciano Riveros', 'Danilo Quiroz', 'Felipe Villarroel'].map(n => (
          <span key={n}>{n}</span>
        ))}
      </div>
      <p className="pdf-footnote">Evaluación Final Transversal · Defensa oral (15 min) · 2026</p>
    </div>
  )
}

/* ── Slide 2 — Agenda ─────────────────────────────── */
function Slide2() {
  const ejes = [
    ['01', 'Arquitectura de microservicios', '6 servicios NestJS + motor IA + SPA · persistencia políglota'],
    ['02', 'Backend y Frontend', 'Decisiones, aciertos y dificultades (retrospectiva)'],
    ['03', 'Patrones de diseño', 'BFF · Repository · DI · Guard · Chain of Responsibility'],
    ['04', 'Estrategia de branching', 'Trunk-based + feature branches + CI bloqueante'],
    ['05', 'Integración back ↔ front ↔ datos', 'BFF, propagación JWT y coordinación PG · DynamoDB · S3'],
    ['06', 'Pruebas y calidad', '1322 unitarias · 40 funcionales · honestidad técnica'],
  ]
  return (
    <PdfLayout label="Agenda · 15 minutos" title="Seis ejes de la defensa" stat="13" statLabel="indicadores de rúbrica cubiertos">
      <div className="pdf-grid-2">
        {ejes.map(([num, t, d]) => (
          <Card key={num}>
            <div className="pdf-pilar-header">
              <span className="pdf-pilar-num">{num}</span>
              <strong>{t}</strong>
            </div>
            <p className="pdf-pilar-desc">{d}</p>
          </Card>
        ))}
      </div>
    </PdfLayout>
  )
}

/* ── Slide 3 — Arquitectura ───────────────────────── */
function Slide3() {
  const rows = [
    ['SPA React · prisma-front', 'Vite · puerto 3002 · único cliente'],
    ['bff-prisma (3010)', 'Backend-for-Frontend · agrega /api/dashboard/me · propaga JWT'],
    ['ms-users (3001) · perfil-alumno (3005)', 'esquemas users · public'],
    ['ms-docs (3000) · adminpanel (3004)', 'esquema jobs · dashboard admin'],
    ['prisma_workflow · Motor IA', 'Python · Gemini + Google ADK (desacoplado)'],
    ['PostgreSQL Neon · DynamoDB · S3 · Supabase Auth', 'persistencia políglota'],
  ]
  return (
    <PdfLayout label="Indicadores 1 y 12 — Arquitectura" title="Seis microservicios, una puerta" stat="6" statLabel="microservicios + motor IA">
      <div className="pdf-pilares">
        {rows.map(([t, d], i) => (
          <Card key={i}>
            <div className="pdf-module-row">
              <span className="pdf-module-num">{i + 1}</span>
              <div>
                <p className="pdf-module-name">{t}</p>
                <p className="pdf-module-desc">{d}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PdfLayout>
  )
}

/* ── Slide 4 — Requerimientos ─────────────────────── */
function Slide4() {
  const reqs = [
    ['Generar PACI para estudiantes con NEE', 'Cumple Decretos Mineduc 170, 83 y 67 con supervisión docente (Human-in-the-Loop).'],
    ['Workflow IA multi-agente con checkpoints', 'prisma_workflow encadena agentes con estado de sesión en DynamoDB (fase, mensajes, HITL).'],
    ['Multi-tenant por colegio', 'colegioId recorre los 3 microservicios: cada establecimiento opera su propia data.'],
    ['Entregable DOCX descargable', 'Desde el PACI + planificación se genera DOCX en S3; descarga vía URL prefirmada (900 s).'],
  ]
  return (
    <PdfLayout label="Indicador 1 — Necesidad del cliente" title="De la necesidad NEE al PACI" accentColor="#9B59B6">
      <div className="pdf-modules">
        {reqs.map(([t, d], i) => (
          <Card key={i}>
            <p className="pdf-module-name">{t}</p>
            <p className="pdf-module-desc">{d}</p>
          </Card>
        ))}
      </div>
      <div className="pdf-tagline">
        Flujo: carga de insumos → gates de compliance → agentes generan → docente aprueba → exporta DOCX.
      </div>
    </PdfLayout>
  )
}

/* ── Slide 5 — Ética ──────────────────────────────── */
function Slide5() {
  const items = [
    ['#E24030', 'Compliance gates', 'Bloquea el PACI antes de invocar el LLM si hay PII (Ley 21.719), informe vencido (D170) o NEE no reconocida (D83).'],
    ['#307FE2', 'Seguridad', 'JWT Supabase + Guards por rol (TEACHER/SUPERADMIN). UUID como PK. URLs prefirmadas 900 s.'],
    ['#9B59B6', 'Privacidad y auditoría', 'AuditService + logs_usuarios registran quién/cuándo/IP sin bloquear el negocio. PII nunca como URL pública.'],
    ['#43B02A', 'Sostenibilidad', 'Gates preventivos evitan gasto de tokens. TTL DynamoDB 7 días purga sesiones muertas. Políglota = menos desperdicio.'],
  ]
  return (
    <PdfLayout label="Indicadores 1 y 7 — Ética y Seguridad" title="Compliance antes del token" accentColor="#E24030">
      <div className="pdf-grid-2">
        {items.map(([color, t, d]) => (
          <Card key={t}>
            <p className="pdf-card-title" style={{ color }}>{t}</p>
            <p className="pdf-pilar-desc">{d}</p>
          </Card>
        ))}
      </div>
      <div className="pdf-tagline">
        ¿Por qué compliance antes del LLM? Es preventivo: evita exponer PII, reduce costo y energía, y no genera un PACI sobre datos inválidos.
      </div>
    </PdfLayout>
  )
}

/* ── Slide 6 — Retrospectiva ──────────────────────── */
function Slide6() {
  const cols: [string, string, [string, string][]][] = [
    ['Backend · NestJS', '#307FE2', [
      ['Módulos por dominio + DI', 'PrismaService @Injectable reutilizable con ciclo de vida.'],
      ['Repository tipado (Prisma)', 'job.findMany con paginación; equivalente a JPA/Hibernate.'],
    ]],
    ['Frontend · React + Vite', '#FFB800', [
      ['Capa de servicios por dominio', 'auth / jobs / paci / admin desacoplan la UI.'],
      ['SSE para sesión activa', 'ActiveSessionContext sigue agent_start / completed.'],
    ]],
    ['✓ Aciertos', '#43B02A', [
      ['Tipados Prisma extremo a extremo', 'Menos errores en runtime, refactors seguros.'],
      ['BFF desacopla la SPA', 'El front no conoce la topología de microservicios.'],
    ]],
    ['⚠ Dificultades', '#E24030', [
      ['Claims de rol en el JWT', 'Bugs CP-12/13/14: 403 indebidos.'],
      ['Cobertura inicial baja del front', '26% → 81% líneas tras el esfuerzo del equipo.'],
    ]],
  ]
  return (
    <PdfLayout label="Indicador 2 — Retrospectiva" title="Decisiones de backend y frontend">
      <div className="pdf-grid-2">
        {cols.map(([title, color, items]) => (
          <Card key={title}>
            <p className="pdf-card-title" style={{ color }}>{title}</p>
            <ul className="pdf-list">
              {items.map(([t, d]) => <Bullet key={t} color={color}><strong>{t}.</strong> {d}</Bullet>)}
            </ul>
          </Card>
        ))}
      </div>
    </PdfLayout>
  )
}

/* ── Slide 7 — Patrones ───────────────────────────── */
function Slide7() {
  const pats = [
    ['Backend-for-Frontend', 'BFF', 'Agrega microservicios y mapea errores 502 a respuestas controladas.'],
    ['Repository tipado', 'DAO', 'Prisma Client como repositorio con consultas tipadas.'],
    ['Dependency Injection', 'DI', 'NestJS inyecta PrismaService por constructor.'],
    ['DTO + Validación', 'class-validator', 'Responde 400 con mensaje claro (CP-15).'],
    ['Guard de auth + rol', 'Security', 'SupabaseJwtGuard + Role Guard (TEACHER/SUPERADMIN).'],
    ['Multi-tenant filter', 'Tenancy', 'tenancy.util resuelve colegioId; 403 si falta.'],
  ]
  return (
    <PdfLayout label="Indicadores 3 y 8 — Patrones de diseño" title="Patrones que sostienen el código">
      <div className="pdf-grid-2">
        {pats.map(([name, tag, desc]) => (
          <Card key={name}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
              <strong style={{ fontSize: '11px' }}>{name}</strong>
              <Tag color="#307FE2">{tag}</Tag>
            </div>
            <p className="pdf-pilar-desc">{desc}</p>
          </Card>
        ))}
      </div>
      <div className="pdf-final-quote">
        El DashboardService del BFF agrega varios microservicios y alcanza <strong>100% de ramas</strong> en sus tests.
      </div>
    </PdfLayout>
  )
}

/* ── Slide 8 — Arquetipos ─────────────────────────── */
function Slide8() {
  const arq = [
    ['Database-per-service + multi-schema', 'Cada microservicio es dueño de sus datos sobre esquemas aislados (users · public · jobs). Evolución independiente sin clusters separados.'],
    ['Hexagonal en el motor IA', 'prisma_workflow consume DynamoDB y S3 por servicios propios (dynamo_store, document_loader, document_exporter).'],
    ['Chain of Responsibility · gates', 'Los compliance gates son decisiones early-exit encadenadas: el primero que falla detiene el flujo sin gastar tokens.'],
    ['Capa anticorrupción', 'El motor IA no conoce el modelo relacional; traduce mediante adaptadores entre sesiones/eventos y el dominio PACI.'],
  ]
  return (
    <PdfLayout label="Indicadores 10 y 12 — Arquetipos" title="Decisiones de estructura y escala" accentColor="#9B59B6">
      <div className="pdf-modules">
        {arq.map(([t, d], i) => (
          <Card key={i}>
            <div className="pdf-module-row">
              <span className="pdf-module-num" style={{ color: '#9B59B6' }}>{i + 1}</span>
              <div>
                <p className="pdf-module-name">{t}</p>
                <p className="pdf-module-desc">{d}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PdfLayout>
  )
}

/* ── Slide 9 — Mantenibilidad ─────────────────────── */
function Slide9() {
  const items = [
    ['schema.prisma declarativo', 'Agregar un campo = 1 línea + prisma migrate dev. El cliente tipado se regenera solo.'],
    ['Migraciones idempotentes', 'add_colegio_and_superadmin, add_colegio_id_to_jobs: CREATE IF NOT EXISTS. Evolución segura en producción.'],
    ['JSONB en PaciProfile.datosEstructurales', 'El plan cambia de forma sin alterar el esquema relacional.'],
    ['Vigencia validFrom / validUntil', 'Perfiles históricos y activos coexisten sin borrar datos.'],
  ]
  return (
    <div className="pdf-page" style={{ flexDirection: 'row', padding: 0, gap: 0 }}>
      <div className="pdf-accent" style={{ backgroundColor: '#307FE2' }} />
      <div className="pdf-layout-left">
        <p className="pdf-label" style={{ color: '#307FE2' }}>Indicadores 8 y 9 — Adaptabilidad y mantenibilidad</p>
        <h2 className="pdf-title">Cambiar sin romper</h2>
        <ul className="pdf-list" style={{ gap: '6px' }}>
          {items.map(([t, d]) => <Bullet key={t}><strong>{t}.</strong> {d}</Bullet>)}
        </ul>
      </div>
      <div className="pdf-layout-right" style={{ alignItems: 'stretch' }}>
        <p className="pdf-card-title" style={{ color: '#307FE2' }}>Modelo User · UUID + enum + onDelete</p>
        <pre style={{ background: '#0D0D0D', color: '#9CDCFE', borderRadius: '6px', padding: '12px', fontSize: '8.5px', lineHeight: 1.5, margin: 0, overflow: 'hidden', fontFamily: 'monospace' }}>
{`model User {
  id             String   @id @default(uuid())
  supabaseUserId String   @unique
  role           UserRole @default(TEACHER)
  colegioId      String?  @db.Uuid
  colegio        Colegio? @relation(
    fields: [colegioId], references: [id],
    onDelete: SetNull)
  @@index([colegioId])
  @@schema("users")
}`}
        </pre>
      </div>
    </div>
  )
}

/* ── Slide 10 — Branching ─────────────────────────── */
function Slide10() {
  const branches = [
    ['main', '#43B02A', 'Producción. Solo recibe lo ya integrado y probado.'],
    ['develop', '#307FE2', 'Integración del Sprint. Tags v1.0.0 por Sprint.'],
    ['feature/*', '#FFB800', 'Una rama por historia de usuario → PR.'],
    ['hotfix/*', '#E24030', 'Correcciones urgentes sobre producción.'],
  ]
  return (
    <PdfLayout label="Indicadores 4 y 11 — Branching Git" title="Trunk-based para un equipo chico" stat="1322" statLabel="pruebas como gate de merge" statColor="#43B02A">
      <div className="pdf-modules">
        {branches.map(([name, color, desc]) => (
          <Card key={name}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Tag color={color}>{name}</Tag>
              <span className="pdf-pilar-desc">{desc}</span>
            </div>
          </Card>
        ))}
      </div>
      <div className="pdf-tagline">
        PR con ≥1 revisión + CI bloqueante (npm test --coverage / pytest --cov). La CI detectó CP-33 antes de desplegar.
      </div>
    </PdfLayout>
  )
}

/* ── Slide 11 — Integración ───────────────────────── */
function Slide11() {
  const items = [
    ['SPA → BFF (3010)', 'MicroserviceClient arma URL + propaga el JWT a cada microservicio. El front nunca llama directo.'],
    ['Agregación en el BFF', '/api/dashboard/me consume ms-users + ms-perfil-alumno + ms-docs en una sola respuesta.'],
    ['Microservicios → datos', 'PostgreSQL (Prisma) para lo relacional, DynamoDB para sesiones IA y S3 para objetos.'],
    ['Mapeo de errores', 'El BFF traduce 502/403 internos a respuestas controladas (CP-34, CP-35).'],
  ]
  return (
    <PdfLayout label="Indicador 5 — Integración" title="Cohesión entre capas" accentColor="#1ABC9C">
      <div className="pdf-modules">
        {items.map(([t, d]) => (
          <Card key={t}>
            <p className="pdf-module-name">{t}</p>
            <p className="pdf-module-desc">{d}</p>
          </Card>
        ))}
      </div>
      <div className="pdf-tagline">
        Crear un job coordina 3 almacenes (PostgreSQL → DynamoDB → S3). Si algo falla, el job queda en estado <strong>error</strong> con mensaje → trazabilidad.
      </div>
    </PdfLayout>
  )
}

/* ── Slide 12 — Escalabilidad ─────────────────────── */
function Slide12() {
  const cards = [
    ['Escalado horizontal independiente', 'Cada servicio NestJS es stateless y escala por separado sobre PostgreSQL/Neon serverless.'],
    ['Multi-schema sin clusters extra', 'Aislamiento por esquema en una sola instancia: costo contenido.'],
    ['DynamoDB con TTL automático', 'Escala a millones de sesiones; el TTL de 7 días evita una tabla infinita.'],
    ['S3 elástico + URLs prefirmadas', 'Objetos PACI/DOCX sin límite; descargas directas sin pasar por la app.'],
  ]
  return (
    <PdfLayout label="Indicador 12 — Escalabilidad" title="Escalar cada pieza por su cuenta" stat="1322" statLabel="tests cubriendo auth, jobs, PACI y compliance" statColor="#43B02A">
      <div className="pdf-grid-2">
        {cards.map(([t, d]) => (
          <Card key={t}>
            <p className="pdf-module-name">{t}</p>
            <p className="pdf-module-desc">{d}</p>
          </Card>
        ))}
      </div>
    </PdfLayout>
  )
}

/* ── Slide 13 — Pruebas unitarias ─────────────────── */
function Slide13() {
  const rows = [
    ['prisma-front', 'Vitest', '445', '81.03'],
    ['bff-prisma', 'Jest', '187', '84.06'],
    ['prisma-ms-users', 'Jest', '139', '85.24'],
    ['prisma-ms-docs', 'Jest', '77', '83.89'],
    ['prisma-ms-perfil-alumno', 'Jest', '63', '87.18'],
    ['prisma-adminpanel', 'Jest', '169', '80.67'],
    ['prisma_workflow', 'pytest', '245', '85.37'],
  ]
  return (
    <PdfLayout label="Indicadores 6 y 13 — Pruebas unitarias" title="1322 pruebas, 100% aprobadas" stat="158" statLabel="suites · cobertura ≥ 80%" statColor="#43B02A">
      <table className="pdf-table">
        <thead><tr><th>Componente</th><th>Runner</th><th>Tests</th><th>% Líneas</th></tr></thead>
        <tbody>
          {rows.map(([comp, runner, tests, lines]) => (
            <tr key={comp}>
              <td><strong>{comp}</strong></td>
              <td>{runner}</td>
              <td>{tests}</td>
              <td style={{ color: '#43B02A', fontWeight: 700 }}>{lines}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="pdf-note">BFF: 100% ramas y 98.87% funciones · compliance_gates: 100% de reglas (D170/D83/PII/NEE) sin gastar tokens.</p>
    </PdfLayout>
  )
}

/* ── Slide 14 — Pruebas funcionales ───────────────── */
function Slide14() {
  const fails = [
    ['CP-12/13/14', 'ms-perfil-alumno', '403 indebidos: claims de rol del JWT no extraídos'],
    ['CP-18', 'ms-docs', '403 en GET /api/jobs por guard de roles'],
    ['CP-33', 'bff-prisma', '502 Bad Gateway: ECONNREFUSED 127.0.0.1:3001'],
  ]
  return (
    <PdfLayout label="Indicadores 6 y 13 — Pruebas funcionales" title="Honestidad técnica: 33/40" stat="82.5%" statLabel="DoD requería ≥ 90% → rechazado para prod" statColor="#E24030">
      <table className="pdf-table">
        <thead><tr><th>Caso</th><th>Módulo</th><th>Causa</th></tr></thead>
        <tbody>
          {fails.map(([cp, mod, causa]) => (
            <tr key={cp}>
              <td style={{ color: '#E24030', fontWeight: 700 }}>{cp}</td>
              <td>{mod}</td>
              <td>{causa}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pdf-tagline">
        ¿Por qué pasan 1322 unitarias y fallan 7 funcionales? Las unitarias mockean el JWT; las funcionales usan el real de Supabase: es un gap de integración.
      </div>
    </PdfLayout>
  )
}

/* ── Slide 15 — Cierre ────────────────────────────── */
function Slide15() {
  const groups: [string, string, string[]][] = [
    ['✓ Aciertos', '#43B02A', [
      'Persistencia políglota coherente con la naturaleza de cada dato.',
      'Gates de compliance preventivos (ahorro de tokens y privacidad).',
      'CI bloqueante con 1322 tests como gate de merge.',
    ]],
    ['⚠ Deudas técnicas', '#E24030', [
      'Claims de rol del JWT de Supabase (7 funcionales en rojo).',
      'Cobertura de ramas: front 63.45% · ms-users 52.58%.',
      'DoD funcional aún no cumplido (82.5% < 90%).',
    ]],
    ['→ Mejoras futuras', '#307FE2', [
      'Mocking del JWKS en tests + e2e en todos los microservicios.',
      'Publicar lcov como artefacto CI.',
      'Observabilidad: logs → OpenTelemetry.',
    ]],
  ]
  return (
    <PdfLayout label="Indicadores 2, 3 y 6 — Cierre" title="Lecciones aprendidas" accentColor="#43B02A">
      <div className="pdf-grid-3">
        {groups.map(([title, color, items]) => (
          <Card key={title}>
            <p className="pdf-card-title" style={{ color }}>{title}</p>
            <ul className="pdf-list">
              {items.map(i => <Bullet key={i} color={color}>{i}</Bullet>)}
            </ul>
          </Card>
        ))}
      </div>
      <div className="pdf-final-quote">
        Gracias. ¿Preguntas? — PRISMA · DSY1106 Desarrollo Fullstack III · Evaluación Final Transversal.
      </div>
    </PdfLayout>
  )
}

/* ── Main export ─────────────────────────────────── */
export default function EftFullstackPdfView() {
  return (
    <div className="pdf-root">
      <Slide1 /><Slide2 /><Slide3 /><Slide4 /><Slide5 />
      <Slide6 /><Slide7 /><Slide8 /><Slide9 /><Slide10 />
      <Slide11 /><Slide12 /><Slide13 /><Slide14 /><Slide15 />
    </div>
  )
}
