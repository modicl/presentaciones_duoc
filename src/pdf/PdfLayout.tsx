import { type ReactNode } from 'react'

interface PdfLayoutProps {
  label: string
  title: string
  accentColor?: string
  stat?: string
  statLabel?: string
  statColor?: string
  children: ReactNode
}

export default function PdfLayout({
  label,
  title,
  accentColor = '#307FE2',
  stat,
  statLabel,
  statColor = '#307FE2',
  children,
}: PdfLayoutProps) {
  if (stat) {
    return (
      <div className="pdf-page" style={{ flexDirection: 'row', padding: 0, gap: 0 }}>
        <div className="pdf-accent" style={{ backgroundColor: accentColor }} />
        <div className="pdf-layout-left">
          <p className="pdf-label" style={{ color: accentColor }}>{label}</p>
          <h2 className="pdf-title">{title}</h2>
          <div className="pdf-content">{children}</div>
        </div>
        <div className="pdf-layout-right">
          <span className="pdf-layout-stat" style={{ color: statColor }}>{stat}</span>
          <span className="pdf-layout-stat-label">{statLabel}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="pdf-page">
      <div className="pdf-accent" style={{ backgroundColor: accentColor }} />
      <p className="pdf-label" style={{ color: accentColor }}>{label}</p>
      <h2 className="pdf-title">{title}</h2>
      <div className="pdf-content">{children}</div>
    </div>
  )
}
