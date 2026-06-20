import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import PreviewModal from './PreviewModal';
import ImageWithSkeleton from './ImageWithSkeleton';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Projects() {
  const [activeCase, setActiveCase] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const caseRef = useRef(null);

  const { language } = useLanguage();
  const t = translations[language].projects;
  const pList = projects[language];

  const featured = pList.filter((p) => p.featured);
  const other = pList.filter((p) => !p.featured);
  const activeProject = pList.find((p) => p.id === activeCase);

  const handleViewCase = (id) => {
    setActiveCase(activeCase === id ? null : id);
    setTimeout(() => {
      if (caseRef.current) {
        caseRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const openPreview = (src, title) => {
    setPreviewImage({ src, title });
  };

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">
          {t.subtitle}
        </p>

        <div className="featured-projects-grid">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewCase={handleViewCase}
              onImageClick={openPreview}
            />
          ))}
        </div>

        {other.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="other-projects-wrap"
          >
            <h3 className="section-title other-title">{t.otherTitle}</h3>
            <div className="featured-projects-grid">
              {other.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewCase={handleViewCase}
                  onImageClick={openPreview}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Case Study Detail */}
        <AnimatePresence>
          {activeProject && (
            <motion.div 
              ref={caseRef} 
              className="case-study-expandable" 
              id={`case-${activeProject.id}`}
              initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
              animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
              exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="case-study-header">
                <div className="case-study-info">
                  <h3 className="case-study-title">{activeProject.title}</h3>
                  <div className="case-study-meta">
                    <span className="badge">{activeProject.role}</span>
                    {activeProject.company && (
                      <span className="badge badge-emerald">{activeProject.company}</span>
                    )}
                  </div>

                  <div className="case-study-body">
                    <h4>{t.problem}</h4>
                    <p>{activeProject.problem}</p>

                    <h4>{t.solution}</h4>
                    <p>{activeProject.solution}</p>

                    <h4>{t.mainFeatures}</h4>
                    <ul>
                      {activeProject.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>

                    <h4>{t.techHighlights}</h4>
                    <ul>
                      {activeProject.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>

                    <h4>{t.resultsImpact}</h4>
                    <ul>
                      {activeProject.results.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>

                    <h4>{t.techStack}</h4>
                    <div className="project-card-tags">
                      {activeProject.techStack.map((tech) => (
                        <span key={tech} className="badge badge-outline">{tech}</span>
                      ))}
                    </div>

                    <div className="case-study-links">
                      {activeProject.demoUrl && (
                        <a
                          href={activeProject.demoUrl}
                          className="btn btn-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                          {t.liveDemo}
                        </a>
                      )}
                      {activeProject.repoUrl && activeProject.repoUrl !== 'Private' ? (
                        <a
                          href={activeProject.repoUrl.startsWith('http') ? activeProject.repoUrl : `https://github.com/${activeProject.repoUrl}`}
                          className="btn btn-secondary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t.github}
                        </a>
                      ) : (
                        <span className="btn btn-secondary btn-disabled">
                          {t.privateRepo}
                        </span>
                      )}
                      <button className="btn btn-ghost btn-close-case" onClick={() => setActiveCase(null)}>
                        {t.closeDetail}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="case-study-sidebar">
                  <div 
                    className="case-study-main-img-wrap"
                    onClick={() => openPreview(activeProject.image, `${activeProject.title} - Main Screenshot`)}
                    role="button"
                    tabIndex="0"
                    aria-label={`Preview gambar utama ${activeProject.title}`}
                    onKeyDown={(e) => { if (e.key === 'Enter') openPreview(activeProject.image, `${activeProject.title} - Main Screenshot`); }}
                  >
                    <ImageWithSkeleton
                      src={activeProject.image}
                      alt={`${activeProject.title} main screenshot`}
                      className="case-study-main-skel"
                      imgClassName="case-study-main-img"
                    />
                    <div className="case-study-preview-overlay">
                       <span className="case-study-preview-text">{t.zoom}</span>
                    </div>
                  </div>

                  {activeProject.screenshots.length > 1 && (
                    <div className="case-study-screenshots-grid">
                      {activeProject.screenshots.map((ss, i) => (
                        <div 
                          key={i}
                          className="case-study-thumb-wrap"
                          onClick={() => openPreview(ss.src, ss.alt)}
                          role="button"
                          tabIndex="0"
                          aria-label={`Preview screenshot ${i+1}`}
                          onKeyDown={(e) => { if (e.key === 'Enter') openPreview(ss.src, ss.alt); }}
                        >
                          <ImageWithSkeleton
                            src={ss.src}
                            alt={ss.alt}
                            className="case-study-thumb-skel"
                            imgClassName="case-study-thumb-img"
                          />
                          <div className="case-study-preview-overlay">
                            <span className="case-study-preview-icon">🔍</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <PreviewModal
          isOpen={!!previewImage}
          onClose={() => setPreviewImage(null)}
          imageSrc={previewImage?.src}
          title={previewImage?.title}
          imageAlt={previewImage?.title}
        />
      </div>
    </section>
  );
}
