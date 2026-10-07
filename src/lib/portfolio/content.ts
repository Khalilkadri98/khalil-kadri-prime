export type Language = 'de' | 'en'
export type Localized = { de: string; en: string }
export const text = (de: string, en: string): Localized => ({ de, en })
export const links = {
  github: 'https://github.com/Khalilkadri98',
  linkedin: 'https://www.linkedin.com/in/khalil-kadri-aa8ab5278',
  email: 'khalilkadri023@gmail.com',
  portfolio: 'https://khalilkadri98.github.io/portfolio/',
}
export const navigation = [
  { id: 'about', label: text('Über mich', 'About') },
  { id: 'experience', label: text('Erfahrung', 'Experience') },
  { id: 'projects', label: text('Projekte', 'Projects') },
  { id: 'skills', label: text('Skills', 'Skills') },
  { id: 'contact', label: text('Kontakt', 'Contact') },
]
export const projects = [
  {
    id: 'editor', number: '01', category: text('Full-Stack · Lernplattform', 'Full-stack · Learning platform'),
    title: text('Online Code Editor', 'Online Code Editor'),
    problem: text('Programmieren lernen braucht mehr als einen Editor: eine sichere Umgebung und einen klaren Lernpfad.', 'Learning to code takes more than an editor: it needs a safe environment and a clear learning path.'),
    solution: text('Browserbasierter Editor mit isolierter Codeausführung in Docker-Containern, Rollen, Tutorials und Quiz-Fortschritt.', 'A browser-based editor with isolated execution in Docker containers, roles, tutorials and quiz progress.'),
    outcome: text('Sichere Ausführung. Strukturiertes Lernen.', 'Safe execution. Structured learning.'),
    detail: text('Die Plattform verbindet praktische Codeübungen mit Tutorials und Quizzen. Docker-Container isolieren die Ausführungsumgebung vom Anwendungssystem. Rollen strukturieren die Zugriffsrechte; der Lernfortschritt macht absolvierte Übungen nachvollziehbar.', 'The platform combines hands-on coding exercises with tutorials and quizzes. Docker containers isolate the execution environment from the application. Roles structure access permissions, while learning progress keeps completed exercises visible.'),
    stack: ['React', 'Express', 'MongoDB', 'Docker'],
  },
  {
    id: 'cashflow', number: '02', category: text('Data & Analytics · Finanzen', 'Data & analytics · Finance'),
    title: text('Cashflow & Forecasting', 'Cashflow & Forecasting'),
    problem: text('Finanzdaten verständlich zusammenführen und zukünftige Entwicklungen besser einordnen.', 'Bring financial data together clearly and gain a better understanding of potential future trends.'),
    solution: text('Interaktive Finanzanalyse mit React und TypeScript, einer Express-API und TensorFlow-basierten Prognosen.', 'Interactive financial analysis with React and TypeScript, an Express API and TensorFlow-based forecasting.'),
    outcome: text('Finanzdaten als Entscheidungsgrundlage.', 'Financial data for informed decisions.'),
    detail: text('Die Anwendung verbindet die Analyse historischer Finanzdaten mit modellbasierten Prognosen. MongoDB unterstützt die Datenhaltung, Express die Verarbeitung und React/TypeScript die Darstellung. Prognosen sind Orientierungshilfen, keine garantierten Ergebnisse.', 'The application combines historical financial analysis with model-based forecasts. MongoDB handles data storage, Express supports processing and React/TypeScript delivers the interface. Forecasts inform decisions; they are not guaranteed outcomes.'),
    stack: ['React', 'TypeScript', 'Express', 'MongoDB', 'TensorFlow'],
  },
  {
    id: 'energy', number: '03', category: text('Machine Learning · Energie', 'Machine learning · Energy'),
    title: text('Energy Prediction', 'Energy Prediction'),
    problem: text('Wetterabhängige Energieproduktion ist variabel und erschwert eine vorausschauende Planung.', 'Weather-dependent energy production is variable, making forward planning more challenging.'),
    solution: text('ML-gestützte Produktionsprognosen mit Wetterdaten von OpenWeatherMap, verfügbar für Web und Mobile.', 'ML-based production forecasts using OpenWeatherMap weather data, available on web and mobile.'),
    outcome: text('Wetterdaten in Planung übersetzen.', 'Turn weather data into planning insights.'),
    detail: text('Wetterdaten bilden die Grundlage zur Einschätzung der Energieproduktion. Machine Learning verbindet diese Informationen mit Prognosen, während React und React Native die Ergebnisse auf Web- und Mobiloberflächen zugänglich machen. Die Vorhersagegüte hängt von Daten und Modell ab.', 'Weather data provides a basis for estimating energy production. Machine learning turns that information into forecasts, while React and React Native make the results accessible on web and mobile. Prediction quality depends on the data and model.'),
    stack: ['React', 'React Native', 'Machine Learning', 'OpenWeatherMap'],
  },
  {
    id: 'document', number: '04', category: text('Business Software · Automatisierung', 'Business software · Automation'),
    title: text('Dokumente & Buchhaltung', 'Documents & Accounting'),
    problem: text('Manuelle Rechnungserfassung und verteilte Dokumente machen Buchhaltungsabläufe aufwendig.', 'Manual invoice entry and scattered documents make accounting workflows time-consuming.'),
    solution: text('MERN-Anwendung mit OCR und KI zur Dokumentenerfassung und strukturierten, deutschen Rechnungsworkflows.', 'A MERN application using OCR and AI for document capture and structured German invoice workflows.'),
    outcome: text('Weniger manuelle Schritte. Mehr Übersicht.', 'Fewer manual steps. Greater clarity.'),
    detail: text('Dokumente werden zentral erfasst und für die weitere Bearbeitung strukturiert. OCR und KI unterstützen das Auslesen relevanter Rechnungsinformationen. Der Fokus liegt auf nachvollziehbaren Arbeitsabläufen für deutsche Rechnungen; eine Zertifizierung oder steuerrechtliche Konformität wird nicht behauptet.', 'Documents are captured centrally and structured for further processing. OCR and AI support extracting relevant invoice information. The focus is on traceable German invoice workflows; no certification or tax-compliance claim is made.'),
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'OCR / AI'],
  },
]
export const experience = [
  { company: 'DXC Technology', current: true, title: text('Support Engineer', 'Support Engineer'), description: text('L2/L3-Support für Enterprise-IT: Microsoft 365, Active Directory, Intune, SharePoint und OneDrive. Incident- und Problem-Management, Root-Cause-Analyse und SLA-orientierte Bearbeitung – mit klarer Dokumentation und verlässlicher Kundenkommunikation.', 'L2/L3 enterprise IT support across Microsoft 365, Active Directory, Intune, SharePoint and OneDrive. Incident and problem management, root-cause analysis and SLA-focused resolution, backed by clear documentation and dependable customer communication.'), stack: ['Microsoft 365', 'Active Directory', 'Intune', 'L2 / L3'] },
  { company: text('Softwareentwicklung', 'Software development'), current: false, title: text('Full-Stack Developer', 'Full-stack Developer'), description: text('Entwicklung von Webanwendungen über Frontend, Backend und Datenhaltung hinweg. Schwerpunkte: verständliche Benutzeroberflächen, API-Integration und wartbare Anwendungsarchitektur.', 'Building web applications across the frontend, backend and data layers. Focused on clear interfaces, API integration and maintainable application architecture.'), stack: ['React', 'Node.js', 'REST / GraphQL', 'SQL / NoSQL'] },
  { company: text('Freiberufliche Projekte', 'Freelance projects'), current: false, title: text('Webentwicklung & Kundenprojekte', 'Web development & client projects'), description: text('Umsetzung individueller Weblösungen mit WordPress, WooCommerce und Laravel – von der Anforderungsabstimmung bis zur technischen Umsetzung und Weiterentwicklung.', 'Delivering tailored web solutions with WordPress, WooCommerce and Laravel, from discussing requirements to implementation and ongoing development.'), stack: ['WordPress', 'WooCommerce', 'PHP / Laravel'] },
]
export const skills = [
  { icon: 'enterprise', title: 'Enterprise IT', items: ['Microsoft 365', 'Active Directory', 'Intune', 'SharePoint', 'OneDrive', 'Incident / Problem Management', 'Root-Cause Analysis', 'SLA Management'] },
  { icon: 'sap', title: 'SAP', items: ['S/4HANA', 'ABAP', 'SAP GUI', 'SAP Business Client', 'RFC', 'Authorization Management'], note: text('Entwicklungsschwerpunkt: Full-Stack SAP. Perspektivisch: Solution Architecture.', 'Development focus: full-stack SAP. Long-term direction: solution architecture.') },
  { icon: 'frontend', title: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'React Native'] },
  { icon: 'backend', title: 'Backend', items: ['Node.js', 'Express', 'PHP / Laravel', 'REST / GraphQL', 'MongoDB', 'MySQL', 'MSSQL', 'Oracle'] },
  { icon: 'cloud', title: 'Cloud & DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'Git', 'CI / CD'] },
  { icon: 'cms', title: 'CMS & E-Commerce', items: ['WordPress', 'WooCommerce', 'Laravel'] },
]
export const values = [
  { title: text('Entwicklung trifft Betrieb', 'Development meets operations'), body: text('Ich denke Software nicht nur bis zum Deployment, sondern auch im täglichen Einsatz.', 'I think beyond deployment to how software works in everyday use.') },
  { title: text('Ursachen statt Symptome', 'Root causes, not symptoms'), body: text('Strukturierte Analyse und nachvollziehbare Lösungen statt kurzfristiger Workarounds.', 'Structured analysis and traceable solutions, rather than short-term workarounds.') },
  { title: text('Enterprise-Verständnis', 'Enterprise understanding'), body: text('Verlässlichkeit, SLAs und Dokumentation sind Teil meiner Arbeitsweise.', 'Reliability, SLAs and documentation are built into the way I work.') },
  { title: text('Klare Kommunikation', 'Clear communication'), body: text('Technische Zusammenhänge verständlich machen – für Teams, Kunden und Fachbereiche.', 'Making technical topics clear for teams, customers and business stakeholders.') },
]
