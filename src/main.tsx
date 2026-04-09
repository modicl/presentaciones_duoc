import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './pdf/pdf.css'
import App from './App'
import PdfView from './pdf/PdfView'
import AppPrisma from './prisma/AppPrisma'

const params = new URLSearchParams(window.location.search)
const isPdf = params.has('pdf')
const presentation = params.get('presentation') ?? 'ev-proyectos'

if (isPdf) {
  document.documentElement.style.overflow = 'auto'
  document.body.style.overflow = 'auto'
  document.body.style.height = 'auto'
  const root = document.getElementById('root')
  if (root) { root.style.overflow = 'auto'; root.style.height = 'auto' }
}

function Root() {
  if (isPdf) return <PdfView />
  if (presentation === 'prisma') return <AppPrisma />
  return <App />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
