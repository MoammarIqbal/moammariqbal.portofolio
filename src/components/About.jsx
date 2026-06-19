import { profile } from '../data/profile';

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <h2 className="section-title">Tentang Saya</h2>
        <p className="section-subtitle">
          Fullstack Software Developer yang menggabungkan pengembangan web, integrasi API, dan pemahaman proses bisnis.
        </p>

        <div className="about-grid">
          <div className="about-text">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="about-image">
            <img
              src={profile.heroPhoto}
              alt={`${profile.name} - Fullstack Web Developer`}
              loading="lazy"
              width="260"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
