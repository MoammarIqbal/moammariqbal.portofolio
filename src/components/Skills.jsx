import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const categories = skillCategories[language];

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">
          {t.subtitle}
        </p>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map((category) => (
            <motion.div key={category.title} className="skill-category" variants={itemVariants}>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.items.map((skill) => (
                  <span key={skill.name} className="skill-tag">
                    <skill.icon style={{ color: skill.color }} className="skill-icon" aria-hidden="true" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
