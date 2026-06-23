# PROMPT — Defensa oral EFT DSY1106 Fullstack III (PRISMA)

> Este prompt es **autofuncional**. Un agente que lo reciba sin acceso a ningún otro archivo puede
> generar el contenido completo de las slides de la defensa. Todo el material del proyecto está
> embebido más abajo, junto con la rúbrica y el guión diapositiva por diapositiva.

---

## 1. ROL Y OBJETIVO

Eres un diseñador instruccional experto. Debes generar **15 diapositivas** para una **defensa oral**
de 15 minutos de la **Evaluación Final Transversal** de la asignatura **DSY1106 – Desarrollo
Fullstack III** (Duoc UC). El proyecto defendido es **PRISMA**, plataforma de generación asistida de
Planes de Adecuación Curricular Individual (PACI) construida como arquitectura de microservicios.

El destinatario de la presentación es un/a docente evaluador que realizará preguntas individuales.
Cada diapositiva debe dejar listo al estudiante para responder los indicadores de la rúbrica con
**lenguaje técnico preciso** y **ejemplos concretos del código real** del proyecto (que se incluye
más abajo).

## 2. FORMATO DE SALIDA

Para CADA diapositiva entrega este bloque exacto:

```
## Slide N — <Título>
Viñetas:
- viñeta 1 (máx 16 palabras)
- viñeta 2
- ... (entre 3 y 6 viñetas)
Notas del orador: <40-70 palabras de explicación oral detallada, con lenguaje técnico y ejemplos
del código entregado en este prompt>
Posible pregunta del docente: <una pregunta anticipada, y su respuesta en 1-2 frases>
Cubre indicador(es) rúbrica: #X, #Y
[Elemento visual sugerido: ...]
```

Reglas:
- 15 diapositivas exactas, en el orden de la sección 6.
- Español neutro. Sin marketing. Sin emojis.
- Cada viñeta: una línea, ≤ 16 palabras.
- Las "Notas del orador" deben citar nombres reales del proyecto (Modelos Prisma, rutas, % de
  cobertura, branches, comandos, endpoints, leyes citadas, etc.) tal como aparecen en el MATERIAL
  DE PROYECTO de la sección 5.
- No inventar datos que no estén en este prompt. Si algo es una recomendación futura, marcarlo.

## 3. RÚBRICA A CUBRIR (13 INDICADORES, 100% TOTAL)

### Dimensión Informe (grupal, 30%)
1. (**5%**) Diseño de arquitectura de microservicios: justifica cómo responde a requerimientos del
   cliente y alineación con ética/sostenibilidad/responsabilidad (seguridad, privacidad,
   escalabilidad). Nivel 100% = análisis profundo con ejemplos concretos.
2. (**5%**) Reflexión retrospectiva sobre decisiones de backend y frontend: aciertos, dificultades,
   mejoras implementadas, con ejemplos.
3. (**5%**) Reflexión sobre patrones de diseño aplicados: efectividad, modularidad, reutilización,
   rendimiento, con ejemplos del código.
4. (**5%**) Estrategia de branching Git: flujos de trabajo, beneficios, mejoras, con ejemplos.
5. (**5%**) Integración backend ↔ frontend ↔ base de datos: cohesión, comunicación entre servicios,
   manejo eficiente de datos, desafíos.
6. (**5%**) Pruebas unitarias: cobertura, estabilidad, mantenibilidad, dificultades.

### Dimensión Defensa oral (individual, 70%)
7. (**10%**) Seguridad, privacidad y sostenibilidad ante desafíos éticos.
8. (**10%**) Adaptabilidad y mantenibilidad de la solución.
9. (**10%**) Capacidad adaptativa demostrada con ejemplos del código.
10. (**10%**) Uso de arquetipos y patrones arquitectónicos, impacto en estructura y escalabilidad.
11. (**10%**) Utilidad de la estrategia de branching en la organización del equipo.
12. (**10%**) Escalabilidad y funcionalidad de microservicios.
13. (**10%**) Resultados de pruebas unitarias y aseguramiento de la calidad.

