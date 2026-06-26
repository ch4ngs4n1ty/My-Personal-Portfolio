import { useState } from 'react';
import projectsData from '../data/projects.json';
import ImageModal from './ImageModal';
import ProjectInsights from './ProjectInsights';

function ProjectCard({ project, index }) {
  const [showInsights, setShowInsights] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const baseUrl = import.meta.env.BASE_URL;

  const num = String(index + 1).padStart(2, '0');
  const openInsights = () => setShowInsights(true);

  return (
    <>
      <article className="project-card reveal">
        <div className="project-bg" aria-hidden="true" />
        <div className="project-stripe" aria-hidden="true" />
        <div className="project-watermark" aria-hidden="true">{num}</div>
        <div className="project-edge" aria-hidden="true" />
        <div
          className="project-content"
          role="button"
          tabIndex={0}
          aria-label={`View insights for ${project.title}`}
          onClick={openInsights}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openInsights();
            }
          }}
        >
          <div className="project-num">{num}</div>
          <h3 className="project-title">{project.title}</h3>
          <div className="project-meta">
            {project.duration}
            {project.program && ` · ${project.program}`}
          </div>
          <p className="project-desc">{project.description}</p>
          <div className="project-tags">
            {project.tech.map((t) => (
              <span key={t} className="project-tag">{t}</span>
            ))}
          </div>
          <span className="project-cue">View insights →</span>
        </div>
        <div className="project-arrow" aria-hidden="true">→</div>
      </article>

      {showInsights && (
        <ProjectInsights
          project={project}
          index={index}
          baseUrl={baseUrl}
          onViewArtifact={setSelectedImage}
          onClose={() => setShowInsights(false)}
        />
      )}

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="section-header reveal">
        <span className="section-num">03</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-grid">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
