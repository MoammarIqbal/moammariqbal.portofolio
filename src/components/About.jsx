import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;
  const p = profile[language];

  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">
          {t.subtitle}
        </p>

        <div className="about-grid">
          <div className="about-text">
            {p.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="about-image">
            <img
              src={p.heroPhoto}
              alt={`${p.name} - Fullstack Web Developer`}
              loading="lazy"
              width="260"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
