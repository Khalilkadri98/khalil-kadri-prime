import { UserRound } from 'lucide-react'
import type { Language } from '@/lib/portfolio/content'
import portraitAsset from '@/assets/khalil-kadri-portrait.jpg.asset.json'

export function ProfilePortrait({ language, src = portraitAsset.url }: { language: Language; src?: string }) {
  const de = language === 'de'
  return <figure className="profile-portrait">
    <div className="portrait-frame">
      {src ? <img src={src} alt={de ? 'Porträt von Khalil Kadri' : 'Portrait of Khalil Kadri'} width={800} height={1000} fetchPriority="high" /> : <div className="portrait-placeholder">
        <UserRound aria-hidden="true" />
        <span>{de ? 'Porträt folgt' : 'Portrait coming soon'}</span>
        <small>{de ? 'Platzhalter · Persönliches Foto' : 'Placeholder · Personal photo'}</small>
      </div>}
    </div>
    <figcaption><strong>Khalil Kadri</strong><span>Software Engineering · Enterprise IT · SAP</span></figcaption>
  </figure>
}