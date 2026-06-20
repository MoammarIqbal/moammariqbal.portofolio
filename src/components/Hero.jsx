import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const p = profile[language];

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-name">{p.name}</h1>
          <p className="hero-role">{p.role}</p>
          <p className="hero-description">{p.headline}</p>

          <div className="hero-badges">
            {p.techBadges.map((tech) => (
              <span key={tech} className="badge">{tech}</span>
            ))}
          </div>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4"/></svg>
              {t.viewProjects}
            </a>
            <a href={p.cv} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {t.downloadCV}
            </a>
            <a href="#contact" className="btn btn-ghost">
              {t.contactMe}
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={p.photo}
            alt={`Foto profil ${p.name}`}
            width="280"
            height="280"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
