---
name: duoc-presentacion-template
description: Use when creating or extending a Duoc UC academic presentation using this repository as template. Provides project structure, typography system, confirmed color tokens, CSS theme variables, slide component patterns, routing, and PDF export workflow.
---

# Duoc UC Presentación Template

## Overview

React 18 + Vite 6 + TypeScript 5 + Tailwind CSS 3 presentation template for Duoc UC academic evaluations. Supports multiple presentations in the same app, dark/light theme toggle, keyboard navigation (← →), and PDF export via html2canvas + jsPDF.

## Tech Stack

| Dependencia | Versión | Propósito |
|-------------|---------|-----------|
| React | 18 | UI |
| Vite | 6 | Build/dev server |
| TypeScript | 5 | Tipado |
| Tailwind CSS | 3 | Utilidades CSS |
| html2canvas | 1.4 | Captura DOM → canvas |
| jsPDF | 4 | Canvas → PDF A4 |

## Tipografía

Configurada en `tailwind.config.js`. Fuentes de Google Fonts.

| Clase Tailwind | Fuente | Uso típico |
|----------------|--------|------------|
| `font-heading` | Merriweather (serif, 700) | Títulos grandes, números destacados |
| `font-body` | Lato (sans-serif, 400/700) | Texto corriente, labels, badges |

**Escala de tamaños frecuentes:** `text-xs` (12px) · `text-sm` (14px) · `text-base` (16px) · `text-lg` (18px) · `text-xl` (20px) · `text-4xl` (36px) · `text-5xl` (48px)

## Sistema de Colores

### Tokens Tailwind confirmados (`tailwind.config.js`)

```js
colors: {
  'duoc-blue':   '#307FE2',  // Azul institucional Duoc UC
  'duoc-yellow': '#FFB800',  // Amarillo institucional
  'duoc-dark':   '#1A1A1A',  // Fondo oscuro
  'duoc-green':  '#43B02A',  // Verde semántico
  'duoc-gray':   '#666666',  // Texto secundario
}
```

Uso: `text-duoc-blue`, `bg-duoc-blue`, `border-duoc-yellow`, etc.

### Colores semánticos (inline, usados en slides)

| Color | Hex | Uso en el proyecto |
|-------|-----|--------------------|
| Azul | `#307FE2` | Criterios técnicos, accent por defecto |
| Rojo | `#E53E3E` | Problemas, normativa, riesgo |
| Verde | `#43B02A` | Factibilidad financiera, conclusiones |
| Amarillo | `#FFB800` | Criterios organizacionales, advertencias |

### Colores sugeridos por Escuela Duoc UC

> ⚠ Solo `#307FE2` y `#FFB800` son colores institucionales confirmados. Los demás son sugerencias orientativas — verificar contra branding oficial de Duoc UC.

| Escuela | Color sugerido | Hex aproximado |
|---------|---------------|----------------|
| Informática y Telecomunicaciones | Azul Duoc | `#307FE2` ✓ |
| Ingeniería | Naranja industria | `#F97316` |
| Salud | Verde teal | `#14B8A6` |
| Administración y Negocios | Azul marino | `#1D4ED8` |
| Diseño | Fucsia/Magenta | `#C026D3` |
| Turismo y Hospitalidad | Teal | `#0D9488` |
| Comunicaciones | Rojo coral | `#DC2626` |
| Construcción | Naranja tierra | `#EA580C` |
| Educación | Ámbar | `#D97706` |
| Recursos Naturales | Verde bosque | `#16A34A` |

Para usar un color personalizado en los slides, reemplaza `accentColor` y `statColor` en `SlideLayout`:

```tsx
<SlideLayout accentColor="#14B8A6" statColor="#14B8A6" ...>
```

## Variables CSS del Tema (`src/index.css`)

```css
/* Tema oscuro — por defecto (:root) */
--bg:         #1A1A1A   /* Fondo principal */
--bg-card:    #222222   /* Fondo de cards */
--bg-right:   #111111   /* Fondo columna derecha */
--border:     #2A2A2A   /* Bordes */
--text:       #FFFFFF   /* Texto principal */
--text-muted: #AAAAAA   /* Texto secundario */
--text-label: #888888   /* Labels/captions */
--text-dim:   #555555   /* Texto tenue */

/* Tema claro — .theme-light */
--bg:         #F4F6FA
--bg-card:    #FFFFFF
--bg-right:   #E8EEF8
--border:     #DDE3EC
--text:       #1A1A1A
--text-muted: #374151
--text-label: #6B7280
--text-dim:   #9CA3AF
```

Aplicar tema claro: agregar clase `theme-light` al div raíz de la presentación.

**Importante para PDF:** Las variables CSS no se resuelven en el contenedor off-screen. Siempre hardcodear los valores del tema claro en los componentes PDF.

## Estructura del Proyecto

```
src/
  assets/
    Logo_DuocUC.svg            # Logo oficial Duoc UC
  slides/
    SlideLayout.tsx            # Layout reutilizable de 2 columnas
  pdf/
    pdf.css                    # Estilos base para PDF (A4 landscape)
    PdfLayout.tsx              # Componente layout para PDF
    PdfView.tsx                # Slides PDF de EP1
    downloadPdf.ts             # Función de descarga EP1
  [nombre-presentacion]/
    App[Nombre].tsx            # Controlador: estado, navegación, botones
    slides/
      E01Portada.tsx           # Portada
      E02…tsx                  # Slides de contenido
    pdf/
      [Nombre]PdfView.tsx      # Slides adaptadas para PDF
      download[Nombre]Pdf.ts   # Función de descarga
  main.tsx                     # Router por query param
  MainMenu.tsx                 # Menú de selección
  index.css                    # Variables CSS del tema
```