Niveles: 100% / 80% / 60% / 30% / 0%. Para aspirar al 100% cada diapositiva técnica debe incluir
**al menos un ejemplo concreto** (código, endpoint, % de cobertura, comando Git, ley citada, etc.).

## 4. REGLAS DE ARGUMENTACIÓN (para notas del orador)

- Justifica **por qué** (no solo el qué) y menciona **alternativas descartadas** cuando aplique.
- Vincula cada decisión con principios de **escalabilidad, modularidad, mantenibilidad,
  responsabilidad/ética**.
- Anticipa una pregunta posible del docente por diapositiva y déjala respondida.
- Lenguaje técnico: API Gateway, BFF, database-per-service, multi-schema, DTO, Repository,
  Singleton, Factory, Strategy, JWT, Supabase Auth, Prisma, Neon, DynamoDB, S3, UUID, JSONB,
  TTL, ConditionExpression, trunk-based, feature branch, coverage, mocking, Vitest, Jest, pytest.

## 5. MATERIAL DEL PROYECTO (contenido embebido — usar literalmente)

### 5.1 Visión general del sistema

- **Nombre**: PRISMA — Plataforma de Rúbricas e Instrumentos de Adecuación Curricular.
- **Propósito**: generar y gestionar **Planes de Adecuación Curricular Individual (PACI)** para
  estudiantes con Necesidades Educativas Especiales (NEE) mediante un workflow de IA multi-agente
  asistido por docentes (Human-in-the-Loop / HITL).
- **Stack backend**: NestJS (TypeScript / Node.js), microservicios independientes.
- **Stack frontend**: SPA React (Vite) con patrón BFF.
- **Persistencia políglota**: PostgreSQL (Neon) + Amazon DynamoDB + Amazon S3.
- **IA**: motor multi-agente en Python (Gemini + Google ADK) con gates de compliance normativo
  (Decretos Mineduc 170, 83, 67 y Ley 21.719 de PII).

### 5.2 Microservicios (6 componentes backend + motor IA)

| Microservicio | Puerto | Esquema PG | Responsabilidad |
|---|---|---|---|
| `prisma-ms-users` | 3001 | `users` | Auth/Supabase, perfil docente, colegios, auditoría, multi-tenant |
| `prisma-ms-perfil-alumno` | 3005 | `public` | Estudiantes y perfiles PACI |
| `prisma-ms-docs` | 3000 | `jobs` | Trabajos de generación de docs, orquesta DynamoDB + S3 + IA |
| `prisma-adminpanel` | 3004 | — (consome ms-users) | API del panel de administración, dashboard multidominio |
| `bff-prisma` | 3010 | — | Backend-for-Frontend: proxy, agregación, dashboard `/api/dashboard/me` |
| `prisma_workflow` | — | DynamoDB | Motor IA multi-agente (Python/pytest) |

Frontend: `prisma-front` (Vite React, puerto 3002).

### 5.3 Arquitectura de persistencia

- **Patrón database-per-service**: cada microservicio es dueño exclusivo de sus datos.
- **Aislamiento por esquema** sobre una misma instancia de PostgreSQL: `users`, `public`, `jobs`.
- Equivalencia con el mundo Java: Prisma ORM = JPA/Hibernate · Vistas SQL = procedimientos
  almacenados · Migraciones Prisma = Flyway/Liquibase.

