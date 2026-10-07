import { FileText } from 'lucide-react'
import solar from '@/assets/energy-solar.jpg'
import type { Language } from '@/lib/portfolio/content'

function BrowserBar({ name }: { name: string }) {
  return <div className="browser-bar"><div className="window-dots"><i /><i /><i /></div><span className="browser-address">{name}</span></div>
}
export function ProjectVisual({ kind, language }: { kind: string; language: Language }) {
  const de = language === 'de'
  if (kind === 'energy') return <div className="project-visual energy"><img src={solar} width={1200} height={800} loading="lazy" alt={de ? 'Solaranlage als Illustration der wetterabhängigen Energieproduktion' : 'Solar farm illustrating weather-dependent energy production'} /><span className="image-caption">{de ? 'Themenillustration' : 'Topic illustration'}</span></div>
  return <div className={`project-visual ${kind}`} aria-hidden="true">
    <span className="preview-label">{de ? 'UI-KONZEPT' : 'UI CONCEPT'}</span>
    <div className="browser-preview"><BrowserBar name={kind === 'editor' ? 'code.workspace' : kind === 'cashflow' ? 'finance.overview' : 'documents.workspace'} />
      {kind === 'editor' ? <div className="editor-main"><div className="editor-sidebar"><b>Code Workspace</b><span>▸ {de ? 'Übersicht' : 'Overview'}</span><span>▸ Tutorials</span><span>▸ {de ? 'Übungen' : 'Exercises'}</span><span>▸ Quiz</span></div><div className="editor-code"><div className="editor-tab">◇ main.js <span className="float-right">JavaScript</span></div><div><span className="line-number">1</span><span className="code-blue">function</span> greet(name) {'{'}</div><div><span className="line-number">2</span>  <span className="code-blue">return</span> <span className="code-green">`Hello, ${'{'}name{'}'}!`</span>;</div><div><span className="line-number">3</span>{'}'}</div><div><span className="line-number">4</span></div><div><span className="line-number">5</span>console.log(greet(<span className="code-green">'World'</span>));</div><div className="terminal">TERMINAL <span className="float-right code-green">● container ready</span><br />&gt; Hello, World!</div></div></div>
      : kind === 'cashflow' ? <div className="finance-preview"><div className="preview-heading">{de ? 'Finanzübersicht' : 'Financial overview'}<small>{de ? 'BEISPIELDATEN' : 'SAMPLE DATA'}</small></div><div className="finance-stats"><div><small>{de ? 'Einnahmen' : 'Revenue'}</small><b>€ 24.850</b></div><div><small>Cashflow</small><b>€ 8.420</b></div><div><small>{de ? 'Prognose' : 'Forecast'}</small><b>€ 9.180</b></div></div><svg className="chart-lines" viewBox="0 0 350 90" preserveAspectRatio="none"><path className="chart-grid" d="M0 10H350 M0 35H350 M0 60H350 M0 85H350"/><path className="chart-actual" d="M0 78 28 70 55 75 83 48 110 57 138 34 165 45 192 24 220 30"/><path className="chart-forecast" d="M220 30 247 22 275 26 302 10 330 15 350 3"/></svg><div className="chart-labels"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span></div></div>
      : <div className="document-preview"><div className="preview-heading">{de ? 'Dokumentenübersicht' : 'Document overview'}<small>OCR WORKFLOW</small></div><div className="document-row"><span>{de ? 'Dokument' : 'Document'}</span><span>Status</span></div>{['RE-2026-001.pdf', 'RE-2026-002.pdf', 'RE-2026-003.pdf'].map((name, i) => <div className="document-row" key={name}><FileText /><span>{name}</span><span className="document-status">{i === 2 ? (de ? 'In Prüfung' : 'In review') : (de ? 'Erfasst' : 'Captured')}</span></div>)}</div>}
    </div>
  </div>
}