## Routing (`src/main.tsx`)

Selección de presentación por query param `?presentation=`:

```
?presentation=ep2          → EP2 (Evaluación de Alternativas)
?presentation=ev-proyectos → EP1 (Presentación principal)
?presentation=prisma       → Presentación PRISMA
?pdf                       → Render directo del PdfView (EP1)
(sin param)                → MainMenu
```

Para agregar una presentación nueva:

```tsx
// src/main.tsx
if (presentation === 'mi-presentacion') return <AppMiPresentacion />
```

## Patrones de Slides

### Patrón A — Dos columnas con stat (SlideLayout)

Usado en slides de contenido estándar (criterios, alternativas, problema).

```tsx
import SlideLayout from '../../slides/SlideLayout'

export default function MiSlide() {
  return (
    <SlideLayout
      label="Categoría"           // Label pequeño uppercase (ej: "Factibilidad Técnica")
      title="Título Principal"    // Heading grande
      stat="42"                   // Número/texto grande en columna derecha
      statLabel="descripción"     // Label bajo el número
      accentColor="#307FE2"       // Color barra lateral izquierda
      statColor="#307FE2"         // Color del número stat
    >
      {/* contenido de la columna izquierda */}
    </SlideLayout>
  )
}
```

### Patrón B — Layout completamente custom

Usado en portada y slides con estructura única (ej: Matriz).

```tsx
export default function MiSlide() {
  return (
    <div className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}>

      {/* Barra de acento lateral — siempre presente */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Columna izquierda (flex-[3] = 60%) */}
      <div className="flex flex-col justify-center pl-16 pr-10 py-10 flex-[3] min-w-0">
        <p className="font-body text-sm tracking-[0.25em] text-duoc-blue uppercase mb-3">
          Label
        </p>
        <h2 className="font-heading text-5xl font-bold leading-tight mb-6"
          style={{ color: 'var(--text)' }}>
          Título
        </h2>
        {/* contenido */}
      </div>

      {/* Columna derecha (flex-[2] = 40%) */}
      <div className="flex flex-col justify-center items-center flex-[2] border-l gap-3 px-8"
        style={{ backgroundColor: 'var(--bg-right)', borderColor: 'var(--border)' }}>
        {/* stat, logo, etc. */}
      </div>
    </div>
  )
}
```

### Elementos reutilizables frecuentes

```tsx
// Card con borde izquierdo coloreado
<div className="rounded-lg px-5 py-4 border"
  style={{
    backgroundColor: 'var(--bg-card)',
    borderColor: 'var(--border)',
    borderLeftColor: color,
    borderLeftWidth: '3px',
  }}>

// Badge de color
<span className="font-body text-xs px-2 py-0.5 rounded-full"
  style={{ backgroundColor: `${color}22`, color }}>
  Texto
</span>

// Bullet con chevron
<li className="flex gap-2 font-body text-lg" style={{ color: 'var(--text-muted)' }}>
  <span className="mt-0.5 shrink-0" style={{ color: accentColor }}>›</span>
  Texto del bullet
</li>
```

## Agregar una Presentación Nueva

1. Crear `src/mi-eval/AppMiEval.tsx` — copiar `AppEP2.tsx` como base, cambiar nombre de array `SLIDES`
2. Crear `src/mi-eval/slides/` — agregar componentes E01, E02, etc.
3. Registrar en `src/main.tsx`:
   ```tsx
   if (presentation === 'mi-eval') return <AppMiEval />
   ```
4. Agregar card en `src/MainMenu.tsx`

## Agregar Export PDF a una Presentación

1. Crear `src/mi-eval/pdf/MiEvalPdfView.tsx`:
   - Wrapper raíz: `<div className="pdf-root">`
   - Cada slide: `<div className="pdf-page">` (A4 landscape = 297×210mm)
   - Hardcodear colores del tema claro (no usar `var(--)`)
   - Importar `../../pdf/pdf.css` para los estilos base

2. Crear `src/mi-eval/pdf/downloadMiEvalPdf.ts` — copiar `downloadEp2Pdf.ts`, cambiar:
   ```ts
   import MiEvalPdfView from './MiEvalPdfView'
   pdf.save('Presentacion_MiEval.pdf')
   ```

3. En `AppMiEval.tsx`:
   ```tsx
   import { downloadMiEvalPdf } from './pdf/downloadMiEvalPdf'
   // estado: const [generatingPdf, setGeneratingPdf] = useState(false)
   // botón en controles inferiores: onClick={handlePdf}
   ```

**Reglas clave para PDF:**
- El contenedor off-screen se renderiza a `1122px` de ancho (`~297mm @ 96dpi`)
- Se espera `2500ms` para que carguen Google Fonts
- Se captura cada `.pdf-page` con `html2canvas` a `scale: 2`
- Colores del tema claro hardcodeados: `#FFFFFF`, `#F8FAFC`, `#E2E8F0`, `#1A202C`, `#4A5568`, `#6B7280`

## Comandos

```bash
npm install          # Instalar dependencias
npm run dev          # Servidor local → http://localhost:5173
npm run build        # Compilar para producción → dist/
npm run preview      # Vista previa del build
```
