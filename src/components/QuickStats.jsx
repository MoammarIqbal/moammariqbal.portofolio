import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export default function QuickStats() {
  const { language } = useLanguage();
  const stats = profile[language].quickStats;

  return (
    <section className="quick-stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
