import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import EftFullstackPdfView from './EftFullstackPdfView'
import '../../pdf/pdf.css'

export async function downloadEftFullstackPdf(onProgress?: (msg: string) => void): Promise<void> {
  onProgress?.('Preparando documento...')

  const container = document.createElement('div')
  container.style.cssText = [
    'position:fixed',
    'left:-9999px',
    'top:0',
    'width:1122px',
    'background:white',
    'overflow:visible',
    'z-index:-1',
    'font-family:Lato,sans-serif',
  ].join(';')
  document.body.appendChild(container)

  const root = createRoot(container)
  root.render(createElement(EftFullstackPdfView))

  await new Promise(r => setTimeout(r, 2500))

  const pages = Array.from(container.querySelectorAll<HTMLElement>('.pdf-page'))
  if (pages.length === 0) {
    root.unmount()
    document.body.removeChild(container)
    throw new Error('No se encontraron páginas PDF.')
  }

  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })

  for (let i = 0; i < pages.length; i++) {
    onProgress?.(`Renderizando página ${i + 1} de ${pages.length}…`)

    const page = pages[i]
    const prevMax = page.style.maxHeight
    const prevOverflow = page.style.overflow
    page.style.maxHeight = 'none'
    page.style.overflow = 'visible'

    const canvas = await html2canvas(page, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: page.offsetWidth,
      height: page.offsetHeight,
    })

    page.style.maxHeight = prevMax
    page.style.overflow = prevOverflow

    const imgData = canvas.toDataURL('image/jpeg', 0.95)
    if (i > 0) pdf.addPage()
    pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210)
  }

  onProgress?.('Descargando…')
  pdf.save('Defensa_EFT_Fullstack_III_PRISMA.pdf')

  root.unmount()
  document.body.removeChild(container)
}
