import { experiences } from '../data/experiences';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">Pengalaman Kerja</h2>
        <p className="section-subtitle">
          Riwayat pengalaman profesional dalam pengembangan software dan pengelolaan data.
        </p>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <h3 className="timeline-position">{exp.position}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-period">{exp.period}</p>
              <p className="timeline-desc">{exp.description}</p>

              <ul className="timeline-responsibilities">
                {exp.responsibilities.map((resp, j) => (
                  <li key={j}>{resp}</li>
                ))}
              </ul>

              <div className="timeline-tech">
                {exp.techStack.map((tech) => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
