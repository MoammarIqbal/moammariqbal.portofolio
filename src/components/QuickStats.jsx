import { profile } from '../data/profile';

export default function QuickStats() {
  return (
    <section className="quick-stats">
      <div className="container">
        <div className="stats-grid">
          {profile.quickStats.map((stat) => (
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
