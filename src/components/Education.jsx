import { education, organizations } from '../data/experiences';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title">Pendidikan</h2>
        <p className="section-subtitle">
          Latar belakang pendidikan formal dan pelatihan profesional.
        </p>

        <div className="education-list">
          {education.map((edu, i) => (
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

        {organizations.length > 0 && (
          <>
            <h3 className="section-title" style={{ fontSize: '1.4rem', marginTop: '3rem', marginBottom: '1.5rem' }}>
              Organisasi dan Pelatihan
            </h3>
            <div className="education-list">
              {organizations.map((org, i) => (
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
