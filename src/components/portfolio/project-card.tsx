import { ArrowUpRight, Check, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { projects, type Language } from '@/lib/portfolio/content'
import { ProjectVisual } from './project-visual'
export function ProjectCard({ project, language }: { project: typeof projects[number]; language: Language }) {
  const de = language === 'de'
  return <article className="project-card">
    <ProjectVisual kind={project.id} language={language} />
    <div className="project-body"><div className="project-category"><span>{project.category[language]}</span><span>{project.number}</span></div><h3>{project.title[language]}</h3>
      <div className="case-facts"><div><h4>Problem</h4><p>{project.problem[language]}</p></div><div><h4>{de ? 'Lösung' : 'Solution'}</h4><p>{project.solution[language]}</p></div></div>
      <div className="chips" aria-label="Tech stack">{project.stack.map(s => <span className="chip" key={s}>{s}</span>)}</div>
      <div className="project-bottom"><p><Check />{project.outcome[language]}</p><Dialog><DialogTrigger asChild><Button variant="ghost" className="project-more" aria-label={`${de ? 'Fallstudie öffnen' : 'Open case study'}: ${project.title[language]}`} title={de ? 'Fallstudie ansehen' : 'View case study'}><ArrowUpRight /></Button></DialogTrigger><DialogContent className="max-h-[85vh] w-[calc(100%-32px)] overflow-y-auto rounded-lg"><DialogHeader><DialogTitle>{project.title[language]}</DialogTitle><DialogDescription>{project.category[language]}</DialogDescription></DialogHeader><div className="detail-copy"><h4>Problem</h4><p>{project.problem[language]}</p><h4>{de ? 'Lösung & Umsetzung' : 'Solution & implementation'}</h4><p>{project.detail[language]}</p><h4>{de ? 'Mehrwert' : 'Value'}</h4><p>{project.outcome[language]}</p><h4>Tech Stack</h4><div className="chips">{project.stack.map(s => <span className="chip" key={s}>{s}</span>)}</div><p className="mt-6 flex items-center gap-2 text-xs"><ExternalLink className="size-3 shrink-0" />{de ? 'GitHub / Demo: Projektlink noch nicht hinterlegt.' : 'GitHub / demo: project link not yet provided.'}</p></div></DialogContent></Dialog></div>
    </div>
  </article>
}
