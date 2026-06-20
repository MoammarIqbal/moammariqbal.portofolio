import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../data/certifications';
import PreviewModal from './PreviewModal';
import ImageWithSkeleton from './ImageWithSkeleton';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const categories = ["All", "Web Development", "Software Development", "Data & Analytics", "IT / Digital Talent", "Other Certifications"];

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const { language } = useLanguage();
  const t = translations[language].certifications;
  const certList = certifications[language];

  const filteredCerts = certList.filter(cert => 
    activeCategory === "All" ? true : cert.category === activeCategory
  );

  const displayedCerts = showAll ? filteredCerts : filteredCerts.slice(0, 6);

  return (
    <section className="section section-alt" id="certifications">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">
          {t.subtitle}
        </p>

        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-secondary'} btn-tab`}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
            >
              {cat === "All" && language === 'id' ? 'Semua' : cat}
            </button>
          ))}
        </div>

        <motion.div layout className="certs-grid-new">
          <AnimatePresence>
            {displayedCerts.map((cert) => (
              <motion.article 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={cert.name} 
                className="cert-card-new"
                onClick={() => setSelectedCert(cert)}
                role="button"
                tabIndex="0"
                aria-label={`Lihat sertifikat ${cert.name}`}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedCert(cert); }}
              >
                {cert.preview && (
                  <div className="cert-preview-container">
                    <ImageWithSkeleton
                      src={cert.preview}
                      alt={`Preview ${cert.name}`}
                      className="cert-img-skel"
                      imgClassName="cert-img-new"
                    />
                  </div>
                )}
                <div className="cert-info-new">
                  <div className="cert-meta">
                    <span className="cert-cat-badge">{cert.category}</span>
                  </div>
                  <h3 className="cert-name-new">{cert.name}</h3>
                  <p className="cert-issuer-new">{cert.issuer}</p>
                  <p className="cert-desc-new">{cert.description}</p>
                  <button className="btn btn-secondary btn-full-width" onClick={(e) => { e.stopPropagation(); setSelectedCert(cert); }}>
                    {language === 'id' ? 'Lihat Sertifikat' : 'View Certificate'}
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCerts.length > displayedCerts.length && (
          <div className="certs-toggle-new">
            <button
              className="btn btn-secondary"
              onClick={() => setShowAll(true)}
            >
              {language === 'id' ? 'Tampilkan Semua' : 'Show All'} ({filteredCerts.length})
            </button>
          </div>
        )}

        <PreviewModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert?.name}
          description={selectedCert?.description}
          imageSrc={selectedCert?.preview}
          imageAlt={selectedCert?.name}
          fileUrl={selectedCert?.file}
          fileLabel={language === 'id' ? 'Buka File PDF Asli' : 'Open Original PDF File'}
        />
      </div>
    </section>
  );
}