Fragmento real de `schema.prisma` (aislamiento por esquema en `prisma-ms-docs`):
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  schemas  = ["jobs"]
}
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["multiSchema"]
}
```

Ciclo de vida de conexión gestionado por NestJS:
```ts
@Injectable()
export class PrismaService extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  async onModuleInit()   { await this.$connect(); }
  async onModuleDestroy() { await this.$disconnect(); }
}
```

Modelo `User` (entidad relacional con UUID, enum, relación, índice, multi-schema):
```prisma
model User {
  id             String   @id @default(uuid()) @db.Uuid
  supabaseUserId String   @unique @map("id_supabase")
  email          String   @unique @map("correo")
  rut            String   @unique
  nombreCompleto String   @map("nombre_completo")
  role           UserRole @default(TEACHER) @map("rol")
  colegioId      String?  @map("colegio_id") @db.Uuid
  colegio        Colegio? @relation(fields: [colegioId],
                          references: [id], onDelete: SetNull)
  logs           LogUsuario[]
  createdAt      DateTime @default(now()) @map("creado_en")
  updatedAt      DateTime @updatedAt @map("actualizado_en")
  @@index([colegioId])
  @@schema("users")
  @@map("usuarios")
}
```

CRUD tipado con paginación (servicio de jobs):
```ts
const job = await this.prismaService.job.create({
  data: { userId, colegioId, status: JobStatus.pending,
          inputSource, prompt, paciObjectKey, planningObjectKey },
});
const [total, jobs] = await Promise.all([
  this.prismaService.job.count({ where: { userId } }),
  this.prismaService.job.findMany({
    where: { userId }, orderBy: { createdAt: "desc" },
    skip: (page - 1) * limit, take: limit,
  }),
]);
```

### 5.4 Migraciones (versionado del esquema)

Sistema Prisma Migrate (idempotentes, defensivas: `CREATE ... IF NOT EXISTS`, `DO $$ ... EXCEPTION`).

| Migración | Microservicio | Cambio |
|---|---|---|
| `restructure_users_schema` | users | Línea base usuarios, logs, enums |
| `add_colegio_and_superadmin` | users | Multi-tenant + rol SUPERADMIN |
| `add_colegio_audit_events` | users | Eventos de auditoría de colegios |
| `restructure_jobs_schema` | docs | Reestructuración del esquema jobs |
| `add_colegio_id_to_jobs` | docs | Asociación jobs → colegio |
| `add_colegio_id_to_student` | perfil-alumno | Asociación estudiante → colegio |

### 5.5 Persistencia NoSQL (DynamoDB)

- Sesiones del workflow de IA (estado efímero, escritura intensiva, vida corta).
- **TTL**: `expires_at = ahora + 7 días` → DynamoDB purga sesiones antiguas solo.
- **Escritura condicional** (`attribute_not_exists(session_id)`) → idempotencia.
- Documento embebido: mensajes, datos HITL y estado del workflow en un solo ítem (sin joins).

```ts
await this.getClient().send(new PutItemCommand({
  TableName: table,
  Item: {
    session_id: { S: sessionId },
    user_id:    { S: userId },
    phase:      { S: "running" },
    messages:   { S: "[]" },
    expires_at: { N: String(expiresAt) }, // TTL 7 días
  },
  ConditionExpression: "attribute_not_exists(session_id)",
}));
```

### 5.6 Almacenamiento de objetos (S3)

- Documentos PACI, planificaciones y DOCX generados: Binarios en S3, referencias (`paciObjectKey`,
  `planningObjectKey`, `generatedObjectKey`) en PostgreSQL.
- Claves jerárquicas: `jobs/{jobId}/paci.pdf` (evitan colisiones y facilitan partición lógica).
- URLs prefirmadas (`getSignedUrl`, exp. 900 s por defecto): descargas seguras sin exponer
  credenciales.
- Validación de tipo antes de subir: solo PDF/DOCX.

Coordinación entre los 3 almacenes al crear un trabajo:
1. inserta registro en PostgreSQL → 2. crea sesión en DynamoDB → 3. sube archivos a S3.
Si algo falla, el job queda en estado `error` con mensaje (trazabilidad).

### 5.7 Vistas SQL analíticas (= rol de procedimientos almacenados)

```sql
CREATE OR REPLACE VIEW v_session_token_usage AS
WITH agent_tokens AS (
  SELECT e.session_id, e.event_data->>'author' AS agent,
         SUM((e.event_data->'usage_metadata'
             ->>'total_token_count')::bigint) AS total_tokens
  FROM events e
  WHERE e.app_name = 'paci_workflow'
  GROUP BY e.session_id, agent
)
SELECT s.id AS session_id, s.create_time, ...
FROM sessions s LEFT JOIN session_agg a ON ...;
```
- Vista adicional `v_session_token_usage_mes` (filtrado al mes en curso).
- Beneficio: mueve cómputo analítico al motor, interfaz estable para el panel, desacopla cálculo
  del código de aplicación.

### 5.8 Integridad, auditoría, multi-tenancy

- Tabla `logs_usuarios` + `AuditService`: registra login, perfil, creación de colegios, etc., con
  IP y resultado. Si el log falla, la operación de negocio continúa (auditoría no bloqueante).
- `colegioId` recorre los 3 microservicios → **multi-tenant**.
- Integridad referencial con políticas explícitas: `User↔Colegio` → `onDelete: SetNull`;
  `Estudiante↔PaciProfile` → `onDelete: Cascade`.
- `PaciProfile.datosEstructurales` es **JSONB**: metadatos relacionales + contenido flexible del
  plan. Vigencia con `validFrom`/`validUntil` → perfiles activos e históricos sin borrar.

### 5.9 Pruebas unitarias (extracto del informe PRISMA)

**Resumen consolidado**: 1322 pruebas en 158 suites · 100% de aprobación · cobertura ≥ 80% en los
7 componentes.

| Componente | Runner | Suites | Tests | %Stmt | %Ramas | %Func | %Líneas |
|---|---|---|---|---|---|---|---|
| prisma-front | Vitest | 46 | 445 | 78.33 | 63.45 | 69.21 | 81.03 |
| bff-prisma | Jest | 16 | 187 | 81.87 | 100.00 | 98.87 | 84.06 |
| prisma-ms-users | Jest | 15 | 139 | 85.86 | 52.58 | 84.41 | 85.24 |
| prisma-ms-docs | Jest | 25 | 77 | 85.01 | 66.25 | 84.21 | 83.89 |
| prisma-ms-perfil-alumno | Jest | 16 | 63 | 87.76 | 60.86 | 96.61 | 87.18 |
| prisma-adminpanel | Jest | 22 | 169 | 79.65 | 84.47 | 88.28 | 80.67 |
| prisma_workflow | pytest | 18 | 245 | 85.37 | 89.86 | 85.37 | 85.37 |

Ejemplos de pruebas representativas (usar en notas del orador):
- `bff-prisma/DashboardService`: agrega varios microservicios en una sola respuesta → 100% ramas.
- `prisma_workflow/compliance_gates`: bloquea PACI por PII (Ley 21.719), informe vencido (D170),
  categoría NEE no reconocida e incompletitud (D83), **sin gastar tokens** → 100% de cobertura de
  reglas de compliance.
- `prisma-ms-docs` incluye e2e (supertest): `health`, `chat/start`, `jobs/upload`, listado y
  descarga firmada.
- `prisma-ms-perfil-alumno/tenancy.util`: 403 si falta `colegioId`.
- `prisma-front/ActiveSessionContext`: tracking por SSE (`agent_start`, `completed`).

Evolución del coverage (esfuerzo del equipo, mencionar como "áreas de mejora"):
- front: 26% → 81% líneas · BFF: 17% → 84% · adminpanel: 2% → 81%.
- Recomendaciones pendientes: ramas en `ms-users` (52.6%) y `front` (63.5%); más e2e estilo ms-docs;
  publicar lcov como artefacto CI.

### 5.10 Pruebas funcionales (plan de pruebas, 40 casos)

**Total**: 33 PASS / 7 FAIL = 82.5% (.DoD requería ≥ 90% → RECHAZADO para producción). Las 7 fallas
se concentran en **control de roles del JWT de Supabase** (403 indebidos) y un ECONNREFUSED del
BFF. Detalle a mostrar como ejemplo de honestidad técnica:

| CP | Módulo | Resultado | Causa |
|---|---|---|---|
| CP-12 | ms-perfil-alumno | 403 en `GET /students` | claims de rol del JWT no extraídos |
| CP-13 | ms-perfil-alumno | 403 en `GET /paci-profiles` | mismo problema de roles |
| CP-14 | ms-perfil-alumno | 403 en `GET /students/:id` (esperado 404) | enmascara el 404 |
| CP-18 | ms-docs | 403 en `GET /api/jobs` | guard de roles |
| CP-33 | bff-prisma | 502 Bad Gateway en `GET /api/colegios` | ECONNREFUSED 127.0.0.1:3001 |
| CP-… | (otros 2) | 403 | race condition de guard |

Ejemplos PASS que sí evidencian calidad:
- CP-01: `POST /api/auth/register` → 201 Created + JWT.
- CP-22 / 24 / 27: `adminpanel` 100% (tickets, dashboard KPIs, etc).
- CP-39 / CP-40: Playwright E2E login + render dashboard.

### 5.11 Estrategia de branching (Git)

- Modelo **trunk-based simplificado** (adaptado al equipo): `main` (producción) + `develop`
  (integración Sprint) + **feature branches** `feature/*` por historia de usuario + `hotfix/*`.
- Pull requests con revisión mínima de 1 compañero + **CI bloqueante** (`npm test -- --coverage`
  y `pytest --cov`) antes de merge a `develop`.
- Tags `v1.0.0` por Sprint (plan de pruebas señala "Sprint 3 v1.0 en rama develop").
- Convención de commits tipo Conventional Commits (`feat:`, `fix:`, `test:`, `chore:`,
  `docs:`).
- Impacto medible: 1322 pruebas se vuelven "gate" de merge; el equipo detectó en CI el bug CP-33
  antes de desplegar (gracias al flujo feature→PR→CI→develop).

### 5.12 Patrones arquitectónicos y de diseño (usar esto en las notas)

- **Backend-for-Frontend (BFF)** → `bff-prisma` oculta a la SPA la complejidad multi-servicio,
  agrega `/api/dashboard/me`, mapea errores (502 de ms-users → respuesta controlada).
- **Database-per-service** + **Multi-schema** → desacoplamiento + evolución independiente.
- **Repository/DAO tipado** → Prisma Client como repositorio (`this.prismaService.job.findMany`).
- **Dependency Injection** (NestJS) → `@Injectable() PrismaService` con ciclo de vida.
- **DTO + Validación** (class-validator) → casos CP-15 con errores 400 (`rut must be a string`).
- **Guard de autenticación** (`SupabaseAuthGuard`, `SupabaseJwtGuard`) + **Role Guard** →
  autorización diferenciada (TEACHER / SUPERADMIN).
- **Strategy/Gate de compliance** en `prisma_workflow` → gates normativos como decisiones
  early-exit, sin gasto de tokens (patrón Chain of Responsibility implícito).
- **Multi-tenant por tenancy filter** (`colegioId`) → aislamiento lógico de datos.
- **Hexagonal/Anticorrupción en el motor IA** → `prisma_workflow` consume DynamoDB y S3 por
  servicios propios (`dynamo_store`, `document_loader`, `document_exporter`), no acoplado al resto.

### 5.13 Ética, seguridad, privacidad, sostenibilidad

- **Normativa chilena** modelada en código: Decretos Mineduc 170, 83 y 67; Ley 21.719 (PII).
- `compliance_gates` bloquea la generación de un PACI antes de gastar tokens si el input
  contiene **PII sensible**, el informe está **vencido (D170)**, la categoría NEE no es reconocida
  o hay **incompletitud (D83)**. Es una decisión **preventiva** (no reactiva), reduciendo además
  **consumo de IA y能耗** →.Linked a sostenibilidad.
- **Seguridad**: JWT de Supabase Auth, Guards por rol, URLs prefirmadas con expiración 900 s,
  UUIDs como PK para no exponer IDs secuenciales, validación de tipos MIME (PDF/DOCX) antes de
  subir a S3.
- **Privacidad**: PII bloqueada en gates; datos sensibles solo en S3 privado, nunca como URL pública.
- **Trazabilidad**: `AuditService` + `logs_usuarios` + `LogUsuario[]` para responder a quién,
  cuándo y desde qué IP se realizó cada acción sensible.
- **Sostenibilidad técnica**: persistencia políglota (cada dato en el almacén correcto) → menos
  desperdicio de recursos; TTL de 7 días en DynamoDB → no acumula sesiones muertas.

## 6. ESTRUCTURA OBLIGATORIA DE LAS 15 DIAPOSITIVAS

Cada diapositiva incluye el contenido concreto que debe aparecer. El agente debe expandir el
formato de la sección 2.

### Slide 1 — Portada
- Asignatura DSY1106 · Evaluación Final Transversal · 2026.
- Proyecto PRISMA · Equipo e integrantes.
- Docente / sección / fecha.
- [Elemento visual: logo Duoc UC]

### Slide 2 — Agenda
- 6 ejes: arquitectura · backend+frontend · patrones · branching · integración · pruebas.
- Tiempo total 15 min · espacio de preguntas individual al final.
- Cubre: vista general de los 13 indicadores.

### Slide 3 — Arquitectura de microservicios
- 6 servicios NestJS + motor IA Python + SPA React, contra persistencia políglota.
- `bff-prisma` (3010) como punto único de entrada de la SPA (patrón BFF).
- Comunicación HTTP/JWT; el motor IA usa DynamoDB + S3.
- `database-per-service` con esquemas `users`/`public`/`jobs`.
- [Diagrama de arquitectura: SPA React → BFF → 5 microservicios → PG · DynamoDB · S3 · Supabase Auth]
- Cubre #1, #12

### Slide 4 — Cómo responde la solución a los requerimientos del cliente
- Requerimiento: generar PACI para NEE (Decretos 170/83/67) con supervisión docente (HITL).
- Workflow IA multi-agente con checkpoints y estado de sesión en DynamoDB.
- Multi-tenant por colegio → cada establecimientos opera su propia data.
- Generación de DOCX desde el PACI + planificación (S3 → URLs prefirmadas).
- Cubre #1

### Slide 5 — Ética, seguridad, privacidad y sostenibilidad
- Gates de compliance previos al gasto de tokens: PII (Ley 21.719), D170, D83.
- JWT Supabase + Guards por rol · UUIDs como PK · URLs prefirmadas 900 s.
- `AuditService` no bloqueante: registra sin interrumpir el negocio.
- Políglota + TTL DynamoDB 7 días = menos desperdicio.
- Posible pregunta: "¿Por qué compliance antes del LLM y no después?" — porque evita costo,
  sesgo y exposición de PII; es preventivo.
- Cubre #1, #7

### Slide 6 — Decisiones Backend y Frontend (retrospectiva)
- Backend NestJS: módulos por dominio, DI por constructor, `PrismaService` reutilizable.
- Frontend React+Vite: capa de servicios (`auth/jobs/paci/admin`), SSE para sesión activa.
- Aciertos: tipados Prisma; BFF desacopla la SPA.
- Dificultades: claims de rol en JWT (bugs CP-12/13/14), cobertura inicial baja del front (26%).
- Cubre #2

### Slide 7 — Patrones de diseño en frontend y backend
- Repository tipado (Prisma) · DI · Guard · DTO+class-validator.
- BFF como agregador (`DashboardService` 100% ramas en tests).
- Front: Context para sesión activa + servicio por dominio + rutas protegidas (ej. CP-38).
- Ejemplo: `tenancy.util` resuelve `colegioId` y devuelve 403 si falta.
- Cubre #3, #8

### Slide 8 — Arquetipos y patrones arquitectónicos
- Database-per-service + multi-schema isolation.
- Hexagonal implícito en `prisma_workflow` (store, loader, exporter desacoplados).
- Chain of Responsibility para gates de compliance (early-exit sin tokens).
- Anti-corrupción: el motor IA no conoce el dominio relacional.
- Cubre #10, #12

### Slide 9 — Adaptabilidad y mantenibilidad con ejemplos del código
- `schema.prisma` declarativo: agregar un campo = 1 línea + `prisma migrate dev`.
- Migraciones idempotentes (`add_colegio_id_to_jobs`, `add_colegio_and_superadmin`) → evolución
  segura en producción multi-tenant.
- `PaciProfile.datosEstructurales` JSONB: el plan cambia sin alterar el esquema relacional.
- `validFrom`/`validUntil` → perfiles históricos sin borrar.
- Mostrar fragmento de modelo `User` (UUID + enum + `onDelete`).
- Cubre #8, #9

### Slide 10 — Estrategia de branching y organización del equipo
- `main` (prod) · `develop` (integración Sprint) · `feature/*` · `hotfix/*`.
- PR con ≥1 revisión + CI bloqueante (`npm test --coverage`, `pytest --cov`).
- Conventional Commits (`feat:`, `fix:`, `test:`). Tags `v1.0.0` por Sprint.
- CI detectó CP-33 (502 ECONNREFUSED) antes de desplegar desde develop.
- Posible pregunta: "¿Por qué trunk-base y no GitFlow puro?" — equipo chico, integración más
  rápida, mismo aislamiento con `feature/*`.
- Cubre #4, #11

### Slide 11 — Integración backend ↔ frontend ↔ base de datos
- SPA → BFF (3010) → microservicios (JWT propagado, `MicroserviceClient` armador de URL + JWT).
- BFF agrega `/api/dashboard/me` consumiendo ms-users + ms-perfil-alumno + ms-docs.
- Microservicios → PostgreSQL (Prisma), DynamoDB (sesiones IA) y S3 (objetos).
- Coordinación 3 almacenes al crear un job (PG → Dynamo → S3) con rollback a estado `error`.
- `bff-prisma` mapea 502/403 internos a respuestas controladas (CP-34, CP-35).
- Cubre #5

### Slide 12 — Escalabilidad y funcionalidad de microservicios
- Cada servicio escala horizontal y de forma independiente (NestJS stateless + PG/Neon serverless).
- Multi-schema → aislamiento sin necesidad de clusters distintos (costo contenido).
- DynamoDB escala a millones de sesiones con TTL automático (no hay tabla creciente).
- S3 elástico para objetos PACI/DOCX · URLs prefirmadas → descargas directas sin pasar por la app.
- Funcionalidad: 1322 tests cubriendo auth, jobs, PACI, panel y compliance normativo.
- Cubre #12

### Slide 13 — Pruebas unitarias: estrategia y resultados
- Stack **Vitest** (front), **Jest + @nestjs/testing** (microservicios), **pytest + pytest-cov**
  (motor IA).
- **1322 pruebas, 158 suites, 100% aprobadas**. Cobertura ≥ 80% en los 7 componentes.
- Mín: adminpanel 80.67% líneas · Máx: ms-perfil-alumno 87.18% · BFF 100% ramas y 98.87% func.
- Gates compliance 100% cubiertos (D170/D83/PII/NEE) desde `prisma_workflow`.
- Mostrar tabla resumen por componente (sección 5.9).
- Cubre #6, #13

### Slide 14 — Pruebas funcionales, bugs detectados y honestidad técnica
- 40 casos de prueba funcional (Postman + Playwright): 33 PASS / 7 FAIL = 82.5%.
- DoD requería ≥ 90% → rechazado para producción (decisión documentada).
- 5/7 bugs son control de roles del JWT Supabase (CP-12/13/14/18 + CP-33 caído por ECONNREFUSED).
- Acciones: refinar `SupabaseJwtGuard`, sumar mocks JWKS, ampliar e2e estilo ms-docs.
- Posible pregunta: "Si 1322 unitarias pasan 100%, ¿por qué fallaron 7 funcionales?" — porque
  los unitarios mockean el JWT, no el real de Supabase; gap de integración.
- Cubre #6, #13

### Slide 15 — Lecciones aprendidas y cierre
- Aciertos: arquitectura políglota coherente con la naturaleza del dato, gates de compliance
  preventivos, CI bloqueante.
- Deudas: claims de rol del JWT, cobertura de ramas (front 63.45% / ms-users 52.58%), DoD
  funcional aún no cumplido.
- Mejoras futuras: publicar lcov como artefacto CI, mocking del JWKS en tests, e2e en todos los
  microservicios, observabilidad (logs → OpenTelemetry).
- "Gracias. ¿Preguntas?"
- Cubre #2, #3, #6

## 7. ENTREGABLE

Devuelve ÚNICAMENTE los 15 bloques en el formato de la sección 2, en el orden de la sección 6.
Sin introducción, conclusión ni comentarios tuyos. Marca el número de slide como `## Slide N — ...`.