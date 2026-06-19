import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageWithSkeleton from './ImageWithSkeleton';

export default function ProjectCard({ project, onViewCase, onImageClick }) {
  return (
    <motion.article 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="project-card-image-wrap"
        onClick={() => onImageClick(project.image, project.title)}
        role="button"
        tabIndex="0"
        aria-label={`Preview gambar ${project.title}`}
        onKeyDown={(e) => { if (e.key === 'Enter') onImageClick(project.image, project.title); }}
      >
        <ImageWithSkeleton
          src={project.image}
          alt={`Screenshot ${project.title}`}
          className="project-img-skel"
          imgClassName="project-img"
        />
        <div className="project-preview-overlay">
          <span className="project-preview-text">Lihat Preview</span>
        </div>
      </div>
      
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-role">{project.role}</p>
        <p className="project-card-desc">{project.description}</p>

        <div className="project-card-tags">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="badge">{tech}</span>
          ))}
          {project.techStack.length > 4 && (
            <span className="badge badge-outline">+{project.techStack.length - 4}</span>
          )}
        </div>

        <div className="project-card-actions">
          <button
            className="btn btn-primary"
            onClick={() => onViewCase(project.id)}
            aria-label={`Studi Kasus ${project.title}`}
          >
            Studi Kasus
          </button>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Demo ${project.title}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Demo
            </a>
          )}
          {project.repoUrl && project.repoUrl !== 'Private' && (
            <a
              href={project.repoUrl.startsWith('http') ? project.repoUrl : `https://github.com/${project.repoUrl}`}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repository ${project.title}`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
