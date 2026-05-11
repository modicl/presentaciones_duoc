---
name: duoc-presentacion-template
description: Use when creating or extending a Duoc UC academic presentation using this repository as template. Provides official Duoc UC typography scale, confirmed institutional color palette, official school colors with Pantone codes, CSS theme variables, slide component patterns, routing, and PDF export workflow.
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

---

## Tipografía Oficial Duoc UC

Fuente del kit digital oficial: [duoc.cl/kit-digital/web/tipografia-colores](https://www.duoc.cl/kit-digital/web/tipografia-colores/)

Duoc UC usa **dos familias tipográficas** cargadas desde Google Fonts:

| Clase Tailwind | Fuente | Tipo | Pesos disponibles |
|----------------|--------|------|-------------------|
| `font-heading` | **Merriweather** | Serif | Light, Light Italic, Regular, Italic, Bold, Bold Italic |
| `font-body` | **Lato** | Sans-serif | Light, Light Italic, Regular, Italic, Bold, Bold Italic |

### Escala tipográfica oficial (rem → px a 16px base)

| Nivel | Fuente | Peso | Tamaño | px equiv. | Uso |
|-------|--------|------|--------|-----------|-----|
| h1 | Merriweather o Lato | Bold | 2.6875rem | ~43px | Título principal |
| h2 | Merriweather o Lato | Bold | 2.1rem | ~34px | Subtítulos y textos grandes |
| h3 | Merriweather o Lato | Bold | 1.5rem | 24px | Títulos párrafos interiores |
| h4 | Merriweather o Lato | Regular | 1.25rem | 20px | Texto bajada |
| h5 | Merriweather o Lato | Regular | 1rem | 16px | Título 5to nivel |
| Body | Lato | Regular | 1rem | 16px | Texto corriente |
| Small | Lato | Regular | 0.8125rem | 13px | Texto pequeño de apoyo |

### Clases Tailwind de tamaño usadas en los slides

`text-xs` (12px) · `text-sm` (14px) · `text-base` (16px) · `text-lg` (18px) · `text-xl` (20px) · `text-4xl` (36px) · `text-5xl` (48px)

---

## Colores Oficiales Duoc UC

> ✅ Todos los valores de esta sección provienen del [Kit Digital oficial de Duoc UC](https://www.duoc.cl/kit-digital/web/tipografia-colores/).

### Paleta Primaria Institucional

| Nombre | Hex | RGB | Clase CSS kit | Uso |
|--------|-----|-----|---------------|-----|
| Negro | `#1A1A1A` | 26, 26, 26 | `.bg-dark` | Fondo oscuro, texto principal dark |
| Blanco | `#FFFFFF` | 255, 255, 255 | `.bg-white` | Fondo claro, texto sobre oscuro |
| Amarillo Duoc | `#FFB800` | 255, 184, 0 | `.orange-duoc` | Acento institucional, highlights |

### Paleta Secundaria Institucional

| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Gris | `#666666` | 102, 102, 102 | Texto secundario, iconos |
| Negro puro | `#000000` | 0, 0, 0 | Texto en documentos impresos |
| Gris claro Duoc | `#EEEEEE` | 238, 238, 238 | Fondos sutiles, separadores |

### Tokens Tailwind de este proyecto (`tailwind.config.js`)

```js
// Mapeo de colores oficiales a tokens Tailwind del template
colors: {
  'duoc-blue':   '#307FE2',  // Informática y Telecomunicaciones (Pantone 2727 C)
  'duoc-yellow': '#FFB800',  // Amarillo institucional oficial
  'duoc-dark':   '#1A1A1A',  // Negro institucional oficial
  'duoc-green':  '#43B02A',  // Ingeniería & Recursos Naturales (Pantone 361 C)
  'duoc-gray':   '#666666',  // Gris institucional oficial
}
```

Uso en JSX: `text-duoc-blue`, `bg-duoc-blue`, `border-duoc-yellow`, etc.

---

## Colores por Escuela — Todos Confirmados Oficialmente

> ✅ Colores oficiales del Kit Digital Duoc UC. Incluyen referencia Pantone para uso en impresos.

| Escuela | Color primario | Hex | Color secundario | Hex | Clase CSS kit |
|---------|---------------|-----|-----------------|-----|---------------|
| **Administración y Negocios** | Púrpura | `#AC4FC6` | Púrpura claro | `#C98BDB` | `.E-AyN-New` |
| **Comunicación** | Rojo | `#D50032` | Rojo claro | `#DF4661` | `.E-Com-New` |
| **Construcción** | Naranja | `#E87722` | Naranja claro | `#ECA154` | `.E-Cons-New` |
| **Diseño** | Verde lima | `#C4D600` | Verde lima claro | `#DBE442` | `.E-Dis-New` |
| **Gastronomía** | Salmón/Rosa | `#FF585D` | Rosa claro | `#FF808B` | `.E-Gas` |
| **Informática y Telecomunicaciones** | Azul | `#307FE2` | Azul claro | `#8BB8E8` | `.E-IyT-New` |
| **Ingeniería & Recursos Naturales** | Verde | `#43B02A` | Verde claro | `#A1D884` | `.E-Ing-New` |
| **Salud y Bienestar** | Celeste | `#5BC2E7` | Celeste claro | `#99D6EA` | `.E-Sal-New` |
| **Turismo y Hospitalidad** | Teal | `#00A499` | Teal claro | `#2AD2C9` | `.E-Tur-New` |

### Referencias Pantone (para impresión y materiales físicos)

| Escuela | Pantone primario | Pantone secundario |
|---------|-----------------|-------------------|
| Administración y Negocios | 2582 C | 2572 C |
| Comunicación | 199 C | 198 C |
| Construcción | 158 C | 157 C |
| Diseño | 382 C | 380 C |
| Gastronomía | 178 C | 177 C |
| Informática y Telecomunicaciones | 2727 C | 278 C |
| Ingeniería & Recursos Naturales | 361 C | 359 C |
| Salud y Bienestar | 2985 C | 2975 C |
| Turismo y Hospitalidad | 3272 C | 3252 C |

### Agregar colores de escuela a Tailwind

Para usar los colores de tu escuela con clases Tailwind, agrégalos en `tailwind.config.js`:

```js
// tailwind.config.js
colors: {
  // ...colores existentes...
  'school-primary':   '#AC4FC6',  // reemplaza con el hex de tu escuela
  'school-secondary': '#C98BDB',  // reemplaza con el secundario de tu escuela
}
```

Luego úsalos como `accentColor` y `statColor` en los slides:

```tsx
<SlideLayout
  accentColor="#AC4FC6"   // color primario de tu escuela
  statColor="#AC4FC6"
  ...
>
```

---

## Variables CSS del Tema (`src/index.css`)

```css
/* Tema oscuro — por defecto (:root) */
--bg:         #1A1A1A   /* Negro institucional Duoc UC */
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

Activar tema claro: agregar clase `theme-light` al div raíz.

> ⚠ **Importante para PDF:** Las variables `var(--)` no se resuelven en el contenedor off-screen de html2canvas. En los componentes PDF siempre usar los valores hardcodeados del tema claro.

---

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
tailwind.config.js             # Tokens de color y tipografía
```

---

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
// src/main.tsx — agregar antes del return <MainMenu />
if (presentation === 'mi-presentacion') return <AppMiPresentacion />
```

---

## Patrones de Slides

### Patrón A — Dos columnas con stat (SlideLayout)

Usado en slides de contenido estándar (criterios, alternativas, problema).

```tsx
import SlideLayout from '../../slides/SlideLayout'

export default function MiSlide() {
  return (
    <SlideLayout
      label="Categoría"           // Label pequeño uppercase (ej: "Factibilidad Técnica")
      title="Título Principal"    // Heading grande — font-heading Merriweather
      stat="42"                   // Número/texto grande en columna derecha
      statLabel="descripción"     // Label bajo el número
      accentColor="#307FE2"       // Color barra lateral + label (usa hex de tu escuela)
      statColor="#307FE2"         // Color del número stat
    >
      {/* contenido de la columna izquierda */}
    </SlideLayout>
  )
}
```

### Patrón B — Layout completamente custom

Usado en portada y slides con estructura única (ej: Matriz de Factibilidad).

```tsx
export default function MiSlide() {
  return (
    <div className="relative w-full h-full flex overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}>

      {/* Barra de acento lateral izquierda — siempre presente */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 bg-duoc-blue" />

      {/* Columna izquierda (flex-[3] ≈ 60%) */}
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

      {/* Columna derecha (flex-[2] ≈ 40%) */}
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

// Badge semitransparente
<span className="font-body text-xs px-2 py-0.5 rounded-full"
  style={{ backgroundColor: `${color}22`, color }}>
  Texto badge
</span>

// Bullet con chevron ›
<li className="flex gap-2 font-body text-lg" style={{ color: 'var(--text-muted)' }}>
  <span className="mt-0.5 shrink-0" style={{ color: accentColor }}>›</span>
  Texto del bullet
</li>

// Número grande (stat)
<span className="font-heading font-bold leading-none"
  style={{ fontSize: 'clamp(64px, 9vw, 130px)', color: statColor }}>
  42
</span>
```

---

## Agregar una Presentación Nueva

1. Crear `src/mi-eval/AppMiEval.tsx` — copiar `src/ep2/AppEP2.tsx` como base
2. Crear `src/mi-eval/slides/` con los componentes de cada slide
3. Registrar en `src/main.tsx`:
   ```tsx
   if (presentation === 'mi-eval') return <AppMiEval />
   ```
4. Agregar card en `src/MainMenu.tsx`

---

## Agregar Export PDF a una Presentación

**Paso 1** — Crear `src/mi-eval/pdf/MiEvalPdfView.tsx`:
- Wrapper raíz: `<div className="pdf-root">`
- Cada slide: `<div className="pdf-page">` → A4 landscape = 297 × 210 mm
- Hardcodear colores del tema claro (NO usar `var(--)`)
- Importar `../../pdf/pdf.css` para estilos base

**Hardcodear estos valores en componentes PDF:**

```ts
// Tema claro hardcodeado para PDF (no usar var(--))
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
```

**Paso 2** — Crear `src/mi-eval/pdf/downloadMiEvalPdf.ts`:

```ts
// Copiar downloadEp2Pdf.ts y cambiar estas dos líneas:
import MiEvalPdfView from './MiEvalPdfView'
pdf.save('Presentacion_MiEval_DuocUC.pdf')
```

**Paso 3** — En `AppMiEval.tsx` agregar botón:

```tsx
import { downloadMiEvalPdf } from './pdf/downloadMiEvalPdf'

// estado
const [generatingPdf, setGeneratingPdf] = useState(false)
const [pdfMsg, setPdfMsg] = useState('')

const handlePdf = async () => {
  setGeneratingPdf(true)
  try { await downloadMiEvalPdf(setPdfMsg) }
  catch (e) { console.error(e) }
  finally { setGeneratingPdf(false); setPdfMsg('') }
}

// botón en los controles inferiores:
<button onClick={handlePdf} disabled={generatingPdf}>
  {generatingPdf ? (pdfMsg || 'Generando…') : '⬇ PDF'}
</button>
```

**Parámetros del proceso PDF:**
- Contenedor off-screen: `1122px` de ancho (~297mm @ 96dpi)
- Espera inicial: `2500ms` para carga de Google Fonts
- Captura: `html2canvas` con `scale: 2` (alta resolución)
- Formato: JPEG 95% de calidad, A4 landscape (297×210mm)

---

## Comandos

```bash
npm install       # Instalar dependencias
npm run dev       # Servidor local → http://localhost:5173
npm run build     # Compilar → dist/
npm run preview   # Vista previa del build
```
