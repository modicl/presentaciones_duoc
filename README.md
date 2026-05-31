# Presentaciones Interactivas Web — Quinto Semestre

Este repositorio contiene un sistema interactivo de presentaciones web creado para la entrega de evaluaciones y exposiciones del quinto semestre de la carrera en Duoc UC (Escuela de Informática y Telecomunicaciones). 

El proyecto cuenta con un portal o **Menú Principal** desde el cual se pueden seleccionar múltiples presentaciones.

## 📚 Presentaciones Incluidas

Actualmente el repositorio alberga el material de las siguientes asignaturas:

1. **Evaluación de Proyectos**
   - **EP1** — Caso de Estudio: Servicio Público de Salud RedNorte. Analiza el diseño de un ecosistema digital (EDGDA), incluyendo análisis de Porter, PESTEL, objetivos, arquitectura de solución y stakeholders.
   - **EP2** — Evaluación de Alternativas de Desarrollo. Presenta los criterios de factibilidad técnica, organizacional, normativa/legal y financiera aplicados al sistema EDGDA, con cinco opciones de desarrollo evaluadas mediante una Matriz de Factibilidad de 12 criterios y 84 puntos máximos.
   - **EP3** — Evaluación Económica Financiera. Desarrolla los flujos de caja de tres alternativas de implementación (Mixta, Inhouse, Low-Code), simulación de préstamo bajo sistema francés de amortización, y cálculo de indicadores VAN, TIR y PRI. Recomendación fundamentada por maximización de valor neto para RedNorte. Activar con `?presentation=ep3`.
   - **Docente:** Andrés Santoro Del Campo

2. **Fullstack III**
   - **Contenido:** Presentación EP1 - P.R.I.S.M.A. Introducción y análisis sobre el uso y las ventajas de Prisma ORM.

## 🧑‍💻 Integrantes

- Javier Arancibia
- Luciano Riveros
- Danilo Quiroz
- Felipe Villarroel

---

## 🚀 Cómo Ejecutar Localmente

Sigue estos pasos para correr el sistema de presentaciones en tu entorno local:

1. **Instalar las dependencias:**
   ```bash
   npm install
   ```

2. **Levantar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Visualizar la aplicación:**
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador preferido. Al ingresar, se te cargará el **Menú Principal**, donde podrás escoger y entrar en cualquiera de las presentaciones alojadas utilizando la interfaz.

---

## ⚙️ Uso y Navegación

El sistema está diseñado para ser de fácil lectura y transición en forma de "diapositivas". Una vez dentro de cualquier presentación, cuentas con los siguientes controles:

- **Avanzar:** Presiona la flecha derecha (`→`) o el control lateral derecho de la pantalla para ir a la siguiente slide.
- **Retroceder:** Presiona la flecha izquierda (`←`) o el control lateral izquierdo de la pantalla para volver a la slide anterior.
- **Temas (Modo Oscuro):** Haz clic en el botón `☀️ Claro` / `🌙 Oscuro` ubicado en la esquina inferior izquierda del visualizador de la presentación o en el menú principal para ajustar los colores de toda la interfaz.
- **Descargar:** Puedes presionar el botón `PDF` dentro de las presentaciones para autogenerar una versión PDF con cada una de las páginas cargadas en una hoja para su rápida distribución.

---

## 🎨 Diseño y Branding

El sistema visual de este template está construido íntegramente sobre el **Kit Digital oficial de Duoc UC**:
**[duoc.cl/kit-digital/web/tipografia-colores](https://www.duoc.cl/kit-digital/web/tipografia-colores/)**

Esto incluye:
- **Tipografías:** Merriweather (serif, headings) y Lato (sans-serif, body) — las dos familias tipográficas institucionales de Duoc UC
- **Colores institucionales:** Negro `#1A1A1A`, Blanco `#FFFFFF`, Amarillo `#FFB800` — paleta primaria oficial
- **Colores por escuela:** Los 9 colores de escuela con sus valores Pantone exactos (Informática `#307FE2`, Administración `#AC4FC6`, Comunicación `#D50032`, Construcción `#E87722`, Diseño `#C4D600`, Gastronomía `#FF585D`, Ingeniería `#43B02A`, Salud `#5BC2E7`, Turismo `#00A499`)
- **Escala tipográfica:** Tamaños rem definidos en el kit (h1 2.6875rem → body 1rem → small 0.8125rem)

Todo está documentado con referencias exactas en el skill: `skills/duoc-presentacion-template/SKILL.md`.

---

## 🛠️ Stack Tecnológico

El proyecto es de arquitectura puramente Frontend de alta modernidad.

- **[React](https://react.dev/):** Para la arquitectura de componentes.
- **[Vite](https://vitejs.dev/):** Entorno y empaquetamiento altamente optimizado y veloz.
- **[TypeScript](https://www.typescriptlang.org/):** Base sólida enfocada en tipado robusto.
- **[Tailwind CSS](https://tailwindcss.com/):** Estilos reactivos y clases estéticas para un diseño ágil de UI.
- **[Framer Motion](https://www.framer.com/motion/):** Animaciones de layout fluidas (usado en EP3 para la transición de alternativas).

---

## 🤖 Usar este template con un agente LLM

Este repositorio incluye un **skill** en `skills/duoc-presentacion-template/SKILL.md` pensado para que cualquier alumno Duoc UC pueda usar un agente LLM para crear su propia presentación basada en este template, sin tener que leer todo el código.

El skill documenta: tipografía, tokens de color, variables CSS del tema, colores sugeridos por escuela, patrones de slides y flujo de exportación PDF.

### Con Claude Code

**Opción 1 — Leerlo directamente en la conversación:**

```
Lee el archivo skills/duoc-presentacion-template/SKILL.md y úsalo como referencia para crear una presentación nueva para la Escuela de [tu escuela].
```

**Opción 2 — Instalarlo como skill permanente** (disponible en cualquier proyecto):

```bash
# macOS / Linux
cp -r skills/duoc-presentacion-template ~/.claude/skills/

# Windows (PowerShell)
Copy-Item -Recurse skills\duoc-presentacion-template "$env:USERPROFILE\.claude\skills\"
```

Una vez instalado, puedes invocarlo en cualquier proyecto escribiendo en el chat:

```
/duoc-presentacion-template
```

O pedirle al agente que lo use:

```
Usa el skill duoc-presentacion-template para crear una presentación para la asignatura Diseño de Bases de Datos.
```

### Con otros agentes (Gemini CLI, Cursor, Copilot, etc.)

El skill es Markdown estándar, compatible con cualquier LLM:

```
Lee el archivo skills/duoc-presentacion-template/SKILL.md.
Necesito crear una presentación para [nombre asignatura] de la Escuela de [tu escuela].
Usa el color #[tu color] como accentColor principal.
```

### Contribuir colores oficiales

Si conoces el color oficial de tu escuela Duoc UC, abre un PR actualizando la tabla de colores en `skills/duoc-presentacion-template/SKILL.md` — los valores actuales son aproximados excepto el azul y el amarillo institucional.
