# Innovatech Chile — Plataforma CI/CD en AWS (ECS Fargate)

Plataforma compuesta por **tres servicios contenerizados** (Frontend, Backend de usuarios y Backend de productos) y una **base de datos MariaDB**, con integración y despliegue continuo automatizado mediante **GitHub Actions** hacia **Amazon ECS (Fargate)**.

> Integrantes: [Nombre 1] — [Nombre 2] · Asignatura: Introducción a Herramientas DevOps (ISY1101) · Sección: [Sección]

---

## Arquitectura

```
                   Internet
                      │
              ┌───────▼────────┐
              │   ALB (HTTP:80) │  routing por path
              └───┬───────┬─────┘
        /api/users│ /api/products│ (default)
        ┌─────────▼┐ ┌──▼────────┐ ┌▼──────────┐
        │ Backend  │ │ Backend   │ │ Frontend  │
        │ JS :8081 │ │ Python    │ │ Nginx :80 │
        │ (Express)│ │ Flask:8082│ │ (estático)│
        └────┬─────┘ └────┬──────┘ └───────────┘
             │            │
             └─────┬──────┘
              ┌────▼─────┐
              │ EC2      │
              │ MariaDB  │  users_db / products_db
              │ :3306    │
              └──────────┘
   Todo dentro de la VPC · 3 capas de Security Groups (sg-alb, sg-ecs, sg-db)
```

| Servicio | Tecnología | Puerto | Repo ECR |
|---|---|---|---|
| Frontend | Java/Maven → estático (Nginx) | 80 | `devops-ep3-front` |
| Backend JS (usuarios) | Node.js 18 + Express | 8081 | `devops-ep3-backjs` |
| Backend Python (productos) | Flask (Python 3.11) | 8082 | `devops-ep3-backpy` |
| Base de datos | MariaDB sobre EC2 (Amazon Linux 2023) | 3306 | — |

---

## Estructura del repositorio

```
EP3/
├── devops_front_ep3/        # Frontend (Dockerfile multietapa, nginx.conf, entrypoint, task-def, workflow)
├── devops_backJs_ep3/       # Backend usuarios (task-def, workflow)
├── devops_BackPy_ep3/       # Backend productos (task-def, workflow)
├── docker-compose.yml       # Orquestación local de los 3 servicios + BD
└── README.md                # Este archivo
```

---

## Ejecución local (Docker Compose)

```bash
docker compose up --build
```

Levanta los tres servicios y la base de datos en una red interna. El frontend queda accesible en `http://localhost`, el backend de usuarios en `:8081` y el de productos en `:8082`.

---

## CI/CD (GitHub Actions)

Cada servicio tiene un workflow en `.github/workflows/deploy.yml` que se dispara con `push` a las ramas `main` o `aws` (y manualmente con `workflow_dispatch`). Etapas:

1. **Checkout** — descarga el código.
2. **Test** — ejecuta las pruebas; si fallan, el pipeline se detiene.
3. **Configure AWS credentials** — desde GitHub Secrets.
4. **Login to Amazon ECR**.
5. **Build, tag & push** — sube la imagen con los tags `<sha>` y `latest`.
6. **Deploy** — actualiza la task definition y fuerza un nuevo despliegue en ECS.

### Secrets requeridos (por repositorio)

| Secret | Propósito |
|---|---|
| `AWS_ACCESS_KEY_ID` | Llave de acceso (IAM / AWS Academy) |
| `AWS_SECRET_ACCESS_KEY` | Llave secreta |
| `AWS_SESSION_TOKEN` | Token de sesión temporal (Academy; caduca por sesión) |
| `AWS_REGION` | Región (`us-east-1`) |

---

## Despliegue en AWS

- **Cómputo:** Amazon ECS (Fargate) — 1 cluster, 3 servicios.
- **Balanceo:** un ALB internet-facing con routing por path (`/api/users*`, `/api/products*`, default → front). Target groups de **tipo IP** (obligatorio en Fargate).
- **Base de datos:** EC2 con MariaDB (en Academy no hay permisos para RDS). Bases `users_db` y `products_db`; usuario remoto con host `%`.
- **IAM:** rol `LabRole` como *task execution role* y *task role* (Academy no permite `iam:CreateRole`).
- **Autoscaling:** Target Tracking sobre CPU promedio, objetivo **50%**, tareas mín./máx. 1/4.
- **Observabilidad:** logs en CloudWatch (`/ecs/devops-front-ep3`, `/ecs/devops-backjs-ep3`, `/ecs/devops-backpy-ep3`) y métricas de ECS/ALB.

### Variables de entorno de los backends (task definition)

| Variable | Backend JS | Backend Python |
|---|---|---|
| `DB_HOST` | IP privada de la EC2 | IP privada de la EC2 |
| `DB_PORT` | `3306` | `3306` |
| `DB_NAME` | `users_db` | `products_db` |
| `DB_USER` | `appuser` | `appuser` |
| `DB_PASSWORD` | *(GitHub/entorno)* | *(GitHub/entorno)* |

---

## Seguridad

- Imágenes base mínimas (`alpine` / `slim`) y Dockerfile multietapa.
- Escaneo de vulnerabilidades en ECR (*scan on push*).
- Backend JS corre como usuario no root (`USER node`).
- Security Groups en 3 capas: el único punto de entrada público es el ALB.

| SG | Inbound |
|---|---|
| `sg-alb` | TCP 80 desde `0.0.0.0/0` |
| `sg-ecs` | TCP 80/8081/8082 solo desde `sg-alb` |
| `sg-db` | TCP 3306 solo desde `sg-ecs`; TCP 22 desde IP propia |

---

## Verificación

| Endpoint | Resultado |
|---|---|
| `http://<DNS-ALB>/` | Frontend con productos reales |
| `http://<DNS-ALB>/api/products` | `200` lista de productos (JSON) |
| `http://<DNS-ALB>/api/users` | `200` servicio de usuarios |
| `/health` (front) | `200 ok` (health check del ALB) |

Flujo end-to-end probado: **front → ALB → backend → MariaDB**, con recuperación automática tras redeploy.
