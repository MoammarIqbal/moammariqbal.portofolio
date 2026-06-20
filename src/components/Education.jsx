import { education, organizations } from '../data/experiences';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Education() {
  const { language } = useLanguage();
  const t = translations[language].education;
  const eduList = education[language];
  const orgList = organizations[language];

  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">
          {t.subtitle}
        </p>

        <div className="education-list">
          {eduList.map((edu, i) => (
            <article key={i} className="education-item">
              <h3 className="education-institution">{edu.institution}</h3>
              {edu.program && (
                <p className="education-program">{edu.program}</p>
              )}
              <p className="education-period">{edu.period}</p>
              <p className="education-desc">{edu.description}</p>
            </article>
          ))}
        </div>

        {orgList.length > 0 && (
          <>
            <h3 className="section-title" style={{ fontSize: '1.4rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
              {t.organizationsTitle}
            </h3>
            <div className="education-list">
              {orgList.map((org, i) => (
                <article key={i} className="education-item">
                  <h3 className="education-institution">{org.name}</h3>
                  <p className="education-program">{org.type}</p>
                  <p className="education-period">{org.period}</p>
                  <p className="education-desc">{org.description}</p>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
