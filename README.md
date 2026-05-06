# Presentaciones Interactivas Web — Quinto Semestre

Este repositorio contiene un sistema interactivo de presentaciones web creado para la entrega de evaluaciones y exposiciones del quinto semestre de la carrera en Duoc UC (Escuela de Informática y Telecomunicaciones). 

El proyecto cuenta con un portal o **Menú Principal** desde el cual se pueden seleccionar múltiples presentaciones.

## 📚 Presentaciones Incluidas

Actualmente el repositorio alberga el material de las siguientes asignaturas:

1. **Evaluación de Proyectos**
   - **EP1** — Caso de Estudio: Servicio Público de Salud RedNorte. Analiza el diseño de un ecosistema digital (EDGDA), incluyendo análisis de Porter, PESTEL, objetivos, arquitectura de solución y stakeholders.
   - **EP2** — Evaluación de Alternativas de Desarrollo. Presenta los criterios de factibilidad técnica, organizacional, normativa/legal y financiera aplicados al sistema EDGDA, con cinco opciones de desarrollo evaluadas mediante una Matriz de Factibilidad de 12 criterios y 84 puntos máximos.
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

## 🛠️ Stack Tecnológico

El proyecto es de arquitectura puramente Frontend de alta modernidad.

- **[React](https://react.dev/):** Para la arquitectura de componentes.
- **[Vite](https://vitejs.dev/):** Entorno y empaquetamiento altamente optimizado y veloz.
- **[TypeScript](https://www.typescriptlang.org/):** Base sólida enfocada en tipado robusto.
- **[Tailwind CSS](https://tailwindcss.com/):** Estilos reactivos y clases estéticas para un diseño ágil de UI.
