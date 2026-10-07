import { createFileRoute } from '@tanstack/react-router'
import { Portfolio } from '@/components/portfolio/portfolio'
export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Khalil Kadri — Software Engineer · Enterprise IT · SAP' },
      { name: 'description', content: 'Khalil Kadri: Software Engineer, Technical Support Engineer bei DXC Technology und SAP Developer. Full-Stack-Entwicklung, Enterprise-IT und SAP für den DACH-Markt.' },
      { property: 'og:title', content: 'Khalil Kadri — Software Engineering, Enterprise IT & SAP' },
      { property: 'og:description', content: 'Zuverlässige Software, strukturiertes L2/L3-Troubleshooting und SAP-Entwicklung. Entdecken Sie Erfahrung, Technologien und ausgewählte Projekte von Khalil Kadri.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: '/' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: '/' }],
  }),
  component: Portfolio,
})
